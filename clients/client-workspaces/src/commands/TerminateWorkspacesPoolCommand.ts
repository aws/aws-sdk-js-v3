// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { TerminateWorkspacesPoolRequest, TerminateWorkspacesPoolResult } from "../models/models_0";
import { TerminateWorkspacesPool$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link TerminateWorkspacesPoolCommand}.
 */
export interface TerminateWorkspacesPoolCommandInput extends TerminateWorkspacesPoolRequest {}
/**
 * @public
 *
 * The output of {@link TerminateWorkspacesPoolCommand}.
 */
export interface TerminateWorkspacesPoolCommandOutput extends TerminateWorkspacesPoolResult, __MetadataBearer {}

/**
 * <p>Terminates the specified pool.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, TerminateWorkspacesPoolCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, TerminateWorkspacesPoolCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * // import type { WorkSpacesClientConfig } from "@aws-sdk/client-workspaces";
 * const config = {}; // type is WorkSpacesClientConfig
 * const client = new WorkSpacesClient(config);
 * const input = { // TerminateWorkspacesPoolRequest
 *   PoolId: "STRING_VALUE", // required
 * };
 * const command = new TerminateWorkspacesPoolCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param TerminateWorkspacesPoolCommandInput - {@link TerminateWorkspacesPoolCommandInput}
 * @returns {@link TerminateWorkspacesPoolCommandOutput}
 * @see {@link TerminateWorkspacesPoolCommandInput} for command's `input` shape.
 * @see {@link TerminateWorkspacesPoolCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for WorkSpacesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The user is not authorized to access a resource.</p>
 *
 * @throws {@link InvalidParameterValuesException} (client fault)
 *  <p>One or more parameter values are not valid.</p>
 *
 * @throws {@link InvalidResourceStateException} (client fault)
 *  <p>The state of the resource is not valid for this operation.</p>
 *
 * @throws {@link OperationInProgressException} (client fault)
 *  <p>The properties of this WorkSpace are currently being modified. Try again in a moment.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link WorkSpacesServiceException}
 * <p>Base exception class for all service exceptions from WorkSpaces service.</p>
 *
 *
 * @public
 */
export class TerminateWorkspacesPoolCommand extends command<TerminateWorkspacesPoolCommandInput, TerminateWorkspacesPoolCommandOutput>(
  _ep0,
  _mw0,
  "TerminateWorkspacesPool",
  TerminateWorkspacesPool$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: TerminateWorkspacesPoolRequest;
      output: {};
    };
    sdk: {
      input: TerminateWorkspacesPoolCommandInput;
      output: TerminateWorkspacesPoolCommandOutput;
    };
  };
}
