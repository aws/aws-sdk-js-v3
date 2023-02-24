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
  ActivateDeviceIdentifierRequest,
  ActivateDeviceIdentifierRequestFilterSensitiveLog,
  ActivateDeviceIdentifierResponse,
  ActivateDeviceIdentifierResponseFilterSensitiveLog,
} from "../models/models_0";
import { PrivateNetworksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PrivateNetworksClient";
import {
  deserializeAws_restJson1ActivateDeviceIdentifierCommand,
  serializeAws_restJson1ActivateDeviceIdentifierCommand,
} from "../protocols/Aws_restJson1";

export interface ActivateDeviceIdentifierCommandInput extends ActivateDeviceIdentifierRequest {}
export interface ActivateDeviceIdentifierCommandOutput extends ActivateDeviceIdentifierResponse, __MetadataBearer {}

/**
 * <p>Activates the specified device identifier.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PrivateNetworksClient, ActivateDeviceIdentifierCommand } from "@aws-sdk/client-privatenetworks"; // ES Modules import
 * // const { PrivateNetworksClient, ActivateDeviceIdentifierCommand } = require("@aws-sdk/client-privatenetworks"); // CommonJS import
 * const client = new PrivateNetworksClient(config);
 * const command = new ActivateDeviceIdentifierCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ActivateDeviceIdentifierCommandInput} for command's `input` shape.
 * @see {@link ActivateDeviceIdentifierCommandOutput} for command's `response` shape.
 * @see {@link PrivateNetworksClientResolvedConfig | config} for PrivateNetworksClient's `config` shape.
 *
 */
export class ActivateDeviceIdentifierCommand extends $Command<
  ActivateDeviceIdentifierCommandInput,
  ActivateDeviceIdentifierCommandOutput,
  PrivateNetworksClientResolvedConfig
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

  constructor(readonly input: ActivateDeviceIdentifierCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PrivateNetworksClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ActivateDeviceIdentifierCommandInput, ActivateDeviceIdentifierCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ActivateDeviceIdentifierCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PrivateNetworksClient";
    const commandName = "ActivateDeviceIdentifierCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ActivateDeviceIdentifierRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ActivateDeviceIdentifierResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ActivateDeviceIdentifierCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ActivateDeviceIdentifierCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ActivateDeviceIdentifierCommandOutput> {
    return deserializeAws_restJson1ActivateDeviceIdentifierCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
