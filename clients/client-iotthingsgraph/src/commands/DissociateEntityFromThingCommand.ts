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
  DissociateEntityFromThingRequest,
  DissociateEntityFromThingRequestFilterSensitiveLog,
  DissociateEntityFromThingResponse,
  DissociateEntityFromThingResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DissociateEntityFromThingCommand,
  serializeAws_json1_1DissociateEntityFromThingCommand,
} from "../protocols/Aws_json1_1";

export interface DissociateEntityFromThingCommandInput extends DissociateEntityFromThingRequest {}
export interface DissociateEntityFromThingCommandOutput extends DissociateEntityFromThingResponse, __MetadataBearer {}

/**
 * @deprecated
 *
 * <p>Dissociates a device entity from a concrete thing. The action takes only the type of the entity that you need to dissociate because only
 *          one entity of a particular type can be associated with a thing.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTThingsGraphClient, DissociateEntityFromThingCommand } from "@aws-sdk/client-iotthingsgraph"; // ES Modules import
 * // const { IoTThingsGraphClient, DissociateEntityFromThingCommand } = require("@aws-sdk/client-iotthingsgraph"); // CommonJS import
 * const client = new IoTThingsGraphClient(config);
 * const command = new DissociateEntityFromThingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DissociateEntityFromThingCommandInput} for command's `input` shape.
 * @see {@link DissociateEntityFromThingCommandOutput} for command's `response` shape.
 * @see {@link IoTThingsGraphClientResolvedConfig | config} for IoTThingsGraphClient's `config` shape.
 *
 */
export class DissociateEntityFromThingCommand extends $Command<
  DissociateEntityFromThingCommandInput,
  DissociateEntityFromThingCommandOutput,
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

  constructor(readonly input: DissociateEntityFromThingCommandInput) {
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
  ): Handler<DissociateEntityFromThingCommandInput, DissociateEntityFromThingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DissociateEntityFromThingCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTThingsGraphClient";
    const commandName = "DissociateEntityFromThingCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DissociateEntityFromThingRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DissociateEntityFromThingResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DissociateEntityFromThingCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DissociateEntityFromThingCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DissociateEntityFromThingCommandOutput> {
    return deserializeAws_json1_1DissociateEntityFromThingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
