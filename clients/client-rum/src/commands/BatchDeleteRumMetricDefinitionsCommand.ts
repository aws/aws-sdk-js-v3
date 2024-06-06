// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { BatchDeleteRumMetricDefinitionsRequest, BatchDeleteRumMetricDefinitionsResponse } from "../models/models_0";
import {
  de_BatchDeleteRumMetricDefinitionsCommand,
  se_BatchDeleteRumMetricDefinitionsCommand,
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
 * The input for {@link BatchDeleteRumMetricDefinitionsCommand}.
 */
export interface BatchDeleteRumMetricDefinitionsCommandInput extends BatchDeleteRumMetricDefinitionsRequest {}
/**
 * @public
 *
 * The output of {@link BatchDeleteRumMetricDefinitionsCommand}.
 */
export interface BatchDeleteRumMetricDefinitionsCommandOutput
  extends BatchDeleteRumMetricDefinitionsResponse,
    __MetadataBearer {}

/**
 * <p>Removes the specified metrics from being sent to an extended metrics destination.</p>
 *          <p>If some metric definition IDs specified in a <code>BatchDeleteRumMetricDefinitions</code> operations are not valid,
 *          those metric definitions fail and return errors, but all valid metric definition IDs in the same operation are still
 *          deleted.</p>
 *          <p>The maximum number of metric definitions that you can specify in one
 *          <code>BatchDeleteRumMetricDefinitions</code> operation is 200.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RUMClient, BatchDeleteRumMetricDefinitionsCommand } from "@aws-sdk/client-rum"; // ES Modules import
 * // const { RUMClient, BatchDeleteRumMetricDefinitionsCommand } = require("@aws-sdk/client-rum"); // CommonJS import
 * const client = new RUMClient(config);
 * const input = { // BatchDeleteRumMetricDefinitionsRequest
 *   AppMonitorName: "STRING_VALUE", // required
 *   Destination: "STRING_VALUE", // required
 *   DestinationArn: "STRING_VALUE",
 *   MetricDefinitionIds: [ // MetricDefinitionIds // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchDeleteRumMetricDefinitionsCommand(input);
 * const response = await client.send(command);
 * // { // BatchDeleteRumMetricDefinitionsResponse
 * //   Errors: [ // BatchDeleteRumMetricDefinitionsErrors // required
 * //     { // BatchDeleteRumMetricDefinitionsError
 * //       MetricDefinitionId: "STRING_VALUE", // required
 * //       ErrorCode: "STRING_VALUE", // required
 * //       ErrorMessage: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   MetricDefinitionIds: [ // MetricDefinitionIds
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchDeleteRumMetricDefinitionsCommandInput - {@link BatchDeleteRumMetricDefinitionsCommandInput}
 * @returns {@link BatchDeleteRumMetricDefinitionsCommandOutput}
 * @see {@link BatchDeleteRumMetricDefinitionsCommandInput} for command's `input` shape.
 * @see {@link BatchDeleteRumMetricDefinitionsCommandOutput} for command's `response` shape.
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
export class BatchDeleteRumMetricDefinitionsCommand extends $Command
  .classBuilder<
    BatchDeleteRumMetricDefinitionsCommandInput,
    BatchDeleteRumMetricDefinitionsCommandOutput,
    RUMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: RUMClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("RUM", "BatchDeleteRumMetricDefinitions", {})
  .n("RUMClient", "BatchDeleteRumMetricDefinitionsCommand")
  .f(void 0, void 0)
  .ser(se_BatchDeleteRumMetricDefinitionsCommand)
  .de(de_BatchDeleteRumMetricDefinitionsCommand)
  .build() {}
