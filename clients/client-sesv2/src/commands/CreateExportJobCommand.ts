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

import {
  CreateExportJobRequest,
  CreateExportJobRequestFilterSensitiveLog,
  CreateExportJobResponse,
} from "../models/models_0";
import { de_CreateExportJobCommand, se_CreateExportJobCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SESv2ClientResolvedConfig } from "../SESv2Client";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateExportJobCommand}.
 */
export interface CreateExportJobCommandInput extends CreateExportJobRequest {}
/**
 * @public
 *
 * The output of {@link CreateExportJobCommand}.
 */
export interface CreateExportJobCommandOutput extends CreateExportJobResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates an export job for a data source and destination.</p>
 *          <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, CreateExportJobCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, CreateExportJobCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const input = { // CreateExportJobRequest
 *   ExportDataSource: { // ExportDataSource
 *     MetricsDataSource: { // MetricsDataSource
 *       Dimensions: { // ExportDimensions // required
 *         "<keys>": [ // ExportDimensionValue
 *           "STRING_VALUE",
 *         ],
 *       },
 *       Namespace: "VDM", // required
 *       Metrics: [ // ExportMetrics // required
 *         { // ExportMetric
 *           Name: "SEND" || "COMPLAINT" || "PERMANENT_BOUNCE" || "TRANSIENT_BOUNCE" || "OPEN" || "CLICK" || "DELIVERY" || "DELIVERY_OPEN" || "DELIVERY_CLICK" || "DELIVERY_COMPLAINT",
 *           Aggregation: "RATE" || "VOLUME",
 *         },
 *       ],
 *       StartDate: new Date("TIMESTAMP"), // required
 *       EndDate: new Date("TIMESTAMP"), // required
 *     },
 *     MessageInsightsDataSource: { // MessageInsightsDataSource
 *       StartDate: new Date("TIMESTAMP"), // required
 *       EndDate: new Date("TIMESTAMP"), // required
 *       Include: { // MessageInsightsFilters
 *         FromEmailAddress: [ // EmailAddressFilterList
 *           "STRING_VALUE",
 *         ],
 *         Destination: [
 *           "STRING_VALUE",
 *         ],
 *         Subject: [ // EmailSubjectFilterList
 *           "STRING_VALUE",
 *         ],
 *         Isp: [ // IspFilterList
 *           "STRING_VALUE",
 *         ],
 *         LastDeliveryEvent: [ // LastDeliveryEventList
 *           "SEND" || "DELIVERY" || "TRANSIENT_BOUNCE" || "PERMANENT_BOUNCE" || "UNDETERMINED_BOUNCE" || "COMPLAINT",
 *         ],
 *         LastEngagementEvent: [ // LastEngagementEventList
 *           "OPEN" || "CLICK",
 *         ],
 *       },
 *       Exclude: {
 *         FromEmailAddress: [
 *           "STRING_VALUE",
 *         ],
 *         Destination: [
 *           "STRING_VALUE",
 *         ],
 *         Subject: [
 *           "STRING_VALUE",
 *         ],
 *         Isp: [
 *           "STRING_VALUE",
 *         ],
 *         LastDeliveryEvent: [
 *           "SEND" || "DELIVERY" || "TRANSIENT_BOUNCE" || "PERMANENT_BOUNCE" || "UNDETERMINED_BOUNCE" || "COMPLAINT",
 *         ],
 *         LastEngagementEvent: [
 *           "OPEN" || "CLICK",
 *         ],
 *       },
 *       MaxResults: Number("int"),
 *     },
 *   },
 *   ExportDestination: { // ExportDestination
 *     DataFormat: "CSV" || "JSON", // required
 *     S3Url: "STRING_VALUE",
 *   },
 * };
 * const command = new CreateExportJobCommand(input);
 * const response = await client.send(command);
 * // { // CreateExportJobResponse
 * //   JobId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateExportJobCommandInput - {@link CreateExportJobCommandInput}
 * @returns {@link CreateExportJobCommandOutput}
 * @see {@link CreateExportJobCommandInput} for command's `input` shape.
 * @see {@link CreateExportJobCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for SESv2Client's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input you provided is invalid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>There are too many instances of the specified resource type.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource you attempted to access doesn't exist.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Too many requests have been made to the operation.</p>
 *
 * @throws {@link SESv2ServiceException}
 * <p>Base exception class for all service exceptions from SESv2 service.</p>
 *
 * @example Create Metrics export job
 * ```javascript
 * // Creates a new export job for Metrics data
 * const input = {
 *   "ExportDataSource": {
 *     "MetricsDataSource": {
 *       "Dimensions": {
 *         "ISP": [
 *           "*"
 *         ]
 *       },
 *       "EndDate": "2023-07-02T00:00:00",
 *       "Metrics": [
 *         {
 *           "Aggregation": "VOLUME",
 *           "Name": "SEND"
 *         },
 *         {
 *           "Aggregation": "VOLUME",
 *           "Name": "COMPLAINT"
 *         },
 *         {
 *           "Aggregation": "RATE",
 *           "Name": "COMPLAINT"
 *         }
 *       ],
 *       "Namespace": "VDM",
 *       "StartDate": "2023-07-01T00:00:00"
 *     }
 *   },
 *   "ExportDestination": {
 *     "DataFormat": "CSV"
 *   }
 * };
 * const command = new CreateExportJobCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "JobId": "ef28cf62-9d8e-4b60-9283-b09816c99a99"
 * }
 * *\/
 * // example id: create-export-job-1685701853690
 * ```
 *
 * @example Create Message Insights export job
 * ```javascript
 * // Creates a new export job for Message Insights data
 * const input = {
 *   "ExportDataSource": {
 *     "MessageInsightsDataSource": {
 *       "EndDate": "2023-07-02T00:00:00",
 *       "Exclude": {
 *         "FromEmailAddress": [
 *           "hello@example.com"
 *         ]
 *       },
 *       "Include": {
 *         "Subject": [
 *           "Hello"
 *         ]
 *       },
 *       "StartDate": "2023-07-01T00:00:00"
 *     }
 *   },
 *   "ExportDestination": {
 *     "DataFormat": "CSV"
 *   }
 * };
 * const command = new CreateExportJobCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "JobId": "ef28cf62-9d8e-4b60-9283-b09816c99a99"
 * }
 * *\/
 * // example id: create-export-job-1689957853323
 * ```
 *
 */
export class CreateExportJobCommand extends $Command<
  CreateExportJobCommandInput,
  CreateExportJobCommandOutput,
  SESv2ClientResolvedConfig
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
  constructor(readonly input: CreateExportJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESv2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateExportJobCommandInput, CreateExportJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateExportJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESv2Client";
    const commandName = "CreateExportJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateExportJobRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SimpleEmailService_v2",
        operation: "CreateExportJob",
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
  private serialize(input: CreateExportJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateExportJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateExportJobCommandOutput> {
    return de_CreateExportJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
