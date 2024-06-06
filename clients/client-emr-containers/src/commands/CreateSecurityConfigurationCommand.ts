// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EMRContainersClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRContainersClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateSecurityConfigurationRequest, CreateSecurityConfigurationResponse } from "../models/models_0";
import {
  de_CreateSecurityConfigurationCommand,
  se_CreateSecurityConfigurationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateSecurityConfigurationCommand}.
 */
export interface CreateSecurityConfigurationCommandInput extends CreateSecurityConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link CreateSecurityConfigurationCommand}.
 */
export interface CreateSecurityConfigurationCommandOutput
  extends CreateSecurityConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Creates a security configuration. Security configurations in Amazon EMR on EKS are
 *          templates for different security setups. You can use security configurations to configure
 *          the Lake Formation integration setup. You can also create a security configuration
 *          to re-use a security setup each time you create a virtual cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRContainersClient, CreateSecurityConfigurationCommand } from "@aws-sdk/client-emr-containers"; // ES Modules import
 * // const { EMRContainersClient, CreateSecurityConfigurationCommand } = require("@aws-sdk/client-emr-containers"); // CommonJS import
 * const client = new EMRContainersClient(config);
 * const input = { // CreateSecurityConfigurationRequest
 *   clientToken: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 *   securityConfigurationData: { // SecurityConfigurationData
 *     authorizationConfiguration: { // AuthorizationConfiguration
 *       lakeFormationConfiguration: { // LakeFormationConfiguration
 *         authorizedSessionTagValue: "STRING_VALUE",
 *         secureNamespaceInfo: { // SecureNamespaceInfo
 *           clusterId: "STRING_VALUE",
 *           namespace: "STRING_VALUE",
 *         },
 *         queryEngineRoleArn: "STRING_VALUE",
 *       },
 *       encryptionConfiguration: { // EncryptionConfiguration
 *         inTransitEncryptionConfiguration: { // InTransitEncryptionConfiguration
 *           tlsCertificateConfiguration: { // TLSCertificateConfiguration
 *             certificateProviderType: "PEM",
 *             publicCertificateSecretArn: "STRING_VALUE",
 *             privateCertificateSecretArn: "STRING_VALUE",
 *           },
 *         },
 *       },
 *     },
 *   },
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateSecurityConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // CreateSecurityConfigurationResponse
 * //   id: "STRING_VALUE",
 * //   name: "STRING_VALUE",
 * //   arn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateSecurityConfigurationCommandInput - {@link CreateSecurityConfigurationCommandInput}
 * @returns {@link CreateSecurityConfigurationCommandOutput}
 * @see {@link CreateSecurityConfigurationCommandInput} for command's `input` shape.
 * @see {@link CreateSecurityConfigurationCommandOutput} for command's `response` shape.
 * @see {@link EMRContainersClientResolvedConfig | config} for EMRContainersClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This is an internal server exception.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>There are invalid parameters in the client request.</p>
 *
 * @throws {@link EMRContainersServiceException}
 * <p>Base exception class for all service exceptions from EMRContainers service.</p>
 *
 * @public
 */
export class CreateSecurityConfigurationCommand extends $Command
  .classBuilder<
    CreateSecurityConfigurationCommandInput,
    CreateSecurityConfigurationCommandOutput,
    EMRContainersClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: EMRContainersClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AwsChicagoWebService", "CreateSecurityConfiguration", {})
  .n("EMRContainersClient", "CreateSecurityConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_CreateSecurityConfigurationCommand)
  .de(de_CreateSecurityConfigurationCommand)
  .build() {}
