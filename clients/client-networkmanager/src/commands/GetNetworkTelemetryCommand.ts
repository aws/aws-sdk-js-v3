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
  GetNetworkTelemetryRequest,
  GetNetworkTelemetryRequestFilterSensitiveLog,
  GetNetworkTelemetryResponse,
  GetNetworkTelemetryResponseFilterSensitiveLog,
} from "../models/models_0";
import { NetworkManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkManagerClient";
import {
  deserializeAws_restJson1GetNetworkTelemetryCommand,
  serializeAws_restJson1GetNetworkTelemetryCommand,
} from "../protocols/Aws_restJson1";

export interface GetNetworkTelemetryCommandInput extends GetNetworkTelemetryRequest {}
export interface GetNetworkTelemetryCommandOutput extends GetNetworkTelemetryResponse, __MetadataBearer {}

/**
 * <p>Gets the network telemetry of the specified global network.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, GetNetworkTelemetryCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, GetNetworkTelemetryCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * const client = new NetworkManagerClient(config);
 * const command = new GetNetworkTelemetryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetNetworkTelemetryCommandInput} for command's `input` shape.
 * @see {@link GetNetworkTelemetryCommandOutput} for command's `response` shape.
 * @see {@link NetworkManagerClientResolvedConfig | config} for NetworkManagerClient's `config` shape.
 *
 */
export class GetNetworkTelemetryCommand extends $Command<
  GetNetworkTelemetryCommandInput,
  GetNetworkTelemetryCommandOutput,
  NetworkManagerClientResolvedConfig
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

  constructor(readonly input: GetNetworkTelemetryCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NetworkManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetNetworkTelemetryCommandInput, GetNetworkTelemetryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetNetworkTelemetryCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NetworkManagerClient";
    const commandName = "GetNetworkTelemetryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetNetworkTelemetryRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetNetworkTelemetryResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetNetworkTelemetryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetNetworkTelemetryCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetNetworkTelemetryCommandOutput> {
    return deserializeAws_restJson1GetNetworkTelemetryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
