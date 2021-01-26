import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { ConfigurationSettingsValidationMessages, ValidateConfigurationSettingsMessage } from "../models/models_0";
import {
  deserializeAws_queryValidateConfigurationSettingsCommand,
  serializeAws_queryValidateConfigurationSettingsCommand,
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

export type ValidateConfigurationSettingsCommandInput = ValidateConfigurationSettingsMessage;
export type ValidateConfigurationSettingsCommandOutput = ConfigurationSettingsValidationMessages & __MetadataBearer;

/**
 * <p>Takes a set of configuration settings and either a configuration template or
 *       environment, and determines whether those values are valid.</p>
 *          <p>This action returns a list of messages indicating any errors or warnings associated
 *       with the selection of option values.</p>
 */
export class ValidateConfigurationSettingsCommand extends $Command<
  ValidateConfigurationSettingsCommandInput,
  ValidateConfigurationSettingsCommandOutput,
  ElasticBeanstalkClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ValidateConfigurationSettingsCommandInput) {
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
  ): Handler<ValidateConfigurationSettingsCommandInput, ValidateConfigurationSettingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticBeanstalkClient";
    const commandName = "ValidateConfigurationSettingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ValidateConfigurationSettingsMessage.filterSensitiveLog,
      outputFilterSensitiveLog: ConfigurationSettingsValidationMessages.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ValidateConfigurationSettingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryValidateConfigurationSettingsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ValidateConfigurationSettingsCommandOutput> {
    return deserializeAws_queryValidateConfigurationSettingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
