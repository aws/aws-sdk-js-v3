// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateConnectClientAddInRequest, CreateConnectClientAddInResult } from "../models/models_0";
import { CreateConnectClientAddIn$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateConnectClientAddInCommand}.
 */
export interface CreateConnectClientAddInCommandInput extends CreateConnectClientAddInRequest {}
/**
 * @public
 *
 * The output of {@link CreateConnectClientAddInCommand}.
 */
export interface CreateConnectClientAddInCommandOutput extends CreateConnectClientAddInResult, __MetadataBearer {}

/**
 * <p>Creates a client-add-in for Connect Customer within a directory. You can create only
 *          one Connect Customer client add-in within a directory.</p>
 *          <p>This client add-in allows WorkSpaces users to seamlessly connect to Connect Customer.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, CreateConnectClientAddInCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, CreateConnectClientAddInCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * // import type { WorkSpacesClientConfig } from "@aws-sdk/client-workspaces";
 * const config = {}; // type is WorkSpacesClientConfig
 * const client = new WorkSpacesClient(config);
 * const input = { // CreateConnectClientAddInRequest
 *   ResourceId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   URL: "STRING_VALUE", // required
 * };
 * const command = new CreateConnectClientAddInCommand(input);
 * const response = await client.send(command);
 * // { // CreateConnectClientAddInResult
 * //   AddInId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateConnectClientAddInCommandInput - {@link CreateConnectClientAddInCommandInput}
 * @returns {@link CreateConnectClientAddInCommandOutput}
 * @see {@link CreateConnectClientAddInCommandInput} for command's `input` shape.
 * @see {@link CreateConnectClientAddInCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for WorkSpacesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The user is not authorized to access a resource.</p>
 *
 * @throws {@link InvalidParameterValuesException} (client fault)
 *  <p>One or more parameter values are not valid.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>The specified resource already exists.</p>
 *
 * @throws {@link ResourceCreationFailedException} (client fault)
 *  <p>The resource could not be created.</p>
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
export class CreateConnectClientAddInCommand extends command<CreateConnectClientAddInCommandInput, CreateConnectClientAddInCommandOutput>(
  _ep0,
  _mw0,
  "CreateConnectClientAddIn",
  CreateConnectClientAddIn$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateConnectClientAddInRequest;
      output: CreateConnectClientAddInResult;
    };
    sdk: {
      input: CreateConnectClientAddInCommandInput;
      output: CreateConnectClientAddInCommandOutput;
    };
  };
}
