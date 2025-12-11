// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  CostAndUsageReportServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CostAndUsageReportServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeReportDefinitionsRequest, DescribeReportDefinitionsResponse } from "../models/models_0";
import { DescribeReportDefinitions } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeReportDefinitionsCommand}.
 */
export interface DescribeReportDefinitionsCommandInput extends DescribeReportDefinitionsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeReportDefinitionsCommand}.
 */
export interface DescribeReportDefinitionsCommandOutput extends DescribeReportDefinitionsResponse, __MetadataBearer {}

/**
 * <p>Lists the Amazon Web Services Cost and Usage Report available to this account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostAndUsageReportServiceClient, DescribeReportDefinitionsCommand } from "@aws-sdk/client-cost-and-usage-report-service"; // ES Modules import
 * // const { CostAndUsageReportServiceClient, DescribeReportDefinitionsCommand } = require("@aws-sdk/client-cost-and-usage-report-service"); // CommonJS import
 * // import type { CostAndUsageReportServiceClientConfig } from "@aws-sdk/client-cost-and-usage-report-service";
 * const config = {}; // type is CostAndUsageReportServiceClientConfig
 * const client = new CostAndUsageReportServiceClient(config);
 * const input = { // DescribeReportDefinitionsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeReportDefinitionsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeReportDefinitionsResponse
 * //   ReportDefinitions: [ // ReportDefinitionList
 * //     { // ReportDefinition
 * //       ReportName: "STRING_VALUE", // required
 * //       TimeUnit: "HOURLY" || "DAILY" || "MONTHLY", // required
 * //       Format: "textORcsv" || "Parquet", // required
 * //       Compression: "ZIP" || "GZIP" || "Parquet", // required
 * //       AdditionalSchemaElements: [ // SchemaElementList // required
 * //         "RESOURCES" || "SPLIT_COST_ALLOCATION_DATA" || "MANUAL_DISCOUNT_COMPATIBILITY",
 * //       ],
 * //       S3Bucket: "STRING_VALUE", // required
 * //       S3Prefix: "STRING_VALUE", // required
 * //       S3Region: "af-south-1" || "ap-east-1" || "ap-south-1" || "ap-south-2" || "ap-southeast-1" || "ap-southeast-2" || "ap-southeast-3" || "ap-northeast-1" || "ap-northeast-2" || "ap-northeast-3" || "ca-central-1" || "eu-central-1" || "eu-central-2" || "eu-west-1" || "eu-west-2" || "eu-west-3" || "eu-north-1" || "eu-south-1" || "eu-south-2" || "me-central-1" || "me-south-1" || "sa-east-1" || "us-east-1" || "us-east-2" || "us-west-1" || "us-west-2" || "cn-north-1" || "cn-northwest-1", // required
 * //       AdditionalArtifacts: [ // AdditionalArtifactList
 * //         "REDSHIFT" || "QUICKSIGHT" || "ATHENA",
 * //       ],
 * //       RefreshClosedReports: true || false,
 * //       ReportVersioning: "CREATE_NEW_REPORT" || "OVERWRITE_REPORT",
 * //       BillingViewArn: "STRING_VALUE",
 * //       ReportStatus: { // ReportStatus
 * //         lastDelivery: "STRING_VALUE",
 * //         lastStatus: "SUCCESS" || "ERROR_PERMISSIONS" || "ERROR_NO_BUCKET",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeReportDefinitionsCommandInput - {@link DescribeReportDefinitionsCommandInput}
 * @returns {@link DescribeReportDefinitionsCommandOutput}
 * @see {@link DescribeReportDefinitionsCommandInput} for command's `input` shape.
 * @see {@link DescribeReportDefinitionsCommandOutput} for command's `response` shape.
 * @see {@link CostAndUsageReportServiceClientResolvedConfig | config} for CostAndUsageReportServiceClient's `config` shape.
 *
 * @throws {@link InternalErrorException} (server fault)
 *  <p>An error on the server occurred during the processing of your request. Try again later.</p>
 *
 * @throws {@link CostAndUsageReportServiceServiceException}
 * <p>Base exception class for all service exceptions from CostAndUsageReportService service.</p>
 *
 *
 * @example To list the AWS Cost and Usage reports for the account.
 * ```javascript
 * // The following example lists the AWS Cost and Usage reports for the account.
 * const input = {
 *   MaxResults: 5
 * };
 * const command = new DescribeReportDefinitionsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ReportDefinitions: [
 *     {
 *       AdditionalArtifacts: [
 *         "QUICKSIGHT"
 *       ],
 *       AdditionalSchemaElements: [
 *         "RESOURCES"
 *       ],
 *       Compression: "GZIP",
 *       Format: "textORcsv",
 *       ReportName: "ExampleReport",
 *       S3Bucket: "example-s3-bucket",
 *       S3Prefix: "exampleprefix",
 *       S3Region: "us-east-1",
 *       TimeUnit: "HOURLY"
 *     },
 *     {
 *       AdditionalArtifacts: [
 *         "QUICKSIGHT"
 *       ],
 *       AdditionalSchemaElements: [
 *         "RESOURCES"
 *       ],
 *       Compression: "GZIP",
 *       Format: "textORcsv",
 *       ReportName: "ExampleReport2",
 *       S3Bucket: "example-s3-bucket",
 *       S3Prefix: "exampleprefix",
 *       S3Region: "us-east-1",
 *       TimeUnit: "HOURLY"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeReportDefinitionsCommand extends $Command
  .classBuilder<
    DescribeReportDefinitionsCommandInput,
    DescribeReportDefinitionsCommandOutput,
    CostAndUsageReportServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CostAndUsageReportServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSOrigamiServiceGatewayService", "DescribeReportDefinitions", {})
  .n("CostAndUsageReportServiceClient", "DescribeReportDefinitionsCommand")
  .sc(DescribeReportDefinitions)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeReportDefinitionsRequest;
      output: DescribeReportDefinitionsResponse;
    };
    sdk: {
      input: DescribeReportDefinitionsCommandInput;
      output: DescribeReportDefinitionsCommandOutput;
    };
  };
}
