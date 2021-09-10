import { ServiceInputTypes, ServiceOutputTypes, XRayClientResolvedConfig } from "../XRayClient";
import { GetTraceSummariesRequest, GetTraceSummariesResult } from "../models/models_0";
import {
  deserializeAws_restJson1GetTraceSummariesCommand,
  serializeAws_restJson1GetTraceSummariesCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface GetTraceSummariesCommandInput extends GetTraceSummariesRequest {}
export interface GetTraceSummariesCommandOutput extends GetTraceSummariesResult, __MetadataBearer {}

/**
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
 * const command = new GetTraceSummariesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetTraceSummariesCommandInput} for command's `input` shape.
 * @see {@link GetTraceSummariesCommandOutput} for command's `response` shape.
 * @see {@link XRayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetTraceSummariesCommand extends $Command<
  GetTraceSummariesCommandInput,
  GetTraceSummariesCommandOutput,
  XRayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "XRayClient";
    const commandName = "GetTraceSummariesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetTraceSummariesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetTraceSummariesResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetTraceSummariesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetTraceSummariesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetTraceSummariesCommandOutput> {
    return deserializeAws_restJson1GetTraceSummariesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
