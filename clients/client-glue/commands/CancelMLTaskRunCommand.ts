import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { CancelMLTaskRunRequest, CancelMLTaskRunResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CancelMLTaskRunCommand,
  serializeAws_json1_1CancelMLTaskRunCommand,
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

export type CancelMLTaskRunCommandInput = CancelMLTaskRunRequest;
export type CancelMLTaskRunCommandOutput = CancelMLTaskRunResponse & __MetadataBearer;

/**
 * <p>Cancels (stops) a task run. Machine learning task runs are asynchronous tasks that AWS
 *       Glue runs on your behalf as part of various machine learning workflows. You can cancel a
 *       machine learning task run at any time by calling <code>CancelMLTaskRun</code> with a task
 *       run's parent transform's <code>TransformID</code> and the task run's <code>TaskRunId</code>. </p>
 */
export class CancelMLTaskRunCommand extends $Command<
  CancelMLTaskRunCommandInput,
  CancelMLTaskRunCommandOutput,
  GlueClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CancelMLTaskRunCommandInput) {
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
  ): Handler<CancelMLTaskRunCommandInput, CancelMLTaskRunCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "CancelMLTaskRunCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CancelMLTaskRunRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CancelMLTaskRunResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CancelMLTaskRunCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CancelMLTaskRunCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CancelMLTaskRunCommandOutput> {
    return deserializeAws_json1_1CancelMLTaskRunCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
