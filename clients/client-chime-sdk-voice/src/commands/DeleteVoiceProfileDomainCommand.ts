// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChimeSDKVoiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeSDKVoiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteVoiceProfileDomainRequest } from "../models/models_0";
import { de_DeleteVoiceProfileDomainCommand, se_DeleteVoiceProfileDomainCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Deletes all voice profiles in the domain. WARNING: This action is not reversible.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKVoiceClient, DeleteVoiceProfileDomainCommand } from "@aws-sdk/client-chime-sdk-voice"; // ES Modules import
 * // const { ChimeSDKVoiceClient, DeleteVoiceProfileDomainCommand } = require("@aws-sdk/client-chime-sdk-voice"); // CommonJS import
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
export class DeleteVoiceProfileDomainCommand extends $Command
  .classBuilder<
    DeleteVoiceProfileDomainCommandInput,
    DeleteVoiceProfileDomainCommandOutput,
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
  .s("ChimeSDKTelephonyService", "DeleteVoiceProfileDomain", {})
  .n("ChimeSDKVoiceClient", "DeleteVoiceProfileDomainCommand")
  .f(void 0, void 0)
  .ser(se_DeleteVoiceProfileDomainCommand)
  .de(de_DeleteVoiceProfileDomainCommand)
  .build() {}
