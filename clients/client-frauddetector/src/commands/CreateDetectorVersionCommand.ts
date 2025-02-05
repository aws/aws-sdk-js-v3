// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { CreateDetectorVersionRequest, CreateDetectorVersionResult } from "../models/models_0";
import { de_CreateDetectorVersionCommand, se_CreateDetectorVersionCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateDetectorVersionCommand}.
 */
export interface CreateDetectorVersionCommandInput extends CreateDetectorVersionRequest {}
/**
 * @public
 *
 * The output of {@link CreateDetectorVersionCommand}.
 */
export interface CreateDetectorVersionCommandOutput extends CreateDetectorVersionResult, __MetadataBearer {}

/**
 * <p>Creates a detector version. The detector version starts in a <code>DRAFT</code> status.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, CreateDetectorVersionCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, CreateDetectorVersionCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new FraudDetectorClient(config);
 * const input = { // CreateDetectorVersionRequest
 *   detectorId: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   externalModelEndpoints: [ // ListOfStrings
 *     "STRING_VALUE",
 *   ],
 *   rules: [ // RuleList // required
 *     { // Rule
 *       detectorId: "STRING_VALUE", // required
 *       ruleId: "STRING_VALUE", // required
 *       ruleVersion: "STRING_VALUE", // required
 *     },
 *   ],
 *   modelVersions: [ // ListOfModelVersions
 *     { // ModelVersion
 *       modelId: "STRING_VALUE", // required
 *       modelType: "ONLINE_FRAUD_INSIGHTS" || "TRANSACTION_FRAUD_INSIGHTS" || "ACCOUNT_TAKEOVER_INSIGHTS", // required
 *       modelVersionNumber: "STRING_VALUE", // required
 *       arn: "STRING_VALUE",
 *     },
 *   ],
 *   ruleExecutionMode: "ALL_MATCHED" || "FIRST_MATCHED",
 *   tags: [ // tagList
 *     { // Tag
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateDetectorVersionCommand(input);
 * const response = await client.send(command);
 * // { // CreateDetectorVersionResult
 * //   detectorId: "STRING_VALUE",
 * //   detectorVersionId: "STRING_VALUE",
 * //   status: "DRAFT" || "ACTIVE" || "INACTIVE",
 * // };
 *
 * ```
 *
 * @param CreateDetectorVersionCommandInput - {@link CreateDetectorVersionCommandInput}
 * @returns {@link CreateDetectorVersionCommandOutput}
 * @see {@link CreateDetectorVersionCommandInput} for command's `input` shape.
 * @see {@link CreateDetectorVersionCommandOutput} for command's `response` shape.
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
 * @public
 */
export class CreateDetectorVersionCommand extends $Command
  .classBuilder<
    CreateDetectorVersionCommandInput,
    CreateDetectorVersionCommandOutput,
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
  .s("AWSHawksNestServiceFacade", "CreateDetectorVersion", {})
  .n("FraudDetectorClient", "CreateDetectorVersionCommand")
  .f(void 0, void 0)
  .ser(se_CreateDetectorVersionCommand)
  .de(de_CreateDetectorVersionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDetectorVersionRequest;
      output: CreateDetectorVersionResult;
    };
    sdk: {
      input: CreateDetectorVersionCommandInput;
      output: CreateDetectorVersionCommandOutput;
    };
  };
}
