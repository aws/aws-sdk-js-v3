// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutRuntimeLogConfigurationRequest } from "../models/models_0";
import { PutRuntimeLogConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Set the runtime log configuration for a specific managed thing.
 *
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
 * @throws {@link ThrottlingException} (client fault)
 *
 * The rate exceeds the limit.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * A validation error occurred when performing the API request.
 *
 * @throws {@link IoTManagedIntegrationsServiceException}
 *
 * Base exception class for all service exceptions from IoTManagedIntegrations service.
 *
 * @public
 */
export class PutRuntimeLogConfigurationCommand extends command<PutRuntimeLogConfigurationCommandInput, PutRuntimeLogConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "PutRuntimeLogConfiguration",
  PutRuntimeLogConfiguration$
) {
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
