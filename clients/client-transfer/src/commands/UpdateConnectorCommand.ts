// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateConnectorRequest, UpdateConnectorResponse } from "../models/models_0";
import { UpdateConnector$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateConnectorCommand}.
 */
export interface UpdateConnectorCommandInput extends UpdateConnectorRequest {}
/**
 * @public
 *
 * The output of {@link UpdateConnectorCommand}.
 */
export interface UpdateConnectorCommandOutput extends UpdateConnectorResponse, __MetadataBearer {}

/**
 * Updates some of the parameters for an existing connector. Provide the `ConnectorId` for the connector that you want to update, along with the new values for the parameters to update.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, UpdateConnectorCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, UpdateConnectorCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * // import type { TransferClientConfig } from "@aws-sdk/client-transfer";
 * const config = {}; // type is TransferClientConfig
 * const client = new TransferClient(config);
 * const input = { // UpdateConnectorRequest
 *   ConnectorId: "STRING_VALUE", // required
 *   Url: "STRING_VALUE",
 *   As2Config: { // As2ConnectorConfig
 *     LocalProfileId: "STRING_VALUE",
 *     PartnerProfileId: "STRING_VALUE",
 *     MessageSubject: "STRING_VALUE",
 *     Compression: "ZLIB" || "DISABLED",
 *     EncryptionAlgorithm: "AES128_CBC" || "AES192_CBC" || "AES256_CBC" || "DES_EDE3_CBC" || "NONE",
 *     SigningAlgorithm: "SHA256" || "SHA384" || "SHA512" || "SHA1" || "NONE",
 *     MdnSigningAlgorithm: "SHA256" || "SHA384" || "SHA512" || "SHA1" || "NONE" || "DEFAULT",
 *     MdnResponse: "SYNC" || "NONE" || "ASYNC",
 *     BasicAuthSecretId: "STRING_VALUE",
 *     PreserveContentType: "ENABLED" || "DISABLED",
 *     AsyncMdnConfig: { // As2AsyncMdnConnectorConfig
 *       Url: "STRING_VALUE",
 *       ServerIds: [ // As2AsyncMdnServerIds
 *         "STRING_VALUE",
 *       ],
 *     },
 *   },
 *   AccessRole: "STRING_VALUE",
 *   LoggingRole: "STRING_VALUE",
 *   SftpConfig: { // SftpConnectorConfig
 *     UserSecretId: "STRING_VALUE",
 *     TrustedHostKeys: [ // SftpConnectorTrustedHostKeyList
 *       "STRING_VALUE",
 *     ],
 *     MaxConcurrentConnections: Number("int"),
 *     OrderedUserSecretVersionStages: [ // SecretVersionStageList
 *       "STRING_VALUE",
 *     ],
 *   },
 *   SecurityPolicyName: "STRING_VALUE",
 *   EgressConfig: { // UpdateConnectorEgressConfig Union: only one key present
 *     VpcLattice: { // UpdateConnectorVpcLatticeEgressConfig
 *       ResourceConfigurationArn: "STRING_VALUE",
 *       PortNumber: Number("int"),
 *     },
 *   },
 *   IpAddressType: "IPV4" || "DUALSTACK",
 * };
 * const command = new UpdateConnectorCommand(input);
 * const response = await client.send(command);
 * // { // UpdateConnectorResponse
 * //   ConnectorId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param UpdateConnectorCommandInput - {@link UpdateConnectorCommandInput}
 * @returns {@link UpdateConnectorCommandOutput}
 * @see {@link UpdateConnectorCommandInput} for command's `input` shape.
 * @see {@link UpdateConnectorCommandOutput} for command's `response` shape.
 * @see {@link TransferClientResolvedConfig | config} for TransferClient's `config` shape.
 *
 * @throws {@link InternalServiceError} (server fault)
 *
 * This exception is thrown when an error occurs in the Transfer Family service.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * This exception is thrown when the client submits a malformed request.
 *
 * @throws {@link ResourceExistsException} (client fault)
 *
 * The requested resource does not exist, or exists in a region other than the one specified for the command.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * This exception is thrown when a resource is not found by the Amazon Web ServicesTransfer Family service.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The request has failed because the Amazon Web ServicesTransfer Family service is not available.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link TransferServiceException}
 *
 * Base exception class for all service exceptions from Transfer service.
 *
 * @public
 */
export class UpdateConnectorCommand extends command<UpdateConnectorCommandInput, UpdateConnectorCommandOutput>(
  _ep0,
  _mw0,
  "UpdateConnector",
  UpdateConnector$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateConnectorRequest;
      output: UpdateConnectorResponse;
    };
    sdk: {
      input: UpdateConnectorCommandInput;
      output: UpdateConnectorCommandOutput;
    };
  };
}
