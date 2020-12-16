import { CloudHSMV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudHSMV2Client";
import { RestoreBackupRequest, RestoreBackupResponse } from "../models/models_0";
import {
  deserializeAws_json1_1RestoreBackupCommand,
  serializeAws_json1_1RestoreBackupCommand,
} from "../protocols/Aws_json1_1";
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

export type RestoreBackupCommandInput = RestoreBackupRequest;
export type RestoreBackupCommandOutput = RestoreBackupResponse & __MetadataBearer;

/**
 * <p>Restores a specified AWS CloudHSM backup that is in the
 *                 <code>PENDING_DELETION</code> state. For mor information on deleting a backup, see
 *                 <a>DeleteBackup</a>.</p>
 */
export class RestoreBackupCommand extends $Command<
  RestoreBackupCommandInput,
  RestoreBackupCommandOutput,
  CloudHSMV2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RestoreBackupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudHSMV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RestoreBackupCommandInput, RestoreBackupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudHSMV2Client";
    const commandName = "RestoreBackupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RestoreBackupRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RestoreBackupResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RestoreBackupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1RestoreBackupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RestoreBackupCommandOutput> {
    return deserializeAws_json1_1RestoreBackupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
