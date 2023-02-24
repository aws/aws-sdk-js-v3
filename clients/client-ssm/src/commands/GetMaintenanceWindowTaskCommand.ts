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

import {
  GetMaintenanceWindowTaskRequest,
  GetMaintenanceWindowTaskRequestFilterSensitiveLog,
  GetMaintenanceWindowTaskResult,
  GetMaintenanceWindowTaskResultFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_json1_1GetMaintenanceWindowTaskCommand,
  serializeAws_json1_1GetMaintenanceWindowTaskCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

export interface GetMaintenanceWindowTaskCommandInput extends GetMaintenanceWindowTaskRequest {}
export interface GetMaintenanceWindowTaskCommandOutput extends GetMaintenanceWindowTaskResult, __MetadataBearer {}

/**
 * <p>Retrieves the details of a maintenance window task.</p>
 *          <note>
 *             <p>For maintenance window tasks without a specified target, you can't supply values for
 *      <code>--max-errors</code> and <code>--max-concurrency</code>. Instead, the system inserts a
 *     placeholder value of <code>1</code>, which may be reported in the response to this command.
 *     These values don't affect the running of your task and can be ignored.</p>
 *          </note>
 *          <p>To retrieve a list of tasks in a maintenance window, instead use the <a>DescribeMaintenanceWindowTasks</a> command.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, GetMaintenanceWindowTaskCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, GetMaintenanceWindowTaskCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new GetMaintenanceWindowTaskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetMaintenanceWindowTaskCommandInput} for command's `input` shape.
 * @see {@link GetMaintenanceWindowTaskCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 */
export class GetMaintenanceWindowTaskCommand extends $Command<
  GetMaintenanceWindowTaskCommandInput,
  GetMaintenanceWindowTaskCommandOutput,
  SSMClientResolvedConfig
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

  constructor(readonly input: GetMaintenanceWindowTaskCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetMaintenanceWindowTaskCommandInput, GetMaintenanceWindowTaskCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetMaintenanceWindowTaskCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "GetMaintenanceWindowTaskCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetMaintenanceWindowTaskRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetMaintenanceWindowTaskResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetMaintenanceWindowTaskCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetMaintenanceWindowTaskCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetMaintenanceWindowTaskCommandOutput> {
    return deserializeAws_json1_1GetMaintenanceWindowTaskCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
