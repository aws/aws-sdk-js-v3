import { ProtonClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ProtonClient";
import { CreateEnvironmentInput, CreateEnvironmentOutput } from "../models/models_0";
import {
  deserializeAws_json1_0CreateEnvironmentCommand,
  serializeAws_json1_0CreateEnvironmentCommand,
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

export interface CreateEnvironmentCommandInput extends CreateEnvironmentInput {}
export interface CreateEnvironmentCommandOutput extends CreateEnvironmentOutput, __MetadataBearer {}

/**
 * <p>Deploy a new environment. An AWS Proton environment is created from an environment template that defines infrastructure and resources
 *             that can be shared across services. For more information, see the <a href="https://docs.aws.amazon.com/proton/latest/adminguide/ag-environments.html">Environments</a> in the <i>AWS Proton Administrator
 *             Guide.</i>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, CreateEnvironmentCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, CreateEnvironmentCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * const client = new ProtonClient(config);
 * const command = new CreateEnvironmentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateEnvironmentCommandInput} for command's `input` shape.
 * @see {@link CreateEnvironmentCommandOutput} for command's `response` shape.
 * @see {@link ProtonClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateEnvironmentCommand extends $Command<
  CreateEnvironmentCommandInput,
  CreateEnvironmentCommandOutput,
  ProtonClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateEnvironmentCommandInput) {
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
  ): Handler<CreateEnvironmentCommandInput, CreateEnvironmentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ProtonClient";
    const commandName = "CreateEnvironmentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateEnvironmentInput.filterSensitiveLog,
      outputFilterSensitiveLog: CreateEnvironmentOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateEnvironmentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0CreateEnvironmentCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateEnvironmentCommandOutput> {
    return deserializeAws_json1_0CreateEnvironmentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
