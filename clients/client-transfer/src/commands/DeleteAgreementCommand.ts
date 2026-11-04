// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteAgreementRequest } from "../models/models_0";
import { DeleteAgreement$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteAgreementCommand}.
 */
export interface DeleteAgreementCommandInput extends DeleteAgreementRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAgreementCommand}.
 */
export interface DeleteAgreementCommandOutput extends __MetadataBearer {}

/**
 * Delete the agreement that's specified in the provided `AgreementId`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, DeleteAgreementCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, DeleteAgreementCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * // import type { TransferClientConfig } from "@aws-sdk/client-transfer";
 * const config = {}; // type is TransferClientConfig
 * const client = new TransferClient(config);
 * const input = { // DeleteAgreementRequest
 *   AgreementId: "STRING_VALUE", // required
 *   ServerId: "STRING_VALUE", // required
 * };
 * const command = new DeleteAgreementCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAgreementCommandInput - {@link DeleteAgreementCommandInput}
 * @returns {@link DeleteAgreementCommandOutput}
 * @see {@link DeleteAgreementCommandInput} for command's `input` shape.
 * @see {@link DeleteAgreementCommandOutput} for command's `response` shape.
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
export class DeleteAgreementCommand extends command<DeleteAgreementCommandInput, DeleteAgreementCommandOutput>(
  _ep0,
  _mw0,
  "DeleteAgreement",
  DeleteAgreement$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAgreementRequest;
      output: {};
    };
    sdk: {
      input: DeleteAgreementCommandInput;
      output: DeleteAgreementCommandOutput;
    };
  };
}
