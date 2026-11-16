// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdatePerformanceMonitorInput, UpdatePerformanceMonitorOutput } from "../models/models_0";
import { UpdatePerformanceMonitor$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdatePerformanceMonitorCommand}.
 */
export interface UpdatePerformanceMonitorCommandInput extends UpdatePerformanceMonitorInput {}
/**
 * @public
 *
 * The output of {@link UpdatePerformanceMonitorCommand}.
 */
export interface UpdatePerformanceMonitorCommandOutput extends UpdatePerformanceMonitorOutput, __MetadataBearer {}

/**
 * <p>Update a performance monitor, to add or remove the resources that the monitor tracks network performance for.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFlowMonitorClient, UpdatePerformanceMonitorCommand } from "@aws-sdk/client-networkflowmonitor"; // ES Modules import
 * // const { NetworkFlowMonitorClient, UpdatePerformanceMonitorCommand } = require("@aws-sdk/client-networkflowmonitor"); // CommonJS import
 * // import type { NetworkFlowMonitorClientConfig } from "@aws-sdk/client-networkflowmonitor";
 * const config = {}; // type is NetworkFlowMonitorClientConfig
 * const client = new NetworkFlowMonitorClient(config);
 * const input = { // UpdatePerformanceMonitorInput
 *   monitorName: "STRING_VALUE", // required
 *   targetsToAdd: [ // PerformanceMonitorTargets
 *     { // PerformanceMonitorTarget
 *       type: "AWS::EC2::VPC", // required
 *       identifier: "STRING_VALUE", // required
 *     },
 *   ],
 *   targetsToRemove: [
 *     {
 *       type: "AWS::EC2::VPC", // required
 *       identifier: "STRING_VALUE", // required
 *     },
 *   ],
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new UpdatePerformanceMonitorCommand(input);
 * const response = await client.send(command);
 * // { // UpdatePerformanceMonitorOutput
 * //   monitorArn: "STRING_VALUE", // required
 * //   monitorName: "STRING_VALUE", // required
 * //   monitorStatus: "PENDING" || "ACTIVE" || "INACTIVE" || "ERROR" || "DELETING", // required
 * //   monitorType: "VPC", // required
 * //   targets: [ // PerformanceMonitorTargets // required
 * //     { // PerformanceMonitorTarget
 * //       type: "AWS::EC2::VPC", // required
 * //       identifier: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   modifiedAt: new Date("TIMESTAMP"), // required
 * //   tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdatePerformanceMonitorCommandInput - {@link UpdatePerformanceMonitorCommandInput}
 * @returns {@link UpdatePerformanceMonitorCommandOutput}
 * @see {@link UpdatePerformanceMonitorCommandInput} for command's `input` shape.
 * @see {@link UpdatePerformanceMonitorCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request exceeded a service quota.</p>
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
export class UpdatePerformanceMonitorCommand extends command<UpdatePerformanceMonitorCommandInput, UpdatePerformanceMonitorCommandOutput>(
  _ep0,
  _mw0,
  "UpdatePerformanceMonitor",
  UpdatePerformanceMonitor$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdatePerformanceMonitorInput;
      output: UpdatePerformanceMonitorOutput;
    };
    sdk: {
      input: UpdatePerformanceMonitorCommandInput;
      output: UpdatePerformanceMonitorCommandOutput;
    };
  };
}
