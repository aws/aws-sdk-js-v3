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
import { StartMLEvaluationTaskRunRequest, StartMLEvaluationTaskRunResponse } from "../models/models_2";
import {
  deserializeAws_json1_1StartMLEvaluationTaskRunCommand,
  serializeAws_json1_1StartMLEvaluationTaskRunCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link StartMLEvaluationTaskRunCommand}.
 */
export interface StartMLEvaluationTaskRunCommandInput extends StartMLEvaluationTaskRunRequest {}
/**
 * @public
 *
 * The output of {@link StartMLEvaluationTaskRunCommand}.
 */
export interface StartMLEvaluationTaskRunCommandOutput extends StartMLEvaluationTaskRunResponse, __MetadataBearer {}

/**
 * @public
 * <p>Starts a task to estimate the quality of the transform. </p>
 *          <p>When you provide label sets as examples of truth, Glue machine learning uses some of
 *       those examples to learn from them. The rest of the labels are used as a test to estimate
 *       quality.</p>
 *          <p>Returns a unique identifier for the run. You can call <code>GetMLTaskRun</code> to get more
 *       information about the stats of the <code>EvaluationTaskRun</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, StartMLEvaluationTaskRunCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, StartMLEvaluationTaskRunCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new StartMLEvaluationTaskRunCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param StartMLEvaluationTaskRunCommandInput - {@link StartMLEvaluationTaskRunCommandInput}
 * @returns {@link StartMLEvaluationTaskRunCommandOutput}
 * @see {@link StartMLEvaluationTaskRunCommandInput} for command's `input` shape.
 * @see {@link StartMLEvaluationTaskRunCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link ConcurrentRunsExceededException} (client fault)
 *  <p>Too many jobs are being run concurrently.</p>
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link MLTransformNotReadyException} (client fault)
 *  <p>The machine learning transform is not ready to run.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 *
 */
export class StartMLEvaluationTaskRunCommand extends $Command<
  StartMLEvaluationTaskRunCommandInput,
  StartMLEvaluationTaskRunCommandOutput,
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

  /**
   * @public
   */
  constructor(readonly input: StartMLEvaluationTaskRunCommandInput) {
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
  ): Handler<StartMLEvaluationTaskRunCommandInput, StartMLEvaluationTaskRunCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartMLEvaluationTaskRunCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "StartMLEvaluationTaskRunCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: StartMLEvaluationTaskRunCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StartMLEvaluationTaskRunCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartMLEvaluationTaskRunCommandOutput> {
    return deserializeAws_json1_1StartMLEvaluationTaskRunCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
