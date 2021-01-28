import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { DescribeConformancePackStatusRequest, DescribeConformancePackStatusResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeConformancePackStatusCommand,
  serializeAws_json1_1DescribeConformancePackStatusCommand,
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

export type DescribeConformancePackStatusCommandInput = DescribeConformancePackStatusRequest;
export type DescribeConformancePackStatusCommandOutput = DescribeConformancePackStatusResponse & __MetadataBearer;

/**
 * <p>Provides one or more conformance packs deployment status.</p>
 * 		       <note>
 *             <p>If there are no conformance packs then you will see an empty result.</p>
 *          </note>
 */
export class DescribeConformancePackStatusCommand extends $Command<
  DescribeConformancePackStatusCommandInput,
  DescribeConformancePackStatusCommandOutput,
  ConfigServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeConformancePackStatusCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConfigServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeConformancePackStatusCommandInput, DescribeConformancePackStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConfigServiceClient";
    const commandName = "DescribeConformancePackStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeConformancePackStatusRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeConformancePackStatusResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeConformancePackStatusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeConformancePackStatusCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeConformancePackStatusCommandOutput> {
    return deserializeAws_json1_1DescribeConformancePackStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
