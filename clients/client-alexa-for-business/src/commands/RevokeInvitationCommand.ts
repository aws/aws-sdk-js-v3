// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { RevokeInvitationRequest, RevokeInvitationResponse } from "../models/models_0";
import { de_RevokeInvitationCommand, se_RevokeInvitationCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link RevokeInvitationCommand}.
 */
export interface RevokeInvitationCommandInput extends RevokeInvitationRequest {}
/**
 * @public
 *
 * The output of {@link RevokeInvitationCommand}.
 */
export interface RevokeInvitationCommandOutput extends RevokeInvitationResponse, __MetadataBearer {}

/**
 * @public
 * @deprecated Alexa For Business is no longer supported
 *
 * <p>Revokes an invitation and invalidates the enrollment URL.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, RevokeInvitationCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, RevokeInvitationCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const input = { // RevokeInvitationRequest
 *   UserArn: "STRING_VALUE",
 *   EnrollmentId: "STRING_VALUE",
 * };
 * const command = new RevokeInvitationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RevokeInvitationCommandInput - {@link RevokeInvitationCommandInput}
 * @returns {@link RevokeInvitationCommandOutput}
 * @see {@link RevokeInvitationCommandInput} for command's `input` shape.
 * @see {@link RevokeInvitationCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for AlexaForBusinessClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>There is a concurrent modification of resources.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource is not found.</p>
 *
 * @throws {@link AlexaForBusinessServiceException}
 * <p>Base exception class for all service exceptions from AlexaForBusiness service.</p>
 *
 */
export class RevokeInvitationCommand extends $Command
  .classBuilder<
    RevokeInvitationCommandInput,
    RevokeInvitationCommandOutput,
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
  .s("AlexaForBusiness", "RevokeInvitation", {})
  .n("AlexaForBusinessClient", "RevokeInvitationCommand")
  .f(void 0, void 0)
  .ser(se_RevokeInvitationCommand)
  .de(de_RevokeInvitationCommand)
  .build() {}
