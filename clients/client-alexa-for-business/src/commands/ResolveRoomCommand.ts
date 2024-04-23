// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ResolveRoomRequest, ResolveRoomResponse } from "../models/models_0";
import { de_ResolveRoomCommand, se_ResolveRoomCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ResolveRoomCommand}.
 */
export interface ResolveRoomCommandInput extends ResolveRoomRequest {}
/**
 * @public
 *
 * The output of {@link ResolveRoomCommand}.
 */
export interface ResolveRoomCommandOutput extends ResolveRoomResponse, __MetadataBearer {}

/**
 * @public
 * @deprecated
 *
 * <p>Determines the details for the room from which a skill request was invoked. This
 *          operation is used by skill developers.</p>
 *          <p>To query ResolveRoom from an Alexa skill, the skill ID needs to be authorized. When
 *          the skill is using an AWS Lambda function, the skill is automatically authorized when you
 *          publish your skill as a private skill to your AWS account. Skills that are hosted using a
 *          custom web service must be manually authorized. To get your skill authorized, contact AWS
 *          Support with your AWS account ID that queries the ResolveRoom API and skill ID. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, ResolveRoomCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, ResolveRoomCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const input = { // ResolveRoomRequest
 *   UserId: "STRING_VALUE", // required
 *   SkillId: "STRING_VALUE", // required
 * };
 * const command = new ResolveRoomCommand(input);
 * const response = await client.send(command);
 * // { // ResolveRoomResponse
 * //   RoomArn: "STRING_VALUE",
 * //   RoomName: "STRING_VALUE",
 * //   RoomSkillParameters: [ // RoomSkillParameters
 * //     { // RoomSkillParameter
 * //       ParameterKey: "STRING_VALUE", // required
 * //       ParameterValue: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ResolveRoomCommandInput - {@link ResolveRoomCommandInput}
 * @returns {@link ResolveRoomCommandOutput}
 * @see {@link ResolveRoomCommandInput} for command's `input` shape.
 * @see {@link ResolveRoomCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for AlexaForBusinessClient's `config` shape.
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource is not found.</p>
 *
 * @throws {@link AlexaForBusinessServiceException}
 * <p>Base exception class for all service exceptions from AlexaForBusiness service.</p>
 *
 */
export class ResolveRoomCommand extends $Command
  .classBuilder<
    ResolveRoomCommandInput,
    ResolveRoomCommandOutput,
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
  .s("AlexaForBusiness", "ResolveRoom", {})
  .n("AlexaForBusinessClient", "ResolveRoomCommand")
  .f(void 0, void 0)
  .ser(se_ResolveRoomCommand)
  .de(de_ResolveRoomCommand)
  .build() {}
