import { MgnClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MgnClient";
import { GetLaunchConfigurationRequest, LaunchConfiguration } from "../models/models_0";
import {
  deserializeAws_restJson1GetLaunchConfigurationCommand,
  serializeAws_restJson1GetLaunchConfigurationCommand,
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

export interface GetLaunchConfigurationCommandInput extends GetLaunchConfigurationRequest {}
export interface GetLaunchConfigurationCommandOutput extends LaunchConfiguration, __MetadataBearer {}

/**
 * <p>Lists all LaunchConfigurations available, filtered by Source Server IDs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, GetLaunchConfigurationCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, GetLaunchConfigurationCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * const client = new MgnClient(config);
 * const command = new GetLaunchConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetLaunchConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetLaunchConfigurationCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetLaunchConfigurationCommand extends $Command<
  GetLaunchConfigurationCommandInput,
  GetLaunchConfigurationCommandOutput,
  MgnClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetLaunchConfigurationCommandInput) {
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
  ): Handler<GetLaunchConfigurationCommandInput, GetLaunchConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MgnClient";
    const commandName = "GetLaunchConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetLaunchConfigurationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: LaunchConfiguration.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetLaunchConfigurationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetLaunchConfigurationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetLaunchConfigurationCommandOutput> {
    return deserializeAws_restJson1GetLaunchConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
