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
  CreateMitigationActionRequest,
  CreateMitigationActionRequestFilterSensitiveLog,
  CreateMitigationActionResponse,
  CreateMitigationActionResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CreateMitigationActionCommand,
  serializeAws_restJson1CreateMitigationActionCommand,
} from "../protocols/Aws_restJson1";

export interface CreateMitigationActionCommandInput extends CreateMitigationActionRequest {}
export interface CreateMitigationActionCommandOutput extends CreateMitigationActionResponse, __MetadataBearer {}

/**
 * <p>Defines an action that can be applied to audit findings by using StartAuditMitigationActionsTask. Only certain types of mitigation actions can be applied to specific check names.
 *       For more information, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/device-defender-mitigation-actions.html">Mitigation actions</a>. Each mitigation action can apply only one type of change.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateMitigationAction</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, CreateMitigationActionCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, CreateMitigationActionCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new CreateMitigationActionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateMitigationActionCommandInput} for command's `input` shape.
 * @see {@link CreateMitigationActionCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 */
export class CreateMitigationActionCommand extends $Command<
  CreateMitigationActionCommandInput,
  CreateMitigationActionCommandOutput,
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

  constructor(readonly input: CreateMitigationActionCommandInput) {
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
  ): Handler<CreateMitigationActionCommandInput, CreateMitigationActionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateMitigationActionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "CreateMitigationActionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateMitigationActionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateMitigationActionResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateMitigationActionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateMitigationActionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateMitigationActionCommandOutput> {
    return deserializeAws_restJson1CreateMitigationActionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
