import { EFSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EFSClient";
import { BackupPolicyDescription, PutBackupPolicyRequest } from "../models/models_0";
import {
  deserializeAws_restJson1PutBackupPolicyCommand,
  serializeAws_restJson1PutBackupPolicyCommand,
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

export interface PutBackupPolicyCommandInput extends PutBackupPolicyRequest {}
export interface PutBackupPolicyCommandOutput extends BackupPolicyDescription, __MetadataBearer {}

/**
 * <p>Updates the file system's backup policy. Use this action to start or stop automatic backups of the file system. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EFSClient, PutBackupPolicyCommand } from "@aws-sdk/client-efs"; // ES Modules import
 * // const { EFSClient, PutBackupPolicyCommand } = require("@aws-sdk/client-efs"); // CommonJS import
 * const client = new EFSClient(config);
 * const command = new PutBackupPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutBackupPolicyCommandInput} for command's `input` shape.
 * @see {@link PutBackupPolicyCommandOutput} for command's `response` shape.
 * @see {@link EFSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class PutBackupPolicyCommand extends $Command<
  PutBackupPolicyCommandInput,
  PutBackupPolicyCommandOutput,
  EFSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutBackupPolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EFSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutBackupPolicyCommandInput, PutBackupPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EFSClient";
    const commandName = "PutBackupPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutBackupPolicyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: BackupPolicyDescription.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutBackupPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1PutBackupPolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutBackupPolicyCommandOutput> {
    return deserializeAws_restJson1PutBackupPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
