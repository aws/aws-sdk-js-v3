// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeregisterWorkspaceDirectoryRequest, DeregisterWorkspaceDirectoryResult } from "../models/models_0";
import { DeregisterWorkspaceDirectory$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeregisterWorkspaceDirectoryCommand}.
 */
export interface DeregisterWorkspaceDirectoryCommandInput extends DeregisterWorkspaceDirectoryRequest {}
/**
 * @public
 *
 * The output of {@link DeregisterWorkspaceDirectoryCommand}.
 */
export interface DeregisterWorkspaceDirectoryCommandOutput extends DeregisterWorkspaceDirectoryResult, __MetadataBearer {}

/**
 * Deregisters the specified directory. This operation is asynchronous and returns before the WorkSpace directory is deregistered. If any WorkSpaces are registered to this directory, you must remove them before you can deregister the directory.
 *
 * > **Note:**
 * >
 * > Simple AD and AD Connector are made available to you free of charge to use with WorkSpaces. If there are no WorkSpaces being used with your Simple AD or AD Connector directory for 30 consecutive days, this directory will be automatically deregistered for use with Amazon WorkSpaces, and you will be charged for this directory as per the [Directory Service pricing terms](http://aws.amazon.com/directoryservice/pricing/).
 * >
 * > To delete empty directories, see [Delete the Directory for Your WorkSpaces](https://docs.aws.amazon.com/workspaces/latest/adminguide/delete-workspaces-directory.html). If you delete your Simple AD or AD Connector directory, you can always create a new one when you want to start using WorkSpaces again.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, DeregisterWorkspaceDirectoryCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, DeregisterWorkspaceDirectoryCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * // import type { WorkSpacesClientConfig } from "@aws-sdk/client-workspaces";
 * const config = {}; // type is WorkSpacesClientConfig
 * const client = new WorkSpacesClient(config);
 * const input = { // DeregisterWorkspaceDirectoryRequest
 *   DirectoryId: "STRING_VALUE", // required
 * };
 * const command = new DeregisterWorkspaceDirectoryCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeregisterWorkspaceDirectoryCommandInput - {@link DeregisterWorkspaceDirectoryCommandInput}
 * @returns {@link DeregisterWorkspaceDirectoryCommandOutput}
 * @see {@link DeregisterWorkspaceDirectoryCommandInput} for command's `input` shape.
 * @see {@link DeregisterWorkspaceDirectoryCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for WorkSpacesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The user is not authorized to access a resource.
 *
 * @throws {@link InvalidParameterValuesException} (client fault)
 *
 * One or more parameter values are not valid.
 *
 * @throws {@link InvalidResourceStateException} (client fault)
 *
 * The state of the resource is not valid for this operation.
 *
 * @throws {@link OperationNotSupportedException} (client fault)
 *
 * This operation is not supported.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource could not be found.
 *
 * @throws {@link WorkSpacesServiceException}
 *
 * Base exception class for all service exceptions from WorkSpaces service.
 *
 * @public
 */
export class DeregisterWorkspaceDirectoryCommand extends command<DeregisterWorkspaceDirectoryCommandInput, DeregisterWorkspaceDirectoryCommandOutput>(
  _ep0,
  _mw0,
  "DeregisterWorkspaceDirectory",
  DeregisterWorkspaceDirectory$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeregisterWorkspaceDirectoryRequest;
      output: {};
    };
    sdk: {
      input: DeregisterWorkspaceDirectoryCommandInput;
      output: DeregisterWorkspaceDirectoryCommandOutput;
    };
  };
}
