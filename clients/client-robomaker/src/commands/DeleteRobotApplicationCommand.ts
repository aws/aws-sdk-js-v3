// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteRobotApplicationRequest, DeleteRobotApplicationResponse } from "../models/models_0";
import { de_DeleteRobotApplicationCommand, se_DeleteRobotApplicationCommand } from "../protocols/Aws_restJson1";
import { RoboMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RoboMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteRobotApplicationCommand}.
 */
export interface DeleteRobotApplicationCommandInput extends DeleteRobotApplicationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteRobotApplicationCommand}.
 */
export interface DeleteRobotApplicationCommandOutput extends DeleteRobotApplicationResponse, __MetadataBearer {}

/**
 * <p>Deletes a robot application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, DeleteRobotApplicationCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, DeleteRobotApplicationCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const input = { // DeleteRobotApplicationRequest
 *   application: "STRING_VALUE", // required
 *   applicationVersion: "STRING_VALUE",
 * };
 * const command = new DeleteRobotApplicationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteRobotApplicationCommandInput - {@link DeleteRobotApplicationCommandInput}
 * @returns {@link DeleteRobotApplicationCommandOutput}
 * @see {@link DeleteRobotApplicationCommandInput} for command's `input` shape.
 * @see {@link DeleteRobotApplicationCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for RoboMakerClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>AWS RoboMaker experienced a service issue. Try your call again.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A parameter specified in a request is not valid, is unsupported, or cannot be used. The
 *          returned message provides an explanation of the error value.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>AWS RoboMaker is temporarily unable to process the request. Try your call again.</p>
 *
 * @throws {@link RoboMakerServiceException}
 * <p>Base exception class for all service exceptions from RoboMaker service.</p>
 *
 * @public
 */
export class DeleteRobotApplicationCommand extends $Command
  .classBuilder<
    DeleteRobotApplicationCommandInput,
    DeleteRobotApplicationCommandOutput,
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
  .s("robomaker", "DeleteRobotApplication", {})
  .n("RoboMakerClient", "DeleteRobotApplicationCommand")
  .f(void 0, void 0)
  .ser(se_DeleteRobotApplicationCommand)
  .de(de_DeleteRobotApplicationCommand)
  .build() {}
