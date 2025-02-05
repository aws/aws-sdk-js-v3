// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { BatchGetRumMetricDefinitionsRequest, BatchGetRumMetricDefinitionsResponse } from "../models/models_0";
import {
  de_BatchGetRumMetricDefinitionsCommand,
  se_BatchGetRumMetricDefinitionsCommand,
} from "../protocols/Aws_restJson1";
import { RUMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RUMClient";

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
export interface BatchGetRumMetricDefinitionsCommandOutput
  extends BatchGetRumMetricDefinitionsResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves the list of metrics and dimensions that a RUM app monitor is sending to a single destination.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RUMClient, BatchGetRumMetricDefinitionsCommand } from "@aws-sdk/client-rum"; // ES Modules import
 * // const { RUMClient, BatchGetRumMetricDefinitionsCommand } = require("@aws-sdk/client-rum"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("RUM", "BatchGetRumMetricDefinitions", {})
  .n("RUMClient", "BatchGetRumMetricDefinitionsCommand")
  .f(void 0, void 0)
  .ser(se_BatchGetRumMetricDefinitionsCommand)
  .de(de_BatchGetRumMetricDefinitionsCommand)
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
