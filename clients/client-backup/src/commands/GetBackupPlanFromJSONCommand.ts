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
  GetBackupPlanFromJSONInput,
  GetBackupPlanFromJSONOutput,
  GetBackupPlanFromJSONOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_GetBackupPlanFromJSONCommand, se_GetBackupPlanFromJSONCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetBackupPlanFromJSONCommand}.
 */
export interface GetBackupPlanFromJSONCommandInput extends GetBackupPlanFromJSONInput {}
/**
 * @public
 *
 * The output of {@link GetBackupPlanFromJSONCommand}.
 */
export interface GetBackupPlanFromJSONCommandOutput extends GetBackupPlanFromJSONOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns a valid JSON document specifying a backup plan or an error.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, GetBackupPlanFromJSONCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, GetBackupPlanFromJSONCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const input = { // GetBackupPlanFromJSONInput
 *   BackupPlanTemplateJson: "STRING_VALUE", // required
 * };
 * const command = new GetBackupPlanFromJSONCommand(input);
 * const response = await client.send(command);
 * // { // GetBackupPlanFromJSONOutput
 * //   BackupPlan: { // BackupPlan
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
 * @param GetBackupPlanFromJSONCommandInput - {@link GetBackupPlanFromJSONCommandInput}
 * @returns {@link GetBackupPlanFromJSONCommandOutput}
 * @see {@link GetBackupPlanFromJSONCommandInput} for command's `input` shape.
 * @see {@link GetBackupPlanFromJSONCommandOutput} for command's `response` shape.
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
export class GetBackupPlanFromJSONCommand extends $Command<
  GetBackupPlanFromJSONCommandInput,
  GetBackupPlanFromJSONCommandOutput,
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
  constructor(readonly input: GetBackupPlanFromJSONCommandInput) {
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
  ): Handler<GetBackupPlanFromJSONCommandInput, GetBackupPlanFromJSONCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetBackupPlanFromJSONCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupClient";
    const commandName = "GetBackupPlanFromJSONCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: GetBackupPlanFromJSONOutputFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "CryoControllerUserManager",
        operation: "GetBackupPlanFromJSON",
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
  private serialize(input: GetBackupPlanFromJSONCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetBackupPlanFromJSONCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetBackupPlanFromJSONCommandOutput> {
    return de_GetBackupPlanFromJSONCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
