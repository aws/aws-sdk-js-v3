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
  UpdateScheduledAuditRequest,
  UpdateScheduledAuditRequestFilterSensitiveLog,
  UpdateScheduledAuditResponse,
  UpdateScheduledAuditResponseFilterSensitiveLog,
} from "../models/models_2";
import {
  deserializeAws_restJson1UpdateScheduledAuditCommand,
  serializeAws_restJson1UpdateScheduledAuditCommand,
} from "../protocols/Aws_restJson1";

export interface UpdateScheduledAuditCommandInput extends UpdateScheduledAuditRequest {}
export interface UpdateScheduledAuditCommandOutput extends UpdateScheduledAuditResponse, __MetadataBearer {}

/**
 * <p>Updates a scheduled audit, including which checks are performed and
 *           how often the audit takes place.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateScheduledAudit</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, UpdateScheduledAuditCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, UpdateScheduledAuditCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new UpdateScheduledAuditCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateScheduledAuditCommandInput} for command's `input` shape.
 * @see {@link UpdateScheduledAuditCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 */
export class UpdateScheduledAuditCommand extends $Command<
  UpdateScheduledAuditCommandInput,
  UpdateScheduledAuditCommandOutput,
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

  constructor(readonly input: UpdateScheduledAuditCommandInput) {
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
  ): Handler<UpdateScheduledAuditCommandInput, UpdateScheduledAuditCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateScheduledAuditCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "UpdateScheduledAuditCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateScheduledAuditRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateScheduledAuditResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateScheduledAuditCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateScheduledAuditCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateScheduledAuditCommandOutput> {
    return deserializeAws_restJson1UpdateScheduledAuditCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
