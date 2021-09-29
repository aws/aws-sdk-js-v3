import { ProtonClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ProtonClient";
import { ListServiceTemplatesInput, ListServiceTemplatesOutput } from "../models/models_0";
import {
  deserializeAws_json1_0ListServiceTemplatesCommand,
  serializeAws_json1_0ListServiceTemplatesCommand,
} from "../protocols/Aws_json1_0";
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

export interface ListServiceTemplatesCommandInput extends ListServiceTemplatesInput {}
export interface ListServiceTemplatesCommandOutput extends ListServiceTemplatesOutput, __MetadataBearer {}

/**
 * <p>List service templates with detail data.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, ListServiceTemplatesCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, ListServiceTemplatesCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * const client = new ProtonClient(config);
 * const command = new ListServiceTemplatesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListServiceTemplatesCommandInput} for command's `input` shape.
 * @see {@link ListServiceTemplatesCommandOutput} for command's `response` shape.
 * @see {@link ProtonClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListServiceTemplatesCommand extends $Command<
  ListServiceTemplatesCommandInput,
  ListServiceTemplatesCommandOutput,
  ProtonClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListServiceTemplatesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ProtonClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListServiceTemplatesCommandInput, ListServiceTemplatesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ProtonClient";
    const commandName = "ListServiceTemplatesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListServiceTemplatesInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListServiceTemplatesOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListServiceTemplatesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0ListServiceTemplatesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListServiceTemplatesCommandOutput> {
    return deserializeAws_json1_0ListServiceTemplatesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
