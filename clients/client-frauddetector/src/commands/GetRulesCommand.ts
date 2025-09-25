// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { GetRulesRequest, GetRulesResult } from "../models/models_0";
import { GetRules } from "../schemas/schemas_4_Rule";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetRulesCommand}.
 */
export interface GetRulesCommandInput extends GetRulesRequest {}
/**
 * @public
 *
 * The output of {@link GetRulesCommand}.
 */
export interface GetRulesCommandOutput extends GetRulesResult, __MetadataBearer {}

/**
 * <p>Get all rules for a detector (paginated) if <code>ruleId</code> and <code>ruleVersion</code> are not specified. Gets all rules for the detector and the <code>ruleId</code> if present (paginated). Gets a specific rule if both the <code>ruleId</code> and the <code>ruleVersion</code> are specified.</p>
 *          <p>This is a paginated API. Providing null maxResults results in retrieving maximum of 100 records per page. If you provide maxResults the value must be between 50 and 100. To get the next page result, a provide a pagination token from GetRulesResult as part of your request. Null pagination token fetches the records from the beginning.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, GetRulesCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, GetRulesCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * // import type { FraudDetectorClientConfig } from "@aws-sdk/client-frauddetector";
 * const config = {}; // type is FraudDetectorClientConfig
 * const client = new FraudDetectorClient(config);
 * const input = { // GetRulesRequest
 *   ruleId: "STRING_VALUE",
 *   detectorId: "STRING_VALUE", // required
 *   ruleVersion: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new GetRulesCommand(input);
 * const response = await client.send(command);
 * // { // GetRulesResult
 * //   ruleDetails: [ // RuleDetailList
 * //     { // RuleDetail
 * //       ruleId: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       detectorId: "STRING_VALUE",
 * //       ruleVersion: "STRING_VALUE",
 * //       expression: "STRING_VALUE",
 * //       language: "DETECTORPL",
 * //       outcomes: [ // NonEmptyListOfStrings
 * //         "STRING_VALUE",
 * //       ],
 * //       lastUpdatedTime: "STRING_VALUE",
 * //       createdTime: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetRulesCommandInput - {@link GetRulesCommandInput}
 * @returns {@link GetRulesCommandOutput}
 * @see {@link GetRulesCommandInput} for command's `input` shape.
 * @see {@link GetRulesCommandOutput} for command's `response` shape.
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
export class GetRulesCommand extends $Command
  .classBuilder<
    GetRulesCommandInput,
    GetRulesCommandOutput,
    FraudDetectorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FraudDetectorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSHawksNestServiceFacade", "GetRules", {})
  .n("FraudDetectorClient", "GetRulesCommand")
  .sc(GetRules)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRulesRequest;
      output: GetRulesResult;
    };
    sdk: {
      input: GetRulesCommandInput;
      output: GetRulesCommandOutput;
    };
  };
}
