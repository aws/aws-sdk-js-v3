// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteCertificateRequest } from "../models/models_0";
import { DeleteCertificate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteCertificateCommand}.
 */
export interface DeleteCertificateCommandInput extends DeleteCertificateRequest {}
/**
 * @public
 *
 * The output of {@link DeleteCertificateCommand}.
 */
export interface DeleteCertificateCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the certificate that's specified in the <code>CertificateId</code> parameter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, DeleteCertificateCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, DeleteCertificateCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * // import type { TransferClientConfig } from "@aws-sdk/client-transfer";
 * const config = {}; // type is TransferClientConfig
 * const client = new TransferClient(config);
 * const input = { // DeleteCertificateRequest
 *   CertificateId: "STRING_VALUE", // required
 * };
 * const command = new DeleteCertificateCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteCertificateCommandInput - {@link DeleteCertificateCommandInput}
 * @returns {@link DeleteCertificateCommandOutput}
 * @see {@link DeleteCertificateCommandInput} for command's `input` shape.
 * @see {@link DeleteCertificateCommandOutput} for command's `response` shape.
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
export class DeleteCertificateCommand extends command<DeleteCertificateCommandInput, DeleteCertificateCommandOutput>(
  _ep0,
  _mw0,
  "DeleteCertificate",
  DeleteCertificate$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteCertificateRequest;
      output: {};
    };
    sdk: {
      input: DeleteCertificateCommandInput;
      output: DeleteCertificateCommandOutput;
    };
  };
}
