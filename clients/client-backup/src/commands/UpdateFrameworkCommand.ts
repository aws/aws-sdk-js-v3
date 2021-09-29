import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { UpdateFrameworkInput, UpdateFrameworkOutput } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateFrameworkCommand,
  serializeAws_restJson1UpdateFrameworkCommand,
} from "../protocols/Aws_restJson1";
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

export interface UpdateFrameworkCommandInput extends UpdateFrameworkInput {}
export interface UpdateFrameworkCommandOutput extends UpdateFrameworkOutput, __MetadataBearer {}

/**
 * <p>Updates an existing framework identified by its <code>FrameworkName</code> with the
 *          input document in JSON format.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, UpdateFrameworkCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, UpdateFrameworkCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const command = new UpdateFrameworkCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateFrameworkCommandInput} for command's `input` shape.
 * @see {@link UpdateFrameworkCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateFrameworkCommand extends $Command<
  UpdateFrameworkCommandInput,
  UpdateFrameworkCommandOutput,
  BackupClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateFrameworkCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BackupClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateFrameworkCommandInput, UpdateFrameworkCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupClient";
    const commandName = "UpdateFrameworkCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateFrameworkInput.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateFrameworkOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateFrameworkCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateFrameworkCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateFrameworkCommandOutput> {
    return deserializeAws_restJson1UpdateFrameworkCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
