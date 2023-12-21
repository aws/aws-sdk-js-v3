// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteSkillAuthorizationRequest, DeleteSkillAuthorizationResponse } from "../models/models_0";
import { de_DeleteSkillAuthorizationCommand, se_DeleteSkillAuthorizationCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteSkillAuthorizationCommand}.
 */
export interface DeleteSkillAuthorizationCommandInput extends DeleteSkillAuthorizationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteSkillAuthorizationCommand}.
 */
export interface DeleteSkillAuthorizationCommandOutput extends DeleteSkillAuthorizationResponse, __MetadataBearer {}

/**
 * @public
 * @deprecated
 *
 * <p>Unlinks a third-party account from a skill.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, DeleteSkillAuthorizationCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, DeleteSkillAuthorizationCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const input = { // DeleteSkillAuthorizationRequest
 *   SkillId: "STRING_VALUE", // required
 *   RoomArn: "STRING_VALUE",
 * };
 * const command = new DeleteSkillAuthorizationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteSkillAuthorizationCommandInput - {@link DeleteSkillAuthorizationCommandInput}
 * @returns {@link DeleteSkillAuthorizationCommandOutput}
 * @see {@link DeleteSkillAuthorizationCommandInput} for command's `input` shape.
 * @see {@link DeleteSkillAuthorizationCommandOutput} for command's `response` shape.
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
export class DeleteSkillAuthorizationCommand extends $Command
  .classBuilder<
    DeleteSkillAuthorizationCommandInput,
    DeleteSkillAuthorizationCommandOutput,
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
  .s("AlexaForBusiness", "DeleteSkillAuthorization", {})
  .n("AlexaForBusinessClient", "DeleteSkillAuthorizationCommand")
  .f(void 0, void 0)
  .ser(se_DeleteSkillAuthorizationCommand)
  .de(de_DeleteSkillAuthorizationCommand)
  .build() {}
