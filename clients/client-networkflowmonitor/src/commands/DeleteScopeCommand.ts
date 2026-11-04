// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteScopeInput, DeleteScopeOutput } from "../models/models_0";
import { DeleteScope$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteScopeCommand}.
 */
export interface DeleteScopeCommandInput extends DeleteScopeInput {}
/**
 * @public
 *
 * The output of {@link DeleteScopeCommand}.
 */
export interface DeleteScopeCommandOutput extends DeleteScopeOutput, __MetadataBearer {}

/**
 * Deletes a scope that has been defined.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFlowMonitorClient, DeleteScopeCommand } from "@aws-sdk/client-networkflowmonitor"; // ES Modules import
 * // const { NetworkFlowMonitorClient, DeleteScopeCommand } = require("@aws-sdk/client-networkflowmonitor"); // CommonJS import
 * // import type { NetworkFlowMonitorClientConfig } from "@aws-sdk/client-networkflowmonitor";
 * const config = {}; // type is NetworkFlowMonitorClientConfig
 * const client = new NetworkFlowMonitorClient(config);
 * const input = { // DeleteScopeInput
 *   scopeId: "STRING_VALUE", // required
 * };
 * const command = new DeleteScopeCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteScopeCommandInput - {@link DeleteScopeCommandInput}
 * @returns {@link DeleteScopeCommandOutput}
 * @see {@link DeleteScopeCommandInput} for command's `input` shape.
 * @see {@link DeleteScopeCommandOutput} for command's `response` shape.
 * @see {@link NetworkFlowMonitorClientResolvedConfig | config} for NetworkFlowMonitorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have sufficient permission to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The requested resource is in use.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal error occurred.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The request specifies a resource that doesn't exist.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The request exceeded a service quota.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Invalid request.
 *
 * @throws {@link NetworkFlowMonitorServiceException}
 *
 * Base exception class for all service exceptions from NetworkFlowMonitor service.
 *
 * @public
 */
export class DeleteScopeCommand extends command<DeleteScopeCommandInput, DeleteScopeCommandOutput>(
  _ep0,
  _mw0,
  "DeleteScope",
  DeleteScope$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteScopeInput;
      output: {};
    };
    sdk: {
      input: DeleteScopeCommandInput;
      output: DeleteScopeCommandOutput;
    };
  };
}
