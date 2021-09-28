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

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeVpcClassicLinkRequest, DescribeVpcClassicLinkResult } from "../models/models_4";
import {
  deserializeAws_ec2DescribeVpcClassicLinkCommand,
  serializeAws_ec2DescribeVpcClassicLinkCommand,
} from "../protocols/Aws_ec2";

export interface DescribeVpcClassicLinkCommandInput extends DescribeVpcClassicLinkRequest {}
export interface DescribeVpcClassicLinkCommandOutput extends DescribeVpcClassicLinkResult, __MetadataBearer {}

/**
 * <p>Describes the ClassicLink status of one or more VPCs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeVpcClassicLinkCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeVpcClassicLinkCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeVpcClassicLinkCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeVpcClassicLinkCommandInput} for command's `input` shape.
 * @see {@link DescribeVpcClassicLinkCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeVpcClassicLinkCommand extends $Command<
  DescribeVpcClassicLinkCommandInput,
  DescribeVpcClassicLinkCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeVpcClassicLinkCommandInput) {
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
  ): Handler<DescribeVpcClassicLinkCommandInput, DescribeVpcClassicLinkCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeVpcClassicLinkCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeVpcClassicLinkRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeVpcClassicLinkResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeVpcClassicLinkCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeVpcClassicLinkCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeVpcClassicLinkCommandOutput> {
    return deserializeAws_ec2DescribeVpcClassicLinkCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
