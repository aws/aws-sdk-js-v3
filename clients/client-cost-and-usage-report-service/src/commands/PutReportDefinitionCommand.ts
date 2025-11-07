// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  CostAndUsageReportServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CostAndUsageReportServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { PutReportDefinitionRequest, PutReportDefinitionResponse } from "../models/models_0";
import { PutReportDefinition } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Creates a new report using the description that you provide.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostAndUsageReportServiceClient, PutReportDefinitionCommand } from "@aws-sdk/client-cost-and-usage-report-service"; // ES Modules import
 * // const { CostAndUsageReportServiceClient, PutReportDefinitionCommand } = require("@aws-sdk/client-cost-and-usage-report-service"); // CommonJS import
 * // import type { CostAndUsageReportServiceClientConfig } from "@aws-sdk/client-cost-and-usage-report-service";
 * const config = {}; // type is CostAndUsageReportServiceClientConfig
 * const client = new CostAndUsageReportServiceClient(config);
 * const input = { // PutReportDefinitionRequest
 *   ReportDefinition: { // ReportDefinition
 *     ReportName: "STRING_VALUE", // required
 *     TimeUnit: "HOURLY" || "DAILY" || "MONTHLY", // required
 *     Format: "textORcsv" || "Parquet", // required
 *     Compression: "ZIP" || "GZIP" || "Parquet", // required
 *     AdditionalSchemaElements: [ // SchemaElementList // required
 *       "RESOURCES" || "SPLIT_COST_ALLOCATION_DATA" || "MANUAL_DISCOUNT_COMPATIBILITY",
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
 *     ReportStatus: { // ReportStatus
 *       lastDelivery: "STRING_VALUE",
 *       lastStatus: "SUCCESS" || "ERROR_PERMISSIONS" || "ERROR_NO_BUCKET",
 *     },
 *   },
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified report (<code>ReportName</code>) in the request doesn't exist.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link CostAndUsageReportServiceServiceException}
 * <p>Base exception class for all service exceptions from CostAndUsageReportService service.</p>
 *
 *
 * @example To create a report named ExampleReport.
 * ```javascript
 * // The following example creates a AWS Cost and Usage report named ExampleReport.
 * const input = {
 *   ReportDefinition: {
 *     AdditionalArtifacts: [
 *       "REDSHIFT",
 *       "QUICKSIGHT"
 *     ],
 *     AdditionalSchemaElements: [
 *       "RESOURCES"
 *     ],
 *     Compression: "ZIP",
 *     Format: "textORcsv",
 *     ReportName: "ExampleReport",
 *     S3Bucket: "example-s3-bucket",
 *     S3Prefix: "exampleprefix",
 *     S3Region: "us-east-1",
 *     TimeUnit: "DAILY"
 *   }
 * };
 * const command = new PutReportDefinitionCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class PutReportDefinitionCommand extends $Command
  .classBuilder<
    PutReportDefinitionCommandInput,
    PutReportDefinitionCommandOutput,
    CostAndUsageReportServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CostAndUsageReportServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSOrigamiServiceGatewayService", "PutReportDefinition", {})
  .n("CostAndUsageReportServiceClient", "PutReportDefinitionCommand")
  .sc(PutReportDefinition)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutReportDefinitionRequest;
      output: {};
    };
    sdk: {
      input: PutReportDefinitionCommandInput;
      output: PutReportDefinitionCommandOutput;
    };
  };
}
