import { AppMeshClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppMeshClient";
import { DescribeGatewayRouteInput, DescribeGatewayRouteOutput } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeGatewayRouteCommand,
  serializeAws_restJson1DescribeGatewayRouteCommand,
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

export interface DescribeGatewayRouteCommandInput extends DescribeGatewayRouteInput {}
export interface DescribeGatewayRouteCommandOutput extends DescribeGatewayRouteOutput, __MetadataBearer {}

/**
 * <p>Describes an existing gateway route.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppMeshClient, DescribeGatewayRouteCommand } from "@aws-sdk/client-app-mesh"; // ES Modules import
 * // const { AppMeshClient, DescribeGatewayRouteCommand } = require("@aws-sdk/client-app-mesh"); // CommonJS import
 * const client = new AppMeshClient(config);
 * const command = new DescribeGatewayRouteCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeGatewayRouteCommandInput} for command's `input` shape.
 * @see {@link DescribeGatewayRouteCommandOutput} for command's `response` shape.
 * @see {@link AppMeshClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeGatewayRouteCommand extends $Command<
  DescribeGatewayRouteCommandInput,
  DescribeGatewayRouteCommandOutput,
  AppMeshClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeGatewayRouteCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppMeshClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeGatewayRouteCommandInput, DescribeGatewayRouteCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppMeshClient";
    const commandName = "DescribeGatewayRouteCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeGatewayRouteInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeGatewayRouteOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeGatewayRouteCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeGatewayRouteCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeGatewayRouteCommandOutput> {
    return deserializeAws_restJson1DescribeGatewayRouteCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
