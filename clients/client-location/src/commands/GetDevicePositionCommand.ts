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

import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import {
  GetDevicePositionRequest,
  GetDevicePositionRequestFilterSensitiveLog,
  GetDevicePositionResponse,
  GetDevicePositionResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetDevicePositionCommand,
  serializeAws_restJson1GetDevicePositionCommand,
} from "../protocols/Aws_restJson1";

export interface GetDevicePositionCommandInput extends GetDevicePositionRequest {}
export interface GetDevicePositionCommandOutput extends GetDevicePositionResponse, __MetadataBearer {}

/**
 * <p>Retrieves a device's most recent position according to its sample time.</p>
 *          <note>
 *             <p>Device positions are deleted after 30 days.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, GetDevicePositionCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, GetDevicePositionCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new GetDevicePositionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDevicePositionCommandInput} for command's `input` shape.
 * @see {@link GetDevicePositionCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for LocationClient's `config` shape.
 *
 */
export class GetDevicePositionCommand extends $Command<
  GetDevicePositionCommandInput,
  GetDevicePositionCommandOutput,
  LocationClientResolvedConfig
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

  constructor(readonly input: GetDevicePositionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LocationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetDevicePositionCommandInput, GetDevicePositionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetDevicePositionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LocationClient";
    const commandName = "GetDevicePositionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetDevicePositionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetDevicePositionResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetDevicePositionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetDevicePositionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetDevicePositionCommandOutput> {
    return deserializeAws_restJson1GetDevicePositionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
