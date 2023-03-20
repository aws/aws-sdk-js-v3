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
import { GetVehicleRequest, GetVehicleResponse } from "../models/models_0";
import {
  deserializeAws_json1_0GetVehicleCommand,
  serializeAws_json1_0GetVehicleCommand,
} from "../protocols/Aws_json1_0";

/**
 * @public
 *
 * The input for {@link GetVehicleCommand}.
 */
export interface GetVehicleCommandInput extends GetVehicleRequest {}
/**
 * @public
 *
 * The output of {@link GetVehicleCommand}.
 */
export interface GetVehicleCommandOutput extends GetVehicleResponse, __MetadataBearer {}

/**
 * @public
 * <p> Retrieves information about a vehicle. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTFleetWiseClient, GetVehicleCommand } from "@aws-sdk/client-iotfleetwise"; // ES Modules import
 * // const { IoTFleetWiseClient, GetVehicleCommand } = require("@aws-sdk/client-iotfleetwise"); // CommonJS import
 * const client = new IoTFleetWiseClient(config);
 * const command = new GetVehicleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param GetVehicleCommandInput - {@link GetVehicleCommandInput}
 * @returns {@link GetVehicleCommandOutput}
 * @see {@link GetVehicleCommandInput} for command's `input` shape.
 * @see {@link GetVehicleCommandOutput} for command's `response` shape.
 * @see {@link IoTFleetWiseClientResolvedConfig | config} for IoTFleetWiseClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient permission to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request couldn't be completed because the server temporarily failed.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource wasn't found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request couldn't be completed due to throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 *
 */
export class GetVehicleCommand extends $Command<
  GetVehicleCommandInput,
  GetVehicleCommandOutput,
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
  constructor(readonly input: GetVehicleCommandInput) {
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
  ): Handler<GetVehicleCommandInput, GetVehicleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetVehicleCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTFleetWiseClient";
    const commandName = "GetVehicleCommand";
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
  private serialize(input: GetVehicleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0GetVehicleCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetVehicleCommandOutput> {
    return deserializeAws_json1_0GetVehicleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
