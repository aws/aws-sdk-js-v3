// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateFindingAggregatorRequest, CreateFindingAggregatorResponse } from "../models/models_2";
import { de_CreateFindingAggregatorCommand, se_CreateFindingAggregatorCommand } from "../protocols/Aws_restJson1";
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateFindingAggregatorCommand}.
 */
export interface CreateFindingAggregatorCommandInput extends CreateFindingAggregatorRequest {}
/**
 * @public
 *
 * The output of {@link CreateFindingAggregatorCommand}.
 */
export interface CreateFindingAggregatorCommandOutput extends CreateFindingAggregatorResponse, __MetadataBearer {}

/**
 * <note>
 *             <p>The <i>aggregation Region</i> is now called the <i>home Region</i>.</p>
 *          </note>
 *          <p>Used to enable cross-Region aggregation. This operation can be invoked from the home Region only.</p>
 *          <p>For information about how cross-Region aggregation works, see <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/finding-aggregation.html">Understanding cross-Region aggregation in Security Hub</a> in the <i>Security Hub User Guide</i>.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, CreateFindingAggregatorCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, CreateFindingAggregatorCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new SecurityHubClient(config);
 * const input = { // CreateFindingAggregatorRequest
 *   RegionLinkingMode: "STRING_VALUE", // required
 *   Regions: [ // StringList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new CreateFindingAggregatorCommand(input);
 * const response = await client.send(command);
 * // { // CreateFindingAggregatorResponse
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
 * @param CreateFindingAggregatorCommandInput - {@link CreateFindingAggregatorCommandInput}
 * @returns {@link CreateFindingAggregatorCommandOutput}
 * @see {@link CreateFindingAggregatorCommandInput} for command's `input` shape.
 * @see {@link CreateFindingAggregatorCommandOutput} for command's `response` shape.
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
 * @throws {@link SecurityHubServiceException}
 * <p>Base exception class for all service exceptions from SecurityHub service.</p>
 *
 * @public
 * @example To enable cross-Region aggregation
 * ```javascript
 * // The following example creates a finding aggregator. This is required to enable cross-Region aggregation.
 * const input = {
 *   "RegionLinkingMode": "SPECIFIED_REGIONS",
 *   "Regions": [
 *     "us-west-1",
 *     "us-west-2"
 *   ]
 * };
 * const command = new CreateFindingAggregatorCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "FindingAggregationRegion": "us-east-1",
 *   "FindingAggregatorArn": "arn:aws:securityhub:us-east-1:222222222222:finding-aggregator/a1b2c3d4-5678-90ab-cdef-EXAMPLE11111",
 *   "RegionLinkingMode": "SPECIFIED_REGIONS",
 *   "Regions": [
 *     "us-west-1",
 *     "us-west-2"
 *   ]
 * }
 * *\/
 * // example id: to-enable-cross-region-aggregation-1674766716226
 * ```
 *
 */
export class CreateFindingAggregatorCommand extends $Command
  .classBuilder<
    CreateFindingAggregatorCommandInput,
    CreateFindingAggregatorCommandOutput,
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
  .s("SecurityHubAPIService", "CreateFindingAggregator", {})
  .n("SecurityHubClient", "CreateFindingAggregatorCommand")
  .f(void 0, void 0)
  .ser(se_CreateFindingAggregatorCommand)
  .de(de_CreateFindingAggregatorCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateFindingAggregatorRequest;
      output: CreateFindingAggregatorResponse;
    };
    sdk: {
      input: CreateFindingAggregatorCommandInput;
      output: CreateFindingAggregatorCommandOutput;
    };
  };
}
