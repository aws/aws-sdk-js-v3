import { CustomerProfilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CustomerProfilesClient";
import { ListProfileObjectTypesRequest, ListProfileObjectTypesResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListProfileObjectTypesCommand,
  serializeAws_restJson1ListProfileObjectTypesCommand,
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

export type ListProfileObjectTypesCommandInput = ListProfileObjectTypesRequest;
export type ListProfileObjectTypesCommandOutput = ListProfileObjectTypesResponse & __MetadataBearer;

/**
 * <p>Lists all of the templates available within the service.</p>
 */
export class ListProfileObjectTypesCommand extends $Command<
  ListProfileObjectTypesCommandInput,
  ListProfileObjectTypesCommandOutput,
  CustomerProfilesClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListProfileObjectTypesCommandInput) {
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
  ): Handler<ListProfileObjectTypesCommandInput, ListProfileObjectTypesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CustomerProfilesClient";
    const commandName = "ListProfileObjectTypesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListProfileObjectTypesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListProfileObjectTypesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListProfileObjectTypesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListProfileObjectTypesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListProfileObjectTypesCommandOutput> {
    return deserializeAws_restJson1ListProfileObjectTypesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
