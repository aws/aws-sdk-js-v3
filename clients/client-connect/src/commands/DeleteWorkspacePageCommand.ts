// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteWorkspacePageRequest, DeleteWorkspacePageResponse } from "../models/models_1";
import { DeleteWorkspacePage$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteWorkspacePageCommand}.
 */
export interface DeleteWorkspacePageCommandInput extends DeleteWorkspacePageRequest {}
/**
 * @public
 *
 * The output of {@link DeleteWorkspacePageCommand}.
 */
export interface DeleteWorkspacePageCommandOutput extends DeleteWorkspacePageResponse, __MetadataBearer {}

/**
 * Removes the association between a view and a page in a workspace. The page will display the default view after deletion.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DeleteWorkspacePageCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DeleteWorkspacePageCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // DeleteWorkspacePageRequest
 *   InstanceId: "STRING_VALUE", // required
 *   WorkspaceId: "STRING_VALUE", // required
 *   Page: "STRING_VALUE", // required
 * };
 * const command = new DeleteWorkspacePageCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteWorkspacePageCommandInput - {@link DeleteWorkspacePageCommandInput}
 * @returns {@link DeleteWorkspacePageCommandOutput}
 * @see {@link DeleteWorkspacePageCommandInput} for command's `input` shape.
 * @see {@link DeleteWorkspacePageCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more of the specified parameters are not valid.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link ResourceConflictException} (client fault)
 *
 * A resource already has that name.
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
export class DeleteWorkspacePageCommand extends command<DeleteWorkspacePageCommandInput, DeleteWorkspacePageCommandOutput>(
  _ep0,
  _mw0,
  "DeleteWorkspacePage",
  DeleteWorkspacePage$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteWorkspacePageRequest;
      output: {};
    };
    sdk: {
      input: DeleteWorkspacePageCommandInput;
      output: DeleteWorkspacePageCommandOutput;
    };
  };
}
