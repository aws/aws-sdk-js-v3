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
  GetMapGlyphsRequest,
  GetMapGlyphsRequestFilterSensitiveLog,
  GetMapGlyphsResponse,
  GetMapGlyphsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetMapGlyphsCommand,
  serializeAws_restJson1GetMapGlyphsCommand,
} from "../protocols/Aws_restJson1";

export interface GetMapGlyphsCommandInput extends GetMapGlyphsRequest {}
export interface GetMapGlyphsCommandOutput extends GetMapGlyphsResponse, __MetadataBearer {}

/**
 * <p>Retrieves glyphs used to display labels on a map.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, GetMapGlyphsCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, GetMapGlyphsCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new GetMapGlyphsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetMapGlyphsCommandInput} for command's `input` shape.
 * @see {@link GetMapGlyphsCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for LocationClient's `config` shape.
 *
 */
export class GetMapGlyphsCommand extends $Command<
  GetMapGlyphsCommandInput,
  GetMapGlyphsCommandOutput,
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

  constructor(readonly input: GetMapGlyphsCommandInput) {
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
  ): Handler<GetMapGlyphsCommandInput, GetMapGlyphsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetMapGlyphsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LocationClient";
    const commandName = "GetMapGlyphsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetMapGlyphsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetMapGlyphsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetMapGlyphsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetMapGlyphsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetMapGlyphsCommandOutput> {
    return deserializeAws_restJson1GetMapGlyphsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
