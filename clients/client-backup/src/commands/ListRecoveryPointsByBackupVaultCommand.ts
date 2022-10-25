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

import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import {
  ListRecoveryPointsByBackupVaultInput,
  ListRecoveryPointsByBackupVaultInputFilterSensitiveLog,
  ListRecoveryPointsByBackupVaultOutput,
  ListRecoveryPointsByBackupVaultOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListRecoveryPointsByBackupVaultCommand,
  serializeAws_restJson1ListRecoveryPointsByBackupVaultCommand,
} from "../protocols/Aws_restJson1";

export interface ListRecoveryPointsByBackupVaultCommandInput extends ListRecoveryPointsByBackupVaultInput {}
export interface ListRecoveryPointsByBackupVaultCommandOutput
  extends ListRecoveryPointsByBackupVaultOutput,
    __MetadataBearer {}

/**
 * <p>Returns detailed information about the recovery points stored in a backup vault.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, ListRecoveryPointsByBackupVaultCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, ListRecoveryPointsByBackupVaultCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const command = new ListRecoveryPointsByBackupVaultCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListRecoveryPointsByBackupVaultCommandInput} for command's `input` shape.
 * @see {@link ListRecoveryPointsByBackupVaultCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for BackupClient's `config` shape.
 *
 */
export class ListRecoveryPointsByBackupVaultCommand extends $Command<
  ListRecoveryPointsByBackupVaultCommandInput,
  ListRecoveryPointsByBackupVaultCommandOutput,
  BackupClientResolvedConfig
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

  constructor(readonly input: ListRecoveryPointsByBackupVaultCommandInput) {
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
  ): Handler<ListRecoveryPointsByBackupVaultCommandInput, ListRecoveryPointsByBackupVaultCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListRecoveryPointsByBackupVaultCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupClient";
    const commandName = "ListRecoveryPointsByBackupVaultCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListRecoveryPointsByBackupVaultInputFilterSensitiveLog,
      outputFilterSensitiveLog: ListRecoveryPointsByBackupVaultOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListRecoveryPointsByBackupVaultCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1ListRecoveryPointsByBackupVaultCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListRecoveryPointsByBackupVaultCommandOutput> {
    return deserializeAws_restJson1ListRecoveryPointsByBackupVaultCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
