import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { ListInventoryEntriesRequest, ListInventoryEntriesResult } from "../models/models_1";
import {
  deserializeAws_json1_1ListInventoryEntriesCommand,
  serializeAws_json1_1ListInventoryEntriesCommand,
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

export type ListInventoryEntriesCommandInput = ListInventoryEntriesRequest;
export type ListInventoryEntriesCommandOutput = ListInventoryEntriesResult & __MetadataBearer;

/**
 * <p>A list of inventory items returned by the request.</p>
 */
export class ListInventoryEntriesCommand extends $Command<
  ListInventoryEntriesCommandInput,
  ListInventoryEntriesCommandOutput,
  SSMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListInventoryEntriesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListInventoryEntriesCommandInput, ListInventoryEntriesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "ListInventoryEntriesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListInventoryEntriesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListInventoryEntriesResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListInventoryEntriesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListInventoryEntriesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListInventoryEntriesCommandOutput> {
    return deserializeAws_json1_1ListInventoryEntriesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
