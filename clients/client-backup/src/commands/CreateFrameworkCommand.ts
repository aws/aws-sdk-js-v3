import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { CreateFrameworkInput, CreateFrameworkOutput } from "../models/models_0";
import {
  deserializeAws_restJson1CreateFrameworkCommand,
  serializeAws_restJson1CreateFrameworkCommand,
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

export interface CreateFrameworkCommandInput extends CreateFrameworkInput {}
export interface CreateFrameworkCommandOutput extends CreateFrameworkOutput, __MetadataBearer {}

/**
 * <p>Creates a framework with one or more controls. A framework is a collection of controls
 *          that you can use to evaluate your backup practices. By using pre-built customizable
 *          controls to define your policies, you can evaluate whether your backup practices comply
 *          with your policies. To get insights into the compliance status of your frameworks, you can
 *          set up automatic daily reports.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, CreateFrameworkCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, CreateFrameworkCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const command = new CreateFrameworkCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateFrameworkCommandInput} for command's `input` shape.
 * @see {@link CreateFrameworkCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateFrameworkCommand extends $Command<
  CreateFrameworkCommandInput,
  CreateFrameworkCommandOutput,
  BackupClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateFrameworkCommandInput) {
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
  ): Handler<CreateFrameworkCommandInput, CreateFrameworkCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupClient";
    const commandName = "CreateFrameworkCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateFrameworkInput.filterSensitiveLog,
      outputFilterSensitiveLog: CreateFrameworkOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateFrameworkCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateFrameworkCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateFrameworkCommandOutput> {
    return deserializeAws_restJson1CreateFrameworkCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
