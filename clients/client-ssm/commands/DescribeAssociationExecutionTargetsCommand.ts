import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import {
  DescribeAssociationExecutionTargetsRequest,
  DescribeAssociationExecutionTargetsResult,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeAssociationExecutionTargetsCommand,
  serializeAws_json1_1DescribeAssociationExecutionTargetsCommand,
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

export type DescribeAssociationExecutionTargetsCommandInput = DescribeAssociationExecutionTargetsRequest;
export type DescribeAssociationExecutionTargetsCommandOutput = DescribeAssociationExecutionTargetsResult &
  __MetadataBearer;

/**
 * <p>Use this API action to view information about a specific execution of a specific
 *    association.</p>
 */
export class DescribeAssociationExecutionTargetsCommand extends $Command<
  DescribeAssociationExecutionTargetsCommandInput,
  DescribeAssociationExecutionTargetsCommandOutput,
  SSMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeAssociationExecutionTargetsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeAssociationExecutionTargetsCommandInput, DescribeAssociationExecutionTargetsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "DescribeAssociationExecutionTargetsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeAssociationExecutionTargetsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeAssociationExecutionTargetsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeAssociationExecutionTargetsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeAssociationExecutionTargetsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeAssociationExecutionTargetsCommandOutput> {
    return deserializeAws_json1_1DescribeAssociationExecutionTargetsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
