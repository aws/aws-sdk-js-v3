import { KafkaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KafkaClient";
import { ListScramSecretsRequest, ListScramSecretsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListScramSecretsCommand,
  serializeAws_restJson1ListScramSecretsCommand,
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

export type ListScramSecretsCommandInput = ListScramSecretsRequest;
export type ListScramSecretsCommandOutput = ListScramSecretsResponse & __MetadataBearer;

/**
 * <p>Returns a list of the Scram Secrets associated with an Amazon MSK cluster.</p>
 */
export class ListScramSecretsCommand extends $Command<
  ListScramSecretsCommandInput,
  ListScramSecretsCommandOutput,
  KafkaClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListScramSecretsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KafkaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListScramSecretsCommandInput, ListScramSecretsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KafkaClient";
    const commandName = "ListScramSecretsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListScramSecretsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListScramSecretsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListScramSecretsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListScramSecretsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListScramSecretsCommandOutput> {
    return deserializeAws_restJson1ListScramSecretsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
