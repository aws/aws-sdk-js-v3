// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteSamplingRuleRequest, DeleteSamplingRuleResult } from "../models/models_0";
import { de_DeleteSamplingRuleCommand, se_DeleteSamplingRuleCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, XRayClientResolvedConfig } from "../XRayClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteSamplingRuleCommand}.
 */
export interface DeleteSamplingRuleCommandInput extends DeleteSamplingRuleRequest {}
/**
 * @public
 *
 * The output of {@link DeleteSamplingRuleCommand}.
 */
export interface DeleteSamplingRuleCommandOutput extends DeleteSamplingRuleResult, __MetadataBearer {}

/**
 * <p>Deletes a sampling rule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { XRayClient, DeleteSamplingRuleCommand } from "@aws-sdk/client-xray"; // ES Modules import
 * // const { XRayClient, DeleteSamplingRuleCommand } = require("@aws-sdk/client-xray"); // CommonJS import
 * const client = new XRayClient(config);
 * const input = { // DeleteSamplingRuleRequest
 *   RuleName: "STRING_VALUE",
 *   RuleARN: "STRING_VALUE",
 * };
 * const command = new DeleteSamplingRuleCommand(input);
 * const response = await client.send(command);
 * // { // DeleteSamplingRuleResult
 * //   SamplingRuleRecord: { // SamplingRuleRecord
 * //     SamplingRule: { // SamplingRule
 * //       RuleName: "STRING_VALUE",
 * //       RuleARN: "STRING_VALUE",
 * //       ResourceARN: "STRING_VALUE", // required
 * //       Priority: Number("int"), // required
 * //       FixedRate: Number("double"), // required
 * //       ReservoirSize: Number("int"), // required
 * //       ServiceName: "STRING_VALUE", // required
 * //       ServiceType: "STRING_VALUE", // required
 * //       Host: "STRING_VALUE", // required
 * //       HTTPMethod: "STRING_VALUE", // required
 * //       URLPath: "STRING_VALUE", // required
 * //       Version: Number("int"), // required
 * //       Attributes: { // AttributeMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //     CreatedAt: new Date("TIMESTAMP"),
 * //     ModifiedAt: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteSamplingRuleCommandInput - {@link DeleteSamplingRuleCommandInput}
 * @returns {@link DeleteSamplingRuleCommandOutput}
 * @see {@link DeleteSamplingRuleCommandInput} for command's `input` shape.
 * @see {@link DeleteSamplingRuleCommandOutput} for command's `response` shape.
 * @see {@link XRayClientResolvedConfig | config} for XRayClient's `config` shape.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is missing required parameters or has invalid parameters.</p>
 *
 * @throws {@link ThrottledException} (client fault)
 *  <p>The request exceeds the maximum number of requests per second.</p>
 *
 * @throws {@link XRayServiceException}
 * <p>Base exception class for all service exceptions from XRay service.</p>
 *
 * @public
 */
export class DeleteSamplingRuleCommand extends $Command
  .classBuilder<
    DeleteSamplingRuleCommandInput,
    DeleteSamplingRuleCommandOutput,
    XRayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: XRayClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSXRay", "DeleteSamplingRule", {})
  .n("XRayClient", "DeleteSamplingRuleCommand")
  .f(void 0, void 0)
  .ser(se_DeleteSamplingRuleCommand)
  .de(de_DeleteSamplingRuleCommand)
  .build() {}
