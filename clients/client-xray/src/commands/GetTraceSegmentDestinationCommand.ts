// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetTraceSegmentDestinationRequest, GetTraceSegmentDestinationResult } from "../models/models_0";
import { GetTraceSegmentDestination } from "../schemas/schemas_4_Get";
import { ServiceInputTypes, ServiceOutputTypes, XRayClientResolvedConfig } from "../XRayClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>
 *   Retrieves the current destination of data sent to <code>PutTraceSegments</code> and <i>OpenTelemetry protocol (OTLP)</i> endpoint. The Transaction Search feature requires a CloudWatchLogs destination. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Transaction-Search.html">Transaction Search</a> and <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-OpenTelemetry-Sections.html">OpenTelemetry</a>.
 * </p>
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
 *  <p>The request is missing required parameters or has invalid parameters.</p>
 *
 * @throws {@link ThrottledException} (client fault)
 *  <p>The request exceeds the maximum number of requests per second.</p>
 *
 * @throws {@link XRayServiceException}
 * <p>Base exception class for all service exceptions from XRay service.</p>
 *
 *
 * @public
 */
export class GetTraceSegmentDestinationCommand extends $Command
  .classBuilder<
    GetTraceSegmentDestinationCommandInput,
    GetTraceSegmentDestinationCommandOutput,
    XRayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: XRayClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSXRay", "GetTraceSegmentDestination", {})
  .n("XRayClient", "GetTraceSegmentDestinationCommand")
  .sc(GetTraceSegmentDestination)
  .build() {
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
