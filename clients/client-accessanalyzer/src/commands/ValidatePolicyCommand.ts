// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AccessAnalyzerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AccessAnalyzerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ValidatePolicyRequest, ValidatePolicyResponse } from "../models/models_0";
import { de_ValidatePolicyCommand, se_ValidatePolicyCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ValidatePolicyCommand}.
 */
export interface ValidatePolicyCommandInput extends ValidatePolicyRequest {}
/**
 * @public
 *
 * The output of {@link ValidatePolicyCommand}.
 */
export interface ValidatePolicyCommandOutput extends ValidatePolicyResponse, __MetadataBearer {}

/**
 * <p>Requests the validation of a policy and returns a list of findings. The findings help
 *          you identify issues and provide actionable recommendations to resolve the issue and enable
 *          you to author functional policies that meet security best practices. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccessAnalyzerClient, ValidatePolicyCommand } from "@aws-sdk/client-accessanalyzer"; // ES Modules import
 * // const { AccessAnalyzerClient, ValidatePolicyCommand } = require("@aws-sdk/client-accessanalyzer"); // CommonJS import
 * const client = new AccessAnalyzerClient(config);
 * const input = { // ValidatePolicyRequest
 *   locale: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   policyDocument: "STRING_VALUE", // required
 *   policyType: "STRING_VALUE", // required
 *   validatePolicyResourceType: "STRING_VALUE",
 * };
 * const command = new ValidatePolicyCommand(input);
 * const response = await client.send(command);
 * // { // ValidatePolicyResponse
 * //   findings: [ // ValidatePolicyFindingList // required
 * //     { // ValidatePolicyFinding
 * //       findingDetails: "STRING_VALUE", // required
 * //       findingType: "STRING_VALUE", // required
 * //       issueCode: "STRING_VALUE", // required
 * //       learnMoreLink: "STRING_VALUE", // required
 * //       locations: [ // LocationList // required
 * //         { // Location
 * //           path: [ // PathElementList // required
 * //             { // PathElement Union: only one key present
 * //               index: Number("int"),
 * //               key: "STRING_VALUE",
 * //               substring: { // Substring
 * //                 start: Number("int"), // required
 * //                 length: Number("int"), // required
 * //               },
 * //               value: "STRING_VALUE",
 * //             },
 * //           ],
 * //           span: { // Span
 * //             start: { // Position
 * //               line: Number("int"), // required
 * //               column: Number("int"), // required
 * //               offset: Number("int"), // required
 * //             },
 * //             end: {
 * //               line: Number("int"), // required
 * //               column: Number("int"), // required
 * //               offset: Number("int"), // required
 * //             },
 * //           },
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ValidatePolicyCommandInput - {@link ValidatePolicyCommandInput}
 * @returns {@link ValidatePolicyCommandOutput}
 * @see {@link ValidatePolicyCommandInput} for command's `input` shape.
 * @see {@link ValidatePolicyCommandOutput} for command's `response` shape.
 * @see {@link AccessAnalyzerClientResolvedConfig | config} for AccessAnalyzerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal server error.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Throttling limit exceeded error.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Validation exception error.</p>
 *
 * @throws {@link AccessAnalyzerServiceException}
 * <p>Base exception class for all service exceptions from AccessAnalyzer service.</p>
 *
 * @public
 */
export class ValidatePolicyCommand extends $Command
  .classBuilder<
    ValidatePolicyCommandInput,
    ValidatePolicyCommandOutput,
    AccessAnalyzerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: AccessAnalyzerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AccessAnalyzer", "ValidatePolicy", {})
  .n("AccessAnalyzerClient", "ValidatePolicyCommand")
  .f(void 0, void 0)
  .ser(se_ValidatePolicyCommand)
  .de(de_ValidatePolicyCommand)
  .build() {}
