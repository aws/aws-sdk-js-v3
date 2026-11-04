// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateOtaTaskConfigurationRequest, CreateOtaTaskConfigurationResponse } from "../models/models_0";
import { CreateOtaTaskConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateOtaTaskConfigurationCommand}.
 */
export interface CreateOtaTaskConfigurationCommandInput extends CreateOtaTaskConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link CreateOtaTaskConfigurationCommand}.
 */
export interface CreateOtaTaskConfigurationCommandOutput extends CreateOtaTaskConfigurationResponse, __MetadataBearer {}

/**
 * Create a configuraiton for the over-the-air (OTA) task.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTManagedIntegrationsClient, CreateOtaTaskConfigurationCommand } from "@aws-sdk/client-iot-managed-integrations"; // ES Modules import
 * // const { IoTManagedIntegrationsClient, CreateOtaTaskConfigurationCommand } = require("@aws-sdk/client-iot-managed-integrations"); // CommonJS import
 * // import type { IoTManagedIntegrationsClientConfig } from "@aws-sdk/client-iot-managed-integrations";
 * const config = {}; // type is IoTManagedIntegrationsClientConfig
 * const client = new IoTManagedIntegrationsClient(config);
 * const input = { // CreateOtaTaskConfigurationRequest
 *   Description: "STRING_VALUE",
 *   Name: "STRING_VALUE",
 *   PushConfig: { // PushConfig
 *     AbortConfig: { // OtaTaskAbortConfig
 *       AbortConfigCriteriaList: [ // AbortConfigCriteriaList
 *         { // AbortConfigCriteria
 *           Action: "CANCEL",
 *           FailureType: "FAILED" || "REJECTED" || "TIMED_OUT" || "ALL",
 *           MinNumberOfExecutedThings: Number("int"),
 *           ThresholdPercentage: Number("double"),
 *         },
 *       ],
 *     },
 *     RolloutConfig: { // OtaTaskExecutionRolloutConfig
 *       ExponentialRolloutRate: { // ExponentialRolloutRate
 *         BaseRatePerMinute: Number("int"),
 *         IncrementFactor: Number("double"),
 *         RateIncreaseCriteria: { // RolloutRateIncreaseCriteria
 *           numberOfNotifiedThings: Number("int"),
 *           numberOfSucceededThings: Number("int"),
 *         },
 *       },
 *       MaximumPerMinute: Number("int"),
 *     },
 *     TimeoutConfig: { // OtaTaskTimeoutConfig
 *       InProgressTimeoutInMinutes: Number("long"),
 *     },
 *   },
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new CreateOtaTaskConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // CreateOtaTaskConfigurationResponse
 * //   TaskConfigurationId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateOtaTaskConfigurationCommandInput - {@link CreateOtaTaskConfigurationCommandInput}
 * @returns {@link CreateOtaTaskConfigurationCommandOutput}
 * @see {@link CreateOtaTaskConfigurationCommandInput} for command's `input` shape.
 * @see {@link CreateOtaTaskConfigurationCommandOutput} for command's `response` shape.
 * @see {@link IoTManagedIntegrationsClientResolvedConfig | config} for IoTManagedIntegrationsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * User is not authorized.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * There is a conflict with the request.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Internal error from the service that indicates an unexpected error or that the service is unavailable.
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
export class CreateOtaTaskConfigurationCommand extends command<CreateOtaTaskConfigurationCommandInput, CreateOtaTaskConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "CreateOtaTaskConfiguration",
  CreateOtaTaskConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateOtaTaskConfigurationRequest;
      output: CreateOtaTaskConfigurationResponse;
    };
    sdk: {
      input: CreateOtaTaskConfigurationCommandInput;
      output: CreateOtaTaskConfigurationCommandOutput;
    };
  };
}
