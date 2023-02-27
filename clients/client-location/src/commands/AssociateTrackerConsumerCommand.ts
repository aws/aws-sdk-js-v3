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
  AssociateTrackerConsumerRequest,
  AssociateTrackerConsumerRequestFilterSensitiveLog,
  AssociateTrackerConsumerResponse,
  AssociateTrackerConsumerResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1AssociateTrackerConsumerCommand,
  serializeAws_restJson1AssociateTrackerConsumerCommand,
} from "../protocols/Aws_restJson1";

/**
 * The input for {@link AssociateTrackerConsumerCommand}.
 */
export interface AssociateTrackerConsumerCommandInput extends AssociateTrackerConsumerRequest {}
/**
 * The output of {@link AssociateTrackerConsumerCommand}.
 */
export interface AssociateTrackerConsumerCommandOutput extends AssociateTrackerConsumerResponse, __MetadataBearer {}

/**
 * <p>Creates an association between a geofence collection and a tracker resource. This
 *             allows the tracker resource to communicate location data to the linked geofence
 *             collection. </p>
 *          <p>You can associate up to five geofence collections to each tracker resource.</p>
 *          <note>
 *             <p>Currently not supported — Cross-account configurations, such as creating associations between a tracker resource in one account and a geofence collection in another account.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, AssociateTrackerConsumerCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, AssociateTrackerConsumerCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new AssociateTrackerConsumerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateTrackerConsumerCommandInput} for command's `input` shape.
 * @see {@link AssociateTrackerConsumerCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for LocationClient's `config` shape.
 *
 */
export class AssociateTrackerConsumerCommand extends $Command<
  AssociateTrackerConsumerCommandInput,
  AssociateTrackerConsumerCommandOutput,
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

  constructor(readonly input: AssociateTrackerConsumerCommandInput) {
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
  ): Handler<AssociateTrackerConsumerCommandInput, AssociateTrackerConsumerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AssociateTrackerConsumerCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LocationClient";
    const commandName = "AssociateTrackerConsumerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociateTrackerConsumerRequestFilterSensitiveLog,
      outputFilterSensitiveLog: AssociateTrackerConsumerResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AssociateTrackerConsumerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1AssociateTrackerConsumerCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AssociateTrackerConsumerCommandOutput> {
    return deserializeAws_restJson1AssociateTrackerConsumerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
