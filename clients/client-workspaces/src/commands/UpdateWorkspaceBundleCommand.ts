// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateWorkspaceBundleRequest, UpdateWorkspaceBundleResult } from "../models/models_0";
import { UpdateWorkspaceBundle$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateWorkspaceBundleCommand}.
 */
export interface UpdateWorkspaceBundleCommandInput extends UpdateWorkspaceBundleRequest {}
/**
 * @public
 *
 * The output of {@link UpdateWorkspaceBundleCommand}.
 */
export interface UpdateWorkspaceBundleCommandOutput extends UpdateWorkspaceBundleResult, __MetadataBearer {}

/**
 * Updates a WorkSpace bundle with a new image. For more information about updating WorkSpace bundles, see [Update a Custom WorkSpaces Bundle](https://docs.aws.amazon.com/workspaces/latest/adminguide/update-custom-bundle.html).
 *
 * > **Important:** Existing WorkSpaces aren't automatically updated when you update the bundle that they're based on. To update existing WorkSpaces that are based on a bundle that you've updated, you must either rebuild the WorkSpaces or delete and recreate them.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, UpdateWorkspaceBundleCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, UpdateWorkspaceBundleCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * // import type { WorkSpacesClientConfig } from "@aws-sdk/client-workspaces";
 * const config = {}; // type is WorkSpacesClientConfig
 * const client = new WorkSpacesClient(config);
 * const input = { // UpdateWorkspaceBundleRequest
 *   BundleId: "STRING_VALUE",
 *   ImageId: "STRING_VALUE",
 * };
 * const command = new UpdateWorkspaceBundleCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateWorkspaceBundleCommandInput - {@link UpdateWorkspaceBundleCommandInput}
 * @returns {@link UpdateWorkspaceBundleCommandOutput}
 * @see {@link UpdateWorkspaceBundleCommandInput} for command's `input` shape.
 * @see {@link UpdateWorkspaceBundleCommandOutput} for command's `response` shape.
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
 * @throws {@link OperationNotSupportedException} (client fault)
 *
 * This operation is not supported.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource could not be found.
 *
 * @throws {@link ResourceUnavailableException} (client fault)
 *
 * The specified resource is not available.
 *
 * @throws {@link WorkSpacesServiceException}
 *
 * Base exception class for all service exceptions from WorkSpaces service.
 *
 * @public
 */
export class UpdateWorkspaceBundleCommand extends command<UpdateWorkspaceBundleCommandInput, UpdateWorkspaceBundleCommandOutput>(
  _ep0,
  _mw0,
  "UpdateWorkspaceBundle",
  UpdateWorkspaceBundle$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateWorkspaceBundleRequest;
      output: {};
    };
    sdk: {
      input: UpdateWorkspaceBundleCommandInput;
      output: UpdateWorkspaceBundleCommandOutput;
    };
  };
}
