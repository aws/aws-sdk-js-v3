// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeletePerformanceMonitorInput, DeletePerformanceMonitorOutput } from "../models/models_0";
import { DeletePerformanceMonitor$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeletePerformanceMonitorCommand}.
 */
export interface DeletePerformanceMonitorCommandInput extends DeletePerformanceMonitorInput {}
/**
 * @public
 *
 * The output of {@link DeletePerformanceMonitorCommand}.
 */
export interface DeletePerformanceMonitorCommandOutput extends DeletePerformanceMonitorOutput, __MetadataBearer {}

/**
 * <p>Delete a performance monitor. Network Flow Monitor stops tracking network performance for the resources that the monitor included.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFlowMonitorClient, DeletePerformanceMonitorCommand } from "@aws-sdk/client-networkflowmonitor"; // ES Modules import
 * // const { NetworkFlowMonitorClient, DeletePerformanceMonitorCommand } = require("@aws-sdk/client-networkflowmonitor"); // CommonJS import
 * // import type { NetworkFlowMonitorClientConfig } from "@aws-sdk/client-networkflowmonitor";
 * const config = {}; // type is NetworkFlowMonitorClientConfig
 * const client = new NetworkFlowMonitorClient(config);
 * const input = { // DeletePerformanceMonitorInput
 *   monitorName: "STRING_VALUE", // required
 * };
 * const command = new DeletePerformanceMonitorCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeletePerformanceMonitorCommandInput - {@link DeletePerformanceMonitorCommandInput}
 * @returns {@link DeletePerformanceMonitorCommandOutput}
 * @see {@link DeletePerformanceMonitorCommandInput} for command's `input` shape.
 * @see {@link DeletePerformanceMonitorCommandOutput} for command's `response` shape.
 * @see {@link NetworkFlowMonitorClientResolvedConfig | config} for NetworkFlowMonitorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient permission to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The requested resource is in use.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request specifies a resource that doesn't exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Invalid request.</p>
 *
 * @throws {@link NetworkFlowMonitorServiceException}
 * <p>Base exception class for all service exceptions from NetworkFlowMonitor service.</p>
 *
 *
 * @public
 */
export class DeletePerformanceMonitorCommand extends command<DeletePerformanceMonitorCommandInput, DeletePerformanceMonitorCommandOutput>(
  _ep0,
  _mw0,
  "DeletePerformanceMonitor",
  DeletePerformanceMonitor$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeletePerformanceMonitorInput;
      output: {};
    };
    sdk: {
      input: DeletePerformanceMonitorCommandInput;
      output: DeletePerformanceMonitorCommandOutput;
    };
  };
}
