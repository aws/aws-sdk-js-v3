// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { IoTFleetWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTFleetWiseClient";
import { BatchUpdateVehicleRequest, BatchUpdateVehicleResponse } from "../models/models_0";
import { de_BatchUpdateVehicleCommand, se_BatchUpdateVehicleCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link BatchUpdateVehicleCommand}.
 */
export interface BatchUpdateVehicleCommandInput extends BatchUpdateVehicleRequest {}
/**
 * @public
 *
 * The output of {@link BatchUpdateVehicleCommand}.
 */
export interface BatchUpdateVehicleCommandOutput extends BatchUpdateVehicleResponse, __MetadataBearer {}

/**
 * @public
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
 * const input = { // BatchUpdateVehicleRequest
 *   vehicles: [ // updateVehicleRequestItems // required
 *     { // UpdateVehicleRequestItem
 *       vehicleName: "STRING_VALUE", // required
 *       modelManifestArn: "STRING_VALUE",
 *       decoderManifestArn: "STRING_VALUE",
 *       attributes: { // attributesMap
 *         "<keys>": "STRING_VALUE",
 *       },
 *       attributeUpdateMode: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new BatchUpdateVehicleCommand(input);
 * const response = await client.send(command);
 * // { // BatchUpdateVehicleResponse
 * //   vehicles: [ // updateVehicleResponseItems
 * //     { // UpdateVehicleResponseItem
 * //       vehicleName: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   errors: [ // updateVehicleErrors
 * //     { // UpdateVehicleError
 * //       vehicleName: "STRING_VALUE",
 * //       code: Number("int"),
 * //       message: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchUpdateVehicleCommandInput - {@link BatchUpdateVehicleCommandInput}
 * @returns {@link BatchUpdateVehicleCommandOutput}
 * @see {@link BatchUpdateVehicleCommandInput} for command's `input` shape.
 * @see {@link BatchUpdateVehicleCommandOutput} for command's `response` shape.
 * @see {@link IoTFleetWiseClientResolvedConfig | config} for IoTFleetWiseClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient permission to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request couldn't be completed because the server temporarily failed.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request couldn't be completed due to throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link IoTFleetWiseServiceException}
 * <p>Base exception class for all service exceptions from IoTFleetWise service.</p>
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

  /**
   * @public
   */
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
  private serialize(input: BatchUpdateVehicleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_BatchUpdateVehicleCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchUpdateVehicleCommandOutput> {
    return de_BatchUpdateVehicleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
