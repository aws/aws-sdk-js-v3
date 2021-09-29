import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SnowDeviceManagementClientResolvedConfig,
} from "../SnowDeviceManagementClient";
import { DescribeExecutionInput, DescribeExecutionOutput } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeExecutionCommand,
  serializeAws_restJson1DescribeExecutionCommand,
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

export interface DescribeExecutionCommandInput extends DescribeExecutionInput {}
export interface DescribeExecutionCommandOutput extends DescribeExecutionOutput, __MetadataBearer {}

/**
 * <p>Checks the status of a remote task running on one or more target devices.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SnowDeviceManagementClient, DescribeExecutionCommand } from "@aws-sdk/client-snow-device-management"; // ES Modules import
 * // const { SnowDeviceManagementClient, DescribeExecutionCommand } = require("@aws-sdk/client-snow-device-management"); // CommonJS import
 * const client = new SnowDeviceManagementClient(config);
 * const command = new DescribeExecutionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeExecutionCommandInput} for command's `input` shape.
 * @see {@link DescribeExecutionCommandOutput} for command's `response` shape.
 * @see {@link SnowDeviceManagementClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeExecutionCommand extends $Command<
  DescribeExecutionCommandInput,
  DescribeExecutionCommandOutput,
  SnowDeviceManagementClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeExecutionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SnowDeviceManagementClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeExecutionCommandInput, DescribeExecutionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SnowDeviceManagementClient";
    const commandName = "DescribeExecutionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeExecutionInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeExecutionOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeExecutionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeExecutionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeExecutionCommandOutput> {
    return deserializeAws_restJson1DescribeExecutionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
