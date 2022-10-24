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
  CreateEnvironmentTemplateVersionInput,
  CreateEnvironmentTemplateVersionInputFilterSensitiveLog,
  CreateEnvironmentTemplateVersionOutput,
  CreateEnvironmentTemplateVersionOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_0CreateEnvironmentTemplateVersionCommand,
  serializeAws_json1_0CreateEnvironmentTemplateVersionCommand,
} from "../protocols/Aws_json1_0";
import { ProtonClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ProtonClient";

export interface CreateEnvironmentTemplateVersionCommandInput extends CreateEnvironmentTemplateVersionInput {}
export interface CreateEnvironmentTemplateVersionCommandOutput
  extends CreateEnvironmentTemplateVersionOutput,
    __MetadataBearer {}

/**
 * <p>Create a new major or minor version of an environment template. A major version of an environment template is a version that
 *         <i>isn't</i> backwards compatible. A minor version of an environment template is a version that's backwards compatible within its major
 *       version.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, CreateEnvironmentTemplateVersionCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, CreateEnvironmentTemplateVersionCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * const client = new ProtonClient(config);
 * const command = new CreateEnvironmentTemplateVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateEnvironmentTemplateVersionCommandInput} for command's `input` shape.
 * @see {@link CreateEnvironmentTemplateVersionCommandOutput} for command's `response` shape.
 * @see {@link ProtonClientResolvedConfig | config} for ProtonClient's `config` shape.
 *
 */
export class CreateEnvironmentTemplateVersionCommand extends $Command<
  CreateEnvironmentTemplateVersionCommandInput,
  CreateEnvironmentTemplateVersionCommandOutput,
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

  constructor(readonly input: CreateEnvironmentTemplateVersionCommandInput) {
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
  ): Handler<CreateEnvironmentTemplateVersionCommandInput, CreateEnvironmentTemplateVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateEnvironmentTemplateVersionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ProtonClient";
    const commandName = "CreateEnvironmentTemplateVersionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateEnvironmentTemplateVersionInputFilterSensitiveLog,
      outputFilterSensitiveLog: CreateEnvironmentTemplateVersionOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: CreateEnvironmentTemplateVersionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_0CreateEnvironmentTemplateVersionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateEnvironmentTemplateVersionCommandOutput> {
    return deserializeAws_json1_0CreateEnvironmentTemplateVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
