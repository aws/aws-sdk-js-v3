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
import { DescribeSNOMEDCTInferenceJobRequest, DescribeSNOMEDCTInferenceJobResponse } from "../models/models_0";
import {
  de_DescribeSNOMEDCTInferenceJobCommand,
  se_DescribeSNOMEDCTInferenceJobCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeSNOMEDCTInferenceJobCommand}.
 */
export interface DescribeSNOMEDCTInferenceJobCommandInput extends DescribeSNOMEDCTInferenceJobRequest {}
/**
 * @public
 *
 * The output of {@link DescribeSNOMEDCTInferenceJobCommand}.
 */
export interface DescribeSNOMEDCTInferenceJobCommandOutput
  extends DescribeSNOMEDCTInferenceJobResponse,
    __MetadataBearer {}

/**
 * <p>
 *       Gets the properties associated with an InferSNOMEDCT job. Use this operation to get the status of an inference job.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendMedicalClient, DescribeSNOMEDCTInferenceJobCommand } from "@aws-sdk/client-comprehendmedical"; // ES Modules import
 * // const { ComprehendMedicalClient, DescribeSNOMEDCTInferenceJobCommand } = require("@aws-sdk/client-comprehendmedical"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ComprehendMedicalClient(config);
 * const input = { // DescribeSNOMEDCTInferenceJobRequest
 *   JobId: "STRING_VALUE", // required
 * };
 * const command = new DescribeSNOMEDCTInferenceJobCommand(input);
 * const response = await client.send(command);
 * // { // DescribeSNOMEDCTInferenceJobResponse
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
 * @param DescribeSNOMEDCTInferenceJobCommandInput - {@link DescribeSNOMEDCTInferenceJobCommandInput}
 * @returns {@link DescribeSNOMEDCTInferenceJobCommandOutput}
 * @see {@link DescribeSNOMEDCTInferenceJobCommandInput} for command's `input` shape.
 * @see {@link DescribeSNOMEDCTInferenceJobCommandOutput} for command's `response` shape.
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
export class DescribeSNOMEDCTInferenceJobCommand extends $Command
  .classBuilder<
    DescribeSNOMEDCTInferenceJobCommandInput,
    DescribeSNOMEDCTInferenceJobCommandOutput,
    ComprehendMedicalClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ComprehendMedicalClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ComprehendMedical_20181030", "DescribeSNOMEDCTInferenceJob", {})
  .n("ComprehendMedicalClient", "DescribeSNOMEDCTInferenceJobCommand")
  .f(void 0, void 0)
  .ser(se_DescribeSNOMEDCTInferenceJobCommand)
  .de(de_DescribeSNOMEDCTInferenceJobCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeSNOMEDCTInferenceJobRequest;
      output: DescribeSNOMEDCTInferenceJobResponse;
    };
    sdk: {
      input: DescribeSNOMEDCTInferenceJobCommandInput;
      output: DescribeSNOMEDCTInferenceJobCommandOutput;
    };
  };
}
