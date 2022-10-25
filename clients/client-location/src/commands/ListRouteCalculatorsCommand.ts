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
  ListRouteCalculatorsRequest,
  ListRouteCalculatorsRequestFilterSensitiveLog,
  ListRouteCalculatorsResponse,
  ListRouteCalculatorsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListRouteCalculatorsCommand,
  serializeAws_restJson1ListRouteCalculatorsCommand,
} from "../protocols/Aws_restJson1";

export interface ListRouteCalculatorsCommandInput extends ListRouteCalculatorsRequest {}
export interface ListRouteCalculatorsCommandOutput extends ListRouteCalculatorsResponse, __MetadataBearer {}

/**
 * <p>Lists route calculator resources in your AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, ListRouteCalculatorsCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, ListRouteCalculatorsCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new ListRouteCalculatorsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListRouteCalculatorsCommandInput} for command's `input` shape.
 * @see {@link ListRouteCalculatorsCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for LocationClient's `config` shape.
 *
 */
export class ListRouteCalculatorsCommand extends $Command<
  ListRouteCalculatorsCommandInput,
  ListRouteCalculatorsCommandOutput,
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

  constructor(readonly input: ListRouteCalculatorsCommandInput) {
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
  ): Handler<ListRouteCalculatorsCommandInput, ListRouteCalculatorsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListRouteCalculatorsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LocationClient";
    const commandName = "ListRouteCalculatorsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListRouteCalculatorsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListRouteCalculatorsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListRouteCalculatorsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListRouteCalculatorsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListRouteCalculatorsCommandOutput> {
    return deserializeAws_restJson1ListRouteCalculatorsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
