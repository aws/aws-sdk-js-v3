// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateConnectClientAddInRequest, CreateConnectClientAddInResult } from "../models/models_0";
import { de_CreateConnectClientAddInCommand, se_CreateConnectClientAddInCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Creates a client-add-in for Amazon Connect within a directory. You can create only
 *          one Amazon Connect client add-in within a directory.</p>
 *          <p>This client add-in allows WorkSpaces users to seamlessly connect to Amazon Connect.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, CreateConnectClientAddInCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, CreateConnectClientAddInCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
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
export class CreateConnectClientAddInCommand extends $Command
  .classBuilder<
    CreateConnectClientAddInCommandInput,
    CreateConnectClientAddInCommandOutput,
    WorkSpacesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkSpacesClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("WorkspacesService", "CreateConnectClientAddIn", {})
  .n("WorkSpacesClient", "CreateConnectClientAddInCommand")
  .f(void 0, void 0)
  .ser(se_CreateConnectClientAddInCommand)
  .de(de_CreateConnectClientAddInCommand)
  .build() {
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
