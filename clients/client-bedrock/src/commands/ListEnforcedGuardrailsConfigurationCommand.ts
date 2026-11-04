// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ListEnforcedGuardrailsConfigurationRequest,
  ListEnforcedGuardrailsConfigurationResponse,
} from "../models/models_0";
import { ListEnforcedGuardrailsConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListEnforcedGuardrailsConfigurationCommand}.
 */
export interface ListEnforcedGuardrailsConfigurationCommandInput extends ListEnforcedGuardrailsConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link ListEnforcedGuardrailsConfigurationCommand}.
 */
export interface ListEnforcedGuardrailsConfigurationCommandOutput extends ListEnforcedGuardrailsConfigurationResponse, __MetadataBearer {}

/**
 * Lists the account-level enforced guardrail configurations.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockClient, ListEnforcedGuardrailsConfigurationCommand } from "@aws-sdk/client-bedrock"; // ES Modules import
 * // const { BedrockClient, ListEnforcedGuardrailsConfigurationCommand } = require("@aws-sdk/client-bedrock"); // CommonJS import
 * // import type { BedrockClientConfig } from "@aws-sdk/client-bedrock";
 * const config = {}; // type is BedrockClientConfig
 * const client = new BedrockClient(config);
 * const input = { // ListEnforcedGuardrailsConfigurationRequest
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListEnforcedGuardrailsConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // ListEnforcedGuardrailsConfigurationResponse
 * //   guardrailsConfig: [ // AccountEnforcedGuardrailsOutputConfiguration // required
 * //     { // AccountEnforcedGuardrailOutputConfiguration
 * //       configId: "STRING_VALUE",
 * //       guardrailArn: "STRING_VALUE",
 * //       guardrailId: "STRING_VALUE",
 * //       inputTags: "HONOR" || "IGNORE",
 * //       selectiveContentGuarding: { // SelectiveContentGuarding
 * //         system: "SELECTIVE" || "COMPREHENSIVE",
 * //         messages: "SELECTIVE" || "COMPREHENSIVE",
 * //       },
 * //       guardrailVersion: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       createdBy: "STRING_VALUE",
 * //       updatedAt: new Date("TIMESTAMP"),
 * //       updatedBy: "STRING_VALUE",
 * //       owner: "STRING_VALUE",
 * //       modelEnforcement: { // ModelEnforcement
 * //         includedModels: [ // IncludedModelsList // required
 * //           "STRING_VALUE",
 * //         ],
 * //         excludedModels: [ // ExcludedModelsList // required
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListEnforcedGuardrailsConfigurationCommandInput - {@link ListEnforcedGuardrailsConfigurationCommandInput}
 * @returns {@link ListEnforcedGuardrailsConfigurationCommandOutput}
 * @see {@link ListEnforcedGuardrailsConfigurationCommandInput} for command's `input` shape.
 * @see {@link ListEnforcedGuardrailsConfigurationCommandOutput} for command's `response` shape.
 * @see {@link BedrockClientResolvedConfig | config} for BedrockClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The request is denied because of missing access permissions.
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
export class ListEnforcedGuardrailsConfigurationCommand extends command<ListEnforcedGuardrailsConfigurationCommandInput, ListEnforcedGuardrailsConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "ListEnforcedGuardrailsConfiguration",
  ListEnforcedGuardrailsConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListEnforcedGuardrailsConfigurationRequest;
      output: ListEnforcedGuardrailsConfigurationResponse;
    };
    sdk: {
      input: ListEnforcedGuardrailsConfigurationCommandInput;
      output: ListEnforcedGuardrailsConfigurationCommandOutput;
    };
  };
}
