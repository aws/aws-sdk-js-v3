// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateIndexingRuleRequest, UpdateIndexingRuleResult } from "../models/models_0";
import { UpdateIndexingRule } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, XRayClientResolvedConfig } from "../XRayClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateIndexingRuleCommand}.
 */
export interface UpdateIndexingRuleCommandInput extends UpdateIndexingRuleRequest {}
/**
 * @public
 *
 * The output of {@link UpdateIndexingRuleCommand}.
 */
export interface UpdateIndexingRuleCommandOutput extends UpdateIndexingRuleResult, __MetadataBearer {}

/**
 * <p>
 * Modifies an indexing rule’s configuration.
 * </p>
 *          <p>Indexing rules are used for determining the sampling rate for spans indexed from CloudWatch Logs. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Transaction-Search.html">Transaction Search</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { XRayClient, UpdateIndexingRuleCommand } from "@aws-sdk/client-xray"; // ES Modules import
 * // const { XRayClient, UpdateIndexingRuleCommand } = require("@aws-sdk/client-xray"); // CommonJS import
 * // import type { XRayClientConfig } from "@aws-sdk/client-xray";
 * const config = {}; // type is XRayClientConfig
 * const client = new XRayClient(config);
 * const input = { // UpdateIndexingRuleRequest
 *   Name: "STRING_VALUE", // required
 *   Rule: { // IndexingRuleValueUpdate Union: only one key present
 *     Probabilistic: { // ProbabilisticRuleValueUpdate
 *       DesiredSamplingPercentage: Number("double"), // required
 *     },
 *   },
 * };
 * const command = new UpdateIndexingRuleCommand(input);
 * const response = await client.send(command);
 * // { // UpdateIndexingRuleResult
 * //   IndexingRule: { // IndexingRule
 * //     Name: "STRING_VALUE",
 * //     ModifiedAt: new Date("TIMESTAMP"),
 * //     Rule: { // IndexingRuleValue Union: only one key present
 * //       Probabilistic: { // ProbabilisticRuleValue
 * //         DesiredSamplingPercentage: Number("double"), // required
 * //         ActualSamplingPercentage: Number("double"),
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateIndexingRuleCommandInput - {@link UpdateIndexingRuleCommandInput}
 * @returns {@link UpdateIndexingRuleCommandOutput}
 * @see {@link UpdateIndexingRuleCommandInput} for command's `input` shape.
 * @see {@link UpdateIndexingRuleCommandOutput} for command's `response` shape.
 * @see {@link XRayClientResolvedConfig | config} for XRayClient's `config` shape.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is missing required parameters or has invalid parameters.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource was not found. Verify that the name or Amazon Resource Name (ARN) of the resource is
 *       correct.</p>
 *
 * @throws {@link ThrottledException} (client fault)
 *  <p>The request exceeds the maximum number of requests per second.</p>
 *
 * @throws {@link XRayServiceException}
 * <p>Base exception class for all service exceptions from XRay service.</p>
 *
 *
 * @public
 */
export class UpdateIndexingRuleCommand extends $Command
  .classBuilder<
    UpdateIndexingRuleCommandInput,
    UpdateIndexingRuleCommandOutput,
    XRayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: XRayClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSXRay", "UpdateIndexingRule", {})
  .n("XRayClient", "UpdateIndexingRuleCommand")
  .sc(UpdateIndexingRule)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateIndexingRuleRequest;
      output: UpdateIndexingRuleResult;
    };
    sdk: {
      input: UpdateIndexingRuleCommandInput;
      output: UpdateIndexingRuleCommandOutput;
    };
  };
}
