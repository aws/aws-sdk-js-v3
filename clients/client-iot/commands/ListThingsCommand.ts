import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { ListThingsRequest, ListThingsResponse } from "../models/models_1";
import {
  deserializeAws_restJson1ListThingsCommand,
  serializeAws_restJson1ListThingsCommand,
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

export type ListThingsCommandInput = ListThingsRequest;
export type ListThingsCommandOutput = ListThingsResponse & __MetadataBearer;

/**
 * <p>Lists your things. Use the <b>attributeName</b> and
 * 				<b>attributeValue</b> parameters to filter your things.
 * 			For example, calling <code>ListThings</code> with attributeName=Color and
 * 			attributeValue=Red retrieves all things in the registry that contain an attribute
 * 				<b>Color</b> with the value <b>Red</b>. </p>
 * 		       <note>
 * 			         <p>You will not be charged for calling this API if an <code>Access denied</code> error is returned. You will also not be charged if no attributes or pagination token was provided in request and no pagination token and no results were returned.</p>
 * 		       </note>
 */
export class ListThingsCommand extends $Command<
  ListThingsCommandInput,
  ListThingsCommandOutput,
  IoTClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListThingsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListThingsCommandInput, ListThingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "ListThingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListThingsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListThingsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListThingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListThingsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListThingsCommandOutput> {
    return deserializeAws_restJson1ListThingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
