// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateVoiceProfileDomainRequest, UpdateVoiceProfileDomainResponse } from "../models/models_0";
import { UpdateVoiceProfileDomain$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateVoiceProfileDomainCommand}.
 */
export interface UpdateVoiceProfileDomainCommandInput extends UpdateVoiceProfileDomainRequest {}
/**
 * @public
 *
 * The output of {@link UpdateVoiceProfileDomainCommand}.
 */
export interface UpdateVoiceProfileDomainCommandOutput extends UpdateVoiceProfileDomainResponse, __MetadataBearer {}

/**
 * Updates the settings for the specified voice profile domain.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKVoiceClient, UpdateVoiceProfileDomainCommand } from "@aws-sdk/client-chime-sdk-voice"; // ES Modules import
 * // const { ChimeSDKVoiceClient, UpdateVoiceProfileDomainCommand } = require("@aws-sdk/client-chime-sdk-voice"); // CommonJS import
 * // import type { ChimeSDKVoiceClientConfig } from "@aws-sdk/client-chime-sdk-voice";
 * const config = {}; // type is ChimeSDKVoiceClientConfig
 * const client = new ChimeSDKVoiceClient(config);
 * const input = { // UpdateVoiceProfileDomainRequest
 *   VoiceProfileDomainId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 * };
 * const command = new UpdateVoiceProfileDomainCommand(input);
 * const response = await client.send(command);
 * // { // UpdateVoiceProfileDomainResponse
 * //   VoiceProfileDomain: { // VoiceProfileDomain
 * //     VoiceProfileDomainId: "STRING_VALUE",
 * //     VoiceProfileDomainArn: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     ServerSideEncryptionConfiguration: { // ServerSideEncryptionConfiguration
 * //       KmsKeyArn: "STRING_VALUE", // required
 * //     },
 * //     CreatedTimestamp: new Date("TIMESTAMP"),
 * //     UpdatedTimestamp: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateVoiceProfileDomainCommandInput - {@link UpdateVoiceProfileDomainCommandInput}
 * @returns {@link UpdateVoiceProfileDomainCommandOutput}
 * @see {@link UpdateVoiceProfileDomainCommandInput} for command's `input` shape.
 * @see {@link UpdateVoiceProfileDomainCommandOutput} for command's `response` shape.
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
export class UpdateVoiceProfileDomainCommand extends command<UpdateVoiceProfileDomainCommandInput, UpdateVoiceProfileDomainCommandOutput>(
  _ep0,
  _mw0,
  "UpdateVoiceProfileDomain",
  UpdateVoiceProfileDomain$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateVoiceProfileDomainRequest;
      output: UpdateVoiceProfileDomainResponse;
    };
    sdk: {
      input: UpdateVoiceProfileDomainCommandInput;
      output: UpdateVoiceProfileDomainCommandOutput;
    };
  };
}
