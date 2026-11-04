// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteApiKeyRequest, DeleteApiKeyResponse } from "../models/models_0";
import { DeleteApiKey$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteApiKeyCommand}.
 */
export interface DeleteApiKeyCommandInput extends DeleteApiKeyRequest {}
/**
 * @public
 *
 * The output of {@link DeleteApiKeyCommand}.
 */
export interface DeleteApiKeyCommandOutput extends DeleteApiKeyResponse, __MetadataBearer {}

/**
 * Deletes an API key.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, DeleteApiKeyCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, DeleteApiKeyCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * // import type { AppSyncClientConfig } from "@aws-sdk/client-appsync";
 * const config = {}; // type is AppSyncClientConfig
 * const client = new AppSyncClient(config);
 * const input = { // DeleteApiKeyRequest
 *   apiId: "STRING_VALUE", // required
 *   id: "STRING_VALUE", // required
 * };
 * const command = new DeleteApiKeyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteApiKeyCommandInput - {@link DeleteApiKeyCommandInput}
 * @returns {@link DeleteApiKeyCommandOutput}
 * @see {@link DeleteApiKeyCommandInput} for command's `input` shape.
 * @see {@link DeleteApiKeyCommandOutput} for command's `response` shape.
 * @see {@link AppSyncClientResolvedConfig | config} for AppSyncClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * The request is not well formed. For example, a value is invalid or a required field is missing. Check the field values, and then try again.
 *
 * @throws {@link InternalFailureException} (server fault)
 *
 * An internal AppSync error occurred. Try your request again.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * The resource specified in the request was not found. Check the resource, and then try again.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * You aren't authorized to perform this operation.
 *
 * @throws {@link AppSyncServiceException}
 *
 * Base exception class for all service exceptions from AppSync service.
 *
 * @public
 */
export class DeleteApiKeyCommand extends command<DeleteApiKeyCommandInput, DeleteApiKeyCommandOutput>(
  _ep0,
  _mw0,
  "DeleteApiKey",
  DeleteApiKey$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteApiKeyRequest;
      output: {};
    };
    sdk: {
      input: DeleteApiKeyCommandInput;
      output: DeleteApiKeyCommandOutput;
    };
  };
}
