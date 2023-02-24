// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import {
  StartMLLabelingSetGenerationTaskRunRequest,
  StartMLLabelingSetGenerationTaskRunRequestFilterSensitiveLog,
  StartMLLabelingSetGenerationTaskRunResponse,
  StartMLLabelingSetGenerationTaskRunResponseFilterSensitiveLog,
} from "../models/models_2";
import {
  deserializeAws_json1_1StartMLLabelingSetGenerationTaskRunCommand,
  serializeAws_json1_1StartMLLabelingSetGenerationTaskRunCommand,
} from "../protocols/Aws_json1_1";

export interface StartMLLabelingSetGenerationTaskRunCommandInput extends StartMLLabelingSetGenerationTaskRunRequest {}
export interface StartMLLabelingSetGenerationTaskRunCommandOutput
  extends StartMLLabelingSetGenerationTaskRunResponse,
    __MetadataBearer {}

/**
 * <p>Starts the active learning workflow for your machine learning transform to improve the
 *       transform's quality by generating label sets and adding labels.</p>
 *          <p>When the <code>StartMLLabelingSetGenerationTaskRun</code> finishes, Glue will have
 *       generated a "labeling set" or a set of questions for humans to answer.</p>
 *          <p>In the case of the <code>FindMatches</code> transform, these questions are of the form,
 *       “What is the correct way to group these rows together into groups composed entirely of
 *       matching records?” </p>
 *          <p>After the labeling process is finished, you can upload your labels with a call to
 *         <code>StartImportLabelsTaskRun</code>. After <code>StartImportLabelsTaskRun</code> finishes,
 *       all future runs of the machine learning transform will use the new and improved labels and
 *       perform a higher-quality transformation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, StartMLLabelingSetGenerationTaskRunCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, StartMLLabelingSetGenerationTaskRunCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new StartMLLabelingSetGenerationTaskRunCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartMLLabelingSetGenerationTaskRunCommandInput} for command's `input` shape.
 * @see {@link StartMLLabelingSetGenerationTaskRunCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 */
export class StartMLLabelingSetGenerationTaskRunCommand extends $Command<
  StartMLLabelingSetGenerationTaskRunCommandInput,
  StartMLLabelingSetGenerationTaskRunCommandOutput,
  GlueClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartMLLabelingSetGenerationTaskRunCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "StartMLLabelingSetGenerationTaskRunCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartMLLabelingSetGenerationTaskRunRequestFilterSensitiveLog,
      outputFilterSensitiveLog: StartMLLabelingSetGenerationTaskRunResponseFilterSensitiveLog,
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
