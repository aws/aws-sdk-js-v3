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
import { StartRxNormInferenceJobRequest, StartRxNormInferenceJobResponse } from "../models/models_0";
import { de_StartRxNormInferenceJobCommand, se_StartRxNormInferenceJobCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartRxNormInferenceJobCommand}.
 */
export interface StartRxNormInferenceJobCommandInput extends StartRxNormInferenceJobRequest {}
/**
 * @public
 *
 * The output of {@link StartRxNormInferenceJobCommand}.
 */
export interface StartRxNormInferenceJobCommandOutput extends StartRxNormInferenceJobResponse, __MetadataBearer {}

/**
 * <p>Starts an asynchronous job to detect medication entities and link them to the RxNorm
 *       ontology. Use the <code>DescribeRxNormInferenceJob</code> operation to track the status of a
 *       job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendMedicalClient, StartRxNormInferenceJobCommand } from "@aws-sdk/client-comprehendmedical"; // ES Modules import
 * // const { ComprehendMedicalClient, StartRxNormInferenceJobCommand } = require("@aws-sdk/client-comprehendmedical"); // CommonJS import
 * // import type { ComprehendMedicalClientConfig } from "@aws-sdk/client-comprehendmedical";
 * const config = {}; // type is ComprehendMedicalClientConfig
 * const client = new ComprehendMedicalClient(config);
 * const input = { // StartRxNormInferenceJobRequest
 *   InputDataConfig: { // InputDataConfig
 *     S3Bucket: "STRING_VALUE", // required
 *     S3Key: "STRING_VALUE",
 *   },
 *   OutputDataConfig: { // OutputDataConfig
 *     S3Bucket: "STRING_VALUE", // required
 *     S3Key: "STRING_VALUE",
 *   },
 *   DataAccessRoleArn: "STRING_VALUE", // required
 *   JobName: "STRING_VALUE",
 *   ClientRequestToken: "STRING_VALUE",
 *   KMSKey: "STRING_VALUE",
 *   LanguageCode: "en", // required
 * };
 * const command = new StartRxNormInferenceJobCommand(input);
 * const response = await client.send(command);
 * // { // StartRxNormInferenceJobResponse
 * //   JobId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartRxNormInferenceJobCommandInput - {@link StartRxNormInferenceJobCommandInput}
 * @returns {@link StartRxNormInferenceJobCommandOutput}
 * @see {@link StartRxNormInferenceJobCommandInput} for command's `input` shape.
 * @see {@link StartRxNormInferenceJobCommandOutput} for command's `response` shape.
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
export class StartRxNormInferenceJobCommand extends $Command
  .classBuilder<
    StartRxNormInferenceJobCommandInput,
    StartRxNormInferenceJobCommandOutput,
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
  .s("ComprehendMedical_20181030", "StartRxNormInferenceJob", {})
  .n("ComprehendMedicalClient", "StartRxNormInferenceJobCommand")
  .f(void 0, void 0)
  .ser(se_StartRxNormInferenceJobCommand)
  .de(de_StartRxNormInferenceJobCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartRxNormInferenceJobRequest;
      output: StartRxNormInferenceJobResponse;
    };
    sdk: {
      input: StartRxNormInferenceJobCommandInput;
      output: StartRxNormInferenceJobCommandOutput;
    };
  };
}
