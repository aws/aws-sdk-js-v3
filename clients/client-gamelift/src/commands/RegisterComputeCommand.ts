// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import {
  RegisterComputeInput,
  RegisterComputeInputFilterSensitiveLog,
  RegisterComputeOutput,
  RegisterComputeOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_RegisterComputeCommand, se_RegisterComputeCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RegisterComputeCommand}.
 */
export interface RegisterComputeCommandInput extends RegisterComputeInput {}
/**
 * @public
 *
 * The output of {@link RegisterComputeCommand}.
 */
export interface RegisterComputeCommandOutput extends RegisterComputeOutput, __MetadataBearer {}

/**
 * <p>
 *             <b>This operation has been expanded to use with the Amazon GameLift containers feature, which is currently in public preview.</b>
 *          </p>
 *          <p>Registers a compute resource in an Amazon GameLift fleet. Register computes with an Amazon GameLift
 *             Anywhere fleet or a container fleet. </p>
 *          <p>For an Anywhere fleet or a container fleet that's running the Amazon GameLift Agent, the Agent
 *             handles all compute registry tasks for you. For an Anywhere fleet that doesn't use the
 *             Agent, call this operation to register fleet computes.</p>
 *          <p>To register a compute, give the compute a name (must be unique within the
 *             fleet) and specify the compute resource's DNS name or IP address. Provide a
 *             fleet ID and a fleet location to associate with the compute being registered. You can
 *             optionally include the path to a TLS certificate on the compute resource.</p>
 *          <p>If successful, this operation returns compute details, including an Amazon GameLift SDK
 *             endpoint or Agent endpoint. Game server processes running on the compute can use this
 *             endpoint to communicate with the Amazon GameLift service. Each server process includes the SDK
 *             endpoint in its call to the Amazon GameLift server SDK action <code>InitSDK()</code>. </p>
 *          <p>To view compute details, call <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeCompute.html">DescribeCompute</a> with the compute name. </p>
 *          <p>
 *             <b>Learn more</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-creating-anywhere.html">Create an
 *                         Anywhere fleet</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/integration-testing.html">Test your
 *                         integration</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-serversdk.html">Server SDK
 *                         reference guides</a> (for version 5.x)</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, RegisterComputeCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, RegisterComputeCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const input = { // RegisterComputeInput
 *   FleetId: "STRING_VALUE", // required
 *   ComputeName: "STRING_VALUE", // required
 *   CertificatePath: "STRING_VALUE",
 *   DnsName: "STRING_VALUE",
 *   IpAddress: "STRING_VALUE",
 *   Location: "STRING_VALUE",
 * };
 * const command = new RegisterComputeCommand(input);
 * const response = await client.send(command);
 * // { // RegisterComputeOutput
 * //   Compute: { // Compute
 * //     FleetId: "STRING_VALUE",
 * //     FleetArn: "STRING_VALUE",
 * //     ComputeName: "STRING_VALUE",
 * //     ComputeArn: "STRING_VALUE",
 * //     IpAddress: "STRING_VALUE",
 * //     DnsName: "STRING_VALUE",
 * //     ComputeStatus: "PENDING" || "ACTIVE" || "TERMINATING",
 * //     Location: "STRING_VALUE",
 * //     CreationTime: new Date("TIMESTAMP"),
 * //     OperatingSystem: "WINDOWS_2012" || "AMAZON_LINUX" || "AMAZON_LINUX_2" || "WINDOWS_2016" || "AMAZON_LINUX_2023",
 * //     Type: "t2.micro" || "t2.small" || "t2.medium" || "t2.large" || "c3.large" || "c3.xlarge" || "c3.2xlarge" || "c3.4xlarge" || "c3.8xlarge" || "c4.large" || "c4.xlarge" || "c4.2xlarge" || "c4.4xlarge" || "c4.8xlarge" || "c5.large" || "c5.xlarge" || "c5.2xlarge" || "c5.4xlarge" || "c5.9xlarge" || "c5.12xlarge" || "c5.18xlarge" || "c5.24xlarge" || "c5a.large" || "c5a.xlarge" || "c5a.2xlarge" || "c5a.4xlarge" || "c5a.8xlarge" || "c5a.12xlarge" || "c5a.16xlarge" || "c5a.24xlarge" || "r3.large" || "r3.xlarge" || "r3.2xlarge" || "r3.4xlarge" || "r3.8xlarge" || "r4.large" || "r4.xlarge" || "r4.2xlarge" || "r4.4xlarge" || "r4.8xlarge" || "r4.16xlarge" || "r5.large" || "r5.xlarge" || "r5.2xlarge" || "r5.4xlarge" || "r5.8xlarge" || "r5.12xlarge" || "r5.16xlarge" || "r5.24xlarge" || "r5a.large" || "r5a.xlarge" || "r5a.2xlarge" || "r5a.4xlarge" || "r5a.8xlarge" || "r5a.12xlarge" || "r5a.16xlarge" || "r5a.24xlarge" || "m3.medium" || "m3.large" || "m3.xlarge" || "m3.2xlarge" || "m4.large" || "m4.xlarge" || "m4.2xlarge" || "m4.4xlarge" || "m4.10xlarge" || "m5.large" || "m5.xlarge" || "m5.2xlarge" || "m5.4xlarge" || "m5.8xlarge" || "m5.12xlarge" || "m5.16xlarge" || "m5.24xlarge" || "m5a.large" || "m5a.xlarge" || "m5a.2xlarge" || "m5a.4xlarge" || "m5a.8xlarge" || "m5a.12xlarge" || "m5a.16xlarge" || "m5a.24xlarge" || "c5d.large" || "c5d.xlarge" || "c5d.2xlarge" || "c5d.4xlarge" || "c5d.9xlarge" || "c5d.12xlarge" || "c5d.18xlarge" || "c5d.24xlarge" || "c6a.large" || "c6a.xlarge" || "c6a.2xlarge" || "c6a.4xlarge" || "c6a.8xlarge" || "c6a.12xlarge" || "c6a.16xlarge" || "c6a.24xlarge" || "c6i.large" || "c6i.xlarge" || "c6i.2xlarge" || "c6i.4xlarge" || "c6i.8xlarge" || "c6i.12xlarge" || "c6i.16xlarge" || "c6i.24xlarge" || "r5d.large" || "r5d.xlarge" || "r5d.2xlarge" || "r5d.4xlarge" || "r5d.8xlarge" || "r5d.12xlarge" || "r5d.16xlarge" || "r5d.24xlarge" || "m6g.medium" || "m6g.large" || "m6g.xlarge" || "m6g.2xlarge" || "m6g.4xlarge" || "m6g.8xlarge" || "m6g.12xlarge" || "m6g.16xlarge" || "c6g.medium" || "c6g.large" || "c6g.xlarge" || "c6g.2xlarge" || "c6g.4xlarge" || "c6g.8xlarge" || "c6g.12xlarge" || "c6g.16xlarge" || "r6g.medium" || "r6g.large" || "r6g.xlarge" || "r6g.2xlarge" || "r6g.4xlarge" || "r6g.8xlarge" || "r6g.12xlarge" || "r6g.16xlarge" || "c6gn.medium" || "c6gn.large" || "c6gn.xlarge" || "c6gn.2xlarge" || "c6gn.4xlarge" || "c6gn.8xlarge" || "c6gn.12xlarge" || "c6gn.16xlarge" || "c7g.medium" || "c7g.large" || "c7g.xlarge" || "c7g.2xlarge" || "c7g.4xlarge" || "c7g.8xlarge" || "c7g.12xlarge" || "c7g.16xlarge" || "r7g.medium" || "r7g.large" || "r7g.xlarge" || "r7g.2xlarge" || "r7g.4xlarge" || "r7g.8xlarge" || "r7g.12xlarge" || "r7g.16xlarge" || "m7g.medium" || "m7g.large" || "m7g.xlarge" || "m7g.2xlarge" || "m7g.4xlarge" || "m7g.8xlarge" || "m7g.12xlarge" || "m7g.16xlarge" || "g5g.xlarge" || "g5g.2xlarge" || "g5g.4xlarge" || "g5g.8xlarge" || "g5g.16xlarge",
 * //     GameLiftServiceSdkEndpoint: "STRING_VALUE",
 * //     GameLiftAgentEndpoint: "STRING_VALUE",
 * //     InstanceId: "STRING_VALUE",
 * //     ContainerAttributes: { // ContainerAttributes
 * //       ContainerPortMappings: [ // ContainerPortMappingList
 * //         { // ContainerPortMapping
 * //           ContainerPort: Number("int"),
 * //           ConnectionPort: Number("int"),
 * //           Protocol: "TCP" || "UDP",
 * //         },
 * //       ],
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param RegisterComputeCommandInput - {@link RegisterComputeCommandInput}
 * @returns {@link RegisterComputeCommandOutput}
 * @see {@link RegisterComputeCommandInput} for command's `input` shape.
 * @see {@link RegisterComputeCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for GameLiftClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The requested operation would cause a conflict with the current state of a service
 *             resource associated with the request. Resolve the conflict before retrying this
 *             request.</p>
 *          <p></p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>The service encountered an unrecoverable internal failure while processing the
 *             request. Clients can retry such requests immediately or after a waiting period.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>One or more parameter values in the request are invalid. Correct the invalid parameter
 *             values before retrying.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The requested operation would cause the resource to exceed the allowed service limit.
 *             Resolve the issue before retrying.</p>
 *
 * @throws {@link NotReadyException} (client fault)
 *  <p> The operation failed because Amazon GameLift has not yet finished validating this compute. We
 *       recommend attempting 8 to 10 retries over 3 to 5 minutes with <a href="http://aws.amazon.com/blogs/https:/aws.amazon.com/blogs/architecture/exponential-backoff-and-jitter/">exponential
 *         backoffs and jitter</a>. </p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>The client failed authentication. Clients should not retry such requests.</p>
 *
 * @throws {@link GameLiftServiceException}
 * <p>Base exception class for all service exceptions from GameLift service.</p>
 *
 * @public
 */
export class RegisterComputeCommand extends $Command
  .classBuilder<
    RegisterComputeCommandInput,
    RegisterComputeCommandOutput,
    GameLiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: GameLiftClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("GameLift", "RegisterCompute", {})
  .n("GameLiftClient", "RegisterComputeCommand")
  .f(RegisterComputeInputFilterSensitiveLog, RegisterComputeOutputFilterSensitiveLog)
  .ser(se_RegisterComputeCommand)
  .de(de_RegisterComputeCommand)
  .build() {}
