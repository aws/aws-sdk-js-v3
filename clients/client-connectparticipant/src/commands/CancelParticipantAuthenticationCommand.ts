// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  CancelParticipantAuthenticationRequest,
  CancelParticipantAuthenticationResponse,
} from "../models/models_0";
import { CancelParticipantAuthentication$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CancelParticipantAuthenticationCommand}.
 */
export interface CancelParticipantAuthenticationCommandInput extends CancelParticipantAuthenticationRequest {}
/**
 * @public
 *
 * The output of {@link CancelParticipantAuthenticationCommand}.
 */
export interface CancelParticipantAuthenticationCommandOutput extends CancelParticipantAuthenticationResponse, __MetadataBearer {}

/**
 * Cancels the authentication session. The opted out branch of the Authenticate Customer flow block will be taken.
 *
 * > **Note:** The current supported channel is chat. This API is not supported for Apple Messages for Business, WhatsApp, or SMS chats.
 *
 * > **Note:** `ConnectionToken` is used for invoking this API instead of `ParticipantToken`.
 *
 * The Amazon Connect Participant Service APIs do not use [Signature Version 4 authentication](https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectParticipantClient, CancelParticipantAuthenticationCommand } from "@aws-sdk/client-connectparticipant"; // ES Modules import
 * // const { ConnectParticipantClient, CancelParticipantAuthenticationCommand } = require("@aws-sdk/client-connectparticipant"); // CommonJS import
 * // import type { ConnectParticipantClientConfig } from "@aws-sdk/client-connectparticipant";
 * const config = {}; // type is ConnectParticipantClientConfig
 * const client = new ConnectParticipantClient(config);
 * const input = { // CancelParticipantAuthenticationRequest
 *   SessionId: "STRING_VALUE", // required
 *   ConnectionToken: "STRING_VALUE", // required
 * };
 * const command = new CancelParticipantAuthenticationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CancelParticipantAuthenticationCommandInput - {@link CancelParticipantAuthenticationCommandInput}
 * @returns {@link CancelParticipantAuthenticationCommandOutput}
 * @see {@link CancelParticipantAuthenticationCommandInput} for command's `input` shape.
 * @see {@link CancelParticipantAuthenticationCommandOutput} for command's `response` shape.
 * @see {@link ConnectParticipantClientResolvedConfig | config} for ConnectParticipantClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
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
export class CancelParticipantAuthenticationCommand extends command<CancelParticipantAuthenticationCommandInput, CancelParticipantAuthenticationCommandOutput>(
  _ep0,
  _mw0,
  "CancelParticipantAuthentication",
  CancelParticipantAuthentication$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelParticipantAuthenticationRequest;
      output: {};
    };
    sdk: {
      input: CancelParticipantAuthenticationCommandInput;
      output: CancelParticipantAuthenticationCommandOutput;
    };
  };
}
