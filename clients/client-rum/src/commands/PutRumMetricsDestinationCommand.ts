// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { PutRumMetricsDestinationRequest, PutRumMetricsDestinationResponse } from "../models/models_0";
import type { RUMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RUMClient";
import { PutRumMetricsDestination } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Creates or updates a destination to receive extended metrics from CloudWatch RUM. You can send extended metrics to CloudWatch or to a CloudWatch Evidently experiment.</p> <p>For more information about extended metrics, see <a href="https://docs.aws.amazon.com/cloudwatchrum/latest/APIReference/API_BatchCreateRumMetricDefinitions.html">BatchCreateRumMetricDefinitions</a>.</p>
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
 *
 * @public
 */
export class PutRumMetricsDestinationCommand extends $Command
  .classBuilder<
    PutRumMetricsDestinationCommandInput,
    PutRumMetricsDestinationCommandOutput,
    RUMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RUMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RUM", "PutRumMetricsDestination", {})
  .n("RUMClient", "PutRumMetricsDestinationCommand")
  .sc(PutRumMetricsDestination)
  .build() {
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
