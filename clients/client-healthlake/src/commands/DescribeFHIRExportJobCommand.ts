// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { HealthLakeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../HealthLakeClient";
import { DescribeFHIRExportJobRequest, DescribeFHIRExportJobResponse } from "../models/models_0";
import { de_DescribeFHIRExportJobCommand, se_DescribeFHIRExportJobCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeFHIRExportJobCommand}.
 */
export interface DescribeFHIRExportJobCommandInput extends DescribeFHIRExportJobRequest {}
/**
 * @public
 *
 * The output of {@link DescribeFHIRExportJobCommand}.
 */
export interface DescribeFHIRExportJobCommandOutput extends DescribeFHIRExportJobResponse, __MetadataBearer {}

/**
 * <p>Get FHIR export job properties.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HealthLakeClient, DescribeFHIRExportJobCommand } from "@aws-sdk/client-healthlake"; // ES Modules import
 * // const { HealthLakeClient, DescribeFHIRExportJobCommand } = require("@aws-sdk/client-healthlake"); // CommonJS import
 * const client = new HealthLakeClient(config);
 * const input = { // DescribeFHIRExportJobRequest
 *   DatastoreId: "STRING_VALUE", // required
 *   JobId: "STRING_VALUE", // required
 * };
 * const command = new DescribeFHIRExportJobCommand(input);
 * const response = await client.send(command);
 * // { // DescribeFHIRExportJobResponse
 * //   ExportJobProperties: { // ExportJobProperties
 * //     JobId: "STRING_VALUE", // required
 * //     JobName: "STRING_VALUE",
 * //     JobStatus: "SUBMITTED" || "QUEUED" || "IN_PROGRESS" || "COMPLETED_WITH_ERRORS" || "COMPLETED" || "FAILED" || "CANCEL_SUBMITTED" || "CANCEL_IN_PROGRESS" || "CANCEL_COMPLETED" || "CANCEL_FAILED", // required
 * //     SubmitTime: new Date("TIMESTAMP"), // required
 * //     EndTime: new Date("TIMESTAMP"),
 * //     DatastoreId: "STRING_VALUE", // required
 * //     OutputDataConfig: { // OutputDataConfig Union: only one key present
 * //       S3Configuration: { // S3Configuration
 * //         S3Uri: "STRING_VALUE", // required
 * //         KmsKeyId: "STRING_VALUE", // required
 * //       },
 * //     },
 * //     DataAccessRoleArn: "STRING_VALUE",
 * //     Message: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeFHIRExportJobCommandInput - {@link DescribeFHIRExportJobCommandInput}
 * @returns {@link DescribeFHIRExportJobCommandOutput}
 * @see {@link DescribeFHIRExportJobCommandInput} for command's `input` shape.
 * @see {@link DescribeFHIRExportJobCommandOutput} for command's `response` shape.
 * @see {@link HealthLakeClientResolvedConfig | config} for HealthLakeClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unknown internal error occurred in the service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested data store was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The user has exceeded their maximum number of allowed calls to the given API. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The user input parameter was invalid.</p>
 *
 * @throws {@link HealthLakeServiceException}
 * <p>Base exception class for all service exceptions from HealthLake service.</p>
 *
 *
 * @public
 */
export class DescribeFHIRExportJobCommand extends $Command
  .classBuilder<
    DescribeFHIRExportJobCommandInput,
    DescribeFHIRExportJobCommandOutput,
    HealthLakeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: HealthLakeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("HealthLake", "DescribeFHIRExportJob", {})
  .n("HealthLakeClient", "DescribeFHIRExportJobCommand")
  .f(void 0, void 0)
  .ser(se_DescribeFHIRExportJobCommand)
  .de(de_DescribeFHIRExportJobCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeFHIRExportJobRequest;
      output: DescribeFHIRExportJobResponse;
    };
    sdk: {
      input: DescribeFHIRExportJobCommandInput;
      output: DescribeFHIRExportJobCommandOutput;
    };
  };
}
