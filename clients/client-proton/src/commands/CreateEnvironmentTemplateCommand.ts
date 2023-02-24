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

import {
  CreateEnvironmentTemplateInput,
  CreateEnvironmentTemplateInputFilterSensitiveLog,
  CreateEnvironmentTemplateOutput,
  CreateEnvironmentTemplateOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_0CreateEnvironmentTemplateCommand,
  serializeAws_json1_0CreateEnvironmentTemplateCommand,
} from "../protocols/Aws_json1_0";
import { ProtonClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ProtonClient";

export interface CreateEnvironmentTemplateCommandInput extends CreateEnvironmentTemplateInput {}
export interface CreateEnvironmentTemplateCommandOutput extends CreateEnvironmentTemplateOutput, __MetadataBearer {}

/**
 * <p>Create an environment template for Proton. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-templates.html">Environment Templates</a> in the <i>Proton User Guide</i>.</p>
 *          <p>You can create an environment template in one of the two following ways:</p>
 *          <ul>
 *             <li>
 *                <p>Register and publish a <i>standard</i> environment template that instructs Proton to deploy and manage environment
 *           infrastructure.</p>
 *             </li>
 *             <li>
 *                <p>Register and publish a <i>customer managed</i> environment template that connects Proton to your existing provisioned
 *           infrastructure that you manage. Proton <i>doesn't</i> manage your existing provisioned infrastructure. To create an environment
 *           template for customer provisioned and managed infrastructure, include the <code>provisioning</code> parameter and set the value to
 *             <code>CUSTOMER_MANAGED</code>. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/template-create.html">Register
 *             and publish an environment template</a> in the <i>Proton User Guide</i>.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, CreateEnvironmentTemplateCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, CreateEnvironmentTemplateCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * const client = new ProtonClient(config);
 * const command = new CreateEnvironmentTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateEnvironmentTemplateCommandInput} for command's `input` shape.
 * @see {@link CreateEnvironmentTemplateCommandOutput} for command's `response` shape.
 * @see {@link ProtonClientResolvedConfig | config} for ProtonClient's `config` shape.
 *
 */
export class CreateEnvironmentTemplateCommand extends $Command<
  CreateEnvironmentTemplateCommandInput,
  CreateEnvironmentTemplateCommandOutput,
  ProtonClientResolvedConfig
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

  constructor(readonly input: CreateEnvironmentTemplateCommandInput) {
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
  ): Handler<CreateEnvironmentTemplateCommandInput, CreateEnvironmentTemplateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateEnvironmentTemplateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ProtonClient";
    const commandName = "CreateEnvironmentTemplateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateEnvironmentTemplateInputFilterSensitiveLog,
      outputFilterSensitiveLog: CreateEnvironmentTemplateOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateEnvironmentTemplateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0CreateEnvironmentTemplateCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateEnvironmentTemplateCommandOutput> {
    return deserializeAws_json1_0CreateEnvironmentTemplateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
