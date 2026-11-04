// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { SendEventRequest, SendEventResponse } from "../models/models_0";
import { SendEvent$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * > **Note:** The `application/vnd.amazonaws.connect.event.connection.acknowledged` ContentType is no longer maintained since December 31, 2024. This event has been migrated to the [CreateParticipantConnection](https://docs.aws.amazon.com/connect-participant/latest/APIReference/API_CreateParticipantConnection.html) API using the `ConnectParticipant` field.
 *
 * Sends an event. Message receipts are not supported when there are more than two active participants in the chat. Using the SendEvent API for message receipts when a supervisor is barged-in will result in a conflict exception.
 *
 * For security recommendations, see [Connect Customer Chat security best practices](https://docs.aws.amazon.com/connect/latest/adminguide/security-best-practices.html#bp-security-chat).
 *
 * > **Note:** `ConnectionToken` is used for invoking this API instead of `ParticipantToken`.
 *
 * The Amazon Connect Participant Service APIs do not use [Signature Version 4 authentication](https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html).
 *
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
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The requested operation conflicts with the current state of a service resource associated with the request.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * This exception occurs when there is an internal failure in the Amazon Connect service.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by Amazon Connect.
 *
 * @throws {@link ConnectParticipantServiceException}
 *
 * Base exception class for all service exceptions from ConnectParticipant service.
 *
 * @public
 */
export class SendEventCommand extends command<SendEventCommandInput, SendEventCommandOutput>(
  _ep0,
  _mw0,
  "SendEvent",
  SendEvent$
) {
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
