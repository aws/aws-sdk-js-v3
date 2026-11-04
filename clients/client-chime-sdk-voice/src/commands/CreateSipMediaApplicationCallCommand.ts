// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateSipMediaApplicationCallRequest, CreateSipMediaApplicationCallResponse } from "../models/models_0";
import { CreateSipMediaApplicationCall$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateSipMediaApplicationCallCommand}.
 */
export interface CreateSipMediaApplicationCallCommandInput extends CreateSipMediaApplicationCallRequest {}
/**
 * @public
 *
 * The output of {@link CreateSipMediaApplicationCallCommand}.
 */
export interface CreateSipMediaApplicationCallCommandOutput extends CreateSipMediaApplicationCallResponse, __MetadataBearer {}

/**
 * Creates an outbound call to a phone number from the phone number specified in the request, and it invokes the endpoint of the specified `sipMediaApplicationId`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKVoiceClient, CreateSipMediaApplicationCallCommand } from "@aws-sdk/client-chime-sdk-voice"; // ES Modules import
 * // const { ChimeSDKVoiceClient, CreateSipMediaApplicationCallCommand } = require("@aws-sdk/client-chime-sdk-voice"); // CommonJS import
 * // import type { ChimeSDKVoiceClientConfig } from "@aws-sdk/client-chime-sdk-voice";
 * const config = {}; // type is ChimeSDKVoiceClientConfig
 * const client = new ChimeSDKVoiceClient(config);
 * const input = { // CreateSipMediaApplicationCallRequest
 *   FromPhoneNumber: "STRING_VALUE", // required
 *   ToPhoneNumber: "STRING_VALUE", // required
 *   SipMediaApplicationId: "STRING_VALUE", // required
 *   SipHeaders: { // SipHeadersMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   ArgumentsMap: { // SMACreateCallArgumentsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateSipMediaApplicationCallCommand(input);
 * const response = await client.send(command);
 * // { // CreateSipMediaApplicationCallResponse
 * //   SipMediaApplicationCall: { // SipMediaApplicationCall
 * //     TransactionId: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateSipMediaApplicationCallCommandInput - {@link CreateSipMediaApplicationCallCommandInput}
 * @returns {@link CreateSipMediaApplicationCallCommandOutput}
 * @see {@link CreateSipMediaApplicationCallCommandInput} for command's `input` shape.
 * @see {@link CreateSipMediaApplicationCallCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKVoiceClientResolvedConfig | config} for ChimeSDKVoiceClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have the permissions needed to run this action.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * The input parameters don't match the service's restrictions.
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * The client is permanently forbidden from making the request.
 *
 * @throws {@link ResourceLimitExceededException} (client fault)
 *
 * The request exceeds the resource limit.
 *
 * @throws {@link ServiceFailureException} (server fault)
 *
 * The service encountered an unexpected error.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service is currently unavailable.
 *
 * @throws {@link ThrottledClientException} (client fault)
 *
 * The number of customer requests exceeds the request rate limit.
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *
 * The client isn't authorized to request a resource.
 *
 * @throws {@link ChimeSDKVoiceServiceException}
 *
 * Base exception class for all service exceptions from ChimeSDKVoice service.
 *
 * @public
 */
export class CreateSipMediaApplicationCallCommand extends command<CreateSipMediaApplicationCallCommandInput, CreateSipMediaApplicationCallCommandOutput>(
  _ep0,
  _mw0,
  "CreateSipMediaApplicationCall",
  CreateSipMediaApplicationCall$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateSipMediaApplicationCallRequest;
      output: CreateSipMediaApplicationCallResponse;
    };
    sdk: {
      input: CreateSipMediaApplicationCallCommandInput;
      output: CreateSipMediaApplicationCallCommandOutput;
    };
  };
}
