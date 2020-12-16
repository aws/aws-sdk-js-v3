import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { ListFileSharesInput, ListFileSharesOutput } from "../models/models_0";
import {
  deserializeAws_json1_1ListFileSharesCommand,
  serializeAws_json1_1ListFileSharesCommand,
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

export type ListFileSharesCommandInput = ListFileSharesInput;
export type ListFileSharesCommandOutput = ListFileSharesOutput & __MetadataBearer;

/**
 * <p>Gets a list of the file shares for a specific file gateway, or the list of file shares
 *          that belong to the calling user account. This operation is only supported for file
 *          gateways.</p>
 */
export class ListFileSharesCommand extends $Command<
  ListFileSharesCommandInput,
  ListFileSharesCommandOutput,
  StorageGatewayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListFileSharesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: StorageGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListFileSharesCommandInput, ListFileSharesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "ListFileSharesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListFileSharesInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListFileSharesOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListFileSharesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListFileSharesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListFileSharesCommandOutput> {
    return deserializeAws_json1_1ListFileSharesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
