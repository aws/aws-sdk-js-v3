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
  CreateOTAUpdateRequest,
  CreateOTAUpdateRequestFilterSensitiveLog,
  CreateOTAUpdateResponse,
  CreateOTAUpdateResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CreateOTAUpdateCommand,
  serializeAws_restJson1CreateOTAUpdateCommand,
} from "../protocols/Aws_restJson1";

export interface CreateOTAUpdateCommandInput extends CreateOTAUpdateRequest {}
export interface CreateOTAUpdateCommandOutput extends CreateOTAUpdateResponse, __MetadataBearer {}

/**
 * <p>Creates an IoT OTA update on a target group of things or groups.</p>
 *         <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateOTAUpdate</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, CreateOTAUpdateCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, CreateOTAUpdateCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new CreateOTAUpdateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateOTAUpdateCommandInput} for command's `input` shape.
 * @see {@link CreateOTAUpdateCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 */
export class CreateOTAUpdateCommand extends $Command<
  CreateOTAUpdateCommandInput,
  CreateOTAUpdateCommandOutput,
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

  constructor(readonly input: CreateOTAUpdateCommandInput) {
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
  ): Handler<CreateOTAUpdateCommandInput, CreateOTAUpdateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateOTAUpdateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "CreateOTAUpdateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateOTAUpdateRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateOTAUpdateResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateOTAUpdateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateOTAUpdateCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateOTAUpdateCommandOutput> {
    return deserializeAws_restJson1CreateOTAUpdateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
