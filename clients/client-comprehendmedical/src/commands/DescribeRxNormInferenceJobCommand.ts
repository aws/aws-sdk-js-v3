// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ComprehendMedicalClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ComprehendMedicalClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeRxNormInferenceJobRequest, DescribeRxNormInferenceJobResponse } from "../models/models_0";
import { DescribeRxNormInferenceJob } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeRxNormInferenceJobCommand}.
 */
export interface DescribeRxNormInferenceJobCommandInput extends DescribeRxNormInferenceJobRequest {}
/**
 * @public
 *
 * The output of {@link DescribeRxNormInferenceJobCommand}.
 */
export interface DescribeRxNormInferenceJobCommandOutput extends DescribeRxNormInferenceJobResponse, __MetadataBearer {}

/**
 * <p>Gets the properties associated with an InferRxNorm job. Use this operation to get the
 *       status of an inference job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendMedicalClient, DescribeRxNormInferenceJobCommand } from "@aws-sdk/client-comprehendmedical"; // ES Modules import
 * // const { ComprehendMedicalClient, DescribeRxNormInferenceJobCommand } = require("@aws-sdk/client-comprehendmedical"); // CommonJS import
 * // import type { ComprehendMedicalClientConfig } from "@aws-sdk/client-comprehendmedical";
 * const config = {}; // type is ComprehendMedicalClientConfig
 * const client = new ComprehendMedicalClient(config);
 * const input = { // DescribeRxNormInferenceJobRequest
 *   JobId: "STRING_VALUE", // required
 * };
 * const command = new DescribeRxNormInferenceJobCommand(input);
 * const response = await client.send(command);
 * // { // DescribeRxNormInferenceJobResponse
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
 * @param DescribeRxNormInferenceJobCommandInput - {@link DescribeRxNormInferenceJobCommandInput}
 * @returns {@link DescribeRxNormInferenceJobCommandOutput}
 * @see {@link DescribeRxNormInferenceJobCommandInput} for command's `input` shape.
 * @see {@link DescribeRxNormInferenceJobCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class DescribeRxNormInferenceJobCommand extends $Command
  .classBuilder<
    DescribeRxNormInferenceJobCommandInput,
    DescribeRxNormInferenceJobCommandOutput,
    ComprehendMedicalClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ComprehendMedicalClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ComprehendMedical_20181030", "DescribeRxNormInferenceJob", {})
  .n("ComprehendMedicalClient", "DescribeRxNormInferenceJobCommand")
  .sc(DescribeRxNormInferenceJob)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeRxNormInferenceJobRequest;
      output: DescribeRxNormInferenceJobResponse;
    };
    sdk: {
      input: DescribeRxNormInferenceJobCommandInput;
      output: DescribeRxNormInferenceJobCommandOutput;
    };
  };
}
