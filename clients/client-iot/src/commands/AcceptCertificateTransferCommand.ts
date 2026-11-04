// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AcceptCertificateTransferRequest } from "../models/models_0";
import { AcceptCertificateTransfer$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Accepts a pending certificate transfer. The default state of the certificate is INACTIVE.
 *
 * To check for pending certificate transfers, call ListCertificates to enumerate your certificates.
 *
 * Requires permission to access the [AcceptCertificateTransfer](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, AcceptCertificateTransferCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, AcceptCertificateTransferCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
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
export class AcceptCertificateTransferCommand extends command<AcceptCertificateTransferCommandInput, AcceptCertificateTransferCommandOutput>(
  _ep0,
  _mw0,
  "AcceptCertificateTransfer",
  AcceptCertificateTransfer$
) {
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
