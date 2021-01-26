import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { DeleteHsmConfigurationMessage } from "../models/models_0";
import {
  deserializeAws_queryDeleteHsmConfigurationCommand,
  serializeAws_queryDeleteHsmConfigurationCommand,
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

export type DeleteHsmConfigurationCommandInput = DeleteHsmConfigurationMessage;
export type DeleteHsmConfigurationCommandOutput = __MetadataBearer;

/**
 * <p>Deletes the specified Amazon Redshift HSM configuration.</p>
 */
export class DeleteHsmConfigurationCommand extends $Command<
  DeleteHsmConfigurationCommandInput,
  DeleteHsmConfigurationCommandOutput,
  RedshiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteHsmConfigurationCommandInput) {
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
  ): Handler<DeleteHsmConfigurationCommandInput, DeleteHsmConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "DeleteHsmConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteHsmConfigurationMessage.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteHsmConfigurationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDeleteHsmConfigurationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteHsmConfigurationCommandOutput> {
    return deserializeAws_queryDeleteHsmConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
