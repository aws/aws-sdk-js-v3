// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@aws-sdk/types";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { SerdeContext as __SerdeContext } from "@smithy/types";

import { IoTFleetWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTFleetWiseClient";
import { DeleteVehicleRequest, DeleteVehicleResponse } from "../models/models_0";
import { de_DeleteVehicleCommand, se_DeleteVehicleCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 *
 * The input for {@link DeleteVehicleCommand}.
 */
export interface DeleteVehicleCommandInput extends DeleteVehicleRequest {}
/**
 * @public
 *
 * The output of {@link DeleteVehicleCommand}.
 */
export interface DeleteVehicleCommandOutput extends DeleteVehicleResponse, __MetadataBearer {}

/**
 * @public
 * <p> Deletes a vehicle and removes it from any campaigns.</p>
 *         <note>
 *             <p>If the vehicle is successfully deleted, Amazon Web Services IoT FleetWise sends back an HTTP 200 response
 *                 with an empty body.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTFleetWiseClient, DeleteVehicleCommand } from "@aws-sdk/client-iotfleetwise"; // ES Modules import
 * // const { IoTFleetWiseClient, DeleteVehicleCommand } = require("@aws-sdk/client-iotfleetwise"); // CommonJS import
 * const client = new IoTFleetWiseClient(config);
 * const input = { // DeleteVehicleRequest
 *   vehicleName: "STRING_VALUE", // required
 * };
 * const command = new DeleteVehicleCommand(input);
 * const response = await client.send(command);
 * // { // DeleteVehicleResponse
 * //   vehicleName: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param DeleteVehicleRequest - {@link DeleteVehicleRequest}
 * @returns {@link DeleteVehicleResponse}
 * @see {@link DeleteVehicleCommandInput} for command's `input` shape.
 * @see {@link DeleteVehicleCommandOutput} for command's `response` shape.
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
export class DeleteVehicleCommand extends $Command<
  DeleteVehicleCommandInput,
  DeleteVehicleCommandOutput,
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
  constructor(readonly input: DeleteVehicleCommandInput) {
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
  ): Handler<DeleteVehicleCommandInput, DeleteVehicleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DeleteVehicleCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTFleetWiseClient";
    const commandName = "DeleteVehicleCommand";
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
  private serialize(input: DeleteVehicleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteVehicleCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteVehicleCommandOutput> {
    return de_DeleteVehicleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
