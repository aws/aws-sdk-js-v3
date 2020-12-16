import { RAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RAMClient";
import { ListResourceTypesRequest, ListResourceTypesResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListResourceTypesCommand,
  serializeAws_restJson1ListResourceTypesCommand,
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

export type ListResourceTypesCommandInput = ListResourceTypesRequest;
export type ListResourceTypesCommandOutput = ListResourceTypesResponse & __MetadataBearer;

/**
 * <p>Lists the shareable resource types supported by AWS RAM.</p>
 */
export class ListResourceTypesCommand extends $Command<
  ListResourceTypesCommandInput,
  ListResourceTypesCommandOutput,
  RAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListResourceTypesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListResourceTypesCommandInput, ListResourceTypesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RAMClient";
    const commandName = "ListResourceTypesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListResourceTypesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListResourceTypesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListResourceTypesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListResourceTypesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListResourceTypesCommandOutput> {
    return deserializeAws_restJson1ListResourceTypesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
