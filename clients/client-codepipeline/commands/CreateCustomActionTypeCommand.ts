import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { CreateCustomActionTypeInput, CreateCustomActionTypeOutput } from "../models/models_0";
import {
  deserializeAws_json1_1CreateCustomActionTypeCommand,
  serializeAws_json1_1CreateCustomActionTypeCommand,
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

export type CreateCustomActionTypeCommandInput = CreateCustomActionTypeInput;
export type CreateCustomActionTypeCommandOutput = CreateCustomActionTypeOutput & __MetadataBearer;

/**
 * <p>Creates a new custom action that can be used in all pipelines associated with the
 *             AWS account. Only used for custom actions.</p>
 */
export class CreateCustomActionTypeCommand extends $Command<
  CreateCustomActionTypeCommandInput,
  CreateCustomActionTypeCommandOutput,
  CodePipelineClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateCustomActionTypeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodePipelineClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateCustomActionTypeCommandInput, CreateCustomActionTypeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodePipelineClient";
    const commandName = "CreateCustomActionTypeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateCustomActionTypeInput.filterSensitiveLog,
      outputFilterSensitiveLog: CreateCustomActionTypeOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateCustomActionTypeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateCustomActionTypeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateCustomActionTypeCommandOutput> {
    return deserializeAws_json1_1CreateCustomActionTypeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
