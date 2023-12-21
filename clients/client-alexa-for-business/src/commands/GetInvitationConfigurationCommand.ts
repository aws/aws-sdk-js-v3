// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetInvitationConfigurationRequest, GetInvitationConfigurationResponse } from "../models/models_0";
import { de_GetInvitationConfigurationCommand, se_GetInvitationConfigurationCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetInvitationConfigurationCommand}.
 */
export interface GetInvitationConfigurationCommandInput extends GetInvitationConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetInvitationConfigurationCommand}.
 */
export interface GetInvitationConfigurationCommandOutput extends GetInvitationConfigurationResponse, __MetadataBearer {}

/**
 * @public
 * @deprecated
 *
 * <p>Retrieves the configured values for the user enrollment invitation email
 *          template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, GetInvitationConfigurationCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, GetInvitationConfigurationCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const input = {};
 * const command = new GetInvitationConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetInvitationConfigurationResponse
 * //   OrganizationName: "STRING_VALUE",
 * //   ContactEmail: "STRING_VALUE",
 * //   PrivateSkillIds: [ // ShortSkillIdList
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetInvitationConfigurationCommandInput - {@link GetInvitationConfigurationCommandInput}
 * @returns {@link GetInvitationConfigurationCommandOutput}
 * @see {@link GetInvitationConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetInvitationConfigurationCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for AlexaForBusinessClient's `config` shape.
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource is not found.</p>
 *
 * @throws {@link AlexaForBusinessServiceException}
 * <p>Base exception class for all service exceptions from AlexaForBusiness service.</p>
 *
 */
export class GetInvitationConfigurationCommand extends $Command
  .classBuilder<
    GetInvitationConfigurationCommandInput,
    GetInvitationConfigurationCommandOutput,
    AlexaForBusinessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any /*Command*/, Command: any /*static*/, config: AlexaForBusinessClientResolvedConfig) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AlexaForBusiness", "GetInvitationConfiguration", {})
  .n("AlexaForBusinessClient", "GetInvitationConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_GetInvitationConfigurationCommand)
  .de(de_GetInvitationConfigurationCommand)
  .build() {}
