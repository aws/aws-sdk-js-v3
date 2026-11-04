// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ModifyDocumentPermissionRequest, ModifyDocumentPermissionResponse } from "../models/models_1";
import { ModifyDocumentPermission$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ModifyDocumentPermissionCommand}.
 */
export interface ModifyDocumentPermissionCommandInput extends ModifyDocumentPermissionRequest {}
/**
 * @public
 *
 * The output of {@link ModifyDocumentPermissionCommand}.
 */
export interface ModifyDocumentPermissionCommandOutput extends ModifyDocumentPermissionResponse, __MetadataBearer {}

/**
 * Shares a Amazon Web Services Systems Manager document (SSM document)publicly or privately. If you share a document privately, you must specify the Amazon Web Services user IDs for those people who can use the document. If you share a document publicly, you must specify *All* as the account ID.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, ModifyDocumentPermissionCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, ModifyDocumentPermissionCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
 * const client = new SSMClient(config);
 * const input = { // ModifyDocumentPermissionRequest
 *   Name: "STRING_VALUE", // required
 *   PermissionType: "Share", // required
 *   AccountIdsToAdd: [ // AccountIdList
 *     "STRING_VALUE",
 *   ],
 *   AccountIdsToRemove: [
 *     "STRING_VALUE",
 *   ],
 *   SharedDocumentVersion: "STRING_VALUE",
 * };
 * const command = new ModifyDocumentPermissionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ModifyDocumentPermissionCommandInput - {@link ModifyDocumentPermissionCommandInput}
 * @returns {@link ModifyDocumentPermissionCommandOutput}
 * @see {@link ModifyDocumentPermissionCommandInput} for command's `input` shape.
 * @see {@link ModifyDocumentPermissionCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link DocumentLimitExceeded} (client fault)
 *
 * You can have at most 500 active SSM documents.
 *
 * @throws {@link DocumentPermissionLimit} (client fault)
 *
 * The document can't be shared with more Amazon Web Services accounts. You can specify a maximum of 20 accounts per API operation to share a private document.
 *
 * By default, you can share a private document with a maximum of 1,000 accounts and publicly share up to five documents.
 *
 * If you need to increase the quota for privately or publicly shared Systems Manager documents, contact Amazon Web Services Support.
 *
 * @throws {@link InternalServerError} (server fault)
 *
 * An error occurred on the server side.
 *
 * @throws {@link InvalidDocument} (client fault)
 *
 * The specified SSM document doesn't exist.
 *
 * @throws {@link InvalidPermissionType} (client fault)
 *
 * The permission type isn't supported. *Share* is the only supported permission type.
 *
 * @throws {@link SSMServiceException}
 *
 * Base exception class for all service exceptions from SSM service.
 *
 * @public
 */
export class ModifyDocumentPermissionCommand extends command<ModifyDocumentPermissionCommandInput, ModifyDocumentPermissionCommandOutput>(
  _ep0,
  _mw0,
  "ModifyDocumentPermission",
  ModifyDocumentPermission$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyDocumentPermissionRequest;
      output: {};
    };
    sdk: {
      input: ModifyDocumentPermissionCommandInput;
      output: ModifyDocumentPermissionCommandOutput;
    };
  };
}
