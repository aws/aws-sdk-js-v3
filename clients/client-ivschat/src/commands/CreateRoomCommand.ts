// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IvschatClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IvschatClient";
import { CreateRoomRequest, CreateRoomResponse } from "../models/models_0";
import { de_CreateRoomCommand, se_CreateRoomCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Creates a room that allows clients to connect and pass messages.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IvschatClient, CreateRoomCommand } from "@aws-sdk/client-ivschat"; // ES Modules import
 * // const { IvschatClient, CreateRoomCommand } = require("@aws-sdk/client-ivschat"); // CommonJS import
 * const client = new IvschatClient(config);
 * const input = { // CreateRoomRequest
 *   name: "STRING_VALUE",
 *   maximumMessageRatePerSecond: Number("int"),
 *   maximumMessageLength: Number("int"),
 *   messageReviewHandler: { // MessageReviewHandler
 *     uri: "STRING_VALUE",
 *     fallbackResult: "STRING_VALUE",
 *   },
 *   tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 *   loggingConfigurationIdentifiers: [ // LoggingConfigurationIdentifierList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new CreateRoomCommand(input);
 * const response = await client.send(command);
 * // { // CreateRoomResponse
 * //   arn: "STRING_VALUE",
 * //   id: "STRING_VALUE",
 * //   name: "STRING_VALUE",
 * //   createTime: new Date("TIMESTAMP"),
 * //   updateTime: new Date("TIMESTAMP"),
 * //   maximumMessageRatePerSecond: Number("int"),
 * //   maximumMessageLength: Number("int"),
 * //   messageReviewHandler: { // MessageReviewHandler
 * //     uri: "STRING_VALUE",
 * //     fallbackResult: "STRING_VALUE",
 * //   },
 * //   tags: { // Tags
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   loggingConfigurationIdentifiers: [ // LoggingConfigurationIdentifierList
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param CreateRoomCommandInput - {@link CreateRoomCommandInput}
 * @returns {@link CreateRoomCommandOutput}
 * @see {@link CreateRoomCommandInput} for command's `input` shape.
 * @see {@link CreateRoomCommandOutput} for command's `response` shape.
 * @see {@link IvschatClientResolvedConfig | config} for IvschatClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p/>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p/>
 *
 * @throws {@link PendingVerification} (client fault)
 *  <p/>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p/>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p/>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p/>
 *
 * @throws {@link IvschatServiceException}
 * <p>Base exception class for all service exceptions from Ivschat service.</p>
 *
 * @public
 */
export class CreateRoomCommand extends $Command
  .classBuilder<
    CreateRoomCommandInput,
    CreateRoomCommandOutput,
    IvschatClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: IvschatClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonInteractiveVideoServiceChat", "CreateRoom", {})
  .n("IvschatClient", "CreateRoomCommand")
  .f(void 0, void 0)
  .ser(se_CreateRoomCommand)
  .de(de_CreateRoomCommand)
  .build() {}
