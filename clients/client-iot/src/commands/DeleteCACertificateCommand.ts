// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteCACertificateRequest, DeleteCACertificateResponse } from "../models/models_0";
import { DeleteCACertificate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteCACertificateCommand}.
 */
export interface DeleteCACertificateCommandInput extends DeleteCACertificateRequest {}
/**
 * @public
 *
 * The output of {@link DeleteCACertificateCommand}.
 */
export interface DeleteCACertificateCommandOutput extends DeleteCACertificateResponse, __MetadataBearer {}

/**
 * Deletes a registered CA certificate.
 *
 * Requires permission to access the [DeleteCACertificate](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DeleteCACertificateCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DeleteCACertificateCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // DeleteCACertificateRequest
 *   certificateId: "STRING_VALUE", // required
 * };
 * const command = new DeleteCACertificateCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteCACertificateCommandInput - {@link DeleteCACertificateCommandInput}
 * @returns {@link DeleteCACertificateCommandOutput}
 * @see {@link DeleteCACertificateCommandInput} for command's `input` shape.
 * @see {@link DeleteCACertificateCommandOutput} for command's `response` shape.
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
export class DeleteCACertificateCommand extends command<DeleteCACertificateCommandInput, DeleteCACertificateCommandOutput>(
  _ep0,
  _mw0,
  "DeleteCACertificate",
  DeleteCACertificate$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteCACertificateRequest;
      output: {};
    };
    sdk: {
      input: DeleteCACertificateCommandInput;
      output: DeleteCACertificateCommandOutput;
    };
  };
}
