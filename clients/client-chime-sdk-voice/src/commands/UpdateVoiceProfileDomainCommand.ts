// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChimeSDKVoiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeSDKVoiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  UpdateVoiceProfileDomainRequest,
  UpdateVoiceProfileDomainResponse,
  UpdateVoiceProfileDomainResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_UpdateVoiceProfileDomainCommand, se_UpdateVoiceProfileDomainCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Updates the settings for the specified voice profile domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKVoiceClient, UpdateVoiceProfileDomainCommand } from "@aws-sdk/client-chime-sdk-voice"; // ES Modules import
 * // const { ChimeSDKVoiceClient, UpdateVoiceProfileDomainCommand } = require("@aws-sdk/client-chime-sdk-voice"); // CommonJS import
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
 *
 * @public
 */
export class UpdateVoiceProfileDomainCommand extends $Command
  .classBuilder<
    UpdateVoiceProfileDomainCommandInput,
    UpdateVoiceProfileDomainCommandOutput,
    ChimeSDKVoiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChimeSDKVoiceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ChimeSDKTelephonyService", "UpdateVoiceProfileDomain", {})
  .n("ChimeSDKVoiceClient", "UpdateVoiceProfileDomainCommand")
  .f(void 0, UpdateVoiceProfileDomainResponseFilterSensitiveLog)
  .ser(se_UpdateVoiceProfileDomainCommand)
  .de(de_UpdateVoiceProfileDomainCommand)
  .build() {
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
