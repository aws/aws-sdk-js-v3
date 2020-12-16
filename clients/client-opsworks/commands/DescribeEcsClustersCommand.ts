import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { DescribeEcsClustersRequest, DescribeEcsClustersResult } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeEcsClustersCommand,
  serializeAws_json1_1DescribeEcsClustersCommand,
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

export type DescribeEcsClustersCommandInput = DescribeEcsClustersRequest;
export type DescribeEcsClustersCommandOutput = DescribeEcsClustersResult & __MetadataBearer;

/**
 * <p>Describes Amazon ECS clusters that are registered with a stack. If you specify only a stack ID,
 *     you can use the <code>MaxResults</code> and <code>NextToken</code> parameters to paginate the
 *     response. However, AWS OpsWorks Stacks currently supports only one cluster per layer, so the result
 *     set has a maximum of one element.</p>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or
 *       Manage permissions level for the stack or an attached policy that explicitly grants
 *       permission. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
 *         Permissions</a>.</p>
 *          <p>This call accepts only one resource-identifying parameter.</p>
 */
export class DescribeEcsClustersCommand extends $Command<
  DescribeEcsClustersCommandInput,
  DescribeEcsClustersCommandOutput,
  OpsWorksClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeEcsClustersCommandInput) {
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
  ): Handler<DescribeEcsClustersCommandInput, DescribeEcsClustersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OpsWorksClient";
    const commandName = "DescribeEcsClustersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeEcsClustersRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeEcsClustersResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeEcsClustersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeEcsClustersCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeEcsClustersCommandOutput> {
    return deserializeAws_json1_1DescribeEcsClustersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
