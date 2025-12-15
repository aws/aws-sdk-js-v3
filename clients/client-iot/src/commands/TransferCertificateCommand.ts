// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import type { TransferCertificateRequest, TransferCertificateResponse } from "../models/models_2";
import { TransferCertificate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Transfers the specified certificate to the specified Amazon Web Services account.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">TransferCertificate</a> action.</p>
 *          <p>You can cancel the transfer until it is acknowledged by the recipient.</p>
 *          <p>No notification is sent to the transfer destination's account. It's up to the caller
 *          to notify the transfer target.</p>
 *          <p>The certificate being transferred must not be in the <code>ACTIVE</code> state. You can use the
 *          <a>UpdateCertificate</a> action to deactivate it.</p>
 *          <p>The certificate must not have any policies attached to it. You can use the
 *          <a>DetachPolicy</a> action to detach them.</p>
 *          <p>
 *             <b>Customer managed key behavior:</b> When you use a customer managed key to secure your data and then transfer
 *          the key to a customer in a different account using the <a>TransferCertificate</a> operation, the certificates will no longer be protected by their
 *          customer managed key configuration. During the transfer process, certificates are encrypted using IoT owned keys.</p>
 *          <p>While a certificate is in the <b>PENDING_TRANSFER</b> state, it's always protected by IoT owned keys, regardless of the customer managed key configuration of either the source or destination account. </p>
 *          <p>Once the transfer is completed through <a>AcceptCertificateTransfer</a>, <a>RejectCertificateTransfer</a>, or
 *          <a>CancelCertificateTransfer</a>, the certificate will be protected by the customer managed key configuration of the account that owns
 *          the certificate after the transfer operation:</p>
 *          <ul>
 *             <li>
 *                <p>If the transfer is accepted: The certificate is protected by the destination account's customer managed key configuration.</p>
 *             </li>
 *             <li>
 *                <p>If the transfer is rejected or cancelled: The certificate is protected by the source account's customer managed key configuration.</p>
 *             </li>
 *          </ul>
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
 *  <p>The certificate operation is not allowed.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is temporarily unavailable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link TransferConflictException} (client fault)
 *  <p>You can't transfer the certificate because authorization policies are still
 *          attached.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You are not authorized to perform this operation.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 *
 * @public
 */
export class TransferCertificateCommand extends $Command
  .classBuilder<
    TransferCertificateCommandInput,
    TransferCertificateCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIotService", "TransferCertificate", {})
  .n("IoTClient", "TransferCertificateCommand")
  .sc(TransferCertificate$)
  .build() {
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
