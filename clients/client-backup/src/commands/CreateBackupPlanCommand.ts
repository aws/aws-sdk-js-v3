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
import {
  CreateBackupPlanInput,
  CreateBackupPlanInputFilterSensitiveLog,
  CreateBackupPlanOutput,
} from "../models/models_0";
import { de_CreateBackupPlanCommand, se_CreateBackupPlanCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateBackupPlanCommand}.
 */
export interface CreateBackupPlanCommandInput extends CreateBackupPlanInput {}
/**
 * @public
 *
 * The output of {@link CreateBackupPlanCommand}.
 */
export interface CreateBackupPlanCommandOutput extends CreateBackupPlanOutput, __MetadataBearer {}

/**
 * @public
 * <p>Creates a backup plan using a backup plan name and backup rules. A backup plan is a
 *          document that contains information that Backup uses to schedule tasks that
 *          create recovery points for resources.</p>
 *          <p>If you call <code>CreateBackupPlan</code> with a plan that already exists, you receive
 *          an <code>AlreadyExistsException</code> exception.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, CreateBackupPlanCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, CreateBackupPlanCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const input = { // CreateBackupPlanInput
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
 *         ScheduleExpressionTimezone: "STRING_VALUE",
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
 *   BackupPlanTags: {
 *     "<keys>": "STRING_VALUE",
 *   },
 *   CreatorRequestId: "STRING_VALUE",
 * };
 * const command = new CreateBackupPlanCommand(input);
 * const response = await client.send(command);
 * // { // CreateBackupPlanOutput
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
 * @param CreateBackupPlanCommandInput - {@link CreateBackupPlanCommandInput}
 * @returns {@link CreateBackupPlanCommandOutput}
 * @see {@link CreateBackupPlanCommandInput} for command's `input` shape.
 * @see {@link CreateBackupPlanCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for BackupClient's `config` shape.
 *
 * @throws {@link AlreadyExistsException} (client fault)
 *  <p>The required resource already exists.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>Indicates that something is wrong with a parameter's value. For example, the value is
 *          out of range.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit in the request has been exceeded; for example, a maximum number of items allowed
 *          in a request.</p>
 *
 * @throws {@link MissingParameterValueException} (client fault)
 *  <p>Indicates that a required parameter is missing.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The request failed due to a temporary failure of the server.</p>
 *
 * @throws {@link BackupServiceException}
 * <p>Base exception class for all service exceptions from Backup service.</p>
 *
 */
export class CreateBackupPlanCommand extends $Command<
  CreateBackupPlanCommandInput,
  CreateBackupPlanCommandOutput,
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
  constructor(readonly input: CreateBackupPlanCommandInput) {
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
  ): Handler<CreateBackupPlanCommandInput, CreateBackupPlanCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateBackupPlanCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupClient";
    const commandName = "CreateBackupPlanCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateBackupPlanInputFilterSensitiveLog,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CryoControllerUserManager",
        operation: "CreateBackupPlan",
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
  private serialize(input: CreateBackupPlanCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateBackupPlanCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateBackupPlanCommandOutput> {
    return de_CreateBackupPlanCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
