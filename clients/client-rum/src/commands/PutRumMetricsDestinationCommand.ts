// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutRumMetricsDestinationRequest, PutRumMetricsDestinationResponse } from "../models/models_0";
import { PutRumMetricsDestination$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutRumMetricsDestinationCommand}.
 */
export interface PutRumMetricsDestinationCommandInput extends PutRumMetricsDestinationRequest {}
/**
 * @public
 *
 * The output of {@link PutRumMetricsDestinationCommand}.
 */
export interface PutRumMetricsDestinationCommandOutput extends PutRumMetricsDestinationResponse, __MetadataBearer {}

/**
 * Creates or updates a destination to receive extended metrics from CloudWatch RUM. You can send extended metrics to CloudWatch or to a CloudWatch Evidently experiment.
 *
 * For more information about extended metrics, see [BatchCreateRumMetricDefinitions](https://docs.aws.amazon.com/cloudwatchrum/latest/APIReference/API_BatchCreateRumMetricDefinitions.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RUMClient, PutRumMetricsDestinationCommand } from "@aws-sdk/client-rum"; // ES Modules import
 * // const { RUMClient, PutRumMetricsDestinationCommand } = require("@aws-sdk/client-rum"); // CommonJS import
 * // import type { RUMClientConfig } from "@aws-sdk/client-rum";
 * const config = {}; // type is RUMClientConfig
 * const client = new RUMClient(config);
 * const input = { // PutRumMetricsDestinationRequest
 *   AppMonitorName: "STRING_VALUE", // required
 *   Destination: "STRING_VALUE", // required
 *   DestinationArn: "STRING_VALUE",
 *   IamRoleArn: "STRING_VALUE",
 * };
 * const command = new PutRumMetricsDestinationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutRumMetricsDestinationCommandInput - {@link PutRumMetricsDestinationCommandInput}
 * @returns {@link PutRumMetricsDestinationCommandOutput}
 * @see {@link PutRumMetricsDestinationCommandInput} for command's `input` shape.
 * @see {@link PutRumMetricsDestinationCommandOutput} for command's `response` shape.
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
export class PutRumMetricsDestinationCommand extends command<PutRumMetricsDestinationCommandInput, PutRumMetricsDestinationCommandOutput>(
  _ep0,
  _mw0,
  "PutRumMetricsDestination",
  PutRumMetricsDestination$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutRumMetricsDestinationRequest;
      output: {};
    };
    sdk: {
      input: PutRumMetricsDestinationCommandInput;
      output: PutRumMetricsDestinationCommandOutput;
    };
  };
}
