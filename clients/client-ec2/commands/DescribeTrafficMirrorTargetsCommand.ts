import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeTrafficMirrorTargetsRequest, DescribeTrafficMirrorTargetsResult } from "../models/models_3";
import {
  deserializeAws_ec2DescribeTrafficMirrorTargetsCommand,
  serializeAws_ec2DescribeTrafficMirrorTargetsCommand,
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

export type DescribeTrafficMirrorTargetsCommandInput = DescribeTrafficMirrorTargetsRequest;
export type DescribeTrafficMirrorTargetsCommandOutput = DescribeTrafficMirrorTargetsResult & __MetadataBearer;

/**
 * <p>Information about one or more Traffic Mirror targets.</p>
 */
export class DescribeTrafficMirrorTargetsCommand extends $Command<
  DescribeTrafficMirrorTargetsCommandInput,
  DescribeTrafficMirrorTargetsCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeTrafficMirrorTargetsCommandInput) {
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
  ): Handler<DescribeTrafficMirrorTargetsCommandInput, DescribeTrafficMirrorTargetsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeTrafficMirrorTargetsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeTrafficMirrorTargetsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeTrafficMirrorTargetsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeTrafficMirrorTargetsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeTrafficMirrorTargetsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeTrafficMirrorTargetsCommandOutput> {
    return deserializeAws_ec2DescribeTrafficMirrorTargetsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
