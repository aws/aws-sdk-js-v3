import { GreengrassV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassV2Client";
import { ListCoreDevicesRequest, ListCoreDevicesResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListCoreDevicesCommand,
  serializeAws_restJson1ListCoreDevicesCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface ListCoreDevicesCommandInput extends ListCoreDevicesRequest {}
export interface ListCoreDevicesCommandOutput extends ListCoreDevicesResponse, __MetadataBearer {}

/**
 * <p>Retrieves a paginated list of Greengrass core devices.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassV2Client, ListCoreDevicesCommand } from "@aws-sdk/client-greengrassv2"; // ES Modules import
 * // const { GreengrassV2Client, ListCoreDevicesCommand } = require("@aws-sdk/client-greengrassv2"); // CommonJS import
 * const client = new GreengrassV2Client(config);
 * const command = new ListCoreDevicesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListCoreDevicesCommandInput} for command's `input` shape.
 * @see {@link ListCoreDevicesCommandOutput} for command's `response` shape.
 * @see {@link GreengrassV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListCoreDevicesCommand extends $Command<
  ListCoreDevicesCommandInput,
  ListCoreDevicesCommandOutput,
  GreengrassV2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListCoreDevicesCommandInput) {
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
  ): Handler<ListCoreDevicesCommandInput, ListCoreDevicesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GreengrassV2Client";
    const commandName = "ListCoreDevicesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListCoreDevicesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListCoreDevicesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListCoreDevicesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListCoreDevicesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListCoreDevicesCommandOutput> {
    return deserializeAws_restJson1ListCoreDevicesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
