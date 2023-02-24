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

import { GreengrassV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassV2Client";
import {
  ListClientDevicesAssociatedWithCoreDeviceRequest,
  ListClientDevicesAssociatedWithCoreDeviceRequestFilterSensitiveLog,
  ListClientDevicesAssociatedWithCoreDeviceResponse,
  ListClientDevicesAssociatedWithCoreDeviceResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListClientDevicesAssociatedWithCoreDeviceCommand,
  serializeAws_restJson1ListClientDevicesAssociatedWithCoreDeviceCommand,
} from "../protocols/Aws_restJson1";

export interface ListClientDevicesAssociatedWithCoreDeviceCommandInput
  extends ListClientDevicesAssociatedWithCoreDeviceRequest {}
export interface ListClientDevicesAssociatedWithCoreDeviceCommandOutput
  extends ListClientDevicesAssociatedWithCoreDeviceResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves a paginated list of client devices that are associated with a core
 *       device.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassV2Client, ListClientDevicesAssociatedWithCoreDeviceCommand } from "@aws-sdk/client-greengrassv2"; // ES Modules import
 * // const { GreengrassV2Client, ListClientDevicesAssociatedWithCoreDeviceCommand } = require("@aws-sdk/client-greengrassv2"); // CommonJS import
 * const client = new GreengrassV2Client(config);
 * const command = new ListClientDevicesAssociatedWithCoreDeviceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListClientDevicesAssociatedWithCoreDeviceCommandInput} for command's `input` shape.
 * @see {@link ListClientDevicesAssociatedWithCoreDeviceCommandOutput} for command's `response` shape.
 * @see {@link GreengrassV2ClientResolvedConfig | config} for GreengrassV2Client's `config` shape.
 *
 */
export class ListClientDevicesAssociatedWithCoreDeviceCommand extends $Command<
  ListClientDevicesAssociatedWithCoreDeviceCommandInput,
  ListClientDevicesAssociatedWithCoreDeviceCommandOutput,
  GreengrassV2ClientResolvedConfig
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

  constructor(readonly input: ListClientDevicesAssociatedWithCoreDeviceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GreengrassV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    ListClientDevicesAssociatedWithCoreDeviceCommandInput,
    ListClientDevicesAssociatedWithCoreDeviceCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        ListClientDevicesAssociatedWithCoreDeviceCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GreengrassV2Client";
    const commandName = "ListClientDevicesAssociatedWithCoreDeviceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListClientDevicesAssociatedWithCoreDeviceRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListClientDevicesAssociatedWithCoreDeviceResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListClientDevicesAssociatedWithCoreDeviceCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1ListClientDevicesAssociatedWithCoreDeviceCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListClientDevicesAssociatedWithCoreDeviceCommandOutput> {
    return deserializeAws_restJson1ListClientDevicesAssociatedWithCoreDeviceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
