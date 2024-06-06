// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateRobotRequest, CreateRobotResponse } from "../models/models_0";
import { de_CreateRobotCommand, se_CreateRobotCommand } from "../protocols/Aws_restJson1";
import { RoboMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RoboMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateRobotCommand}.
 */
export interface CreateRobotCommandInput extends CreateRobotRequest {}
/**
 * @public
 *
 * The output of {@link CreateRobotCommand}.
 */
export interface CreateRobotCommandOutput extends CreateRobotResponse, __MetadataBearer {}

/**
 * <p>Creates a robot.</p>
 *          <important>
 *             <p>This API is no longer supported and will throw an error if used.</p>
 *          </important>
 *
 * @deprecated AWS RoboMaker is unable to process this request as the support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, CreateRobotCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, CreateRobotCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const input = { // CreateRobotRequest
 *   name: "STRING_VALUE", // required
 *   architecture: "X86_64" || "ARM64" || "ARMHF", // required
 *   greengrassGroupId: "STRING_VALUE", // required
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateRobotCommand(input);
 * const response = await client.send(command);
 * // { // CreateRobotResponse
 * //   arn: "STRING_VALUE",
 * //   name: "STRING_VALUE",
 * //   createdAt: new Date("TIMESTAMP"),
 * //   greengrassGroupId: "STRING_VALUE",
 * //   architecture: "X86_64" || "ARM64" || "ARMHF",
 * //   tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateRobotCommandInput - {@link CreateRobotCommandInput}
 * @returns {@link CreateRobotCommandOutput}
 * @see {@link CreateRobotCommandInput} for command's `input` shape.
 * @see {@link CreateRobotCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for RoboMakerClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>AWS RoboMaker experienced a service issue. Try your call again.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A parameter specified in a request is not valid, is unsupported, or cannot be used. The
 *          returned message provides an explanation of the error value.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The requested resource exceeds the maximum number allowed, or the number of concurrent
 *          stream requests exceeds the maximum number allowed. </p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>The specified resource already exists.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>AWS RoboMaker is temporarily unable to process the request. Try your call again.</p>
 *
 * @throws {@link RoboMakerServiceException}
 * <p>Base exception class for all service exceptions from RoboMaker service.</p>
 *
 * @public
 */
export class CreateRobotCommand extends $Command
  .classBuilder<
    CreateRobotCommandInput,
    CreateRobotCommandOutput,
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
  .s("robomaker", "CreateRobot", {})
  .n("RoboMakerClient", "CreateRobotCommand")
  .f(void 0, void 0)
  .ser(se_CreateRobotCommand)
  .de(de_CreateRobotCommand)
  .build() {}
