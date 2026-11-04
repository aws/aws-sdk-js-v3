// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateMonitorInput, UpdateMonitorOutput } from "../models/models_0";
import { UpdateMonitor$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateMonitorCommand}.
 */
export interface UpdateMonitorCommandInput extends UpdateMonitorInput {}
/**
 * @public
 *
 * The output of {@link UpdateMonitorCommand}.
 */
export interface UpdateMonitorCommandOutput extends UpdateMonitorOutput, __MetadataBearer {}

/**
 * Update a monitor to add or remove local or remote resources.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFlowMonitorClient, UpdateMonitorCommand } from "@aws-sdk/client-networkflowmonitor"; // ES Modules import
 * // const { NetworkFlowMonitorClient, UpdateMonitorCommand } = require("@aws-sdk/client-networkflowmonitor"); // CommonJS import
 * // import type { NetworkFlowMonitorClientConfig } from "@aws-sdk/client-networkflowmonitor";
 * const config = {}; // type is NetworkFlowMonitorClientConfig
 * const client = new NetworkFlowMonitorClient(config);
 * const input = { // UpdateMonitorInput
 *   monitorName: "STRING_VALUE", // required
 *   localResourcesToAdd: [ // MonitorLocalResources
 *     { // MonitorLocalResource
 *       type: "AWS::EC2::VPC" || "AWS::AvailabilityZone" || "AWS::EC2::Subnet" || "AWS::Region" || "AWS::EKS::Cluster", // required
 *       identifier: "STRING_VALUE", // required
 *     },
 *   ],
 *   localResourcesToRemove: [
 *     {
 *       type: "AWS::EC2::VPC" || "AWS::AvailabilityZone" || "AWS::EC2::Subnet" || "AWS::Region" || "AWS::EKS::Cluster", // required
 *       identifier: "STRING_VALUE", // required
 *     },
 *   ],
 *   remoteResourcesToAdd: [ // MonitorRemoteResources
 *     { // MonitorRemoteResource
 *       type: "AWS::EC2::VPC" || "AWS::AvailabilityZone" || "AWS::EC2::Subnet" || "AWS::AWSService" || "AWS::Region", // required
 *       identifier: "STRING_VALUE", // required
 *     },
 *   ],
 *   remoteResourcesToRemove: [
 *     {
 *       type: "AWS::EC2::VPC" || "AWS::AvailabilityZone" || "AWS::EC2::Subnet" || "AWS::AWSService" || "AWS::Region", // required
 *       identifier: "STRING_VALUE", // required
 *     },
 *   ],
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new UpdateMonitorCommand(input);
 * const response = await client.send(command);
 * // { // UpdateMonitorOutput
 * //   monitorArn: "STRING_VALUE", // required
 * //   monitorName: "STRING_VALUE", // required
 * //   monitorStatus: "PENDING" || "ACTIVE" || "INACTIVE" || "ERROR" || "DELETING", // required
 * //   localResources: [ // MonitorLocalResources // required
 * //     { // MonitorLocalResource
 * //       type: "AWS::EC2::VPC" || "AWS::AvailabilityZone" || "AWS::EC2::Subnet" || "AWS::Region" || "AWS::EKS::Cluster", // required
 * //       identifier: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   remoteResources: [ // MonitorRemoteResources // required
 * //     { // MonitorRemoteResource
 * //       type: "AWS::EC2::VPC" || "AWS::AvailabilityZone" || "AWS::EC2::Subnet" || "AWS::AWSService" || "AWS::Region", // required
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
 * @param UpdateMonitorCommandInput - {@link UpdateMonitorCommandInput}
 * @returns {@link UpdateMonitorCommandOutput}
 * @see {@link UpdateMonitorCommandInput} for command's `input` shape.
 * @see {@link UpdateMonitorCommandOutput} for command's `response` shape.
 * @see {@link NetworkFlowMonitorClientResolvedConfig | config} for NetworkFlowMonitorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have sufficient permission to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal error occurred.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The request specifies a resource that doesn't exist.
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
export class UpdateMonitorCommand extends command<UpdateMonitorCommandInput, UpdateMonitorCommandOutput>(
  _ep0,
  _mw0,
  "UpdateMonitor",
  UpdateMonitor$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateMonitorInput;
      output: UpdateMonitorOutput;
    };
    sdk: {
      input: UpdateMonitorCommandInput;
      output: UpdateMonitorCommandOutput;
    };
  };
}
