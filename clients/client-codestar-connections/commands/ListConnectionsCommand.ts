import {
  CodeStarConnectionsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CodeStarConnectionsClient";
import { ListConnectionsInput, ListConnectionsOutput } from "../models/models_0";
import {
  deserializeAws_json1_0ListConnectionsCommand,
  serializeAws_json1_0ListConnectionsCommand,
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

export type ListConnectionsCommandInput = ListConnectionsInput;
export type ListConnectionsCommandOutput = ListConnectionsOutput & __MetadataBearer;

/**
 * <p>Lists the connections associated with your account.</p>
 */
export class ListConnectionsCommand extends $Command<
  ListConnectionsCommandInput,
  ListConnectionsCommandOutput,
  CodeStarConnectionsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListConnectionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeStarConnectionsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListConnectionsCommandInput, ListConnectionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeStarConnectionsClient";
    const commandName = "ListConnectionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListConnectionsInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListConnectionsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListConnectionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0ListConnectionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListConnectionsCommandOutput> {
    return deserializeAws_json1_0ListConnectionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
