// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  PutEnforcedGuardrailConfigurationRequest,
  PutEnforcedGuardrailConfigurationResponse,
} from "../models/models_0";
import { PutEnforcedGuardrailConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutEnforcedGuardrailConfigurationCommand}.
 */
export interface PutEnforcedGuardrailConfigurationCommandInput extends PutEnforcedGuardrailConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link PutEnforcedGuardrailConfigurationCommand}.
 */
export interface PutEnforcedGuardrailConfigurationCommandOutput extends PutEnforcedGuardrailConfigurationResponse, __MetadataBearer {}

/**
 * Sets the account-level enforced guardrail configuration.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockClient, PutEnforcedGuardrailConfigurationCommand } from "@aws-sdk/client-bedrock"; // ES Modules import
 * // const { BedrockClient, PutEnforcedGuardrailConfigurationCommand } = require("@aws-sdk/client-bedrock"); // CommonJS import
 * // import type { BedrockClientConfig } from "@aws-sdk/client-bedrock";
 * const config = {}; // type is BedrockClientConfig
 * const client = new BedrockClient(config);
 * const input = { // PutEnforcedGuardrailConfigurationRequest
 *   configId: "STRING_VALUE",
 *   guardrailInferenceConfig: { // AccountEnforcedGuardrailInferenceInputConfiguration
 *     guardrailIdentifier: "STRING_VALUE", // required
 *     guardrailVersion: "STRING_VALUE", // required
 *     selectiveContentGuarding: { // SelectiveContentGuarding
 *       system: "SELECTIVE" || "COMPREHENSIVE",
 *       messages: "SELECTIVE" || "COMPREHENSIVE",
 *     },
 *     modelEnforcement: { // ModelEnforcement
 *       includedModels: [ // IncludedModelsList // required
 *         "STRING_VALUE",
 *       ],
 *       excludedModels: [ // ExcludedModelsList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   },
 * };
 * const command = new PutEnforcedGuardrailConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // PutEnforcedGuardrailConfigurationResponse
 * //   configId: "STRING_VALUE",
 * //   updatedAt: new Date("TIMESTAMP"),
 * //   updatedBy: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param PutEnforcedGuardrailConfigurationCommandInput - {@link PutEnforcedGuardrailConfigurationCommandInput}
 * @returns {@link PutEnforcedGuardrailConfigurationCommandOutput}
 * @see {@link PutEnforcedGuardrailConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutEnforcedGuardrailConfigurationCommandOutput} for command's `response` shape.
 * @see {@link BedrockClientResolvedConfig | config} for BedrockClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The request is denied because of missing access permissions.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Error occurred because of a conflict while performing an operation.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal server error occurred. Retry your request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource Amazon Resource Name (ARN) was not found. Check the Amazon Resource Name (ARN) and try your request again.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The number of requests exceeds the limit. Resubmit your request later.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Input validation failed. Check your request parameters and retry the request.
 *
 * @throws {@link BedrockServiceException}
 *
 * Base exception class for all service exceptions from Bedrock service.
 *
 * @public
 */
export class PutEnforcedGuardrailConfigurationCommand extends command<PutEnforcedGuardrailConfigurationCommandInput, PutEnforcedGuardrailConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "PutEnforcedGuardrailConfiguration",
  PutEnforcedGuardrailConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutEnforcedGuardrailConfigurationRequest;
      output: PutEnforcedGuardrailConfigurationResponse;
    };
    sdk: {
      input: PutEnforcedGuardrailConfigurationCommandInput;
      output: PutEnforcedGuardrailConfigurationCommandOutput;
    };
  };
}
