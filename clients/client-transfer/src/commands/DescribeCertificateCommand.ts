// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeCertificateRequest, DescribeCertificateResponse } from "../models/models_0";
import { DescribeCertificate } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, TransferClientResolvedConfig } from "../TransferClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeCertificateCommand}.
 */
export interface DescribeCertificateCommandInput extends DescribeCertificateRequest {}
/**
 * @public
 *
 * The output of {@link DescribeCertificateCommand}.
 */
export interface DescribeCertificateCommandOutput extends DescribeCertificateResponse, __MetadataBearer {}

/**
 * <p>Describes the certificate that's identified by the <code>CertificateId</code>.</p> <note> <p>Transfer Family automatically publishes a Amazon CloudWatch metric called <code>DaysUntilExpiry</code> for imported certificates. This metric tracks the number of days until the certificate expires based on the <code>InactiveDate</code>. The metric is available in the <code>AWS/Transfer</code> namespace and includes the <code>CertificateId</code> as a dimension.</p> </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, DescribeCertificateCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, DescribeCertificateCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * // import type { TransferClientConfig } from "@aws-sdk/client-transfer";
 * const config = {}; // type is TransferClientConfig
 * const client = new TransferClient(config);
 * const input = { // DescribeCertificateRequest
 *   CertificateId: "STRING_VALUE", // required
 * };
 * const command = new DescribeCertificateCommand(input);
 * const response = await client.send(command);
 * // { // DescribeCertificateResponse
 * //   Certificate: { // DescribedCertificate
 * //     Arn: "STRING_VALUE", // required
 * //     CertificateId: "STRING_VALUE",
 * //     Usage: "SIGNING" || "ENCRYPTION" || "TLS",
 * //     Status: "ACTIVE" || "PENDING_ROTATION" || "INACTIVE",
 * //     Certificate: "STRING_VALUE",
 * //     CertificateChain: "STRING_VALUE",
 * //     ActiveDate: new Date("TIMESTAMP"),
 * //     InactiveDate: new Date("TIMESTAMP"),
 * //     Serial: "STRING_VALUE",
 * //     NotBeforeDate: new Date("TIMESTAMP"),
 * //     NotAfterDate: new Date("TIMESTAMP"),
 * //     Type: "CERTIFICATE" || "CERTIFICATE_WITH_PRIVATE_KEY",
 * //     Description: "STRING_VALUE",
 * //     Tags: [ // Tags
 * //       { // Tag
 * //         Key: "STRING_VALUE", // required
 * //         Value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeCertificateCommandInput - {@link DescribeCertificateCommandInput}
 * @returns {@link DescribeCertificateCommandOutput}
 * @see {@link DescribeCertificateCommandInput} for command's `input` shape.
 * @see {@link DescribeCertificateCommandOutput} for command's `response` shape.
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
export class DescribeCertificateCommand extends $Command
  .classBuilder<
    DescribeCertificateCommandInput,
    DescribeCertificateCommandOutput,
    TransferClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: TransferClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("TransferService", "DescribeCertificate", {})
  .n("TransferClient", "DescribeCertificateCommand")
  .sc(DescribeCertificate)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeCertificateRequest;
      output: DescribeCertificateResponse;
    };
    sdk: {
      input: DescribeCertificateCommandInput;
      output: DescribeCertificateCommandOutput;
    };
  };
}
