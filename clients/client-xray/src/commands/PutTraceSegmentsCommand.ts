// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutTraceSegmentsRequest, PutTraceSegmentsResult } from "../models/models_0";
import { PutTraceSegments$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Uploads segment documents to Amazon Web Services X-Ray. A segment document can be a completed segment, an in-progress segment, or an array of subsegments.
 *
 * Segments must include the following fields. For the full segment document schema, see [Amazon Web Services X-Ray Segment Documents](https://docs.aws.amazon.com/xray/latest/devguide/aws-xray-interface-api.html#xray-api-segmentdocuments.html) in the *Amazon Web Services X-Ray Developer Guide*.
 *
 * **Required segment document fields**
 *
 * - `name` - The name of the service that handled the request.
 * - `id` - A 64-bit identifier for the segment, unique among segments in the same trace, in 16 hexadecimal digits.
 * - `trace_id` - A unique identifier that connects all segments and subsegments originating from a single client request.
 * - `start_time` - Time the segment or subsegment was created, in floating point seconds in epoch time, accurate to milliseconds. For example, `1480615200.010` or `1.480615200010E9`.
 * - `end_time` - Time the segment or subsegment was closed. For example, `1480615200.090` or `1.480615200090E9`. Specify either an `end_time` or `in_progress`.
 * - `in_progress` - Set to `true` instead of specifying an `end_time` to record that a segment has been started, but is not complete. Send an in-progress segment when your application receives a request that will take a long time to serve, to trace that the request was received. When the response is sent, send the complete segment to overwrite the in-progress segment.
 *
 * A `trace_id` consists of three numbers separated by hyphens. For example, 1-58406520-a006649127e371903a2de979. For trace IDs created by an X-Ray SDK, or by Amazon Web Services services integrated with X-Ray, a trace ID includes:
 *
 * **Trace ID Format**
 *
 * - The version number, for instance, `1`.
 * - The time of the original request, in Unix epoch time, in 8 hexadecimal digits. For example, 10:00AM December 2nd, 2016 PST in epoch time is `1480615200` seconds, or `58406520` in hexadecimal.
 * - A 96-bit identifier for the trace, globally unique, in 24 hexadecimal digits.
 *
 * > **Note:** Trace IDs created via OpenTelemetry have a different format based on the [W3C Trace Context specification](https://www.w3.org/TR/trace-context/). A W3C trace ID must be formatted in the X-Ray trace ID format when sending to X-Ray. For example, a W3C trace ID `4efaaf4d1e8720b39541901950019ee5` should be formatted as `1-4efaaf4d-1e8720b39541901950019ee5` when sending to X-Ray. While X-Ray trace IDs include the original request timestamp in Unix epoch time, this is not required or validated.
 *
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
export class PutTraceSegmentsCommand extends command<PutTraceSegmentsCommandInput, PutTraceSegmentsCommandOutput>(
  _ep0,
  _mw0,
  "PutTraceSegments",
  PutTraceSegments$
) {
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
