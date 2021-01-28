import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { ClusterSubnetGroupMessage, DescribeClusterSubnetGroupsMessage } from "../models/models_0";
import {
  deserializeAws_queryDescribeClusterSubnetGroupsCommand,
  serializeAws_queryDescribeClusterSubnetGroupsCommand,
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

export type DescribeClusterSubnetGroupsCommandInput = DescribeClusterSubnetGroupsMessage;
export type DescribeClusterSubnetGroupsCommandOutput = ClusterSubnetGroupMessage & __MetadataBearer;

/**
 * <p>Returns one or more cluster subnet group objects, which contain metadata about your
 *             cluster subnet groups. By default, this operation returns information about all cluster
 *             subnet groups that are defined in you AWS account.</p>
 *         <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns
 *             all subnet groups that match any combination of the specified keys and values. For
 *             example, if you have <code>owner</code> and <code>environment</code> for tag keys, and
 *                 <code>admin</code> and <code>test</code> for tag values, all subnet groups that have
 *             any combination of those values are returned.</p>
 *         <p>If both tag keys and values are omitted from the request, subnet groups are
 *             returned regardless of whether they have tag keys or values associated with
 *             them.</p>
 */
export class DescribeClusterSubnetGroupsCommand extends $Command<
  DescribeClusterSubnetGroupsCommandInput,
  DescribeClusterSubnetGroupsCommandOutput,
  RedshiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeClusterSubnetGroupsCommandInput) {
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
  ): Handler<DescribeClusterSubnetGroupsCommandInput, DescribeClusterSubnetGroupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "DescribeClusterSubnetGroupsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeClusterSubnetGroupsMessage.filterSensitiveLog,
      outputFilterSensitiveLog: ClusterSubnetGroupMessage.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeClusterSubnetGroupsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeClusterSubnetGroupsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeClusterSubnetGroupsCommandOutput> {
    return deserializeAws_queryDescribeClusterSubnetGroupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
