// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DeleteAccountDataRetentionStorageRequest,
  DeleteAccountDataRetentionStorageResponse,
} from "../models/models_0";
import { DeleteAccountDataRetentionStorage$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteAccountDataRetentionStorageCommand}.
 */
export interface DeleteAccountDataRetentionStorageCommandInput extends DeleteAccountDataRetentionStorageRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAccountDataRetentionStorageCommand}.
 */
export interface DeleteAccountDataRetentionStorageCommandOutput extends DeleteAccountDataRetentionStorageResponse, __MetadataBearer {}

/**
 * <p>Deletes your account's retention storage configuration for a model provider. Deleting an absent configuration succeeds. You do not need to participate in the program to delete the configuration. You can delete it even if your account is ineligible or its eligibility is revoked.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockClient, DeleteAccountDataRetentionStorageCommand } from "@aws-sdk/client-bedrock"; // ES Modules import
 * // const { BedrockClient, DeleteAccountDataRetentionStorageCommand } = require("@aws-sdk/client-bedrock"); // CommonJS import
 * // import type { BedrockClientConfig } from "@aws-sdk/client-bedrock";
 * const config = {}; // type is BedrockClientConfig
 * const client = new BedrockClient(config);
 * const input = { // DeleteAccountDataRetentionStorageRequest
 *   modelProvider: "anthropic" || "openai", // required
 * };
 * const command = new DeleteAccountDataRetentionStorageCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAccountDataRetentionStorageCommandInput - {@link DeleteAccountDataRetentionStorageCommandInput}
 * @returns {@link DeleteAccountDataRetentionStorageCommandOutput}
 * @see {@link DeleteAccountDataRetentionStorageCommandInput} for command's `input` shape.
 * @see {@link DeleteAccountDataRetentionStorageCommandOutput} for command's `response` shape.
 * @see {@link BedrockClientResolvedConfig | config} for BedrockClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request is denied because of missing access permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
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
export class DeleteAccountDataRetentionStorageCommand extends command<DeleteAccountDataRetentionStorageCommandInput, DeleteAccountDataRetentionStorageCommandOutput>(
  _ep0,
  _mw0,
  "DeleteAccountDataRetentionStorage",
  DeleteAccountDataRetentionStorage$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAccountDataRetentionStorageRequest;
      output: {};
    };
    sdk: {
      input: DeleteAccountDataRetentionStorageCommandInput;
      output: DeleteAccountDataRetentionStorageCommandOutput;
    };
  };
}
