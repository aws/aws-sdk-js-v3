// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppConfigClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppConfigClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ConfigurationProfile, CreateConfigurationProfileRequest } from "../models/models_0";
import { CreateConfigurationProfile } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateConfigurationProfileCommand}.
 */
export interface CreateConfigurationProfileCommandInput extends CreateConfigurationProfileRequest {}
/**
 * @public
 *
 * The output of {@link CreateConfigurationProfileCommand}.
 */
export interface CreateConfigurationProfileCommandOutput extends ConfigurationProfile, __MetadataBearer {}

/**
 * <p>Creates a configuration profile, which is information that enables AppConfig
 *          to access the configuration source. Valid configuration sources include the
 *          following:</p>
 *          <ul>
 *             <li>
 *                <p>Configuration data in YAML, JSON, and other formats stored in the AppConfig hosted configuration store</p>
 *             </li>
 *             <li>
 *                <p>Configuration data stored as objects in an Amazon Simple Storage Service (Amazon S3)
 *                bucket</p>
 *             </li>
 *             <li>
 *                <p>Pipelines stored in CodePipeline</p>
 *             </li>
 *             <li>
 *                <p>Secrets stored in Secrets Manager</p>
 *             </li>
 *             <li>
 *                <p>Standard and secure string parameters stored in Amazon Web Services Systems Manager Parameter Store</p>
 *             </li>
 *             <li>
 *                <p>Configuration data in SSM documents stored in the Systems Manager document store</p>
 *             </li>
 *          </ul>
 *          <p>A configuration profile includes the following information:</p>
 *          <ul>
 *             <li>
 *                <p>The URI location of the configuration data.</p>
 *             </li>
 *             <li>
 *                <p>The Identity and Access Management (IAM) role that provides access to the configuration data.</p>
 *             </li>
 *             <li>
 *                <p>A validator for the configuration data. Available validators include either a JSON
 *                Schema or an Amazon Web Services Lambda function.</p>
 *             </li>
 *          </ul>
 *          <p>For more information, see <a href="http://docs.aws.amazon.com/appconfig/latest/userguide/appconfig-creating-configuration-and-profile.html">Create a
 *             Configuration and a Configuration Profile</a> in the <i>AppConfig
 *             User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppConfigClient, CreateConfigurationProfileCommand } from "@aws-sdk/client-appconfig"; // ES Modules import
 * // const { AppConfigClient, CreateConfigurationProfileCommand } = require("@aws-sdk/client-appconfig"); // CommonJS import
 * // import type { AppConfigClientConfig } from "@aws-sdk/client-appconfig";
 * const config = {}; // type is AppConfigClientConfig
 * const client = new AppConfigClient(config);
 * const input = { // CreateConfigurationProfileRequest
 *   ApplicationId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   LocationUri: "STRING_VALUE", // required
 *   RetrievalRoleArn: "STRING_VALUE",
 *   Validators: [ // ValidatorList
 *     { // Validator
 *       Type: "JSON_SCHEMA" || "LAMBDA", // required
 *       Content: "STRING_VALUE", // required
 *     },
 *   ],
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   Type: "STRING_VALUE",
 *   KmsKeyIdentifier: "STRING_VALUE",
 * };
 * const command = new CreateConfigurationProfileCommand(input);
 * const response = await client.send(command);
 * // { // ConfigurationProfile
 * //   ApplicationId: "STRING_VALUE",
 * //   Id: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   LocationUri: "STRING_VALUE",
 * //   RetrievalRoleArn: "STRING_VALUE",
 * //   Validators: [ // ValidatorList
 * //     { // Validator
 * //       Type: "JSON_SCHEMA" || "LAMBDA", // required
 * //       Content: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   Type: "STRING_VALUE",
 * //   KmsKeyArn: "STRING_VALUE",
 * //   KmsKeyIdentifier: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateConfigurationProfileCommandInput - {@link CreateConfigurationProfileCommandInput}
 * @returns {@link CreateConfigurationProfileCommandOutput}
 * @see {@link CreateConfigurationProfileCommandInput} for command's `input` shape.
 * @see {@link CreateConfigurationProfileCommandOutput} for command's `response` shape.
 * @see {@link AppConfigClientResolvedConfig | config} for AppConfigClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There was an internal failure in the AppConfig service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource could not be found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The number of one more AppConfig resources exceeds the maximum allowed. Verify that your
 *          environment doesn't exceed the following service quotas:</p>
 *          <p>Applications: 100 max</p>
 *          <p>Deployment strategies: 20 max</p>
 *          <p>Configuration profiles: 100 max per application</p>
 *          <p>Environments: 20 max per application</p>
 *          <p>To resolve this issue, you can delete one or more resources and try again. Or, you can
 *          request a quota increase. For more information about quotas and to request an increase, see
 *             <a href="https://docs.aws.amazon.com/general/latest/gr/appconfig.html#limits_appconfig">Service quotas for AppConfig</a> in the Amazon Web Services General Reference.</p>
 *
 * @throws {@link AppConfigServiceException}
 * <p>Base exception class for all service exceptions from AppConfig service.</p>
 *
 *
 * @example To create a configuration profile
 * ```javascript
 * // The following create-configuration-profile example creates a configuration profile using a configuration stored in Parameter Store, a capability of Systems Manager.
 * const input = {
 *   ApplicationId: "339ohji",
 *   LocationUri: "ssm-parameter://Example-Parameter",
 *   Name: "Example-Configuration-Profile",
 *   RetrievalRoleArn: "arn:aws:iam::111122223333:role/Example-App-Config-Role"
 * };
 * const command = new CreateConfigurationProfileCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ApplicationId: "339ohji",
 *   Id: "ur8hx2f",
 *   LocationUri: "ssm-parameter://Example-Parameter",
 *   Name: "Example-Configuration-Profile",
 *   RetrievalRoleArn: "arn:aws:iam::111122223333:role/Example-App-Config-Role"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateConfigurationProfileCommand extends $Command
  .classBuilder<
    CreateConfigurationProfileCommandInput,
    CreateConfigurationProfileCommandOutput,
    AppConfigClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppConfigClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonAppConfig", "CreateConfigurationProfile", {})
  .n("AppConfigClient", "CreateConfigurationProfileCommand")
  .sc(CreateConfigurationProfile)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateConfigurationProfileRequest;
      output: ConfigurationProfile;
    };
    sdk: {
      input: CreateConfigurationProfileCommandInput;
      output: CreateConfigurationProfileCommandOutput;
    };
  };
}
