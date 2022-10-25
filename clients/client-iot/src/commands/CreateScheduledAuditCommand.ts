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
  CreateScheduledAuditRequest,
  CreateScheduledAuditRequestFilterSensitiveLog,
  CreateScheduledAuditResponse,
  CreateScheduledAuditResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CreateScheduledAuditCommand,
  serializeAws_restJson1CreateScheduledAuditCommand,
} from "../protocols/Aws_restJson1";

export interface CreateScheduledAuditCommandInput extends CreateScheduledAuditRequest {}
export interface CreateScheduledAuditCommandOutput extends CreateScheduledAuditResponse, __MetadataBearer {}

/**
 * <p>Creates a scheduled audit that is run at a specified
 *           time interval.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateScheduledAudit</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, CreateScheduledAuditCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, CreateScheduledAuditCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new CreateScheduledAuditCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateScheduledAuditCommandInput} for command's `input` shape.
 * @see {@link CreateScheduledAuditCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 */
export class CreateScheduledAuditCommand extends $Command<
  CreateScheduledAuditCommandInput,
  CreateScheduledAuditCommandOutput,
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

  constructor(readonly input: CreateScheduledAuditCommandInput) {
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
  ): Handler<CreateScheduledAuditCommandInput, CreateScheduledAuditCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateScheduledAuditCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "CreateScheduledAuditCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateScheduledAuditRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateScheduledAuditResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateScheduledAuditCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateScheduledAuditCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateScheduledAuditCommandOutput> {
    return deserializeAws_restJson1CreateScheduledAuditCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
