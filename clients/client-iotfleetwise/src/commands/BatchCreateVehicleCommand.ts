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
  BatchCreateVehicleRequest,
  BatchCreateVehicleRequestFilterSensitiveLog,
  BatchCreateVehicleResponse,
  BatchCreateVehicleResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_0BatchCreateVehicleCommand,
  serializeAws_json1_0BatchCreateVehicleCommand,
} from "../protocols/Aws_json1_0";

export interface BatchCreateVehicleCommandInput extends BatchCreateVehicleRequest {}
export interface BatchCreateVehicleCommandOutput extends BatchCreateVehicleResponse, __MetadataBearer {}

/**
 * <p> Creates a group, or batch, of vehicles. </p>
 *         <note>
 *             <p> You must specify a decoder manifest and a vehicle model (model manifest) for each
 *                 vehicle. </p>
 *         </note>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/create-vehicles-cli.html">Create multiple
 *                 vehicles (AWS CLI)</a> in the <i>Amazon Web Services IoT FleetWise Developer Guide</i>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTFleetWiseClient, BatchCreateVehicleCommand } from "@aws-sdk/client-iotfleetwise"; // ES Modules import
 * // const { IoTFleetWiseClient, BatchCreateVehicleCommand } = require("@aws-sdk/client-iotfleetwise"); // CommonJS import
 * const client = new IoTFleetWiseClient(config);
 * const command = new BatchCreateVehicleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchCreateVehicleCommandInput} for command's `input` shape.
 * @see {@link BatchCreateVehicleCommandOutput} for command's `response` shape.
 * @see {@link IoTFleetWiseClientResolvedConfig | config} for IoTFleetWiseClient's `config` shape.
 *
 */
export class BatchCreateVehicleCommand extends $Command<
  BatchCreateVehicleCommandInput,
  BatchCreateVehicleCommandOutput,
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

  constructor(readonly input: BatchCreateVehicleCommandInput) {
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
  ): Handler<BatchCreateVehicleCommandInput, BatchCreateVehicleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchCreateVehicleCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTFleetWiseClient";
    const commandName = "BatchCreateVehicleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchCreateVehicleRequestFilterSensitiveLog,
      outputFilterSensitiveLog: BatchCreateVehicleResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BatchCreateVehicleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0BatchCreateVehicleCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchCreateVehicleCommandOutput> {
    return deserializeAws_json1_0BatchCreateVehicleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
