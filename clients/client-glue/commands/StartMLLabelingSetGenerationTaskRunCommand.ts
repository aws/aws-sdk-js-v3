import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import {
  StartMLLabelingSetGenerationTaskRunRequest,
  StartMLLabelingSetGenerationTaskRunResponse,
} from "../models/models_1";
import {
  deserializeAws_json1_1StartMLLabelingSetGenerationTaskRunCommand,
  serializeAws_json1_1StartMLLabelingSetGenerationTaskRunCommand,
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

export type StartMLLabelingSetGenerationTaskRunCommandInput = StartMLLabelingSetGenerationTaskRunRequest;
export type StartMLLabelingSetGenerationTaskRunCommandOutput = StartMLLabelingSetGenerationTaskRunResponse &
  __MetadataBearer;

/**
 * <p>Starts the active learning workflow for your machine learning transform to improve the
 *       transform's quality by generating label sets and adding labels.</p>
 *
 * 	        <p>When the <code>StartMLLabelingSetGenerationTaskRun</code> finishes, AWS Glue will have
 *       generated a "labeling set" or a set of questions for humans to answer.</p>
 *
 *          <p>In the case of the <code>FindMatches</code> transform, these questions are of the form,
 *       “What is the correct way to group these rows together into groups composed entirely of
 *       matching records?” </p>
 *
 *          <p>After the labeling process is finished, you can upload your labels with a call to
 *         <code>StartImportLabelsTaskRun</code>. After <code>StartImportLabelsTaskRun</code> finishes,
 *       all future runs of the machine learning transform will use the new and improved labels and
 *       perform a higher-quality transformation.</p>
 */
export class StartMLLabelingSetGenerationTaskRunCommand extends $Command<
  StartMLLabelingSetGenerationTaskRunCommandInput,
  StartMLLabelingSetGenerationTaskRunCommandOutput,
  GlueClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StartMLLabelingSetGenerationTaskRunCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlueClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartMLLabelingSetGenerationTaskRunCommandInput, StartMLLabelingSetGenerationTaskRunCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "StartMLLabelingSetGenerationTaskRunCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartMLLabelingSetGenerationTaskRunRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StartMLLabelingSetGenerationTaskRunResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: StartMLLabelingSetGenerationTaskRunCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1StartMLLabelingSetGenerationTaskRunCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StartMLLabelingSetGenerationTaskRunCommandOutput> {
    return deserializeAws_json1_1StartMLLabelingSetGenerationTaskRunCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
