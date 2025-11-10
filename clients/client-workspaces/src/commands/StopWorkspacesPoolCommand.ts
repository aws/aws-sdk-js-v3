// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { StopWorkspacesPoolRequest, StopWorkspacesPoolResult } from "../models/models_1";
import { StopWorkspacesPool } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StopWorkspacesPoolCommand}.
 */
export interface StopWorkspacesPoolCommandInput extends StopWorkspacesPoolRequest {}
/**
 * @public
 *
 * The output of {@link StopWorkspacesPoolCommand}.
 */
export interface StopWorkspacesPoolCommandOutput extends StopWorkspacesPoolResult, __MetadataBearer {}

/**
 * <p>Stops the specified pool.</p>
 *          <p>You cannot stop a WorkSpace pool unless it has a running mode of <code>AutoStop</code>
 *          and a state of <code>AVAILABLE</code>, <code>IMPAIRED</code>, <code>UNHEALTHY</code>, or <code>ERROR</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, StopWorkspacesPoolCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, StopWorkspacesPoolCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * // import type { WorkSpacesClientConfig } from "@aws-sdk/client-workspaces";
 * const config = {}; // type is WorkSpacesClientConfig
 * const client = new WorkSpacesClient(config);
 * const input = { // StopWorkspacesPoolRequest
 *   PoolId: "STRING_VALUE", // required
 * };
 * const command = new StopWorkspacesPoolCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StopWorkspacesPoolCommandInput - {@link StopWorkspacesPoolCommandInput}
 * @returns {@link StopWorkspacesPoolCommandOutput}
 * @see {@link StopWorkspacesPoolCommandInput} for command's `input` shape.
 * @see {@link StopWorkspacesPoolCommandOutput} for command's `response` shape.
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
export class StopWorkspacesPoolCommand extends $Command
  .classBuilder<
    StopWorkspacesPoolCommandInput,
    StopWorkspacesPoolCommandOutput,
    WorkSpacesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkSpacesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WorkspacesService", "StopWorkspacesPool", {})
  .n("WorkSpacesClient", "StopWorkspacesPoolCommand")
  .sc(StopWorkspacesPool)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopWorkspacesPoolRequest;
      output: {};
    };
    sdk: {
      input: StopWorkspacesPoolCommandInput;
      output: StopWorkspacesPoolCommandOutput;
    };
  };
}
