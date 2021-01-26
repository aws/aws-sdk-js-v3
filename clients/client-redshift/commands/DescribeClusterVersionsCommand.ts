import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { ClusterVersionsMessage, DescribeClusterVersionsMessage } from "../models/models_0";
import {
  deserializeAws_queryDescribeClusterVersionsCommand,
  serializeAws_queryDescribeClusterVersionsCommand,
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

export type DescribeClusterVersionsCommandInput = DescribeClusterVersionsMessage;
export type DescribeClusterVersionsCommandOutput = ClusterVersionsMessage & __MetadataBearer;

/**
 * <p>Returns descriptions of the available Amazon Redshift cluster versions. You can call this
 *             operation even before creating any clusters to learn more about the Amazon Redshift versions.
 *
 * For more information about managing clusters, go to
 * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
 */
export class DescribeClusterVersionsCommand extends $Command<
  DescribeClusterVersionsCommandInput,
  DescribeClusterVersionsCommandOutput,
  RedshiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeClusterVersionsCommandInput) {
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
  ): Handler<DescribeClusterVersionsCommandInput, DescribeClusterVersionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "DescribeClusterVersionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeClusterVersionsMessage.filterSensitiveLog,
      outputFilterSensitiveLog: ClusterVersionsMessage.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeClusterVersionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeClusterVersionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeClusterVersionsCommandOutput> {
    return deserializeAws_queryDescribeClusterVersionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
