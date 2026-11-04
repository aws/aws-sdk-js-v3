// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteSipMediaApplicationRequest } from "../models/models_0";
import { DeleteSipMediaApplication$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteSipMediaApplicationCommand}.
 */
export interface DeleteSipMediaApplicationCommandInput extends DeleteSipMediaApplicationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteSipMediaApplicationCommand}.
 */
export interface DeleteSipMediaApplicationCommandOutput extends __MetadataBearer {}

/**
 * Deletes a SIP media application.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKVoiceClient, DeleteSipMediaApplicationCommand } from "@aws-sdk/client-chime-sdk-voice"; // ES Modules import
 * // const { ChimeSDKVoiceClient, DeleteSipMediaApplicationCommand } = require("@aws-sdk/client-chime-sdk-voice"); // CommonJS import
 * // import type { ChimeSDKVoiceClientConfig } from "@aws-sdk/client-chime-sdk-voice";
 * const config = {}; // type is ChimeSDKVoiceClientConfig
 * const client = new ChimeSDKVoiceClient(config);
 * const input = { // DeleteSipMediaApplicationRequest
 *   SipMediaApplicationId: "STRING_VALUE", // required
 * };
 * const command = new DeleteSipMediaApplicationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteSipMediaApplicationCommandInput - {@link DeleteSipMediaApplicationCommandInput}
 * @returns {@link DeleteSipMediaApplicationCommandOutput}
 * @see {@link DeleteSipMediaApplicationCommandInput} for command's `input` shape.
 * @see {@link DeleteSipMediaApplicationCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKVoiceClientResolvedConfig | config} for ChimeSDKVoiceClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * The input parameters don't match the service's restrictions.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Multiple instances of the same request were made simultaneously.
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * The client is permanently forbidden from making the request.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * The requested resource couldn't be found.
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
export class DeleteSipMediaApplicationCommand extends command<DeleteSipMediaApplicationCommandInput, DeleteSipMediaApplicationCommandOutput>(
  _ep0,
  _mw0,
  "DeleteSipMediaApplication",
  DeleteSipMediaApplication$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteSipMediaApplicationRequest;
      output: {};
    };
    sdk: {
      input: DeleteSipMediaApplicationCommandInput;
      output: DeleteSipMediaApplicationCommandOutput;
    };
  };
}
