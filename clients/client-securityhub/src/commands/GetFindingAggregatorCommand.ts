// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetFindingAggregatorRequest, GetFindingAggregatorResponse } from "../models/models_2";
import { de_GetFindingAggregatorCommand, se_GetFindingAggregatorCommand } from "../protocols/Aws_restJson1";
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetFindingAggregatorCommand}.
 */
export interface GetFindingAggregatorCommandInput extends GetFindingAggregatorRequest {}
/**
 * @public
 *
 * The output of {@link GetFindingAggregatorCommand}.
 */
export interface GetFindingAggregatorCommandOutput extends GetFindingAggregatorResponse, __MetadataBearer {}

/**
 * <note>
 *             <p>The <i>aggregation Region</i> is now called the <i>home Region</i>.</p>
 *          </note>
 *          <p>Returns the current configuration in the calling account for cross-Region aggregation. A finding aggregator is a resource that establishes
 * the home Region and any linked Regions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, GetFindingAggregatorCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, GetFindingAggregatorCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const input = { // GetFindingAggregatorRequest
 *   FindingAggregatorArn: "STRING_VALUE", // required
 * };
 * const command = new GetFindingAggregatorCommand(input);
 * const response = await client.send(command);
 * // { // GetFindingAggregatorResponse
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
 * @param GetFindingAggregatorCommandInput - {@link GetFindingAggregatorCommandInput}
 * @returns {@link GetFindingAggregatorCommandOutput}
 * @see {@link GetFindingAggregatorCommandInput} for command's `input` shape.
 * @see {@link GetFindingAggregatorCommandOutput} for command's `response` shape.
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
 *
 * @example To get cross-Region aggregation details
 * ```javascript
 * // The following example returns cross-Region aggregation details for the requesting account.
 * const input = {
 *   FindingAggregatorArn: "arn:aws:securityhub:us-east-1:123456789012:finding-aggregator/a1b2c3d4-5678-90ab-cdef-EXAMPLE11111"
 * };
 * const command = new GetFindingAggregatorCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   FindingAggregationRegion: "us-east-1",
 *   FindingAggregatorArn: "arn:aws:securityhub:us-east-1:123456789012:finding-aggregator/a1b2c3d4-5678-90ab-cdef-EXAMPLE11111",
 *   RegionLinkingMode: "SPECIFIED_REGIONS",
 *   Regions: [
 *     "us-west-1",
 *     "us-west-2"
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetFindingAggregatorCommand extends $Command
  .classBuilder<
    GetFindingAggregatorCommandInput,
    GetFindingAggregatorCommandOutput,
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
  .s("SecurityHubAPIService", "GetFindingAggregator", {})
  .n("SecurityHubClient", "GetFindingAggregatorCommand")
  .f(void 0, void 0)
  .ser(se_GetFindingAggregatorCommand)
  .de(de_GetFindingAggregatorCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetFindingAggregatorRequest;
      output: GetFindingAggregatorResponse;
    };
    sdk: {
      input: GetFindingAggregatorCommandInput;
      output: GetFindingAggregatorCommandOutput;
    };
  };
}
