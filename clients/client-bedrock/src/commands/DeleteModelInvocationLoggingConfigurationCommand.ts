// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DeleteModelInvocationLoggingConfigurationRequest,
  DeleteModelInvocationLoggingConfigurationResponse,
} from "../models/models_1";
import { DeleteModelInvocationLoggingConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteModelInvocationLoggingConfigurationCommand}.
 */
export interface DeleteModelInvocationLoggingConfigurationCommandInput extends DeleteModelInvocationLoggingConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteModelInvocationLoggingConfigurationCommand}.
 */
export interface DeleteModelInvocationLoggingConfigurationCommandOutput extends DeleteModelInvocationLoggingConfigurationResponse, __MetadataBearer {}

/**
 * Delete the invocation logging.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockClient, DeleteModelInvocationLoggingConfigurationCommand } from "@aws-sdk/client-bedrock"; // ES Modules import
 * // const { BedrockClient, DeleteModelInvocationLoggingConfigurationCommand } = require("@aws-sdk/client-bedrock"); // CommonJS import
 * // import type { BedrockClientConfig } from "@aws-sdk/client-bedrock";
 * const config = {}; // type is BedrockClientConfig
 * const client = new BedrockClient(config);
 * const input = {};
 * const command = new DeleteModelInvocationLoggingConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteModelInvocationLoggingConfigurationCommandInput - {@link DeleteModelInvocationLoggingConfigurationCommandInput}
 * @returns {@link DeleteModelInvocationLoggingConfigurationCommandOutput}
 * @see {@link DeleteModelInvocationLoggingConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteModelInvocationLoggingConfigurationCommandOutput} for command's `response` shape.
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
 * @throws {@link ThrottlingException} (client fault)
 *
 * The number of requests exceeds the limit. Resubmit your request later.
 *
 * @throws {@link BedrockServiceException}
 *
 * Base exception class for all service exceptions from Bedrock service.
 *
 * @public
 */
export class DeleteModelInvocationLoggingConfigurationCommand extends command<DeleteModelInvocationLoggingConfigurationCommandInput, DeleteModelInvocationLoggingConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "DeleteModelInvocationLoggingConfiguration",
  DeleteModelInvocationLoggingConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: {};
    };
    sdk: {
      input: DeleteModelInvocationLoggingConfigurationCommandInput;
      output: DeleteModelInvocationLoggingConfigurationCommandOutput;
    };
  };
}
