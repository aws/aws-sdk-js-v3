// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetComponentInput, GetComponentOutput } from "../models/models_0";
import { de_GetComponentCommand, se_GetComponentCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SsmSapClientResolvedConfig } from "../SsmSapClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetComponentCommand}.
 */
export interface GetComponentCommandInput extends GetComponentInput {}
/**
 * @public
 *
 * The output of {@link GetComponentCommand}.
 */
export interface GetComponentCommandOutput extends GetComponentOutput, __MetadataBearer {}

/**
 * <p>Gets the component of an application registered with AWS Systems Manager for
 *          SAP.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SsmSapClient, GetComponentCommand } from "@aws-sdk/client-ssm-sap"; // ES Modules import
 * // const { SsmSapClient, GetComponentCommand } = require("@aws-sdk/client-ssm-sap"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new SsmSapClient(config);
 * const input = { // GetComponentInput
 *   ApplicationId: "STRING_VALUE", // required
 *   ComponentId: "STRING_VALUE", // required
 * };
 * const command = new GetComponentCommand(input);
 * const response = await client.send(command);
 * // { // GetComponentOutput
 * //   Component: { // Component
 * //     ComponentId: "STRING_VALUE",
 * //     Sid: "STRING_VALUE",
 * //     SystemNumber: "STRING_VALUE",
 * //     ParentComponent: "STRING_VALUE",
 * //     ChildComponents: [ // ComponentIdList
 * //       "STRING_VALUE",
 * //     ],
 * //     ApplicationId: "STRING_VALUE",
 * //     ComponentType: "HANA" || "HANA_NODE" || "ABAP" || "ASCS" || "DIALOG" || "WEBDISP" || "WD" || "ERS",
 * //     Status: "ACTIVATED" || "STARTING" || "STOPPED" || "STOPPING" || "RUNNING" || "RUNNING_WITH_ERROR" || "UNDEFINED",
 * //     SapHostname: "STRING_VALUE",
 * //     SapFeature: "STRING_VALUE",
 * //     SapKernelVersion: "STRING_VALUE",
 * //     HdbVersion: "STRING_VALUE",
 * //     Resilience: { // Resilience
 * //       HsrTier: "STRING_VALUE",
 * //       HsrReplicationMode: "PRIMARY" || "NONE" || "SYNC" || "SYNCMEM" || "ASYNC",
 * //       HsrOperationMode: "PRIMARY" || "LOGREPLAY" || "DELTA_DATASHIPPING" || "LOGREPLAY_READACCESS" || "NONE",
 * //       ClusterStatus: "ONLINE" || "STANDBY" || "MAINTENANCE" || "OFFLINE" || "NONE",
 * //       EnqueueReplication: true || false,
 * //     },
 * //     AssociatedHost: { // AssociatedHost
 * //       Hostname: "STRING_VALUE",
 * //       Ec2InstanceId: "STRING_VALUE",
 * //       IpAddresses: [ // IpAddressList
 * //         { // IpAddressMember
 * //           IpAddress: "STRING_VALUE",
 * //           Primary: true || false,
 * //           AllocationType: "VPC_SUBNET" || "ELASTIC_IP" || "OVERLAY" || "UNKNOWN",
 * //         },
 * //       ],
 * //       OsVersion: "STRING_VALUE",
 * //     },
 * //     Databases: [ // DatabaseIdList
 * //       "STRING_VALUE",
 * //     ],
 * //     Hosts: [ // HostList
 * //       { // Host
 * //         HostName: "STRING_VALUE",
 * //         HostIp: "STRING_VALUE",
 * //         EC2InstanceId: "STRING_VALUE",
 * //         InstanceId: "STRING_VALUE",
 * //         HostRole: "LEADER" || "WORKER" || "STANDBY" || "UNKNOWN",
 * //         OsVersion: "STRING_VALUE",
 * //       },
 * //     ],
 * //     PrimaryHost: "STRING_VALUE",
 * //     DatabaseConnection: { // DatabaseConnection
 * //       DatabaseConnectionMethod: "DIRECT" || "OVERLAY",
 * //       DatabaseArn: "STRING_VALUE",
 * //       ConnectionIp: "STRING_VALUE",
 * //     },
 * //     LastUpdated: new Date("TIMESTAMP"),
 * //     Arn: "STRING_VALUE",
 * //   },
 * //   Tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetComponentCommandInput - {@link GetComponentCommandInput}
 * @returns {@link GetComponentCommandOutput}
 * @see {@link GetComponentCommandInput} for command's `input` shape.
 * @see {@link GetComponentCommandOutput} for command's `response` shape.
 * @see {@link SsmSapClientResolvedConfig | config} for SsmSapClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error has occurred.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>The request is not authorized.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service. </p>
 *
 * @throws {@link SsmSapServiceException}
 * <p>Base exception class for all service exceptions from SsmSap service.</p>
 *
 * @public
 */
export class GetComponentCommand extends $Command
  .classBuilder<
    GetComponentCommandInput,
    GetComponentCommandOutput,
    SsmSapClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SsmSapClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SsmSap", "GetComponent", {})
  .n("SsmSapClient", "GetComponentCommand")
  .f(void 0, void 0)
  .ser(se_GetComponentCommand)
  .de(de_GetComponentCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetComponentInput;
      output: GetComponentOutput;
    };
    sdk: {
      input: GetComponentCommandInput;
      output: GetComponentCommandOutput;
    };
  };
}
