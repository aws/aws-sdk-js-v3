// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { PutExternalEvaluationRequest, PutExternalEvaluationResponse } from "../models/models_0";
import { PutExternalEvaluation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutExternalEvaluationCommand}.
 */
export interface PutExternalEvaluationCommandInput extends PutExternalEvaluationRequest {}
/**
 * @public
 *
 * The output of {@link PutExternalEvaluationCommand}.
 */
export interface PutExternalEvaluationCommandOutput extends PutExternalEvaluationResponse, __MetadataBearer {}

/**
 * <p>Add or updates the evaluations for process checks.
 * 			This API checks if the rule is a process check when the name of the Config rule is provided.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, PutExternalEvaluationCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, PutExternalEvaluationCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * // import type { ConfigServiceClientConfig } from "@aws-sdk/client-config-service";
 * const config = {}; // type is ConfigServiceClientConfig
 * const client = new ConfigServiceClient(config);
 * const input = { // PutExternalEvaluationRequest
 *   ConfigRuleName: "STRING_VALUE", // required
 *   ExternalEvaluation: { // ExternalEvaluation
 *     ComplianceResourceType: "STRING_VALUE", // required
 *     ComplianceResourceId: "STRING_VALUE", // required
 *     ComplianceType: "COMPLIANT" || "NON_COMPLIANT" || "NOT_APPLICABLE" || "INSUFFICIENT_DATA", // required
 *     Annotation: "STRING_VALUE",
 *     OrderingTimestamp: new Date("TIMESTAMP"), // required
 *   },
 * };
 * const command = new PutExternalEvaluationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutExternalEvaluationCommandInput - {@link PutExternalEvaluationCommandInput}
 * @returns {@link PutExternalEvaluationCommandOutput}
 * @see {@link PutExternalEvaluationCommandInput} for command's `input` shape.
 * @see {@link PutExternalEvaluationCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for ConfigServiceClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more of the specified parameters are not valid. Verify
 * 			that your parameters are valid and try again.</p>
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
export class PutExternalEvaluationCommand extends $Command
  .classBuilder<
    PutExternalEvaluationCommandInput,
    PutExternalEvaluationCommandOutput,
    ConfigServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConfigServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("StarlingDoveService", "PutExternalEvaluation", {})
  .n("ConfigServiceClient", "PutExternalEvaluationCommand")
  .sc(PutExternalEvaluation$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutExternalEvaluationRequest;
      output: {};
    };
    sdk: {
      input: PutExternalEvaluationCommandInput;
      output: PutExternalEvaluationCommandOutput;
    };
  };
}
