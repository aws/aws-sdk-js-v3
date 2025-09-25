// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { StartWorkspacesPoolRequest, StartWorkspacesPoolResult } from "../models/models_1";
import { StartWorkspacesPool } from "../schemas/schemas_32_WorkspacesPool";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartWorkspacesPoolCommand}.
 */
export interface StartWorkspacesPoolCommandInput extends StartWorkspacesPoolRequest {}
/**
 * @public
 *
 * The output of {@link StartWorkspacesPoolCommand}.
 */
export interface StartWorkspacesPoolCommandOutput extends StartWorkspacesPoolResult, __MetadataBearer {}

/**
 * <p>Starts the specified pool.</p>
 *          <p>You cannot start a pool unless it has a running mode of
 *          <code>AutoStop</code> and a state of <code>STOPPED</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, StartWorkspacesPoolCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, StartWorkspacesPoolCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * // import type { WorkSpacesClientConfig } from "@aws-sdk/client-workspaces";
 * const config = {}; // type is WorkSpacesClientConfig
 * const client = new WorkSpacesClient(config);
 * const input = { // StartWorkspacesPoolRequest
 *   PoolId: "STRING_VALUE", // required
 * };
 * const command = new StartWorkspacesPoolCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StartWorkspacesPoolCommandInput - {@link StartWorkspacesPoolCommandInput}
 * @returns {@link StartWorkspacesPoolCommandOutput}
 * @see {@link StartWorkspacesPoolCommandInput} for command's `input` shape.
 * @see {@link StartWorkspacesPoolCommandOutput} for command's `response` shape.
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
 * @throws {@link OperationNotSupportedException} (client fault)
 *  <p>This operation is not supported.</p>
 *
 * @throws {@link ResourceLimitExceededException} (client fault)
 *  <p>Your resource limits have been exceeded.</p>
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
export class StartWorkspacesPoolCommand extends $Command
  .classBuilder<
    StartWorkspacesPoolCommandInput,
    StartWorkspacesPoolCommandOutput,
    WorkSpacesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkSpacesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WorkspacesService", "StartWorkspacesPool", {})
  .n("WorkSpacesClient", "StartWorkspacesPoolCommand")
  .sc(StartWorkspacesPool)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartWorkspacesPoolRequest;
      output: {};
    };
    sdk: {
      input: StartWorkspacesPoolCommandInput;
      output: StartWorkspacesPoolCommandOutput;
    };
  };
}
