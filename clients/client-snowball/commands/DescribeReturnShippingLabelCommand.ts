import { ServiceInputTypes, ServiceOutputTypes, SnowballClientResolvedConfig } from "../SnowballClient";
import { DescribeReturnShippingLabelRequest, DescribeReturnShippingLabelResult } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeReturnShippingLabelCommand,
  serializeAws_json1_1DescribeReturnShippingLabelCommand,
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

export type DescribeReturnShippingLabelCommandInput = DescribeReturnShippingLabelRequest;
export type DescribeReturnShippingLabelCommandOutput = DescribeReturnShippingLabelResult & __MetadataBearer;

/**
 * <p>Information on the shipping label of a Snow device that is being returned to AWS.</p>
 */
export class DescribeReturnShippingLabelCommand extends $Command<
  DescribeReturnShippingLabelCommandInput,
  DescribeReturnShippingLabelCommandOutput,
  SnowballClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeReturnShippingLabelCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SnowballClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeReturnShippingLabelCommandInput, DescribeReturnShippingLabelCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SnowballClient";
    const commandName = "DescribeReturnShippingLabelCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeReturnShippingLabelRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeReturnShippingLabelResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeReturnShippingLabelCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeReturnShippingLabelCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeReturnShippingLabelCommandOutput> {
    return deserializeAws_json1_1DescribeReturnShippingLabelCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
