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

import { IoTFleetHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTFleetHubClient";
import {
  CreateApplicationRequest,
  CreateApplicationRequestFilterSensitiveLog,
  CreateApplicationResponse,
  CreateApplicationResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CreateApplicationCommand,
  serializeAws_restJson1CreateApplicationCommand,
} from "../protocols/Aws_restJson1";

export interface CreateApplicationCommandInput extends CreateApplicationRequest {}
export interface CreateApplicationCommandOutput extends CreateApplicationResponse, __MetadataBearer {}

/**
 * <p>Creates a Fleet Hub for AWS IoT Device Management web application.</p>
 *          <note>
 *             <p>Fleet Hub for AWS IoT Device Management is in public preview and is subject to change.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTFleetHubClient, CreateApplicationCommand } from "@aws-sdk/client-iotfleethub"; // ES Modules import
 * // const { IoTFleetHubClient, CreateApplicationCommand } = require("@aws-sdk/client-iotfleethub"); // CommonJS import
 * const client = new IoTFleetHubClient(config);
 * const command = new CreateApplicationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateApplicationCommandInput} for command's `input` shape.
 * @see {@link CreateApplicationCommandOutput} for command's `response` shape.
 * @see {@link IoTFleetHubClientResolvedConfig | config} for IoTFleetHubClient's `config` shape.
 *
 */
export class CreateApplicationCommand extends $Command<
  CreateApplicationCommandInput,
  CreateApplicationCommandOutput,
  IoTFleetHubClientResolvedConfig
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

  constructor(readonly input: CreateApplicationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTFleetHubClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateApplicationCommandInput, CreateApplicationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateApplicationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTFleetHubClient";
    const commandName = "CreateApplicationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateApplicationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateApplicationResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateApplicationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateApplicationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateApplicationCommandOutput> {
    return deserializeAws_restJson1CreateApplicationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
