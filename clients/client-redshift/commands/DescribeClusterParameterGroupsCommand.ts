import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { ClusterParameterGroupsMessage, DescribeClusterParameterGroupsMessage } from "../models/models_0";
import {
  deserializeAws_queryDescribeClusterParameterGroupsCommand,
  serializeAws_queryDescribeClusterParameterGroupsCommand,
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

export type DescribeClusterParameterGroupsCommandInput = DescribeClusterParameterGroupsMessage;
export type DescribeClusterParameterGroupsCommandOutput = ClusterParameterGroupsMessage & __MetadataBearer;

/**
 * <p>Returns a list of Amazon Redshift parameter groups, including parameter groups you
 *             created and the default parameter group. For each parameter group, the response includes
 *             the parameter group name, description, and parameter group family name. You can
 *             optionally specify a name to retrieve the description of a specific parameter
 *             group.</p>
 *         <p>
 * For more information about parameters and parameter groups, go to
 * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Amazon Redshift Parameter Groups</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
 *         <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns
 *             all parameter groups that match any combination of the specified keys and values. For
 *             example, if you have <code>owner</code> and <code>environment</code> for tag keys, and
 *                 <code>admin</code> and <code>test</code> for tag values, all parameter groups that
 *             have any combination of those values are returned.</p>
 *         <p>If both tag keys and values are omitted from the request, parameter groups are
 *             returned regardless of whether they have tag keys or values associated with
 *             them.</p>
 */
export class DescribeClusterParameterGroupsCommand extends $Command<
  DescribeClusterParameterGroupsCommandInput,
  DescribeClusterParameterGroupsCommandOutput,
  RedshiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeClusterParameterGroupsCommandInput) {
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
  ): Handler<DescribeClusterParameterGroupsCommandInput, DescribeClusterParameterGroupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "DescribeClusterParameterGroupsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeClusterParameterGroupsMessage.filterSensitiveLog,
      outputFilterSensitiveLog: ClusterParameterGroupsMessage.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeClusterParameterGroupsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryDescribeClusterParameterGroupsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeClusterParameterGroupsCommandOutput> {
    return deserializeAws_queryDescribeClusterParameterGroupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
