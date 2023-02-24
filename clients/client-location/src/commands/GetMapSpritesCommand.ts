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
  GetMapSpritesRequest,
  GetMapSpritesRequestFilterSensitiveLog,
  GetMapSpritesResponse,
  GetMapSpritesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetMapSpritesCommand,
  serializeAws_restJson1GetMapSpritesCommand,
} from "../protocols/Aws_restJson1";

export interface GetMapSpritesCommandInput extends GetMapSpritesRequest {}
export interface GetMapSpritesCommandOutput extends GetMapSpritesResponse, __MetadataBearer {}

/**
 * <p>Retrieves the sprite sheet corresponding to a map resource. The sprite sheet is a PNG
 *             image paired with a JSON document describing the offsets of individual icons that will
 *             be displayed on a rendered map.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, GetMapSpritesCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, GetMapSpritesCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new GetMapSpritesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetMapSpritesCommandInput} for command's `input` shape.
 * @see {@link GetMapSpritesCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for LocationClient's `config` shape.
 *
 */
export class GetMapSpritesCommand extends $Command<
  GetMapSpritesCommandInput,
  GetMapSpritesCommandOutput,
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

  constructor(readonly input: GetMapSpritesCommandInput) {
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
  ): Handler<GetMapSpritesCommandInput, GetMapSpritesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetMapSpritesCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LocationClient";
    const commandName = "GetMapSpritesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetMapSpritesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetMapSpritesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetMapSpritesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetMapSpritesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetMapSpritesCommandOutput> {
    return deserializeAws_restJson1GetMapSpritesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
