import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { ClusterSecurityGroupMessage, DescribeClusterSecurityGroupsMessage } from "../models/models_0";
import {
  deserializeAws_queryDescribeClusterSecurityGroupsCommand,
  serializeAws_queryDescribeClusterSecurityGroupsCommand,
} from "../protocols/Aws_query";
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

export type DescribeClusterSecurityGroupsCommandInput = DescribeClusterSecurityGroupsMessage;
export type DescribeClusterSecurityGroupsCommandOutput = ClusterSecurityGroupMessage & __MetadataBearer;

/**
 * <p>Returns information about Amazon Redshift security groups. If the name of a security
 *             group is specified, the response will contain only information about only that security
 *             group.</p>
 *         <p>
 * For information about managing security groups, go to
 * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html">Amazon Redshift Cluster Security Groups</a> in the
 * <i>Amazon Redshift Cluster Management Guide</i>.</p>
 *         <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns
 *             all security groups that match any combination of the specified keys and values. For
 *             example, if you have <code>owner</code> and <code>environment</code> for tag keys, and
 *                 <code>admin</code> and <code>test</code> for tag values, all security groups that
 *             have any combination of those values are returned.</p>
 *         <p>If both tag keys and values are omitted from the request, security groups are
 *             returned regardless of whether they have tag keys or values associated with
 *             them.</p>
 */
export class DescribeClusterSecurityGroupsCommand extends $Command<
  DescribeClusterSecurityGroupsCommandInput,
  DescribeClusterSecurityGroupsCommandOutput,
  RedshiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeClusterSecurityGroupsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RedshiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeClusterSecurityGroupsCommandInput, DescribeClusterSecurityGroupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "DescribeClusterSecurityGroupsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeClusterSecurityGroupsMessage.filterSensitiveLog,
      outputFilterSensitiveLog: ClusterSecurityGroupMessage.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeClusterSecurityGroupsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeClusterSecurityGroupsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeClusterSecurityGroupsCommandOutput> {
    return deserializeAws_queryDescribeClusterSecurityGroupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
