import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeClientVpnRoutesRequest, DescribeClientVpnRoutesResult } from "../models/models_2";
import {
  deserializeAws_ec2DescribeClientVpnRoutesCommand,
  serializeAws_ec2DescribeClientVpnRoutesCommand,
} from "../protocols/Aws_ec2";
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

export interface DescribeClientVpnRoutesCommandInput extends DescribeClientVpnRoutesRequest {}
export interface DescribeClientVpnRoutesCommandOutput extends DescribeClientVpnRoutesResult, __MetadataBearer {}

/**
 * <p>Describes the routes for the specified Client VPN endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeClientVpnRoutesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeClientVpnRoutesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeClientVpnRoutesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeClientVpnRoutesCommandInput} for command's `input` shape.
 * @see {@link DescribeClientVpnRoutesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeClientVpnRoutesCommand extends $Command<
  DescribeClientVpnRoutesCommandInput,
  DescribeClientVpnRoutesCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeClientVpnRoutesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeClientVpnRoutesCommandInput, DescribeClientVpnRoutesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeClientVpnRoutesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeClientVpnRoutesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeClientVpnRoutesResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeClientVpnRoutesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeClientVpnRoutesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeClientVpnRoutesCommandOutput> {
    return deserializeAws_ec2DescribeClientVpnRoutesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
