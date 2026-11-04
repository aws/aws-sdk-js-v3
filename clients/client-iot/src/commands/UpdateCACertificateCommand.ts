// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateCACertificateRequest } from "../models/models_2";
import { UpdateCACertificate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateCACertificateCommand}.
 */
export interface UpdateCACertificateCommandInput extends UpdateCACertificateRequest {}
/**
 * @public
 *
 * The output of {@link UpdateCACertificateCommand}.
 */
export interface UpdateCACertificateCommandOutput extends __MetadataBearer {}

/**
 * Updates a registered CA certificate.
 *
 * Requires permission to access the [UpdateCACertificate](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, UpdateCACertificateCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, UpdateCACertificateCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // UpdateCACertificateRequest
 *   certificateId: "STRING_VALUE", // required
 *   newStatus: "ACTIVE" || "INACTIVE",
 *   newAutoRegistrationStatus: "ENABLE" || "DISABLE",
 *   registrationConfig: { // RegistrationConfig
 *     templateBody: "STRING_VALUE",
 *     roleArn: "STRING_VALUE",
 *     templateName: "STRING_VALUE",
 *   },
 *   removeAutoRegistration: true || false,
 * };
 * const command = new UpdateCACertificateCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateCACertificateCommandInput - {@link UpdateCACertificateCommandInput}
 * @returns {@link UpdateCACertificateCommandOutput}
 * @see {@link UpdateCACertificateCommandInput} for command's `input` shape.
 * @see {@link UpdateCACertificateCommandOutput} for command's `response` shape.
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
export class UpdateCACertificateCommand extends command<UpdateCACertificateCommandInput, UpdateCACertificateCommandOutput>(
  _ep0,
  _mw0,
  "UpdateCACertificate",
  UpdateCACertificate$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateCACertificateRequest;
      output: {};
    };
    sdk: {
      input: UpdateCACertificateCommandInput;
      output: UpdateCACertificateCommandOutput;
    };
  };
}
