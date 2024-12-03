// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateWebExperienceRequest, CreateWebExperienceResponse } from "../models/models_0";
import { de_CreateWebExperienceCommand, se_CreateWebExperienceCommand } from "../protocols/Aws_restJson1";
import { QBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QBusinessClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateWebExperienceCommand}.
 */
export interface CreateWebExperienceCommandInput extends CreateWebExperienceRequest {}
/**
 * @public
 *
 * The output of {@link CreateWebExperienceCommand}.
 */
export interface CreateWebExperienceCommandOutput extends CreateWebExperienceResponse, __MetadataBearer {}

/**
 * <p>Creates an Amazon Q Business web experience.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QBusinessClient, CreateWebExperienceCommand } from "@aws-sdk/client-qbusiness"; // ES Modules import
 * // const { QBusinessClient, CreateWebExperienceCommand } = require("@aws-sdk/client-qbusiness"); // CommonJS import
 * const client = new QBusinessClient(config);
 * const input = { // CreateWebExperienceRequest
 *   applicationId: "STRING_VALUE", // required
 *   title: "STRING_VALUE",
 *   subtitle: "STRING_VALUE",
 *   welcomeMessage: "STRING_VALUE",
 *   samplePromptsControlMode: "ENABLED" || "DISABLED",
 *   origins: [ // WebExperienceOrigins
 *     "STRING_VALUE",
 *   ],
 *   roleArn: "STRING_VALUE",
 *   tags: [ // Tags
 *     { // Tag
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 *   clientToken: "STRING_VALUE",
 *   identityProviderConfiguration: { // IdentityProviderConfiguration Union: only one key present
 *     samlConfiguration: { // SamlProviderConfiguration
 *       authenticationUrl: "STRING_VALUE", // required
 *     },
 *     openIDConnectConfiguration: { // OpenIDConnectProviderConfiguration
 *       secretsArn: "STRING_VALUE", // required
 *       secretsRole: "STRING_VALUE", // required
 *     },
 *   },
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
 * const command = new CreateWebExperienceCommand(input);
 * const response = await client.send(command);
 * // { // CreateWebExperienceResponse
 * //   webExperienceId: "STRING_VALUE",
 * //   webExperienceArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateWebExperienceCommandInput - {@link CreateWebExperienceCommandInput}
 * @returns {@link CreateWebExperienceCommandOutput}
 * @see {@link CreateWebExperienceCommandInput} for command's `input` shape.
 * @see {@link CreateWebExperienceCommandOutput} for command's `response` shape.
 * @see {@link QBusinessClientResolvedConfig | config} for QBusinessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> You don't have access to perform this action. Make sure you have the required
 *             permission policies and user accounts and try again.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>You are trying to perform an action that conflicts with the current status of your
 *             resource. Fix any inconsistencies with your resources and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An issue occurred with the internal server used for your Amazon Q Business service. Wait
 *             some minutes and try again, or contact <a href="http://aws.amazon.com/contact-us/">Support</a> for help.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The application or plugin resource you want to use doesn’t exist. Make sure you have
 *             provided the correct resource and try again.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>You have exceeded the set limits for your Amazon Q Business service. </p>
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
export class CreateWebExperienceCommand extends $Command
  .classBuilder<
    CreateWebExperienceCommandInput,
    CreateWebExperienceCommandOutput,
    QBusinessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QBusinessClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ExpertQ", "CreateWebExperience", {})
  .n("QBusinessClient", "CreateWebExperienceCommand")
  .f(void 0, void 0)
  .ser(se_CreateWebExperienceCommand)
  .de(de_CreateWebExperienceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateWebExperienceRequest;
      output: CreateWebExperienceResponse;
    };
    sdk: {
      input: CreateWebExperienceCommandInput;
      output: CreateWebExperienceCommandOutput;
    };
  };
}
