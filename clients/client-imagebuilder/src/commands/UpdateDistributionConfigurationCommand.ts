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
  UpdateDistributionConfigurationRequest,
  UpdateDistributionConfigurationRequestFilterSensitiveLog,
  UpdateDistributionConfigurationResponse,
  UpdateDistributionConfigurationResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1UpdateDistributionConfigurationCommand,
  serializeAws_restJson1UpdateDistributionConfigurationCommand,
} from "../protocols/Aws_restJson1";

export interface UpdateDistributionConfigurationCommandInput extends UpdateDistributionConfigurationRequest {}
export interface UpdateDistributionConfigurationCommandOutput
  extends UpdateDistributionConfigurationResponse,
    __MetadataBearer {}

/**
 * <p> Updates a new distribution configuration. Distribution configurations define and
 * 			configure the outputs of your pipeline.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, UpdateDistributionConfigurationCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, UpdateDistributionConfigurationCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * const client = new ImagebuilderClient(config);
 * const command = new UpdateDistributionConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDistributionConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateDistributionConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for ImagebuilderClient's `config` shape.
 *
 */
export class UpdateDistributionConfigurationCommand extends $Command<
  UpdateDistributionConfigurationCommandInput,
  UpdateDistributionConfigurationCommandOutput,
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

  constructor(readonly input: UpdateDistributionConfigurationCommandInput) {
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
  ): Handler<UpdateDistributionConfigurationCommandInput, UpdateDistributionConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateDistributionConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ImagebuilderClient";
    const commandName = "UpdateDistributionConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateDistributionConfigurationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateDistributionConfigurationResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: UpdateDistributionConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateDistributionConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateDistributionConfigurationCommandOutput> {
    return deserializeAws_restJson1UpdateDistributionConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
