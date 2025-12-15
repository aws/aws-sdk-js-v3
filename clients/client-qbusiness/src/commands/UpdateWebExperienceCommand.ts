// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateWebExperienceRequest, UpdateWebExperienceResponse } from "../models/models_0";
import type { QBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QBusinessClient";
import { UpdateWebExperience$ } from "../schemas/schemas_0";

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
 * // import type { QBusinessClientConfig } from "@aws-sdk/client-qbusiness";
 * const config = {}; // type is QBusinessClientConfig
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
 *   identityProviderConfiguration: { // IdentityProviderConfiguration Union: only one key present
 *     samlConfiguration: { // SamlProviderConfiguration
 *       authenticationUrl: "STRING_VALUE", // required
 *     },
 *     openIDConnectConfiguration: { // OpenIDConnectProviderConfiguration
 *       secretsArn: "STRING_VALUE", // required
 *       secretsRole: "STRING_VALUE", // required
 *     },
 *   },
 *   origins: [ // WebExperienceOrigins
 *     "STRING_VALUE",
 *   ],
 *   browserExtensionConfiguration: { // BrowserExtensionConfiguration
 *     enabledBrowserExtensions: [ // BrowserExtensionList // required
 *       "STRING_VALUE",
 *     ],
 *   },
 *   customizationConfiguration: { // CustomizationConfiguration
 *     customCSSUrl: "STRING_VALUE",
 *     logoUrl: "STRING_VALUE",
 *     fontUrl: "STRING_VALUE",
 *     faviconUrl: "STRING_VALUE",
 *   },
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
 *  <p> You don't have access to perform this action. Make sure you have the required permission policies and user accounts and try again.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>You are trying to perform an action that conflicts with the current status of your resource. Fix any inconsistencies with your resources and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An issue occurred with the internal server used for your Amazon Q Business service. Wait some minutes and try again, or contact <a href="http://aws.amazon.com/contact-us/">Support</a> for help.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The application or plugin resource you want to use doesn’t exist. Make sure you have provided the correct resource and try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to throttling. Reduce the number of requests and try again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input doesn't meet the constraints set by the Amazon Q Business service. Provide the correct input and try again.</p>
 *
 * @throws {@link QBusinessServiceException}
 * <p>Base exception class for all service exceptions from QBusiness service.</p>
 *
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
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QBusinessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ExpertQ", "UpdateWebExperience", {})
  .n("QBusinessClient", "UpdateWebExperienceCommand")
  .sc(UpdateWebExperience$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateWebExperienceRequest;
      output: {};
    };
    sdk: {
      input: UpdateWebExperienceCommandInput;
      output: UpdateWebExperienceCommandOutput;
    };
  };
}
