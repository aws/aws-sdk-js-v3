import { ProtonClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ProtonClient";
import { ListServiceTemplateVersionsInput, ListServiceTemplateVersionsOutput } from "../models/models_0";
import {
  deserializeAws_json1_0ListServiceTemplateVersionsCommand,
  serializeAws_json1_0ListServiceTemplateVersionsCommand,
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

export interface ListServiceTemplateVersionsCommandInput extends ListServiceTemplateVersionsInput {}
export interface ListServiceTemplateVersionsCommandOutput extends ListServiceTemplateVersionsOutput, __MetadataBearer {}

/**
 * <p>List major or minor versions of a service template with detail data.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, ListServiceTemplateVersionsCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, ListServiceTemplateVersionsCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * const client = new ProtonClient(config);
 * const command = new ListServiceTemplateVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListServiceTemplateVersionsCommandInput} for command's `input` shape.
 * @see {@link ListServiceTemplateVersionsCommandOutput} for command's `response` shape.
 * @see {@link ProtonClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListServiceTemplateVersionsCommand extends $Command<
  ListServiceTemplateVersionsCommandInput,
  ListServiceTemplateVersionsCommandOutput,
  ProtonClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListServiceTemplateVersionsCommandInput) {
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
  ): Handler<ListServiceTemplateVersionsCommandInput, ListServiceTemplateVersionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ProtonClient";
    const commandName = "ListServiceTemplateVersionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListServiceTemplateVersionsInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListServiceTemplateVersionsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListServiceTemplateVersionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0ListServiceTemplateVersionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListServiceTemplateVersionsCommandOutput> {
    return deserializeAws_json1_0ListServiceTemplateVersionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
