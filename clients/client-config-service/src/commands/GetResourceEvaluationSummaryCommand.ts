// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetResourceEvaluationSummaryRequest, GetResourceEvaluationSummaryResponse } from "../models/models_0";
import {
  de_GetResourceEvaluationSummaryCommand,
  se_GetResourceEvaluationSummaryCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetResourceEvaluationSummaryCommand}.
 */
export interface GetResourceEvaluationSummaryCommandInput extends GetResourceEvaluationSummaryRequest {}
/**
 * @public
 *
 * The output of {@link GetResourceEvaluationSummaryCommand}.
 */
export interface GetResourceEvaluationSummaryCommandOutput
  extends GetResourceEvaluationSummaryResponse,
    __MetadataBearer {}

/**
 * <p>Returns a summary of resource evaluation for the specified resource evaluation ID from the proactive rules that were run.
 * 			The results indicate which evaluation context was used to evaluate the rules, which resource details were evaluated,
 * 			the evaluation mode that was run, and whether the resource details comply with the configuration of the proactive rules. </p>
 *          <note>
 *             <p>To see additional information about the evaluation result, such as which rule flagged a resource as NON_COMPLIANT, use the <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_GetComplianceDetailsByResource.html">GetComplianceDetailsByResource</a> API.
 * 			For more information, see the  <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_GetResourceEvaluationSummary.html#API_GetResourceEvaluationSummary_Examples">Examples</a> section.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, GetResourceEvaluationSummaryCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, GetResourceEvaluationSummaryCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * // import type { ConfigServiceClientConfig } from "@aws-sdk/client-config-service";
 * const config = {}; // type is ConfigServiceClientConfig
 * const client = new ConfigServiceClient(config);
 * const input = { // GetResourceEvaluationSummaryRequest
 *   ResourceEvaluationId: "STRING_VALUE", // required
 * };
 * const command = new GetResourceEvaluationSummaryCommand(input);
 * const response = await client.send(command);
 * // { // GetResourceEvaluationSummaryResponse
 * //   ResourceEvaluationId: "STRING_VALUE",
 * //   EvaluationMode: "DETECTIVE" || "PROACTIVE",
 * //   EvaluationStatus: { // EvaluationStatus
 * //     Status: "IN_PROGRESS" || "FAILED" || "SUCCEEDED", // required
 * //     FailureReason: "STRING_VALUE",
 * //   },
 * //   EvaluationStartTimestamp: new Date("TIMESTAMP"),
 * //   Compliance: "COMPLIANT" || "NON_COMPLIANT" || "NOT_APPLICABLE" || "INSUFFICIENT_DATA",
 * //   EvaluationContext: { // EvaluationContext
 * //     EvaluationContextIdentifier: "STRING_VALUE",
 * //   },
 * //   ResourceDetails: { // ResourceDetails
 * //     ResourceId: "STRING_VALUE", // required
 * //     ResourceType: "STRING_VALUE", // required
 * //     ResourceConfiguration: "STRING_VALUE", // required
 * //     ResourceConfigurationSchemaType: "CFN_RESOURCE_SCHEMA",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetResourceEvaluationSummaryCommandInput - {@link GetResourceEvaluationSummaryCommandInput}
 * @returns {@link GetResourceEvaluationSummaryCommandOutput}
 * @see {@link GetResourceEvaluationSummaryCommandInput} for command's `input` shape.
 * @see {@link GetResourceEvaluationSummaryCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for ConfigServiceClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>You have specified a resource that does not exist.</p>
 *
 * @throws {@link ConfigServiceServiceException}
 * <p>Base exception class for all service exceptions from ConfigService service.</p>
 *
 *
 * @public
 */
export class GetResourceEvaluationSummaryCommand extends $Command
  .classBuilder<
    GetResourceEvaluationSummaryCommandInput,
    GetResourceEvaluationSummaryCommandOutput,
    ConfigServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConfigServiceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("StarlingDoveService", "GetResourceEvaluationSummary", {})
  .n("ConfigServiceClient", "GetResourceEvaluationSummaryCommand")
  .f(void 0, void 0)
  .ser(se_GetResourceEvaluationSummaryCommand)
  .de(de_GetResourceEvaluationSummaryCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetResourceEvaluationSummaryRequest;
      output: GetResourceEvaluationSummaryResponse;
    };
    sdk: {
      input: GetResourceEvaluationSummaryCommandInput;
      output: GetResourceEvaluationSummaryCommandOutput;
    };
  };
}
