import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DescribeFeatureGroupRequest, DescribeFeatureGroupResponse } from "../models/models_1";
import {
  deserializeAws_json1_1DescribeFeatureGroupCommand,
  serializeAws_json1_1DescribeFeatureGroupCommand,
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

export type DescribeFeatureGroupCommandInput = DescribeFeatureGroupRequest;
export type DescribeFeatureGroupCommandOutput = DescribeFeatureGroupResponse & __MetadataBearer;

/**
 * <p>Use this operation to describe a <code>FeatureGroup</code>. The response includes
 *          information on the creation time, <code>FeatureGroup</code> name, the unique identifier for
 *          each <code>FeatureGroup</code>, and more.</p>
 */
export class DescribeFeatureGroupCommand extends $Command<
  DescribeFeatureGroupCommandInput,
  DescribeFeatureGroupCommandOutput,
  SageMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeFeatureGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeFeatureGroupCommandInput, DescribeFeatureGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "DescribeFeatureGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeFeatureGroupRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeFeatureGroupResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeFeatureGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeFeatureGroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeFeatureGroupCommandOutput> {
    return deserializeAws_json1_1DescribeFeatureGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
