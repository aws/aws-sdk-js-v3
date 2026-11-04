// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { TransferCertificateRequest, TransferCertificateResponse } from "../models/models_2";
import { TransferCertificate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link TransferCertificateCommand}.
 */
export interface TransferCertificateCommandInput extends TransferCertificateRequest {}
/**
 * @public
 *
 * The output of {@link TransferCertificateCommand}.
 */
export interface TransferCertificateCommandOutput extends TransferCertificateResponse, __MetadataBearer {}

/**
 * Transfers the specified certificate to the specified Amazon Web Services account.
 *
 * Requires permission to access the [TransferCertificate](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * You can cancel the transfer until it is accepted by the recipient.
 *
 * No notification is sent to the transfer destination's account. The caller is responsible for notifying the transfer target.
 *
 * The certificate being transferred must not be in the `ACTIVE` state. You can use the UpdateCertificate action to deactivate it.
 *
 * The certificate must not have any policies attached to it. You can use the DetachPolicy action to detach them.
 *
 * **Customer managed key behavior:** When you use a customer managed key to encrypt your data and then transfer the certificate to a customer in a different account using the `TransferCertificate` operation, the certificates will no longer be encrypted by their customer managed key configuration. During the transfer process, certificates are encrypted using Amazon Web Services IoT Core owned keys.
 *
 * While a certificate is in the **PENDING_TRANSFER** state, it's always protected by Amazon Web Services IoT Core owned keys, regardless of the customer managed key configuration of either the source or destination account.
 *
 * Once the transfer is completed through AcceptCertificateTransfer, RejectCertificateTransfer, or CancelCertificateTransfer, the certificate will be protected by the customer managed key configuration of the account that owns the certificate after the transfer operation:
 *
 * - If the transfer is accepted: The certificate is encrypted by the target account's customer managed key configuration.
 * - If the transfer is rejected or cancelled: The certificate is protected by the source account's customer managed key configuration.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, TransferCertificateCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, TransferCertificateCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // TransferCertificateRequest
 *   certificateId: "STRING_VALUE", // required
 *   targetAwsAccount: "STRING_VALUE", // required
 *   transferMessage: "STRING_VALUE",
 * };
 * const command = new TransferCertificateCommand(input);
 * const response = await client.send(command);
 * // { // TransferCertificateResponse
 * //   transferredCertificateArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param TransferCertificateCommandInput - {@link TransferCertificateCommandInput}
 * @returns {@link TransferCertificateCommandOutput}
 * @see {@link TransferCertificateCommandInput} for command's `input` shape.
 * @see {@link TransferCertificateCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link CertificateStateException} (client fault)
 *
 * The certificate operation is not allowed.
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
 * @throws {@link TransferConflictException} (client fault)
 *
 * You can't transfer the certificate because authorization policies are still attached.
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
export class TransferCertificateCommand extends command<TransferCertificateCommandInput, TransferCertificateCommandOutput>(
  _ep0,
  _mw0,
  "TransferCertificate",
  TransferCertificate$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: TransferCertificateRequest;
      output: TransferCertificateResponse;
    };
    sdk: {
      input: TransferCertificateCommandInput;
      output: TransferCertificateCommandOutput;
    };
  };
}
