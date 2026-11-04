// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetAuthenticationUrlRequest, GetAuthenticationUrlResponse } from "../models/models_0";
import { GetAuthenticationUrl$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetAuthenticationUrlCommand}.
 */
export interface GetAuthenticationUrlCommandInput extends GetAuthenticationUrlRequest {}
/**
 * @public
 *
 * The output of {@link GetAuthenticationUrlCommand}.
 */
export interface GetAuthenticationUrlCommandOutput extends GetAuthenticationUrlResponse, __MetadataBearer {}

/**
 * Retrieves the AuthenticationUrl for the current authentication session for the AuthenticateCustomer flow block.
 *
 * For security recommendations, see [Connect Customer Chat security best practices](https://docs.aws.amazon.com/connect/latest/adminguide/security-best-practices.html#bp-security-chat).
 *
 * > **Note:**
 * >
 * > - This API can only be called within one minute of receiving the authenticationInitiated event.
 * > - The current supported channel is chat. This API is not supported for Apple Messages for Business, WhatsApp, or SMS chats.
 *
 * > **Note:** `ConnectionToken` is used for invoking this API instead of `ParticipantToken`.
 *
 * The Amazon Connect Participant Service APIs do not use [Signature Version 4 authentication](https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectParticipantClient, GetAuthenticationUrlCommand } from "@aws-sdk/client-connectparticipant"; // ES Modules import
 * // const { ConnectParticipantClient, GetAuthenticationUrlCommand } = require("@aws-sdk/client-connectparticipant"); // CommonJS import
 * // import type { ConnectParticipantClientConfig } from "@aws-sdk/client-connectparticipant";
 * const config = {}; // type is ConnectParticipantClientConfig
 * const client = new ConnectParticipantClient(config);
 * const input = { // GetAuthenticationUrlRequest
 *   SessionId: "STRING_VALUE", // required
 *   RedirectUri: "STRING_VALUE", // required
 *   ConnectionToken: "STRING_VALUE", // required
 * };
 * const command = new GetAuthenticationUrlCommand(input);
 * const response = await client.send(command);
 * // { // GetAuthenticationUrlResponse
 * //   AuthenticationUrl: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetAuthenticationUrlCommandInput - {@link GetAuthenticationUrlCommandInput}
 * @returns {@link GetAuthenticationUrlCommandOutput}
 * @see {@link GetAuthenticationUrlCommandInput} for command's `input` shape.
 * @see {@link GetAuthenticationUrlCommandOutput} for command's `response` shape.
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
export class GetAuthenticationUrlCommand extends command<GetAuthenticationUrlCommandInput, GetAuthenticationUrlCommandOutput>(
  _ep0,
  _mw0,
  "GetAuthenticationUrl",
  GetAuthenticationUrl$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAuthenticationUrlRequest;
      output: GetAuthenticationUrlResponse;
    };
    sdk: {
      input: GetAuthenticationUrlCommandInput;
      output: GetAuthenticationUrlCommandOutput;
    };
  };
}
