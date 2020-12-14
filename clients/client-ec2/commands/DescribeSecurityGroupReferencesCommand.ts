import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeSecurityGroupReferencesRequest, DescribeSecurityGroupReferencesResult } from "../models/models_3";
import {
  deserializeAws_ec2DescribeSecurityGroupReferencesCommand,
  serializeAws_ec2DescribeSecurityGroupReferencesCommand,
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

export type DescribeSecurityGroupReferencesCommandInput = DescribeSecurityGroupReferencesRequest;
export type DescribeSecurityGroupReferencesCommandOutput = DescribeSecurityGroupReferencesResult & __MetadataBearer;

/**
 * <p>[VPC only] Describes the VPCs on the other side of a VPC peering connection that are referencing the security groups you've specified in this request.</p>
 */
export class DescribeSecurityGroupReferencesCommand extends $Command<
  DescribeSecurityGroupReferencesCommandInput,
  DescribeSecurityGroupReferencesCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeSecurityGroupReferencesCommandInput) {
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
  ): Handler<DescribeSecurityGroupReferencesCommandInput, DescribeSecurityGroupReferencesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeSecurityGroupReferencesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeSecurityGroupReferencesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeSecurityGroupReferencesResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeSecurityGroupReferencesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeSecurityGroupReferencesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeSecurityGroupReferencesCommandOutput> {
    return deserializeAws_ec2DescribeSecurityGroupReferencesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
