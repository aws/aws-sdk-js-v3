// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteWorkspaceInstanceRequest, DeleteWorkspaceInstanceResponse } from "../models/models_0";
import { DeleteWorkspaceInstance$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteWorkspaceInstanceCommand}.
 */
export interface DeleteWorkspaceInstanceCommandInput extends DeleteWorkspaceInstanceRequest {}
/**
 * @public
 *
 * The output of {@link DeleteWorkspaceInstanceCommand}.
 */
export interface DeleteWorkspaceInstanceCommandOutput extends DeleteWorkspaceInstanceResponse, __MetadataBearer {}

/**
 * Deletes the specified WorkSpace
 *
 * > **Important:** Usage of this API will result in deletion of the resource in question.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkspacesInstancesClient, DeleteWorkspaceInstanceCommand } from "@aws-sdk/client-workspaces-instances"; // ES Modules import
 * // const { WorkspacesInstancesClient, DeleteWorkspaceInstanceCommand } = require("@aws-sdk/client-workspaces-instances"); // CommonJS import
 * // import type { WorkspacesInstancesClientConfig } from "@aws-sdk/client-workspaces-instances";
 * const config = {}; // type is WorkspacesInstancesClientConfig
 * const client = new WorkspacesInstancesClient(config);
 * const input = { // DeleteWorkspaceInstanceRequest
 *   WorkspaceInstanceId: "STRING_VALUE", // required
 * };
 * const command = new DeleteWorkspaceInstanceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteWorkspaceInstanceCommandInput - {@link DeleteWorkspaceInstanceCommandInput}
 * @returns {@link DeleteWorkspaceInstanceCommandOutput}
 * @see {@link DeleteWorkspaceInstanceCommandInput} for command's `input` shape.
 * @see {@link DeleteWorkspaceInstanceCommandOutput} for command's `response` shape.
 * @see {@link WorkspacesInstancesClientResolvedConfig | config} for WorkspacesInstancesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Indicates insufficient permissions to perform the requested action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Signals a conflict with the current state of the resource.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Indicates an unexpected server-side error occurred.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Indicates the requested resource could not be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Indicates the request rate has exceeded limits.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Indicates invalid input parameters in the request.
 *
 * @throws {@link WorkspacesInstancesServiceException}
 *
 * Base exception class for all service exceptions from WorkspacesInstances service.
 *
 * @public
 */
export class DeleteWorkspaceInstanceCommand extends command<DeleteWorkspaceInstanceCommandInput, DeleteWorkspaceInstanceCommandOutput>(
  _ep0,
  _mw0,
  "DeleteWorkspaceInstance",
  DeleteWorkspaceInstance$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteWorkspaceInstanceRequest;
      output: {};
    };
    sdk: {
      input: DeleteWorkspaceInstanceCommandInput;
      output: DeleteWorkspaceInstanceCommandOutput;
    };
  };
}
