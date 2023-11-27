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
  CreateRestoreTestingPlanInput,
  CreateRestoreTestingPlanInputFilterSensitiveLog,
  CreateRestoreTestingPlanOutput,
} from "../models/models_0";
import { de_CreateRestoreTestingPlanCommand, se_CreateRestoreTestingPlanCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateRestoreTestingPlanCommand}.
 */
export interface CreateRestoreTestingPlanCommandInput extends CreateRestoreTestingPlanInput {}
/**
 * @public
 *
 * The output of {@link CreateRestoreTestingPlanCommand}.
 */
export interface CreateRestoreTestingPlanCommandOutput extends CreateRestoreTestingPlanOutput, __MetadataBearer {}

/**
 * @public
 * <p>This is the first of two steps to create a restore testing
 *          plan; once this request is successful, finish the procedure with
 *          request CreateRestoreTestingSelection.</p>
 *          <p>You must include the parameter RestoreTestingPlan. You may
 *          optionally include CreatorRequestId and Tags.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, CreateRestoreTestingPlanCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, CreateRestoreTestingPlanCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const input = { // CreateRestoreTestingPlanInput
 *   CreatorRequestId: "STRING_VALUE",
 *   RestoreTestingPlan: { // RestoreTestingPlanForCreate
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
 *     RestoreTestingPlanName: "STRING_VALUE", // required
 *     ScheduleExpression: "STRING_VALUE", // required
 *     ScheduleExpressionTimezone: "STRING_VALUE",
 *     StartWindowHours: Number("int"),
 *   },
 *   Tags: { // SensitiveStringMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateRestoreTestingPlanCommand(input);
 * const response = await client.send(command);
 * // { // CreateRestoreTestingPlanOutput
 * //   CreationTime: new Date("TIMESTAMP"), // required
 * //   RestoreTestingPlanArn: "STRING_VALUE", // required
 * //   RestoreTestingPlanName: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateRestoreTestingPlanCommandInput - {@link CreateRestoreTestingPlanCommandInput}
 * @returns {@link CreateRestoreTestingPlanCommandOutput}
 * @see {@link CreateRestoreTestingPlanCommandInput} for command's `input` shape.
 * @see {@link CreateRestoreTestingPlanCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for BackupClient's `config` shape.
 *
 * @throws {@link AlreadyExistsException} (client fault)
 *  <p>The required resource already exists.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Backup can't perform the action that you requested until it finishes
 *          performing a previous action. Try again later.</p>
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
export class CreateRestoreTestingPlanCommand extends $Command<
  CreateRestoreTestingPlanCommandInput,
  CreateRestoreTestingPlanCommandOutput,
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
  constructor(readonly input: CreateRestoreTestingPlanCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BackupClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateRestoreTestingPlanCommandInput, CreateRestoreTestingPlanCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateRestoreTestingPlanCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupClient";
    const commandName = "CreateRestoreTestingPlanCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateRestoreTestingPlanInputFilterSensitiveLog,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CryoControllerUserManager",
        operation: "CreateRestoreTestingPlan",
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
  private serialize(input: CreateRestoreTestingPlanCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateRestoreTestingPlanCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateRestoreTestingPlanCommandOutput> {
    return de_CreateRestoreTestingPlanCommand(output, context);
  }
}
