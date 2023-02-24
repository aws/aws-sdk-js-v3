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
  CancelMLTaskRunRequest,
  CancelMLTaskRunRequestFilterSensitiveLog,
  CancelMLTaskRunResponse,
  CancelMLTaskRunResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CancelMLTaskRunCommand,
  serializeAws_json1_1CancelMLTaskRunCommand,
} from "../protocols/Aws_json1_1";

export interface CancelMLTaskRunCommandInput extends CancelMLTaskRunRequest {}
export interface CancelMLTaskRunCommandOutput extends CancelMLTaskRunResponse, __MetadataBearer {}

/**
 * <p>Cancels (stops) a task run. Machine learning task runs are asynchronous tasks that Glue runs on your behalf as part of various machine learning workflows. You can cancel a
 *       machine learning task run at any time by calling <code>CancelMLTaskRun</code> with a task
 *       run's parent transform's <code>TransformID</code> and the task run's <code>TaskRunId</code>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, CancelMLTaskRunCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, CancelMLTaskRunCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new CancelMLTaskRunCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelMLTaskRunCommandInput} for command's `input` shape.
 * @see {@link CancelMLTaskRunCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 */
export class CancelMLTaskRunCommand extends $Command<
  CancelMLTaskRunCommandInput,
  CancelMLTaskRunCommandOutput,
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CancelMLTaskRunCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "CancelMLTaskRunCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CancelMLTaskRunRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CancelMLTaskRunResponseFilterSensitiveLog,
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
