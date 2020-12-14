import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { ClustersMessage, DescribeClustersMessage } from "../models/models_0";
import {
  deserializeAws_queryDescribeClustersCommand,
  serializeAws_queryDescribeClustersCommand,
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

export type DescribeClustersCommandInput = DescribeClustersMessage;
export type DescribeClustersCommandOutput = ClustersMessage & __MetadataBearer;

/**
 * <p>Returns properties of provisioned clusters including general cluster properties,
 *             cluster database properties, maintenance and backup properties, and security and access
 *             properties. This operation supports pagination.
 * For more information about managing clusters, go to
 * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
 *         <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns
 *             all clusters that match any combination of the specified keys and values. For example,
 *             if you have <code>owner</code> and <code>environment</code> for tag keys, and
 *                 <code>admin</code> and <code>test</code> for tag values, all clusters that have any
 *             combination of those values are returned.</p>
 *         <p>If both tag keys and values are omitted from the request, clusters are returned
 *             regardless of whether they have tag keys or values associated with them.</p>
 */
export class DescribeClustersCommand extends $Command<
  DescribeClustersCommandInput,
  DescribeClustersCommandOutput,
  RedshiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeClustersCommandInput) {
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
  ): Handler<DescribeClustersCommandInput, DescribeClustersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "DescribeClustersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeClustersMessage.filterSensitiveLog,
      outputFilterSensitiveLog: ClustersMessage.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeClustersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeClustersCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeClustersCommandOutput> {
    return deserializeAws_queryDescribeClustersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
