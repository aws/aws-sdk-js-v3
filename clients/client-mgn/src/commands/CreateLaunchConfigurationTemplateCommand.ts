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

import { MgnClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MgnClient";
import {
  CreateLaunchConfigurationTemplateRequest,
  CreateLaunchConfigurationTemplateRequestFilterSensitiveLog,
  LaunchConfigurationTemplate,
  LaunchConfigurationTemplateFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CreateLaunchConfigurationTemplateCommand,
  serializeAws_restJson1CreateLaunchConfigurationTemplateCommand,
} from "../protocols/Aws_restJson1";

export interface CreateLaunchConfigurationTemplateCommandInput extends CreateLaunchConfigurationTemplateRequest {}
export interface CreateLaunchConfigurationTemplateCommandOutput extends LaunchConfigurationTemplate, __MetadataBearer {}

/**
 * <p>Creates a new Launch Configuration Template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, CreateLaunchConfigurationTemplateCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, CreateLaunchConfigurationTemplateCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * const client = new MgnClient(config);
 * const command = new CreateLaunchConfigurationTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateLaunchConfigurationTemplateCommandInput} for command's `input` shape.
 * @see {@link CreateLaunchConfigurationTemplateCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for MgnClient's `config` shape.
 *
 */
export class CreateLaunchConfigurationTemplateCommand extends $Command<
  CreateLaunchConfigurationTemplateCommandInput,
  CreateLaunchConfigurationTemplateCommandOutput,
  MgnClientResolvedConfig
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

  constructor(readonly input: CreateLaunchConfigurationTemplateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MgnClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateLaunchConfigurationTemplateCommandInput, CreateLaunchConfigurationTemplateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateLaunchConfigurationTemplateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MgnClient";
    const commandName = "CreateLaunchConfigurationTemplateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateLaunchConfigurationTemplateRequestFilterSensitiveLog,
      outputFilterSensitiveLog: LaunchConfigurationTemplateFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: CreateLaunchConfigurationTemplateCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateLaunchConfigurationTemplateCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateLaunchConfigurationTemplateCommandOutput> {
    return deserializeAws_restJson1CreateLaunchConfigurationTemplateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
