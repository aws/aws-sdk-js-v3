// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { CreateRuleRequest, CreateRuleResult } from "../models/models_0";
import { CreateRule } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateRuleCommand}.
 */
export interface CreateRuleCommandInput extends CreateRuleRequest {}
/**
 * @public
 *
 * The output of {@link CreateRuleCommand}.
 */
export interface CreateRuleCommandOutput extends CreateRuleResult, __MetadataBearer {}

/**
 * <p>Creates a rule for use with the specified detector. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, CreateRuleCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, CreateRuleCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * // import type { FraudDetectorClientConfig } from "@aws-sdk/client-frauddetector";
 * const config = {}; // type is FraudDetectorClientConfig
 * const client = new FraudDetectorClient(config);
 * const input = { // CreateRuleRequest
 *   ruleId: "STRING_VALUE", // required
 *   detectorId: "STRING_VALUE", // required
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
 * const command = new CreateRuleCommand(input);
 * const response = await client.send(command);
 * // { // CreateRuleResult
 * //   rule: { // Rule
 * //     detectorId: "STRING_VALUE", // required
 * //     ruleId: "STRING_VALUE", // required
 * //     ruleVersion: "STRING_VALUE", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateRuleCommandInput - {@link CreateRuleCommandInput}
 * @returns {@link CreateRuleCommandOutput}
 * @see {@link CreateRuleCommandInput} for command's `input` shape.
 * @see {@link CreateRuleCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for FraudDetectorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>An exception indicating Amazon Fraud Detector does not have the needed permissions. This can occur if you submit a request, such as <code>PutExternalModel</code>, that specifies a role that is not in your account.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An exception indicating an internal server error.</p>
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
export class CreateRuleCommand extends $Command
  .classBuilder<
    CreateRuleCommandInput,
    CreateRuleCommandOutput,
    FraudDetectorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FraudDetectorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSHawksNestServiceFacade", "CreateRule", {})
  .n("FraudDetectorClient", "CreateRuleCommand")
  .sc(CreateRule)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateRuleRequest;
      output: CreateRuleResult;
    };
    sdk: {
      input: CreateRuleCommandInput;
      output: CreateRuleCommandOutput;
    };
  };
}
