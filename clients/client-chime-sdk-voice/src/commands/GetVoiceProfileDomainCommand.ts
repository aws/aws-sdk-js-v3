// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetVoiceProfileDomainRequest, GetVoiceProfileDomainResponse } from "../models/models_0";
import { GetVoiceProfileDomain$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetVoiceProfileDomainCommand}.
 */
export interface GetVoiceProfileDomainCommandInput extends GetVoiceProfileDomainRequest {}
/**
 * @public
 *
 * The output of {@link GetVoiceProfileDomainCommand}.
 */
export interface GetVoiceProfileDomainCommandOutput extends GetVoiceProfileDomainResponse, __MetadataBearer {}

/**
 * Retrieves the details of the specified voice profile domain.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKVoiceClient, GetVoiceProfileDomainCommand } from "@aws-sdk/client-chime-sdk-voice"; // ES Modules import
 * // const { ChimeSDKVoiceClient, GetVoiceProfileDomainCommand } = require("@aws-sdk/client-chime-sdk-voice"); // CommonJS import
 * // import type { ChimeSDKVoiceClientConfig } from "@aws-sdk/client-chime-sdk-voice";
 * const config = {}; // type is ChimeSDKVoiceClientConfig
 * const client = new ChimeSDKVoiceClient(config);
 * const input = { // GetVoiceProfileDomainRequest
 *   VoiceProfileDomainId: "STRING_VALUE", // required
 * };
 * const command = new GetVoiceProfileDomainCommand(input);
 * const response = await client.send(command);
 * // { // GetVoiceProfileDomainResponse
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
 * @param GetVoiceProfileDomainCommandInput - {@link GetVoiceProfileDomainCommandInput}
 * @returns {@link GetVoiceProfileDomainCommandOutput}
 * @see {@link GetVoiceProfileDomainCommandInput} for command's `input` shape.
 * @see {@link GetVoiceProfileDomainCommandOutput} for command's `response` shape.
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
export class GetVoiceProfileDomainCommand extends command<GetVoiceProfileDomainCommandInput, GetVoiceProfileDomainCommandOutput>(
  _ep0,
  _mw0,
  "GetVoiceProfileDomain",
  GetVoiceProfileDomain$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetVoiceProfileDomainRequest;
      output: GetVoiceProfileDomainResponse;
    };
    sdk: {
      input: GetVoiceProfileDomainCommandInput;
      output: GetVoiceProfileDomainCommandOutput;
    };
  };
}
