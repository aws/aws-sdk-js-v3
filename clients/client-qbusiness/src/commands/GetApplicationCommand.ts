// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetApplicationRequest,
  GetApplicationResponse,
  GetApplicationResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_GetApplicationCommand, se_GetApplicationCommand } from "../protocols/Aws_restJson1";
import { QBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QBusinessClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetApplicationCommand}.
 */
export interface GetApplicationCommandInput extends GetApplicationRequest {}
/**
 * @public
 *
 * The output of {@link GetApplicationCommand}.
 */
export interface GetApplicationCommandOutput extends GetApplicationResponse, __MetadataBearer {}

/**
 * <p>Gets information about an existing Amazon Q Business application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QBusinessClient, GetApplicationCommand } from "@aws-sdk/client-qbusiness"; // ES Modules import
 * // const { QBusinessClient, GetApplicationCommand } = require("@aws-sdk/client-qbusiness"); // CommonJS import
 * const client = new QBusinessClient(config);
 * const input = { // GetApplicationRequest
 *   applicationId: "STRING_VALUE", // required
 * };
 * const command = new GetApplicationCommand(input);
 * const response = await client.send(command);
 * // { // GetApplicationResponse
 * //   displayName: "STRING_VALUE",
 * //   applicationId: "STRING_VALUE",
 * //   applicationArn: "STRING_VALUE",
 * //   identityType: "AWS_IAM_IDP_SAML" || "AWS_IAM_IDP_OIDC" || "AWS_IAM_IDC" || "AWS_QUICKSIGHT_IDP",
 * //   iamIdentityProviderArn: "STRING_VALUE",
 * //   identityCenterApplicationArn: "STRING_VALUE",
 * //   roleArn: "STRING_VALUE",
 * //   status: "CREATING" || "ACTIVE" || "DELETING" || "FAILED" || "UPDATING",
 * //   description: "STRING_VALUE",
 * //   encryptionConfiguration: { // EncryptionConfiguration
 * //     kmsKeyId: "STRING_VALUE",
 * //   },
 * //   createdAt: new Date("TIMESTAMP"),
 * //   updatedAt: new Date("TIMESTAMP"),
 * //   error: { // ErrorDetail
 * //     errorMessage: "STRING_VALUE",
 * //     errorCode: "InternalError" || "InvalidRequest" || "ResourceInactive" || "ResourceNotFound",
 * //   },
 * //   attachmentsConfiguration: { // AppliedAttachmentsConfiguration
 * //     attachmentsControlMode: "ENABLED" || "DISABLED",
 * //   },
 * //   qAppsConfiguration: { // QAppsConfiguration
 * //     qAppsControlMode: "ENABLED" || "DISABLED", // required
 * //   },
 * //   personalizationConfiguration: { // PersonalizationConfiguration
 * //     personalizationControlMode: "ENABLED" || "DISABLED", // required
 * //   },
 * //   autoSubscriptionConfiguration: { // AutoSubscriptionConfiguration
 * //     autoSubscribe: "ENABLED" || "DISABLED", // required
 * //     defaultSubscriptionType: "Q_LITE" || "Q_BUSINESS",
 * //   },
 * //   clientIdsForOIDC: [ // ClientIdsForOIDC
 * //     "STRING_VALUE",
 * //   ],
 * //   quickSightConfiguration: { // QuickSightConfiguration
 * //     clientNamespace: "STRING_VALUE", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param GetApplicationCommandInput - {@link GetApplicationCommandInput}
 * @returns {@link GetApplicationCommandOutput}
 * @see {@link GetApplicationCommandInput} for command's `input` shape.
 * @see {@link GetApplicationCommandOutput} for command's `response` shape.
 * @see {@link QBusinessClientResolvedConfig | config} for QBusinessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> You don't have access to perform this action. Make sure you have the required
 *             permission policies and user accounts and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An issue occurred with the internal server used for your Amazon Q Business service. Wait
 *             some minutes and try again, or contact <a href="http://aws.amazon.com/contact-us/">Support</a> for help.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The application or plugin resource you want to use doesn’t exist. Make sure you have
 *             provided the correct resource and try again.</p>
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
 *
 * @public
 */
export class GetApplicationCommand extends $Command
  .classBuilder<
    GetApplicationCommandInput,
    GetApplicationCommandOutput,
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
  .s("ExpertQ", "GetApplication", {})
  .n("QBusinessClient", "GetApplicationCommand")
  .f(void 0, GetApplicationResponseFilterSensitiveLog)
  .ser(se_GetApplicationCommand)
  .de(de_GetApplicationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetApplicationRequest;
      output: GetApplicationResponse;
    };
    sdk: {
      input: GetApplicationCommandInput;
      output: GetApplicationCommandOutput;
    };
  };
}
