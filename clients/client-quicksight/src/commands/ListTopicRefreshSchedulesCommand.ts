// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { ListTopicRefreshSchedulesRequest, ListTopicRefreshSchedulesResponse } from "../models/models_3";
import { de_ListTopicRefreshSchedulesCommand, se_ListTopicRefreshSchedulesCommand } from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

/**
 * @public
 *
 * The input for {@link ListTopicRefreshSchedulesCommand}.
 */
export interface ListTopicRefreshSchedulesCommandInput extends ListTopicRefreshSchedulesRequest {}
/**
 * @public
 *
 * The output of {@link ListTopicRefreshSchedulesCommand}.
 */
export interface ListTopicRefreshSchedulesCommandOutput extends ListTopicRefreshSchedulesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists all of the refresh schedules for a topic.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, ListTopicRefreshSchedulesCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, ListTopicRefreshSchedulesCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const input = { // ListTopicRefreshSchedulesRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   TopicId: "STRING_VALUE", // required
 * };
 * const command = new ListTopicRefreshSchedulesCommand(input);
 * const response = await client.send(command);
 * // { // ListTopicRefreshSchedulesResponse
 * //   TopicId: "STRING_VALUE",
 * //   TopicArn: "STRING_VALUE",
 * //   RefreshSchedules: [ // TopicRefreshScheduleSummaries
 * //     { // TopicRefreshScheduleSummary
 * //       DatasetId: "STRING_VALUE",
 * //       DatasetArn: "STRING_VALUE",
 * //       DatasetName: "STRING_VALUE",
 * //       RefreshSchedule: { // TopicRefreshSchedule
 * //         IsEnabled: true || false, // required
 * //         BasedOnSpiceSchedule: true || false, // required
 * //         StartingAt: new Date("TIMESTAMP"),
 * //         Timezone: "STRING_VALUE",
 * //         RepeatAt: "STRING_VALUE",
 * //         TopicScheduleType: "HOURLY" || "DAILY" || "WEEKLY" || "MONTHLY",
 * //       },
 * //     },
 * //   ],
 * //   Status: Number("int"),
 * //   RequestId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTopicRefreshSchedulesCommandInput - {@link ListTopicRefreshSchedulesCommandInput}
 * @returns {@link ListTopicRefreshSchedulesCommandOutput}
 * @see {@link ListTopicRefreshSchedulesCommandInput} for command's `input` shape.
 * @see {@link ListTopicRefreshSchedulesCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon QuickSight service, that your policies have the
 * 			correct permissions, and that you are using the correct credentials.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
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
 * @throws {@link ResourceExistsException} (client fault)
 *  <p>The resource specified already exists. </p>
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
export class ListTopicRefreshSchedulesCommand extends $Command<
  ListTopicRefreshSchedulesCommandInput,
  ListTopicRefreshSchedulesCommandOutput,
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
  constructor(readonly input: ListTopicRefreshSchedulesCommandInput) {
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
  ): Handler<ListTopicRefreshSchedulesCommandInput, ListTopicRefreshSchedulesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListTopicRefreshSchedulesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QuickSightClient";
    const commandName = "ListTopicRefreshSchedulesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: ListTopicRefreshSchedulesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListTopicRefreshSchedulesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListTopicRefreshSchedulesCommandOutput> {
    return de_ListTopicRefreshSchedulesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
