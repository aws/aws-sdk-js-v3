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

import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import {
  StartTaskExecutionRequest,
  StartTaskExecutionRequestFilterSensitiveLog,
  StartTaskExecutionResponse,
  StartTaskExecutionResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1StartTaskExecutionCommand,
  serializeAws_json1_1StartTaskExecutionCommand,
} from "../protocols/Aws_json1_1";

export interface StartTaskExecutionCommandInput extends StartTaskExecutionRequest {}
export interface StartTaskExecutionCommandOutput extends StartTaskExecutionResponse, __MetadataBearer {}

/**
 * <p>Starts an DataSync task. For each task, you can only run one task execution at a time.</p>
 *          <p>There are several phases to a task execution. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/working-with-task-executions.html#understand-task-execution-statuses">Task execution statuses</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, StartTaskExecutionCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, StartTaskExecutionCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const command = new StartTaskExecutionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartTaskExecutionCommandInput} for command's `input` shape.
 * @see {@link StartTaskExecutionCommandOutput} for command's `response` shape.
 * @see {@link DataSyncClientResolvedConfig | config} for DataSyncClient's `config` shape.
 *
 */
export class StartTaskExecutionCommand extends $Command<
  StartTaskExecutionCommandInput,
  StartTaskExecutionCommandOutput,
  DataSyncClientResolvedConfig
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

  constructor(readonly input: StartTaskExecutionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DataSyncClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartTaskExecutionCommandInput, StartTaskExecutionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartTaskExecutionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataSyncClient";
    const commandName = "StartTaskExecutionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartTaskExecutionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: StartTaskExecutionResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartTaskExecutionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StartTaskExecutionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartTaskExecutionCommandOutput> {
    return deserializeAws_json1_1StartTaskExecutionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
