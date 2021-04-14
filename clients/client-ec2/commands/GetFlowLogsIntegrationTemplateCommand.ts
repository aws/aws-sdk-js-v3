import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { GetFlowLogsIntegrationTemplateRequest, GetFlowLogsIntegrationTemplateResult } from "../models/models_4";
import {
  deserializeAws_ec2GetFlowLogsIntegrationTemplateCommand,
  serializeAws_ec2GetFlowLogsIntegrationTemplateCommand,
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

export type GetFlowLogsIntegrationTemplateCommandInput = GetFlowLogsIntegrationTemplateRequest;
export type GetFlowLogsIntegrationTemplateCommandOutput = GetFlowLogsIntegrationTemplateResult & __MetadataBearer;

/**
 * <p>Generates a CloudFormation template that streamlines and automates the integration of VPC flow logs
 *             with Amazon Athena. This make it easier for you to query and gain insights from VPC flow logs data.
 *             Based on the information that you provide, we configure resources in the template to do the following:</p>
 *         <ul>
 *             <li>
 *                 <p>Create a table in Athena that maps fields to a custom log format</p>
 *             </li>
 *             <li>
 *                 <p>Create a Lambda function that updates the table with new partitions on a daily, weekly, or
 *                     monthly basis</p>
 *             </li>
 *             <li>
 *                 <p>Create a table partitioned between two timestamps in the past</p>
 *             </li>
 *             <li>
 *                 <p>Create a set of named queries in Athena that you can use to get started quickly</p>
 *             </li>
 *          </ul>
 */
export class GetFlowLogsIntegrationTemplateCommand extends $Command<
  GetFlowLogsIntegrationTemplateCommandInput,
  GetFlowLogsIntegrationTemplateCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetFlowLogsIntegrationTemplateCommandInput) {
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
  ): Handler<GetFlowLogsIntegrationTemplateCommandInput, GetFlowLogsIntegrationTemplateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "GetFlowLogsIntegrationTemplateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetFlowLogsIntegrationTemplateRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetFlowLogsIntegrationTemplateResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetFlowLogsIntegrationTemplateCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2GetFlowLogsIntegrationTemplateCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetFlowLogsIntegrationTemplateCommandOutput> {
    return deserializeAws_ec2GetFlowLogsIntegrationTemplateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
