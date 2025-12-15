// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateConnectorRequest, UpdateConnectorResponse } from "../models/models_0";
import { UpdateConnector$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, TransferClientResolvedConfig } from "../TransferClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Updates some of the parameters for an existing connector. Provide the <code>ConnectorId</code> for the connector that you want to update, along with the new values for the parameters to update.</p>
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
 *     MdnResponse: "SYNC" || "NONE",
 *     BasicAuthSecretId: "STRING_VALUE",
 *     PreserveContentType: "ENABLED" || "DISABLED",
 *   },
 *   AccessRole: "STRING_VALUE",
 *   LoggingRole: "STRING_VALUE",
 *   SftpConfig: { // SftpConnectorConfig
 *     UserSecretId: "STRING_VALUE",
 *     TrustedHostKeys: [ // SftpConnectorTrustedHostKeyList
 *       "STRING_VALUE",
 *     ],
 *     MaxConcurrentConnections: Number("int"),
 *   },
 *   SecurityPolicyName: "STRING_VALUE",
 *   EgressConfig: { // UpdateConnectorEgressConfig Union: only one key present
 *     VpcLattice: { // UpdateConnectorVpcLatticeEgressConfig
 *       ResourceConfigurationArn: "STRING_VALUE",
 *       PortNumber: Number("int"),
 *     },
 *   },
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
export class UpdateConnectorCommand extends $Command
  .classBuilder<
    UpdateConnectorCommandInput,
    UpdateConnectorCommandOutput,
    TransferClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: TransferClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("TransferService", "UpdateConnector", {})
  .n("TransferClient", "UpdateConnectorCommand")
  .sc(UpdateConnector$)
  .build() {
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
