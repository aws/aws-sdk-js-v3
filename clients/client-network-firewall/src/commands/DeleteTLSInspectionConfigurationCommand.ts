// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteTLSInspectionConfigurationRequest, DeleteTLSInspectionConfigurationResponse } from "../models/models_0";
import { NetworkFirewallClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkFirewallClient";
import { DeleteTLSInspectionConfiguration } from "../schemas/schemas_8_Configuration";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteTLSInspectionConfigurationCommand}.
 */
export interface DeleteTLSInspectionConfigurationCommandInput extends DeleteTLSInspectionConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteTLSInspectionConfigurationCommand}.
 */
export interface DeleteTLSInspectionConfigurationCommandOutput
  extends DeleteTLSInspectionConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Deletes the specified <a>TLSInspectionConfiguration</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, DeleteTLSInspectionConfigurationCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, DeleteTLSInspectionConfigurationCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * // import type { NetworkFirewallClientConfig } from "@aws-sdk/client-network-firewall";
 * const config = {}; // type is NetworkFirewallClientConfig
 * const client = new NetworkFirewallClient(config);
 * const input = { // DeleteTLSInspectionConfigurationRequest
 *   TLSInspectionConfigurationArn: "STRING_VALUE",
 *   TLSInspectionConfigurationName: "STRING_VALUE",
 * };
 * const command = new DeleteTLSInspectionConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // DeleteTLSInspectionConfigurationResponse
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
 * @param DeleteTLSInspectionConfigurationCommandInput - {@link DeleteTLSInspectionConfigurationCommandInput}
 * @returns {@link DeleteTLSInspectionConfigurationCommandOutput}
 * @see {@link DeleteTLSInspectionConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteTLSInspectionConfigurationCommandOutput} for command's `response` shape.
 * @see {@link NetworkFirewallClientResolvedConfig | config} for NetworkFirewallClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Your request is valid, but Network Firewall couldn't perform the operation because of a
 *          system problem. Retry your request. </p>
 *
 * @throws {@link InvalidOperationException} (client fault)
 *  <p>The operation failed because it's not valid. For example, you might have tried to delete
 *          a rule group or firewall policy that's in use.</p>
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Unable to locate a resource using the parameters that you provided.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Unable to process the request due to throttling limitations.</p>
 *
 * @throws {@link NetworkFirewallServiceException}
 * <p>Base exception class for all service exceptions from NetworkFirewall service.</p>
 *
 *
 * @public
 */
export class DeleteTLSInspectionConfigurationCommand extends $Command
  .classBuilder<
    DeleteTLSInspectionConfigurationCommandInput,
    DeleteTLSInspectionConfigurationCommandOutput,
    NetworkFirewallClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NetworkFirewallClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("NetworkFirewall_20201112", "DeleteTLSInspectionConfiguration", {})
  .n("NetworkFirewallClient", "DeleteTLSInspectionConfigurationCommand")
  .sc(DeleteTLSInspectionConfiguration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteTLSInspectionConfigurationRequest;
      output: DeleteTLSInspectionConfigurationResponse;
    };
    sdk: {
      input: DeleteTLSInspectionConfigurationCommandInput;
      output: DeleteTLSInspectionConfigurationCommandOutput;
    };
  };
}
