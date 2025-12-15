// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import type { GetDetectorVersionRequest, GetDetectorVersionResult } from "../models/models_0";
import { GetDetectorVersion$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDetectorVersionCommand}.
 */
export interface GetDetectorVersionCommandInput extends GetDetectorVersionRequest {}
/**
 * @public
 *
 * The output of {@link GetDetectorVersionCommand}.
 */
export interface GetDetectorVersionCommandOutput extends GetDetectorVersionResult, __MetadataBearer {}

/**
 * <p>Gets a particular detector version. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, GetDetectorVersionCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, GetDetectorVersionCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * // import type { FraudDetectorClientConfig } from "@aws-sdk/client-frauddetector";
 * const config = {}; // type is FraudDetectorClientConfig
 * const client = new FraudDetectorClient(config);
 * const input = { // GetDetectorVersionRequest
 *   detectorId: "STRING_VALUE", // required
 *   detectorVersionId: "STRING_VALUE", // required
 * };
 * const command = new GetDetectorVersionCommand(input);
 * const response = await client.send(command);
 * // { // GetDetectorVersionResult
 * //   detectorId: "STRING_VALUE",
 * //   detectorVersionId: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   externalModelEndpoints: [ // ListOfStrings
 * //     "STRING_VALUE",
 * //   ],
 * //   modelVersions: [ // ListOfModelVersions
 * //     { // ModelVersion
 * //       modelId: "STRING_VALUE", // required
 * //       modelType: "ONLINE_FRAUD_INSIGHTS" || "TRANSACTION_FRAUD_INSIGHTS" || "ACCOUNT_TAKEOVER_INSIGHTS", // required
 * //       modelVersionNumber: "STRING_VALUE", // required
 * //       arn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   rules: [ // RuleList
 * //     { // Rule
 * //       detectorId: "STRING_VALUE", // required
 * //       ruleId: "STRING_VALUE", // required
 * //       ruleVersion: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   status: "DRAFT" || "ACTIVE" || "INACTIVE",
 * //   lastUpdatedTime: "STRING_VALUE",
 * //   createdTime: "STRING_VALUE",
 * //   ruleExecutionMode: "ALL_MATCHED" || "FIRST_MATCHED",
 * //   arn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetDetectorVersionCommandInput - {@link GetDetectorVersionCommandInput}
 * @returns {@link GetDetectorVersionCommandOutput}
 * @see {@link GetDetectorVersionCommandInput} for command's `input` shape.
 * @see {@link GetDetectorVersionCommandOutput} for command's `response` shape.
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
export class GetDetectorVersionCommand extends $Command
  .classBuilder<
    GetDetectorVersionCommandInput,
    GetDetectorVersionCommandOutput,
    FraudDetectorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FraudDetectorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSHawksNestServiceFacade", "GetDetectorVersion", {})
  .n("FraudDetectorClient", "GetDetectorVersionCommand")
  .sc(GetDetectorVersion$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDetectorVersionRequest;
      output: GetDetectorVersionResult;
    };
    sdk: {
      input: GetDetectorVersionCommandInput;
      output: GetDetectorVersionCommandOutput;
    };
  };
}
