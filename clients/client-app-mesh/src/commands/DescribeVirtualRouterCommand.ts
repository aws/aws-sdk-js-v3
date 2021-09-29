import { AppMeshClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppMeshClient";
import { DescribeVirtualRouterInput, DescribeVirtualRouterOutput } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeVirtualRouterCommand,
  serializeAws_restJson1DescribeVirtualRouterCommand,
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

export interface DescribeVirtualRouterCommandInput extends DescribeVirtualRouterInput {}
export interface DescribeVirtualRouterCommandOutput extends DescribeVirtualRouterOutput, __MetadataBearer {}

/**
 * <p>Describes an existing virtual router.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppMeshClient, DescribeVirtualRouterCommand } from "@aws-sdk/client-app-mesh"; // ES Modules import
 * // const { AppMeshClient, DescribeVirtualRouterCommand } = require("@aws-sdk/client-app-mesh"); // CommonJS import
 * const client = new AppMeshClient(config);
 * const command = new DescribeVirtualRouterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeVirtualRouterCommandInput} for command's `input` shape.
 * @see {@link DescribeVirtualRouterCommandOutput} for command's `response` shape.
 * @see {@link AppMeshClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeVirtualRouterCommand extends $Command<
  DescribeVirtualRouterCommandInput,
  DescribeVirtualRouterCommandOutput,
  AppMeshClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeVirtualRouterCommandInput) {
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
  ): Handler<DescribeVirtualRouterCommandInput, DescribeVirtualRouterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppMeshClient";
    const commandName = "DescribeVirtualRouterCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeVirtualRouterInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeVirtualRouterOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeVirtualRouterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeVirtualRouterCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeVirtualRouterCommandOutput> {
    return deserializeAws_restJson1DescribeVirtualRouterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
