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

import {
  IoT1ClickProjectsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IoT1ClickProjectsClient";
import {
  AssociateDeviceWithPlacementRequest,
  AssociateDeviceWithPlacementRequestFilterSensitiveLog,
  AssociateDeviceWithPlacementResponse,
  AssociateDeviceWithPlacementResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1AssociateDeviceWithPlacementCommand,
  serializeAws_restJson1AssociateDeviceWithPlacementCommand,
} from "../protocols/Aws_restJson1";

export interface AssociateDeviceWithPlacementCommandInput extends AssociateDeviceWithPlacementRequest {}
export interface AssociateDeviceWithPlacementCommandOutput
  extends AssociateDeviceWithPlacementResponse,
    __MetadataBearer {}

/**
 * <p>Associates a physical device with a placement.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoT1ClickProjectsClient, AssociateDeviceWithPlacementCommand } from "@aws-sdk/client-iot-1click-projects"; // ES Modules import
 * // const { IoT1ClickProjectsClient, AssociateDeviceWithPlacementCommand } = require("@aws-sdk/client-iot-1click-projects"); // CommonJS import
 * const client = new IoT1ClickProjectsClient(config);
 * const command = new AssociateDeviceWithPlacementCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateDeviceWithPlacementCommandInput} for command's `input` shape.
 * @see {@link AssociateDeviceWithPlacementCommandOutput} for command's `response` shape.
 * @see {@link IoT1ClickProjectsClientResolvedConfig | config} for IoT1ClickProjectsClient's `config` shape.
 *
 */
export class AssociateDeviceWithPlacementCommand extends $Command<
  AssociateDeviceWithPlacementCommandInput,
  AssociateDeviceWithPlacementCommandOutput,
  IoT1ClickProjectsClientResolvedConfig
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

  constructor(readonly input: AssociateDeviceWithPlacementCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoT1ClickProjectsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AssociateDeviceWithPlacementCommandInput, AssociateDeviceWithPlacementCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AssociateDeviceWithPlacementCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoT1ClickProjectsClient";
    const commandName = "AssociateDeviceWithPlacementCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociateDeviceWithPlacementRequestFilterSensitiveLog,
      outputFilterSensitiveLog: AssociateDeviceWithPlacementResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AssociateDeviceWithPlacementCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1AssociateDeviceWithPlacementCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AssociateDeviceWithPlacementCommandOutput> {
    return deserializeAws_restJson1AssociateDeviceWithPlacementCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
