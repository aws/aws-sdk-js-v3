import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { ListBootstrapActionsInput, ListBootstrapActionsOutput } from "../models/models_0";
import {
  deserializeAws_json1_1ListBootstrapActionsCommand,
  serializeAws_json1_1ListBootstrapActionsCommand,
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

export type ListBootstrapActionsCommandInput = ListBootstrapActionsInput;
export type ListBootstrapActionsCommandOutput = ListBootstrapActionsOutput & __MetadataBearer;

/**
 * <p>Provides information about the bootstrap actions associated with a cluster.</p>
 */
export class ListBootstrapActionsCommand extends $Command<
  ListBootstrapActionsCommandInput,
  ListBootstrapActionsCommandOutput,
  EMRClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListBootstrapActionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EMRClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListBootstrapActionsCommandInput, ListBootstrapActionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EMRClient";
    const commandName = "ListBootstrapActionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListBootstrapActionsInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListBootstrapActionsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListBootstrapActionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListBootstrapActionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListBootstrapActionsCommandOutput> {
    return deserializeAws_json1_1ListBootstrapActionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
