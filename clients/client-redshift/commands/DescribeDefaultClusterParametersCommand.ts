import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { DescribeDefaultClusterParametersMessage, DescribeDefaultClusterParametersResult } from "../models/models_0";
import {
  deserializeAws_queryDescribeDefaultClusterParametersCommand,
  serializeAws_queryDescribeDefaultClusterParametersCommand,
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

export type DescribeDefaultClusterParametersCommandInput = DescribeDefaultClusterParametersMessage;
export type DescribeDefaultClusterParametersCommandOutput = DescribeDefaultClusterParametersResult & __MetadataBearer;

/**
 * <p>Returns a list of parameter settings for the specified parameter group
 *             family.</p>
 *         <p>
 * For more information about parameters and parameter groups, go to
 * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Amazon Redshift Parameter Groups</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
 */
export class DescribeDefaultClusterParametersCommand extends $Command<
  DescribeDefaultClusterParametersCommandInput,
  DescribeDefaultClusterParametersCommandOutput,
  RedshiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeDefaultClusterParametersCommandInput) {
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
  ): Handler<DescribeDefaultClusterParametersCommandInput, DescribeDefaultClusterParametersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "DescribeDefaultClusterParametersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeDefaultClusterParametersMessage.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeDefaultClusterParametersResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeDefaultClusterParametersCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryDescribeDefaultClusterParametersCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeDefaultClusterParametersCommandOutput> {
    return deserializeAws_queryDescribeDefaultClusterParametersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
