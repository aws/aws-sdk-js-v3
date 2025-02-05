// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BCMDataExportsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BCMDataExportsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetExecutionRequest, GetExecutionResponse } from "../models/models_0";
import { de_GetExecutionCommand, se_GetExecutionCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetExecutionCommand}.
 */
export interface GetExecutionCommandInput extends GetExecutionRequest {}
/**
 * @public
 *
 * The output of {@link GetExecutionCommand}.
 */
export interface GetExecutionCommandOutput extends GetExecutionResponse, __MetadataBearer {}

/**
 * <p>Exports data based on the source data update.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BCMDataExportsClient, GetExecutionCommand } from "@aws-sdk/client-bcm-data-exports"; // ES Modules import
 * // const { BCMDataExportsClient, GetExecutionCommand } = require("@aws-sdk/client-bcm-data-exports"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new BCMDataExportsClient(config);
 * const input = { // GetExecutionRequest
 *   ExportArn: "STRING_VALUE", // required
 *   ExecutionId: "STRING_VALUE", // required
 * };
 * const command = new GetExecutionCommand(input);
 * const response = await client.send(command);
 * // { // GetExecutionResponse
 * //   ExecutionId: "STRING_VALUE",
 * //   Export: { // Export
 * //     ExportArn: "STRING_VALUE",
 * //     Name: "STRING_VALUE", // required
 * //     Description: "STRING_VALUE",
 * //     DataQuery: { // DataQuery
 * //       QueryStatement: "STRING_VALUE", // required
 * //       TableConfigurations: { // TableConfigurations
 * //         "<keys>": { // TableProperties
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //       },
 * //     },
 * //     DestinationConfigurations: { // DestinationConfigurations
 * //       S3Destination: { // S3Destination
 * //         S3Bucket: "STRING_VALUE", // required
 * //         S3Prefix: "STRING_VALUE", // required
 * //         S3Region: "STRING_VALUE", // required
 * //         S3OutputConfigurations: { // S3OutputConfigurations
 * //           OutputType: "CUSTOM", // required
 * //           Format: "TEXT_OR_CSV" || "PARQUET", // required
 * //           Compression: "GZIP" || "PARQUET", // required
 * //           Overwrite: "CREATE_NEW_REPORT" || "OVERWRITE_REPORT", // required
 * //         },
 * //       },
 * //     },
 * //     RefreshCadence: { // RefreshCadence
 * //       Frequency: "SYNCHRONOUS", // required
 * //     },
 * //   },
 * //   ExecutionStatus: { // ExecutionStatus
 * //     StatusCode: "INITIATION_IN_PROCESS" || "QUERY_QUEUED" || "QUERY_IN_PROCESS" || "QUERY_FAILURE" || "DELIVERY_IN_PROCESS" || "DELIVERY_SUCCESS" || "DELIVERY_FAILURE",
 * //     StatusReason: "INSUFFICIENT_PERMISSION" || "BILL_OWNER_CHANGED" || "INTERNAL_FAILURE",
 * //     CreatedAt: new Date("TIMESTAMP"),
 * //     CompletedAt: new Date("TIMESTAMP"),
 * //     LastUpdatedAt: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetExecutionCommandInput - {@link GetExecutionCommandInput}
 * @returns {@link GetExecutionCommandOutput}
 * @see {@link GetExecutionCommandInput} for command's `input` shape.
 * @see {@link GetExecutionCommandOutput} for command's `response` shape.
 * @see {@link BCMDataExportsClientResolvedConfig | config} for BCMDataExportsClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An error on the server occurred during the processing of your request. Try again
 *       later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified Amazon Resource Name (ARN) in the request doesn't exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services
 *       service.</p>
 *
 * @throws {@link BCMDataExportsServiceException}
 * <p>Base exception class for all service exceptions from BCMDataExports service.</p>
 *
 * @public
 */
export class GetExecutionCommand extends $Command
  .classBuilder<
    GetExecutionCommandInput,
    GetExecutionCommandOutput,
    BCMDataExportsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BCMDataExportsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSBillingAndCostManagementDataExports", "GetExecution", {})
  .n("BCMDataExportsClient", "GetExecutionCommand")
  .f(void 0, void 0)
  .ser(se_GetExecutionCommand)
  .de(de_GetExecutionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetExecutionRequest;
      output: GetExecutionResponse;
    };
    sdk: {
      input: GetExecutionCommandInput;
      output: GetExecutionCommandOutput;
    };
  };
}
