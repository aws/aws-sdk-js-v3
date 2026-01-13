// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { BatchGetRumMetricDefinitionsRequest, BatchGetRumMetricDefinitionsResponse } from "../models/models_0";
import type { RUMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RUMClient";
import { BatchGetRumMetricDefinitions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchGetRumMetricDefinitionsCommand}.
 */
export interface BatchGetRumMetricDefinitionsCommandInput extends BatchGetRumMetricDefinitionsRequest {}
/**
 * @public
 *
 * The output of {@link BatchGetRumMetricDefinitionsCommand}.
 */
export interface BatchGetRumMetricDefinitionsCommandOutput extends BatchGetRumMetricDefinitionsResponse, __MetadataBearer {}

/**
 * <p>Retrieves the list of metrics and dimensions that a RUM app monitor is sending to a single destination.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RUMClient, BatchGetRumMetricDefinitionsCommand } from "@aws-sdk/client-rum"; // ES Modules import
 * // const { RUMClient, BatchGetRumMetricDefinitionsCommand } = require("@aws-sdk/client-rum"); // CommonJS import
 * // import type { RUMClientConfig } from "@aws-sdk/client-rum";
 * const config = {}; // type is RUMClientConfig
 * const client = new RUMClient(config);
 * const input = { // BatchGetRumMetricDefinitionsRequest
 *   AppMonitorName: "STRING_VALUE", // required
 *   Destination: "STRING_VALUE", // required
 *   DestinationArn: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new BatchGetRumMetricDefinitionsCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetRumMetricDefinitionsResponse
 * //   MetricDefinitions: [ // MetricDefinitions
 * //     { // MetricDefinition
 * //       MetricDefinitionId: "STRING_VALUE", // required
 * //       Name: "STRING_VALUE", // required
 * //       ValueKey: "STRING_VALUE",
 * //       UnitLabel: "STRING_VALUE",
 * //       DimensionKeys: { // DimensionKeysMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       EventPattern: "STRING_VALUE",
 * //       Namespace: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param BatchGetRumMetricDefinitionsCommandInput - {@link BatchGetRumMetricDefinitionsCommandInput}
 * @returns {@link BatchGetRumMetricDefinitionsCommandOutput}
 * @see {@link BatchGetRumMetricDefinitionsCommandInput} for command's `input` shape.
 * @see {@link BatchGetRumMetricDefinitionsCommandOutput} for command's `response` shape.
 * @see {@link RUMClientResolvedConfig | config} for RUMClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient permissions to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal service exception.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One of the arguments for the request is not valid.</p>
 *
 * @throws {@link RUMServiceException}
 * <p>Base exception class for all service exceptions from RUM service.</p>
 *
 *
 * @public
 */
export class BatchGetRumMetricDefinitionsCommand extends $Command
  .classBuilder<
    BatchGetRumMetricDefinitionsCommandInput,
    BatchGetRumMetricDefinitionsCommandOutput,
    RUMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RUMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RUM", "BatchGetRumMetricDefinitions", {})
  .n("RUMClient", "BatchGetRumMetricDefinitionsCommand")
  .sc(BatchGetRumMetricDefinitions$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchGetRumMetricDefinitionsRequest;
      output: BatchGetRumMetricDefinitionsResponse;
    };
    sdk: {
      input: BatchGetRumMetricDefinitionsCommandInput;
      output: BatchGetRumMetricDefinitionsCommandOutput;
    };
  };
}
