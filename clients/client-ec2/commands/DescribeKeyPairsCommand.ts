import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeKeyPairsRequest, DescribeKeyPairsResult } from "../models/models_3";
import {
  deserializeAws_ec2DescribeKeyPairsCommand,
  serializeAws_ec2DescribeKeyPairsCommand,
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

export type DescribeKeyPairsCommandInput = DescribeKeyPairsRequest;
export type DescribeKeyPairsCommandOutput = DescribeKeyPairsResult & __MetadataBearer;

/**
 * <p>Describes the specified key pairs or all of your key pairs.</p>
 *          <p>For more information about key pairs, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html">Key Pairs</a>
 * 				in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 */
export class DescribeKeyPairsCommand extends $Command<
  DescribeKeyPairsCommandInput,
  DescribeKeyPairsCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeKeyPairsCommandInput) {
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
  ): Handler<DescribeKeyPairsCommandInput, DescribeKeyPairsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeKeyPairsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeKeyPairsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeKeyPairsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeKeyPairsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeKeyPairsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeKeyPairsCommandOutput> {
    return deserializeAws_ec2DescribeKeyPairsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
