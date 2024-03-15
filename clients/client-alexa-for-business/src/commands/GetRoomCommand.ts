// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetRoomRequest, GetRoomResponse } from "../models/models_0";
import { de_GetRoomCommand, se_GetRoomCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetRoomCommand}.
 */
export interface GetRoomCommandInput extends GetRoomRequest {}
/**
 * @public
 *
 * The output of {@link GetRoomCommand}.
 */
export interface GetRoomCommandOutput extends GetRoomResponse, __MetadataBearer {}

/**
 * <p>Gets room details by room ARN.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, GetRoomCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, GetRoomCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const input = { // GetRoomRequest
 *   RoomArn: "STRING_VALUE",
 * };
 * const command = new GetRoomCommand(input);
 * const response = await client.send(command);
 * // { // GetRoomResponse
 * //   Room: { // Room
 * //     RoomArn: "STRING_VALUE",
 * //     RoomName: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     ProviderCalendarId: "STRING_VALUE",
 * //     ProfileArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetRoomCommandInput - {@link GetRoomCommandInput}
 * @returns {@link GetRoomCommandOutput}
 * @see {@link GetRoomCommandInput} for command's `input` shape.
 * @see {@link GetRoomCommandOutput} for command's `response` shape.
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
export class GetRoomCommand extends $Command
  .classBuilder<
    GetRoomCommandInput,
    GetRoomCommandOutput,
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
  .s("AlexaForBusiness", "GetRoom", {})
  .n("AlexaForBusinessClient", "GetRoomCommand")
  .f(void 0, void 0)
  .ser(se_GetRoomCommand)
  .de(de_GetRoomCommand)
  .build() {}
