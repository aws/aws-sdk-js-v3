// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChimeSDKVoiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeSDKVoiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetVoiceProfileDomainRequest,
  GetVoiceProfileDomainResponse,
  GetVoiceProfileDomainResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_GetVoiceProfileDomainCommand, se_GetVoiceProfileDomainCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Retrieves the details of the specified voice profile domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKVoiceClient, GetVoiceProfileDomainCommand } from "@aws-sdk/client-chime-sdk-voice"; // ES Modules import
 * // const { ChimeSDKVoiceClient, GetVoiceProfileDomainCommand } = require("@aws-sdk/client-chime-sdk-voice"); // CommonJS import
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
 *  <p>You don't have the permissions needed to run this action.</p>
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The requested resource couldn't be found.</p>
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
 * @public
 */
export class GetVoiceProfileDomainCommand extends $Command
  .classBuilder<
    GetVoiceProfileDomainCommandInput,
    GetVoiceProfileDomainCommandOutput,
    ChimeSDKVoiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ChimeSDKVoiceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ChimeSDKTelephonyService", "GetVoiceProfileDomain", {})
  .n("ChimeSDKVoiceClient", "GetVoiceProfileDomainCommand")
  .f(void 0, GetVoiceProfileDomainResponseFilterSensitiveLog)
  .ser(se_GetVoiceProfileDomainCommand)
  .de(de_GetVoiceProfileDomainCommand)
  .build() {}
