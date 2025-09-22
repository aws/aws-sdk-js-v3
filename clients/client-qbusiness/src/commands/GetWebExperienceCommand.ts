// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetWebExperienceRequest, GetWebExperienceResponse } from "../models/models_0";
import { QBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QBusinessClient";
import { GetWebExperience } from "../schemas/schemas_3_Plugin";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetWebExperienceCommand}.
 */
export interface GetWebExperienceCommandInput extends GetWebExperienceRequest {}
/**
 * @public
 *
 * The output of {@link GetWebExperienceCommand}.
 */
export interface GetWebExperienceCommandOutput extends GetWebExperienceResponse, __MetadataBearer {}

/**
 * <p>Gets information about an existing Amazon Q Business web experience.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QBusinessClient, GetWebExperienceCommand } from "@aws-sdk/client-qbusiness"; // ES Modules import
 * // const { QBusinessClient, GetWebExperienceCommand } = require("@aws-sdk/client-qbusiness"); // CommonJS import
 * // import type { QBusinessClientConfig } from "@aws-sdk/client-qbusiness";
 * const config = {}; // type is QBusinessClientConfig
 * const client = new QBusinessClient(config);
 * const input = { // GetWebExperienceRequest
 *   applicationId: "STRING_VALUE", // required
 *   webExperienceId: "STRING_VALUE", // required
 * };
 * const command = new GetWebExperienceCommand(input);
 * const response = await client.send(command);
 * // { // GetWebExperienceResponse
 * //   applicationId: "STRING_VALUE",
 * //   webExperienceId: "STRING_VALUE",
 * //   webExperienceArn: "STRING_VALUE",
 * //   defaultEndpoint: "STRING_VALUE",
 * //   status: "CREATING" || "ACTIVE" || "DELETING" || "FAILED" || "PENDING_AUTH_CONFIG",
 * //   createdAt: new Date("TIMESTAMP"),
 * //   updatedAt: new Date("TIMESTAMP"),
 * //   title: "STRING_VALUE",
 * //   subtitle: "STRING_VALUE",
 * //   welcomeMessage: "STRING_VALUE",
 * //   samplePromptsControlMode: "ENABLED" || "DISABLED",
 * //   origins: [ // WebExperienceOrigins
 * //     "STRING_VALUE",
 * //   ],
 * //   roleArn: "STRING_VALUE",
 * //   identityProviderConfiguration: { // IdentityProviderConfiguration Union: only one key present
 * //     samlConfiguration: { // SamlProviderConfiguration
 * //       authenticationUrl: "STRING_VALUE", // required
 * //     },
 * //     openIDConnectConfiguration: { // OpenIDConnectProviderConfiguration
 * //       secretsArn: "STRING_VALUE", // required
 * //       secretsRole: "STRING_VALUE", // required
 * //     },
 * //   },
 * //   authenticationConfiguration: { // WebExperienceAuthConfiguration Union: only one key present
 * //     samlConfiguration: { // SamlConfiguration
 * //       metadataXML: "STRING_VALUE", // required
 * //       roleArn: "STRING_VALUE", // required
 * //       userIdAttribute: "STRING_VALUE", // required
 * //       userGroupAttribute: "STRING_VALUE",
 * //     },
 * //   },
 * //   error: { // ErrorDetail
 * //     errorMessage: "STRING_VALUE",
 * //     errorCode: "InternalError" || "InvalidRequest" || "ResourceInactive" || "ResourceNotFound",
 * //   },
 * //   browserExtensionConfiguration: { // BrowserExtensionConfiguration
 * //     enabledBrowserExtensions: [ // BrowserExtensionList // required
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * //   customizationConfiguration: { // CustomizationConfiguration
 * //     customCSSUrl: "STRING_VALUE",
 * //     logoUrl: "STRING_VALUE",
 * //     fontUrl: "STRING_VALUE",
 * //     faviconUrl: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetWebExperienceCommandInput - {@link GetWebExperienceCommandInput}
 * @returns {@link GetWebExperienceCommandOutput}
 * @see {@link GetWebExperienceCommandInput} for command's `input` shape.
 * @see {@link GetWebExperienceCommandOutput} for command's `response` shape.
 * @see {@link QBusinessClientResolvedConfig | config} for QBusinessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> You don't have access to perform this action. Make sure you have the required permission policies and user accounts and try again.</p>
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
export class GetWebExperienceCommand extends $Command
  .classBuilder<
    GetWebExperienceCommandInput,
    GetWebExperienceCommandOutput,
    QBusinessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QBusinessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ExpertQ", "GetWebExperience", {})
  .n("QBusinessClient", "GetWebExperienceCommand")
  .sc(GetWebExperience)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetWebExperienceRequest;
      output: GetWebExperienceResponse;
    };
    sdk: {
      input: GetWebExperienceCommandInput;
      output: GetWebExperienceCommandOutput;
    };
  };
}
