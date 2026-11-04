// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetRuntimeLogConfigurationRequest, GetRuntimeLogConfigurationResponse } from "../models/models_0";
import { GetRuntimeLogConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Get the runtime log configuration for a specific managed thing.
 *
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
export class GetRuntimeLogConfigurationCommand extends command<GetRuntimeLogConfigurationCommandInput, GetRuntimeLogConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "GetRuntimeLogConfiguration",
  GetRuntimeLogConfiguration$
) {
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
