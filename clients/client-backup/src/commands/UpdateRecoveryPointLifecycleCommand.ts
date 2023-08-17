// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { UpdateRecoveryPointLifecycleInput, UpdateRecoveryPointLifecycleOutput } from "../models/models_0";
import {
  de_UpdateRecoveryPointLifecycleCommand,
  se_UpdateRecoveryPointLifecycleCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateRecoveryPointLifecycleCommand}.
 */
export interface UpdateRecoveryPointLifecycleCommandInput extends UpdateRecoveryPointLifecycleInput {}
/**
 * @public
 *
 * The output of {@link UpdateRecoveryPointLifecycleCommand}.
 */
export interface UpdateRecoveryPointLifecycleCommandOutput
  extends UpdateRecoveryPointLifecycleOutput,
    __MetadataBearer {}

/**
 * @public
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
 * const input = { // UpdateRecoveryPointLifecycleInput
 *   BackupVaultName: "STRING_VALUE", // required
 *   RecoveryPointArn: "STRING_VALUE", // required
 *   Lifecycle: { // Lifecycle
 *     MoveToColdStorageAfterDays: Number("long"),
 *     DeleteAfterDays: Number("long"),
 *   },
 * };
 * const command = new UpdateRecoveryPointLifecycleCommand(input);
 * const response = await client.send(command);
 * // { // UpdateRecoveryPointLifecycleOutput
 * //   BackupVaultArn: "STRING_VALUE",
 * //   RecoveryPointArn: "STRING_VALUE",
 * //   Lifecycle: { // Lifecycle
 * //     MoveToColdStorageAfterDays: Number("long"),
 * //     DeleteAfterDays: Number("long"),
 * //   },
 * //   CalculatedLifecycle: { // CalculatedLifecycle
 * //     MoveToColdStorageAt: new Date("TIMESTAMP"),
 * //     DeleteAt: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateRecoveryPointLifecycleCommandInput - {@link UpdateRecoveryPointLifecycleCommandInput}
 * @returns {@link UpdateRecoveryPointLifecycleCommandOutput}
 * @see {@link UpdateRecoveryPointLifecycleCommandInput} for command's `input` shape.
 * @see {@link UpdateRecoveryPointLifecycleCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for BackupClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>Indicates that something is wrong with a parameter's value. For example, the value is
 *          out of range.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>Indicates that something is wrong with the input to the request. For example, a
 *          parameter is of the wrong type.</p>
 *
 * @throws {@link MissingParameterValueException} (client fault)
 *  <p>Indicates that a required parameter is missing.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A resource that is required for the action doesn't exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The request failed due to a temporary failure of the server.</p>
 *
 * @throws {@link BackupServiceException}
 * <p>Base exception class for all service exceptions from Backup service.</p>
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

  /**
   * @public
   */
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
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: UpdateRecoveryPointLifecycleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateRecoveryPointLifecycleCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateRecoveryPointLifecycleCommandOutput> {
    return de_UpdateRecoveryPointLifecycleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
