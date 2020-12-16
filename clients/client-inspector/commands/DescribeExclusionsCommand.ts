import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import { DescribeExclusionsRequest, DescribeExclusionsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeExclusionsCommand,
  serializeAws_json1_1DescribeExclusionsCommand,
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

export type DescribeExclusionsCommandInput = DescribeExclusionsRequest;
export type DescribeExclusionsCommandOutput = DescribeExclusionsResponse & __MetadataBearer;

/**
 * <p>Describes the exclusions that are specified by the exclusions' ARNs.</p>
 */
export class DescribeExclusionsCommand extends $Command<
  DescribeExclusionsCommandInput,
  DescribeExclusionsCommandOutput,
  InspectorClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeExclusionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: InspectorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeExclusionsCommandInput, DescribeExclusionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "InspectorClient";
    const commandName = "DescribeExclusionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeExclusionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeExclusionsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeExclusionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeExclusionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeExclusionsCommandOutput> {
    return deserializeAws_json1_1DescribeExclusionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
