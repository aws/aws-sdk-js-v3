// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DeleteProjectDataRetentionStorageRequest,
  DeleteProjectDataRetentionStorageResponse,
} from "../models/models_0";
import { DeleteProjectDataRetentionStorage$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteProjectDataRetentionStorageCommand}.
 */
export interface DeleteProjectDataRetentionStorageCommandInput extends DeleteProjectDataRetentionStorageRequest {}
/**
 * @public
 *
 * The output of {@link DeleteProjectDataRetentionStorageCommand}.
 */
export interface DeleteProjectDataRetentionStorageCommandOutput extends DeleteProjectDataRetentionStorageResponse, __MetadataBearer {}

/**
 * <p>Deletes a project's retention storage configuration for a model provider. Deleting an absent configuration on an active project succeeds. If the project does not exist or your account does not own it, the operation returns <code>ResourceNotFoundException</code>. For an archived project, the operation returns <code>ValidationException</code>. You can read the archived project's stored configuration until Amazon Bedrock purges the project. You do not need to participate in the program to delete the configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockClient, DeleteProjectDataRetentionStorageCommand } from "@aws-sdk/client-bedrock"; // ES Modules import
 * // const { BedrockClient, DeleteProjectDataRetentionStorageCommand } = require("@aws-sdk/client-bedrock"); // CommonJS import
 * // import type { BedrockClientConfig } from "@aws-sdk/client-bedrock";
 * const config = {}; // type is BedrockClientConfig
 * const client = new BedrockClient(config);
 * const input = { // DeleteProjectDataRetentionStorageRequest
 *   projectIdentifier: "STRING_VALUE", // required
 *   modelProvider: "anthropic" || "openai", // required
 * };
 * const command = new DeleteProjectDataRetentionStorageCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteProjectDataRetentionStorageCommandInput - {@link DeleteProjectDataRetentionStorageCommandInput}
 * @returns {@link DeleteProjectDataRetentionStorageCommandOutput}
 * @see {@link DeleteProjectDataRetentionStorageCommandInput} for command's `input` shape.
 * @see {@link DeleteProjectDataRetentionStorageCommandOutput} for command's `response` shape.
 * @see {@link BedrockClientResolvedConfig | config} for BedrockClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request is denied because of missing access permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource Amazon Resource Name (ARN) was not found. Check the Amazon Resource Name (ARN) and try your request again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The number of requests exceeds the limit. Resubmit your request later.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Input validation failed. Check your request parameters and retry the request.</p>
 *
 * @throws {@link BedrockServiceException}
 * <p>Base exception class for all service exceptions from Bedrock service.</p>
 *
 *
 * @public
 */
export class DeleteProjectDataRetentionStorageCommand extends command<DeleteProjectDataRetentionStorageCommandInput, DeleteProjectDataRetentionStorageCommandOutput>(
  _ep0,
  _mw0,
  "DeleteProjectDataRetentionStorage",
  DeleteProjectDataRetentionStorage$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteProjectDataRetentionStorageRequest;
      output: {};
    };
    sdk: {
      input: DeleteProjectDataRetentionStorageCommandInput;
      output: DeleteProjectDataRetentionStorageCommandOutput;
    };
  };
}
