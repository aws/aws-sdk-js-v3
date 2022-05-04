// smithy-typescript generated code
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

import { CreateTemplateSyncConfigInput, CreateTemplateSyncConfigOutput } from "../models/models_0";
import {
  deserializeAws_json1_0CreateTemplateSyncConfigCommand,
  serializeAws_json1_0CreateTemplateSyncConfigCommand,
} from "../protocols/Aws_json1_0";
import { ProtonClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ProtonClient";

export interface CreateTemplateSyncConfigCommandInput extends CreateTemplateSyncConfigInput {}
export interface CreateTemplateSyncConfigCommandOutput extends CreateTemplateSyncConfigOutput, __MetadataBearer {}

/**
 * <p>Set up a template to create new template versions automatically. When a commit is pushed to your registered <a href="https://docs.aws.amazon.com/proton/latest/APIReference/API_Repository.html">repository</a>, Proton checks for changes to your repository template bundles. If it detects
 *       a template bundle change, a new major or minor version of its template is created, if the version doesn’t already exist. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/adminguide/ag-template-sync-configs.html">Template sync configurations</a> in the <i>Proton
 *         Administrator Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, CreateTemplateSyncConfigCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, CreateTemplateSyncConfigCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * const client = new ProtonClient(config);
 * const command = new CreateTemplateSyncConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateTemplateSyncConfigCommandInput} for command's `input` shape.
 * @see {@link CreateTemplateSyncConfigCommandOutput} for command's `response` shape.
 * @see {@link ProtonClientResolvedConfig | config} for ProtonClient's `config` shape.
 *
 */
export class CreateTemplateSyncConfigCommand extends $Command<
  CreateTemplateSyncConfigCommandInput,
  CreateTemplateSyncConfigCommandOutput,
  ProtonClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateTemplateSyncConfigCommandInput) {
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
  ): Handler<CreateTemplateSyncConfigCommandInput, CreateTemplateSyncConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ProtonClient";
    const commandName = "CreateTemplateSyncConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateTemplateSyncConfigInput.filterSensitiveLog,
      outputFilterSensitiveLog: CreateTemplateSyncConfigOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateTemplateSyncConfigCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0CreateTemplateSyncConfigCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateTemplateSyncConfigCommandOutput> {
    return deserializeAws_json1_0CreateTemplateSyncConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
