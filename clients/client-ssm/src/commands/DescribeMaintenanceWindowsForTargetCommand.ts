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
  DescribeMaintenanceWindowsForTargetRequest,
  DescribeMaintenanceWindowsForTargetRequestFilterSensitiveLog,
  DescribeMaintenanceWindowsForTargetResult,
  DescribeMaintenanceWindowsForTargetResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeMaintenanceWindowsForTargetCommand,
  serializeAws_json1_1DescribeMaintenanceWindowsForTargetCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

export interface DescribeMaintenanceWindowsForTargetCommandInput extends DescribeMaintenanceWindowsForTargetRequest {}
export interface DescribeMaintenanceWindowsForTargetCommandOutput
  extends DescribeMaintenanceWindowsForTargetResult,
    __MetadataBearer {}

/**
 * <p>Retrieves information about the maintenance window targets or tasks that a managed node is
 *    associated with.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DescribeMaintenanceWindowsForTargetCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DescribeMaintenanceWindowsForTargetCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new DescribeMaintenanceWindowsForTargetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeMaintenanceWindowsForTargetCommandInput} for command's `input` shape.
 * @see {@link DescribeMaintenanceWindowsForTargetCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 */
export class DescribeMaintenanceWindowsForTargetCommand extends $Command<
  DescribeMaintenanceWindowsForTargetCommandInput,
  DescribeMaintenanceWindowsForTargetCommandOutput,
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

  constructor(readonly input: DescribeMaintenanceWindowsForTargetCommandInput) {
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
  ): Handler<DescribeMaintenanceWindowsForTargetCommandInput, DescribeMaintenanceWindowsForTargetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeMaintenanceWindowsForTargetCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "DescribeMaintenanceWindowsForTargetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeMaintenanceWindowsForTargetRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeMaintenanceWindowsForTargetResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeMaintenanceWindowsForTargetCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeMaintenanceWindowsForTargetCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeMaintenanceWindowsForTargetCommandOutput> {
    return deserializeAws_json1_1DescribeMaintenanceWindowsForTargetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
