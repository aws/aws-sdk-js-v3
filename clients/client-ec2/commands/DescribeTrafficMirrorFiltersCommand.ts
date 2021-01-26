import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeTrafficMirrorFiltersRequest, DescribeTrafficMirrorFiltersResult } from "../models/models_3";
import {
  deserializeAws_ec2DescribeTrafficMirrorFiltersCommand,
  serializeAws_ec2DescribeTrafficMirrorFiltersCommand,
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

export type DescribeTrafficMirrorFiltersCommandInput = DescribeTrafficMirrorFiltersRequest;
export type DescribeTrafficMirrorFiltersCommandOutput = DescribeTrafficMirrorFiltersResult & __MetadataBearer;

/**
 * <p>Describes one or more Traffic Mirror filters.</p>
 */
export class DescribeTrafficMirrorFiltersCommand extends $Command<
  DescribeTrafficMirrorFiltersCommandInput,
  DescribeTrafficMirrorFiltersCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeTrafficMirrorFiltersCommandInput) {
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
  ): Handler<DescribeTrafficMirrorFiltersCommandInput, DescribeTrafficMirrorFiltersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeTrafficMirrorFiltersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeTrafficMirrorFiltersRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeTrafficMirrorFiltersResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeTrafficMirrorFiltersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeTrafficMirrorFiltersCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeTrafficMirrorFiltersCommandOutput> {
    return deserializeAws_ec2DescribeTrafficMirrorFiltersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
