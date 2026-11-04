// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateCertificateRequest } from "../models/models_2";
import { UpdateCertificate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateCertificateCommand}.
 */
export interface UpdateCertificateCommandInput extends UpdateCertificateRequest {}
/**
 * @public
 *
 * The output of {@link UpdateCertificateCommand}.
 */
export interface UpdateCertificateCommandOutput extends __MetadataBearer {}

/**
 * Updates the status of the specified certificate. This operation is idempotent.
 *
 * Requires permission to access the [UpdateCertificate](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * Certificates must be in the ACTIVE state to authenticate devices that use a certificate to connect to IoT.
 *
 * Within a few minutes of updating a certificate from the ACTIVE state to any other state, IoT disconnects all devices that used that certificate to connect. Devices cannot use a certificate that is not in the ACTIVE state to reconnect.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, UpdateCertificateCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, UpdateCertificateCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // UpdateCertificateRequest
 *   certificateId: "STRING_VALUE", // required
 *   newStatus: "ACTIVE" || "INACTIVE" || "REVOKED" || "PENDING_TRANSFER" || "REGISTER_INACTIVE" || "PENDING_ACTIVATION", // required
 * };
 * const command = new UpdateCertificateCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateCertificateCommandInput - {@link UpdateCertificateCommandInput}
 * @returns {@link UpdateCertificateCommandOutput}
 * @see {@link UpdateCertificateCommandInput} for command's `input` shape.
 * @see {@link UpdateCertificateCommandOutput} for command's `response` shape.
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
export class UpdateCertificateCommand extends command<UpdateCertificateCommandInput, UpdateCertificateCommandOutput>(
  _ep0,
  _mw0,
  "UpdateCertificate",
  UpdateCertificate$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateCertificateRequest;
      output: {};
    };
    sdk: {
      input: UpdateCertificateCommandInput;
      output: UpdateCertificateCommandOutput;
    };
  };
}
