// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetTraceSegmentDestinationRequest, GetTraceSegmentDestinationResult } from "../models/models_0";
import { GetTraceSegmentDestination$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetTraceSegmentDestinationCommand}.
 */
export interface GetTraceSegmentDestinationCommandInput extends GetTraceSegmentDestinationRequest {}
/**
 * @public
 *
 * The output of {@link GetTraceSegmentDestinationCommand}.
 */
export interface GetTraceSegmentDestinationCommandOutput extends GetTraceSegmentDestinationResult, __MetadataBearer {}

/**
 * Retrieves the current destination of data sent to `PutTraceSegments` and *OpenTelemetry protocol (OTLP)* endpoint. The Transaction Search feature requires a CloudWatchLogs destination. For more information, see [Transaction Search](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Transaction-Search.html) and [OpenTelemetry](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-OpenTelemetry-Sections.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { XRayClient, GetTraceSegmentDestinationCommand } from "@aws-sdk/client-xray"; // ES Modules import
 * // const { XRayClient, GetTraceSegmentDestinationCommand } = require("@aws-sdk/client-xray"); // CommonJS import
 * // import type { XRayClientConfig } from "@aws-sdk/client-xray";
 * const config = {}; // type is XRayClientConfig
 * const client = new XRayClient(config);
 * const input = {};
 * const command = new GetTraceSegmentDestinationCommand(input);
 * const response = await client.send(command);
 * // { // GetTraceSegmentDestinationResult
 * //   Destination: "XRay" || "CloudWatchLogs",
 * //   Status: "PENDING" || "ACTIVE",
 * // };
 *
 * ```
 *
 * @param GetTraceSegmentDestinationCommandInput - {@link GetTraceSegmentDestinationCommandInput}
 * @returns {@link GetTraceSegmentDestinationCommandOutput}
 * @see {@link GetTraceSegmentDestinationCommandInput} for command's `input` shape.
 * @see {@link GetTraceSegmentDestinationCommandOutput} for command's `response` shape.
 * @see {@link XRayClientResolvedConfig | config} for XRayClient's `config` shape.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is missing required parameters or has invalid parameters.
 *
 * @throws {@link ThrottledException} (client fault)
 *
 * The request exceeds the maximum number of requests per second.
 *
 * @throws {@link XRayServiceException}
 *
 * Base exception class for all service exceptions from XRay service.
 *
 * @public
 */
export class GetTraceSegmentDestinationCommand extends command<GetTraceSegmentDestinationCommandInput, GetTraceSegmentDestinationCommandOutput>(
  _ep0,
  _mw0,
  "GetTraceSegmentDestination",
  GetTraceSegmentDestination$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetTraceSegmentDestinationResult;
    };
    sdk: {
      input: GetTraceSegmentDestinationCommandInput;
      output: GetTraceSegmentDestinationCommandOutput;
    };
  };
}
