// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { StartTraceRetrievalRequest, StartTraceRetrievalResult } from "../models/models_0";
import { StartTraceRetrieval } from "../schemas/schemas_7_Trace";
import { ServiceInputTypes, ServiceOutputTypes, XRayClientResolvedConfig } from "../XRayClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartTraceRetrievalCommand}.
 */
export interface StartTraceRetrievalCommandInput extends StartTraceRetrievalRequest {}
/**
 * @public
 *
 * The output of {@link StartTraceRetrievalCommand}.
 */
export interface StartTraceRetrievalCommandOutput extends StartTraceRetrievalResult, __MetadataBearer {}

/**
 * <p>
 *   Initiates a trace retrieval process using the specified time range and for the given trace IDs in the  Transaction Search generated CloudWatch log group. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Transaction-Search.html">Transaction Search</a>.
 * </p>
 *          <p>API returns a <code>RetrievalToken</code>, which can be used with <code>ListRetrievedTraces</code> or <code>GetRetrievedTracesGraph</code> to fetch results. Retrievals will time out after 60 minutes. To execute long time ranges, consider segmenting into multiple retrievals.</p>
 *          <p>If you are using <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Unified-Cross-Account.html">CloudWatch cross-account observability</a>, you can use this operation in a monitoring account to retrieve data from a linked source account, as long as both accounts have transaction search enabled.</p>
 *          <p>For retrieving data from X-Ray directly as opposed to the Transaction-Search Log group, see <a href="https://docs.aws.amazon.com/xray/latest/api/API_BatchGetTraces.html">BatchGetTraces</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { XRayClient, StartTraceRetrievalCommand } from "@aws-sdk/client-xray"; // ES Modules import
 * // const { XRayClient, StartTraceRetrievalCommand } = require("@aws-sdk/client-xray"); // CommonJS import
 * // import type { XRayClientConfig } from "@aws-sdk/client-xray";
 * const config = {}; // type is XRayClientConfig
 * const client = new XRayClient(config);
 * const input = { // StartTraceRetrievalRequest
 *   TraceIds: [ // TraceIdListForRetrieval // required
 *     "STRING_VALUE",
 *   ],
 *   StartTime: new Date("TIMESTAMP"), // required
 *   EndTime: new Date("TIMESTAMP"), // required
 * };
 * const command = new StartTraceRetrievalCommand(input);
 * const response = await client.send(command);
 * // { // StartTraceRetrievalResult
 * //   RetrievalToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartTraceRetrievalCommandInput - {@link StartTraceRetrievalCommandInput}
 * @returns {@link StartTraceRetrievalCommandOutput}
 * @see {@link StartTraceRetrievalCommandInput} for command's `input` shape.
 * @see {@link StartTraceRetrievalCommandOutput} for command's `response` shape.
 * @see {@link XRayClientResolvedConfig | config} for XRayClient's `config` shape.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is missing required parameters or has invalid parameters.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource was not found. Verify that the name or Amazon Resource Name (ARN) of the resource is
 *       correct.</p>
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
export class StartTraceRetrievalCommand extends $Command
  .classBuilder<
    StartTraceRetrievalCommandInput,
    StartTraceRetrievalCommandOutput,
    XRayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: XRayClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSXRay", "StartTraceRetrieval", {})
  .n("XRayClient", "StartTraceRetrievalCommand")
  .sc(StartTraceRetrieval)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartTraceRetrievalRequest;
      output: StartTraceRetrievalResult;
    };
    sdk: {
      input: StartTraceRetrievalCommandInput;
      output: StartTraceRetrievalCommandOutput;
    };
  };
}
