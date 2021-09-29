import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { ListDeviceDefinitionsRequest, ListDeviceDefinitionsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListDeviceDefinitionsCommand,
  serializeAws_restJson1ListDeviceDefinitionsCommand,
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

export interface ListDeviceDefinitionsCommandInput extends ListDeviceDefinitionsRequest {}
export interface ListDeviceDefinitionsCommandOutput extends ListDeviceDefinitionsResponse, __MetadataBearer {}

/**
 * Retrieves a list of device definitions.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, ListDeviceDefinitionsCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, ListDeviceDefinitionsCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new ListDeviceDefinitionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDeviceDefinitionsCommandInput} for command's `input` shape.
 * @see {@link ListDeviceDefinitionsCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListDeviceDefinitionsCommand extends $Command<
  ListDeviceDefinitionsCommandInput,
  ListDeviceDefinitionsCommandOutput,
  GreengrassClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListDeviceDefinitionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GreengrassClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListDeviceDefinitionsCommandInput, ListDeviceDefinitionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GreengrassClient";
    const commandName = "ListDeviceDefinitionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListDeviceDefinitionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListDeviceDefinitionsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListDeviceDefinitionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListDeviceDefinitionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListDeviceDefinitionsCommandOutput> {
    return deserializeAws_restJson1ListDeviceDefinitionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
