import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { DescribeInventoryDeletionsRequest, DescribeInventoryDeletionsResult } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeInventoryDeletionsCommand,
  serializeAws_json1_1DescribeInventoryDeletionsCommand,
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

export type DescribeInventoryDeletionsCommandInput = DescribeInventoryDeletionsRequest;
export type DescribeInventoryDeletionsCommandOutput = DescribeInventoryDeletionsResult & __MetadataBearer;

/**
 * <p>Describes a specific delete inventory operation.</p>
 */
export class DescribeInventoryDeletionsCommand extends $Command<
  DescribeInventoryDeletionsCommandInput,
  DescribeInventoryDeletionsCommandOutput,
  SSMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeInventoryDeletionsCommandInput) {
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
  ): Handler<DescribeInventoryDeletionsCommandInput, DescribeInventoryDeletionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "DescribeInventoryDeletionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeInventoryDeletionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeInventoryDeletionsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeInventoryDeletionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeInventoryDeletionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeInventoryDeletionsCommandOutput> {
    return deserializeAws_json1_1DescribeInventoryDeletionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
