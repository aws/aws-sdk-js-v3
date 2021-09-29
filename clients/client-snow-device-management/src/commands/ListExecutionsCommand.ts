import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SnowDeviceManagementClientResolvedConfig,
} from "../SnowDeviceManagementClient";
import { ListExecutionsInput, ListExecutionsOutput } from "../models/models_0";
import {
  deserializeAws_restJson1ListExecutionsCommand,
  serializeAws_restJson1ListExecutionsCommand,
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

export interface ListExecutionsCommandInput extends ListExecutionsInput {}
export interface ListExecutionsCommandOutput extends ListExecutionsOutput, __MetadataBearer {}

/**
 * <p>Returns the status of tasks for one or more target devices.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SnowDeviceManagementClient, ListExecutionsCommand } from "@aws-sdk/client-snow-device-management"; // ES Modules import
 * // const { SnowDeviceManagementClient, ListExecutionsCommand } = require("@aws-sdk/client-snow-device-management"); // CommonJS import
 * const client = new SnowDeviceManagementClient(config);
 * const command = new ListExecutionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListExecutionsCommandInput} for command's `input` shape.
 * @see {@link ListExecutionsCommandOutput} for command's `response` shape.
 * @see {@link SnowDeviceManagementClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListExecutionsCommand extends $Command<
  ListExecutionsCommandInput,
  ListExecutionsCommandOutput,
  SnowDeviceManagementClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListExecutionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SnowDeviceManagementClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListExecutionsCommandInput, ListExecutionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SnowDeviceManagementClient";
    const commandName = "ListExecutionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListExecutionsInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListExecutionsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListExecutionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListExecutionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListExecutionsCommandOutput> {
    return deserializeAws_restJson1ListExecutionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
