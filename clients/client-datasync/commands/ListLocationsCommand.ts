import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { ListLocationsRequest, ListLocationsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ListLocationsCommand,
  serializeAws_json1_1ListLocationsCommand,
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

export type ListLocationsCommandInput = ListLocationsRequest;
export type ListLocationsCommandOutput = ListLocationsResponse & __MetadataBearer;

/**
 * <p>Returns a list of source and destination locations.</p>
 *          <p>If you have more locations than are returned in a response (that is, the response
 *       returns only a truncated list of your agents), the response contains a token that you can
 *       specify in your next request to fetch the next page of locations.</p>
 */
export class ListLocationsCommand extends $Command<
  ListLocationsCommandInput,
  ListLocationsCommandOutput,
  DataSyncClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListLocationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DataSyncClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListLocationsCommandInput, ListLocationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataSyncClient";
    const commandName = "ListLocationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListLocationsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListLocationsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListLocationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListLocationsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListLocationsCommandOutput> {
    return deserializeAws_json1_1ListLocationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
