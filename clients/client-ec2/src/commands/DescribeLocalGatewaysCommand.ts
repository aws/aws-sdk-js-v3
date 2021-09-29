import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeLocalGatewaysRequest, DescribeLocalGatewaysResult } from "../models/models_3";
import {
  deserializeAws_ec2DescribeLocalGatewaysCommand,
  serializeAws_ec2DescribeLocalGatewaysCommand,
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

export interface DescribeLocalGatewaysCommandInput extends DescribeLocalGatewaysRequest {}
export interface DescribeLocalGatewaysCommandOutput extends DescribeLocalGatewaysResult, __MetadataBearer {}

/**
 * <p>Describes one or more local gateways. By default, all local gateways are described.
 *         Alternatively, you can filter the results.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeLocalGatewaysCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeLocalGatewaysCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeLocalGatewaysCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeLocalGatewaysCommandInput} for command's `input` shape.
 * @see {@link DescribeLocalGatewaysCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeLocalGatewaysCommand extends $Command<
  DescribeLocalGatewaysCommandInput,
  DescribeLocalGatewaysCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeLocalGatewaysCommandInput) {
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
  ): Handler<DescribeLocalGatewaysCommandInput, DescribeLocalGatewaysCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeLocalGatewaysCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeLocalGatewaysRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeLocalGatewaysResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeLocalGatewaysCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeLocalGatewaysCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeLocalGatewaysCommandOutput> {
    return deserializeAws_ec2DescribeLocalGatewaysCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
