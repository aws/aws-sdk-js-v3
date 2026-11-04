// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateRumMetricDefinitionRequest, UpdateRumMetricDefinitionResponse } from "../models/models_0";
import { UpdateRumMetricDefinition$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateRumMetricDefinitionCommand}.
 */
export interface UpdateRumMetricDefinitionCommandInput extends UpdateRumMetricDefinitionRequest {}
/**
 * @public
 *
 * The output of {@link UpdateRumMetricDefinitionCommand}.
 */
export interface UpdateRumMetricDefinitionCommandOutput extends UpdateRumMetricDefinitionResponse, __MetadataBearer {}

/**
 * Modifies one existing metric definition for CloudWatch RUM extended metrics. For more information about extended metrics, see [BatchCreateRumMetricsDefinitions](https://docs.aws.amazon.com/cloudwatchrum/latest/APIReference/API_BatchCreateRumMetricsDefinitions.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RUMClient, UpdateRumMetricDefinitionCommand } from "@aws-sdk/client-rum"; // ES Modules import
 * // const { RUMClient, UpdateRumMetricDefinitionCommand } = require("@aws-sdk/client-rum"); // CommonJS import
 * // import type { RUMClientConfig } from "@aws-sdk/client-rum";
 * const config = {}; // type is RUMClientConfig
 * const client = new RUMClient(config);
 * const input = { // UpdateRumMetricDefinitionRequest
 *   AppMonitorName: "STRING_VALUE", // required
 *   Destination: "STRING_VALUE", // required
 *   DestinationArn: "STRING_VALUE",
 *   MetricDefinition: { // MetricDefinitionRequest
 *     Name: "STRING_VALUE", // required
 *     ValueKey: "STRING_VALUE",
 *     UnitLabel: "STRING_VALUE",
 *     DimensionKeys: { // DimensionKeysMap
 *       "<keys>": "STRING_VALUE",
 *     },
 *     EventPattern: "STRING_VALUE",
 *     Namespace: "STRING_VALUE",
 *   },
 *   MetricDefinitionId: "STRING_VALUE", // required
 * };
 * const command = new UpdateRumMetricDefinitionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateRumMetricDefinitionCommandInput - {@link UpdateRumMetricDefinitionCommandInput}
 * @returns {@link UpdateRumMetricDefinitionCommandOutput}
 * @see {@link UpdateRumMetricDefinitionCommandInput} for command's `input` shape.
 * @see {@link UpdateRumMetricDefinitionCommandOutput} for command's `response` shape.
 * @see {@link RUMClientResolvedConfig | config} for RUMClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have sufficient permissions to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * This operation attempted to create a resource that already exists.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Internal service exception.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Resource not found.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * This request exceeds a service quota.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was throttled because of quota limits.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * One of the arguments for the request is not valid.
 *
 * @throws {@link RUMServiceException}
 *
 * Base exception class for all service exceptions from RUM service.
 *
 * @public
 */
export class UpdateRumMetricDefinitionCommand extends command<UpdateRumMetricDefinitionCommandInput, UpdateRumMetricDefinitionCommandOutput>(
  _ep0,
  _mw0,
  "UpdateRumMetricDefinition",
  UpdateRumMetricDefinition$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateRumMetricDefinitionRequest;
      output: {};
    };
    sdk: {
      input: UpdateRumMetricDefinitionCommandInput;
      output: UpdateRumMetricDefinitionCommandOutput;
    };
  };
}
