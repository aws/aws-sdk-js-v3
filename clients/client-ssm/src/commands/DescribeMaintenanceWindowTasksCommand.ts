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
  DescribeMaintenanceWindowTasksRequest,
  DescribeMaintenanceWindowTasksRequestFilterSensitiveLog,
  DescribeMaintenanceWindowTasksResult,
  DescribeMaintenanceWindowTasksResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeMaintenanceWindowTasksCommand,
  serializeAws_json1_1DescribeMaintenanceWindowTasksCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

export interface DescribeMaintenanceWindowTasksCommandInput extends DescribeMaintenanceWindowTasksRequest {}
export interface DescribeMaintenanceWindowTasksCommandOutput
  extends DescribeMaintenanceWindowTasksResult,
    __MetadataBearer {}

/**
 * <p>Lists the tasks in a maintenance window.</p>
 *          <note>
 *             <p>For maintenance window tasks without a specified target, you can't supply values for
 *      <code>--max-errors</code> and <code>--max-concurrency</code>. Instead, the system inserts a
 *     placeholder value of <code>1</code>, which may be reported in the response to this command.
 *     These values don't affect the running of your task and can be ignored.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DescribeMaintenanceWindowTasksCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DescribeMaintenanceWindowTasksCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new DescribeMaintenanceWindowTasksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeMaintenanceWindowTasksCommandInput} for command's `input` shape.
 * @see {@link DescribeMaintenanceWindowTasksCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 */
export class DescribeMaintenanceWindowTasksCommand extends $Command<
  DescribeMaintenanceWindowTasksCommandInput,
  DescribeMaintenanceWindowTasksCommandOutput,
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

  constructor(readonly input: DescribeMaintenanceWindowTasksCommandInput) {
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
  ): Handler<DescribeMaintenanceWindowTasksCommandInput, DescribeMaintenanceWindowTasksCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeMaintenanceWindowTasksCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "DescribeMaintenanceWindowTasksCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeMaintenanceWindowTasksRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeMaintenanceWindowTasksResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeMaintenanceWindowTasksCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeMaintenanceWindowTasksCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeMaintenanceWindowTasksCommandOutput> {
    return deserializeAws_json1_1DescribeMaintenanceWindowTasksCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
