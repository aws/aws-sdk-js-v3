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
  GetVehicleStatusRequest,
  GetVehicleStatusRequestFilterSensitiveLog,
  GetVehicleStatusResponse,
  GetVehicleStatusResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_0GetVehicleStatusCommand,
  serializeAws_json1_0GetVehicleStatusCommand,
} from "../protocols/Aws_json1_0";

export interface GetVehicleStatusCommandInput extends GetVehicleStatusRequest {}
export interface GetVehicleStatusCommandOutput extends GetVehicleStatusResponse, __MetadataBearer {}

/**
 * <p> Retrieves information about the status of a vehicle with any associated campaigns.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTFleetWiseClient, GetVehicleStatusCommand } from "@aws-sdk/client-iotfleetwise"; // ES Modules import
 * // const { IoTFleetWiseClient, GetVehicleStatusCommand } = require("@aws-sdk/client-iotfleetwise"); // CommonJS import
 * const client = new IoTFleetWiseClient(config);
 * const command = new GetVehicleStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetVehicleStatusCommandInput} for command's `input` shape.
 * @see {@link GetVehicleStatusCommandOutput} for command's `response` shape.
 * @see {@link IoTFleetWiseClientResolvedConfig | config} for IoTFleetWiseClient's `config` shape.
 *
 */
export class GetVehicleStatusCommand extends $Command<
  GetVehicleStatusCommandInput,
  GetVehicleStatusCommandOutput,
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

  constructor(readonly input: GetVehicleStatusCommandInput) {
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
  ): Handler<GetVehicleStatusCommandInput, GetVehicleStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetVehicleStatusCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTFleetWiseClient";
    const commandName = "GetVehicleStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetVehicleStatusRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetVehicleStatusResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetVehicleStatusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0GetVehicleStatusCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetVehicleStatusCommandOutput> {
    return deserializeAws_json1_0GetVehicleStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
