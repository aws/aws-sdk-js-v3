// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ChimeSDKVoiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeSDKVoiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateVoiceProfileDomainRequest, CreateVoiceProfileDomainResponse } from "../models/models_0";
import { CreateVoiceProfileDomain$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateVoiceProfileDomainCommand}.
 */
export interface CreateVoiceProfileDomainCommandInput extends CreateVoiceProfileDomainRequest {}
/**
 * @public
 *
 * The output of {@link CreateVoiceProfileDomainCommand}.
 */
export interface CreateVoiceProfileDomainCommandOutput extends CreateVoiceProfileDomainResponse, __MetadataBearer {}

/**
 * <p>Creates a voice profile domain, a collection of voice profiles, their voice prints, and encrypted enrollment audio.</p>
 *          <important>
 *             <p>Before creating any voice profiles, you must provide all notices and obtain all consents from the speaker as required under applicable privacy and biometrics laws, and as required under the
 *          <a href="https://aws.amazon.com/service-terms/">AWS service terms</a> for the Amazon Chime SDK.</p>
 *          </important>
 *          <p>For more information about voice profile domains, see <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/pstn-voice-analytics.html">Using Amazon Chime SDK Voice Analytics</a>
 *          in the <i>Amazon Chime SDK Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKVoiceClient, CreateVoiceProfileDomainCommand } from "@aws-sdk/client-chime-sdk-voice"; // ES Modules import
 * // const { ChimeSDKVoiceClient, CreateVoiceProfileDomainCommand } = require("@aws-sdk/client-chime-sdk-voice"); // CommonJS import
 * // import type { ChimeSDKVoiceClientConfig } from "@aws-sdk/client-chime-sdk-voice";
 * const config = {}; // type is ChimeSDKVoiceClientConfig
 * const client = new ChimeSDKVoiceClient(config);
 * const input = { // CreateVoiceProfileDomainRequest
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   ServerSideEncryptionConfiguration: { // ServerSideEncryptionConfiguration
 *     KmsKeyArn: "STRING_VALUE", // required
 *   },
 *   ClientRequestToken: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateVoiceProfileDomainCommand(input);
 * const response = await client.send(command);
 * // { // CreateVoiceProfileDomainResponse
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
 * @param CreateVoiceProfileDomainCommandInput - {@link CreateVoiceProfileDomainCommandInput}
 * @returns {@link CreateVoiceProfileDomainCommandOutput}
 * @see {@link CreateVoiceProfileDomainCommandInput} for command's `input` shape.
 * @see {@link CreateVoiceProfileDomainCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKVoiceClientResolvedConfig | config} for ChimeSDKVoiceClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have the permissions needed to run this action.</p>
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Multiple instances of the same request were made simultaneously.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
 *
 * @throws {@link ResourceLimitExceededException} (client fault)
 *  <p>The request exceeds the resource limit.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The service encountered an unexpected error.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable.</p>
 *
 * @throws {@link ThrottledClientException} (client fault)
 *  <p>The number of customer requests exceeds the request rate limit.</p>
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *  <p>The client isn't authorized to request a resource.</p>
 *
 * @throws {@link ChimeSDKVoiceServiceException}
 * <p>Base exception class for all service exceptions from ChimeSDKVoice service.</p>
 *
 *
 * @public
 */
export class CreateVoiceProfileDomainCommand extends $Command
  .classBuilder<
    CreateVoiceProfileDomainCommandInput,
    CreateVoiceProfileDomainCommandOutput,
    ChimeSDKVoiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChimeSDKVoiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ChimeSDKTelephonyService", "CreateVoiceProfileDomain", {})
  .n("ChimeSDKVoiceClient", "CreateVoiceProfileDomainCommand")
  .sc(CreateVoiceProfileDomain$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateVoiceProfileDomainRequest;
      output: CreateVoiceProfileDomainResponse;
    };
    sdk: {
      input: CreateVoiceProfileDomainCommandInput;
      output: CreateVoiceProfileDomainCommandOutput;
    };
  };
}
