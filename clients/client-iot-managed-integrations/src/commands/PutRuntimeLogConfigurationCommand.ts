// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  IoTManagedIntegrationsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IoTManagedIntegrationsClient";
import { PutRuntimeLogConfigurationRequest } from "../models/models_0";
import { PutRuntimeLogConfiguration } from "../schemas/schemas_7_Log";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutRuntimeLogConfigurationCommand}.
 */
export interface PutRuntimeLogConfigurationCommandInput extends PutRuntimeLogConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link PutRuntimeLogConfigurationCommand}.
 */
export interface PutRuntimeLogConfigurationCommandOutput extends __MetadataBearer {}

/**
 * <p>Set the runtime log configuration for a specific managed thing or for all managed things as a group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTManagedIntegrationsClient, PutRuntimeLogConfigurationCommand } from "@aws-sdk/client-iot-managed-integrations"; // ES Modules import
 * // const { IoTManagedIntegrationsClient, PutRuntimeLogConfigurationCommand } = require("@aws-sdk/client-iot-managed-integrations"); // CommonJS import
 * // import type { IoTManagedIntegrationsClientConfig } from "@aws-sdk/client-iot-managed-integrations";
 * const config = {}; // type is IoTManagedIntegrationsClientConfig
 * const client = new IoTManagedIntegrationsClient(config);
 * const input = { // PutRuntimeLogConfigurationRequest
 *   ManagedThingId: "STRING_VALUE", // required
 *   RuntimeLogConfigurations: { // RuntimeLogConfigurations
 *     LogLevel: "DEBUG" || "ERROR" || "INFO" || "WARN",
 *     LogFlushLevel: "DEBUG" || "ERROR" || "INFO" || "WARN",
 *     LocalStoreLocation: "STRING_VALUE",
 *     LocalStoreFileRotationMaxFiles: Number("int"),
 *     LocalStoreFileRotationMaxBytes: Number("int"),
 *     UploadLog: true || false,
 *     UploadPeriodMinutes: Number("int"),
 *     DeleteLocalStoreAfterUpload: true || false,
 *   },
 * };
 * const command = new PutRuntimeLogConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutRuntimeLogConfigurationCommandInput - {@link PutRuntimeLogConfigurationCommandInput}
 * @returns {@link PutRuntimeLogConfigurationCommandOutput}
 * @see {@link PutRuntimeLogConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutRuntimeLogConfigurationCommandOutput} for command's `response` shape.
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
export class PutRuntimeLogConfigurationCommand extends $Command
  .classBuilder<
    PutRuntimeLogConfigurationCommandInput,
    PutRuntimeLogConfigurationCommandOutput,
    IoTManagedIntegrationsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTManagedIntegrationsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("IotManagedIntegrations", "PutRuntimeLogConfiguration", {})
  .n("IoTManagedIntegrationsClient", "PutRuntimeLogConfigurationCommand")
  .sc(PutRuntimeLogConfiguration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutRuntimeLogConfigurationRequest;
      output: {};
    };
    sdk: {
      input: PutRuntimeLogConfigurationCommandInput;
      output: PutRuntimeLogConfigurationCommandOutput;
    };
  };
}
