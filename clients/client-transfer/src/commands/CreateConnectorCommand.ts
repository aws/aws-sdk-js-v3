// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateConnectorRequest, CreateConnectorResponse } from "../models/models_0";
import { de_CreateConnectorCommand, se_CreateConnectorCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TransferClientResolvedConfig } from "../TransferClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateConnectorCommand}.
 */
export interface CreateConnectorCommandInput extends CreateConnectorRequest {}
/**
 * @public
 *
 * The output of {@link CreateConnectorCommand}.
 */
export interface CreateConnectorCommandOutput extends CreateConnectorResponse, __MetadataBearer {}

/**
 * <p>Creates the connector, which captures the parameters for a connection for the AS2 or SFTP protocol. For AS2, the connector is required for sending files to an externally hosted AS2 server. For SFTP, the connector is required when sending files to an SFTP server or receiving files from an SFTP server. For more details about connectors, see <a href="https://docs.aws.amazon.com/transfer/latest/userguide/configure-as2-connector.html">Configure AS2 connectors</a> and <a href="https://docs.aws.amazon.com/transfer/latest/userguide/configure-sftp-connector.html">Create SFTP connectors</a>.</p> <note> <p>You must specify exactly one configuration object: either for AS2 (<code>As2Config</code>) or SFTP (<code>SftpConfig</code>).</p> </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, CreateConnectorCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, CreateConnectorCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * // import type { TransferClientConfig } from "@aws-sdk/client-transfer";
 * const config = {}; // type is TransferClientConfig
 * const client = new TransferClient(config);
 * const input = { // CreateConnectorRequest
 *   Url: "STRING_VALUE",
 *   As2Config: { // As2ConnectorConfig
 *     LocalProfileId: "STRING_VALUE",
 *     PartnerProfileId: "STRING_VALUE",
 *     MessageSubject: "STRING_VALUE",
 *     Compression: "ZLIB" || "DISABLED",
 *     EncryptionAlgorithm: "AES128_CBC" || "AES192_CBC" || "AES256_CBC" || "DES_EDE3_CBC" || "NONE",
 *     SigningAlgorithm: "SHA256" || "SHA384" || "SHA512" || "SHA1" || "NONE",
 *     MdnSigningAlgorithm: "SHA256" || "SHA384" || "SHA512" || "SHA1" || "NONE" || "DEFAULT",
 *     MdnResponse: "SYNC" || "NONE",
 *     BasicAuthSecretId: "STRING_VALUE",
 *     PreserveContentType: "ENABLED" || "DISABLED",
 *   },
 *   AccessRole: "STRING_VALUE", // required
 *   LoggingRole: "STRING_VALUE",
 *   Tags: [ // Tags
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   SftpConfig: { // SftpConnectorConfig
 *     UserSecretId: "STRING_VALUE",
 *     TrustedHostKeys: [ // SftpConnectorTrustedHostKeyList
 *       "STRING_VALUE",
 *     ],
 *     MaxConcurrentConnections: Number("int"),
 *   },
 *   SecurityPolicyName: "STRING_VALUE",
 *   EgressConfig: { // ConnectorEgressConfig Union: only one key present
 *     VpcLattice: { // ConnectorVpcLatticeEgressConfig
 *       ResourceConfigurationArn: "STRING_VALUE", // required
 *       PortNumber: Number("int"),
 *     },
 *   },
 * };
 * const command = new CreateConnectorCommand(input);
 * const response = await client.send(command);
 * // { // CreateConnectorResponse
 * //   ConnectorId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateConnectorCommandInput - {@link CreateConnectorCommandInput}
 * @returns {@link CreateConnectorCommandOutput}
 * @see {@link CreateConnectorCommandInput} for command's `input` shape.
 * @see {@link CreateConnectorCommandOutput} for command's `response` shape.
 * @see {@link TransferClientResolvedConfig | config} for TransferClient's `config` shape.
 *
 * @throws {@link InternalServiceError} (server fault)
 *  <p>This exception is thrown when an error occurs in the Transfer Family service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception is thrown when the client submits a malformed request.</p>
 *
 * @throws {@link ResourceExistsException} (client fault)
 *  <p>The requested resource does not exist, or exists in a region other than the one specified for the command.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception is thrown when a resource is not found by the Amazon Web ServicesTransfer Family service.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The request has failed because the Amazon Web ServicesTransfer Family service is not available.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link TransferServiceException}
 * <p>Base exception class for all service exceptions from Transfer service.</p>
 *
 *
 * @public
 */
export class CreateConnectorCommand extends $Command
  .classBuilder<
    CreateConnectorCommandInput,
    CreateConnectorCommandOutput,
    TransferClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: TransferClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("TransferService", "CreateConnector", {})
  .n("TransferClient", "CreateConnectorCommand")
  .f(void 0, void 0)
  .ser(se_CreateConnectorCommand)
  .de(de_CreateConnectorCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateConnectorRequest;
      output: CreateConnectorResponse;
    };
    sdk: {
      input: CreateConnectorCommandInput;
      output: CreateConnectorCommandOutput;
    };
  };
}
