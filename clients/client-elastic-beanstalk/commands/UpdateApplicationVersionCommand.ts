import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { ApplicationVersionDescriptionMessage, UpdateApplicationVersionMessage } from "../models/models_0";
import {
  deserializeAws_queryUpdateApplicationVersionCommand,
  serializeAws_queryUpdateApplicationVersionCommand,
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

export type UpdateApplicationVersionCommandInput = UpdateApplicationVersionMessage;
export type UpdateApplicationVersionCommandOutput = ApplicationVersionDescriptionMessage & __MetadataBearer;

/**
 * <p>Updates the specified application version to have the specified properties.</p>
 *          <note>
 *             <p>If a property (for example, <code>description</code>) is not provided, the value
 *         remains unchanged. To clear properties, specify an empty string.</p>
 *          </note>
 */
export class UpdateApplicationVersionCommand extends $Command<
  UpdateApplicationVersionCommandInput,
  UpdateApplicationVersionCommandOutput,
  ElasticBeanstalkClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateApplicationVersionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElasticBeanstalkClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateApplicationVersionCommandInput, UpdateApplicationVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticBeanstalkClient";
    const commandName = "UpdateApplicationVersionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateApplicationVersionMessage.filterSensitiveLog,
      outputFilterSensitiveLog: ApplicationVersionDescriptionMessage.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateApplicationVersionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryUpdateApplicationVersionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateApplicationVersionCommandOutput> {
    return deserializeAws_queryUpdateApplicationVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
