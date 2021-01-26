import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import {
  DescribeReservedInstancesModificationsRequest,
  DescribeReservedInstancesModificationsResult,
} from "../models/models_3";
import {
  deserializeAws_ec2DescribeReservedInstancesModificationsCommand,
  serializeAws_ec2DescribeReservedInstancesModificationsCommand,
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

export type DescribeReservedInstancesModificationsCommandInput = DescribeReservedInstancesModificationsRequest;
export type DescribeReservedInstancesModificationsCommandOutput = DescribeReservedInstancesModificationsResult &
  __MetadataBearer;

/**
 * <p>Describes the modifications made to your Reserved Instances. If no parameter is specified, information about all your Reserved Instances modification requests is returned. If a modification ID is specified, only information about the specific modification is returned.</p>
 *    	     <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ri-modifying.html">Modifying Reserved Instances</a> in the Amazon Elastic Compute Cloud User Guide.</p>
 */
export class DescribeReservedInstancesModificationsCommand extends $Command<
  DescribeReservedInstancesModificationsCommandInput,
  DescribeReservedInstancesModificationsCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeReservedInstancesModificationsCommandInput) {
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
  ): Handler<DescribeReservedInstancesModificationsCommandInput, DescribeReservedInstancesModificationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeReservedInstancesModificationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeReservedInstancesModificationsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeReservedInstancesModificationsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeReservedInstancesModificationsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeReservedInstancesModificationsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeReservedInstancesModificationsCommandOutput> {
    return deserializeAws_ec2DescribeReservedInstancesModificationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
