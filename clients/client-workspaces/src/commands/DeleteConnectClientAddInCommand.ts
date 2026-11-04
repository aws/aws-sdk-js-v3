// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteConnectClientAddInRequest, DeleteConnectClientAddInResult } from "../models/models_0";
import { DeleteConnectClientAddIn$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteConnectClientAddInCommand}.
 */
export interface DeleteConnectClientAddInCommandInput extends DeleteConnectClientAddInRequest {}
/**
 * @public
 *
 * The output of {@link DeleteConnectClientAddInCommand}.
 */
export interface DeleteConnectClientAddInCommandOutput extends DeleteConnectClientAddInResult, __MetadataBearer {}

/**
 * Deletes a client-add-in for Connect Customer that is configured within a directory.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, DeleteConnectClientAddInCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, DeleteConnectClientAddInCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * // import type { WorkSpacesClientConfig } from "@aws-sdk/client-workspaces";
 * const config = {}; // type is WorkSpacesClientConfig
 * const client = new WorkSpacesClient(config);
 * const input = { // DeleteConnectClientAddInRequest
 *   AddInId: "STRING_VALUE", // required
 *   ResourceId: "STRING_VALUE", // required
 * };
 * const command = new DeleteConnectClientAddInCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteConnectClientAddInCommandInput - {@link DeleteConnectClientAddInCommandInput}
 * @returns {@link DeleteConnectClientAddInCommandOutput}
 * @see {@link DeleteConnectClientAddInCommandInput} for command's `input` shape.
 * @see {@link DeleteConnectClientAddInCommandOutput} for command's `response` shape.
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
export class DeleteConnectClientAddInCommand extends command<DeleteConnectClientAddInCommandInput, DeleteConnectClientAddInCommandOutput>(
  _ep0,
  _mw0,
  "DeleteConnectClientAddIn",
  DeleteConnectClientAddIn$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteConnectClientAddInRequest;
      output: {};
    };
    sdk: {
      input: DeleteConnectClientAddInCommandInput;
      output: DeleteConnectClientAddInCommandOutput;
    };
  };
}
