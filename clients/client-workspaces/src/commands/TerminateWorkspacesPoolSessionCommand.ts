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
 * > **Note:** End of support notice: On December 31, 2027, Amazon Web Services will end support for Amazon WorkSpaces Pools. After December 31, 2027, you will no longer be able to access the Amazon WorkSpaces Pools console or Amazon WorkSpaces Pools resources. For more information, see [Amazon WorkSpaces Pools end of support](https://docs.aws.amazon.com/workspaces/latest/adminguide/wsp-pools-end-of-support.html).
 *
 * Terminates the pool session.
 *
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
 *
 * The user is not authorized to access a resource.
 *
 * @throws {@link InvalidParameterValuesException} (client fault)
 *
 * One or more parameter values are not valid.
 *
 * @throws {@link OperationInProgressException} (client fault)
 *
 * The properties of this WorkSpace are currently being modified. Try again in a moment.
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
