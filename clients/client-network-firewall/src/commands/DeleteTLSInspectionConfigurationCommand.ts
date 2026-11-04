// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DeleteTLSInspectionConfigurationRequest,
  DeleteTLSInspectionConfigurationResponse,
} from "../models/models_0";
import { DeleteTLSInspectionConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface DeleteTLSInspectionConfigurationCommandOutput extends DeleteTLSInspectionConfigurationResponse, __MetadataBearer {}

/**
 * Deletes the specified TLSInspectionConfiguration.
 *
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
 * //     TLSInspectionConfigurationStatus: "ACTIVE" || "DELETING" || "ERROR" || "UPDATING",
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
 *
 * Your request is valid, but Network Firewall couldn't perform the operation because of a system problem. Retry your request.
 *
 * @throws {@link InvalidOperationException} (client fault)
 *
 * The operation failed because it's not valid. For example, you might have tried to delete a rule group or firewall policy that's in use.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The operation failed because of a problem with your request. Examples include:
 *
 * - You specified an unsupported parameter name or value.
 * - You tried to update a property with a value that isn't among the available types.
 * - Your request references an ARN that is malformed, or corresponds to a resource that isn't valid in the context of the request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Unable to locate a resource using the parameters that you provided.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Unable to process the request due to throttling limitations.
 *
 * @throws {@link NetworkFirewallServiceException}
 *
 * Base exception class for all service exceptions from NetworkFirewall service.
 *
 * @public
 */
export class DeleteTLSInspectionConfigurationCommand extends command<DeleteTLSInspectionConfigurationCommandInput, DeleteTLSInspectionConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "DeleteTLSInspectionConfiguration",
  DeleteTLSInspectionConfiguration$
) {
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
