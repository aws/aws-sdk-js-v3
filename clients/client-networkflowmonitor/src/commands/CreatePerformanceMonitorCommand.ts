// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreatePerformanceMonitorInput, CreatePerformanceMonitorOutput } from "../models/models_0";
import { CreatePerformanceMonitor$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreatePerformanceMonitorCommand}.
 */
export interface CreatePerformanceMonitorCommandInput extends CreatePerformanceMonitorInput {}
/**
 * @public
 *
 * The output of {@link CreatePerformanceMonitorCommand}.
 */
export interface CreatePerformanceMonitorCommandOutput extends CreatePerformanceMonitorOutput, __MetadataBearer {}

/**
 * <p>Create a performance monitor to monitor the traffic of the Amazon Virtual Private Clouds (VPCs) that you specify as targets, to determine whether the Amazon Web Services network is causing issues for your workloads. With a performance monitor, you can identify network degradation across paths between Availability Zones and across Amazon Web Services Regions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFlowMonitorClient, CreatePerformanceMonitorCommand } from "@aws-sdk/client-networkflowmonitor"; // ES Modules import
 * // const { NetworkFlowMonitorClient, CreatePerformanceMonitorCommand } = require("@aws-sdk/client-networkflowmonitor"); // CommonJS import
 * // import type { NetworkFlowMonitorClientConfig } from "@aws-sdk/client-networkflowmonitor";
 * const config = {}; // type is NetworkFlowMonitorClientConfig
 * const client = new NetworkFlowMonitorClient(config);
 * const input = { // CreatePerformanceMonitorInput
 *   monitorName: "STRING_VALUE", // required
 *   scopeArn: "STRING_VALUE",
 *   targets: [ // PerformanceMonitorTargets // required
 *     { // PerformanceMonitorTarget
 *       type: "AWS::EC2::VPC", // required
 *       identifier: "STRING_VALUE", // required
 *     },
 *   ],
 *   clientToken: "STRING_VALUE",
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreatePerformanceMonitorCommand(input);
 * const response = await client.send(command);
 * // { // CreatePerformanceMonitorOutput
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
 * @param CreatePerformanceMonitorCommandInput - {@link CreatePerformanceMonitorCommandInput}
 * @returns {@link CreatePerformanceMonitorCommandOutput}
 * @see {@link CreatePerformanceMonitorCommandInput} for command's `input` shape.
 * @see {@link CreatePerformanceMonitorCommandOutput} for command's `response` shape.
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
export class CreatePerformanceMonitorCommand extends command<CreatePerformanceMonitorCommandInput, CreatePerformanceMonitorCommandOutput>(
  _ep0,
  _mw0,
  "CreatePerformanceMonitor",
  CreatePerformanceMonitor$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreatePerformanceMonitorInput;
      output: CreatePerformanceMonitorOutput;
    };
    sdk: {
      input: CreatePerformanceMonitorCommandInput;
      output: CreatePerformanceMonitorCommandOutput;
    };
  };
}
