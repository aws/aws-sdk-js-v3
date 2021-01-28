import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { ApplicationDescriptionMessage, CreateApplicationMessage } from "../models/models_0";
import {
  deserializeAws_queryCreateApplicationCommand,
  serializeAws_queryCreateApplicationCommand,
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

export type CreateApplicationCommandInput = CreateApplicationMessage;
export type CreateApplicationCommandOutput = ApplicationDescriptionMessage & __MetadataBearer;

/**
 * <p>Creates an application that has one configuration template named <code>default</code>
 *       and no application versions.</p>
 */
export class CreateApplicationCommand extends $Command<
  CreateApplicationCommandInput,
  CreateApplicationCommandOutput,
  ElasticBeanstalkClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateApplicationCommandInput) {
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
  ): Handler<CreateApplicationCommandInput, CreateApplicationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticBeanstalkClient";
    const commandName = "CreateApplicationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateApplicationMessage.filterSensitiveLog,
      outputFilterSensitiveLog: ApplicationDescriptionMessage.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateApplicationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryCreateApplicationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateApplicationCommandOutput> {
    return deserializeAws_queryCreateApplicationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
