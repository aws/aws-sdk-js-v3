import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { DescribeAgentStatusRequest, DescribeAgentStatusResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeAgentStatusCommand,
  serializeAws_restJson1DescribeAgentStatusCommand,
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

export interface DescribeAgentStatusCommandInput extends DescribeAgentStatusRequest {}
export interface DescribeAgentStatusCommandOutput extends DescribeAgentStatusResponse, __MetadataBearer {}

/**
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>Describes an agent status.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DescribeAgentStatusCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DescribeAgentStatusCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new DescribeAgentStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAgentStatusCommandInput} for command's `input` shape.
 * @see {@link DescribeAgentStatusCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeAgentStatusCommand extends $Command<
  DescribeAgentStatusCommandInput,
  DescribeAgentStatusCommandOutput,
  ConnectClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeAgentStatusCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeAgentStatusCommandInput, DescribeAgentStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "DescribeAgentStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeAgentStatusRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeAgentStatusResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeAgentStatusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeAgentStatusCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeAgentStatusCommandOutput> {
    return deserializeAws_restJson1DescribeAgentStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
