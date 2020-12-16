import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeHostsRequest, DescribeHostsResult } from "../models/models_2";
import { deserializeAws_ec2DescribeHostsCommand, serializeAws_ec2DescribeHostsCommand } from "../protocols/Aws_ec2";
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

export type DescribeHostsCommandInput = DescribeHostsRequest;
export type DescribeHostsCommandOutput = DescribeHostsResult & __MetadataBearer;

/**
 * <p>Describes the specified Dedicated Hosts or all your Dedicated Hosts.</p>
 *         <p>The results describe only the Dedicated Hosts in the Region you're currently using.
 *             All listed instances consume capacity on your Dedicated Host. Dedicated Hosts that have
 *             recently been released are listed with the state <code>released</code>.</p>
 */
export class DescribeHostsCommand extends $Command<
  DescribeHostsCommandInput,
  DescribeHostsCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeHostsCommandInput) {
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
  ): Handler<DescribeHostsCommandInput, DescribeHostsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeHostsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeHostsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeHostsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeHostsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeHostsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeHostsCommandOutput> {
    return deserializeAws_ec2DescribeHostsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
