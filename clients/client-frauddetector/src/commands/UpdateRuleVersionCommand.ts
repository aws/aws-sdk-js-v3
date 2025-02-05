// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import {
  UpdateRuleVersionRequest,
  UpdateRuleVersionRequestFilterSensitiveLog,
  UpdateRuleVersionResult,
} from "../models/models_0";
import { de_UpdateRuleVersionCommand, se_UpdateRuleVersionCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateRuleVersionCommand}.
 */
export interface UpdateRuleVersionCommandInput extends UpdateRuleVersionRequest {}
/**
 * @public
 *
 * The output of {@link UpdateRuleVersionCommand}.
 */
export interface UpdateRuleVersionCommandOutput extends UpdateRuleVersionResult, __MetadataBearer {}

/**
 * <p>Updates a rule version resulting in a new rule version. Updates a rule version resulting in a new rule version (version 1, 2, 3 ...). </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, UpdateRuleVersionCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, UpdateRuleVersionCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new FraudDetectorClient(config);
 * const input = { // UpdateRuleVersionRequest
 *   rule: { // Rule
 *     detectorId: "STRING_VALUE", // required
 *     ruleId: "STRING_VALUE", // required
 *     ruleVersion: "STRING_VALUE", // required
 *   },
 *   description: "STRING_VALUE",
 *   expression: "STRING_VALUE", // required
 *   language: "DETECTORPL", // required
 *   outcomes: [ // NonEmptyListOfStrings // required
 *     "STRING_VALUE",
 *   ],
 *   tags: [ // tagList
 *     { // Tag
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new UpdateRuleVersionCommand(input);
 * const response = await client.send(command);
 * // { // UpdateRuleVersionResult
 * //   rule: { // Rule
 * //     detectorId: "STRING_VALUE", // required
 * //     ruleId: "STRING_VALUE", // required
 * //     ruleVersion: "STRING_VALUE", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateRuleVersionCommandInput - {@link UpdateRuleVersionCommandInput}
 * @returns {@link UpdateRuleVersionCommandOutput}
 * @see {@link UpdateRuleVersionCommandInput} for command's `input` shape.
 * @see {@link UpdateRuleVersionCommandOutput} for command's `response` shape.
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
 * @public
 */
export class UpdateRuleVersionCommand extends $Command
  .classBuilder<
    UpdateRuleVersionCommandInput,
    UpdateRuleVersionCommandOutput,
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
  .s("AWSHawksNestServiceFacade", "UpdateRuleVersion", {})
  .n("FraudDetectorClient", "UpdateRuleVersionCommand")
  .f(UpdateRuleVersionRequestFilterSensitiveLog, void 0)
  .ser(se_UpdateRuleVersionCommand)
  .de(de_UpdateRuleVersionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateRuleVersionRequest;
      output: UpdateRuleVersionResult;
    };
    sdk: {
      input: UpdateRuleVersionCommandInput;
      output: UpdateRuleVersionCommandOutput;
    };
  };
}
