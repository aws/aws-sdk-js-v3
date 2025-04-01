// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EMRContainersClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRContainersClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListSecurityConfigurationsRequest, ListSecurityConfigurationsResponse } from "../models/models_0";
import { de_ListSecurityConfigurationsCommand, se_ListSecurityConfigurationsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListSecurityConfigurationsCommand}.
 */
export interface ListSecurityConfigurationsCommandInput extends ListSecurityConfigurationsRequest {}
/**
 * @public
 *
 * The output of {@link ListSecurityConfigurationsCommand}.
 */
export interface ListSecurityConfigurationsCommandOutput extends ListSecurityConfigurationsResponse, __MetadataBearer {}

/**
 * <p>Lists security configurations based on a set of parameters. Security configurations in
 *          Amazon EMR on EKS are templates for different security setups. You can use security
 *          configurations to configure the Lake Formation integration setup. You can also
 *          create a security configuration to re-use a security setup each time you create a virtual
 *          cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRContainersClient, ListSecurityConfigurationsCommand } from "@aws-sdk/client-emr-containers"; // ES Modules import
 * // const { EMRContainersClient, ListSecurityConfigurationsCommand } = require("@aws-sdk/client-emr-containers"); // CommonJS import
 * const client = new EMRContainersClient(config);
 * const input = { // ListSecurityConfigurationsRequest
 *   createdAfter: new Date("TIMESTAMP"),
 *   createdBefore: new Date("TIMESTAMP"),
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListSecurityConfigurationsCommand(input);
 * const response = await client.send(command);
 * // { // ListSecurityConfigurationsResponse
 * //   securityConfigurations: [ // SecurityConfigurations
 * //     { // SecurityConfiguration
 * //       id: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       createdBy: "STRING_VALUE",
 * //       securityConfigurationData: { // SecurityConfigurationData
 * //         authorizationConfiguration: { // AuthorizationConfiguration
 * //           lakeFormationConfiguration: { // LakeFormationConfiguration
 * //             authorizedSessionTagValue: "STRING_VALUE",
 * //             secureNamespaceInfo: { // SecureNamespaceInfo
 * //               clusterId: "STRING_VALUE",
 * //               namespace: "STRING_VALUE",
 * //             },
 * //             queryEngineRoleArn: "STRING_VALUE",
 * //           },
 * //           encryptionConfiguration: { // EncryptionConfiguration
 * //             inTransitEncryptionConfiguration: { // InTransitEncryptionConfiguration
 * //               tlsCertificateConfiguration: { // TLSCertificateConfiguration
 * //                 certificateProviderType: "PEM",
 * //                 publicCertificateSecretArn: "STRING_VALUE",
 * //                 privateCertificateSecretArn: "STRING_VALUE",
 * //               },
 * //             },
 * //           },
 * //         },
 * //       },
 * //       tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSecurityConfigurationsCommandInput - {@link ListSecurityConfigurationsCommandInput}
 * @returns {@link ListSecurityConfigurationsCommandOutput}
 * @see {@link ListSecurityConfigurationsCommandInput} for command's `input` shape.
 * @see {@link ListSecurityConfigurationsCommandOutput} for command's `response` shape.
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
export class ListSecurityConfigurationsCommand extends $Command
  .classBuilder<
    ListSecurityConfigurationsCommandInput,
    ListSecurityConfigurationsCommandOutput,
    EMRContainersClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EMRContainersClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AwsChicagoWebService", "ListSecurityConfigurations", {})
  .n("EMRContainersClient", "ListSecurityConfigurationsCommand")
  .f(void 0, void 0)
  .ser(se_ListSecurityConfigurationsCommand)
  .de(de_ListSecurityConfigurationsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSecurityConfigurationsRequest;
      output: ListSecurityConfigurationsResponse;
    };
    sdk: {
      input: ListSecurityConfigurationsCommandInput;
      output: ListSecurityConfigurationsCommandOutput;
    };
  };
}
