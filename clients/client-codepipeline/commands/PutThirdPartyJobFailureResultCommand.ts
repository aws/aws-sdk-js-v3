import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { PutThirdPartyJobFailureResultInput } from "../models/models_0";
import {
  deserializeAws_json1_1PutThirdPartyJobFailureResultCommand,
  serializeAws_json1_1PutThirdPartyJobFailureResultCommand,
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

export type PutThirdPartyJobFailureResultCommandInput = PutThirdPartyJobFailureResultInput;
export type PutThirdPartyJobFailureResultCommandOutput = __MetadataBearer;

/**
 * <p>Represents the failure of a third party job as returned to the pipeline by a job
 *             worker. Used for partner actions only.</p>
 */
export class PutThirdPartyJobFailureResultCommand extends $Command<
  PutThirdPartyJobFailureResultCommandInput,
  PutThirdPartyJobFailureResultCommandOutput,
  CodePipelineClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutThirdPartyJobFailureResultCommandInput) {
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
  ): Handler<PutThirdPartyJobFailureResultCommandInput, PutThirdPartyJobFailureResultCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodePipelineClient";
    const commandName = "PutThirdPartyJobFailureResultCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutThirdPartyJobFailureResultInput.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutThirdPartyJobFailureResultCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PutThirdPartyJobFailureResultCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutThirdPartyJobFailureResultCommandOutput> {
    return deserializeAws_json1_1PutThirdPartyJobFailureResultCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
