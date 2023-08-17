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
import {
  UpdateBackupPlanInput,
  UpdateBackupPlanInputFilterSensitiveLog,
  UpdateBackupPlanOutput,
} from "../models/models_0";
import { de_UpdateBackupPlanCommand, se_UpdateBackupPlanCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateBackupPlanCommand}.
 */
export interface UpdateBackupPlanCommandInput extends UpdateBackupPlanInput {}
/**
 * @public
 *
 * The output of {@link UpdateBackupPlanCommand}.
 */
export interface UpdateBackupPlanCommandOutput extends UpdateBackupPlanOutput, __MetadataBearer {}

/**
 * @public
 * <p>Updates an existing backup plan identified by its <code>backupPlanId</code> with the
 *          input document in JSON format. The new version is uniquely identified by a
 *             <code>VersionId</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, UpdateBackupPlanCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, UpdateBackupPlanCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const input = { // UpdateBackupPlanInput
 *   BackupPlanId: "STRING_VALUE", // required
 *   BackupPlan: { // BackupPlanInput
 *     BackupPlanName: "STRING_VALUE", // required
 *     Rules: [ // BackupRulesInput // required
 *       { // BackupRuleInput
 *         RuleName: "STRING_VALUE", // required
 *         TargetBackupVaultName: "STRING_VALUE", // required
 *         ScheduleExpression: "STRING_VALUE",
 *         StartWindowMinutes: Number("long"),
 *         CompletionWindowMinutes: Number("long"),
 *         Lifecycle: { // Lifecycle
 *           MoveToColdStorageAfterDays: Number("long"),
 *           DeleteAfterDays: Number("long"),
 *         },
 *         RecoveryPointTags: { // Tags
 *           "<keys>": "STRING_VALUE",
 *         },
 *         CopyActions: [ // CopyActions
 *           { // CopyAction
 *             Lifecycle: {
 *               MoveToColdStorageAfterDays: Number("long"),
 *               DeleteAfterDays: Number("long"),
 *             },
 *             DestinationBackupVaultArn: "STRING_VALUE", // required
 *           },
 *         ],
 *         EnableContinuousBackup: true || false,
 *       },
 *     ],
 *     AdvancedBackupSettings: [ // AdvancedBackupSettings
 *       { // AdvancedBackupSetting
 *         ResourceType: "STRING_VALUE",
 *         BackupOptions: { // BackupOptions
 *           "<keys>": "STRING_VALUE",
 *         },
 *       },
 *     ],
 *   },
 * };
 * const command = new UpdateBackupPlanCommand(input);
 * const response = await client.send(command);
 * // { // UpdateBackupPlanOutput
 * //   BackupPlanId: "STRING_VALUE",
 * //   BackupPlanArn: "STRING_VALUE",
 * //   CreationDate: new Date("TIMESTAMP"),
 * //   VersionId: "STRING_VALUE",
 * //   AdvancedBackupSettings: [ // AdvancedBackupSettings
 * //     { // AdvancedBackupSetting
 * //       ResourceType: "STRING_VALUE",
 * //       BackupOptions: { // BackupOptions
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param UpdateBackupPlanCommandInput - {@link UpdateBackupPlanCommandInput}
 * @returns {@link UpdateBackupPlanCommandOutput}
 * @see {@link UpdateBackupPlanCommandInput} for command's `input` shape.
 * @see {@link UpdateBackupPlanCommandOutput} for command's `response` shape.
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
export class UpdateBackupPlanCommand extends $Command<
  UpdateBackupPlanCommandInput,
  UpdateBackupPlanCommandOutput,
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
  constructor(readonly input: UpdateBackupPlanCommandInput) {
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
  ): Handler<UpdateBackupPlanCommandInput, UpdateBackupPlanCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateBackupPlanCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupClient";
    const commandName = "UpdateBackupPlanCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateBackupPlanInputFilterSensitiveLog,
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
  private serialize(input: UpdateBackupPlanCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateBackupPlanCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateBackupPlanCommandOutput> {
    return de_UpdateBackupPlanCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
