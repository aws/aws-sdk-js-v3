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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { GetBackupVaultNotificationsInput, GetBackupVaultNotificationsOutput } from "../models/models_0";
import {
  de_GetBackupVaultNotificationsCommand,
  se_GetBackupVaultNotificationsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetBackupVaultNotificationsCommand}.
 */
export interface GetBackupVaultNotificationsCommandInput extends GetBackupVaultNotificationsInput {}
/**
 * @public
 *
 * The output of {@link GetBackupVaultNotificationsCommand}.
 */
export interface GetBackupVaultNotificationsCommandOutput extends GetBackupVaultNotificationsOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns event notifications for the specified backup vault.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, GetBackupVaultNotificationsCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, GetBackupVaultNotificationsCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const input = { // GetBackupVaultNotificationsInput
 *   BackupVaultName: "STRING_VALUE", // required
 * };
 * const command = new GetBackupVaultNotificationsCommand(input);
 * const response = await client.send(command);
 * // { // GetBackupVaultNotificationsOutput
 * //   BackupVaultName: "STRING_VALUE",
 * //   BackupVaultArn: "STRING_VALUE",
 * //   SNSTopicArn: "STRING_VALUE",
 * //   BackupVaultEvents: [ // BackupVaultEvents
 * //     "BACKUP_JOB_STARTED" || "BACKUP_JOB_COMPLETED" || "BACKUP_JOB_SUCCESSFUL" || "BACKUP_JOB_FAILED" || "BACKUP_JOB_EXPIRED" || "RESTORE_JOB_STARTED" || "RESTORE_JOB_COMPLETED" || "RESTORE_JOB_SUCCESSFUL" || "RESTORE_JOB_FAILED" || "COPY_JOB_STARTED" || "COPY_JOB_SUCCESSFUL" || "COPY_JOB_FAILED" || "RECOVERY_POINT_MODIFIED" || "BACKUP_PLAN_CREATED" || "BACKUP_PLAN_MODIFIED" || "S3_BACKUP_OBJECT_FAILED" || "S3_RESTORE_OBJECT_FAILED",
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetBackupVaultNotificationsCommandInput - {@link GetBackupVaultNotificationsCommandInput}
 * @returns {@link GetBackupVaultNotificationsCommandOutput}
 * @see {@link GetBackupVaultNotificationsCommandInput} for command's `input` shape.
 * @see {@link GetBackupVaultNotificationsCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for BackupClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>Indicates that something is wrong with a parameter's value. For example, the value is
 *          out of range.</p>
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
export class GetBackupVaultNotificationsCommand extends $Command<
  GetBackupVaultNotificationsCommandInput,
  GetBackupVaultNotificationsCommandOutput,
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
  constructor(readonly input: GetBackupVaultNotificationsCommandInput) {
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
  ): Handler<GetBackupVaultNotificationsCommandInput, GetBackupVaultNotificationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetBackupVaultNotificationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupClient";
    const commandName = "GetBackupVaultNotificationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CryoControllerUserManager",
        operation: "GetBackupVaultNotifications",
      },
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
  private serialize(input: GetBackupVaultNotificationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetBackupVaultNotificationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetBackupVaultNotificationsCommandOutput> {
    return de_GetBackupVaultNotificationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
