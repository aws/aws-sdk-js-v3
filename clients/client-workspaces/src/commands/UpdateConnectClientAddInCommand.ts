// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateConnectClientAddInRequest, UpdateConnectClientAddInResult } from "../models/models_0";
import { UpdateConnectClientAddIn$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateConnectClientAddInCommand}.
 */
export interface UpdateConnectClientAddInCommandInput extends UpdateConnectClientAddInRequest {}
/**
 * @public
 *
 * The output of {@link UpdateConnectClientAddInCommand}.
 */
export interface UpdateConnectClientAddInCommandOutput extends UpdateConnectClientAddInResult, __MetadataBearer {}

/**
 * <p>Updates a Amazon Connect client add-in. Use this action to update the name and
 *          endpoint URL of a Amazon Connect client add-in.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, UpdateConnectClientAddInCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, UpdateConnectClientAddInCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * // import type { WorkSpacesClientConfig } from "@aws-sdk/client-workspaces";
 * const config = {}; // type is WorkSpacesClientConfig
 * const client = new WorkSpacesClient(config);
 * const input = { // UpdateConnectClientAddInRequest
 *   AddInId: "STRING_VALUE", // required
 *   ResourceId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   URL: "STRING_VALUE",
 * };
 * const command = new UpdateConnectClientAddInCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateConnectClientAddInCommandInput - {@link UpdateConnectClientAddInCommandInput}
 * @returns {@link UpdateConnectClientAddInCommandOutput}
 * @see {@link UpdateConnectClientAddInCommandInput} for command's `input` shape.
 * @see {@link UpdateConnectClientAddInCommandOutput} for command's `response` shape.
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
export class UpdateConnectClientAddInCommand extends $Command
  .classBuilder<
    UpdateConnectClientAddInCommandInput,
    UpdateConnectClientAddInCommandOutput,
    WorkSpacesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkSpacesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WorkspacesService", "UpdateConnectClientAddIn", {})
  .n("WorkSpacesClient", "UpdateConnectClientAddInCommand")
  .sc(UpdateConnectClientAddIn$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateConnectClientAddInRequest;
      output: {};
    };
    sdk: {
      input: UpdateConnectClientAddInCommandInput;
      output: UpdateConnectClientAddInCommandOutput;
    };
  };
}
