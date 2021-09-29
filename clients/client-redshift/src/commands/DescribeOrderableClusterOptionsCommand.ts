import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { DescribeOrderableClusterOptionsMessage, OrderableClusterOptionsMessage } from "../models/models_1";
import {
  deserializeAws_queryDescribeOrderableClusterOptionsCommand,
  serializeAws_queryDescribeOrderableClusterOptionsCommand,
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

export interface DescribeOrderableClusterOptionsCommandInput extends DescribeOrderableClusterOptionsMessage {}
export interface DescribeOrderableClusterOptionsCommandOutput
  extends OrderableClusterOptionsMessage,
    __MetadataBearer {}

/**
 * <p>Returns a list of orderable cluster options. Before you create a new cluster you
 *             can use this operation to find what options are available, such as the EC2 Availability
 *             Zones (AZ) in the specific Amazon Web Services Region that you can specify, and the node types you can
 *             request. The node types differ by available storage, memory, CPU and price. With the
 *             cost involved you might want to obtain a list of cluster options in the specific region
 *             and specify values when creating a cluster.
 * For more information about managing clusters, go to
 * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DescribeOrderableClusterOptionsCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DescribeOrderableClusterOptionsCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new DescribeOrderableClusterOptionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeOrderableClusterOptionsCommandInput} for command's `input` shape.
 * @see {@link DescribeOrderableClusterOptionsCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeOrderableClusterOptionsCommand extends $Command<
  DescribeOrderableClusterOptionsCommandInput,
  DescribeOrderableClusterOptionsCommandOutput,
  RedshiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeOrderableClusterOptionsCommandInput) {
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
  ): Handler<DescribeOrderableClusterOptionsCommandInput, DescribeOrderableClusterOptionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "DescribeOrderableClusterOptionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeOrderableClusterOptionsMessage.filterSensitiveLog,
      outputFilterSensitiveLog: OrderableClusterOptionsMessage.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeOrderableClusterOptionsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryDescribeOrderableClusterOptionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeOrderableClusterOptionsCommandOutput> {
    return deserializeAws_queryDescribeOrderableClusterOptionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
