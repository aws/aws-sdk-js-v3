import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { DescribeInstanceInformationRequest, DescribeInstanceInformationResult } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeInstanceInformationCommand,
  serializeAws_json1_1DescribeInstanceInformationCommand,
} from "../protocols/Aws_json1_1";
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

export type DescribeInstanceInformationCommandInput = DescribeInstanceInformationRequest;
export type DescribeInstanceInformationCommandOutput = DescribeInstanceInformationResult & __MetadataBearer;

/**
 * <p>Describes one or more of your instances, including information about the operating system
 *    platform, the version of SSM Agent installed on the instance, instance status, and so on.</p>
 *          <p>If you specify one or more instance IDs, it returns information for those instances. If you
 *    do not specify instance IDs, it returns information for all your instances. If you specify an
 *    instance ID that is not valid or an instance that you do not own, you receive an error.</p>
 *          <note>
 *             <p>The IamRole field for this API action is the Amazon Identity and Access Management (IAM)
 *     role assigned to on-premises instances. This call does not return the IAM role for EC2
 *     instances.</p>
 *          </note>
 */
export class DescribeInstanceInformationCommand extends $Command<
  DescribeInstanceInformationCommandInput,
  DescribeInstanceInformationCommandOutput,
  SSMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeInstanceInformationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeInstanceInformationCommandInput, DescribeInstanceInformationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "DescribeInstanceInformationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeInstanceInformationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeInstanceInformationResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeInstanceInformationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeInstanceInformationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeInstanceInformationCommandOutput> {
    return deserializeAws_json1_1DescribeInstanceInformationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
