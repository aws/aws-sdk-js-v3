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

import { ImagebuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ImagebuilderClient";
import {
  CreateInfrastructureConfigurationRequest,
  CreateInfrastructureConfigurationRequestFilterSensitiveLog,
  CreateInfrastructureConfigurationResponse,
  CreateInfrastructureConfigurationResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CreateInfrastructureConfigurationCommand,
  serializeAws_restJson1CreateInfrastructureConfigurationCommand,
} from "../protocols/Aws_restJson1";

export interface CreateInfrastructureConfigurationCommandInput extends CreateInfrastructureConfigurationRequest {}
export interface CreateInfrastructureConfigurationCommandOutput
  extends CreateInfrastructureConfigurationResponse,
    __MetadataBearer {}

/**
 * <p> Creates a new infrastructure configuration. An infrastructure configuration defines the
 * 			environment in which your image will be built and tested.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, CreateInfrastructureConfigurationCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, CreateInfrastructureConfigurationCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * const client = new ImagebuilderClient(config);
 * const command = new CreateInfrastructureConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateInfrastructureConfigurationCommandInput} for command's `input` shape.
 * @see {@link CreateInfrastructureConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for ImagebuilderClient's `config` shape.
 *
 */
export class CreateInfrastructureConfigurationCommand extends $Command<
  CreateInfrastructureConfigurationCommandInput,
  CreateInfrastructureConfigurationCommandOutput,
  ImagebuilderClientResolvedConfig
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

  constructor(readonly input: CreateInfrastructureConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ImagebuilderClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateInfrastructureConfigurationCommandInput, CreateInfrastructureConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateInfrastructureConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ImagebuilderClient";
    const commandName = "CreateInfrastructureConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateInfrastructureConfigurationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateInfrastructureConfigurationResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: CreateInfrastructureConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateInfrastructureConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateInfrastructureConfigurationCommandOutput> {
    return deserializeAws_restJson1CreateInfrastructureConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
