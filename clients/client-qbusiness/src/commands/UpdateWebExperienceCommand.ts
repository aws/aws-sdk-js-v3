// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateWebExperienceRequest, UpdateWebExperienceResponse } from "../models/models_0";
import { de_UpdateWebExperienceCommand, se_UpdateWebExperienceCommand } from "../protocols/Aws_restJson1";
import { QBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QBusinessClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateWebExperienceCommand}.
 */
export interface UpdateWebExperienceCommandInput extends UpdateWebExperienceRequest {}
/**
 * @public
 *
 * The output of {@link UpdateWebExperienceCommand}.
 */
export interface UpdateWebExperienceCommandOutput extends UpdateWebExperienceResponse, __MetadataBearer {}

/**
 * <p>Updates an Amazon Q Business web experience. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QBusinessClient, UpdateWebExperienceCommand } from "@aws-sdk/client-qbusiness"; // ES Modules import
 * // const { QBusinessClient, UpdateWebExperienceCommand } = require("@aws-sdk/client-qbusiness"); // CommonJS import
 * const client = new QBusinessClient(config);
 * const input = { // UpdateWebExperienceRequest
 *   applicationId: "STRING_VALUE", // required
 *   webExperienceId: "STRING_VALUE", // required
 *   roleArn: "STRING_VALUE",
 *   authenticationConfiguration: { // WebExperienceAuthConfiguration Union: only one key present
 *     samlConfiguration: { // SamlConfiguration
 *       metadataXML: "STRING_VALUE", // required
 *       roleArn: "STRING_VALUE", // required
 *       userIdAttribute: "STRING_VALUE", // required
 *       userGroupAttribute: "STRING_VALUE",
 *     },
 *   },
 *   title: "STRING_VALUE",
 *   subtitle: "STRING_VALUE",
 *   welcomeMessage: "STRING_VALUE",
 *   samplePromptsControlMode: "ENABLED" || "DISABLED",
 * };
 * const command = new UpdateWebExperienceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateWebExperienceCommandInput - {@link UpdateWebExperienceCommandInput}
 * @returns {@link UpdateWebExperienceCommandOutput}
 * @see {@link UpdateWebExperienceCommandInput} for command's `input` shape.
 * @see {@link UpdateWebExperienceCommandOutput} for command's `response` shape.
 * @see {@link QBusinessClientResolvedConfig | config} for QBusinessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> You don't have access to perform this action. Make sure you have the required
 *             permission policies and user accounts and try again.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>You are trying to perform an action that conflicts with the current status of your
 *             resource. Fix any inconsistences with your resources and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An issue occurred with the internal server used for your Amazon Q Business service. Wait
 *             some minutes and try again, or contact <a href="http://aws.amazon.com/contact-us/">Support</a> for help.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource you want to use doesn’t exist. Make sure you have provided the correct
 *             resource and try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to throttling. Reduce the number of requests and try
 *             again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input doesn't meet the constraints set by the Amazon Q Business service. Provide the
 *             correct input and try again.</p>
 *
 * @throws {@link QBusinessServiceException}
 * <p>Base exception class for all service exceptions from QBusiness service.</p>
 *
 * @public
 */
export class UpdateWebExperienceCommand extends $Command
  .classBuilder<
    UpdateWebExperienceCommandInput,
    UpdateWebExperienceCommandOutput,
    QBusinessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: QBusinessClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ExpertQ", "UpdateWebExperience", {})
  .n("QBusinessClient", "UpdateWebExperienceCommand")
  .f(void 0, void 0)
  .ser(se_UpdateWebExperienceCommand)
  .de(de_UpdateWebExperienceCommand)
  .build() {}
