// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateMetricRequest, CreateMetricResponse } from "../models/models_0";
import { CreateMetric$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateMetricCommand}.
 */
export interface CreateMetricCommandInput extends CreateMetricRequest {}
/**
 * @public
 *
 * The output of {@link CreateMetricCommand}.
 */
export interface CreateMetricCommandOutput extends CreateMetricResponse, __MetadataBearer {}

/**
 * Creates a new metric definition for the specified Connect Customer instance. You can create custom metrics that use formulas referencing existing Amazon Web Services-managed metrics, optionally with filters applied.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, CreateMetricCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, CreateMetricCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // CreateMetricRequest
 *   InstanceId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   MetricCalculation: { // MetricCalculation
 *     CalculationComponents: [ // CalculationComponentList // required
 *       { // CalculationComponent
 *         Alias: "STRING_VALUE", // required
 *         MetricName: "STRING_VALUE",
 *         MetricId: "STRING_VALUE",
 *         MetricFilters: [ // MetricFilterList
 *           { // MetricFilter
 *             MetricFilterKey: "STRING_VALUE", // required
 *             Negate: true || false,
 *             NumberCondition: { // MetricFilterNumberCondition
 *               Comparison: "LESSER" || "LESSER_OR_EQUAL" || "GREATER" || "GREATER_OR_EQUAL", // required
 *               Values: [ // NumberValueList // required
 *                 Number("double"),
 *               ],
 *             },
 *             StringCondition: { // MetricFilterStringCondition
 *               Comparison: "MATCHES_ANY" || "MATCHES_NONE", // required
 *               Values: [ // StringValueList // required
 *                 "STRING_VALUE",
 *               ],
 *             },
 *             BooleanCondition: { // MetricFilterBooleanCondition
 *               Comparison: "IS_TRUE" || "IS_FALSE", // required
 *             },
 *           },
 *         ],
 *       },
 *     ],
 *     Calculation: "STRING_VALUE", // required
 *   },
 *   Unit: "INTEGER" || "DOUBLE" || "PERCENT" || "SECONDS", // required
 *   Status: "PUBLISHED" || "SAVED",
 *   ClientToken: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   PositiveTrendIndicator: "POSITIVE" || "NEGATIVE" || "NEUTRAL",
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateMetricCommand(input);
 * const response = await client.send(command);
 * // { // CreateMetricResponse
 * //   MetricArn: "STRING_VALUE", // required
 * //   MetricId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateMetricCommandInput - {@link CreateMetricCommandInput}
 * @returns {@link CreateMetricCommandOutput}
 * @see {@link CreateMetricCommandInput} for command's `input` shape.
 * @see {@link CreateMetricCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient permissions to perform this action.
 *
 * @throws {@link DuplicateResourceException} (client fault)
 *
 * A resource with the specified name already exists.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * Request processing failed because of an error or failure with the service.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more of the specified parameters are not valid.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The allowed limit for the resource has been exceeded.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The throttling limit has been exceeded.
 *
 * @throws {@link ConnectServiceException}
 *
 * Base exception class for all service exceptions from Connect service.
 *
 * @public
 */
export class CreateMetricCommand extends command<CreateMetricCommandInput, CreateMetricCommandOutput>(
  _ep0,
  _mw0,
  "CreateMetric",
  CreateMetric$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateMetricRequest;
      output: CreateMetricResponse;
    };
    sdk: {
      input: CreateMetricCommandInput;
      output: CreateMetricCommandOutput;
    };
  };
}
