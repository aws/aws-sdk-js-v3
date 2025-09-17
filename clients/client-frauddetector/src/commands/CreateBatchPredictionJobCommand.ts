// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { CreateBatchPredictionJobRequest, CreateBatchPredictionJobResult } from "../models/models_0";
import { de_CreateBatchPredictionJobCommand, se_CreateBatchPredictionJobCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateBatchPredictionJobCommand}.
 */
export interface CreateBatchPredictionJobCommandInput extends CreateBatchPredictionJobRequest {}
/**
 * @public
 *
 * The output of {@link CreateBatchPredictionJobCommand}.
 */
export interface CreateBatchPredictionJobCommandOutput extends CreateBatchPredictionJobResult, __MetadataBearer {}

/**
 * <p>Creates a batch prediction job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, CreateBatchPredictionJobCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, CreateBatchPredictionJobCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * // import type { FraudDetectorClientConfig } from "@aws-sdk/client-frauddetector";
 * const config = {}; // type is FraudDetectorClientConfig
 * const client = new FraudDetectorClient(config);
 * const input = { // CreateBatchPredictionJobRequest
 *   jobId: "STRING_VALUE", // required
 *   inputPath: "STRING_VALUE", // required
 *   outputPath: "STRING_VALUE", // required
 *   eventTypeName: "STRING_VALUE", // required
 *   detectorName: "STRING_VALUE", // required
 *   detectorVersion: "STRING_VALUE",
 *   iamRoleArn: "STRING_VALUE", // required
 *   tags: [ // tagList
 *     { // Tag
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateBatchPredictionJobCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateBatchPredictionJobCommandInput - {@link CreateBatchPredictionJobCommandInput}
 * @returns {@link CreateBatchPredictionJobCommandOutput}
 * @see {@link CreateBatchPredictionJobCommandInput} for command's `input` shape.
 * @see {@link CreateBatchPredictionJobCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for FraudDetectorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>An exception indicating Amazon Fraud Detector does not have the needed permissions. This can occur if you submit a request, such as <code>PutExternalModel</code>, that specifies a role that is not in your account.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An exception indicating an internal server error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An exception indicating the specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>An exception indicating a throttling error.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An exception indicating a specified value is not allowed.</p>
 *
 * @throws {@link FraudDetectorServiceException}
 * <p>Base exception class for all service exceptions from FraudDetector service.</p>
 *
 *
 * @public
 */
export class CreateBatchPredictionJobCommand extends $Command
  .classBuilder<
    CreateBatchPredictionJobCommandInput,
    CreateBatchPredictionJobCommandOutput,
    FraudDetectorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FraudDetectorClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSHawksNestServiceFacade", "CreateBatchPredictionJob", {})
  .n("FraudDetectorClient", "CreateBatchPredictionJobCommand")
  .f(void 0, void 0)
  .ser(se_CreateBatchPredictionJobCommand)
  .de(de_CreateBatchPredictionJobCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateBatchPredictionJobRequest;
      output: {};
    };
    sdk: {
      input: CreateBatchPredictionJobCommandInput;
      output: CreateBatchPredictionJobCommandOutput;
    };
  };
}
