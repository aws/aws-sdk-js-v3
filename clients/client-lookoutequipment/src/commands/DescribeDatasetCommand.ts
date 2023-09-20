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

import { LookoutEquipmentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutEquipmentClient";
import { DescribeDatasetRequest, DescribeDatasetResponse } from "../models/models_0";
import { de_DescribeDatasetCommand, se_DescribeDatasetCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeDatasetCommand}.
 */
export interface DescribeDatasetCommandInput extends DescribeDatasetRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDatasetCommand}.
 */
export interface DescribeDatasetCommandOutput extends DescribeDatasetResponse, __MetadataBearer {}

/**
 * @public
 * <p>Provides a JSON description of the data in each time series dataset, including names,
 *          column names, and data types.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutEquipmentClient, DescribeDatasetCommand } from "@aws-sdk/client-lookoutequipment"; // ES Modules import
 * // const { LookoutEquipmentClient, DescribeDatasetCommand } = require("@aws-sdk/client-lookoutequipment"); // CommonJS import
 * const client = new LookoutEquipmentClient(config);
 * const input = { // DescribeDatasetRequest
 *   DatasetName: "STRING_VALUE", // required
 * };
 * const command = new DescribeDatasetCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDatasetResponse
 * //   DatasetName: "STRING_VALUE",
 * //   DatasetArn: "STRING_VALUE",
 * //   CreatedAt: new Date("TIMESTAMP"),
 * //   LastUpdatedAt: new Date("TIMESTAMP"),
 * //   Status: "CREATED" || "INGESTION_IN_PROGRESS" || "ACTIVE" || "IMPORT_IN_PROGRESS",
 * //   Schema: "STRING_VALUE",
 * //   ServerSideKmsKeyId: "STRING_VALUE",
 * //   IngestionInputConfiguration: { // IngestionInputConfiguration
 * //     S3InputConfiguration: { // IngestionS3InputConfiguration
 * //       Bucket: "STRING_VALUE", // required
 * //       Prefix: "STRING_VALUE",
 * //       KeyPattern: "STRING_VALUE",
 * //     },
 * //   },
 * //   DataQualitySummary: { // DataQualitySummary
 * //     InsufficientSensorData: { // InsufficientSensorData
 * //       MissingCompleteSensorData: { // MissingCompleteSensorData
 * //         AffectedSensorCount: Number("int"), // required
 * //       },
 * //       SensorsWithShortDateRange: { // SensorsWithShortDateRange
 * //         AffectedSensorCount: Number("int"), // required
 * //       },
 * //     },
 * //     MissingSensorData: { // MissingSensorData
 * //       AffectedSensorCount: Number("int"), // required
 * //       TotalNumberOfMissingValues: Number("int"), // required
 * //     },
 * //     InvalidSensorData: { // InvalidSensorData
 * //       AffectedSensorCount: Number("int"), // required
 * //       TotalNumberOfInvalidValues: Number("int"), // required
 * //     },
 * //     UnsupportedTimestamps: { // UnsupportedTimestamps
 * //       TotalNumberOfUnsupportedTimestamps: Number("int"), // required
 * //     },
 * //     DuplicateTimestamps: { // DuplicateTimestamps
 * //       TotalNumberOfDuplicateTimestamps: Number("int"), // required
 * //     },
 * //   },
 * //   IngestedFilesSummary: { // IngestedFilesSummary
 * //     TotalNumberOfFiles: Number("int"), // required
 * //     IngestedNumberOfFiles: Number("int"), // required
 * //     DiscardedFiles: [ // ListOfDiscardedFiles
 * //       { // S3Object
 * //         Bucket: "STRING_VALUE", // required
 * //         Key: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * //   RoleArn: "STRING_VALUE",
 * //   DataStartTime: new Date("TIMESTAMP"),
 * //   DataEndTime: new Date("TIMESTAMP"),
 * //   SourceDatasetArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeDatasetCommandInput - {@link DescribeDatasetCommandInput}
 * @returns {@link DescribeDatasetCommandOutput}
 * @see {@link DescribeDatasetCommandInput} for command's `input` shape.
 * @see {@link DescribeDatasetCommandOutput} for command's `response` shape.
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
 *  <p> The input fails to satisfy constraints specified by Amazon Lookout for Equipment or a related Amazon Web Services
 *          service that's being utilized. </p>
 *
 * @throws {@link LookoutEquipmentServiceException}
 * <p>Base exception class for all service exceptions from LookoutEquipment service.</p>
 *
 */
export class DescribeDatasetCommand extends $Command<
  DescribeDatasetCommandInput,
  DescribeDatasetCommandOutput,
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
  constructor(readonly input: DescribeDatasetCommandInput) {
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
  ): Handler<DescribeDatasetCommandInput, DescribeDatasetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeDatasetCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LookoutEquipmentClient";
    const commandName = "DescribeDatasetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSLookoutEquipmentFrontendService",
        operation: "DescribeDataset",
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
  private serialize(input: DescribeDatasetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeDatasetCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeDatasetCommandOutput> {
    return de_DescribeDatasetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
