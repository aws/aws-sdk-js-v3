import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { UpdateThingRuntimeConfigurationRequest, UpdateThingRuntimeConfigurationResponse } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateThingRuntimeConfigurationCommand,
  serializeAws_restJson1UpdateThingRuntimeConfigurationCommand,
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

export interface UpdateThingRuntimeConfigurationCommandInput extends UpdateThingRuntimeConfigurationRequest {}
export interface UpdateThingRuntimeConfigurationCommandOutput
  extends UpdateThingRuntimeConfigurationResponse,
    __MetadataBearer {}

/**
 * Updates the runtime configuration of a thing.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, UpdateThingRuntimeConfigurationCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, UpdateThingRuntimeConfigurationCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new UpdateThingRuntimeConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateThingRuntimeConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateThingRuntimeConfigurationCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateThingRuntimeConfigurationCommand extends $Command<
  UpdateThingRuntimeConfigurationCommandInput,
  UpdateThingRuntimeConfigurationCommandOutput,
  GreengrassClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateThingRuntimeConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GreengrassClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateThingRuntimeConfigurationCommandInput, UpdateThingRuntimeConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GreengrassClient";
    const commandName = "UpdateThingRuntimeConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateThingRuntimeConfigurationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateThingRuntimeConfigurationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: UpdateThingRuntimeConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateThingRuntimeConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateThingRuntimeConfigurationCommandOutput> {
    return deserializeAws_restJson1UpdateThingRuntimeConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
