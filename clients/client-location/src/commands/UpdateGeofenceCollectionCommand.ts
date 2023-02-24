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
  UpdateGeofenceCollectionRequest,
  UpdateGeofenceCollectionRequestFilterSensitiveLog,
  UpdateGeofenceCollectionResponse,
  UpdateGeofenceCollectionResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1UpdateGeofenceCollectionCommand,
  serializeAws_restJson1UpdateGeofenceCollectionCommand,
} from "../protocols/Aws_restJson1";

export interface UpdateGeofenceCollectionCommandInput extends UpdateGeofenceCollectionRequest {}
export interface UpdateGeofenceCollectionCommandOutput extends UpdateGeofenceCollectionResponse, __MetadataBearer {}

/**
 * <p>Updates the specified properties of a given geofence collection.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, UpdateGeofenceCollectionCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, UpdateGeofenceCollectionCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new UpdateGeofenceCollectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateGeofenceCollectionCommandInput} for command's `input` shape.
 * @see {@link UpdateGeofenceCollectionCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for LocationClient's `config` shape.
 *
 */
export class UpdateGeofenceCollectionCommand extends $Command<
  UpdateGeofenceCollectionCommandInput,
  UpdateGeofenceCollectionCommandOutput,
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

  constructor(readonly input: UpdateGeofenceCollectionCommandInput) {
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
  ): Handler<UpdateGeofenceCollectionCommandInput, UpdateGeofenceCollectionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateGeofenceCollectionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LocationClient";
    const commandName = "UpdateGeofenceCollectionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateGeofenceCollectionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateGeofenceCollectionResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateGeofenceCollectionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateGeofenceCollectionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateGeofenceCollectionCommandOutput> {
    return deserializeAws_restJson1UpdateGeofenceCollectionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
