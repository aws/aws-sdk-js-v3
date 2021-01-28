import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { ClusterParameterGroupDetails, DescribeClusterParametersMessage } from "../models/models_0";
import {
  deserializeAws_queryDescribeClusterParametersCommand,
  serializeAws_queryDescribeClusterParametersCommand,
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

export type DescribeClusterParametersCommandInput = DescribeClusterParametersMessage;
export type DescribeClusterParametersCommandOutput = ClusterParameterGroupDetails & __MetadataBearer;

/**
 * <p>Returns a detailed list of parameters contained within the specified Amazon Redshift
 *             parameter group. For each parameter the response includes information such as parameter
 *             name, description, data type, value, whether the parameter value is modifiable, and so
 *             on.</p>
 *         <p>You can specify <i>source</i> filter to retrieve parameters of only
 *             specific type. For example, to retrieve parameters that were modified by a user action
 *             such as from <a>ModifyClusterParameterGroup</a>, you can specify
 *                 <i>source</i> equal to <i>user</i>.</p>
 *         <p>
 * For more information about parameters and parameter groups, go to
 * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Amazon Redshift Parameter Groups</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
 */
export class DescribeClusterParametersCommand extends $Command<
  DescribeClusterParametersCommandInput,
  DescribeClusterParametersCommandOutput,
  RedshiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeClusterParametersCommandInput) {
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
  ): Handler<DescribeClusterParametersCommandInput, DescribeClusterParametersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "DescribeClusterParametersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeClusterParametersMessage.filterSensitiveLog,
      outputFilterSensitiveLog: ClusterParameterGroupDetails.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeClusterParametersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeClusterParametersCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeClusterParametersCommandOutput> {
    return deserializeAws_queryDescribeClusterParametersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
