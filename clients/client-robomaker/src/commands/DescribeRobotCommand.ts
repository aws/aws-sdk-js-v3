// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeRobotRequest, DescribeRobotResponse } from "../models/models_0";
import { de_DescribeRobotCommand, se_DescribeRobotCommand } from "../protocols/Aws_restJson1";
import { RoboMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RoboMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeRobotCommand}.
 */
export interface DescribeRobotCommandInput extends DescribeRobotRequest {}
/**
 * @public
 *
 * The output of {@link DescribeRobotCommand}.
 */
export interface DescribeRobotCommandOutput extends DescribeRobotResponse, __MetadataBearer {}

/**
 * <p>Describes a robot.</p>
 *          <important>
 *             <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p>
 *          </important>
 *
 * @deprecated Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, DescribeRobotCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, DescribeRobotCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const input = { // DescribeRobotRequest
 *   robot: "STRING_VALUE", // required
 * };
 * const command = new DescribeRobotCommand(input);
 * const response = await client.send(command);
 * // { // DescribeRobotResponse
 * //   arn: "STRING_VALUE",
 * //   name: "STRING_VALUE",
 * //   fleetArn: "STRING_VALUE",
 * //   status: "Available" || "Registered" || "PendingNewDeployment" || "Deploying" || "Failed" || "InSync" || "NoResponse",
 * //   greengrassGroupId: "STRING_VALUE",
 * //   createdAt: new Date("TIMESTAMP"),
 * //   architecture: "X86_64" || "ARM64" || "ARMHF",
 * //   lastDeploymentJob: "STRING_VALUE",
 * //   lastDeploymentTime: new Date("TIMESTAMP"),
 * //   tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeRobotCommandInput - {@link DescribeRobotCommandInput}
 * @returns {@link DescribeRobotCommandOutput}
 * @see {@link DescribeRobotCommandInput} for command's `input` shape.
 * @see {@link DescribeRobotCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for RoboMakerClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>AWS RoboMaker experienced a service issue. Try your call again.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A parameter specified in a request is not valid, is unsupported, or cannot be used. The
 *          returned message provides an explanation of the error value.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>AWS RoboMaker is temporarily unable to process the request. Try your call again.</p>
 *
 * @throws {@link RoboMakerServiceException}
 * <p>Base exception class for all service exceptions from RoboMaker service.</p>
 *
 * @public
 */
export class DescribeRobotCommand extends $Command
  .classBuilder<
    DescribeRobotCommandInput,
    DescribeRobotCommandOutput,
    RoboMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: RoboMakerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("robomaker", "DescribeRobot", {})
  .n("RoboMakerClient", "DescribeRobotCommand")
  .f(void 0, void 0)
  .ser(se_DescribeRobotCommand)
  .de(de_DescribeRobotCommand)
  .build() {}
