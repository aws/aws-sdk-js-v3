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

import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import {
  GetTaskProtectionRequest,
  GetTaskProtectionRequestFilterSensitiveLog,
  GetTaskProtectionResponse,
  GetTaskProtectionResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1GetTaskProtectionCommand,
  serializeAws_json1_1GetTaskProtectionCommand,
} from "../protocols/Aws_json1_1";

/**
 * The input for {@link GetTaskProtectionCommand}.
 */
export interface GetTaskProtectionCommandInput extends GetTaskProtectionRequest {}
/**
 * The output of {@link GetTaskProtectionCommand}.
 */
export interface GetTaskProtectionCommandOutput extends GetTaskProtectionResponse, __MetadataBearer {}

/**
 * <p>Retrieves the protection status of tasks in an Amazon ECS service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, GetTaskProtectionCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, GetTaskProtectionCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const command = new GetTaskProtectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetTaskProtectionCommandInput} for command's `input` shape.
 * @see {@link GetTaskProtectionCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for ECSClient's `config` shape.
 *
 *
 * @example To get the protection status of a task
 * ```javascript
 * // In this example, we get the protection status for a single task.
 * const input = {
 *   "cluster": "test-task-protection",
 *   "tasks": [
 *     "b8b1cf532d0e46ba8d44a40d1de16772"
 *   ]
 * };
 * const command = new GetTaskProtectionCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "failures": [],
 *   "protectedTasks": [
 *     {
 *       "expirationDate": "2022-11-02T06:56:32.553Z",
 *       "protectionEnabled": true,
 *       "taskArn": "arn:aws:ecs:us-west-2:012345678910:task/b8b1cf532d0e46ba8d44a40d1de16772"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 */
export class GetTaskProtectionCommand extends $Command<
  GetTaskProtectionCommandInput,
  GetTaskProtectionCommandOutput,
  ECSClientResolvedConfig
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

  constructor(readonly input: GetTaskProtectionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ECSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetTaskProtectionCommandInput, GetTaskProtectionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetTaskProtectionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECSClient";
    const commandName = "GetTaskProtectionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetTaskProtectionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetTaskProtectionResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetTaskProtectionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetTaskProtectionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetTaskProtectionCommandOutput> {
    return deserializeAws_json1_1GetTaskProtectionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
