// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ComprehendMedicalClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ComprehendMedicalClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeICD10CMInferenceJobRequest, DescribeICD10CMInferenceJobResponse } from "../models/models_0";
import { de_DescribeICD10CMInferenceJobCommand, se_DescribeICD10CMInferenceJobCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeICD10CMInferenceJobCommand}.
 */
export interface DescribeICD10CMInferenceJobCommandInput extends DescribeICD10CMInferenceJobRequest {}
/**
 * @public
 *
 * The output of {@link DescribeICD10CMInferenceJobCommand}.
 */
export interface DescribeICD10CMInferenceJobCommandOutput
  extends DescribeICD10CMInferenceJobResponse,
    __MetadataBearer {}

/**
 * <p>Gets the properties associated with an InferICD10CM job. Use this operation to get the
 *       status of an inference job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendMedicalClient, DescribeICD10CMInferenceJobCommand } from "@aws-sdk/client-comprehendmedical"; // ES Modules import
 * // const { ComprehendMedicalClient, DescribeICD10CMInferenceJobCommand } = require("@aws-sdk/client-comprehendmedical"); // CommonJS import
 * const client = new ComprehendMedicalClient(config);
 * const input = { // DescribeICD10CMInferenceJobRequest
 *   JobId: "STRING_VALUE", // required
 * };
 * const command = new DescribeICD10CMInferenceJobCommand(input);
 * const response = await client.send(command);
 * // { // DescribeICD10CMInferenceJobResponse
 * //   ComprehendMedicalAsyncJobProperties: { // ComprehendMedicalAsyncJobProperties
 * //     JobId: "STRING_VALUE",
 * //     JobName: "STRING_VALUE",
 * //     JobStatus: "SUBMITTED" || "IN_PROGRESS" || "COMPLETED" || "PARTIAL_SUCCESS" || "FAILED" || "STOP_REQUESTED" || "STOPPED",
 * //     Message: "STRING_VALUE",
 * //     SubmitTime: new Date("TIMESTAMP"),
 * //     EndTime: new Date("TIMESTAMP"),
 * //     ExpirationTime: new Date("TIMESTAMP"),
 * //     InputDataConfig: { // InputDataConfig
 * //       S3Bucket: "STRING_VALUE", // required
 * //       S3Key: "STRING_VALUE",
 * //     },
 * //     OutputDataConfig: { // OutputDataConfig
 * //       S3Bucket: "STRING_VALUE", // required
 * //       S3Key: "STRING_VALUE",
 * //     },
 * //     LanguageCode: "en",
 * //     DataAccessRoleArn: "STRING_VALUE",
 * //     ManifestFilePath: "STRING_VALUE",
 * //     KMSKey: "STRING_VALUE",
 * //     ModelVersion: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeICD10CMInferenceJobCommandInput - {@link DescribeICD10CMInferenceJobCommandInput}
 * @returns {@link DescribeICD10CMInferenceJobCommandOutput}
 * @see {@link DescribeICD10CMInferenceJobCommandInput} for command's `input` shape.
 * @see {@link DescribeICD10CMInferenceJobCommandOutput} for command's `response` shape.
 * @see {@link ComprehendMedicalClientResolvedConfig | config} for ComprehendMedicalClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> An internal server error occurred. Retry your request. </p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p> The request that you made is invalid. Check your request to determine why it's invalid
 *       and then retry the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource identified by the specified Amazon Resource Name (ARN) was not found. Check
 *       the ARN and try your request again.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p> You have made too many requests within a short period of time. Wait for a short time and
 *       then try your request again. Contact customer support for more information about a service
 *       limit increase. </p>
 *
 * @throws {@link ComprehendMedicalServiceException}
 * <p>Base exception class for all service exceptions from ComprehendMedical service.</p>
 *
 * @public
 */
export class DescribeICD10CMInferenceJobCommand extends $Command
  .classBuilder<
    DescribeICD10CMInferenceJobCommandInput,
    DescribeICD10CMInferenceJobCommandOutput,
    ComprehendMedicalClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ComprehendMedicalClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ComprehendMedical_20181030", "DescribeICD10CMInferenceJob", {})
  .n("ComprehendMedicalClient", "DescribeICD10CMInferenceJobCommand")
  .f(void 0, void 0)
  .ser(se_DescribeICD10CMInferenceJobCommand)
  .de(de_DescribeICD10CMInferenceJobCommand)
  .build() {}
