// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeConnectorRequest, DescribeConnectorResponse } from "../models/models_0";
import { de_DescribeConnectorCommand, se_DescribeConnectorCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TransferClientResolvedConfig } from "../TransferClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeConnectorCommand}.
 */
export interface DescribeConnectorCommandInput extends DescribeConnectorRequest {}
/**
 * @public
 *
 * The output of {@link DescribeConnectorCommand}.
 */
export interface DescribeConnectorCommandOutput extends DescribeConnectorResponse, __MetadataBearer {}

/**
 * <p>Describes the connector that's identified by the <code>ConnectorId.</code> </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, DescribeConnectorCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, DescribeConnectorCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * const client = new TransferClient(config);
 * const input = { // DescribeConnectorRequest
 *   ConnectorId: "STRING_VALUE", // required
 * };
 * const command = new DescribeConnectorCommand(input);
 * const response = await client.send(command);
 * // { // DescribeConnectorResponse
 * //   Connector: { // DescribedConnector
 * //     Arn: "STRING_VALUE", // required
 * //     ConnectorId: "STRING_VALUE",
 * //     Url: "STRING_VALUE",
 * //     As2Config: { // As2ConnectorConfig
 * //       LocalProfileId: "STRING_VALUE",
 * //       PartnerProfileId: "STRING_VALUE",
 * //       MessageSubject: "STRING_VALUE",
 * //       Compression: "ZLIB" || "DISABLED",
 * //       EncryptionAlgorithm: "AES128_CBC" || "AES192_CBC" || "AES256_CBC" || "DES_EDE3_CBC" || "NONE",
 * //       SigningAlgorithm: "SHA256" || "SHA384" || "SHA512" || "SHA1" || "NONE",
 * //       MdnSigningAlgorithm: "SHA256" || "SHA384" || "SHA512" || "SHA1" || "NONE" || "DEFAULT",
 * //       MdnResponse: "SYNC" || "NONE",
 * //       BasicAuthSecretId: "STRING_VALUE",
 * //       PreserveContentType: "ENABLED" || "DISABLED",
 * //     },
 * //     AccessRole: "STRING_VALUE",
 * //     LoggingRole: "STRING_VALUE",
 * //     Tags: [ // Tags
 * //       { // Tag
 * //         Key: "STRING_VALUE", // required
 * //         Value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     SftpConfig: { // SftpConnectorConfig
 * //       UserSecretId: "STRING_VALUE",
 * //       TrustedHostKeys: [ // SftpConnectorTrustedHostKeyList
 * //         "STRING_VALUE",
 * //       ],
 * //       MaxConcurrentConnections: Number("int"),
 * //     },
 * //     ServiceManagedEgressIpAddresses: [ // ServiceManagedEgressIpAddresses
 * //       "STRING_VALUE",
 * //     ],
 * //     SecurityPolicyName: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeConnectorCommandInput - {@link DescribeConnectorCommandInput}
 * @returns {@link DescribeConnectorCommandOutput}
 * @see {@link DescribeConnectorCommandInput} for command's `input` shape.
 * @see {@link DescribeConnectorCommandOutput} for command's `response` shape.
 * @see {@link TransferClientResolvedConfig | config} for TransferClient's `config` shape.
 *
 * @throws {@link InternalServiceError} (server fault)
 *  <p>This exception is thrown when an error occurs in the Transfer Family service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception is thrown when the client submits a malformed request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception is thrown when a resource is not found by the Amazon Web ServicesTransfer Family service.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The request has failed because the Amazon Web ServicesTransfer Family service is not available.</p>
 *
 * @throws {@link TransferServiceException}
 * <p>Base exception class for all service exceptions from Transfer service.</p>
 *
 *
 * @public
 */
export class DescribeConnectorCommand extends $Command
  .classBuilder<
    DescribeConnectorCommandInput,
    DescribeConnectorCommandOutput,
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
  .s("TransferService", "DescribeConnector", {})
  .n("TransferClient", "DescribeConnectorCommand")
  .f(void 0, void 0)
  .ser(se_DescribeConnectorCommand)
  .de(de_DescribeConnectorCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeConnectorRequest;
      output: DescribeConnectorResponse;
    };
    sdk: {
      input: DescribeConnectorCommandInput;
      output: DescribeConnectorCommandOutput;
    };
  };
}
