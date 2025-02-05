// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { AcceptCertificateTransferRequest } from "../models/models_0";
import { de_AcceptCertificateTransferCommand, se_AcceptCertificateTransferCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AcceptCertificateTransferCommand}.
 */
export interface AcceptCertificateTransferCommandInput extends AcceptCertificateTransferRequest {}
/**
 * @public
 *
 * The output of {@link AcceptCertificateTransferCommand}.
 */
export interface AcceptCertificateTransferCommandOutput extends __MetadataBearer {}

/**
 * <p>Accepts a pending certificate transfer. The default state of the certificate is
 *          INACTIVE.</p>
 *          <p>To check for pending certificate transfers, call <a>ListCertificates</a>
 *          to enumerate your certificates.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">AcceptCertificateTransfer</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, AcceptCertificateTransferCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, AcceptCertificateTransferCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new IoTClient(config);
 * const input = { // AcceptCertificateTransferRequest
 *   certificateId: "STRING_VALUE", // required
 *   setAsActive: true || false,
 * };
 * const command = new AcceptCertificateTransferCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AcceptCertificateTransferCommandInput - {@link AcceptCertificateTransferCommandInput}
 * @returns {@link AcceptCertificateTransferCommandOutput}
 * @see {@link AcceptCertificateTransferCommandInput} for command's `input` shape.
 * @see {@link AcceptCertificateTransferCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
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
 * @throws {@link TransferAlreadyCompletedException} (client fault)
 *  <p>You can't revert the certificate transfer because the transfer is already
 *          complete.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You are not authorized to perform this operation.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 * @public
 */
export class AcceptCertificateTransferCommand extends $Command
  .classBuilder<
    AcceptCertificateTransferCommandInput,
    AcceptCertificateTransferCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIotService", "AcceptCertificateTransfer", {})
  .n("IoTClient", "AcceptCertificateTransferCommand")
  .f(void 0, void 0)
  .ser(se_AcceptCertificateTransferCommand)
  .de(de_AcceptCertificateTransferCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AcceptCertificateTransferRequest;
      output: {};
    };
    sdk: {
      input: AcceptCertificateTransferCommandInput;
      output: AcceptCertificateTransferCommandOutput;
    };
  };
}
