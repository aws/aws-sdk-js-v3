import { ProtonClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ProtonClient";
import { DeleteEnvironmentTemplateInput, DeleteEnvironmentTemplateOutput } from "../models/models_0";
import {
  deserializeAws_json1_0DeleteEnvironmentTemplateCommand,
  serializeAws_json1_0DeleteEnvironmentTemplateCommand,
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

export interface DeleteEnvironmentTemplateCommandInput extends DeleteEnvironmentTemplateInput {}
export interface DeleteEnvironmentTemplateCommandOutput extends DeleteEnvironmentTemplateOutput, __MetadataBearer {}

/**
 * <p>If no other major or minor versions of an environment template exist, delete the environment template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, DeleteEnvironmentTemplateCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, DeleteEnvironmentTemplateCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * const client = new ProtonClient(config);
 * const command = new DeleteEnvironmentTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteEnvironmentTemplateCommandInput} for command's `input` shape.
 * @see {@link DeleteEnvironmentTemplateCommandOutput} for command's `response` shape.
 * @see {@link ProtonClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteEnvironmentTemplateCommand extends $Command<
  DeleteEnvironmentTemplateCommandInput,
  DeleteEnvironmentTemplateCommandOutput,
  ProtonClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteEnvironmentTemplateCommandInput) {
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
  ): Handler<DeleteEnvironmentTemplateCommandInput, DeleteEnvironmentTemplateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ProtonClient";
    const commandName = "DeleteEnvironmentTemplateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteEnvironmentTemplateInput.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteEnvironmentTemplateOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteEnvironmentTemplateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0DeleteEnvironmentTemplateCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteEnvironmentTemplateCommandOutput> {
    return deserializeAws_json1_0DeleteEnvironmentTemplateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
