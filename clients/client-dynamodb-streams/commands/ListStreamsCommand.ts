import { DynamoDBStreamsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBStreamsClient";
import { ListStreamsInput, ListStreamsOutput } from "../models/models_0";
import {
  deserializeAws_json1_0ListStreamsCommand,
  serializeAws_json1_0ListStreamsCommand,
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

export type ListStreamsCommandInput = ListStreamsInput;
export type ListStreamsCommandOutput = ListStreamsOutput & __MetadataBearer;

/**
 * <p>Returns an array of stream ARNs associated with the current account and endpoint. If the
 *         <code>TableName</code> parameter is present, then <code>ListStreams</code> will return only the
 *       streams ARNs for that table.</p>
 *          <note>
 *             <p>You can call <code>ListStreams</code> at a maximum rate of 5 times per second.</p>
 *          </note>
 */
export class ListStreamsCommand extends $Command<
  ListStreamsCommandInput,
  ListStreamsCommandOutput,
  DynamoDBStreamsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListStreamsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DynamoDBStreamsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListStreamsCommandInput, ListStreamsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DynamoDBStreamsClient";
    const commandName = "ListStreamsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListStreamsInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListStreamsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListStreamsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0ListStreamsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListStreamsCommandOutput> {
    return deserializeAws_json1_0ListStreamsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
