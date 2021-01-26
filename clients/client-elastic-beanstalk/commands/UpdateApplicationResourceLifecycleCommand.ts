import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import {
  ApplicationResourceLifecycleDescriptionMessage,
  UpdateApplicationResourceLifecycleMessage,
} from "../models/models_0";
import {
  deserializeAws_queryUpdateApplicationResourceLifecycleCommand,
  serializeAws_queryUpdateApplicationResourceLifecycleCommand,
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

export type UpdateApplicationResourceLifecycleCommandInput = UpdateApplicationResourceLifecycleMessage;
export type UpdateApplicationResourceLifecycleCommandOutput = ApplicationResourceLifecycleDescriptionMessage &
  __MetadataBearer;

/**
 * <p>Modifies lifecycle settings for an application.</p>
 */
export class UpdateApplicationResourceLifecycleCommand extends $Command<
  UpdateApplicationResourceLifecycleCommandInput,
  UpdateApplicationResourceLifecycleCommandOutput,
  ElasticBeanstalkClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateApplicationResourceLifecycleCommandInput) {
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
  ): Handler<UpdateApplicationResourceLifecycleCommandInput, UpdateApplicationResourceLifecycleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticBeanstalkClient";
    const commandName = "UpdateApplicationResourceLifecycleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateApplicationResourceLifecycleMessage.filterSensitiveLog,
      outputFilterSensitiveLog: ApplicationResourceLifecycleDescriptionMessage.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: UpdateApplicationResourceLifecycleCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryUpdateApplicationResourceLifecycleCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateApplicationResourceLifecycleCommandOutput> {
    return deserializeAws_queryUpdateApplicationResourceLifecycleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
