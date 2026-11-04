// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CancelCertificateTransferRequest } from "../models/models_0";
import { CancelCertificateTransfer$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CancelCertificateTransferCommand}.
 */
export interface CancelCertificateTransferCommandInput extends CancelCertificateTransferRequest {}
/**
 * @public
 *
 * The output of {@link CancelCertificateTransferCommand}.
 */
export interface CancelCertificateTransferCommandOutput extends __MetadataBearer {}

/**
 * Cancels a pending transfer for the specified certificate.
 *
 * **Note** Only the transfer source account can use this operation to cancel a transfer. (Transfer destinations can use RejectCertificateTransfer instead.) After transfer, IoT returns the certificate to the source account in the INACTIVE state. After the destination account has accepted the transfer, the transfer cannot be cancelled.
 *
 * After a certificate transfer is cancelled, the status of the certificate changes from PENDING_TRANSFER to INACTIVE.
 *
 * Requires permission to access the [CancelCertificateTransfer](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, CancelCertificateTransferCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, CancelCertificateTransferCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // CancelCertificateTransferRequest
 *   certificateId: "STRING_VALUE", // required
 * };
 * const command = new CancelCertificateTransferCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CancelCertificateTransferCommandInput - {@link CancelCertificateTransferCommandInput}
 * @returns {@link CancelCertificateTransferCommandOutput}
 * @see {@link CancelCertificateTransferCommandInput} for command's `input` shape.
 * @see {@link CancelCertificateTransferCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *
 * An unexpected error has occurred.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource does not exist.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service is temporarily unavailable.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The rate exceeds the limit.
 *
 * @throws {@link TransferAlreadyCompletedException} (client fault)
 *
 * You can't revert the certificate transfer because the transfer is already complete.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * You are not authorized to perform this operation.
 *
 * @throws {@link IoTServiceException}
 *
 * Base exception class for all service exceptions from IoT service.
 *
 * @public
 */
export class CancelCertificateTransferCommand extends command<CancelCertificateTransferCommandInput, CancelCertificateTransferCommandOutput>(
  _ep0,
  _mw0,
  "CancelCertificateTransfer",
  CancelCertificateTransfer$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelCertificateTransferRequest;
      output: {};
    };
    sdk: {
      input: CancelCertificateTransferCommandInput;
      output: CancelCertificateTransferCommandOutput;
    };
  };
}
