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
  BatchUpdateVehicleRequest,
  BatchUpdateVehicleRequestFilterSensitiveLog,
  BatchUpdateVehicleResponse,
  BatchUpdateVehicleResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_0BatchUpdateVehicleCommand,
  serializeAws_json1_0BatchUpdateVehicleCommand,
} from "../protocols/Aws_json1_0";

export interface BatchUpdateVehicleCommandInput extends BatchUpdateVehicleRequest {}
export interface BatchUpdateVehicleCommandOutput extends BatchUpdateVehicleResponse, __MetadataBearer {}

/**
 * <p> Updates a group, or batch, of vehicles.</p>
 *         <note>
 *             <p> You must specify a decoder manifest and a vehicle model (model manifest) for each
 *                 vehicle. </p>
 *         </note>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/update-vehicles-cli.html">Update multiple
 *                 vehicles (AWS CLI)</a> in the <i>Amazon Web Services IoT FleetWise Developer Guide</i>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTFleetWiseClient, BatchUpdateVehicleCommand } from "@aws-sdk/client-iotfleetwise"; // ES Modules import
 * // const { IoTFleetWiseClient, BatchUpdateVehicleCommand } = require("@aws-sdk/client-iotfleetwise"); // CommonJS import
 * const client = new IoTFleetWiseClient(config);
 * const command = new BatchUpdateVehicleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchUpdateVehicleCommandInput} for command's `input` shape.
 * @see {@link BatchUpdateVehicleCommandOutput} for command's `response` shape.
 * @see {@link IoTFleetWiseClientResolvedConfig | config} for IoTFleetWiseClient's `config` shape.
 *
 */
export class BatchUpdateVehicleCommand extends $Command<
  BatchUpdateVehicleCommandInput,
  BatchUpdateVehicleCommandOutput,
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

  constructor(readonly input: BatchUpdateVehicleCommandInput) {
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
  ): Handler<BatchUpdateVehicleCommandInput, BatchUpdateVehicleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchUpdateVehicleCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTFleetWiseClient";
    const commandName = "BatchUpdateVehicleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchUpdateVehicleRequestFilterSensitiveLog,
      outputFilterSensitiveLog: BatchUpdateVehicleResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BatchUpdateVehicleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0BatchUpdateVehicleCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchUpdateVehicleCommandOutput> {
    return deserializeAws_json1_0BatchUpdateVehicleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
