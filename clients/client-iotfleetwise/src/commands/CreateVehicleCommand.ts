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

import { IoTFleetWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTFleetWiseClient";
import {
  CreateVehicleRequest,
  CreateVehicleRequestFilterSensitiveLog,
  CreateVehicleResponse,
  CreateVehicleResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_0CreateVehicleCommand,
  serializeAws_json1_0CreateVehicleCommand,
} from "../protocols/Aws_json1_0";

export interface CreateVehicleCommandInput extends CreateVehicleRequest {}
export interface CreateVehicleCommandOutput extends CreateVehicleResponse, __MetadataBearer {}

/**
 * <p> Creates a vehicle, which is an instance of a vehicle model (model manifest). Vehicles
 *             created from the same vehicle model consist of the same signals inherited from the
 *             vehicle model.</p>
 *         <note>
 *             <p> If you have an existing Amazon Web Services IoT Thing, you can use Amazon Web Services IoT FleetWise to create a
 *                 vehicle and collect data from your thing. </p>
 *         </note>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/create-vehicle-cli.html">Create a vehicle
 *                 (AWS CLI)</a> in the <i>Amazon Web Services IoT FleetWise Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTFleetWiseClient, CreateVehicleCommand } from "@aws-sdk/client-iotfleetwise"; // ES Modules import
 * // const { IoTFleetWiseClient, CreateVehicleCommand } = require("@aws-sdk/client-iotfleetwise"); // CommonJS import
 * const client = new IoTFleetWiseClient(config);
 * const command = new CreateVehicleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateVehicleCommandInput} for command's `input` shape.
 * @see {@link CreateVehicleCommandOutput} for command's `response` shape.
 * @see {@link IoTFleetWiseClientResolvedConfig | config} for IoTFleetWiseClient's `config` shape.
 *
 */
export class CreateVehicleCommand extends $Command<
  CreateVehicleCommandInput,
  CreateVehicleCommandOutput,
  IoTFleetWiseClientResolvedConfig
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

  constructor(readonly input: CreateVehicleCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTFleetWiseClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateVehicleCommandInput, CreateVehicleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateVehicleCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTFleetWiseClient";
    const commandName = "CreateVehicleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateVehicleRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateVehicleResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateVehicleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0CreateVehicleCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateVehicleCommandOutput> {
    return deserializeAws_json1_0CreateVehicleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
