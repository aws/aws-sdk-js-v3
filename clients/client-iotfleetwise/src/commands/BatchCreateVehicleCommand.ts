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
import { BatchCreateVehicleRequest, BatchCreateVehicleResponse } from "../models/models_0";
import {
  deserializeAws_json1_0BatchCreateVehicleCommand,
  serializeAws_json1_0BatchCreateVehicleCommand,
} from "../protocols/Aws_json1_0";

/**
 * @public
 *
 * The input for {@link BatchCreateVehicleCommand}.
 */
export interface BatchCreateVehicleCommandInput extends BatchCreateVehicleRequest {}
/**
 * @public
 *
 * The output of {@link BatchCreateVehicleCommand}.
 */
export interface BatchCreateVehicleCommandOutput extends BatchCreateVehicleResponse, __MetadataBearer {}

/**
 * @public
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
 * @param BatchCreateVehicleCommandInput - {@link BatchCreateVehicleCommandInput}
 * @returns {@link BatchCreateVehicleCommandOutput}
 * @see {@link BatchCreateVehicleCommandInput} for command's `input` shape.
 * @see {@link BatchCreateVehicleCommandOutput} for command's `response` shape.
 * @see {@link IoTFleetWiseClientResolvedConfig | config} for IoTFleetWiseClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient permission to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request couldn't be completed because the server temporarily failed.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A service quota was exceeded. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request couldn't be completed due to throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
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

  /**
   * @public
   */
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
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: BatchCreateVehicleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0BatchCreateVehicleCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchCreateVehicleCommandOutput> {
    return deserializeAws_json1_0BatchCreateVehicleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
