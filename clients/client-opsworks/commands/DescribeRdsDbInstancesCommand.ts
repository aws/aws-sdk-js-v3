import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { DescribeRdsDbInstancesRequest, DescribeRdsDbInstancesResult } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeRdsDbInstancesCommand,
  serializeAws_json1_1DescribeRdsDbInstancesCommand,
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

export type DescribeRdsDbInstancesCommandInput = DescribeRdsDbInstancesRequest;
export type DescribeRdsDbInstancesCommandOutput = DescribeRdsDbInstancesResult & __MetadataBearer;

/**
 * <p>Describes Amazon RDS instances.</p>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or
 *       Manage permissions level for the stack, or an attached policy that explicitly grants
 *       permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
 *         Permissions</a>.</p>
 *          <p>This call accepts only one resource-identifying parameter.</p>
 */
export class DescribeRdsDbInstancesCommand extends $Command<
  DescribeRdsDbInstancesCommandInput,
  DescribeRdsDbInstancesCommandOutput,
  OpsWorksClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeRdsDbInstancesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OpsWorksClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeRdsDbInstancesCommandInput, DescribeRdsDbInstancesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OpsWorksClient";
    const commandName = "DescribeRdsDbInstancesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeRdsDbInstancesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeRdsDbInstancesResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeRdsDbInstancesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeRdsDbInstancesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeRdsDbInstancesCommandOutput> {
    return deserializeAws_json1_1DescribeRdsDbInstancesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
