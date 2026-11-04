// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetManagedThingCertificateRequest, GetManagedThingCertificateResponse } from "../models/models_0";
import { GetManagedThingCertificate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetManagedThingCertificateCommand}.
 */
export interface GetManagedThingCertificateCommandInput extends GetManagedThingCertificateRequest {}
/**
 * @public
 *
 * The output of {@link GetManagedThingCertificateCommand}.
 */
export interface GetManagedThingCertificateCommandOutput extends GetManagedThingCertificateResponse, __MetadataBearer {}

/**
 * Retrieves the certificate PEM for a managed IoT thing.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTManagedIntegrationsClient, GetManagedThingCertificateCommand } from "@aws-sdk/client-iot-managed-integrations"; // ES Modules import
 * // const { IoTManagedIntegrationsClient, GetManagedThingCertificateCommand } = require("@aws-sdk/client-iot-managed-integrations"); // CommonJS import
 * // import type { IoTManagedIntegrationsClientConfig } from "@aws-sdk/client-iot-managed-integrations";
 * const config = {}; // type is IoTManagedIntegrationsClientConfig
 * const client = new IoTManagedIntegrationsClient(config);
 * const input = { // GetManagedThingCertificateRequest
 *   Identifier: "STRING_VALUE", // required
 * };
 * const command = new GetManagedThingCertificateCommand(input);
 * const response = await client.send(command);
 * // { // GetManagedThingCertificateResponse
 * //   ManagedThingId: "STRING_VALUE",
 * //   CertificatePem: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetManagedThingCertificateCommandInput - {@link GetManagedThingCertificateCommandInput}
 * @returns {@link GetManagedThingCertificateCommandOutput}
 * @see {@link GetManagedThingCertificateCommandInput} for command's `input` shape.
 * @see {@link GetManagedThingCertificateCommandOutput} for command's `response` shape.
 * @see {@link IoTManagedIntegrationsClientResolvedConfig | config} for IoTManagedIntegrationsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * User is not authorized.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Internal error from the service that indicates an unexpected error or that the service is unavailable.
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
 * @throws {@link ValidationException} (client fault)
 *
 * A validation error occurred when performing the API request.
 *
 * @throws {@link IoTManagedIntegrationsServiceException}
 *
 * Base exception class for all service exceptions from IoTManagedIntegrations service.
 *
 * @example Get managed thing certificate
 * ```javascript
 * //
 * const input = {
 *   Identifier: "example-managed-thing-id"
 * };
 * const command = new GetManagedThingCertificateCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   CertificatePem: "-----BEGIN CERTIFICATE-----
 * MIIBkTCB+wIJAKHHH...
 * -----END CERTIFICATE-----",
 *   ManagedThingId: "example-managed-thing-id"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetManagedThingCertificateCommand extends command<GetManagedThingCertificateCommandInput, GetManagedThingCertificateCommandOutput>(
  _ep0,
  _mw0,
  "GetManagedThingCertificate",
  GetManagedThingCertificate$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetManagedThingCertificateRequest;
      output: GetManagedThingCertificateResponse;
    };
    sdk: {
      input: GetManagedThingCertificateCommandInput;
      output: GetManagedThingCertificateCommandOutput;
    };
  };
}
