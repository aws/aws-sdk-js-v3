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

import { LookoutEquipmentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutEquipmentClient";
import { ListSensorStatisticsRequest, ListSensorStatisticsResponse } from "../models/models_0";
import { de_ListSensorStatisticsCommand, se_ListSensorStatisticsCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListSensorStatisticsCommand}.
 */
export interface ListSensorStatisticsCommandInput extends ListSensorStatisticsRequest {}
/**
 * @public
 *
 * The output of {@link ListSensorStatisticsCommand}.
 */
export interface ListSensorStatisticsCommandOutput extends ListSensorStatisticsResponse, __MetadataBearer {}

/**
 * @public
 * <p> Lists statistics about the data collected for each of the sensors that have been
 *          successfully ingested in the particular dataset. Can also be used to retreive Sensor
 *          Statistics for a previous ingestion job. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutEquipmentClient, ListSensorStatisticsCommand } from "@aws-sdk/client-lookoutequipment"; // ES Modules import
 * // const { LookoutEquipmentClient, ListSensorStatisticsCommand } = require("@aws-sdk/client-lookoutequipment"); // CommonJS import
 * const client = new LookoutEquipmentClient(config);
 * const input = { // ListSensorStatisticsRequest
 *   DatasetName: "STRING_VALUE", // required
 *   IngestionJobId: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListSensorStatisticsCommand(input);
 * const response = await client.send(command);
 * // { // ListSensorStatisticsResponse
 * //   SensorStatisticsSummaries: [ // SensorStatisticsSummaries
 * //     { // SensorStatisticsSummary
 * //       ComponentName: "STRING_VALUE",
 * //       SensorName: "STRING_VALUE",
 * //       DataExists: true || false,
 * //       MissingValues: { // CountPercent
 * //         Count: Number("int"), // required
 * //         Percentage: Number("float"), // required
 * //       },
 * //       InvalidValues: {
 * //         Count: Number("int"), // required
 * //         Percentage: Number("float"), // required
 * //       },
 * //       InvalidDateEntries: {
 * //         Count: Number("int"), // required
 * //         Percentage: Number("float"), // required
 * //       },
 * //       DuplicateTimestamps: {
 * //         Count: Number("int"), // required
 * //         Percentage: Number("float"), // required
 * //       },
 * //       CategoricalValues: { // CategoricalValues
 * //         Status: "POTENTIAL_ISSUE_DETECTED" || "NO_ISSUE_DETECTED", // required
 * //         NumberOfCategory: Number("int"),
 * //       },
 * //       MultipleOperatingModes: { // MultipleOperatingModes
 * //         Status: "POTENTIAL_ISSUE_DETECTED" || "NO_ISSUE_DETECTED", // required
 * //       },
 * //       LargeTimestampGaps: { // LargeTimestampGaps
 * //         Status: "POTENTIAL_ISSUE_DETECTED" || "NO_ISSUE_DETECTED", // required
 * //         NumberOfLargeTimestampGaps: Number("int"),
 * //         MaxTimestampGapInDays: Number("int"),
 * //       },
 * //       MonotonicValues: { // MonotonicValues
 * //         Status: "POTENTIAL_ISSUE_DETECTED" || "NO_ISSUE_DETECTED", // required
 * //         Monotonicity: "DECREASING" || "INCREASING" || "STATIC",
 * //       },
 * //       DataStartTime: new Date("TIMESTAMP"),
 * //       DataEndTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSensorStatisticsCommandInput - {@link ListSensorStatisticsCommandInput}
 * @returns {@link ListSensorStatisticsCommandOutput}
 * @see {@link ListSensorStatisticsCommandInput} for command's `input` shape.
 * @see {@link ListSensorStatisticsCommandOutput} for command's `response` shape.
 * @see {@link LookoutEquipmentClientResolvedConfig | config} for LookoutEquipmentClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request could not be completed because you do not have access to the resource.
 *       </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> Processing of the request has failed because of an unknown error, exception or failure.
 *       </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p> The resource requested could not be found. Verify the resource ID and retry your
 *          request. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> The input fails to satisfy constraints specified by Amazon Lookout for Equipment or a
 *          related Amazon Web Services service that's being utilized. </p>
 *
 * @throws {@link LookoutEquipmentServiceException}
 * <p>Base exception class for all service exceptions from LookoutEquipment service.</p>
 *
 */
export class ListSensorStatisticsCommand extends $Command<
  ListSensorStatisticsCommandInput,
  ListSensorStatisticsCommandOutput,
  LookoutEquipmentClientResolvedConfig
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
  constructor(readonly input: ListSensorStatisticsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LookoutEquipmentClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListSensorStatisticsCommandInput, ListSensorStatisticsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListSensorStatisticsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LookoutEquipmentClient";
    const commandName = "ListSensorStatisticsCommand";
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
  private serialize(input: ListSensorStatisticsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListSensorStatisticsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListSensorStatisticsCommandOutput> {
    return de_ListSensorStatisticsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
