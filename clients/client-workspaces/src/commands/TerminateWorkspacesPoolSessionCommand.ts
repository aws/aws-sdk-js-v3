// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { TerminateWorkspacesPoolSessionRequest, TerminateWorkspacesPoolSessionResult } from "../models/models_0";
import { TerminateWorkspacesPoolSession$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link TerminateWorkspacesPoolSessionCommand}.
 */
export interface TerminateWorkspacesPoolSessionCommandInput extends TerminateWorkspacesPoolSessionRequest {}
/**
 * @public
 *
 * The output of {@link TerminateWorkspacesPoolSessionCommand}.
 */
export interface TerminateWorkspacesPoolSessionCommandOutput extends TerminateWorkspacesPoolSessionResult, __MetadataBearer {}

/**
 * <note>
 *             <p>End of support notice: On December 31, 2027, Amazon Web Services will end support for Amazon WorkSpaces Pools. After December 31, 2027,
 * you will no longer be able to access the Amazon WorkSpaces Pools console or Amazon WorkSpaces Pools resources. For more information, see
 * <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/wsp-pools-end-of-support.html">Amazon WorkSpaces Pools end of support</a>.
 *  </p>
 *          </note>
 *          <p>Terminates the pool session.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, TerminateWorkspacesPoolSessionCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, TerminateWorkspacesPoolSessionCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * // import type { WorkSpacesClientConfig } from "@aws-sdk/client-workspaces";
 * const config = {}; // type is WorkSpacesClientConfig
 * const client = new WorkSpacesClient(config);
 * const input = { // TerminateWorkspacesPoolSessionRequest
 *   SessionId: "STRING_VALUE", // required
 * };
 * const command = new TerminateWorkspacesPoolSessionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param TerminateWorkspacesPoolSessionCommandInput - {@link TerminateWorkspacesPoolSessionCommandInput}
 * @returns {@link TerminateWorkspacesPoolSessionCommandOutput}
 * @see {@link TerminateWorkspacesPoolSessionCommandInput} for command's `input` shape.
 * @see {@link TerminateWorkspacesPoolSessionCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for WorkSpacesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The user is not authorized to access a resource.</p>
 *
 * @throws {@link InvalidParameterValuesException} (client fault)
 *  <p>One or more parameter values are not valid.</p>
 *
 * @throws {@link OperationInProgressException} (client fault)
 *  <p>The properties of this WorkSpace are currently being modified. Try again in a moment.</p>
 *
 * @throws {@link OperationNotSupportedException} (client fault)
 *  <p>This operation is not supported.</p>
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
export class TerminateWorkspacesPoolSessionCommand extends command<TerminateWorkspacesPoolSessionCommandInput, TerminateWorkspacesPoolSessionCommandOutput>(
  _ep0,
  _mw0,
  "TerminateWorkspacesPoolSession",
  TerminateWorkspacesPoolSession$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: TerminateWorkspacesPoolSessionRequest;
      output: {};
    };
    sdk: {
      input: TerminateWorkspacesPoolSessionCommandInput;
      output: TerminateWorkspacesPoolSessionCommandOutput;
    };
  };
}
