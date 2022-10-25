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
  UpdateRecoveryPointLifecycleInput,
  UpdateRecoveryPointLifecycleInputFilterSensitiveLog,
  UpdateRecoveryPointLifecycleOutput,
  UpdateRecoveryPointLifecycleOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1UpdateRecoveryPointLifecycleCommand,
  serializeAws_restJson1UpdateRecoveryPointLifecycleCommand,
} from "../protocols/Aws_restJson1";

export interface UpdateRecoveryPointLifecycleCommandInput extends UpdateRecoveryPointLifecycleInput {}
export interface UpdateRecoveryPointLifecycleCommandOutput
  extends UpdateRecoveryPointLifecycleOutput,
    __MetadataBearer {}

/**
 * <p>Sets the transition lifecycle of a recovery point.</p>
 *          <p>The lifecycle defines when a protected resource is transitioned to cold storage and when
 *          it expires. Backup transitions and expires backups automatically according to
 *          the lifecycle that you define.</p>
 *          <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90
 *          days. Therefore, the “retention” setting must be 90 days greater than the “transition to
 *          cold after days” setting. The “transition to cold after days” setting cannot be changed
 *          after a backup has been transitioned to cold.</p>
 *          <p>Resource types that are able to be transitioned to cold storage are listed in the "Lifecycle to cold storage"
 *          section of the <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/whatisbackup.html#features-by-resource">
 *             Feature availability by resource</a> table. Backup ignores this expression for
 *          other resource types.</p>
 *          <p>This operation does not support continuous backups.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, UpdateRecoveryPointLifecycleCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, UpdateRecoveryPointLifecycleCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const command = new UpdateRecoveryPointLifecycleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateRecoveryPointLifecycleCommandInput} for command's `input` shape.
 * @see {@link UpdateRecoveryPointLifecycleCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for BackupClient's `config` shape.
 *
 */
export class UpdateRecoveryPointLifecycleCommand extends $Command<
  UpdateRecoveryPointLifecycleCommandInput,
  UpdateRecoveryPointLifecycleCommandOutput,
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

  constructor(readonly input: UpdateRecoveryPointLifecycleCommandInput) {
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
  ): Handler<UpdateRecoveryPointLifecycleCommandInput, UpdateRecoveryPointLifecycleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateRecoveryPointLifecycleCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupClient";
    const commandName = "UpdateRecoveryPointLifecycleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateRecoveryPointLifecycleInputFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateRecoveryPointLifecycleOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateRecoveryPointLifecycleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateRecoveryPointLifecycleCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateRecoveryPointLifecycleCommandOutput> {
    return deserializeAws_restJson1UpdateRecoveryPointLifecycleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
