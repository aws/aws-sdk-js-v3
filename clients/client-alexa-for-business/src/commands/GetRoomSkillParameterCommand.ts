// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetRoomSkillParameterRequest, GetRoomSkillParameterResponse } from "../models/models_0";
import { de_GetRoomSkillParameterCommand, se_GetRoomSkillParameterCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetRoomSkillParameterCommand}.
 */
export interface GetRoomSkillParameterCommandInput extends GetRoomSkillParameterRequest {}
/**
 * @public
 *
 * The output of {@link GetRoomSkillParameterCommand}.
 */
export interface GetRoomSkillParameterCommandOutput extends GetRoomSkillParameterResponse, __MetadataBearer {}

/**
 * <p>Gets room skill parameter details by room, skill, and parameter key ARN.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, GetRoomSkillParameterCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, GetRoomSkillParameterCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const input = { // GetRoomSkillParameterRequest
 *   RoomArn: "STRING_VALUE",
 *   SkillId: "STRING_VALUE", // required
 *   ParameterKey: "STRING_VALUE", // required
 * };
 * const command = new GetRoomSkillParameterCommand(input);
 * const response = await client.send(command);
 * // { // GetRoomSkillParameterResponse
 * //   RoomSkillParameter: { // RoomSkillParameter
 * //     ParameterKey: "STRING_VALUE", // required
 * //     ParameterValue: "STRING_VALUE", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param GetRoomSkillParameterCommandInput - {@link GetRoomSkillParameterCommandInput}
 * @returns {@link GetRoomSkillParameterCommandOutput}
 * @see {@link GetRoomSkillParameterCommandInput} for command's `input` shape.
 * @see {@link GetRoomSkillParameterCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for AlexaForBusinessClient's `config` shape.
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource is not found.</p>
 *
 * @throws {@link AlexaForBusinessServiceException}
 * <p>Base exception class for all service exceptions from AlexaForBusiness service.</p>
 *
 * @public
 * @deprecated Alexa For Business is no longer supported
 */
export class GetRoomSkillParameterCommand extends $Command
  .classBuilder<
    GetRoomSkillParameterCommandInput,
    GetRoomSkillParameterCommandOutput,
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
  .s("AlexaForBusiness", "GetRoomSkillParameter", {})
  .n("AlexaForBusinessClient", "GetRoomSkillParameterCommand")
  .f(void 0, void 0)
  .ser(se_GetRoomSkillParameterCommand)
  .de(de_GetRoomSkillParameterCommand)
  .build() {}
