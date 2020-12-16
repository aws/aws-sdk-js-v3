import { CloudSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudSearchClient";
import { DescribeScalingParametersRequest, DescribeScalingParametersResponse } from "../models/models_0";
import {
  deserializeAws_queryDescribeScalingParametersCommand,
  serializeAws_queryDescribeScalingParametersCommand,
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

export type DescribeScalingParametersCommandInput = DescribeScalingParametersRequest;
export type DescribeScalingParametersCommandOutput = DescribeScalingParametersResponse & __MetadataBearer;

/**
 * <p>Gets the scaling parameters configured for a domain. A domain's scaling parameters specify the desired search instance type and replication count. For more information, see   <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-scaling-options.html" target="_blank">Configuring Scaling Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
 */
export class DescribeScalingParametersCommand extends $Command<
  DescribeScalingParametersCommandInput,
  DescribeScalingParametersCommandOutput,
  CloudSearchClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeScalingParametersCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudSearchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeScalingParametersCommandInput, DescribeScalingParametersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudSearchClient";
    const commandName = "DescribeScalingParametersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeScalingParametersRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeScalingParametersResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeScalingParametersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeScalingParametersCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeScalingParametersCommandOutput> {
    return deserializeAws_queryDescribeScalingParametersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
