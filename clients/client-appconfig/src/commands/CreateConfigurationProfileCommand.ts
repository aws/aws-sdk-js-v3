// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { AppConfigClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppConfigClient";
import {
  ConfigurationProfile,
  ConfigurationProfileFilterSensitiveLog,
  CreateConfigurationProfileRequest,
  CreateConfigurationProfileRequestFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CreateConfigurationProfileCommand,
  serializeAws_restJson1CreateConfigurationProfileCommand,
} from "../protocols/Aws_restJson1";

export interface CreateConfigurationProfileCommandInput extends CreateConfigurationProfileRequest {}
export interface CreateConfigurationProfileCommandOutput extends ConfigurationProfile, __MetadataBearer {}

/**
 * <p>Creates a configuration profile, which is information that enables AppConfig
 *          to access the configuration source. Valid configuration sources include the AppConfig hosted configuration store, Amazon Web Services Systems Manager (SSM) documents, SSM Parameter Store
 *          parameters, Amazon S3 objects, or any <a href="http://docs.aws.amazon.com/codepipeline/latest/userguide/integrations-action-type.html#integrations-source">integration source
 *             action</a> supported by CodePipeline. A configuration profile includes the following
 *          information:</p>
 *
 *          <ul>
 *             <li>
 *                <p>The URI location of the configuration data.</p>
 *             </li>
 *             <li>
 *                <p>The Identity and Access Management (IAM) role that provides access to the configuration data.</p>
 *             </li>
 *             <li>
 *                <p>A validator for the configuration data. Available validators include either a JSON
 *                Schema or an Amazon Web Services Lambda function.</p>
 *             </li>
 *          </ul>
 *          <p>For more information, see <a href="http://docs.aws.amazon.com/appconfig/latest/userguide/appconfig-creating-configuration-and-profile.html">Create a
 *             Configuration and a Configuration Profile</a> in the <i>AppConfig
 *             User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppConfigClient, CreateConfigurationProfileCommand } from "@aws-sdk/client-appconfig"; // ES Modules import
 * // const { AppConfigClient, CreateConfigurationProfileCommand } = require("@aws-sdk/client-appconfig"); // CommonJS import
 * const client = new AppConfigClient(config);
 * const command = new CreateConfigurationProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateConfigurationProfileCommandInput} for command's `input` shape.
 * @see {@link CreateConfigurationProfileCommandOutput} for command's `response` shape.
 * @see {@link AppConfigClientResolvedConfig | config} for AppConfigClient's `config` shape.
 *
 */
export class CreateConfigurationProfileCommand extends $Command<
  CreateConfigurationProfileCommandInput,
  CreateConfigurationProfileCommandOutput,
  AppConfigClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateConfigurationProfileCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppConfigClient";
    const commandName = "CreateConfigurationProfileCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateConfigurationProfileRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ConfigurationProfileFilterSensitiveLog,
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
