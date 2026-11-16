// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetPerformanceMonitorInput, GetPerformanceMonitorOutput } from "../models/models_0";
import { GetPerformanceMonitor$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetPerformanceMonitorCommand}.
 */
export interface GetPerformanceMonitorCommandInput extends GetPerformanceMonitorInput {}
/**
 * @public
 *
 * The output of {@link GetPerformanceMonitorCommand}.
 */
export interface GetPerformanceMonitorCommandOutput extends GetPerformanceMonitorOutput, __MetadataBearer {}

/**
 * <p>Returns information about a performance monitor, including the resources that it monitors, its status, and the tags for the monitor.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFlowMonitorClient, GetPerformanceMonitorCommand } from "@aws-sdk/client-networkflowmonitor"; // ES Modules import
 * // const { NetworkFlowMonitorClient, GetPerformanceMonitorCommand } = require("@aws-sdk/client-networkflowmonitor"); // CommonJS import
 * // import type { NetworkFlowMonitorClientConfig } from "@aws-sdk/client-networkflowmonitor";
 * const config = {}; // type is NetworkFlowMonitorClientConfig
 * const client = new NetworkFlowMonitorClient(config);
 * const input = { // GetPerformanceMonitorInput
 *   monitorName: "STRING_VALUE", // required
 * };
 * const command = new GetPerformanceMonitorCommand(input);
 * const response = await client.send(command);
 * // { // GetPerformanceMonitorOutput
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
 * @param GetPerformanceMonitorCommandInput - {@link GetPerformanceMonitorCommandInput}
 * @returns {@link GetPerformanceMonitorCommandOutput}
 * @see {@link GetPerformanceMonitorCommandInput} for command's `input` shape.
 * @see {@link GetPerformanceMonitorCommandOutput} for command's `response` shape.
 * @see {@link NetworkFlowMonitorClientResolvedConfig | config} for NetworkFlowMonitorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient permission to perform this action.</p>
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
export class GetPerformanceMonitorCommand extends command<GetPerformanceMonitorCommandInput, GetPerformanceMonitorCommandOutput>(
  _ep0,
  _mw0,
  "GetPerformanceMonitor",
  GetPerformanceMonitor$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetPerformanceMonitorInput;
      output: GetPerformanceMonitorOutput;
    };
    sdk: {
      input: GetPerformanceMonitorCommandInput;
      output: GetPerformanceMonitorCommandOutput;
    };
  };
}
