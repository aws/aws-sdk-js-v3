// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  BatchDeleteRumMetricDefinitionsRequest,
  BatchDeleteRumMetricDefinitionsResponse,
} from "../models/models_0";
import { BatchDeleteRumMetricDefinitions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface BatchDeleteRumMetricDefinitionsCommandOutput extends BatchDeleteRumMetricDefinitionsResponse, __MetadataBearer {}

/**
 * Removes the specified metrics from being sent to an extended metrics destination.
 *
 * If some metric definition IDs specified in a `BatchDeleteRumMetricDefinitions` operations are not valid, those metric definitions fail and return errors, but all valid metric definition IDs in the same operation are still deleted.
 *
 * The maximum number of metric definitions that you can specify in one `BatchDeleteRumMetricDefinitions` operation is 200.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RUMClient, BatchDeleteRumMetricDefinitionsCommand } from "@aws-sdk/client-rum"; // ES Modules import
 * // const { RUMClient, BatchDeleteRumMetricDefinitionsCommand } = require("@aws-sdk/client-rum"); // CommonJS import
 * // import type { RUMClientConfig } from "@aws-sdk/client-rum";
 * const config = {}; // type is RUMClientConfig
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
export class BatchDeleteRumMetricDefinitionsCommand extends command<BatchDeleteRumMetricDefinitionsCommandInput, BatchDeleteRumMetricDefinitionsCommandOutput>(
  _ep0,
  _mw0,
  "BatchDeleteRumMetricDefinitions",
  BatchDeleteRumMetricDefinitions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchDeleteRumMetricDefinitionsRequest;
      output: BatchDeleteRumMetricDefinitionsResponse;
    };
    sdk: {
      input: BatchDeleteRumMetricDefinitionsCommandInput;
      output: BatchDeleteRumMetricDefinitionsCommandOutput;
    };
  };
}
