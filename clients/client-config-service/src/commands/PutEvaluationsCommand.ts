// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { PutEvaluationsRequest, PutEvaluationsResponse } from "../models/models_1";
import { PutEvaluations } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutEvaluationsCommand}.
 */
export interface PutEvaluationsCommandInput extends PutEvaluationsRequest {}
/**
 * @public
 *
 * The output of {@link PutEvaluationsCommand}.
 */
export interface PutEvaluationsCommandOutput extends PutEvaluationsResponse, __MetadataBearer {}

/**
 * <p>Used by an Lambda function to deliver evaluation results to
 * 			Config. This operation is required in every Lambda function
 * 			that is invoked by an Config rule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, PutEvaluationsCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, PutEvaluationsCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * // import type { ConfigServiceClientConfig } from "@aws-sdk/client-config-service";
 * const config = {}; // type is ConfigServiceClientConfig
 * const client = new ConfigServiceClient(config);
 * const input = { // PutEvaluationsRequest
 *   Evaluations: [ // Evaluations
 *     { // Evaluation
 *       ComplianceResourceType: "STRING_VALUE", // required
 *       ComplianceResourceId: "STRING_VALUE", // required
 *       ComplianceType: "COMPLIANT" || "NON_COMPLIANT" || "NOT_APPLICABLE" || "INSUFFICIENT_DATA", // required
 *       Annotation: "STRING_VALUE",
 *       OrderingTimestamp: new Date("TIMESTAMP"), // required
 *     },
 *   ],
 *   ResultToken: "STRING_VALUE", // required
 *   TestMode: true || false,
 * };
 * const command = new PutEvaluationsCommand(input);
 * const response = await client.send(command);
 * // { // PutEvaluationsResponse
 * //   FailedEvaluations: [ // Evaluations
 * //     { // Evaluation
 * //       ComplianceResourceType: "STRING_VALUE", // required
 * //       ComplianceResourceId: "STRING_VALUE", // required
 * //       ComplianceType: "COMPLIANT" || "NON_COMPLIANT" || "NOT_APPLICABLE" || "INSUFFICIENT_DATA", // required
 * //       Annotation: "STRING_VALUE",
 * //       OrderingTimestamp: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param PutEvaluationsCommandInput - {@link PutEvaluationsCommandInput}
 * @returns {@link PutEvaluationsCommandOutput}
 * @see {@link PutEvaluationsCommandInput} for command's `input` shape.
 * @see {@link PutEvaluationsCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for ConfigServiceClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more of the specified parameters are not valid. Verify
 * 			that your parameters are valid and try again.</p>
 *
 * @throws {@link InvalidResultTokenException} (client fault)
 *  <p>The specified <code>ResultToken</code> is not valid.</p>
 *
 * @throws {@link NoSuchConfigRuleException} (client fault)
 *  <p>The Config rule in the request is not valid. Verify that the rule is an Config Process Check rule, that the rule name is correct, and that valid Amazon Resouce Names (ARNs) are used before trying again.</p>
 *
 * @throws {@link ConfigServiceServiceException}
 * <p>Base exception class for all service exceptions from ConfigService service.</p>
 *
 *
 * @public
 */
export class PutEvaluationsCommand extends $Command
  .classBuilder<
    PutEvaluationsCommandInput,
    PutEvaluationsCommandOutput,
    ConfigServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConfigServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("StarlingDoveService", "PutEvaluations", {})
  .n("ConfigServiceClient", "PutEvaluationsCommand")
  .sc(PutEvaluations)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutEvaluationsRequest;
      output: PutEvaluationsResponse;
    };
    sdk: {
      input: PutEvaluationsCommandInput;
      output: PutEvaluationsCommandOutput;
    };
  };
}
