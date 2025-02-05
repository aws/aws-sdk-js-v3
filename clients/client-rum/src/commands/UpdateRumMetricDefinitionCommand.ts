// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateRumMetricDefinitionRequest, UpdateRumMetricDefinitionResponse } from "../models/models_0";
import { de_UpdateRumMetricDefinitionCommand, se_UpdateRumMetricDefinitionCommand } from "../protocols/Aws_restJson1";
import { RUMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RUMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Modifies one existing metric definition for CloudWatch RUM extended metrics. For
 *          more information about extended metrics, see <a href="https://docs.aws.amazon.com/cloudwatchrum/latest/APIReference/API_BatchCreateRumMetricsDefinitions.html">BatchCreateRumMetricsDefinitions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RUMClient, UpdateRumMetricDefinitionCommand } from "@aws-sdk/client-rum"; // ES Modules import
 * // const { RUMClient, UpdateRumMetricDefinitionCommand } = require("@aws-sdk/client-rum"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
 *  <p>You don't have sufficient permissions to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>This operation attempted to create a resource that already exists.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal service exception.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource not found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>This request exceeds a service quota.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled because of quota limits.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One of the arguments for the request is not valid.</p>
 *
 * @throws {@link RUMServiceException}
 * <p>Base exception class for all service exceptions from RUM service.</p>
 *
 * @public
 */
export class UpdateRumMetricDefinitionCommand extends $Command
  .classBuilder<
    UpdateRumMetricDefinitionCommandInput,
    UpdateRumMetricDefinitionCommandOutput,
    RUMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RUMClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("RUM", "UpdateRumMetricDefinition", {})
  .n("RUMClient", "UpdateRumMetricDefinitionCommand")
  .f(void 0, void 0)
  .ser(se_UpdateRumMetricDefinitionCommand)
  .de(de_UpdateRumMetricDefinitionCommand)
  .build() {
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
