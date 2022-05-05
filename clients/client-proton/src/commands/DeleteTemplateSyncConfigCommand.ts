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

import { DeleteTemplateSyncConfigInput, DeleteTemplateSyncConfigOutput } from "../models/models_0";
import {
  deserializeAws_json1_0DeleteTemplateSyncConfigCommand,
  serializeAws_json1_0DeleteTemplateSyncConfigCommand,
} from "../protocols/Aws_json1_0";
import { ProtonClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ProtonClient";

export interface DeleteTemplateSyncConfigCommandInput extends DeleteTemplateSyncConfigInput {}
export interface DeleteTemplateSyncConfigCommandOutput extends DeleteTemplateSyncConfigOutput, __MetadataBearer {}

/**
 * <p>Delete a template sync configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, DeleteTemplateSyncConfigCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, DeleteTemplateSyncConfigCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * const client = new ProtonClient(config);
 * const command = new DeleteTemplateSyncConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteTemplateSyncConfigCommandInput} for command's `input` shape.
 * @see {@link DeleteTemplateSyncConfigCommandOutput} for command's `response` shape.
 * @see {@link ProtonClientResolvedConfig | config} for ProtonClient's `config` shape.
 *
 */
export class DeleteTemplateSyncConfigCommand extends $Command<
  DeleteTemplateSyncConfigCommandInput,
  DeleteTemplateSyncConfigCommandOutput,
  ProtonClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteTemplateSyncConfigCommandInput) {
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
  ): Handler<DeleteTemplateSyncConfigCommandInput, DeleteTemplateSyncConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ProtonClient";
    const commandName = "DeleteTemplateSyncConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteTemplateSyncConfigInput.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteTemplateSyncConfigOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteTemplateSyncConfigCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0DeleteTemplateSyncConfigCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteTemplateSyncConfigCommandOutput> {
    return deserializeAws_json1_0DeleteTemplateSyncConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
