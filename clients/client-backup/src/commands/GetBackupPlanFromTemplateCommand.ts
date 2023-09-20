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
  GetBackupPlanFromTemplateInput,
  GetBackupPlanFromTemplateOutput,
  GetBackupPlanFromTemplateOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_GetBackupPlanFromTemplateCommand, se_GetBackupPlanFromTemplateCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetBackupPlanFromTemplateCommand}.
 */
export interface GetBackupPlanFromTemplateCommandInput extends GetBackupPlanFromTemplateInput {}
/**
 * @public
 *
 * The output of {@link GetBackupPlanFromTemplateCommand}.
 */
export interface GetBackupPlanFromTemplateCommandOutput extends GetBackupPlanFromTemplateOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns the template specified by its <code>templateId</code> as a backup plan.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, GetBackupPlanFromTemplateCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, GetBackupPlanFromTemplateCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const input = { // GetBackupPlanFromTemplateInput
 *   BackupPlanTemplateId: "STRING_VALUE", // required
 * };
 * const command = new GetBackupPlanFromTemplateCommand(input);
 * const response = await client.send(command);
 * // { // GetBackupPlanFromTemplateOutput
 * //   BackupPlanDocument: { // BackupPlan
 * //     BackupPlanName: "STRING_VALUE", // required
 * //     Rules: [ // BackupRules // required
 * //       { // BackupRule
 * //         RuleName: "STRING_VALUE", // required
 * //         TargetBackupVaultName: "STRING_VALUE", // required
 * //         ScheduleExpression: "STRING_VALUE",
 * //         StartWindowMinutes: Number("long"),
 * //         CompletionWindowMinutes: Number("long"),
 * //         Lifecycle: { // Lifecycle
 * //           MoveToColdStorageAfterDays: Number("long"),
 * //           DeleteAfterDays: Number("long"),
 * //         },
 * //         RecoveryPointTags: { // Tags
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         RuleId: "STRING_VALUE",
 * //         CopyActions: [ // CopyActions
 * //           { // CopyAction
 * //             Lifecycle: {
 * //               MoveToColdStorageAfterDays: Number("long"),
 * //               DeleteAfterDays: Number("long"),
 * //             },
 * //             DestinationBackupVaultArn: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //         EnableContinuousBackup: true || false,
 * //         ScheduleExpressionTimezone: "STRING_VALUE",
 * //       },
 * //     ],
 * //     AdvancedBackupSettings: [ // AdvancedBackupSettings
 * //       { // AdvancedBackupSetting
 * //         ResourceType: "STRING_VALUE",
 * //         BackupOptions: { // BackupOptions
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetBackupPlanFromTemplateCommandInput - {@link GetBackupPlanFromTemplateCommandInput}
 * @returns {@link GetBackupPlanFromTemplateCommandOutput}
 * @see {@link GetBackupPlanFromTemplateCommandInput} for command's `input` shape.
 * @see {@link GetBackupPlanFromTemplateCommandOutput} for command's `response` shape.
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
export class GetBackupPlanFromTemplateCommand extends $Command<
  GetBackupPlanFromTemplateCommandInput,
  GetBackupPlanFromTemplateCommandOutput,
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
  constructor(readonly input: GetBackupPlanFromTemplateCommandInput) {
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
  ): Handler<GetBackupPlanFromTemplateCommandInput, GetBackupPlanFromTemplateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetBackupPlanFromTemplateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupClient";
    const commandName = "GetBackupPlanFromTemplateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: GetBackupPlanFromTemplateOutputFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "CryoControllerUserManager",
        operation: "GetBackupPlanFromTemplate",
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
  private serialize(input: GetBackupPlanFromTemplateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetBackupPlanFromTemplateCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetBackupPlanFromTemplateCommandOutput> {
    return de_GetBackupPlanFromTemplateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
