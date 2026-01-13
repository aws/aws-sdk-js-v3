// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ImportCertificateRequest, ImportCertificateResponse } from "../models/models_0";
import { ImportCertificate$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, TransferClientResolvedConfig } from "../TransferClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ImportCertificateCommand}.
 */
export interface ImportCertificateCommandInput extends ImportCertificateRequest {}
/**
 * @public
 *
 * The output of {@link ImportCertificateCommand}.
 */
export interface ImportCertificateCommandOutput extends ImportCertificateResponse, __MetadataBearer {}

/**
 * <p>Imports the signing and encryption certificates that you need to create local (AS2) profiles and partner profiles.</p> <p>You can import both the certificate and its chain in the <code>Certificate</code> parameter.</p> <p>After importing a certificate, Transfer Family automatically creates a Amazon CloudWatch metric called <code>DaysUntilExpiry</code> that tracks the number of days until the certificate expires. The metric is based on the <code>InactiveDate</code> parameter and is published daily in the <code>AWS/Transfer</code> namespace.</p> <important> <p>It can take up to a full day after importing a certificate for Transfer Family to emit the <code>DaysUntilExpiry</code> metric to your account.</p> </important> <note> <p>If you use the <code>Certificate</code> parameter to upload both the certificate and its chain, don't use the <code>CertificateChain</code> parameter.</p> </note> <p> <b>CloudWatch monitoring</b> </p> <p>The <code>DaysUntilExpiry</code> metric includes the following specifications:</p> <ul> <li> <p> <b>Units:</b> Count (days)</p> </li> <li> <p> <b>Dimensions:</b> <code>CertificateId</code> (always present), <code>Description</code> (if provided during certificate import)</p> </li> <li> <p> <b>Statistics:</b> Minimum, Maximum, Average</p> </li> <li> <p> <b>Frequency:</b> Published daily</p> </li> </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, ImportCertificateCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, ImportCertificateCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * // import type { TransferClientConfig } from "@aws-sdk/client-transfer";
 * const config = {}; // type is TransferClientConfig
 * const client = new TransferClient(config);
 * const input = { // ImportCertificateRequest
 *   Usage: "SIGNING" || "ENCRYPTION" || "TLS", // required
 *   Certificate: "STRING_VALUE", // required
 *   CertificateChain: "STRING_VALUE",
 *   PrivateKey: "STRING_VALUE",
 *   ActiveDate: new Date("TIMESTAMP"),
 *   InactiveDate: new Date("TIMESTAMP"),
 *   Description: "STRING_VALUE",
 *   Tags: [ // Tags
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new ImportCertificateCommand(input);
 * const response = await client.send(command);
 * // { // ImportCertificateResponse
 * //   CertificateId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param ImportCertificateCommandInput - {@link ImportCertificateCommandInput}
 * @returns {@link ImportCertificateCommandOutput}
 * @see {@link ImportCertificateCommandInput} for command's `input` shape.
 * @see {@link ImportCertificateCommandOutput} for command's `response` shape.
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
export class ImportCertificateCommand extends $Command
  .classBuilder<
    ImportCertificateCommandInput,
    ImportCertificateCommandOutput,
    TransferClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: TransferClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("TransferService", "ImportCertificate", {})
  .n("TransferClient", "ImportCertificateCommand")
  .sc(ImportCertificate$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ImportCertificateRequest;
      output: ImportCertificateResponse;
    };
    sdk: {
      input: ImportCertificateCommandInput;
      output: ImportCertificateCommandOutput;
    };
  };
}
