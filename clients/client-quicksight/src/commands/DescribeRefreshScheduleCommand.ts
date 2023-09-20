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

import { DescribeRefreshScheduleRequest, DescribeRefreshScheduleResponse } from "../models/models_3";
import { de_DescribeRefreshScheduleCommand, se_DescribeRefreshScheduleCommand } from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeRefreshScheduleCommand}.
 */
export interface DescribeRefreshScheduleCommandInput extends DescribeRefreshScheduleRequest {}
/**
 * @public
 *
 * The output of {@link DescribeRefreshScheduleCommand}.
 */
export interface DescribeRefreshScheduleCommandOutput extends DescribeRefreshScheduleResponse, __MetadataBearer {}

/**
 * @public
 * <p>Provides a summary of a refresh schedule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DescribeRefreshScheduleCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DescribeRefreshScheduleCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const input = { // DescribeRefreshScheduleRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   DataSetId: "STRING_VALUE", // required
 *   ScheduleId: "STRING_VALUE", // required
 * };
 * const command = new DescribeRefreshScheduleCommand(input);
 * const response = await client.send(command);
 * // { // DescribeRefreshScheduleResponse
 * //   RefreshSchedule: { // RefreshSchedule
 * //     ScheduleId: "STRING_VALUE", // required
 * //     ScheduleFrequency: { // RefreshFrequency
 * //       Interval: "MINUTE15" || "MINUTE30" || "HOURLY" || "DAILY" || "WEEKLY" || "MONTHLY", // required
 * //       RefreshOnDay: { // ScheduleRefreshOnEntity
 * //         DayOfWeek: "SUNDAY" || "MONDAY" || "TUESDAY" || "WEDNESDAY" || "THURSDAY" || "FRIDAY" || "SATURDAY",
 * //         DayOfMonth: "STRING_VALUE",
 * //       },
 * //       Timezone: "STRING_VALUE",
 * //       TimeOfTheDay: "STRING_VALUE",
 * //     },
 * //     StartAfterDateTime: new Date("TIMESTAMP"),
 * //     RefreshType: "INCREMENTAL_REFRESH" || "FULL_REFRESH", // required
 * //     Arn: "STRING_VALUE",
 * //   },
 * //   Status: Number("int"),
 * //   RequestId: "STRING_VALUE",
 * //   Arn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeRefreshScheduleCommandInput - {@link DescribeRefreshScheduleCommandInput}
 * @returns {@link DescribeRefreshScheduleCommandOutput}
 * @see {@link DescribeRefreshScheduleCommandInput} for command's `input` shape.
 * @see {@link DescribeRefreshScheduleCommandOutput} for command's `response` shape.
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
export class DescribeRefreshScheduleCommand extends $Command<
  DescribeRefreshScheduleCommandInput,
  DescribeRefreshScheduleCommandOutput,
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
  constructor(readonly input: DescribeRefreshScheduleCommandInput) {
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
  ): Handler<DescribeRefreshScheduleCommandInput, DescribeRefreshScheduleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeRefreshScheduleCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QuickSightClient";
    const commandName = "DescribeRefreshScheduleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "QuickSight_20180401",
        operation: "DescribeRefreshSchedule",
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
  private serialize(input: DescribeRefreshScheduleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeRefreshScheduleCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeRefreshScheduleCommandOutput> {
    return de_DescribeRefreshScheduleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
