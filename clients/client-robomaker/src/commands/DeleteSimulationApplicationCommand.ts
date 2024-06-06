// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteSimulationApplicationRequest, DeleteSimulationApplicationResponse } from "../models/models_0";
import {
  de_DeleteSimulationApplicationCommand,
  se_DeleteSimulationApplicationCommand,
} from "../protocols/Aws_restJson1";
import { RoboMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RoboMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteSimulationApplicationCommand}.
 */
export interface DeleteSimulationApplicationCommandInput extends DeleteSimulationApplicationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteSimulationApplicationCommand}.
 */
export interface DeleteSimulationApplicationCommandOutput
  extends DeleteSimulationApplicationResponse,
    __MetadataBearer {}

/**
 * <p>Deletes a simulation application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, DeleteSimulationApplicationCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, DeleteSimulationApplicationCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const input = { // DeleteSimulationApplicationRequest
 *   application: "STRING_VALUE", // required
 *   applicationVersion: "STRING_VALUE",
 * };
 * const command = new DeleteSimulationApplicationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteSimulationApplicationCommandInput - {@link DeleteSimulationApplicationCommandInput}
 * @returns {@link DeleteSimulationApplicationCommandOutput}
 * @see {@link DeleteSimulationApplicationCommandInput} for command's `input` shape.
 * @see {@link DeleteSimulationApplicationCommandOutput} for command's `response` shape.
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
export class DeleteSimulationApplicationCommand extends $Command
  .classBuilder<
    DeleteSimulationApplicationCommandInput,
    DeleteSimulationApplicationCommandOutput,
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
  .s("robomaker", "DeleteSimulationApplication", {})
  .n("RoboMakerClient", "DeleteSimulationApplicationCommand")
  .f(void 0, void 0)
  .ser(se_DeleteSimulationApplicationCommand)
  .de(de_DeleteSimulationApplicationCommand)
  .build() {}
