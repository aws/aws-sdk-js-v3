// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RejectCertificateTransferRequest } from "../models/models_2";
import { RejectCertificateTransfer$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RejectCertificateTransferCommand}.
 */
export interface RejectCertificateTransferCommandInput extends RejectCertificateTransferRequest {}
/**
 * @public
 *
 * The output of {@link RejectCertificateTransferCommand}.
 */
export interface RejectCertificateTransferCommandOutput extends __MetadataBearer {}

/**
 * Rejects a pending certificate transfer. After IoT rejects a certificate transfer, the certificate status changes from **PENDING_TRANSFER** to **INACTIVE**.
 *
 * To check for pending certificate transfers, call ListCertificates to enumerate your certificates.
 *
 * This operation can only be called by the transfer destination. After it is called, the certificate will be returned to the source's account in the INACTIVE state.
 *
 * Requires permission to access the [RejectCertificateTransfer](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, RejectCertificateTransferCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, RejectCertificateTransferCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // RejectCertificateTransferRequest
 *   certificateId: "STRING_VALUE", // required
 *   rejectReason: "STRING_VALUE",
 * };
 * const command = new RejectCertificateTransferCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RejectCertificateTransferCommandInput - {@link RejectCertificateTransferCommandInput}
 * @returns {@link RejectCertificateTransferCommandOutput}
 * @see {@link RejectCertificateTransferCommandInput} for command's `input` shape.
 * @see {@link RejectCertificateTransferCommandOutput} for command's `response` shape.
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
export class RejectCertificateTransferCommand extends command<RejectCertificateTransferCommandInput, RejectCertificateTransferCommandOutput>(
  _ep0,
  _mw0,
  "RejectCertificateTransfer",
  RejectCertificateTransfer$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RejectCertificateTransferRequest;
      output: {};
    };
    sdk: {
      input: RejectCertificateTransferCommandInput;
      output: RejectCertificateTransferCommandOutput;
    };
  };
}
