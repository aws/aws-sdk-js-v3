import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import {
  DescribeInstanceAssociationsStatusRequest,
  DescribeInstanceAssociationsStatusResult,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeInstanceAssociationsStatusCommand,
  serializeAws_json1_1DescribeInstanceAssociationsStatusCommand,
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

export type DescribeInstanceAssociationsStatusCommandInput = DescribeInstanceAssociationsStatusRequest;
export type DescribeInstanceAssociationsStatusCommandOutput = DescribeInstanceAssociationsStatusResult &
  __MetadataBearer;

/**
 * <p>The status of the associations for the instance(s).</p>
 */
export class DescribeInstanceAssociationsStatusCommand extends $Command<
  DescribeInstanceAssociationsStatusCommandInput,
  DescribeInstanceAssociationsStatusCommandOutput,
  SSMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeInstanceAssociationsStatusCommandInput) {
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
  ): Handler<DescribeInstanceAssociationsStatusCommandInput, DescribeInstanceAssociationsStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "DescribeInstanceAssociationsStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeInstanceAssociationsStatusRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeInstanceAssociationsStatusResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeInstanceAssociationsStatusCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeInstanceAssociationsStatusCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeInstanceAssociationsStatusCommandOutput> {
    return deserializeAws_json1_1DescribeInstanceAssociationsStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
