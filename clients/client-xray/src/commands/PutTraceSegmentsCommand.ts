// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  PutTraceSegmentsRequest,
  PutTraceSegmentsRequestFilterSensitiveLog,
  PutTraceSegmentsResult,
  PutTraceSegmentsResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1PutTraceSegmentsCommand,
  serializeAws_restJson1PutTraceSegmentsCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, XRayClientResolvedConfig } from "../XRayClient";

export interface PutTraceSegmentsCommandInput extends PutTraceSegmentsRequest {}
export interface PutTraceSegmentsCommandOutput extends PutTraceSegmentsResult, __MetadataBearer {}

/**
 * <p>Uploads segment documents to Amazon Web Services X-Ray. The <a href="https://docs.aws.amazon.com/xray/index.html">X-Ray SDK</a> generates segment documents and sends them to the X-Ray daemon, which uploads them in
 *       batches. A segment document can be a completed segment, an in-progress segment, or an array of
 *       subsegments.</p>
 *          <p>Segments must include the following fields. For the full segment document schema, see
 *       <a href="https://docs.aws.amazon.com/xray/latest/devguide/xray-api-segmentdocuments.html">Amazon Web Services X-Ray
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
 *       1-58406520-a006649127e371903a2de979. This includes:</p>
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
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { XRayClient, PutTraceSegmentsCommand } from "@aws-sdk/client-xray"; // ES Modules import
 * // const { XRayClient, PutTraceSegmentsCommand } = require("@aws-sdk/client-xray"); // CommonJS import
 * const client = new XRayClient(config);
 * const command = new PutTraceSegmentsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutTraceSegmentsCommandInput} for command's `input` shape.
 * @see {@link PutTraceSegmentsCommandOutput} for command's `response` shape.
 * @see {@link XRayClientResolvedConfig | config} for XRayClient's `config` shape.
 *
 */
export class PutTraceSegmentsCommand extends $Command<
  PutTraceSegmentsCommandInput,
  PutTraceSegmentsCommandOutput,
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

  constructor(readonly input: PutTraceSegmentsCommandInput) {
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
  ): Handler<PutTraceSegmentsCommandInput, PutTraceSegmentsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutTraceSegmentsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "XRayClient";
    const commandName = "PutTraceSegmentsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutTraceSegmentsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: PutTraceSegmentsResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutTraceSegmentsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1PutTraceSegmentsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutTraceSegmentsCommandOutput> {
    return deserializeAws_restJson1PutTraceSegmentsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
