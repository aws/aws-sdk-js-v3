// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { GetTraceSummariesRequest, GetTraceSummariesResult } from "../models/models_0";
import { de_GetTraceSummariesCommand, se_GetTraceSummariesCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, XRayClientResolvedConfig } from "../XRayClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
 * @public
 * <p>Retrieves IDs and annotations for traces available for a specified time frame using an
 *       optional filter. To get the full traces, pass the trace IDs to
 *       <code>BatchGetTraces</code>.</p>
 *          <p>A filter expression can target traced requests that hit specific service nodes or
 *       edges, have errors, or come from a known user. For example, the following filter expression
 *       targets traces that pass through <code>api.example.com</code>:</p>
 *          <p>
 *             <code>service("api.example.com")</code>
 *          </p>
 *          <p>This filter expression finds traces that have an annotation named <code>account</code>
 *       with the value <code>12345</code>:</p>
 *          <p>
 *             <code>annotation.account = "12345"</code>
 *          </p>
 *          <p>For a full list of indexed fields and keywords that you can use in filter expressions,
 *       see <a href="https://docs.aws.amazon.com/xray/latest/devguide/xray-console-filters.html">Using Filter
 *         Expressions</a> in the <i>Amazon Web Services X-Ray Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { XRayClient, GetTraceSummariesCommand } from "@aws-sdk/client-xray"; // ES Modules import
 * // const { XRayClient, GetTraceSummariesCommand } = require("@aws-sdk/client-xray"); // CommonJS import
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
 *  <p>The request is missing required parameters or has invalid parameters.</p>
 *
 * @throws {@link ThrottledException} (client fault)
 *  <p>The request exceeds the maximum number of requests per second.</p>
 *
 * @throws {@link XRayServiceException}
 * <p>Base exception class for all service exceptions from XRay service.</p>
 *
 */
export class GetTraceSummariesCommand extends $Command<
  GetTraceSummariesCommandInput,
  GetTraceSummariesCommandOutput,
  XRayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: GetTraceSummariesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: XRayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetTraceSummariesCommandInput, GetTraceSummariesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetTraceSummariesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "XRayClient";
    const commandName = "GetTraceSummariesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSXRay",
        operation: "GetTraceSummaries",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: GetTraceSummariesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetTraceSummariesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetTraceSummariesCommandOutput> {
    return de_GetTraceSummariesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
