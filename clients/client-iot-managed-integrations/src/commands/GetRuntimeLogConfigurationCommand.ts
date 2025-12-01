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
import type { GetRuntimeLogConfigurationRequest, GetRuntimeLogConfigurationResponse } from "../models/models_0";
import { GetRuntimeLogConfiguration } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetRuntimeLogConfigurationCommand}.
 */
export interface GetRuntimeLogConfigurationCommandInput extends GetRuntimeLogConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetRuntimeLogConfigurationCommand}.
 */
export interface GetRuntimeLogConfigurationCommandOutput extends GetRuntimeLogConfigurationResponse, __MetadataBearer {}

/**
 * <p>Get the runtime log configuration for a specific managed thing.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTManagedIntegrationsClient, GetRuntimeLogConfigurationCommand } from "@aws-sdk/client-iot-managed-integrations"; // ES Modules import
 * // const { IoTManagedIntegrationsClient, GetRuntimeLogConfigurationCommand } = require("@aws-sdk/client-iot-managed-integrations"); // CommonJS import
 * // import type { IoTManagedIntegrationsClientConfig } from "@aws-sdk/client-iot-managed-integrations";
 * const config = {}; // type is IoTManagedIntegrationsClientConfig
 * const client = new IoTManagedIntegrationsClient(config);
 * const input = { // GetRuntimeLogConfigurationRequest
 *   ManagedThingId: "STRING_VALUE", // required
 * };
 * const command = new GetRuntimeLogConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetRuntimeLogConfigurationResponse
 * //   ManagedThingId: "STRING_VALUE",
 * //   RuntimeLogConfigurations: { // RuntimeLogConfigurations
 * //     LogLevel: "DEBUG" || "ERROR" || "INFO" || "WARN",
 * //     LogFlushLevel: "DEBUG" || "ERROR" || "INFO" || "WARN",
 * //     LocalStoreLocation: "STRING_VALUE",
 * //     LocalStoreFileRotationMaxFiles: Number("int"),
 * //     LocalStoreFileRotationMaxBytes: Number("int"),
 * //     UploadLog: true || false,
 * //     UploadPeriodMinutes: Number("int"),
 * //     DeleteLocalStoreAfterUpload: true || false,
 * //   },
 * // };
 *
 * ```
 *
 * @param GetRuntimeLogConfigurationCommandInput - {@link GetRuntimeLogConfigurationCommandInput}
 * @returns {@link GetRuntimeLogConfigurationCommandOutput}
 * @see {@link GetRuntimeLogConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetRuntimeLogConfigurationCommandOutput} for command's `response` shape.
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
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A validation error occurred when performing the API request.</p>
 *
 * @throws {@link IoTManagedIntegrationsServiceException}
 * <p>Base exception class for all service exceptions from IoTManagedIntegrations service.</p>
 *
 *
 * @public
 */
export class GetRuntimeLogConfigurationCommand extends $Command
  .classBuilder<
    GetRuntimeLogConfigurationCommandInput,
    GetRuntimeLogConfigurationCommandOutput,
    IoTManagedIntegrationsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTManagedIntegrationsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("IotManagedIntegrations", "GetRuntimeLogConfiguration", {})
  .n("IoTManagedIntegrationsClient", "GetRuntimeLogConfigurationCommand")
  .sc(GetRuntimeLogConfiguration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRuntimeLogConfigurationRequest;
      output: GetRuntimeLogConfigurationResponse;
    };
    sdk: {
      input: GetRuntimeLogConfigurationCommandInput;
      output: GetRuntimeLogConfigurationCommandOutput;
    };
  };
}
