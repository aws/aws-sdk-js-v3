import { AppConfigClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppConfigClient";
import { ConfigurationProfile, CreateConfigurationProfileRequest } from "../models/models_0";
import {
  deserializeAws_restJson1CreateConfigurationProfileCommand,
  serializeAws_restJson1CreateConfigurationProfileCommand,
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

export type CreateConfigurationProfileCommandInput = CreateConfigurationProfileRequest;
export type CreateConfigurationProfileCommandOutput = ConfigurationProfile & __MetadataBearer;

/**
 * <p>Information that enables AppConfig to access the configuration source. Valid
 *          configuration sources include Systems Manager (SSM) documents, SSM Parameter Store parameters, and
 *          Amazon S3 objects. A configuration profile includes the following information.</p>
 *          <ul>
 *             <li>
 *                <p>The Uri location of the configuration data.</p>
 *             </li>
 *             <li>
 *                <p>The AWS Identity and Access Management (IAM) role that provides access to the configuration data.</p>
 *             </li>
 *             <li>
 *                <p>A validator for the configuration data. Available validators include either a JSON
 *                Schema or an AWS Lambda function.</p>
 *             </li>
 *          </ul>
 *          <p>For more information, see <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/appconfig-creating-configuration-and-profile.html">Create a
 *             Configuration and a Configuration Profile</a> in the
 *             <i>AWS AppConfig User Guide</i>.</p>
 */
export class CreateConfigurationProfileCommand extends $Command<
  CreateConfigurationProfileCommandInput,
  CreateConfigurationProfileCommandOutput,
  AppConfigClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateConfigurationProfileCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppConfigClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateConfigurationProfileCommandInput, CreateConfigurationProfileCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppConfigClient";
    const commandName = "CreateConfigurationProfileCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateConfigurationProfileRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ConfigurationProfile.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateConfigurationProfileCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateConfigurationProfileCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateConfigurationProfileCommandOutput> {
    return deserializeAws_restJson1CreateConfigurationProfileCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
