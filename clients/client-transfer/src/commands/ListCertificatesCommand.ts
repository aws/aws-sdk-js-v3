// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListCertificatesRequest, ListCertificatesResponse } from "../models/models_0";
import { ListCertificates$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListCertificatesCommand}.
 */
export interface ListCertificatesCommandInput extends ListCertificatesRequest {}
/**
 * @public
 *
 * The output of {@link ListCertificatesCommand}.
 */
export interface ListCertificatesCommandOutput extends ListCertificatesResponse, __MetadataBearer {}

/**
 * Returns a list of the current certificates that have been imported into Transfer Family. If you want to limit the results to a certain number, supply a value for the `MaxResults` parameter. If you ran the command previously and received a value for the `NextToken` parameter, you can supply that value to continue listing certificates from where you left off.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, ListCertificatesCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, ListCertificatesCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * // import type { TransferClientConfig } from "@aws-sdk/client-transfer";
 * const config = {}; // type is TransferClientConfig
 * const client = new TransferClient(config);
 * const input = { // ListCertificatesRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListCertificatesCommand(input);
 * const response = await client.send(command);
 * // { // ListCertificatesResponse
 * //   NextToken: "STRING_VALUE",
 * //   Certificates: [ // ListedCertificates // required
 * //     { // ListedCertificate
 * //       Arn: "STRING_VALUE",
 * //       CertificateId: "STRING_VALUE",
 * //       Usage: "SIGNING" || "ENCRYPTION" || "TLS",
 * //       Status: "ACTIVE" || "PENDING_ROTATION" || "INACTIVE",
 * //       ActiveDate: new Date("TIMESTAMP"),
 * //       InactiveDate: new Date("TIMESTAMP"),
 * //       Type: "CERTIFICATE" || "CERTIFICATE_WITH_PRIVATE_KEY",
 * //       Description: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListCertificatesCommandInput - {@link ListCertificatesCommandInput}
 * @returns {@link ListCertificatesCommandOutput}
 * @see {@link ListCertificatesCommandInput} for command's `input` shape.
 * @see {@link ListCertificatesCommandOutput} for command's `response` shape.
 * @see {@link TransferClientResolvedConfig | config} for TransferClient's `config` shape.
 *
 * @throws {@link InternalServiceError} (server fault)
 *
 * This exception is thrown when an error occurs in the Transfer Family service.
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *
 * The `NextToken` parameter that was passed is invalid.
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
export class ListCertificatesCommand extends command<ListCertificatesCommandInput, ListCertificatesCommandOutput>(
  _ep0,
  _mw0,
  "ListCertificates",
  ListCertificates$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCertificatesRequest;
      output: ListCertificatesResponse;
    };
    sdk: {
      input: ListCertificatesCommandInput;
      output: ListCertificatesCommandOutput;
    };
  };
}
