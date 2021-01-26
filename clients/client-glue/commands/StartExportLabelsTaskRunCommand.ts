import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { StartExportLabelsTaskRunRequest, StartExportLabelsTaskRunResponse } from "../models/models_1";
import {
  deserializeAws_json1_1StartExportLabelsTaskRunCommand,
  serializeAws_json1_1StartExportLabelsTaskRunCommand,
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

export type StartExportLabelsTaskRunCommandInput = StartExportLabelsTaskRunRequest;
export type StartExportLabelsTaskRunCommandOutput = StartExportLabelsTaskRunResponse & __MetadataBearer;

/**
 * <p>Begins an asynchronous task to export all labeled data for a particular transform. This
 *       task is the only label-related API call that is not part of the typical active learning
 *       workflow. You typically use <code>StartExportLabelsTaskRun</code> when you want to work with
 *       all of your existing labels at the same time, such as when you want to remove or change labels
 *       that were previously submitted as truth. This API operation accepts the
 *         <code>TransformId</code> whose labels you want to export and an Amazon Simple Storage
 *       Service (Amazon S3) path to export the labels to. The operation returns a
 *         <code>TaskRunId</code>. You can check on the status of your task run by calling the
 *         <code>GetMLTaskRun</code> API.</p>
 */
export class StartExportLabelsTaskRunCommand extends $Command<
  StartExportLabelsTaskRunCommandInput,
  StartExportLabelsTaskRunCommandOutput,
  GlueClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StartExportLabelsTaskRunCommandInput) {
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
  ): Handler<StartExportLabelsTaskRunCommandInput, StartExportLabelsTaskRunCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "StartExportLabelsTaskRunCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartExportLabelsTaskRunRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StartExportLabelsTaskRunResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartExportLabelsTaskRunCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StartExportLabelsTaskRunCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartExportLabelsTaskRunCommandOutput> {
    return deserializeAws_json1_1StartExportLabelsTaskRunCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
