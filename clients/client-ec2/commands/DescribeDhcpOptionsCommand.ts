import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeDhcpOptionsRequest, DescribeDhcpOptionsResult } from "../models/models_2";
import {
  deserializeAws_ec2DescribeDhcpOptionsCommand,
  serializeAws_ec2DescribeDhcpOptionsCommand,
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

export type DescribeDhcpOptionsCommandInput = DescribeDhcpOptionsRequest;
export type DescribeDhcpOptionsCommandOutput = DescribeDhcpOptionsResult & __MetadataBearer;

/**
 * <p>Describes one or more of your DHCP options sets.</p>
 * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_DHCP_Options.html">DHCP Options Sets</a> in the
 * 				<i>Amazon Virtual Private Cloud User Guide</i>.</p>
 */
export class DescribeDhcpOptionsCommand extends $Command<
  DescribeDhcpOptionsCommandInput,
  DescribeDhcpOptionsCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeDhcpOptionsCommandInput) {
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
  ): Handler<DescribeDhcpOptionsCommandInput, DescribeDhcpOptionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeDhcpOptionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeDhcpOptionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeDhcpOptionsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeDhcpOptionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeDhcpOptionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeDhcpOptionsCommandOutput> {
    return deserializeAws_ec2DescribeDhcpOptionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
