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
  DisassociateVehicleFleetRequest,
  DisassociateVehicleFleetRequestFilterSensitiveLog,
  DisassociateVehicleFleetResponse,
  DisassociateVehicleFleetResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_0DisassociateVehicleFleetCommand,
  serializeAws_json1_0DisassociateVehicleFleetCommand,
} from "../protocols/Aws_json1_0";

export interface DisassociateVehicleFleetCommandInput extends DisassociateVehicleFleetRequest {}
export interface DisassociateVehicleFleetCommandOutput extends DisassociateVehicleFleetResponse, __MetadataBearer {}

/**
 * <p>Removes, or disassociates, a vehicle from a fleet. Disassociating a vehicle from a
 *             fleet doesn't delete the vehicle.</p>
 *         <note>
 *             <p>If the vehicle is successfully dissociated from a fleet, Amazon Web Services IoT FleetWise sends back an
 *                 HTTP 200 response with an empty body.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTFleetWiseClient, DisassociateVehicleFleetCommand } from "@aws-sdk/client-iotfleetwise"; // ES Modules import
 * // const { IoTFleetWiseClient, DisassociateVehicleFleetCommand } = require("@aws-sdk/client-iotfleetwise"); // CommonJS import
 * const client = new IoTFleetWiseClient(config);
 * const command = new DisassociateVehicleFleetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateVehicleFleetCommandInput} for command's `input` shape.
 * @see {@link DisassociateVehicleFleetCommandOutput} for command's `response` shape.
 * @see {@link IoTFleetWiseClientResolvedConfig | config} for IoTFleetWiseClient's `config` shape.
 *
 */
export class DisassociateVehicleFleetCommand extends $Command<
  DisassociateVehicleFleetCommandInput,
  DisassociateVehicleFleetCommandOutput,
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

  constructor(readonly input: DisassociateVehicleFleetCommandInput) {
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
  ): Handler<DisassociateVehicleFleetCommandInput, DisassociateVehicleFleetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DisassociateVehicleFleetCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTFleetWiseClient";
    const commandName = "DisassociateVehicleFleetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisassociateVehicleFleetRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DisassociateVehicleFleetResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DisassociateVehicleFleetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0DisassociateVehicleFleetCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DisassociateVehicleFleetCommandOutput> {
    return deserializeAws_json1_0DisassociateVehicleFleetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
