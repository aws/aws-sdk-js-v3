// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteAttachedFileRequest, DeleteAttachedFileResponse } from "../models/models_1";
import { DeleteAttachedFile$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteAttachedFileCommand}.
 */
export interface DeleteAttachedFileCommandInput extends DeleteAttachedFileRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAttachedFileCommand}.
 */
export interface DeleteAttachedFileCommandOutput extends DeleteAttachedFileResponse, __MetadataBearer {}

/**
 * Deletes an attached file along with the underlying S3 Object.
 *
 * > **Important:** The attached file is **permanently deleted** if S3 bucket versioning is not enabled.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DeleteAttachedFileCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DeleteAttachedFileCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // DeleteAttachedFileRequest
 *   InstanceId: "STRING_VALUE", // required
 *   FileId: "STRING_VALUE", // required
 *   AssociatedResourceArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteAttachedFileCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAttachedFileCommandInput - {@link DeleteAttachedFileCommandInput}
 * @returns {@link DeleteAttachedFileCommandOutput}
 * @see {@link DeleteAttachedFileCommandInput} for command's `input` shape.
 * @see {@link DeleteAttachedFileCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient permissions to perform this action.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * Request processing failed because of an error or failure with the service.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The throttling limit has been exceeded.
 *
 * @throws {@link ConnectServiceException}
 *
 * Base exception class for all service exceptions from Connect service.
 *
 * @public
 */
export class DeleteAttachedFileCommand extends command<DeleteAttachedFileCommandInput, DeleteAttachedFileCommandOutput>(
  _ep0,
  _mw0,
  "DeleteAttachedFile",
  DeleteAttachedFile$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAttachedFileRequest;
      output: {};
    };
    sdk: {
      input: DeleteAttachedFileCommandInput;
      output: DeleteAttachedFileCommandOutput;
    };
  };
}
