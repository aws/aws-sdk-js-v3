import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { StartImportLabelsTaskRunRequest, StartImportLabelsTaskRunResponse } from "../models/models_1";
import {
  deserializeAws_json1_1StartImportLabelsTaskRunCommand,
  serializeAws_json1_1StartImportLabelsTaskRunCommand,
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

export type StartImportLabelsTaskRunCommandInput = StartImportLabelsTaskRunRequest;
export type StartImportLabelsTaskRunCommandOutput = StartImportLabelsTaskRunResponse & __MetadataBearer;

/**
 * <p>Enables you to provide additional labels (examples of truth) to be used to teach the
 *       machine learning transform and improve its quality. This API operation is generally used as
 *       part of the active learning workflow that starts with the
 *         <code>StartMLLabelingSetGenerationTaskRun</code> call and that ultimately results in
 *       improving the quality of your machine learning transform. </p>
 *
 *          <p>After the <code>StartMLLabelingSetGenerationTaskRun</code> finishes, AWS Glue machine learning
 *       will have generated a series of questions for humans to answer. (Answering these questions is
 *       often called 'labeling' in the machine learning workflows). In the case of the
 *         <code>FindMatches</code> transform, these questions are of the form, “What is the correct
 *       way to group these rows together into groups composed entirely of matching records?” After the
 *       labeling process is finished, users upload their answers/labels with a call to
 *         <code>StartImportLabelsTaskRun</code>. After <code>StartImportLabelsTaskRun</code> finishes,
 *       all future runs of the machine learning transform use the new and improved labels and perform
 *       a higher-quality transformation.</p>
 *
 *          <p>By default, <code>StartMLLabelingSetGenerationTaskRun</code> continually learns from and
 *       combines all labels that you upload unless you set <code>Replace</code> to true. If you set
 *         <code>Replace</code> to true, <code>StartImportLabelsTaskRun</code> deletes and forgets all
 *       previously uploaded labels and learns only from the exact set that you upload. Replacing
 *       labels can be helpful if you realize that you previously uploaded incorrect labels, and you
 *       believe that they are having a negative effect on your transform quality.</p>
 *
 *          <p>You can check on the status of your task run by calling the <code>GetMLTaskRun</code>
 *       operation. </p>
 */
export class StartImportLabelsTaskRunCommand extends $Command<
  StartImportLabelsTaskRunCommandInput,
  StartImportLabelsTaskRunCommandOutput,
  GlueClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StartImportLabelsTaskRunCommandInput) {
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
  ): Handler<StartImportLabelsTaskRunCommandInput, StartImportLabelsTaskRunCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "StartImportLabelsTaskRunCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartImportLabelsTaskRunRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StartImportLabelsTaskRunResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartImportLabelsTaskRunCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StartImportLabelsTaskRunCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartImportLabelsTaskRunCommandOutput> {
    return deserializeAws_json1_1StartImportLabelsTaskRunCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
