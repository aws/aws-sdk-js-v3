// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetNextMessageRequest,
  GetNextMessageResponse,
  GetNextMessageResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_GetNextMessageCommand, se_GetNextMessageCommand } from "../protocols/Aws_restJson1";
import { QConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QConnectClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetNextMessageCommand}.
 */
export interface GetNextMessageCommandInput extends GetNextMessageRequest {}
/**
 * @public
 *
 * The output of {@link GetNextMessageCommand}.
 */
export interface GetNextMessageCommandOutput extends GetNextMessageResponse, __MetadataBearer {}

/**
 * <p>Retrieves next message on an Amazon Q in Connect session.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QConnectClient, GetNextMessageCommand } from "@aws-sdk/client-qconnect"; // ES Modules import
 * // const { QConnectClient, GetNextMessageCommand } = require("@aws-sdk/client-qconnect"); // CommonJS import
 * const client = new QConnectClient(config);
 * const input = { // GetNextMessageRequest
 *   assistantId: "STRING_VALUE", // required
 *   sessionId: "STRING_VALUE", // required
 *   nextMessageToken: "STRING_VALUE", // required
 * };
 * const command = new GetNextMessageCommand(input);
 * const response = await client.send(command);
 * // { // GetNextMessageResponse
 * //   type: "STRING_VALUE", // required
 * //   response: { // MessageOutput
 * //     value: { // MessageData Union: only one key present
 * //       text: { // TextMessage
 * //         value: "STRING_VALUE",
 * //       },
 * //     },
 * //     messageId: "STRING_VALUE", // required
 * //     participant: "STRING_VALUE", // required
 * //     timestamp: new Date("TIMESTAMP"), // required
 * //   },
 * //   requestMessageId: "STRING_VALUE", // required
 * //   conversationState: { // ConversationState
 * //     status: "STRING_VALUE", // required
 * //     reason: "STRING_VALUE",
 * //   },
 * //   nextMessageToken: "STRING_VALUE",
 * //   conversationSessionData: [ // RuntimeSessionDataList
 * //     { // RuntimeSessionData
 * //       key: "STRING_VALUE", // required
 * //       value: { // RuntimeSessionDataValue Union: only one key present
 * //         stringValue: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetNextMessageCommandInput - {@link GetNextMessageCommandInput}
 * @returns {@link GetNextMessageCommandOutput}
 * @see {@link GetNextMessageCommandInput} for command's `input` shape.
 * @see {@link GetNextMessageCommandOutput} for command's `response` shape.
 * @see {@link QConnectClientResolvedConfig | config} for QConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by a service.</p>
 *
 * @throws {@link QConnectServiceException}
 * <p>Base exception class for all service exceptions from QConnect service.</p>
 *
 * @public
 */
export class GetNextMessageCommand extends $Command
  .classBuilder<
    GetNextMessageCommandInput,
    GetNextMessageCommandOutput,
    QConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QConnectClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("WisdomService", "GetNextMessage", {})
  .n("QConnectClient", "GetNextMessageCommand")
  .f(void 0, GetNextMessageResponseFilterSensitiveLog)
  .ser(se_GetNextMessageCommand)
  .de(de_GetNextMessageCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetNextMessageRequest;
      output: GetNextMessageResponse;
    };
    sdk: {
      input: GetNextMessageCommandInput;
      output: GetNextMessageCommandOutput;
    };
  };
}
