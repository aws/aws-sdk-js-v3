import { RoboMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RoboMakerClient";
import { DescribeWorldRequest, DescribeWorldResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeWorldCommand,
  serializeAws_restJson1DescribeWorldCommand,
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

export interface DescribeWorldCommandInput extends DescribeWorldRequest {}
export interface DescribeWorldCommandOutput extends DescribeWorldResponse, __MetadataBearer {}

/**
 * <p>Describes a world.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, DescribeWorldCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, DescribeWorldCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const command = new DescribeWorldCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeWorldCommandInput} for command's `input` shape.
 * @see {@link DescribeWorldCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeWorldCommand extends $Command<
  DescribeWorldCommandInput,
  DescribeWorldCommandOutput,
  RoboMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeWorldCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RoboMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeWorldCommandInput, DescribeWorldCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RoboMakerClient";
    const commandName = "DescribeWorldCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeWorldRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeWorldResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeWorldCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeWorldCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeWorldCommandOutput> {
    return deserializeAws_restJson1DescribeWorldCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
