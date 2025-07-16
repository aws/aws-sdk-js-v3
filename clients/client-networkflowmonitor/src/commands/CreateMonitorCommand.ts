// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateMonitorInput, CreateMonitorOutput } from "../models/models_0";
import {
  NetworkFlowMonitorClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../NetworkFlowMonitorClient";
import { de_CreateMonitorCommand, se_CreateMonitorCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateMonitorCommand}.
 */
export interface CreateMonitorCommandInput extends CreateMonitorInput {}
/**
 * @public
 *
 * The output of {@link CreateMonitorCommand}.
 */
export interface CreateMonitorCommandOutput extends CreateMonitorOutput, __MetadataBearer {}

/**
 * <p>Create a monitor for specific network flows between local and remote resources, so that you can monitor network performance for one or several of your workloads. For each monitor, Network Flow Monitor publishes detailed end-to-end performance metrics and a network health indicators (NHI) that informs you whether there were Amazon Web Services network issues for one or more of the network flows tracked by a monitor, during a time period that you choose. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFlowMonitorClient, CreateMonitorCommand } from "@aws-sdk/client-networkflowmonitor"; // ES Modules import
 * // const { NetworkFlowMonitorClient, CreateMonitorCommand } = require("@aws-sdk/client-networkflowmonitor"); // CommonJS import
 * const client = new NetworkFlowMonitorClient(config);
 * const input = { // CreateMonitorInput
 *   monitorName: "STRING_VALUE", // required
 *   localResources: [ // MonitorLocalResources // required
 *     { // MonitorLocalResource
 *       type: "AWS::EC2::VPC" || "AWS::AvailabilityZone" || "AWS::EC2::Subnet", // required
 *       identifier: "STRING_VALUE", // required
 *     },
 *   ],
 *   remoteResources: [ // MonitorRemoteResources
 *     { // MonitorRemoteResource
 *       type: "AWS::EC2::VPC" || "AWS::AvailabilityZone" || "AWS::EC2::Subnet" || "AWS::AWSService", // required
 *       identifier: "STRING_VALUE", // required
 *     },
 *   ],
 *   scopeArn: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateMonitorCommand(input);
 * const response = await client.send(command);
 * // { // CreateMonitorOutput
 * //   monitorArn: "STRING_VALUE", // required
 * //   monitorName: "STRING_VALUE", // required
 * //   monitorStatus: "PENDING" || "ACTIVE" || "INACTIVE" || "ERROR" || "DELETING", // required
 * //   localResources: [ // MonitorLocalResources // required
 * //     { // MonitorLocalResource
 * //       type: "AWS::EC2::VPC" || "AWS::AvailabilityZone" || "AWS::EC2::Subnet", // required
 * //       identifier: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   remoteResources: [ // MonitorRemoteResources // required
 * //     { // MonitorRemoteResource
 * //       type: "AWS::EC2::VPC" || "AWS::AvailabilityZone" || "AWS::EC2::Subnet" || "AWS::AWSService", // required
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
 * @param CreateMonitorCommandInput - {@link CreateMonitorCommandInput}
 * @returns {@link CreateMonitorCommandOutput}
 * @see {@link CreateMonitorCommandInput} for command's `input` shape.
 * @see {@link CreateMonitorCommandOutput} for command's `response` shape.
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
export class CreateMonitorCommand extends $Command
  .classBuilder<
    CreateMonitorCommandInput,
    CreateMonitorCommandOutput,
    NetworkFlowMonitorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NetworkFlowMonitorClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("NetworkFlowMonitor", "CreateMonitor", {})
  .n("NetworkFlowMonitorClient", "CreateMonitorCommand")
  .f(void 0, void 0)
  .ser(se_CreateMonitorCommand)
  .de(de_CreateMonitorCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateMonitorInput;
      output: CreateMonitorOutput;
    };
    sdk: {
      input: CreateMonitorCommandInput;
      output: CreateMonitorCommandOutput;
    };
  };
}
