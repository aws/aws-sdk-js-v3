import {
  ApplicationInsightsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApplicationInsightsClient";
import { DeleteLogPatternRequest, DeleteLogPatternResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteLogPatternCommand,
  serializeAws_json1_1DeleteLogPatternCommand,
} from "../protocols/Aws_json1_1";
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

export type DeleteLogPatternCommandInput = DeleteLogPatternRequest;
export type DeleteLogPatternCommandOutput = DeleteLogPatternResponse & __MetadataBearer;

/**
 * <p>Removes the specified log pattern from a <code>LogPatternSet</code>.</p>
 */
export class DeleteLogPatternCommand extends $Command<
  DeleteLogPatternCommandInput,
  DeleteLogPatternCommandOutput,
  ApplicationInsightsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteLogPatternCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ApplicationInsightsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteLogPatternCommandInput, DeleteLogPatternCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ApplicationInsightsClient";
    const commandName = "DeleteLogPatternCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteLogPatternRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteLogPatternResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteLogPatternCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteLogPatternCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteLogPatternCommandOutput> {
    return deserializeAws_json1_1DeleteLogPatternCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
