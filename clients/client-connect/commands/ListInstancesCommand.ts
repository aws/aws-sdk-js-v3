import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { ListInstancesRequest, ListInstancesResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListInstancesCommand,
  serializeAws_restJson1ListInstancesCommand,
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

export type ListInstancesCommandInput = ListInstancesRequest;
export type ListInstancesCommandOutput = ListInstancesResponse & __MetadataBearer;

/**
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>Return a list of instances which are in active state, creation-in-progress state, and failed
 *    state. Instances that aren't successfully created (they are in a failed state) are returned only
 *    for 24 hours after the CreateInstance API was invoked.</p>
 */
export class ListInstancesCommand extends $Command<
  ListInstancesCommandInput,
  ListInstancesCommandOutput,
  ConnectClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListInstancesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListInstancesCommandInput, ListInstancesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "ListInstancesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListInstancesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListInstancesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListInstancesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListInstancesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListInstancesCommandOutput> {
    return deserializeAws_restJson1ListInstancesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
