// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import type { UpdateDetectorVersionRequest, UpdateDetectorVersionResult } from "../models/models_0";
import { UpdateDetectorVersion } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateDetectorVersionCommand}.
 */
export interface UpdateDetectorVersionCommandInput extends UpdateDetectorVersionRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDetectorVersionCommand}.
 */
export interface UpdateDetectorVersionCommandOutput extends UpdateDetectorVersionResult, __MetadataBearer {}

/**
 * <p> Updates a detector version. The detector version attributes that you can update include models, external model endpoints, rules, rule execution mode, and description. You can only update a <code>DRAFT</code> detector version.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, UpdateDetectorVersionCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, UpdateDetectorVersionCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * // import type { FraudDetectorClientConfig } from "@aws-sdk/client-frauddetector";
 * const config = {}; // type is FraudDetectorClientConfig
 * const client = new FraudDetectorClient(config);
 * const input = { // UpdateDetectorVersionRequest
 *   detectorId: "STRING_VALUE", // required
 *   detectorVersionId: "STRING_VALUE", // required
 *   externalModelEndpoints: [ // ListOfStrings // required
 *     "STRING_VALUE",
 *   ],
 *   rules: [ // RuleList // required
 *     { // Rule
 *       detectorId: "STRING_VALUE", // required
 *       ruleId: "STRING_VALUE", // required
 *       ruleVersion: "STRING_VALUE", // required
 *     },
 *   ],
 *   description: "STRING_VALUE",
 *   modelVersions: [ // ListOfModelVersions
 *     { // ModelVersion
 *       modelId: "STRING_VALUE", // required
 *       modelType: "ONLINE_FRAUD_INSIGHTS" || "TRANSACTION_FRAUD_INSIGHTS" || "ACCOUNT_TAKEOVER_INSIGHTS", // required
 *       modelVersionNumber: "STRING_VALUE", // required
 *       arn: "STRING_VALUE",
 *     },
 *   ],
 *   ruleExecutionMode: "ALL_MATCHED" || "FIRST_MATCHED",
 * };
 * const command = new UpdateDetectorVersionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateDetectorVersionCommandInput - {@link UpdateDetectorVersionCommandInput}
 * @returns {@link UpdateDetectorVersionCommandOutput}
 * @see {@link UpdateDetectorVersionCommandInput} for command's `input` shape.
 * @see {@link UpdateDetectorVersionCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for FraudDetectorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>An exception indicating Amazon Fraud Detector does not have the needed permissions. This can occur if you submit a request, such as <code>PutExternalModel</code>, that specifies a role that is not in your account.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>An exception indicating there was a conflict during a delete operation.</p>
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
export class UpdateDetectorVersionCommand extends $Command
  .classBuilder<
    UpdateDetectorVersionCommandInput,
    UpdateDetectorVersionCommandOutput,
    FraudDetectorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FraudDetectorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSHawksNestServiceFacade", "UpdateDetectorVersion", {})
  .n("FraudDetectorClient", "UpdateDetectorVersionCommand")
  .sc(UpdateDetectorVersion)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateDetectorVersionRequest;
      output: {};
    };
    sdk: {
      input: UpdateDetectorVersionCommandInput;
      output: UpdateDetectorVersionCommandOutput;
    };
  };
}
