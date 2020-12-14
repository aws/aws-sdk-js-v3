import { ServiceInputTypes, ServiceOutputTypes, TimestreamQueryClientResolvedConfig } from "../TimestreamQueryClient";
import { CancelQueryRequest, CancelQueryResponse } from "../models/models_0";
import {
  deserializeAws_json1_0CancelQueryCommand,
  serializeAws_json1_0CancelQueryCommand,
} from "../protocols/Aws_json1_0";
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

export type CancelQueryCommandInput = CancelQueryRequest;
export type CancelQueryCommandOutput = CancelQueryResponse & __MetadataBearer;

/**
 * <p>
 *         Cancels a query that has been issued. Cancellation is guaranteed only if the query has not
 *         completed execution before the cancellation request was issued. Because cancellation is an idempotent operation,
 *         subsequent cancellation requests will return a <code>CancellationMessage</code>, indicating that the query has already been canceled.
 *     </p>
 */
export class CancelQueryCommand extends $Command<
  CancelQueryCommandInput,
  CancelQueryCommandOutput,
  TimestreamQueryClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CancelQueryCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: TimestreamQueryClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CancelQueryCommandInput, CancelQueryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TimestreamQueryClient";
    const commandName = "CancelQueryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CancelQueryRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CancelQueryResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CancelQueryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0CancelQueryCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CancelQueryCommandOutput> {
    return deserializeAws_json1_0CancelQueryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
