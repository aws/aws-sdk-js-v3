// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { PutTraceSegmentsRequest, PutTraceSegmentsResult } from "../models/models_0";
import { PutTraceSegments } from "../schemas/schemas_9_PutTraceSegments";
import { ServiceInputTypes, ServiceOutputTypes, XRayClientResolvedConfig } from "../XRayClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutTraceSegmentsCommand}.
 */
export interface PutTraceSegmentsCommandInput extends PutTraceSegmentsRequest {}
/**
 * @public
 *
 * The output of {@link PutTraceSegmentsCommand}.
 */
export interface PutTraceSegmentsCommandOutput extends PutTraceSegmentsResult, __MetadataBearer {}

/**
 * <p>Uploads segment documents to Amazon Web Services X-Ray.
 *       A segment document can be a completed segment, an in-progress segment, or an array of
 *       subsegments.</p>
 *          <p>Segments must include the following fields. For the full segment document schema, see
 *       <a href="https://docs.aws.amazon.com/xray/latest/devguide/aws-xray-interface-api.html#xray-api-segmentdocuments.html">Amazon Web Services X-Ray
 *         Segment Documents</a> in the <i>Amazon Web Services X-Ray Developer Guide</i>.</p>
 *          <p class="title">
 *             <b>Required segment document fields</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>name</code> - The name of the service that handled the request.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>id</code> - A 64-bit identifier for the segment, unique among segments in the same trace, in 16
 *           hexadecimal digits.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>trace_id</code> - A unique identifier that connects all segments and subsegments originating from
 *           a single client request.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>start_time</code> - Time the segment or subsegment was created, in floating point seconds in
 *           epoch time, accurate to milliseconds. For example, <code>1480615200.010</code> or
 *             <code>1.480615200010E9</code>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>end_time</code> - Time the segment or subsegment was closed. For example,
 *             <code>1480615200.090</code> or <code>1.480615200090E9</code>. Specify either an <code>end_time</code> or
 *             <code>in_progress</code>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>in_progress</code> - Set to <code>true</code> instead of specifying an <code>end_time</code> to
 *           record that a segment has been started, but is not complete. Send an in-progress segment when your application
 *           receives a request that will take a long time to serve, to trace that the request was received. When the
 *           response is sent, send the complete segment to overwrite the in-progress segment.</p>
 *             </li>
 *          </ul>
 *          <p>A <code>trace_id</code> consists of three numbers separated by hyphens. For example,
 *       1-58406520-a006649127e371903a2de979. For trace IDs created by an X-Ray SDK, or by Amazon Web Services services
 *       integrated with X-Ray, a trace ID includes:</p>
 *          <p class="title">
 *             <b>Trace ID Format</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>The version number, for instance, <code>1</code>.</p>
 *             </li>
 *             <li>
 *                <p>The time of the original request, in Unix epoch time, in 8 hexadecimal digits. For
 *           example, 10:00AM December 2nd, 2016 PST in epoch time is <code>1480615200</code> seconds,
 *           or <code>58406520</code> in hexadecimal.</p>
 *             </li>
 *             <li>
 *                <p>A 96-bit identifier for the trace, globally unique, in 24 hexadecimal
 *           digits.</p>
 *             </li>
 *          </ul>
 *          <note>
 *             <p>Trace IDs created via OpenTelemetry have a different format based on the
 *       <a href="https://www.w3.org/TR/trace-context/">W3C Trace Context specification</a>.
 *       A W3C trace ID must be formatted in the X-Ray trace ID format when sending to X-Ray. For example, a W3C
 *       trace ID <code>4efaaf4d1e8720b39541901950019ee5</code> should be formatted as
 *       <code>1-4efaaf4d-1e8720b39541901950019ee5</code> when sending to X-Ray. While X-Ray trace IDs include
 *       the original request timestamp in Unix epoch time, this is not required or validated.
 *     </p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { XRayClient, PutTraceSegmentsCommand } from "@aws-sdk/client-xray"; // ES Modules import
 * // const { XRayClient, PutTraceSegmentsCommand } = require("@aws-sdk/client-xray"); // CommonJS import
 * // import type { XRayClientConfig } from "@aws-sdk/client-xray";
 * const config = {}; // type is XRayClientConfig
 * const client = new XRayClient(config);
 * const input = { // PutTraceSegmentsRequest
 *   TraceSegmentDocuments: [ // TraceSegmentDocumentList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new PutTraceSegmentsCommand(input);
 * const response = await client.send(command);
 * // { // PutTraceSegmentsResult
 * //   UnprocessedTraceSegments: [ // UnprocessedTraceSegmentList
 * //     { // UnprocessedTraceSegment
 * //       Id: "STRING_VALUE",
 * //       ErrorCode: "STRING_VALUE",
 * //       Message: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param PutTraceSegmentsCommandInput - {@link PutTraceSegmentsCommandInput}
 * @returns {@link PutTraceSegmentsCommandOutput}
 * @see {@link PutTraceSegmentsCommandInput} for command's `input` shape.
 * @see {@link PutTraceSegmentsCommandOutput} for command's `response` shape.
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
export class PutTraceSegmentsCommand extends $Command
  .classBuilder<
    PutTraceSegmentsCommandInput,
    PutTraceSegmentsCommandOutput,
    XRayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: XRayClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSXRay", "PutTraceSegments", {})
  .n("XRayClient", "PutTraceSegmentsCommand")
  .sc(PutTraceSegments)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutTraceSegmentsRequest;
      output: PutTraceSegmentsResult;
    };
    sdk: {
      input: PutTraceSegmentsCommandInput;
      output: PutTraceSegmentsCommandOutput;
    };
  };
}
