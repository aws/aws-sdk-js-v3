import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DescribeHumanTaskUiRequest, DescribeHumanTaskUiResponse } from "../models/models_1";
import {
  deserializeAws_json1_1DescribeHumanTaskUiCommand,
  serializeAws_json1_1DescribeHumanTaskUiCommand,
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

export type DescribeHumanTaskUiCommandInput = DescribeHumanTaskUiRequest;
export type DescribeHumanTaskUiCommandOutput = DescribeHumanTaskUiResponse & __MetadataBearer;

/**
 * <p>Returns information about the requested human task user interface (worker task template).</p>
 */
export class DescribeHumanTaskUiCommand extends $Command<
  DescribeHumanTaskUiCommandInput,
  DescribeHumanTaskUiCommandOutput,
  SageMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeHumanTaskUiCommandInput) {
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
  ): Handler<DescribeHumanTaskUiCommandInput, DescribeHumanTaskUiCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "DescribeHumanTaskUiCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeHumanTaskUiRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeHumanTaskUiResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeHumanTaskUiCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeHumanTaskUiCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeHumanTaskUiCommandOutput> {
    return deserializeAws_json1_1DescribeHumanTaskUiCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
