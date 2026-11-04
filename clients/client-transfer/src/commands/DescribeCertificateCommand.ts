// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeCertificateRequest, DescribeCertificateResponse } from "../models/models_0";
import { DescribeCertificate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Describes the certificate that's identified by the `CertificateId`.
 *
 * > **Note:** Transfer Family automatically publishes a Amazon CloudWatch metric called `DaysUntilExpiry` for imported certificates. This metric tracks the number of days until the certificate expires based on the `InactiveDate`. The metric is available in the `AWS/Transfer` namespace and includes the `CertificateId` as a dimension.
 *
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
 *
 * This exception is thrown when an error occurs in the Transfer Family service.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * This exception is thrown when the client submits a malformed request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * This exception is thrown when a resource is not found by the Amazon Web ServicesTransfer Family service.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The request has failed because the Amazon Web ServicesTransfer Family service is not available.
 *
 * @throws {@link TransferServiceException}
 *
 * Base exception class for all service exceptions from Transfer service.
 *
 * @public
 */
export class DescribeCertificateCommand extends command<DescribeCertificateCommandInput, DescribeCertificateCommandOutput>(
  _ep0,
  _mw0,
  "DescribeCertificate",
  DescribeCertificate$
) {
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
