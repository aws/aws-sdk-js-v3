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
  GetRegistrationCodeRequest,
  GetRegistrationCodeRequestFilterSensitiveLog,
  GetRegistrationCodeResponse,
  GetRegistrationCodeResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_restJson1GetRegistrationCodeCommand,
  serializeAws_restJson1GetRegistrationCodeCommand,
} from "../protocols/Aws_restJson1";

export interface GetRegistrationCodeCommandInput extends GetRegistrationCodeRequest {}
export interface GetRegistrationCodeCommandOutput extends GetRegistrationCodeResponse, __MetadataBearer {}

/**
 * <p>Gets a registration code used to register a CA certificate with IoT.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetRegistrationCode</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, GetRegistrationCodeCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, GetRegistrationCodeCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new GetRegistrationCodeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRegistrationCodeCommandInput} for command's `input` shape.
 * @see {@link GetRegistrationCodeCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 */
export class GetRegistrationCodeCommand extends $Command<
  GetRegistrationCodeCommandInput,
  GetRegistrationCodeCommandOutput,
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

  constructor(readonly input: GetRegistrationCodeCommandInput) {
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
  ): Handler<GetRegistrationCodeCommandInput, GetRegistrationCodeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetRegistrationCodeCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "GetRegistrationCodeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetRegistrationCodeRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetRegistrationCodeResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetRegistrationCodeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetRegistrationCodeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetRegistrationCodeCommandOutput> {
    return deserializeAws_restJson1GetRegistrationCodeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
