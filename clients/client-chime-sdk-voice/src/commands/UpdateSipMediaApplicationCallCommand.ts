// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateSipMediaApplicationCallRequest, UpdateSipMediaApplicationCallResponse } from "../models/models_0";
import { UpdateSipMediaApplicationCall$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateSipMediaApplicationCallCommand}.
 */
export interface UpdateSipMediaApplicationCallCommandInput extends UpdateSipMediaApplicationCallRequest {}
/**
 * @public
 *
 * The output of {@link UpdateSipMediaApplicationCallCommand}.
 */
export interface UpdateSipMediaApplicationCallCommandOutput extends UpdateSipMediaApplicationCallResponse, __MetadataBearer {}

/**
 * Invokes the AWS Lambda function associated with the SIP media application and transaction ID in an update request. The Lambda function can then return a new set of actions.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKVoiceClient, UpdateSipMediaApplicationCallCommand } from "@aws-sdk/client-chime-sdk-voice"; // ES Modules import
 * // const { ChimeSDKVoiceClient, UpdateSipMediaApplicationCallCommand } = require("@aws-sdk/client-chime-sdk-voice"); // CommonJS import
 * // import type { ChimeSDKVoiceClientConfig } from "@aws-sdk/client-chime-sdk-voice";
 * const config = {}; // type is ChimeSDKVoiceClientConfig
 * const client = new ChimeSDKVoiceClient(config);
 * const input = { // UpdateSipMediaApplicationCallRequest
 *   SipMediaApplicationId: "STRING_VALUE", // required
 *   TransactionId: "STRING_VALUE", // required
 *   Arguments: { // SMAUpdateCallArgumentsMap // required
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new UpdateSipMediaApplicationCallCommand(input);
 * const response = await client.send(command);
 * // { // UpdateSipMediaApplicationCallResponse
 * //   SipMediaApplicationCall: { // SipMediaApplicationCall
 * //     TransactionId: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateSipMediaApplicationCallCommandInput - {@link UpdateSipMediaApplicationCallCommandInput}
 * @returns {@link UpdateSipMediaApplicationCallCommandOutput}
 * @see {@link UpdateSipMediaApplicationCallCommandInput} for command's `input` shape.
 * @see {@link UpdateSipMediaApplicationCallCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKVoiceClientResolvedConfig | config} for ChimeSDKVoiceClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * The input parameters don't match the service's restrictions.
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * The client is permanently forbidden from making the request.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * The requested resource couldn't be found.
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
export class UpdateSipMediaApplicationCallCommand extends command<UpdateSipMediaApplicationCallCommandInput, UpdateSipMediaApplicationCallCommandOutput>(
  _ep0,
  _mw0,
  "UpdateSipMediaApplicationCall",
  UpdateSipMediaApplicationCall$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateSipMediaApplicationCallRequest;
      output: UpdateSipMediaApplicationCallResponse;
    };
    sdk: {
      input: UpdateSipMediaApplicationCallCommandInput;
      output: UpdateSipMediaApplicationCallCommandOutput;
    };
  };
}
