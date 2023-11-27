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
import { UpdateRestoreTestingPlanInput, UpdateRestoreTestingPlanOutput } from "../models/models_0";
import { de_UpdateRestoreTestingPlanCommand, se_UpdateRestoreTestingPlanCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateRestoreTestingPlanCommand}.
 */
export interface UpdateRestoreTestingPlanCommandInput extends UpdateRestoreTestingPlanInput {}
/**
 * @public
 *
 * The output of {@link UpdateRestoreTestingPlanCommand}.
 */
export interface UpdateRestoreTestingPlanCommandOutput extends UpdateRestoreTestingPlanOutput, __MetadataBearer {}

/**
 * @public
 * <p>This request will send changes to your specified restore testing
 *          plan. <code>RestoreTestingPlanName</code>
 *          cannot be updated after it is created.</p>
 *          <p>
 *             <code>RecoveryPointSelection</code> can contain:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>Algorithm</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ExcludeVaults</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>IncludeVaults</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>RecoveryPointTypes</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>SelectionWindowDays</code>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, UpdateRestoreTestingPlanCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, UpdateRestoreTestingPlanCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const input = { // UpdateRestoreTestingPlanInput
 *   RestoreTestingPlan: { // RestoreTestingPlanForUpdate
 *     RecoveryPointSelection: { // RestoreTestingRecoveryPointSelection
 *       Algorithm: "LATEST_WITHIN_WINDOW" || "RANDOM_WITHIN_WINDOW",
 *       ExcludeVaults: [ // stringList
 *         "STRING_VALUE",
 *       ],
 *       IncludeVaults: [
 *         "STRING_VALUE",
 *       ],
 *       RecoveryPointTypes: [ // RestoreTestingRecoveryPointTypeList
 *         "CONTINUOUS" || "SNAPSHOT",
 *       ],
 *       SelectionWindowDays: Number("int"),
 *     },
 *     ScheduleExpression: "STRING_VALUE",
 *     ScheduleExpressionTimezone: "STRING_VALUE",
 *     StartWindowHours: Number("int"),
 *   },
 *   RestoreTestingPlanName: "STRING_VALUE", // required
 * };
 * const command = new UpdateRestoreTestingPlanCommand(input);
 * const response = await client.send(command);
 * // { // UpdateRestoreTestingPlanOutput
 * //   CreationTime: new Date("TIMESTAMP"), // required
 * //   RestoreTestingPlanArn: "STRING_VALUE", // required
 * //   RestoreTestingPlanName: "STRING_VALUE", // required
 * //   UpdateTime: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param UpdateRestoreTestingPlanCommandInput - {@link UpdateRestoreTestingPlanCommandInput}
 * @returns {@link UpdateRestoreTestingPlanCommandOutput}
 * @see {@link UpdateRestoreTestingPlanCommandInput} for command's `input` shape.
 * @see {@link UpdateRestoreTestingPlanCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for BackupClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Backup can't perform the action that you requested until it finishes
 *          performing a previous action. Try again later.</p>
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
export class UpdateRestoreTestingPlanCommand extends $Command<
  UpdateRestoreTestingPlanCommandInput,
  UpdateRestoreTestingPlanCommandOutput,
  BackupClientResolvedConfig
> {
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
  constructor(readonly input: UpdateRestoreTestingPlanCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BackupClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateRestoreTestingPlanCommandInput, UpdateRestoreTestingPlanCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateRestoreTestingPlanCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupClient";
    const commandName = "UpdateRestoreTestingPlanCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CryoControllerUserManager",
        operation: "UpdateRestoreTestingPlan",
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
  private serialize(input: UpdateRestoreTestingPlanCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateRestoreTestingPlanCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateRestoreTestingPlanCommandOutput> {
    return de_UpdateRestoreTestingPlanCommand(output, context);
  }
}
