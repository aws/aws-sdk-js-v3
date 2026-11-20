// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DeleteOrganizationDataRetentionStorageRequest,
  DeleteOrganizationDataRetentionStorageResponse,
} from "../models/models_0";
import { DeleteOrganizationDataRetentionStorage$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteOrganizationDataRetentionStorageCommand}.
 */
export interface DeleteOrganizationDataRetentionStorageCommandInput extends DeleteOrganizationDataRetentionStorageRequest {}
/**
 * @public
 *
 * The output of {@link DeleteOrganizationDataRetentionStorageCommand}.
 */
export interface DeleteOrganizationDataRetentionStorageCommandOutput extends DeleteOrganizationDataRetentionStorageResponse, __MetadataBearer {}

/**
 * <p>Deletes the organization's retention storage configuration for a model provider. The caller must be the organization's management account or a delegated administrator. Deleting an absent configuration succeeds; no program participation is required to delete.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockClient, DeleteOrganizationDataRetentionStorageCommand } from "@aws-sdk/client-bedrock"; // ES Modules import
 * // const { BedrockClient, DeleteOrganizationDataRetentionStorageCommand } = require("@aws-sdk/client-bedrock"); // CommonJS import
 * // import type { BedrockClientConfig } from "@aws-sdk/client-bedrock";
 * const config = {}; // type is BedrockClientConfig
 * const client = new BedrockClient(config);
 * const input = { // DeleteOrganizationDataRetentionStorageRequest
 *   modelProvider: "anthropic" || "openai", // required
 * };
 * const command = new DeleteOrganizationDataRetentionStorageCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteOrganizationDataRetentionStorageCommandInput - {@link DeleteOrganizationDataRetentionStorageCommandInput}
 * @returns {@link DeleteOrganizationDataRetentionStorageCommandOutput}
 * @see {@link DeleteOrganizationDataRetentionStorageCommandInput} for command's `input` shape.
 * @see {@link DeleteOrganizationDataRetentionStorageCommandOutput} for command's `response` shape.
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
export class DeleteOrganizationDataRetentionStorageCommand extends command<DeleteOrganizationDataRetentionStorageCommandInput, DeleteOrganizationDataRetentionStorageCommandOutput>(
  _ep0,
  _mw0,
  "DeleteOrganizationDataRetentionStorage",
  DeleteOrganizationDataRetentionStorage$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteOrganizationDataRetentionStorageRequest;
      output: {};
    };
    sdk: {
      input: DeleteOrganizationDataRetentionStorageCommandInput;
      output: DeleteOrganizationDataRetentionStorageCommandOutput;
    };
  };
}
