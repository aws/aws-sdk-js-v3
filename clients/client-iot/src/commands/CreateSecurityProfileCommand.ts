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
  CreateSecurityProfileRequest,
  CreateSecurityProfileRequestFilterSensitiveLog,
  CreateSecurityProfileResponse,
  CreateSecurityProfileResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CreateSecurityProfileCommand,
  serializeAws_restJson1CreateSecurityProfileCommand,
} from "../protocols/Aws_restJson1";

export interface CreateSecurityProfileCommandInput extends CreateSecurityProfileRequest {}
export interface CreateSecurityProfileCommandOutput extends CreateSecurityProfileResponse, __MetadataBearer {}

/**
 * <p>Creates a Device Defender security profile.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateSecurityProfile</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, CreateSecurityProfileCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, CreateSecurityProfileCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new CreateSecurityProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateSecurityProfileCommandInput} for command's `input` shape.
 * @see {@link CreateSecurityProfileCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 */
export class CreateSecurityProfileCommand extends $Command<
  CreateSecurityProfileCommandInput,
  CreateSecurityProfileCommandOutput,
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

  constructor(readonly input: CreateSecurityProfileCommandInput) {
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
  ): Handler<CreateSecurityProfileCommandInput, CreateSecurityProfileCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateSecurityProfileCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "CreateSecurityProfileCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateSecurityProfileRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateSecurityProfileResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateSecurityProfileCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateSecurityProfileCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateSecurityProfileCommandOutput> {
    return deserializeAws_restJson1CreateSecurityProfileCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
