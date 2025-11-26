// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  IoTManagedIntegrationsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IoTManagedIntegrationsClient";
import type { GetManagedThingCertificateRequest, GetManagedThingCertificateResponse } from "../models/models_0";
import { GetManagedThingCertificate } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Retrieves the certificate PEM for a managed IoT thing.</p>
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
 *  <p>User is not authorized.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal error from the service that indicates an unexpected error or that the service is unavailable.</p>
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
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You are not authorized to perform this operation.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A validation error occurred when performing the API request.</p>
 *
 * @throws {@link IoTManagedIntegrationsServiceException}
 * <p>Base exception class for all service exceptions from IoTManagedIntegrations service.</p>
 *
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
export class GetManagedThingCertificateCommand extends $Command
  .classBuilder<
    GetManagedThingCertificateCommandInput,
    GetManagedThingCertificateCommandOutput,
    IoTManagedIntegrationsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTManagedIntegrationsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("IotManagedIntegrations", "GetManagedThingCertificate", {})
  .n("IoTManagedIntegrationsClient", "GetManagedThingCertificateCommand")
  .sc(GetManagedThingCertificate)
  .build() {
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
