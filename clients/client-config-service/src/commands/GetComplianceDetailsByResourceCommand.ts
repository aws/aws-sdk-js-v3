// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetComplianceDetailsByResourceRequest, GetComplianceDetailsByResourceResponse } from "../models/models_0";
import {
  de_GetComplianceDetailsByResourceCommand,
  se_GetComplianceDetailsByResourceCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetComplianceDetailsByResourceCommand}.
 */
export interface GetComplianceDetailsByResourceCommandInput extends GetComplianceDetailsByResourceRequest {}
/**
 * @public
 *
 * The output of {@link GetComplianceDetailsByResourceCommand}.
 */
export interface GetComplianceDetailsByResourceCommandOutput
  extends GetComplianceDetailsByResourceResponse,
    __MetadataBearer {}

/**
 * <p>Returns the evaluation results for the specified Amazon Web Services resource.
 * 			The results indicate which Config rules were used to evaluate
 * 			the resource, when each rule was last invoked, and whether the resource
 * 			complies with each rule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, GetComplianceDetailsByResourceCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, GetComplianceDetailsByResourceCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const input = { // GetComplianceDetailsByResourceRequest
 *   ResourceType: "STRING_VALUE",
 *   ResourceId: "STRING_VALUE",
 *   ComplianceTypes: [ // ComplianceTypes
 *     "COMPLIANT" || "NON_COMPLIANT" || "NOT_APPLICABLE" || "INSUFFICIENT_DATA",
 *   ],
 *   NextToken: "STRING_VALUE",
 *   ResourceEvaluationId: "STRING_VALUE",
 * };
 * const command = new GetComplianceDetailsByResourceCommand(input);
 * const response = await client.send(command);
 * // { // GetComplianceDetailsByResourceResponse
 * //   EvaluationResults: [ // EvaluationResults
 * //     { // EvaluationResult
 * //       EvaluationResultIdentifier: { // EvaluationResultIdentifier
 * //         EvaluationResultQualifier: { // EvaluationResultQualifier
 * //           ConfigRuleName: "STRING_VALUE",
 * //           ResourceType: "STRING_VALUE",
 * //           ResourceId: "STRING_VALUE",
 * //           EvaluationMode: "DETECTIVE" || "PROACTIVE",
 * //         },
 * //         OrderingTimestamp: new Date("TIMESTAMP"),
 * //         ResourceEvaluationId: "STRING_VALUE",
 * //       },
 * //       ComplianceType: "COMPLIANT" || "NON_COMPLIANT" || "NOT_APPLICABLE" || "INSUFFICIENT_DATA",
 * //       ResultRecordedTime: new Date("TIMESTAMP"),
 * //       ConfigRuleInvokedTime: new Date("TIMESTAMP"),
 * //       Annotation: "STRING_VALUE",
 * //       ResultToken: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetComplianceDetailsByResourceCommandInput - {@link GetComplianceDetailsByResourceCommandInput}
 * @returns {@link GetComplianceDetailsByResourceCommandOutput}
 * @see {@link GetComplianceDetailsByResourceCommandInput} for command's `input` shape.
 * @see {@link GetComplianceDetailsByResourceCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for ConfigServiceClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more of the specified parameters are not valid. Verify
 * 			that your parameters are valid and try again.</p>
 *
 * @throws {@link ConfigServiceServiceException}
 * <p>Base exception class for all service exceptions from ConfigService service.</p>
 *
 *
 * @public
 */
export class GetComplianceDetailsByResourceCommand extends $Command
  .classBuilder<
    GetComplianceDetailsByResourceCommandInput,
    GetComplianceDetailsByResourceCommandOutput,
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
  .s("StarlingDoveService", "GetComplianceDetailsByResource", {})
  .n("ConfigServiceClient", "GetComplianceDetailsByResourceCommand")
  .f(void 0, void 0)
  .ser(se_GetComplianceDetailsByResourceCommand)
  .de(de_GetComplianceDetailsByResourceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetComplianceDetailsByResourceRequest;
      output: GetComplianceDetailsByResourceResponse;
    };
    sdk: {
      input: GetComplianceDetailsByResourceCommandInput;
      output: GetComplianceDetailsByResourceCommandOutput;
    };
  };
}
