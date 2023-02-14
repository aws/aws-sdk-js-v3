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
  GetPlaceRequest,
  GetPlaceRequestFilterSensitiveLog,
  GetPlaceResponse,
  GetPlaceResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetPlaceCommand,
  serializeAws_restJson1GetPlaceCommand,
} from "../protocols/Aws_restJson1";

export interface GetPlaceCommandInput extends GetPlaceRequest {}
export interface GetPlaceCommandOutput extends GetPlaceResponse, __MetadataBearer {}

/**
 * <p>Finds a place by its unique ID. A <code>PlaceId</code> is returned by other search
 *             operations.</p>
 *          <note>
 *             <p>A PlaceId is valid only if all of the following are the same in the original
 *                 search request and the call to <code>GetPlace</code>.</p>
 *             <ul>
 *                <li>
 *                   <p>Customer AWS account</p>
 *                </li>
 *                <li>
 *                   <p>AWS Region</p>
 *                </li>
 *                <li>
 *                   <p>Data provider specified in the place index resource</p>
 *                </li>
 *             </ul>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, GetPlaceCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, GetPlaceCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new GetPlaceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetPlaceCommandInput} for command's `input` shape.
 * @see {@link GetPlaceCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for LocationClient's `config` shape.
 *
 */
export class GetPlaceCommand extends $Command<
  GetPlaceCommandInput,
  GetPlaceCommandOutput,
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

  constructor(readonly input: GetPlaceCommandInput) {
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
  ): Handler<GetPlaceCommandInput, GetPlaceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetPlaceCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LocationClient";
    const commandName = "GetPlaceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetPlaceRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetPlaceResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetPlaceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetPlaceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetPlaceCommandOutput> {
    return deserializeAws_restJson1GetPlaceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
