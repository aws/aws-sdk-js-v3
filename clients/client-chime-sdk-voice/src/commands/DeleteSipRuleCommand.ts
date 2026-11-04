// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteSipRuleRequest } from "../models/models_0";
import { DeleteSipRule$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteSipRuleCommand}.
 */
export interface DeleteSipRuleCommandInput extends DeleteSipRuleRequest {}
/**
 * @public
 *
 * The output of {@link DeleteSipRuleCommand}.
 */
export interface DeleteSipRuleCommandOutput extends __MetadataBearer {}

/**
 * Deletes a SIP rule.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKVoiceClient, DeleteSipRuleCommand } from "@aws-sdk/client-chime-sdk-voice"; // ES Modules import
 * // const { ChimeSDKVoiceClient, DeleteSipRuleCommand } = require("@aws-sdk/client-chime-sdk-voice"); // CommonJS import
 * // import type { ChimeSDKVoiceClientConfig } from "@aws-sdk/client-chime-sdk-voice";
 * const config = {}; // type is ChimeSDKVoiceClientConfig
 * const client = new ChimeSDKVoiceClient(config);
 * const input = { // DeleteSipRuleRequest
 *   SipRuleId: "STRING_VALUE", // required
 * };
 * const command = new DeleteSipRuleCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteSipRuleCommandInput - {@link DeleteSipRuleCommandInput}
 * @returns {@link DeleteSipRuleCommandOutput}
 * @see {@link DeleteSipRuleCommandInput} for command's `input` shape.
 * @see {@link DeleteSipRuleCommandOutput} for command's `response` shape.
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
export class DeleteSipRuleCommand extends command<DeleteSipRuleCommandInput, DeleteSipRuleCommandOutput>(
  _ep0,
  _mw0,
  "DeleteSipRule",
  DeleteSipRule$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteSipRuleRequest;
      output: {};
    };
    sdk: {
      input: DeleteSipRuleCommandInput;
      output: DeleteSipRuleCommandOutput;
    };
  };
}
