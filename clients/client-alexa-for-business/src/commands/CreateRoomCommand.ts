// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateRoomRequest, CreateRoomResponse } from "../models/models_0";
import { de_CreateRoomCommand, se_CreateRoomCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateRoomCommand}.
 */
export interface CreateRoomCommandInput extends CreateRoomRequest {}
/**
 * @public
 *
 * The output of {@link CreateRoomCommand}.
 */
export interface CreateRoomCommandOutput extends CreateRoomResponse, __MetadataBearer {}

/**
 * @public
 * @deprecated
 *
 * <p>Creates a room with the specified details.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, CreateRoomCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, CreateRoomCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const input = { // CreateRoomRequest
 *   RoomName: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   ProfileArn: "STRING_VALUE",
 *   ProviderCalendarId: "STRING_VALUE",
 *   ClientRequestToken: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateRoomCommand(input);
 * const response = await client.send(command);
 * // { // CreateRoomResponse
 * //   RoomArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateRoomCommandInput - {@link CreateRoomCommandInput}
 * @returns {@link CreateRoomCommandOutput}
 * @see {@link CreateRoomCommandInput} for command's `input` shape.
 * @see {@link CreateRoomCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for AlexaForBusinessClient's `config` shape.
 *
 * @throws {@link AlreadyExistsException} (client fault)
 *  <p>The resource being created already exists.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>You are performing an action that would put you beyond your account's limits.</p>
 *
 * @throws {@link AlexaForBusinessServiceException}
 * <p>Base exception class for all service exceptions from AlexaForBusiness service.</p>
 *
 */
export class CreateRoomCommand extends $Command
  .classBuilder<
    CreateRoomCommandInput,
    CreateRoomCommandOutput,
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
  .s("AlexaForBusiness", "CreateRoom", {})
  .n("AlexaForBusinessClient", "CreateRoomCommand")
  .f(void 0, void 0)
  .ser(se_CreateRoomCommand)
  .de(de_CreateRoomCommand)
  .build() {}
