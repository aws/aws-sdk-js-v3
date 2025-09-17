// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ConnectParticipantClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ConnectParticipantClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { SendEventRequest, SendEventResponse } from "../models/models_0";
import { de_SendEventCommand, se_SendEventCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SendEventCommand}.
 */
export interface SendEventCommandInput extends SendEventRequest {}
/**
 * @public
 *
 * The output of {@link SendEventCommand}.
 */
export interface SendEventCommandOutput extends SendEventResponse, __MetadataBearer {}

/**
 * <note>
 *             <p>The <code>application/vnd.amazonaws.connect.event.connection.acknowledged</code>
 *                 ContentType is no longer maintained since December 31, 2024. This event has been
 *                 migrated to the <a href="https://docs.aws.amazon.com/connect-participant/latest/APIReference/API_CreateParticipantConnection.html">CreateParticipantConnection</a> API using the
 *                     <code>ConnectParticipant</code> field.</p>
 *          </note>
 *          <p>Sends an event. Message receipts are not supported when there are more than two active
 *             participants in the chat. Using the SendEvent API for message receipts when a supervisor
 *             is barged-in will result in a conflict exception.</p>
 *          <p>For security recommendations, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/security-best-practices.html#bp-security-chat">Amazon Connect Chat security best practices</a>. </p>
 *          <note>
 *             <p>
 *                <code>ConnectionToken</code> is used for invoking this API instead of
 *                     <code>ParticipantToken</code>.</p>
 *          </note>
 *          <p>The Amazon Connect Participant Service APIs do not use <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4
 *                     authentication</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectParticipantClient, SendEventCommand } from "@aws-sdk/client-connectparticipant"; // ES Modules import
 * // const { ConnectParticipantClient, SendEventCommand } = require("@aws-sdk/client-connectparticipant"); // CommonJS import
 * // import type { ConnectParticipantClientConfig } from "@aws-sdk/client-connectparticipant";
 * const config = {}; // type is ConnectParticipantClientConfig
 * const client = new ConnectParticipantClient(config);
 * const input = { // SendEventRequest
 *   ContentType: "STRING_VALUE", // required
 *   Content: "STRING_VALUE",
 *   ClientToken: "STRING_VALUE",
 *   ConnectionToken: "STRING_VALUE", // required
 * };
 * const command = new SendEventCommand(input);
 * const response = await client.send(command);
 * // { // SendEventResponse
 * //   Id: "STRING_VALUE",
 * //   AbsoluteTime: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SendEventCommandInput - {@link SendEventCommandInput}
 * @returns {@link SendEventCommandOutput}
 * @see {@link SendEventCommandInput} for command's `input` shape.
 * @see {@link SendEventCommandOutput} for command's `response` shape.
 * @see {@link ConnectParticipantClientResolvedConfig | config} for ConnectParticipantClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The requested operation conflicts with the current state of a service resource
 *             associated with the request. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception occurs when there is an internal failure in the Amazon Connect service.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by Amazon Connect.</p>
 *
 * @throws {@link ConnectParticipantServiceException}
 * <p>Base exception class for all service exceptions from ConnectParticipant service.</p>
 *
 *
 * @public
 */
export class SendEventCommand extends $Command
  .classBuilder<
    SendEventCommandInput,
    SendEventCommandOutput,
    ConnectParticipantClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectParticipantClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonConnectParticipantServiceLambda", "SendEvent", {})
  .n("ConnectParticipantClient", "SendEventCommand")
  .f(void 0, void 0)
  .ser(se_SendEventCommand)
  .de(de_SendEventCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SendEventRequest;
      output: SendEventResponse;
    };
    sdk: {
      input: SendEventCommandInput;
      output: SendEventCommandOutput;
    };
  };
}
