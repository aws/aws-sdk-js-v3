// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateMetricContentRequest, UpdateMetricContentResponse } from "../models/models_3";
import { UpdateMetricContent$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateMetricContentCommand}.
 */
export interface UpdateMetricContentCommandInput extends UpdateMetricContentRequest {}
/**
 * @public
 *
 * The output of {@link UpdateMetricContentCommand}.
 */
export interface UpdateMetricContentCommandOutput extends UpdateMetricContentResponse, __MetadataBearer {}

/**
 * <p>Updates the calculation, unit, and/or trend indicator of an existing metric in the specified Connect Customer instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateMetricContentCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateMetricContentCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // UpdateMetricContentRequest
 *   InstanceId: "STRING_VALUE", // required
 *   MetricId: "STRING_VALUE", // required
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
 *   Unit: "INTEGER" || "DOUBLE" || "PERCENT" || "SECONDS",
 *   PositiveTrendIndicator: "POSITIVE" || "NEGATIVE" || "NEUTRAL",
 * };
 * const command = new UpdateMetricContentCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateMetricContentCommandInput - {@link UpdateMetricContentCommandInput}
 * @returns {@link UpdateMetricContentCommandOutput}
 * @see {@link UpdateMetricContentCommandInput} for command's `input` shape.
 * @see {@link UpdateMetricContentCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 *
 * @public
 */
export class UpdateMetricContentCommand extends command<UpdateMetricContentCommandInput, UpdateMetricContentCommandOutput>(
  _ep0,
  _mw0,
  "UpdateMetricContent",
  UpdateMetricContent$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateMetricContentRequest;
      output: {};
    };
    sdk: {
      input: UpdateMetricContentCommandInput;
      output: UpdateMetricContentCommandOutput;
    };
  };
}
