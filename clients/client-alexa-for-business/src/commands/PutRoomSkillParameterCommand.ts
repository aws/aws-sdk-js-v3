// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { PutRoomSkillParameterRequest, PutRoomSkillParameterResponse } from "../models/models_0";
import { de_PutRoomSkillParameterCommand, se_PutRoomSkillParameterCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutRoomSkillParameterCommand}.
 */
export interface PutRoomSkillParameterCommandInput extends PutRoomSkillParameterRequest {}
/**
 * @public
 *
 * The output of {@link PutRoomSkillParameterCommand}.
 */
export interface PutRoomSkillParameterCommandOutput extends PutRoomSkillParameterResponse, __MetadataBearer {}

/**
 * <p>Updates room skill parameter details by room, skill, and parameter key ID. Not all
 *          skills have a room skill parameter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, PutRoomSkillParameterCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, PutRoomSkillParameterCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const input = { // PutRoomSkillParameterRequest
 *   RoomArn: "STRING_VALUE",
 *   SkillId: "STRING_VALUE", // required
 *   RoomSkillParameter: { // RoomSkillParameter
 *     ParameterKey: "STRING_VALUE", // required
 *     ParameterValue: "STRING_VALUE", // required
 *   },
 * };
 * const command = new PutRoomSkillParameterCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutRoomSkillParameterCommandInput - {@link PutRoomSkillParameterCommandInput}
 * @returns {@link PutRoomSkillParameterCommandOutput}
 * @see {@link PutRoomSkillParameterCommandInput} for command's `input` shape.
 * @see {@link PutRoomSkillParameterCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for AlexaForBusinessClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>There is a concurrent modification of resources.</p>
 *
 * @throws {@link AlexaForBusinessServiceException}
 * <p>Base exception class for all service exceptions from AlexaForBusiness service.</p>
 *
 * @public
 * @deprecated Alexa For Business is no longer supported
 */
export class PutRoomSkillParameterCommand extends $Command
  .classBuilder<
    PutRoomSkillParameterCommandInput,
    PutRoomSkillParameterCommandOutput,
    AlexaForBusinessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: AlexaForBusinessClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AlexaForBusiness", "PutRoomSkillParameter", {})
  .n("AlexaForBusinessClient", "PutRoomSkillParameterCommand")
  .f(void 0, void 0)
  .ser(se_PutRoomSkillParameterCommand)
  .de(de_PutRoomSkillParameterCommand)
  .build() {}
