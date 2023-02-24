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
  CreateModelManifestRequest,
  CreateModelManifestRequestFilterSensitiveLog,
  CreateModelManifestResponse,
  CreateModelManifestResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_0CreateModelManifestCommand,
  serializeAws_json1_0CreateModelManifestCommand,
} from "../protocols/Aws_json1_0";

export interface CreateModelManifestCommandInput extends CreateModelManifestRequest {}
export interface CreateModelManifestCommandOutput extends CreateModelManifestResponse, __MetadataBearer {}

/**
 * <p> Creates a vehicle model (model manifest) that specifies signals (attributes,
 *             branches, sensors, and actuators). </p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/vehicle-models.html">Vehicle models</a>
 *             in the <i>Amazon Web Services IoT FleetWise Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTFleetWiseClient, CreateModelManifestCommand } from "@aws-sdk/client-iotfleetwise"; // ES Modules import
 * // const { IoTFleetWiseClient, CreateModelManifestCommand } = require("@aws-sdk/client-iotfleetwise"); // CommonJS import
 * const client = new IoTFleetWiseClient(config);
 * const command = new CreateModelManifestCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateModelManifestCommandInput} for command's `input` shape.
 * @see {@link CreateModelManifestCommandOutput} for command's `response` shape.
 * @see {@link IoTFleetWiseClientResolvedConfig | config} for IoTFleetWiseClient's `config` shape.
 *
 */
export class CreateModelManifestCommand extends $Command<
  CreateModelManifestCommandInput,
  CreateModelManifestCommandOutput,
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

  constructor(readonly input: CreateModelManifestCommandInput) {
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
  ): Handler<CreateModelManifestCommandInput, CreateModelManifestCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateModelManifestCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTFleetWiseClient";
    const commandName = "CreateModelManifestCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateModelManifestRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateModelManifestResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateModelManifestCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0CreateModelManifestCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateModelManifestCommandOutput> {
    return deserializeAws_json1_0CreateModelManifestCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
