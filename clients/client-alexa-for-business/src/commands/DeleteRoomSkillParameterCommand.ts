// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteRoomSkillParameterRequest, DeleteRoomSkillParameterResponse } from "../models/models_0";
import { de_DeleteRoomSkillParameterCommand, se_DeleteRoomSkillParameterCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteRoomSkillParameterCommand}.
 */
export interface DeleteRoomSkillParameterCommandInput extends DeleteRoomSkillParameterRequest {}
/**
 * @public
 *
 * The output of {@link DeleteRoomSkillParameterCommand}.
 */
export interface DeleteRoomSkillParameterCommandOutput extends DeleteRoomSkillParameterResponse, __MetadataBearer {}

/**
 * @public
 * @deprecated
 *
 * <p>Deletes room skill parameter details by room, skill, and parameter key ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, DeleteRoomSkillParameterCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, DeleteRoomSkillParameterCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const input = { // DeleteRoomSkillParameterRequest
 *   RoomArn: "STRING_VALUE",
 *   SkillId: "STRING_VALUE", // required
 *   ParameterKey: "STRING_VALUE", // required
 * };
 * const command = new DeleteRoomSkillParameterCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteRoomSkillParameterCommandInput - {@link DeleteRoomSkillParameterCommandInput}
 * @returns {@link DeleteRoomSkillParameterCommandOutput}
 * @see {@link DeleteRoomSkillParameterCommandInput} for command's `input` shape.
 * @see {@link DeleteRoomSkillParameterCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for AlexaForBusinessClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>There is a concurrent modification of resources.</p>
 *
 * @throws {@link AlexaForBusinessServiceException}
 * <p>Base exception class for all service exceptions from AlexaForBusiness service.</p>
 *
 */
export class DeleteRoomSkillParameterCommand extends $Command
  .classBuilder<
    DeleteRoomSkillParameterCommandInput,
    DeleteRoomSkillParameterCommandOutput,
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
  .s("AlexaForBusiness", "DeleteRoomSkillParameter", {})
  .n("AlexaForBusinessClient", "DeleteRoomSkillParameterCommand")
  .f(void 0, void 0)
  .ser(se_DeleteRoomSkillParameterCommand)
  .de(de_DeleteRoomSkillParameterCommand)
  .build() {}
