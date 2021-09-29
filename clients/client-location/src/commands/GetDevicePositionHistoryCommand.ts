import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import { GetDevicePositionHistoryRequest, GetDevicePositionHistoryResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetDevicePositionHistoryCommand,
  serializeAws_restJson1GetDevicePositionHistoryCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface GetDevicePositionHistoryCommandInput extends GetDevicePositionHistoryRequest {}
export interface GetDevicePositionHistoryCommandOutput extends GetDevicePositionHistoryResponse, __MetadataBearer {}

/**
 * <p>Retrieves the device position history from a tracker resource within a specified range
 *             of time.</p>
 *          <note>
 *            <p>Device positions are deleted after 30 days.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, GetDevicePositionHistoryCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, GetDevicePositionHistoryCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new GetDevicePositionHistoryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDevicePositionHistoryCommandInput} for command's `input` shape.
 * @see {@link GetDevicePositionHistoryCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetDevicePositionHistoryCommand extends $Command<
  GetDevicePositionHistoryCommandInput,
  GetDevicePositionHistoryCommandOutput,
  LocationClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetDevicePositionHistoryCommandInput) {
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
  ): Handler<GetDevicePositionHistoryCommandInput, GetDevicePositionHistoryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LocationClient";
    const commandName = "GetDevicePositionHistoryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetDevicePositionHistoryRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetDevicePositionHistoryResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetDevicePositionHistoryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetDevicePositionHistoryCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetDevicePositionHistoryCommandOutput> {
    return deserializeAws_restJson1GetDevicePositionHistoryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
