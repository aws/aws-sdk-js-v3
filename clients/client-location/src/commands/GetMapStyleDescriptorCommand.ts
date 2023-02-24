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
  GetMapStyleDescriptorRequest,
  GetMapStyleDescriptorRequestFilterSensitiveLog,
  GetMapStyleDescriptorResponse,
  GetMapStyleDescriptorResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetMapStyleDescriptorCommand,
  serializeAws_restJson1GetMapStyleDescriptorCommand,
} from "../protocols/Aws_restJson1";

export interface GetMapStyleDescriptorCommandInput extends GetMapStyleDescriptorRequest {}
export interface GetMapStyleDescriptorCommandOutput extends GetMapStyleDescriptorResponse, __MetadataBearer {}

/**
 * <p>Retrieves the map style descriptor from a map resource. </p>
 *          <p>The style descriptor contains speciﬁcations on how features render on a map. For
 *             example, what data to display, what order to display the data in, and the style for the
 *             data. Style descriptors follow the Mapbox Style Specification.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, GetMapStyleDescriptorCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, GetMapStyleDescriptorCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new GetMapStyleDescriptorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetMapStyleDescriptorCommandInput} for command's `input` shape.
 * @see {@link GetMapStyleDescriptorCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for LocationClient's `config` shape.
 *
 */
export class GetMapStyleDescriptorCommand extends $Command<
  GetMapStyleDescriptorCommandInput,
  GetMapStyleDescriptorCommandOutput,
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

  constructor(readonly input: GetMapStyleDescriptorCommandInput) {
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
  ): Handler<GetMapStyleDescriptorCommandInput, GetMapStyleDescriptorCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetMapStyleDescriptorCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LocationClient";
    const commandName = "GetMapStyleDescriptorCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetMapStyleDescriptorRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetMapStyleDescriptorResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetMapStyleDescriptorCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetMapStyleDescriptorCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetMapStyleDescriptorCommandOutput> {
    return deserializeAws_restJson1GetMapStyleDescriptorCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
