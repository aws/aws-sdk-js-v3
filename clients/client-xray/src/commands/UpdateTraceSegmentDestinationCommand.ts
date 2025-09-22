// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateTraceSegmentDestinationRequest, UpdateTraceSegmentDestinationResult } from "../models/models_0";
import { UpdateTraceSegmentDestination } from "../schemas/schemas_4_Get";
import { ServiceInputTypes, ServiceOutputTypes, XRayClientResolvedConfig } from "../XRayClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateTraceSegmentDestinationCommand}.
 */
export interface UpdateTraceSegmentDestinationCommandInput extends UpdateTraceSegmentDestinationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateTraceSegmentDestinationCommand}.
 */
export interface UpdateTraceSegmentDestinationCommandOutput
  extends UpdateTraceSegmentDestinationResult,
    __MetadataBearer {}

/**
 * <p>
 *   Modifies the destination of data sent to <code>PutTraceSegments</code>. The Transaction Search feature requires the CloudWatchLogs destination. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Transaction-Search.html">Transaction Search</a>.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { XRayClient, UpdateTraceSegmentDestinationCommand } from "@aws-sdk/client-xray"; // ES Modules import
 * // const { XRayClient, UpdateTraceSegmentDestinationCommand } = require("@aws-sdk/client-xray"); // CommonJS import
 * // import type { XRayClientConfig } from "@aws-sdk/client-xray";
 * const config = {}; // type is XRayClientConfig
 * const client = new XRayClient(config);
 * const input = { // UpdateTraceSegmentDestinationRequest
 *   Destination: "XRay" || "CloudWatchLogs",
 * };
 * const command = new UpdateTraceSegmentDestinationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateTraceSegmentDestinationResult
 * //   Destination: "XRay" || "CloudWatchLogs",
 * //   Status: "PENDING" || "ACTIVE",
 * // };
 *
 * ```
 *
 * @param UpdateTraceSegmentDestinationCommandInput - {@link UpdateTraceSegmentDestinationCommandInput}
 * @returns {@link UpdateTraceSegmentDestinationCommandOutput}
 * @see {@link UpdateTraceSegmentDestinationCommandInput} for command's `input` shape.
 * @see {@link UpdateTraceSegmentDestinationCommandOutput} for command's `response` shape.
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
export class UpdateTraceSegmentDestinationCommand extends $Command
  .classBuilder<
    UpdateTraceSegmentDestinationCommandInput,
    UpdateTraceSegmentDestinationCommandOutput,
    XRayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: XRayClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSXRay", "UpdateTraceSegmentDestination", {})
  .n("XRayClient", "UpdateTraceSegmentDestinationCommand")
  .sc(UpdateTraceSegmentDestination)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateTraceSegmentDestinationRequest;
      output: UpdateTraceSegmentDestinationResult;
    };
    sdk: {
      input: UpdateTraceSegmentDestinationCommandInput;
      output: UpdateTraceSegmentDestinationCommandOutput;
    };
  };
}
