// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ConnectParticipantClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ConnectParticipantClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CancelParticipantAuthenticationRequest, CancelParticipantAuthenticationResponse } from "../models/models_0";
import {
  de_CancelParticipantAuthenticationCommand,
  se_CancelParticipantAuthenticationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CancelParticipantAuthenticationCommand}.
 */
export interface CancelParticipantAuthenticationCommandInput extends CancelParticipantAuthenticationRequest {}
/**
 * @public
 *
 * The output of {@link CancelParticipantAuthenticationCommand}.
 */
export interface CancelParticipantAuthenticationCommandOutput
  extends CancelParticipantAuthenticationResponse,
    __MetadataBearer {}

/**
 * <p>Cancels the authentication session. The opted out branch of the Authenticate Customer
 *             flow block will be taken.</p>
 *          <note>
 *             <p>The current supported channel is chat. This API is not supported for Apple
 *                 Messages for Business, WhatsApp, or SMS chats.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectParticipantClient, CancelParticipantAuthenticationCommand } from "@aws-sdk/client-connectparticipant"; // ES Modules import
 * // const { ConnectParticipantClient, CancelParticipantAuthenticationCommand } = require("@aws-sdk/client-connectparticipant"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ConnectParticipantClient(config);
 * const input = { // CancelParticipantAuthenticationRequest
 *   SessionId: "STRING_VALUE", // required
 *   ConnectionToken: "STRING_VALUE", // required
 * };
 * const command = new CancelParticipantAuthenticationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CancelParticipantAuthenticationCommandInput - {@link CancelParticipantAuthenticationCommandInput}
 * @returns {@link CancelParticipantAuthenticationCommandOutput}
 * @see {@link CancelParticipantAuthenticationCommandInput} for command's `input` shape.
 * @see {@link CancelParticipantAuthenticationCommandOutput} for command's `response` shape.
 * @see {@link ConnectParticipantClientResolvedConfig | config} for ConnectParticipantClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception occurs when there is an internal failure in the Amazon Connect service.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by Amazon Connect.</p>
 *
 * @throws {@link ConnectParticipantServiceException}
 * <p>Base exception class for all service exceptions from ConnectParticipant service.</p>
 *
 * @public
 */
export class CancelParticipantAuthenticationCommand extends $Command
  .classBuilder<
    CancelParticipantAuthenticationCommandInput,
    CancelParticipantAuthenticationCommandOutput,
    ConnectParticipantClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectParticipantClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonConnectParticipantServiceLambda", "CancelParticipantAuthentication", {})
  .n("ConnectParticipantClient", "CancelParticipantAuthenticationCommand")
  .f(void 0, void 0)
  .ser(se_CancelParticipantAuthenticationCommand)
  .de(de_CancelParticipantAuthenticationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelParticipantAuthenticationRequest;
      output: {};
    };
    sdk: {
      input: CancelParticipantAuthenticationCommandInput;
      output: CancelParticipantAuthenticationCommandOutput;
    };
  };
}
