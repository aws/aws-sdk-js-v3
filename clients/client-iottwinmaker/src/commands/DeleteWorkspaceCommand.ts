// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteWorkspaceRequest, DeleteWorkspaceResponse } from "../models/models_0";
import { DeleteWorkspace$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteWorkspaceCommand}.
 */
export interface DeleteWorkspaceCommandInput extends DeleteWorkspaceRequest {}
/**
 * @public
 *
 * The output of {@link DeleteWorkspaceCommand}.
 */
export interface DeleteWorkspaceCommandOutput extends DeleteWorkspaceResponse, __MetadataBearer {}

/**
 * Deletes a workspace.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTTwinMakerClient, DeleteWorkspaceCommand } from "@aws-sdk/client-iottwinmaker"; // ES Modules import
 * // const { IoTTwinMakerClient, DeleteWorkspaceCommand } = require("@aws-sdk/client-iottwinmaker"); // CommonJS import
 * // import type { IoTTwinMakerClientConfig } from "@aws-sdk/client-iottwinmaker";
 * const config = {}; // type is IoTTwinMakerClientConfig
 * const client = new IoTTwinMakerClient(config);
 * const input = { // DeleteWorkspaceRequest
 *   workspaceId: "STRING_VALUE", // required
 * };
 * const command = new DeleteWorkspaceCommand(input);
 * const response = await client.send(command);
 * // { // DeleteWorkspaceResponse
 * //   message: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteWorkspaceCommandInput - {@link DeleteWorkspaceCommandInput}
 * @returns {@link DeleteWorkspaceCommandOutput}
 * @see {@link DeleteWorkspaceCommandInput} for command's `input` shape.
 * @see {@link DeleteWorkspaceCommandOutput} for command's `response` shape.
 * @see {@link IoTTwinMakerClientResolvedConfig | config} for IoTTwinMakerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Access is denied.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An unexpected error has occurred.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource wasn't found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The rate exceeds the limit.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Failed
 *
 * @throws {@link IoTTwinMakerServiceException}
 *
 * Base exception class for all service exceptions from IoTTwinMaker service.
 *
 * @public
 */
export class DeleteWorkspaceCommand extends command<DeleteWorkspaceCommandInput, DeleteWorkspaceCommandOutput>(
  _ep0,
  _mw0,
  "DeleteWorkspace",
  DeleteWorkspace$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteWorkspaceRequest;
      output: DeleteWorkspaceResponse;
    };
    sdk: {
      input: DeleteWorkspaceCommandInput;
      output: DeleteWorkspaceCommandOutput;
    };
  };
}
