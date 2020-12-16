import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { DeleteScheduledActionMessage } from "../models/models_0";
import {
  deserializeAws_queryDeleteScheduledActionCommand,
  serializeAws_queryDeleteScheduledActionCommand,
} from "../protocols/Aws_query";
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

export type DeleteScheduledActionCommandInput = DeleteScheduledActionMessage;
export type DeleteScheduledActionCommandOutput = __MetadataBearer;

/**
 * <p>Deletes a scheduled action.
 *              </p>
 */
export class DeleteScheduledActionCommand extends $Command<
  DeleteScheduledActionCommandInput,
  DeleteScheduledActionCommandOutput,
  RedshiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteScheduledActionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RedshiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteScheduledActionCommandInput, DeleteScheduledActionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "DeleteScheduledActionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteScheduledActionMessage.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteScheduledActionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDeleteScheduledActionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteScheduledActionCommandOutput> {
    return deserializeAws_queryDeleteScheduledActionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
