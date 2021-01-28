import { MigrationHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MigrationHubClient";
import { ListProgressUpdateStreamsRequest, ListProgressUpdateStreamsResult } from "../models/models_0";
import {
  deserializeAws_json1_1ListProgressUpdateStreamsCommand,
  serializeAws_json1_1ListProgressUpdateStreamsCommand,
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

export type ListProgressUpdateStreamsCommandInput = ListProgressUpdateStreamsRequest;
export type ListProgressUpdateStreamsCommandOutput = ListProgressUpdateStreamsResult & __MetadataBearer;

/**
 * <p>Lists progress update streams associated with the user account making this call.</p>
 */
export class ListProgressUpdateStreamsCommand extends $Command<
  ListProgressUpdateStreamsCommandInput,
  ListProgressUpdateStreamsCommandOutput,
  MigrationHubClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListProgressUpdateStreamsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MigrationHubClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListProgressUpdateStreamsCommandInput, ListProgressUpdateStreamsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MigrationHubClient";
    const commandName = "ListProgressUpdateStreamsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListProgressUpdateStreamsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListProgressUpdateStreamsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListProgressUpdateStreamsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListProgressUpdateStreamsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListProgressUpdateStreamsCommandOutput> {
    return deserializeAws_json1_1ListProgressUpdateStreamsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
