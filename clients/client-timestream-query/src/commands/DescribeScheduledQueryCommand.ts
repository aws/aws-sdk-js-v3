// smithy-typescript generated code
import { getEndpointDiscoveryPlugin } from "@aws-sdk/middleware-endpoint-discovery";
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

import {
  DescribeScheduledQueryRequest,
  DescribeScheduledQueryResponse,
  DescribeScheduledQueryResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_DescribeScheduledQueryCommand, se_DescribeScheduledQueryCommand } from "../protocols/Aws_json1_0";
import { ServiceInputTypes, ServiceOutputTypes, TimestreamQueryClientResolvedConfig } from "../TimestreamQueryClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeScheduledQueryCommand}.
 */
export interface DescribeScheduledQueryCommandInput extends DescribeScheduledQueryRequest {}
/**
 * @public
 *
 * The output of {@link DescribeScheduledQueryCommand}.
 */
export interface DescribeScheduledQueryCommandOutput extends DescribeScheduledQueryResponse, __MetadataBearer {}

/**
 * @public
 * <p>Provides detailed information about a scheduled query.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TimestreamQueryClient, DescribeScheduledQueryCommand } from "@aws-sdk/client-timestream-query"; // ES Modules import
 * // const { TimestreamQueryClient, DescribeScheduledQueryCommand } = require("@aws-sdk/client-timestream-query"); // CommonJS import
 * const client = new TimestreamQueryClient(config);
 * const input = { // DescribeScheduledQueryRequest
 *   ScheduledQueryArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeScheduledQueryCommand(input);
 * const response = await client.send(command);
 * // { // DescribeScheduledQueryResponse
 * //   ScheduledQuery: { // ScheduledQueryDescription
 * //     Arn: "STRING_VALUE", // required
 * //     Name: "STRING_VALUE", // required
 * //     QueryString: "STRING_VALUE", // required
 * //     CreationTime: new Date("TIMESTAMP"),
 * //     State: "STRING_VALUE", // required
 * //     PreviousInvocationTime: new Date("TIMESTAMP"),
 * //     NextInvocationTime: new Date("TIMESTAMP"),
 * //     ScheduleConfiguration: { // ScheduleConfiguration
 * //       ScheduleExpression: "STRING_VALUE", // required
 * //     },
 * //     NotificationConfiguration: { // NotificationConfiguration
 * //       SnsConfiguration: { // SnsConfiguration
 * //         TopicArn: "STRING_VALUE", // required
 * //       },
 * //     },
 * //     TargetConfiguration: { // TargetConfiguration
 * //       TimestreamConfiguration: { // TimestreamConfiguration
 * //         DatabaseName: "STRING_VALUE", // required
 * //         TableName: "STRING_VALUE", // required
 * //         TimeColumn: "STRING_VALUE", // required
 * //         DimensionMappings: [ // DimensionMappingList // required
 * //           { // DimensionMapping
 * //             Name: "STRING_VALUE", // required
 * //             DimensionValueType: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //         MultiMeasureMappings: { // MultiMeasureMappings
 * //           TargetMultiMeasureName: "STRING_VALUE",
 * //           MultiMeasureAttributeMappings: [ // MultiMeasureAttributeMappingList // required
 * //             { // MultiMeasureAttributeMapping
 * //               SourceColumn: "STRING_VALUE", // required
 * //               TargetMultiMeasureAttributeName: "STRING_VALUE",
 * //               MeasureValueType: "STRING_VALUE", // required
 * //             },
 * //           ],
 * //         },
 * //         MixedMeasureMappings: [ // MixedMeasureMappingList
 * //           { // MixedMeasureMapping
 * //             MeasureName: "STRING_VALUE",
 * //             SourceColumn: "STRING_VALUE",
 * //             TargetMeasureName: "STRING_VALUE",
 * //             MeasureValueType: "STRING_VALUE", // required
 * //             MultiMeasureAttributeMappings: [
 * //               {
 * //                 SourceColumn: "STRING_VALUE", // required
 * //                 TargetMultiMeasureAttributeName: "STRING_VALUE",
 * //                 MeasureValueType: "STRING_VALUE", // required
 * //               },
 * //             ],
 * //           },
 * //         ],
 * //         MeasureNameColumn: "STRING_VALUE",
 * //       },
 * //     },
 * //     ScheduledQueryExecutionRoleArn: "STRING_VALUE",
 * //     KmsKeyId: "STRING_VALUE",
 * //     ErrorReportConfiguration: { // ErrorReportConfiguration
 * //       S3Configuration: { // S3Configuration
 * //         BucketName: "STRING_VALUE", // required
 * //         ObjectKeyPrefix: "STRING_VALUE",
 * //         EncryptionOption: "STRING_VALUE",
 * //       },
 * //     },
 * //     LastRunSummary: { // ScheduledQueryRunSummary
 * //       InvocationTime: new Date("TIMESTAMP"),
 * //       TriggerTime: new Date("TIMESTAMP"),
 * //       RunStatus: "STRING_VALUE",
 * //       ExecutionStats: { // ExecutionStats
 * //         ExecutionTimeInMillis: Number("long"),
 * //         DataWrites: Number("long"),
 * //         BytesMetered: Number("long"),
 * //         RecordsIngested: Number("long"),
 * //         QueryResultRows: Number("long"),
 * //       },
 * //       ErrorReportLocation: { // ErrorReportLocation
 * //         S3ReportLocation: { // S3ReportLocation
 * //           BucketName: "STRING_VALUE",
 * //           ObjectKey: "STRING_VALUE",
 * //         },
 * //       },
 * //       FailureReason: "STRING_VALUE",
 * //     },
 * //     RecentlyFailedRuns: [ // ScheduledQueryRunSummaryList
 * //       {
 * //         InvocationTime: new Date("TIMESTAMP"),
 * //         TriggerTime: new Date("TIMESTAMP"),
 * //         RunStatus: "STRING_VALUE",
 * //         ExecutionStats: {
 * //           ExecutionTimeInMillis: Number("long"),
 * //           DataWrites: Number("long"),
 * //           BytesMetered: Number("long"),
 * //           RecordsIngested: Number("long"),
 * //           QueryResultRows: Number("long"),
 * //         },
 * //         ErrorReportLocation: {
 * //           S3ReportLocation: {
 * //             BucketName: "STRING_VALUE",
 * //             ObjectKey: "STRING_VALUE",
 * //           },
 * //         },
 * //         FailureReason: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeScheduledQueryCommandInput - {@link DescribeScheduledQueryCommandInput}
 * @returns {@link DescribeScheduledQueryCommandOutput}
 * @see {@link DescribeScheduledQueryCommandInput} for command's `input` shape.
 * @see {@link DescribeScheduledQueryCommandOutput} for command's `response` shape.
 * @see {@link TimestreamQueryClientResolvedConfig | config} for TimestreamQueryClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> You are not authorized to perform this action. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>
 *             Timestream was unable to fully process this request because of an internal
 *             server error. </p>
 *
 * @throws {@link InvalidEndpointException} (client fault)
 *  <p>The requested endpoint was not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource could not be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> Invalid or malformed request. </p>
 *
 * @throws {@link TimestreamQueryServiceException}
 * <p>Base exception class for all service exceptions from TimestreamQuery service.</p>
 *
 */
export class DescribeScheduledQueryCommand extends $Command<
  DescribeScheduledQueryCommandInput,
  DescribeScheduledQueryCommandOutput,
  TimestreamQueryClientResolvedConfig
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
  constructor(readonly input: DescribeScheduledQueryCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: TimestreamQueryClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeScheduledQueryCommandInput, DescribeScheduledQueryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeScheduledQueryCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(
      getEndpointDiscoveryPlugin(configuration, { clientStack, options, isDiscoveredEndpointRequired: true })
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TimestreamQueryClient";
    const commandName = "DescribeScheduledQueryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: DescribeScheduledQueryResponseFilterSensitiveLog,
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
  private serialize(input: DescribeScheduledQueryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeScheduledQueryCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeScheduledQueryCommandOutput> {
    return de_DescribeScheduledQueryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
