// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetTraceSummariesRequest, GetTraceSummariesResult } from "../models/models_0";
import { GetTraceSummaries$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetTraceSummariesCommand}.
 */
export interface GetTraceSummariesCommandInput extends GetTraceSummariesRequest {}
/**
 * @public
 *
 * The output of {@link GetTraceSummariesCommand}.
 */
export interface GetTraceSummariesCommandOutput extends GetTraceSummariesResult, __MetadataBearer {}

/**
 * Retrieves IDs and annotations for traces available for a specified time frame using an optional filter. To get the full traces, pass the trace IDs to `BatchGetTraces`.
 *
 * A filter expression can target traced requests that hit specific service nodes or edges, have errors, or come from a known user. For example, the following filter expression targets traces that pass through `api.example.com`:
 *
 * `service("api.example.com")`
 *
 * This filter expression finds traces that have an annotation named `account` with the value `12345`:
 *
 * `annotation.account = "12345"`
 *
 * For a full list of indexed fields and keywords that you can use in filter expressions, see [Use filter expressions](https://docs.aws.amazon.com/xray/latest/devguide/aws-xray-interface-console.html#xray-console-filters) in the *Amazon Web Services X-Ray Developer Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { XRayClient, GetTraceSummariesCommand } from "@aws-sdk/client-xray"; // ES Modules import
 * // const { XRayClient, GetTraceSummariesCommand } = require("@aws-sdk/client-xray"); // CommonJS import
 * // import type { XRayClientConfig } from "@aws-sdk/client-xray";
 * const config = {}; // type is XRayClientConfig
 * const client = new XRayClient(config);
 * const input = { // GetTraceSummariesRequest
 *   StartTime: new Date("TIMESTAMP"), // required
 *   EndTime: new Date("TIMESTAMP"), // required
 *   TimeRangeType: "TraceId" || "Event" || "Service",
 *   Sampling: true || false,
 *   SamplingStrategy: { // SamplingStrategy
 *     Name: "PartialScan" || "FixedRate",
 *     Value: Number("double"),
 *   },
 *   FilterExpression: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetTraceSummariesCommand(input);
 * const response = await client.send(command);
 * // { // GetTraceSummariesResult
 * //   TraceSummaries: [ // TraceSummaryList
 * //     { // TraceSummary
 * //       Id: "STRING_VALUE",
 * //       StartTime: new Date("TIMESTAMP"),
 * //       Duration: Number("double"),
 * //       ResponseTime: Number("double"),
 * //       HasFault: true || false,
 * //       HasError: true || false,
 * //       HasThrottle: true || false,
 * //       IsPartial: true || false,
 * //       Http: { // Http
 * //         HttpURL: "STRING_VALUE",
 * //         HttpStatus: Number("int"),
 * //         HttpMethod: "STRING_VALUE",
 * //         UserAgent: "STRING_VALUE",
 * //         ClientIp: "STRING_VALUE",
 * //       },
 * //       Annotations: { // Annotations
 * //         "<keys>": [ // ValuesWithServiceIds
 * //           { // ValueWithServiceIds
 * //             AnnotationValue: { // AnnotationValue Union: only one key present
 * //               NumberValue: Number("double"),
 * //               BooleanValue: true || false,
 * //               StringValue: "STRING_VALUE",
 * //             },
 * //             ServiceIds: [ // ServiceIds
 * //               { // ServiceId
 * //                 Name: "STRING_VALUE",
 * //                 Names: [ // ServiceNames
 * //                   "STRING_VALUE",
 * //                 ],
 * //                 AccountId: "STRING_VALUE",
 * //                 Type: "STRING_VALUE",
 * //               },
 * //             ],
 * //           },
 * //         ],
 * //       },
 * //       Users: [ // TraceUsers
 * //         { // TraceUser
 * //           UserName: "STRING_VALUE",
 * //           ServiceIds: [
 * //             {
 * //               Name: "STRING_VALUE",
 * //               Names: [
 * //                 "STRING_VALUE",
 * //               ],
 * //               AccountId: "STRING_VALUE",
 * //               Type: "STRING_VALUE",
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //       ServiceIds: "<ServiceIds>",
 * //       ResourceARNs: [ // TraceResourceARNs
 * //         { // ResourceARNDetail
 * //           ARN: "STRING_VALUE",
 * //         },
 * //       ],
 * //       InstanceIds: [ // TraceInstanceIds
 * //         { // InstanceIdDetail
 * //           Id: "STRING_VALUE",
 * //         },
 * //       ],
 * //       AvailabilityZones: [ // TraceAvailabilityZones
 * //         { // AvailabilityZoneDetail
 * //           Name: "STRING_VALUE",
 * //         },
 * //       ],
 * //       EntryPoint: "<ServiceId>",
 * //       FaultRootCauses: [ // FaultRootCauses
 * //         { // FaultRootCause
 * //           Services: [ // FaultRootCauseServices
 * //             { // FaultRootCauseService
 * //               Name: "STRING_VALUE",
 * //               Names: [
 * //                 "STRING_VALUE",
 * //               ],
 * //               Type: "STRING_VALUE",
 * //               AccountId: "STRING_VALUE",
 * //               EntityPath: [ // FaultRootCauseEntityPath
 * //                 { // FaultRootCauseEntity
 * //                   Name: "STRING_VALUE",
 * //                   Exceptions: [ // RootCauseExceptions
 * //                     { // RootCauseException
 * //                       Name: "STRING_VALUE",
 * //                       Message: "STRING_VALUE",
 * //                     },
 * //                   ],
 * //                   Remote: true || false,
 * //                 },
 * //               ],
 * //               Inferred: true || false,
 * //             },
 * //           ],
 * //           ClientImpacting: true || false,
 * //         },
 * //       ],
 * //       ErrorRootCauses: [ // ErrorRootCauses
 * //         { // ErrorRootCause
 * //           Services: [ // ErrorRootCauseServices
 * //             { // ErrorRootCauseService
 * //               Name: "STRING_VALUE",
 * //               Names: [
 * //                 "STRING_VALUE",
 * //               ],
 * //               Type: "STRING_VALUE",
 * //               AccountId: "STRING_VALUE",
 * //               EntityPath: [ // ErrorRootCauseEntityPath
 * //                 { // ErrorRootCauseEntity
 * //                   Name: "STRING_VALUE",
 * //                   Exceptions: [
 * //                     {
 * //                       Name: "STRING_VALUE",
 * //                       Message: "STRING_VALUE",
 * //                     },
 * //                   ],
 * //                   Remote: true || false,
 * //                 },
 * //               ],
 * //               Inferred: true || false,
 * //             },
 * //           ],
 * //           ClientImpacting: true || false,
 * //         },
 * //       ],
 * //       ResponseTimeRootCauses: [ // ResponseTimeRootCauses
 * //         { // ResponseTimeRootCause
 * //           Services: [ // ResponseTimeRootCauseServices
 * //             { // ResponseTimeRootCauseService
 * //               Name: "STRING_VALUE",
 * //               Names: [
 * //                 "STRING_VALUE",
 * //               ],
 * //               Type: "STRING_VALUE",
 * //               AccountId: "STRING_VALUE",
 * //               EntityPath: [ // ResponseTimeRootCauseEntityPath
 * //                 { // ResponseTimeRootCauseEntity
 * //                   Name: "STRING_VALUE",
 * //                   Coverage: Number("double"),
 * //                   Remote: true || false,
 * //                 },
 * //               ],
 * //               Inferred: true || false,
 * //             },
 * //           ],
 * //           ClientImpacting: true || false,
 * //         },
 * //       ],
 * //       Revision: Number("int"),
 * //       MatchedEventTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   ApproximateTime: new Date("TIMESTAMP"),
 * //   TracesProcessedCount: Number("long"),
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetTraceSummariesCommandInput - {@link GetTraceSummariesCommandInput}
 * @returns {@link GetTraceSummariesCommandOutput}
 * @see {@link GetTraceSummariesCommandInput} for command's `input` shape.
 * @see {@link GetTraceSummariesCommandOutput} for command's `response` shape.
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
export class GetTraceSummariesCommand extends command<GetTraceSummariesCommandInput, GetTraceSummariesCommandOutput>(
  _ep0,
  _mw0,
  "GetTraceSummaries",
  GetTraceSummaries$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTraceSummariesRequest;
      output: GetTraceSummariesResult;
    };
    sdk: {
      input: GetTraceSummariesCommandInput;
      output: GetTraceSummariesCommandOutput;
    };
  };
}
