// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteConnectClientAddInRequest, DeleteConnectClientAddInResult } from "../models/models_0";
import { DeleteConnectClientAddIn } from "../schemas/schemas_10_Add";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Deletes a client-add-in for Amazon Connect that is configured within a
 *          directory.</p>
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
 *  <p>The user is not authorized to access a resource.</p>
 *
 * @throws {@link InvalidParameterValuesException} (client fault)
 *  <p>One or more parameter values are not valid.</p>
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
export class DeleteConnectClientAddInCommand extends $Command
  .classBuilder<
    DeleteConnectClientAddInCommandInput,
    DeleteConnectClientAddInCommandOutput,
    WorkSpacesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkSpacesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WorkspacesService", "DeleteConnectClientAddIn", {})
  .n("WorkSpacesClient", "DeleteConnectClientAddInCommand")
  .sc(DeleteConnectClientAddIn)
  .build() {
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
