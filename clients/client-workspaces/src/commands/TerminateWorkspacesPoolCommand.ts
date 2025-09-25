// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { TerminateWorkspacesPoolRequest, TerminateWorkspacesPoolResult } from "../models/models_1";
import { TerminateWorkspacesPool } from "../schemas/schemas_32_WorkspacesPool";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export class TerminateWorkspacesPoolCommand extends $Command
  .classBuilder<
    TerminateWorkspacesPoolCommandInput,
    TerminateWorkspacesPoolCommandOutput,
    WorkSpacesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkSpacesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WorkspacesService", "TerminateWorkspacesPool", {})
  .n("WorkSpacesClient", "TerminateWorkspacesPoolCommand")
  .sc(TerminateWorkspacesPool)
  .build() {
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
