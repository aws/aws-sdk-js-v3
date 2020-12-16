import { ElasticInferenceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticInferenceClient";
import { DescribeAcceleratorsRequest, DescribeAcceleratorsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeAcceleratorsCommand,
  serializeAws_restJson1DescribeAcceleratorsCommand,
} from "../protocols/Aws_restJson1";
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

export type DescribeAcceleratorsCommandInput = DescribeAcceleratorsRequest;
export type DescribeAcceleratorsCommandOutput = DescribeAcceleratorsResponse & __MetadataBearer;

/**
 * <p>
 *             Describes information over a provided set of accelerators belonging to an account.
 *         </p>
 */
export class DescribeAcceleratorsCommand extends $Command<
  DescribeAcceleratorsCommandInput,
  DescribeAcceleratorsCommandOutput,
  ElasticInferenceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeAcceleratorsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElasticInferenceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeAcceleratorsCommandInput, DescribeAcceleratorsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticInferenceClient";
    const commandName = "DescribeAcceleratorsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeAcceleratorsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeAcceleratorsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeAcceleratorsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeAcceleratorsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeAcceleratorsCommandOutput> {
    return deserializeAws_restJson1DescribeAcceleratorsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
