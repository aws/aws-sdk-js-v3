// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import {
  GetInstanceAccessInput,
  GetInstanceAccessOutput,
  GetInstanceAccessOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_GetInstanceAccessCommand, se_GetInstanceAccessCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetInstanceAccessCommand}.
 */
export interface GetInstanceAccessCommandInput extends GetInstanceAccessInput {}
/**
 * @public
 *
 * The output of {@link GetInstanceAccessCommand}.
 */
export interface GetInstanceAccessCommandOutput extends GetInstanceAccessOutput, __MetadataBearer {}

/**
 * <p>Requests authorization to remotely connect to an instance in an Amazon GameLift managed fleet.
 *             Use this operation to connect to instances with game servers that use Amazon GameLift server SDK
 *             4.x or earlier. To connect to instances with game servers that use server SDK 5.x or
 *             later, call <a>GetComputeAccess</a>.</p>
 *          <p>To request access to an instance, specify IDs for the instance and the fleet it
 *             belongs to. You can retrieve instance IDs for a fleet by calling <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeInstances.html">DescribeInstances</a> with the fleet ID. </p>
 *          <p>If successful, this operation returns an IP address and credentials. The returned
 *             credentials match the operating system of the instance, as follows: </p>
 *          <ul>
 *             <li>
 *                <p>For a Windows instance: returns a user name and secret (password) for use with
 *                     a Windows Remote Desktop client. </p>
 *             </li>
 *             <li>
 *                <p>For a Linux instance: returns a user name and secret (RSA private key) for use
 *                     with an SSH client. You must save the secret to a <code>.pem</code> file. If
 *                     you're using the CLI, see the example <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_GetInstanceAccess.html#API_GetInstanceAccess_Examples"> Get credentials for a Linux instance</a> for tips on automatically
 *                     saving the secret to a <code>.pem</code> file. </p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Learn more</b>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-remote-access.html">Remotely connect to
 *                 fleet instances</a>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-creating-debug.html">Debug fleet
 *                 issues</a>
 *          </p>
 *          <p>
 *             <b>Related actions</b>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, GetInstanceAccessCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, GetInstanceAccessCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const input = { // GetInstanceAccessInput
 *   FleetId: "STRING_VALUE", // required
 *   InstanceId: "STRING_VALUE", // required
 * };
 * const command = new GetInstanceAccessCommand(input);
 * const response = await client.send(command);
 * // { // GetInstanceAccessOutput
 * //   InstanceAccess: { // InstanceAccess
 * //     FleetId: "STRING_VALUE",
 * //     InstanceId: "STRING_VALUE",
 * //     IpAddress: "STRING_VALUE",
 * //     OperatingSystem: "WINDOWS_2012" || "AMAZON_LINUX" || "AMAZON_LINUX_2" || "WINDOWS_2016" || "AMAZON_LINUX_2023",
 * //     Credentials: { // InstanceCredentials
 * //       UserName: "STRING_VALUE",
 * //       Secret: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetInstanceAccessCommandInput - {@link GetInstanceAccessCommandInput}
 * @returns {@link GetInstanceAccessCommandOutput}
 * @see {@link GetInstanceAccessCommandInput} for command's `input` shape.
 * @see {@link GetInstanceAccessCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for GameLiftClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>The service encountered an unrecoverable internal failure while processing the
 *             request. Clients can retry such requests immediately or after a waiting period.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>One or more parameter values in the request are invalid. Correct the invalid parameter
 *             values before retrying.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>THe requested resources was not found. The resource was either not created yet or deleted.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>The client failed authentication. Clients should not retry such requests.</p>
 *
 * @throws {@link GameLiftServiceException}
 * <p>Base exception class for all service exceptions from GameLift service.</p>
 *
 * @public
 */
export class GetInstanceAccessCommand extends $Command
  .classBuilder<
    GetInstanceAccessCommandInput,
    GetInstanceAccessCommandOutput,
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
  .s("GameLift", "GetInstanceAccess", {})
  .n("GameLiftClient", "GetInstanceAccessCommand")
  .f(void 0, GetInstanceAccessOutputFilterSensitiveLog)
  .ser(se_GetInstanceAccessCommand)
  .de(de_GetInstanceAccessCommand)
  .build() {}
