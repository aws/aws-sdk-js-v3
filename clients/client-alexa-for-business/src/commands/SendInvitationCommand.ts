// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { SendInvitationRequest, SendInvitationResponse } from "../models/models_0";
import { de_SendInvitationCommand, se_SendInvitationCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link SendInvitationCommand}.
 */
export interface SendInvitationCommandInput extends SendInvitationRequest {}
/**
 * @public
 *
 * The output of {@link SendInvitationCommand}.
 */
export interface SendInvitationCommandOutput extends SendInvitationResponse, __MetadataBearer {}

/**
 * <p>Sends an enrollment invitation email with a URL to a user. The URL is valid for 30
 *          days or until you call this operation again, whichever comes first. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, SendInvitationCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, SendInvitationCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const input = { // SendInvitationRequest
 *   UserArn: "STRING_VALUE",
 * };
 * const command = new SendInvitationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param SendInvitationCommandInput - {@link SendInvitationCommandInput}
 * @returns {@link SendInvitationCommandOutput}
 * @see {@link SendInvitationCommandInput} for command's `input` shape.
 * @see {@link SendInvitationCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for AlexaForBusinessClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>There is a concurrent modification of resources.</p>
 *
 * @throws {@link InvalidUserStatusException} (client fault)
 *  <p>The attempt to update a user is invalid due to the user's current status.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource is not found.</p>
 *
 * @throws {@link AlexaForBusinessServiceException}
 * <p>Base exception class for all service exceptions from AlexaForBusiness service.</p>
 *
 * @public
 * @deprecated Alexa For Business is no longer supported
 */
export class SendInvitationCommand extends $Command
  .classBuilder<
    SendInvitationCommandInput,
    SendInvitationCommandOutput,
    AlexaForBusinessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: AlexaForBusinessClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AlexaForBusiness", "SendInvitation", {})
  .n("AlexaForBusinessClient", "SendInvitationCommand")
  .f(void 0, void 0)
  .ser(se_SendInvitationCommand)
  .de(de_SendInvitationCommand)
  .build() {}
