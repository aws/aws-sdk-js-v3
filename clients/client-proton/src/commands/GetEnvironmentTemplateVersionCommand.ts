import { ProtonClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ProtonClient";
import { GetEnvironmentTemplateVersionInput, GetEnvironmentTemplateVersionOutput } from "../models/models_0";
import {
  deserializeAws_json1_0GetEnvironmentTemplateVersionCommand,
  serializeAws_json1_0GetEnvironmentTemplateVersionCommand,
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

export interface GetEnvironmentTemplateVersionCommandInput extends GetEnvironmentTemplateVersionInput {}
export interface GetEnvironmentTemplateVersionCommandOutput
  extends GetEnvironmentTemplateVersionOutput,
    __MetadataBearer {}

/**
 * <p>View detail data for a major or minor version of an environment template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, GetEnvironmentTemplateVersionCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, GetEnvironmentTemplateVersionCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * const client = new ProtonClient(config);
 * const command = new GetEnvironmentTemplateVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetEnvironmentTemplateVersionCommandInput} for command's `input` shape.
 * @see {@link GetEnvironmentTemplateVersionCommandOutput} for command's `response` shape.
 * @see {@link ProtonClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetEnvironmentTemplateVersionCommand extends $Command<
  GetEnvironmentTemplateVersionCommandInput,
  GetEnvironmentTemplateVersionCommandOutput,
  ProtonClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetEnvironmentTemplateVersionCommandInput) {
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
  ): Handler<GetEnvironmentTemplateVersionCommandInput, GetEnvironmentTemplateVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ProtonClient";
    const commandName = "GetEnvironmentTemplateVersionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetEnvironmentTemplateVersionInput.filterSensitiveLog,
      outputFilterSensitiveLog: GetEnvironmentTemplateVersionOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetEnvironmentTemplateVersionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0GetEnvironmentTemplateVersionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetEnvironmentTemplateVersionCommandOutput> {
    return deserializeAws_json1_0GetEnvironmentTemplateVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
