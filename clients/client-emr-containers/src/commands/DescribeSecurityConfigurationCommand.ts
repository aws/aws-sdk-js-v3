// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EMRContainersClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRContainersClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeSecurityConfigurationRequest, DescribeSecurityConfigurationResponse } from "../models/models_0";
import { DescribeSecurityConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeSecurityConfigurationCommand}.
 */
export interface DescribeSecurityConfigurationCommandInput extends DescribeSecurityConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DescribeSecurityConfigurationCommand}.
 */
export interface DescribeSecurityConfigurationCommandOutput
  extends DescribeSecurityConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Displays detailed information about a specified security configuration. Security
 *          configurations in Amazon EMR on EKS are templates for different security setups. You
 *          can use security configurations to configure the Lake Formation integration setup.
 *          You can also create a security configuration to re-use a security setup each time you
 *          create a virtual cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRContainersClient, DescribeSecurityConfigurationCommand } from "@aws-sdk/client-emr-containers"; // ES Modules import
 * // const { EMRContainersClient, DescribeSecurityConfigurationCommand } = require("@aws-sdk/client-emr-containers"); // CommonJS import
 * // import type { EMRContainersClientConfig } from "@aws-sdk/client-emr-containers";
 * const config = {}; // type is EMRContainersClientConfig
 * const client = new EMRContainersClient(config);
 * const input = { // DescribeSecurityConfigurationRequest
 *   id: "STRING_VALUE", // required
 * };
 * const command = new DescribeSecurityConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeSecurityConfigurationResponse
 * //   securityConfiguration: { // SecurityConfiguration
 * //     id: "STRING_VALUE",
 * //     name: "STRING_VALUE",
 * //     arn: "STRING_VALUE",
 * //     createdAt: new Date("TIMESTAMP"),
 * //     createdBy: "STRING_VALUE",
 * //     securityConfigurationData: { // SecurityConfigurationData
 * //       authorizationConfiguration: { // AuthorizationConfiguration
 * //         lakeFormationConfiguration: { // LakeFormationConfiguration
 * //           authorizedSessionTagValue: "STRING_VALUE",
 * //           secureNamespaceInfo: { // SecureNamespaceInfo
 * //             clusterId: "STRING_VALUE",
 * //             namespace: "STRING_VALUE",
 * //           },
 * //           queryEngineRoleArn: "STRING_VALUE",
 * //         },
 * //         encryptionConfiguration: { // EncryptionConfiguration
 * //           inTransitEncryptionConfiguration: { // InTransitEncryptionConfiguration
 * //             tlsCertificateConfiguration: { // TLSCertificateConfiguration
 * //               certificateProviderType: "PEM",
 * //               publicCertificateSecretArn: "STRING_VALUE",
 * //               privateCertificateSecretArn: "STRING_VALUE",
 * //             },
 * //           },
 * //         },
 * //       },
 * //     },
 * //     tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeSecurityConfigurationCommandInput - {@link DescribeSecurityConfigurationCommandInput}
 * @returns {@link DescribeSecurityConfigurationCommandOutput}
 * @see {@link DescribeSecurityConfigurationCommandInput} for command's `input` shape.
 * @see {@link DescribeSecurityConfigurationCommandOutput} for command's `response` shape.
 * @see {@link EMRContainersClientResolvedConfig | config} for EMRContainersClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This is an internal server exception.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
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
export class DescribeSecurityConfigurationCommand extends $Command
  .classBuilder<
    DescribeSecurityConfigurationCommandInput,
    DescribeSecurityConfigurationCommandOutput,
    EMRContainersClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EMRContainersClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AwsChicagoWebService", "DescribeSecurityConfiguration", {})
  .n("EMRContainersClient", "DescribeSecurityConfigurationCommand")
  .sc(DescribeSecurityConfiguration$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeSecurityConfigurationRequest;
      output: DescribeSecurityConfigurationResponse;
    };
    sdk: {
      input: DescribeSecurityConfigurationCommandInput;
      output: DescribeSecurityConfigurationCommandOutput;
    };
  };
}
