import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeRegionsRequest, DescribeRegionsResult } from "../models/models_3";
import { deserializeAws_ec2DescribeRegionsCommand, serializeAws_ec2DescribeRegionsCommand } from "../protocols/Aws_ec2";
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

export type DescribeRegionsCommandInput = DescribeRegionsRequest;
export type DescribeRegionsCommandOutput = DescribeRegionsResult & __MetadataBearer;

/**
 * <p>Describes the Regions that are enabled for your account, or all Regions.</p>
 *          <p>For a list of the Regions supported by Amazon EC2, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#ec2_region">
 *        Regions and Endpoints</a>.</p>
 *          <p>For information about enabling and disabling Regions for your account, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande-manage.html">Managing AWS Regions</a> in the <i>AWS General Reference</i>.</p>
 */
export class DescribeRegionsCommand extends $Command<
  DescribeRegionsCommandInput,
  DescribeRegionsCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeRegionsCommandInput) {
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
  ): Handler<DescribeRegionsCommandInput, DescribeRegionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeRegionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeRegionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeRegionsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeRegionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeRegionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeRegionsCommandOutput> {
    return deserializeAws_ec2DescribeRegionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
