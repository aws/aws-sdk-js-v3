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
  CostAndUsageReportServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CostAndUsageReportServiceClient";
import { PutReportDefinitionRequest, PutReportDefinitionResponse } from "../models/models_0";
import { de_PutReportDefinitionCommand, se_PutReportDefinitionCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutReportDefinitionCommand}.
 */
export interface PutReportDefinitionCommandInput extends PutReportDefinitionRequest {}
/**
 * @public
 *
 * The output of {@link PutReportDefinitionCommand}.
 */
export interface PutReportDefinitionCommandOutput extends PutReportDefinitionResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a new report using the description that you provide.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostAndUsageReportServiceClient, PutReportDefinitionCommand } from "@aws-sdk/client-cost-and-usage-report-service"; // ES Modules import
 * // const { CostAndUsageReportServiceClient, PutReportDefinitionCommand } = require("@aws-sdk/client-cost-and-usage-report-service"); // CommonJS import
 * const client = new CostAndUsageReportServiceClient(config);
 * const input = { // PutReportDefinitionRequest
 *   ReportDefinition: { // ReportDefinition
 *     ReportName: "STRING_VALUE", // required
 *     TimeUnit: "HOURLY" || "DAILY" || "MONTHLY", // required
 *     Format: "textORcsv" || "Parquet", // required
 *     Compression: "ZIP" || "GZIP" || "Parquet", // required
 *     AdditionalSchemaElements: [ // SchemaElementList // required
 *       "RESOURCES" || "SPLIT_COST_ALLOCATION_DATA",
 *     ],
 *     S3Bucket: "STRING_VALUE", // required
 *     S3Prefix: "STRING_VALUE", // required
 *     S3Region: "af-south-1" || "ap-east-1" || "ap-south-1" || "ap-south-2" || "ap-southeast-1" || "ap-southeast-2" || "ap-southeast-3" || "ap-northeast-1" || "ap-northeast-2" || "ap-northeast-3" || "ca-central-1" || "eu-central-1" || "eu-central-2" || "eu-west-1" || "eu-west-2" || "eu-west-3" || "eu-north-1" || "eu-south-1" || "eu-south-2" || "me-central-1" || "me-south-1" || "sa-east-1" || "us-east-1" || "us-east-2" || "us-west-1" || "us-west-2" || "cn-north-1" || "cn-northwest-1", // required
 *     AdditionalArtifacts: [ // AdditionalArtifactList
 *       "REDSHIFT" || "QUICKSIGHT" || "ATHENA",
 *     ],
 *     RefreshClosedReports: true || false,
 *     ReportVersioning: "CREATE_NEW_REPORT" || "OVERWRITE_REPORT",
 *     BillingViewArn: "STRING_VALUE",
 *   },
 * };
 * const command = new PutReportDefinitionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutReportDefinitionCommandInput - {@link PutReportDefinitionCommandInput}
 * @returns {@link PutReportDefinitionCommandOutput}
 * @see {@link PutReportDefinitionCommandInput} for command's `input` shape.
 * @see {@link PutReportDefinitionCommandOutput} for command's `response` shape.
 * @see {@link CostAndUsageReportServiceClientResolvedConfig | config} for CostAndUsageReportServiceClient's `config` shape.
 *
 * @throws {@link DuplicateReportNameException} (client fault)
 *  <p>A report with the specified name already exists in the account. Specify a different report name.</p>
 *
 * @throws {@link InternalErrorException} (server fault)
 *  <p>An error on the server occurred during the processing of your request. Try again later.</p>
 *
 * @throws {@link ReportLimitReachedException} (client fault)
 *  <p>This account already has five reports defined. To define a new report, you must delete an existing report.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link CostAndUsageReportServiceServiceException}
 * <p>Base exception class for all service exceptions from CostAndUsageReportService service.</p>
 *
 * @example To create a report named ExampleReport.
 * ```javascript
 * // The following example creates a AWS Cost and Usage report named ExampleReport.
 * const input = {
 *   "ReportDefinition": {
 *     "AdditionalArtifacts": [
 *       "REDSHIFT",
 *       "QUICKSIGHT"
 *     ],
 *     "AdditionalSchemaElements": [
 *       "RESOURCES"
 *     ],
 *     "Compression": "ZIP",
 *     "Format": "textORcsv",
 *     "ReportName": "ExampleReport",
 *     "S3Bucket": "example-s3-bucket",
 *     "S3Prefix": "exampleprefix",
 *     "S3Region": "us-east-1",
 *     "TimeUnit": "DAILY"
 *   }
 * };
 * const command = new PutReportDefinitionCommand(input);
 * await client.send(command);
 * // example id: to-create-a-report-definitions
 * ```
 *
 */
export class PutReportDefinitionCommand extends $Command<
  PutReportDefinitionCommandInput,
  PutReportDefinitionCommandOutput,
  CostAndUsageReportServiceClientResolvedConfig
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
  constructor(readonly input: PutReportDefinitionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CostAndUsageReportServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutReportDefinitionCommandInput, PutReportDefinitionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutReportDefinitionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CostAndUsageReportServiceClient";
    const commandName = "PutReportDefinitionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSOrigamiServiceGatewayService",
        operation: "PutReportDefinition",
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
  private serialize(input: PutReportDefinitionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PutReportDefinitionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutReportDefinitionCommandOutput> {
    return de_PutReportDefinitionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
