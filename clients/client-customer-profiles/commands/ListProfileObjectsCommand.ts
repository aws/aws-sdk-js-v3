import { CustomerProfilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CustomerProfilesClient";
import { ListProfileObjectsRequest, ListProfileObjectsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListProfileObjectsCommand,
  serializeAws_restJson1ListProfileObjectsCommand,
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

export type ListProfileObjectsCommandInput = ListProfileObjectsRequest;
export type ListProfileObjectsCommandOutput = ListProfileObjectsResponse & __MetadataBearer;

/**
 * <p>Returns a list of objects associated with a profile of a given ProfileObjectType.</p>
 */
export class ListProfileObjectsCommand extends $Command<
  ListProfileObjectsCommandInput,
  ListProfileObjectsCommandOutput,
  CustomerProfilesClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListProfileObjectsCommandInput) {
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
  ): Handler<ListProfileObjectsCommandInput, ListProfileObjectsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CustomerProfilesClient";
    const commandName = "ListProfileObjectsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListProfileObjectsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListProfileObjectsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListProfileObjectsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListProfileObjectsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListProfileObjectsCommandOutput> {
    return deserializeAws_restJson1ListProfileObjectsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
