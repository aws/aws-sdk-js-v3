import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DescribeModelBiasJobDefinitionRequest, DescribeModelBiasJobDefinitionResponse } from "../models/models_1";
import {
  deserializeAws_json1_1DescribeModelBiasJobDefinitionCommand,
  serializeAws_json1_1DescribeModelBiasJobDefinitionCommand,
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

export type DescribeModelBiasJobDefinitionCommandInput = DescribeModelBiasJobDefinitionRequest;
export type DescribeModelBiasJobDefinitionCommandOutput = DescribeModelBiasJobDefinitionResponse & __MetadataBearer;

/**
 * <p>Returns a description of a model bias job definition.</p>
 */
export class DescribeModelBiasJobDefinitionCommand extends $Command<
  DescribeModelBiasJobDefinitionCommandInput,
  DescribeModelBiasJobDefinitionCommandOutput,
  SageMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeModelBiasJobDefinitionCommandInput) {
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
  ): Handler<DescribeModelBiasJobDefinitionCommandInput, DescribeModelBiasJobDefinitionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "DescribeModelBiasJobDefinitionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeModelBiasJobDefinitionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeModelBiasJobDefinitionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeModelBiasJobDefinitionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeModelBiasJobDefinitionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeModelBiasJobDefinitionCommandOutput> {
    return deserializeAws_json1_1DescribeModelBiasJobDefinitionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
