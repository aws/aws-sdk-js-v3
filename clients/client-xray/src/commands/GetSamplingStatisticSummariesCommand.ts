import { ServiceInputTypes, ServiceOutputTypes, XRayClientResolvedConfig } from "../XRayClient";
import { GetSamplingStatisticSummariesRequest, GetSamplingStatisticSummariesResult } from "../models/models_0";
import {
  deserializeAws_restJson1GetSamplingStatisticSummariesCommand,
  serializeAws_restJson1GetSamplingStatisticSummariesCommand,
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

export interface GetSamplingStatisticSummariesCommandInput extends GetSamplingStatisticSummariesRequest {}
export interface GetSamplingStatisticSummariesCommandOutput
  extends GetSamplingStatisticSummariesResult,
    __MetadataBearer {}

/**
 * <p>Retrieves information about recent sampling results for all sampling rules.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { XRayClient, GetSamplingStatisticSummariesCommand } from "@aws-sdk/client-xray"; // ES Modules import
 * // const { XRayClient, GetSamplingStatisticSummariesCommand } = require("@aws-sdk/client-xray"); // CommonJS import
 * const client = new XRayClient(config);
 * const command = new GetSamplingStatisticSummariesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSamplingStatisticSummariesCommandInput} for command's `input` shape.
 * @see {@link GetSamplingStatisticSummariesCommandOutput} for command's `response` shape.
 * @see {@link XRayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetSamplingStatisticSummariesCommand extends $Command<
  GetSamplingStatisticSummariesCommandInput,
  GetSamplingStatisticSummariesCommandOutput,
  XRayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetSamplingStatisticSummariesCommandInput) {
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
  ): Handler<GetSamplingStatisticSummariesCommandInput, GetSamplingStatisticSummariesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "XRayClient";
    const commandName = "GetSamplingStatisticSummariesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetSamplingStatisticSummariesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetSamplingStatisticSummariesResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetSamplingStatisticSummariesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetSamplingStatisticSummariesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetSamplingStatisticSummariesCommandOutput> {
    return deserializeAws_restJson1GetSamplingStatisticSummariesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
