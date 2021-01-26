import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { DescribeModelVersionsRequest, DescribeModelVersionsResult } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeModelVersionsCommand,
  serializeAws_json1_1DescribeModelVersionsCommand,
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

export type DescribeModelVersionsCommandInput = DescribeModelVersionsRequest;
export type DescribeModelVersionsCommandOutput = DescribeModelVersionsResult & __MetadataBearer;

/**
 * <p>Gets all of the model versions for the specified model type or for the specified model type and model ID. You can also get details for a single, specified model version. </p>
 */
export class DescribeModelVersionsCommand extends $Command<
  DescribeModelVersionsCommandInput,
  DescribeModelVersionsCommandOutput,
  FraudDetectorClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeModelVersionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FraudDetectorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeModelVersionsCommandInput, DescribeModelVersionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FraudDetectorClient";
    const commandName = "DescribeModelVersionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeModelVersionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeModelVersionsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeModelVersionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeModelVersionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeModelVersionsCommandOutput> {
    return deserializeAws_json1_1DescribeModelVersionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
