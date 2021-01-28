import { CustomerProfilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CustomerProfilesClient";
import { ListProfileObjectTypeTemplatesRequest, ListProfileObjectTypeTemplatesResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListProfileObjectTypeTemplatesCommand,
  serializeAws_restJson1ListProfileObjectTypeTemplatesCommand,
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

export type ListProfileObjectTypeTemplatesCommandInput = ListProfileObjectTypeTemplatesRequest;
export type ListProfileObjectTypeTemplatesCommandOutput = ListProfileObjectTypeTemplatesResponse & __MetadataBearer;

/**
 * <p>Lists all of the template information for object types.</p>
 */
export class ListProfileObjectTypeTemplatesCommand extends $Command<
  ListProfileObjectTypeTemplatesCommandInput,
  ListProfileObjectTypeTemplatesCommandOutput,
  CustomerProfilesClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListProfileObjectTypeTemplatesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CustomerProfilesClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListProfileObjectTypeTemplatesCommandInput, ListProfileObjectTypeTemplatesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CustomerProfilesClient";
    const commandName = "ListProfileObjectTypeTemplatesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListProfileObjectTypeTemplatesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListProfileObjectTypeTemplatesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListProfileObjectTypeTemplatesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1ListProfileObjectTypeTemplatesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListProfileObjectTypeTemplatesCommandOutput> {
    return deserializeAws_restJson1ListProfileObjectTypeTemplatesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
