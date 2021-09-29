import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { ListConnectorDefinitionsRequest, ListConnectorDefinitionsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListConnectorDefinitionsCommand,
  serializeAws_restJson1ListConnectorDefinitionsCommand,
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

export interface ListConnectorDefinitionsCommandInput extends ListConnectorDefinitionsRequest {}
export interface ListConnectorDefinitionsCommandOutput extends ListConnectorDefinitionsResponse, __MetadataBearer {}

/**
 * Retrieves a list of connector definitions.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, ListConnectorDefinitionsCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, ListConnectorDefinitionsCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new ListConnectorDefinitionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListConnectorDefinitionsCommandInput} for command's `input` shape.
 * @see {@link ListConnectorDefinitionsCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListConnectorDefinitionsCommand extends $Command<
  ListConnectorDefinitionsCommandInput,
  ListConnectorDefinitionsCommandOutput,
  GreengrassClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListConnectorDefinitionsCommandInput) {
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
  ): Handler<ListConnectorDefinitionsCommandInput, ListConnectorDefinitionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GreengrassClient";
    const commandName = "ListConnectorDefinitionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListConnectorDefinitionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListConnectorDefinitionsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListConnectorDefinitionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListConnectorDefinitionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListConnectorDefinitionsCommandOutput> {
    return deserializeAws_restJson1ListConnectorDefinitionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
