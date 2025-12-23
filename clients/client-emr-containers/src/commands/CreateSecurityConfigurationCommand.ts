// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EMRContainersClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRContainersClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateSecurityConfigurationRequest, CreateSecurityConfigurationResponse } from "../models/models_0";
import { CreateSecurityConfiguration$ } from "../schemas/schemas_0";

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
export interface CreateSecurityConfigurationCommandOutput extends CreateSecurityConfigurationResponse, __MetadataBearer {}

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
 * // import type { EMRContainersClientConfig } from "@aws-sdk/client-emr-containers";
 * const config = {}; // type is EMRContainersClientConfig
 * const client = new EMRContainersClient(config);
 * const input = { // CreateSecurityConfigurationRequest
 *   clientToken: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 *   containerProvider: { // ContainerProvider
 *     type: "EKS", // required
 *     id: "STRING_VALUE", // required
 *     info: { // ContainerInfo Union: only one key present
 *       eksInfo: { // EksInfo
 *         namespace: "STRING_VALUE",
 *         nodeLabel: "STRING_VALUE",
 *       },
 *     },
 *   },
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
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EMRContainersClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AwsChicagoWebService", "CreateSecurityConfiguration", {})
  .n("EMRContainersClient", "CreateSecurityConfigurationCommand")
  .sc(CreateSecurityConfiguration$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateSecurityConfigurationRequest;
      output: CreateSecurityConfigurationResponse;
    };
    sdk: {
      input: CreateSecurityConfigurationCommandInput;
      output: CreateSecurityConfigurationCommandOutput;
    };
  };
}
