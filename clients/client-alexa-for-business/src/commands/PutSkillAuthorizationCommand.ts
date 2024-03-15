// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  PutSkillAuthorizationRequest,
  PutSkillAuthorizationRequestFilterSensitiveLog,
  PutSkillAuthorizationResponse,
} from "../models/models_0";
import { de_PutSkillAuthorizationCommand, se_PutSkillAuthorizationCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutSkillAuthorizationCommand}.
 */
export interface PutSkillAuthorizationCommandInput extends PutSkillAuthorizationRequest {}
/**
 * @public
 *
 * The output of {@link PutSkillAuthorizationCommand}.
 */
export interface PutSkillAuthorizationCommandOutput extends PutSkillAuthorizationResponse, __MetadataBearer {}

/**
 * <p>Links a user's account to a third-party skill provider. If this API operation is
 *          called by an assumed IAM role, the skill being linked must be a private skill. Also, the
 *          skill must be owned by the AWS account that assumed the IAM role.</p>
 *
 * @deprecated Alexa For Business is no longer supported
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, PutSkillAuthorizationCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, PutSkillAuthorizationCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const input = { // PutSkillAuthorizationRequest
 *   AuthorizationResult: { // AuthorizationResult // required
 *     "<keys>": "STRING_VALUE",
 *   },
 *   SkillId: "STRING_VALUE", // required
 *   RoomArn: "STRING_VALUE",
 * };
 * const command = new PutSkillAuthorizationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutSkillAuthorizationCommandInput - {@link PutSkillAuthorizationCommandInput}
 * @returns {@link PutSkillAuthorizationCommandOutput}
 * @see {@link PutSkillAuthorizationCommandInput} for command's `input` shape.
 * @see {@link PutSkillAuthorizationCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for AlexaForBusinessClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>There is a concurrent modification of resources.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>The caller has no permissions to operate on the resource involved in the API call.</p>
 *
 * @throws {@link AlexaForBusinessServiceException}
 * <p>Base exception class for all service exceptions from AlexaForBusiness service.</p>
 *
 * @public
 */
export class PutSkillAuthorizationCommand extends $Command
  .classBuilder<
    PutSkillAuthorizationCommandInput,
    PutSkillAuthorizationCommandOutput,
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
  .s("AlexaForBusiness", "PutSkillAuthorization", {})
  .n("AlexaForBusinessClient", "PutSkillAuthorizationCommand")
  .f(PutSkillAuthorizationRequestFilterSensitiveLog, void 0)
  .ser(se_PutSkillAuthorizationCommand)
  .de(de_PutSkillAuthorizationCommand)
  .build() {}
