// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StopWorkspacesPoolRequest, StopWorkspacesPoolResult } from "../models/models_0";
import { StopWorkspacesPool$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * > **Note:** End of support notice: On December 31, 2027, Amazon Web Services will end support for Amazon WorkSpaces Pools. After December 31, 2027, you will no longer be able to access the Amazon WorkSpaces Pools console or Amazon WorkSpaces Pools resources. For more information, see [Amazon WorkSpaces Pools end of support](https://docs.aws.amazon.com/workspaces/latest/adminguide/wsp-pools-end-of-support.html).
 *
 * Stops the specified pool.
 *
 * You cannot stop a WorkSpace pool unless it has a running mode of `AutoStop` and a state of `AVAILABLE`, `IMPAIRED`, `UNHEALTHY`, or `ERROR`.
 *
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
 *
 * The user is not authorized to access a resource.
 *
 * @throws {@link InvalidParameterValuesException} (client fault)
 *
 * One or more parameter values are not valid.
 *
 * @throws {@link InvalidResourceStateException} (client fault)
 *
 * The state of the resource is not valid for this operation.
 *
 * @throws {@link OperationInProgressException} (client fault)
 *
 * The properties of this WorkSpace are currently being modified. Try again in a moment.
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
export class StopWorkspacesPoolCommand extends command<StopWorkspacesPoolCommandInput, StopWorkspacesPoolCommandOutput>(
  _ep0,
  _mw0,
  "StopWorkspacesPool",
  StopWorkspacesPool$
) {
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
