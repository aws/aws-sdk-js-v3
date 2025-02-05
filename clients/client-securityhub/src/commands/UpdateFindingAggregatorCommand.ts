// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateFindingAggregatorRequest, UpdateFindingAggregatorResponse } from "../models/models_2";
import { de_UpdateFindingAggregatorCommand, se_UpdateFindingAggregatorCommand } from "../protocols/Aws_restJson1";
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateFindingAggregatorCommand}.
 */
export interface UpdateFindingAggregatorCommandInput extends UpdateFindingAggregatorRequest {}
/**
 * @public
 *
 * The output of {@link UpdateFindingAggregatorCommand}.
 */
export interface UpdateFindingAggregatorCommandOutput extends UpdateFindingAggregatorResponse, __MetadataBearer {}

/**
 * <note>
 *             <p>The <i>aggregation Region</i> is now called the <i>home Region</i>.</p>
 *          </note>
 *          <p>Updates cross-Region aggregation settings. You can use this operation to update the Region linking mode and the list
 *         of included or excluded Amazon Web Services Regions. However, you can't use this operation to change the home Region.</p>
 *          <p>You can invoke this operation from the current home Region only.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, UpdateFindingAggregatorCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, UpdateFindingAggregatorCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new SecurityHubClient(config);
 * const input = { // UpdateFindingAggregatorRequest
 *   FindingAggregatorArn: "STRING_VALUE", // required
 *   RegionLinkingMode: "STRING_VALUE", // required
 *   Regions: [ // StringList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new UpdateFindingAggregatorCommand(input);
 * const response = await client.send(command);
 * // { // UpdateFindingAggregatorResponse
 * //   FindingAggregatorArn: "STRING_VALUE",
 * //   FindingAggregationRegion: "STRING_VALUE",
 * //   RegionLinkingMode: "STRING_VALUE",
 * //   Regions: [ // StringList
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param UpdateFindingAggregatorCommandInput - {@link UpdateFindingAggregatorCommandInput}
 * @returns {@link UpdateFindingAggregatorCommandOutput}
 * @see {@link UpdateFindingAggregatorCommandInput} for command's `input` shape.
 * @see {@link UpdateFindingAggregatorCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for SecurityHubClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform the action specified in the request.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Internal server error.</p>
 *
 * @throws {@link InvalidAccessException} (client fault)
 *  <p>The account doesn't have permission to perform this action.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because you supplied an invalid or out-of-range value for an
 *          input parameter.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request was rejected because it attempted to create resources beyond the current Amazon Web Services
 *          account or throttling limits. The error code describes the limit exceeded.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request was rejected because we can't find the specified resource.</p>
 *
 * @throws {@link SecurityHubServiceException}
 * <p>Base exception class for all service exceptions from SecurityHub service.</p>
 *
 * @public
 * @example To update cross-Region aggregation settings
 * ```javascript
 * // The following example updates the cross-Region aggregation configuration. You use this operation to change the list of linked Regions and the treatment of new Regions. However, you cannot use this operation to change the aggregation Region.
 * const input = {
 *   "FindingAggregatorArn": "arn:aws:securityhub:us-east-1:123456789012:finding-aggregator/a1b2c3d4-5678-90ab-cdef-EXAMPLE11111",
 *   "RegionLinkingMode": "SPECIFIED_REGIONS",
 *   "Regions": [
 *     "us-west-1",
 *     "us-west-2"
 *   ]
 * };
 * const command = new UpdateFindingAggregatorCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "FindingAggregationRegion": "us-east-1",
 *   "FindingAggregatorArn": "arn:aws:securityhub:us-east-1:123456789012:finding-aggregator/a1b2c3d4-5678-90ab-cdef-EXAMPLE11111",
 *   "RegionLinkingMode": "SPECIFIED_REGIONS",
 *   "Regions": [
 *     "us-west-1",
 *     "us-west-2"
 *   ]
 * }
 * *\/
 * // example id: to-update-cross-region-aggregation-settings-1678815536396
 * ```
 *
 */
export class UpdateFindingAggregatorCommand extends $Command
  .classBuilder<
    UpdateFindingAggregatorCommandInput,
    UpdateFindingAggregatorCommandOutput,
    SecurityHubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityHubClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SecurityHubAPIService", "UpdateFindingAggregator", {})
  .n("SecurityHubClient", "UpdateFindingAggregatorCommand")
  .f(void 0, void 0)
  .ser(se_UpdateFindingAggregatorCommand)
  .de(de_UpdateFindingAggregatorCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateFindingAggregatorRequest;
      output: UpdateFindingAggregatorResponse;
    };
    sdk: {
      input: UpdateFindingAggregatorCommandInput;
      output: UpdateFindingAggregatorCommandOutput;
    };
  };
}
