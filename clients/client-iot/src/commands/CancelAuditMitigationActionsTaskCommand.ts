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
  CancelAuditMitigationActionsTaskRequest,
  CancelAuditMitigationActionsTaskRequestFilterSensitiveLog,
  CancelAuditMitigationActionsTaskResponse,
  CancelAuditMitigationActionsTaskResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CancelAuditMitigationActionsTaskCommand,
  serializeAws_restJson1CancelAuditMitigationActionsTaskCommand,
} from "../protocols/Aws_restJson1";

export interface CancelAuditMitigationActionsTaskCommandInput extends CancelAuditMitigationActionsTaskRequest {}
export interface CancelAuditMitigationActionsTaskCommandOutput
  extends CancelAuditMitigationActionsTaskResponse,
    __MetadataBearer {}

/**
 * <p>Cancels a mitigation action task that is in progress. If the task
 *       is not
 *       in progress, an InvalidRequestException occurs.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CancelAuditMitigationActionsTask</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, CancelAuditMitigationActionsTaskCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, CancelAuditMitigationActionsTaskCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new CancelAuditMitigationActionsTaskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelAuditMitigationActionsTaskCommandInput} for command's `input` shape.
 * @see {@link CancelAuditMitigationActionsTaskCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 */
export class CancelAuditMitigationActionsTaskCommand extends $Command<
  CancelAuditMitigationActionsTaskCommandInput,
  CancelAuditMitigationActionsTaskCommandOutput,
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

  constructor(readonly input: CancelAuditMitigationActionsTaskCommandInput) {
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
  ): Handler<CancelAuditMitigationActionsTaskCommandInput, CancelAuditMitigationActionsTaskCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CancelAuditMitigationActionsTaskCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "CancelAuditMitigationActionsTaskCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CancelAuditMitigationActionsTaskRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CancelAuditMitigationActionsTaskResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: CancelAuditMitigationActionsTaskCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1CancelAuditMitigationActionsTaskCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CancelAuditMitigationActionsTaskCommandOutput> {
    return deserializeAws_restJson1CancelAuditMitigationActionsTaskCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
