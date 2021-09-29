import { ProtonClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ProtonClient";
import { CreateServiceTemplateInput, CreateServiceTemplateOutput } from "../models/models_0";
import {
  deserializeAws_json1_0CreateServiceTemplateCommand,
  serializeAws_json1_0CreateServiceTemplateCommand,
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

export interface CreateServiceTemplateCommandInput extends CreateServiceTemplateInput {}
export interface CreateServiceTemplateCommandOutput extends CreateServiceTemplateOutput, __MetadataBearer {}

/**
 * <p>Create a service template. The administrator creates a service template to define standardized infrastructure and an optional CICD
 *             service pipeline. Developers, in turn, select the service template from AWS Proton. If the selected service template includes a service
 *             pipeline definition, they provide a link to their source code repository. AWS Proton then deploys and manages the infrastructure defined by
 *             the selected service template. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/adminguide/managing-svc-templates.html">Service Templates</a> in the <i>AWS Proton Administrator
 *                 Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, CreateServiceTemplateCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, CreateServiceTemplateCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * const client = new ProtonClient(config);
 * const command = new CreateServiceTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateServiceTemplateCommandInput} for command's `input` shape.
 * @see {@link CreateServiceTemplateCommandOutput} for command's `response` shape.
 * @see {@link ProtonClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateServiceTemplateCommand extends $Command<
  CreateServiceTemplateCommandInput,
  CreateServiceTemplateCommandOutput,
  ProtonClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateServiceTemplateCommandInput) {
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
  ): Handler<CreateServiceTemplateCommandInput, CreateServiceTemplateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ProtonClient";
    const commandName = "CreateServiceTemplateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateServiceTemplateInput.filterSensitiveLog,
      outputFilterSensitiveLog: CreateServiceTemplateOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateServiceTemplateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0CreateServiceTemplateCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateServiceTemplateCommandOutput> {
    return deserializeAws_json1_0CreateServiceTemplateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
