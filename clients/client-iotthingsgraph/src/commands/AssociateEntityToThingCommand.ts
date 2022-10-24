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

import { IoTThingsGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTThingsGraphClient";
import {
  AssociateEntityToThingRequest,
  AssociateEntityToThingRequestFilterSensitiveLog,
  AssociateEntityToThingResponse,
  AssociateEntityToThingResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1AssociateEntityToThingCommand,
  serializeAws_json1_1AssociateEntityToThingCommand,
} from "../protocols/Aws_json1_1";

export interface AssociateEntityToThingCommandInput extends AssociateEntityToThingRequest {}
export interface AssociateEntityToThingCommandOutput extends AssociateEntityToThingResponse, __MetadataBearer {}

/**
 * @deprecated
 *
 * <p>Associates a device with a concrete thing that is in the user's registry.</p>
 *          <p>A thing can be associated with only one device at a time. If you associate a thing with a new device id, its previous association will be removed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTThingsGraphClient, AssociateEntityToThingCommand } from "@aws-sdk/client-iotthingsgraph"; // ES Modules import
 * // const { IoTThingsGraphClient, AssociateEntityToThingCommand } = require("@aws-sdk/client-iotthingsgraph"); // CommonJS import
 * const client = new IoTThingsGraphClient(config);
 * const command = new AssociateEntityToThingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateEntityToThingCommandInput} for command's `input` shape.
 * @see {@link AssociateEntityToThingCommandOutput} for command's `response` shape.
 * @see {@link IoTThingsGraphClientResolvedConfig | config} for IoTThingsGraphClient's `config` shape.
 *
 */
export class AssociateEntityToThingCommand extends $Command<
  AssociateEntityToThingCommandInput,
  AssociateEntityToThingCommandOutput,
  IoTThingsGraphClientResolvedConfig
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

  constructor(readonly input: AssociateEntityToThingCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTThingsGraphClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AssociateEntityToThingCommandInput, AssociateEntityToThingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AssociateEntityToThingCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTThingsGraphClient";
    const commandName = "AssociateEntityToThingCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociateEntityToThingRequestFilterSensitiveLog,
      outputFilterSensitiveLog: AssociateEntityToThingResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AssociateEntityToThingCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AssociateEntityToThingCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AssociateEntityToThingCommandOutput> {
    return deserializeAws_json1_1AssociateEntityToThingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
