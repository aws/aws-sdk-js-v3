// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { PutInvitationConfigurationRequest, PutInvitationConfigurationResponse } from "../models/models_0";
import { de_PutInvitationConfigurationCommand, se_PutInvitationConfigurationCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutInvitationConfigurationCommand}.
 */
export interface PutInvitationConfigurationCommandInput extends PutInvitationConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link PutInvitationConfigurationCommand}.
 */
export interface PutInvitationConfigurationCommandOutput extends PutInvitationConfigurationResponse, __MetadataBearer {}

/**
 * @public
 * @deprecated
 *
 * <p>Configures the email template for the user enrollment invitation with the specified
 *          attributes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, PutInvitationConfigurationCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, PutInvitationConfigurationCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const input = { // PutInvitationConfigurationRequest
 *   OrganizationName: "STRING_VALUE", // required
 *   ContactEmail: "STRING_VALUE",
 *   PrivateSkillIds: [ // ShortSkillIdList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new PutInvitationConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutInvitationConfigurationCommandInput - {@link PutInvitationConfigurationCommandInput}
 * @returns {@link PutInvitationConfigurationCommandOutput}
 * @see {@link PutInvitationConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutInvitationConfigurationCommandOutput} for command's `response` shape.
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
export class PutInvitationConfigurationCommand extends $Command
  .classBuilder<
    PutInvitationConfigurationCommandInput,
    PutInvitationConfigurationCommandOutput,
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
  .s("AlexaForBusiness", "PutInvitationConfiguration", {})
  .n("AlexaForBusinessClient", "PutInvitationConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_PutInvitationConfigurationCommand)
  .de(de_PutInvitationConfigurationCommand)
  .build() {}
