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
import { GetRestoreTestingPlanInput, GetRestoreTestingPlanOutput } from "../models/models_0";
import { de_GetRestoreTestingPlanCommand, se_GetRestoreTestingPlanCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetRestoreTestingPlanCommand}.
 */
export interface GetRestoreTestingPlanCommandInput extends GetRestoreTestingPlanInput {}
/**
 * @public
 *
 * The output of {@link GetRestoreTestingPlanCommand}.
 */
export interface GetRestoreTestingPlanCommandOutput extends GetRestoreTestingPlanOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns <code>RestoreTestingPlan</code> details for the specified
 *             <code>RestoreTestingPlanName</code>. The details are the body of a restore testing plan
 *          in JSON format, in addition to plan metadata.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, GetRestoreTestingPlanCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, GetRestoreTestingPlanCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const input = { // GetRestoreTestingPlanInput
 *   RestoreTestingPlanName: "STRING_VALUE", // required
 * };
 * const command = new GetRestoreTestingPlanCommand(input);
 * const response = await client.send(command);
 * // { // GetRestoreTestingPlanOutput
 * //   RestoreTestingPlan: { // RestoreTestingPlanForGet
 * //     CreationTime: new Date("TIMESTAMP"), // required
 * //     CreatorRequestId: "STRING_VALUE",
 * //     LastExecutionTime: new Date("TIMESTAMP"),
 * //     LastUpdateTime: new Date("TIMESTAMP"),
 * //     RecoveryPointSelection: { // RestoreTestingRecoveryPointSelection
 * //       Algorithm: "LATEST_WITHIN_WINDOW" || "RANDOM_WITHIN_WINDOW",
 * //       ExcludeVaults: [ // stringList
 * //         "STRING_VALUE",
 * //       ],
 * //       IncludeVaults: [
 * //         "STRING_VALUE",
 * //       ],
 * //       RecoveryPointTypes: [ // RestoreTestingRecoveryPointTypeList
 * //         "CONTINUOUS" || "SNAPSHOT",
 * //       ],
 * //       SelectionWindowDays: Number("int"),
 * //     },
 * //     RestoreTestingPlanArn: "STRING_VALUE", // required
 * //     RestoreTestingPlanName: "STRING_VALUE", // required
 * //     ScheduleExpression: "STRING_VALUE", // required
 * //     ScheduleExpressionTimezone: "STRING_VALUE",
 * //     StartWindowHours: Number("int"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetRestoreTestingPlanCommandInput - {@link GetRestoreTestingPlanCommandInput}
 * @returns {@link GetRestoreTestingPlanCommandOutput}
 * @see {@link GetRestoreTestingPlanCommandInput} for command's `input` shape.
 * @see {@link GetRestoreTestingPlanCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for BackupClient's `config` shape.
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
export class GetRestoreTestingPlanCommand extends $Command<
  GetRestoreTestingPlanCommandInput,
  GetRestoreTestingPlanCommandOutput,
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
  constructor(readonly input: GetRestoreTestingPlanCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BackupClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetRestoreTestingPlanCommandInput, GetRestoreTestingPlanCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetRestoreTestingPlanCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupClient";
    const commandName = "GetRestoreTestingPlanCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CryoControllerUserManager",
        operation: "GetRestoreTestingPlan",
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
  private serialize(input: GetRestoreTestingPlanCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetRestoreTestingPlanCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetRestoreTestingPlanCommandOutput> {
    return de_GetRestoreTestingPlanCommand(output, context);
  }
}
