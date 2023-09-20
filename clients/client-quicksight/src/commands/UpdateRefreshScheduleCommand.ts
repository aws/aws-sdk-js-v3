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

import { UpdateRefreshScheduleRequest, UpdateRefreshScheduleResponse } from "../models/models_4";
import { de_UpdateRefreshScheduleCommand, se_UpdateRefreshScheduleCommand } from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateRefreshScheduleCommand}.
 */
export interface UpdateRefreshScheduleCommandInput extends UpdateRefreshScheduleRequest {}
/**
 * @public
 *
 * The output of {@link UpdateRefreshScheduleCommand}.
 */
export interface UpdateRefreshScheduleCommandOutput extends UpdateRefreshScheduleResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates a refresh schedule for a dataset.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, UpdateRefreshScheduleCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, UpdateRefreshScheduleCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const input = { // UpdateRefreshScheduleRequest
 *   DataSetId: "STRING_VALUE", // required
 *   AwsAccountId: "STRING_VALUE", // required
 *   Schedule: { // RefreshSchedule
 *     ScheduleId: "STRING_VALUE", // required
 *     ScheduleFrequency: { // RefreshFrequency
 *       Interval: "MINUTE15" || "MINUTE30" || "HOURLY" || "DAILY" || "WEEKLY" || "MONTHLY", // required
 *       RefreshOnDay: { // ScheduleRefreshOnEntity
 *         DayOfWeek: "SUNDAY" || "MONDAY" || "TUESDAY" || "WEDNESDAY" || "THURSDAY" || "FRIDAY" || "SATURDAY",
 *         DayOfMonth: "STRING_VALUE",
 *       },
 *       Timezone: "STRING_VALUE",
 *       TimeOfTheDay: "STRING_VALUE",
 *     },
 *     StartAfterDateTime: new Date("TIMESTAMP"),
 *     RefreshType: "INCREMENTAL_REFRESH" || "FULL_REFRESH", // required
 *     Arn: "STRING_VALUE",
 *   },
 * };
 * const command = new UpdateRefreshScheduleCommand(input);
 * const response = await client.send(command);
 * // { // UpdateRefreshScheduleResponse
 * //   Status: Number("int"),
 * //   RequestId: "STRING_VALUE",
 * //   ScheduleId: "STRING_VALUE",
 * //   Arn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateRefreshScheduleCommandInput - {@link UpdateRefreshScheduleCommandInput}
 * @returns {@link UpdateRefreshScheduleCommandOutput}
 * @see {@link UpdateRefreshScheduleCommandInput} for command's `input` shape.
 * @see {@link UpdateRefreshScheduleCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon QuickSight service, that your policies have the
 * 			correct permissions, and that you are using the correct credentials.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more parameters has a value that isn't valid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit is exceeded.</p>
 *
 * @throws {@link PreconditionNotMetException} (client fault)
 *  <p>One or more preconditions aren't met.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Access is throttled.</p>
 *
 * @throws {@link QuickSightServiceException}
 * <p>Base exception class for all service exceptions from QuickSight service.</p>
 *
 */
export class UpdateRefreshScheduleCommand extends $Command<
  UpdateRefreshScheduleCommandInput,
  UpdateRefreshScheduleCommandOutput,
  QuickSightClientResolvedConfig
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
  constructor(readonly input: UpdateRefreshScheduleCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: QuickSightClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateRefreshScheduleCommandInput, UpdateRefreshScheduleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateRefreshScheduleCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QuickSightClient";
    const commandName = "UpdateRefreshScheduleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "QuickSight_20180401",
        operation: "UpdateRefreshSchedule",
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
  private serialize(input: UpdateRefreshScheduleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateRefreshScheduleCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateRefreshScheduleCommandOutput> {
    return de_UpdateRefreshScheduleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
