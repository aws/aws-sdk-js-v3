// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateTLSInspectionConfigurationRequest, UpdateTLSInspectionConfigurationResponse } from "../models/models_0";
import { NetworkFirewallClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkFirewallClient";
import {
  de_UpdateTLSInspectionConfigurationCommand,
  se_UpdateTLSInspectionConfigurationCommand,
} from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateTLSInspectionConfigurationCommand}.
 */
export interface UpdateTLSInspectionConfigurationCommandInput extends UpdateTLSInspectionConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateTLSInspectionConfigurationCommand}.
 */
export interface UpdateTLSInspectionConfigurationCommandOutput
  extends UpdateTLSInspectionConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Updates the TLS inspection configuration settings for the specified TLS inspection configuration. You use a TLS inspection configuration by
 *         referencing it in one or more firewall policies. When you modify a TLS inspection configuration, you modify all
 *         firewall policies that use the TLS inspection configuration. </p>
 *          <p>To update a TLS inspection configuration, first call <a>DescribeTLSInspectionConfiguration</a> to retrieve the
 *         current <a>TLSInspectionConfiguration</a> object, update the object as needed, and then provide
 *         the updated object to this call. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, UpdateTLSInspectionConfigurationCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, UpdateTLSInspectionConfigurationCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new NetworkFirewallClient(config);
 * const input = { // UpdateTLSInspectionConfigurationRequest
 *   TLSInspectionConfigurationArn: "STRING_VALUE",
 *   TLSInspectionConfigurationName: "STRING_VALUE",
 *   TLSInspectionConfiguration: { // TLSInspectionConfiguration
 *     ServerCertificateConfigurations: [ // ServerCertificateConfigurations
 *       { // ServerCertificateConfiguration
 *         ServerCertificates: [ // ServerCertificates
 *           { // ServerCertificate
 *             ResourceArn: "STRING_VALUE",
 *           },
 *         ],
 *         Scopes: [ // ServerCertificateScopes
 *           { // ServerCertificateScope
 *             Sources: [ // Addresses
 *               { // Address
 *                 AddressDefinition: "STRING_VALUE", // required
 *               },
 *             ],
 *             Destinations: [
 *               {
 *                 AddressDefinition: "STRING_VALUE", // required
 *               },
 *             ],
 *             SourcePorts: [ // PortRanges
 *               { // PortRange
 *                 FromPort: Number("int"), // required
 *                 ToPort: Number("int"), // required
 *               },
 *             ],
 *             DestinationPorts: [
 *               {
 *                 FromPort: Number("int"), // required
 *                 ToPort: Number("int"), // required
 *               },
 *             ],
 *             Protocols: [ // ProtocolNumbers
 *               Number("int"),
 *             ],
 *           },
 *         ],
 *         CertificateAuthorityArn: "STRING_VALUE",
 *         CheckCertificateRevocationStatus: { // CheckCertificateRevocationStatusActions
 *           RevokedStatusAction: "PASS" || "DROP" || "REJECT",
 *           UnknownStatusAction: "PASS" || "DROP" || "REJECT",
 *         },
 *       },
 *     ],
 *   },
 *   Description: "STRING_VALUE",
 *   EncryptionConfiguration: { // EncryptionConfiguration
 *     KeyId: "STRING_VALUE",
 *     Type: "CUSTOMER_KMS" || "AWS_OWNED_KMS_KEY", // required
 *   },
 *   UpdateToken: "STRING_VALUE", // required
 * };
 * const command = new UpdateTLSInspectionConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateTLSInspectionConfigurationResponse
 * //   UpdateToken: "STRING_VALUE", // required
 * //   TLSInspectionConfigurationResponse: { // TLSInspectionConfigurationResponse
 * //     TLSInspectionConfigurationArn: "STRING_VALUE", // required
 * //     TLSInspectionConfigurationName: "STRING_VALUE", // required
 * //     TLSInspectionConfigurationId: "STRING_VALUE", // required
 * //     TLSInspectionConfigurationStatus: "ACTIVE" || "DELETING" || "ERROR",
 * //     Description: "STRING_VALUE",
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE", // required
 * //         Value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     LastModifiedTime: new Date("TIMESTAMP"),
 * //     NumberOfAssociations: Number("int"),
 * //     EncryptionConfiguration: { // EncryptionConfiguration
 * //       KeyId: "STRING_VALUE",
 * //       Type: "CUSTOMER_KMS" || "AWS_OWNED_KMS_KEY", // required
 * //     },
 * //     Certificates: [ // Certificates
 * //       { // TlsCertificateData
 * //         CertificateArn: "STRING_VALUE",
 * //         CertificateSerial: "STRING_VALUE",
 * //         Status: "STRING_VALUE",
 * //         StatusMessage: "STRING_VALUE",
 * //       },
 * //     ],
 * //     CertificateAuthority: {
 * //       CertificateArn: "STRING_VALUE",
 * //       CertificateSerial: "STRING_VALUE",
 * //       Status: "STRING_VALUE",
 * //       StatusMessage: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateTLSInspectionConfigurationCommandInput - {@link UpdateTLSInspectionConfigurationCommandInput}
 * @returns {@link UpdateTLSInspectionConfigurationCommandOutput}
 * @see {@link UpdateTLSInspectionConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateTLSInspectionConfigurationCommandOutput} for command's `response` shape.
 * @see {@link NetworkFirewallClientResolvedConfig | config} for NetworkFirewallClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Your request is valid, but Network Firewall couldn't perform the operation because of a
 *          system problem. Retry your request. </p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The operation failed because of a problem with your request. Examples include: </p>
 *          <ul>
 *             <li>
 *                <p>You specified an unsupported parameter name or value.</p>
 *             </li>
 *             <li>
 *                <p>You tried to update a property with a value that isn't among the available
 *                types.</p>
 *             </li>
 *             <li>
 *                <p>Your request references an ARN that is malformed, or corresponds to a resource
 *                that isn't valid in the context of the request.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link InvalidTokenException} (client fault)
 *  <p>The token you provided is stale or isn't valid for the operation. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Unable to locate a resource using the parameters that you provided.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Unable to process the request due to throttling limitations.</p>
 *
 * @throws {@link NetworkFirewallServiceException}
 * <p>Base exception class for all service exceptions from NetworkFirewall service.</p>
 *
 * @public
 */
export class UpdateTLSInspectionConfigurationCommand extends $Command
  .classBuilder<
    UpdateTLSInspectionConfigurationCommandInput,
    UpdateTLSInspectionConfigurationCommandOutput,
    NetworkFirewallClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NetworkFirewallClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("NetworkFirewall_20201112", "UpdateTLSInspectionConfiguration", {})
  .n("NetworkFirewallClient", "UpdateTLSInspectionConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_UpdateTLSInspectionConfigurationCommand)
  .de(de_UpdateTLSInspectionConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateTLSInspectionConfigurationRequest;
      output: UpdateTLSInspectionConfigurationResponse;
    };
    sdk: {
      input: UpdateTLSInspectionConfigurationCommandInput;
      output: UpdateTLSInspectionConfigurationCommandOutput;
    };
  };
}
