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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import {
  CreateScheduledQueryRequest,
  CreateScheduledQueryRequestFilterSensitiveLog,
  CreateScheduledQueryResponse,
} from "../models/models_0";
import { de_CreateScheduledQueryCommand, se_CreateScheduledQueryCommand } from "../protocols/Aws_json1_0";
import { ServiceInputTypes, ServiceOutputTypes, TimestreamQueryClientResolvedConfig } from "../TimestreamQueryClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateScheduledQueryCommand}.
 */
export interface CreateScheduledQueryCommandInput extends CreateScheduledQueryRequest {}
/**
 * @public
 *
 * The output of {@link CreateScheduledQueryCommand}.
 */
export interface CreateScheduledQueryCommandOutput extends CreateScheduledQueryResponse, __MetadataBearer {}

/**
 * @public
 * <p> Create a scheduled query that will be run on your behalf at the configured schedule.
 *             Timestream assumes the execution role provided as part of the
 *                 <code>ScheduledQueryExecutionRoleArn</code> parameter to run the query. You can use
 *             the <code>NotificationConfiguration</code> parameter to configure notification for your
 *             scheduled query operations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TimestreamQueryClient, CreateScheduledQueryCommand } from "@aws-sdk/client-timestream-query"; // ES Modules import
 * // const { TimestreamQueryClient, CreateScheduledQueryCommand } = require("@aws-sdk/client-timestream-query"); // CommonJS import
 * const client = new TimestreamQueryClient(config);
 * const input = { // CreateScheduledQueryRequest
 *   Name: "STRING_VALUE", // required
 *   QueryString: "STRING_VALUE", // required
 *   ScheduleConfiguration: { // ScheduleConfiguration
 *     ScheduleExpression: "STRING_VALUE", // required
 *   },
 *   NotificationConfiguration: { // NotificationConfiguration
 *     SnsConfiguration: { // SnsConfiguration
 *       TopicArn: "STRING_VALUE", // required
 *     },
 *   },
 *   TargetConfiguration: { // TargetConfiguration
 *     TimestreamConfiguration: { // TimestreamConfiguration
 *       DatabaseName: "STRING_VALUE", // required
 *       TableName: "STRING_VALUE", // required
 *       TimeColumn: "STRING_VALUE", // required
 *       DimensionMappings: [ // DimensionMappingList // required
 *         { // DimensionMapping
 *           Name: "STRING_VALUE", // required
 *           DimensionValueType: "VARCHAR", // required
 *         },
 *       ],
 *       MultiMeasureMappings: { // MultiMeasureMappings
 *         TargetMultiMeasureName: "STRING_VALUE",
 *         MultiMeasureAttributeMappings: [ // MultiMeasureAttributeMappingList // required
 *           { // MultiMeasureAttributeMapping
 *             SourceColumn: "STRING_VALUE", // required
 *             TargetMultiMeasureAttributeName: "STRING_VALUE",
 *             MeasureValueType: "BIGINT" || "BOOLEAN" || "DOUBLE" || "VARCHAR" || "TIMESTAMP", // required
 *           },
 *         ],
 *       },
 *       MixedMeasureMappings: [ // MixedMeasureMappingList
 *         { // MixedMeasureMapping
 *           MeasureName: "STRING_VALUE",
 *           SourceColumn: "STRING_VALUE",
 *           TargetMeasureName: "STRING_VALUE",
 *           MeasureValueType: "BIGINT" || "BOOLEAN" || "DOUBLE" || "VARCHAR" || "MULTI", // required
 *           MultiMeasureAttributeMappings: [
 *             {
 *               SourceColumn: "STRING_VALUE", // required
 *               TargetMultiMeasureAttributeName: "STRING_VALUE",
 *               MeasureValueType: "BIGINT" || "BOOLEAN" || "DOUBLE" || "VARCHAR" || "TIMESTAMP", // required
 *             },
 *           ],
 *         },
 *       ],
 *       MeasureNameColumn: "STRING_VALUE",
 *     },
 *   },
 *   ClientToken: "STRING_VALUE",
 *   ScheduledQueryExecutionRoleArn: "STRING_VALUE", // required
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   KmsKeyId: "STRING_VALUE",
 *   ErrorReportConfiguration: { // ErrorReportConfiguration
 *     S3Configuration: { // S3Configuration
 *       BucketName: "STRING_VALUE", // required
 *       ObjectKeyPrefix: "STRING_VALUE",
 *       EncryptionOption: "SSE_S3" || "SSE_KMS",
 *     },
 *   },
 * };
 * const command = new CreateScheduledQueryCommand(input);
 * const response = await client.send(command);
 * // { // CreateScheduledQueryResponse
 * //   Arn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateScheduledQueryCommandInput - {@link CreateScheduledQueryCommandInput}
 * @returns {@link CreateScheduledQueryCommandOutput}
 * @see {@link CreateScheduledQueryCommandInput} for command's `input` shape.
 * @see {@link CreateScheduledQueryCommandOutput} for command's `response` shape.
 * @see {@link TimestreamQueryClientResolvedConfig | config} for TimestreamQueryClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> You are not authorized to perform this action. </p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p> Unable to poll results for a cancelled query. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>
 *             Timestream was unable to fully process this request because of an internal
 *             server error. </p>
 *
 * @throws {@link InvalidEndpointException} (client fault)
 *  <p>The requested endpoint was not valid.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>You have exceeded the service quota.</p>
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
export class CreateScheduledQueryCommand extends $Command<
  CreateScheduledQueryCommandInput,
  CreateScheduledQueryCommandOutput,
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
  constructor(readonly input: CreateScheduledQueryCommandInput) {
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
  ): Handler<CreateScheduledQueryCommandInput, CreateScheduledQueryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateScheduledQueryCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(
      getEndpointDiscoveryPlugin(configuration, { clientStack, options, isDiscoveredEndpointRequired: true })
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TimestreamQueryClient";
    const commandName = "CreateScheduledQueryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateScheduledQueryRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Timestream_20181101",
        operation: "CreateScheduledQuery",
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
  private serialize(input: CreateScheduledQueryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateScheduledQueryCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateScheduledQueryCommandOutput> {
    return de_CreateScheduledQueryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
