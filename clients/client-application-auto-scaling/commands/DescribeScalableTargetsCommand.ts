import {
  ApplicationAutoScalingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApplicationAutoScalingClient";
import { DescribeScalableTargetsRequest, DescribeScalableTargetsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeScalableTargetsCommand,
  serializeAws_json1_1DescribeScalableTargetsCommand,
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

export type DescribeScalableTargetsCommandInput = DescribeScalableTargetsRequest;
export type DescribeScalableTargetsCommandOutput = DescribeScalableTargetsResponse & __MetadataBearer;

/**
 * <p>Gets information about the scalable targets in the specified namespace.</p>
 *          <p>You can filter the results using <code>ResourceIds</code> and
 *             <code>ScalableDimension</code>.</p>
 */
export class DescribeScalableTargetsCommand extends $Command<
  DescribeScalableTargetsCommandInput,
  DescribeScalableTargetsCommandOutput,
  ApplicationAutoScalingClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeScalableTargetsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ApplicationAutoScalingClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeScalableTargetsCommandInput, DescribeScalableTargetsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ApplicationAutoScalingClient";
    const commandName = "DescribeScalableTargetsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeScalableTargetsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeScalableTargetsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeScalableTargetsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeScalableTargetsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeScalableTargetsCommandOutput> {
    return deserializeAws_json1_1DescribeScalableTargetsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
