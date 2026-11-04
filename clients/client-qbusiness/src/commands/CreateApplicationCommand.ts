// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateApplicationRequest, CreateApplicationResponse } from "../models/models_0";
import { CreateApplication$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateApplicationCommand}.
 */
export interface CreateApplicationCommandInput extends CreateApplicationRequest {}
/**
 * @public
 *
 * The output of {@link CreateApplicationCommand}.
 */
export interface CreateApplicationCommandOutput extends CreateApplicationResponse, __MetadataBearer {}

/**
 * Creates an Amazon Q Business application.
 *
 * > **Note:**
 * >
 * > There are new tiers for Amazon Q Business. Not all features in Amazon Q Business Pro are also available in Amazon Q Business Lite. For information on what's included in Amazon Q Business Lite and what's included in Amazon Q Business Pro, see [Amazon Q Business tiers](https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/tiers.html#user-sub-tiers). You must use the Amazon Q Business console to assign subscription tiers to users.
 * >
 * > An Amazon Q Apps service linked role will be created if it's absent in the Amazon Web Services account when `QAppsConfiguration` is enabled in the request. For more information, see [Using service-linked roles for Q Apps](https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/using-service-linked-roles-qapps.html).
 * >
 * > When you create an application, Amazon Q Business may securely transmit data for processing from your selected Amazon Web Services region, but within your geography. For more information, see [Cross region inference in Amazon Q Business](https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/cross-region-inference.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QBusinessClient, CreateApplicationCommand } from "@aws-sdk/client-qbusiness"; // ES Modules import
 * // const { QBusinessClient, CreateApplicationCommand } = require("@aws-sdk/client-qbusiness"); // CommonJS import
 * // import type { QBusinessClientConfig } from "@aws-sdk/client-qbusiness";
 * const config = {}; // type is QBusinessClientConfig
 * const client = new QBusinessClient(config);
 * const input = { // CreateApplicationRequest
 *   displayName: "STRING_VALUE", // required
 *   roleArn: "STRING_VALUE",
 *   identityType: "AWS_IAM_IDP_SAML" || "AWS_IAM_IDP_OIDC" || "AWS_IAM_IDC" || "AWS_QUICKSIGHT_IDP" || "ANONYMOUS",
 *   iamIdentityProviderArn: "STRING_VALUE",
 *   identityCenterInstanceArn: "STRING_VALUE",
 *   clientIdsForOIDC: [ // ClientIdsForOIDC
 *     "STRING_VALUE",
 *   ],
 *   description: "STRING_VALUE",
 *   encryptionConfiguration: { // EncryptionConfiguration
 *     kmsKeyId: "STRING_VALUE",
 *   },
 *   tags: [ // Tags
 *     { // Tag
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 *   clientToken: "STRING_VALUE",
 *   attachmentsConfiguration: { // AttachmentsConfiguration
 *     attachmentsControlMode: "ENABLED" || "DISABLED", // required
 *   },
 *   qAppsConfiguration: { // QAppsConfiguration
 *     qAppsControlMode: "ENABLED" || "DISABLED", // required
 *   },
 *   personalizationConfiguration: { // PersonalizationConfiguration
 *     personalizationControlMode: "ENABLED" || "DISABLED", // required
 *   },
 *   quickSightConfiguration: { // QuickSightConfiguration
 *     clientNamespace: "STRING_VALUE", // required
 *   },
 * };
 * const command = new CreateApplicationCommand(input);
 * const response = await client.send(command);
 * // { // CreateApplicationResponse
 * //   applicationId: "STRING_VALUE",
 * //   applicationArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateApplicationCommandInput - {@link CreateApplicationCommandInput}
 * @returns {@link CreateApplicationCommandOutput}
 * @see {@link CreateApplicationCommandInput} for command's `input` shape.
 * @see {@link CreateApplicationCommandOutput} for command's `response` shape.
 * @see {@link QBusinessClientResolvedConfig | config} for QBusinessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have access to perform this action. Make sure you have the required permission policies and user accounts and try again.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * You are trying to perform an action that conflicts with the current status of your resource. Fix any inconsistencies with your resources and try again.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An issue occurred with the internal server used for your Amazon Q Business service. Wait some minutes and try again, or contact [Support](http://aws.amazon.com/contact-us/) for help.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The application or plugin resource you want to use doesn’t exist. Make sure you have provided the correct resource and try again.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * You have exceeded the set limits for your Amazon Q Business service.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to throttling. Reduce the number of requests and try again.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input doesn't meet the constraints set by the Amazon Q Business service. Provide the correct input and try again.
 *
 * @throws {@link QBusinessServiceException}
 *
 * Base exception class for all service exceptions from QBusiness service.
 *
 * @public
 */
export class CreateApplicationCommand extends command<CreateApplicationCommandInput, CreateApplicationCommandOutput>(
  _ep0,
  _mw0,
  "CreateApplication",
  CreateApplication$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateApplicationRequest;
      output: CreateApplicationResponse;
    };
    sdk: {
      input: CreateApplicationCommandInput;
      output: CreateApplicationCommandOutput;
    };
  };
}
