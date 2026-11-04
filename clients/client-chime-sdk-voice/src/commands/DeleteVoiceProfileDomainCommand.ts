// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteVoiceProfileDomainRequest } from "../models/models_0";
import { DeleteVoiceProfileDomain$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteVoiceProfileDomainCommand}.
 */
export interface DeleteVoiceProfileDomainCommandInput extends DeleteVoiceProfileDomainRequest {}
/**
 * @public
 *
 * The output of {@link DeleteVoiceProfileDomainCommand}.
 */
export interface DeleteVoiceProfileDomainCommandOutput extends __MetadataBearer {}

/**
 * Deletes all voice profiles in the domain. WARNING: This action is not reversible.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKVoiceClient, DeleteVoiceProfileDomainCommand } from "@aws-sdk/client-chime-sdk-voice"; // ES Modules import
 * // const { ChimeSDKVoiceClient, DeleteVoiceProfileDomainCommand } = require("@aws-sdk/client-chime-sdk-voice"); // CommonJS import
 * // import type { ChimeSDKVoiceClientConfig } from "@aws-sdk/client-chime-sdk-voice";
 * const config = {}; // type is ChimeSDKVoiceClientConfig
 * const client = new ChimeSDKVoiceClient(config);
 * const input = { // DeleteVoiceProfileDomainRequest
 *   VoiceProfileDomainId: "STRING_VALUE", // required
 * };
 * const command = new DeleteVoiceProfileDomainCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteVoiceProfileDomainCommandInput - {@link DeleteVoiceProfileDomainCommandInput}
 * @returns {@link DeleteVoiceProfileDomainCommandOutput}
 * @see {@link DeleteVoiceProfileDomainCommandInput} for command's `input` shape.
 * @see {@link DeleteVoiceProfileDomainCommandOutput} for command's `response` shape.
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
export class DeleteVoiceProfileDomainCommand extends command<DeleteVoiceProfileDomainCommandInput, DeleteVoiceProfileDomainCommandOutput>(
  _ep0,
  _mw0,
  "DeleteVoiceProfileDomain",
  DeleteVoiceProfileDomain$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteVoiceProfileDomainRequest;
      output: {};
    };
    sdk: {
      input: DeleteVoiceProfileDomainCommandInput;
      output: DeleteVoiceProfileDomainCommandOutput;
    };
  };
}
