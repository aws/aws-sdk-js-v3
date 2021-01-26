import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { DisableStageTransitionInput } from "../models/models_0";
import {
  deserializeAws_json1_1DisableStageTransitionCommand,
  serializeAws_json1_1DisableStageTransitionCommand,
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

export type DisableStageTransitionCommandInput = DisableStageTransitionInput;
export type DisableStageTransitionCommandOutput = __MetadataBearer;

/**
 * <p>Prevents artifacts in a pipeline from transitioning to the next stage in the
 *             pipeline.</p>
 */
export class DisableStageTransitionCommand extends $Command<
  DisableStageTransitionCommandInput,
  DisableStageTransitionCommandOutput,
  CodePipelineClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DisableStageTransitionCommandInput) {
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
  ): Handler<DisableStageTransitionCommandInput, DisableStageTransitionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodePipelineClient";
    const commandName = "DisableStageTransitionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisableStageTransitionInput.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DisableStageTransitionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DisableStageTransitionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DisableStageTransitionCommandOutput> {
    return deserializeAws_json1_1DisableStageTransitionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
