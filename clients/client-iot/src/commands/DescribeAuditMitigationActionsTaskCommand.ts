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

import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import {
  DescribeAuditMitigationActionsTaskRequest,
  DescribeAuditMitigationActionsTaskRequestFilterSensitiveLog,
  DescribeAuditMitigationActionsTaskResponse,
  DescribeAuditMitigationActionsTaskResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_restJson1DescribeAuditMitigationActionsTaskCommand,
  serializeAws_restJson1DescribeAuditMitigationActionsTaskCommand,
} from "../protocols/Aws_restJson1";

export interface DescribeAuditMitigationActionsTaskCommandInput extends DescribeAuditMitigationActionsTaskRequest {}
export interface DescribeAuditMitigationActionsTaskCommandOutput
  extends DescribeAuditMitigationActionsTaskResponse,
    __MetadataBearer {}

/**
 * <p>Gets information about an audit mitigation task that is used to apply mitigation actions to a set of audit findings. Properties include the actions being applied, the audit checks to which they're being applied, the task status, and aggregated task statistics.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DescribeAuditMitigationActionsTaskCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DescribeAuditMitigationActionsTaskCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DescribeAuditMitigationActionsTaskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAuditMitigationActionsTaskCommandInput} for command's `input` shape.
 * @see {@link DescribeAuditMitigationActionsTaskCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 */
export class DescribeAuditMitigationActionsTaskCommand extends $Command<
  DescribeAuditMitigationActionsTaskCommandInput,
  DescribeAuditMitigationActionsTaskCommandOutput,
  IoTClientResolvedConfig
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

  constructor(readonly input: DescribeAuditMitigationActionsTaskCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeAuditMitigationActionsTaskCommandInput, DescribeAuditMitigationActionsTaskCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeAuditMitigationActionsTaskCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "DescribeAuditMitigationActionsTaskCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeAuditMitigationActionsTaskRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeAuditMitigationActionsTaskResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeAuditMitigationActionsTaskCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeAuditMitigationActionsTaskCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeAuditMitigationActionsTaskCommandOutput> {
    return deserializeAws_restJson1DescribeAuditMitigationActionsTaskCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
