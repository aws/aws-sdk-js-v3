// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  AccessAnalyzerClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../AccessAnalyzerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CheckAccessNotGrantedRequest, CheckAccessNotGrantedResponse } from "../models/models_0";
import { CheckAccessNotGranted$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CheckAccessNotGrantedCommand}.
 */
export interface CheckAccessNotGrantedCommandInput extends CheckAccessNotGrantedRequest {}
/**
 * @public
 *
 * The output of {@link CheckAccessNotGrantedCommand}.
 */
export interface CheckAccessNotGrantedCommandOutput extends CheckAccessNotGrantedResponse, __MetadataBearer {}

/**
 * <p>Checks whether the specified access isn't allowed by a policy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccessAnalyzerClient, CheckAccessNotGrantedCommand } from "@aws-sdk/client-accessanalyzer"; // ES Modules import
 * // const { AccessAnalyzerClient, CheckAccessNotGrantedCommand } = require("@aws-sdk/client-accessanalyzer"); // CommonJS import
 * // import type { AccessAnalyzerClientConfig } from "@aws-sdk/client-accessanalyzer";
 * const config = {}; // type is AccessAnalyzerClientConfig
 * const client = new AccessAnalyzerClient(config);
 * const input = { // CheckAccessNotGrantedRequest
 *   policyDocument: "STRING_VALUE", // required
 *   access: [ // AccessList // required
 *     { // Access
 *       actions: [ // ActionsList
 *         "STRING_VALUE",
 *       ],
 *       resources: [ // ResourcesList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   policyType: "STRING_VALUE", // required
 * };
 * const command = new CheckAccessNotGrantedCommand(input);
 * const response = await client.send(command);
 * // { // CheckAccessNotGrantedResponse
 * //   result: "STRING_VALUE",
 * //   message: "STRING_VALUE",
 * //   reasons: [ // ReasonSummaryList
 * //     { // ReasonSummary
 * //       description: "STRING_VALUE",
 * //       statementIndex: Number("int"),
 * //       statementId: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param CheckAccessNotGrantedCommandInput - {@link CheckAccessNotGrantedCommandInput}
 * @returns {@link CheckAccessNotGrantedCommandOutput}
 * @see {@link CheckAccessNotGrantedCommandInput} for command's `input` shape.
 * @see {@link CheckAccessNotGrantedCommandOutput} for command's `response` shape.
 * @see {@link AccessAnalyzerClientResolvedConfig | config} for AccessAnalyzerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal server error.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter is invalid.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Throttling limit exceeded error.</p>
 *
 * @throws {@link UnprocessableEntityException} (client fault)
 *  <p>The specified entity could not be processed.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Validation exception error.</p>
 *
 * @throws {@link AccessAnalyzerServiceException}
 * <p>Base exception class for all service exceptions from AccessAnalyzer service.</p>
 *
 *
 * @example Passing check. Restrictive identity policy.
 * ```javascript
 * //
 * const input = {
 *   access: [
 *     {
 *       actions: [
 *         "s3:PutObject"
 *       ]
 *     }
 *   ],
 *   policyDocument: `{"Version":"2012-10-17","Id":"123","Statement":[{"Sid":"AllowJohnDoe","Effect":"Allow","Principal":{"AWS":"arn:aws:iam::123456789012:user/JohnDoe"},"Action":"s3:GetObject","Resource":"*"}]}`,
 *   policyType: "RESOURCE_POLICY"
 * };
 * const command = new CheckAccessNotGrantedCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   message: "The policy document does not grant access to perform the listed actions or resources.",
 *   result: "PASS"
 * }
 * *\/
 * ```
 *
 * @example Passing check. Restrictive S3 Bucket resource policy.
 * ```javascript
 * //
 * const input = {
 *   access: [
 *     {
 *       resources: [
 *         "arn:aws:s3:::sensitive-bucket/*"
 *       ]
 *     }
 *   ],
 *   policyDocument: `{"Version":"2012-10-17","Id":"123","Statement":[{"Sid":"AllowJohnDoe","Effect":"Allow","Principal":{"AWS":"arn:aws:iam::123456789012:user/JohnDoe"},"Action":"s3:PutObject","Resource":"arn:aws:s3:::non-sensitive-bucket/*"}]}`,
 *   policyType: "RESOURCE_POLICY"
 * };
 * const command = new CheckAccessNotGrantedCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   message: "The policy document does not grant access to perform the listed actions or resources.",
 *   result: "PASS"
 * }
 * *\/
 * ```
 *
 * @example Failing check. Permissive S3 Bucket resource policy.
 * ```javascript
 * //
 * const input = {
 *   access: [
 *     {
 *       resources: [
 *         "arn:aws:s3:::my-bucket/*"
 *       ]
 *     }
 *   ],
 *   policyDocument: `{"Version":"2012-10-17","Id":"123","Statement":[{"Sid":"AllowJohnDoe","Effect":"Allow","Principal":{"AWS":"arn:aws:iam::123456789012:user/JohnDoe"},"Action":"s3:PutObject","Resource":"arn:aws:s3:::my-bucket/*"}]}`,
 *   policyType: "RESOURCE_POLICY"
 * };
 * const command = new CheckAccessNotGrantedCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   message: "The policy document grants access to perform one or more of the listed actions or resources.",
 *   reasons: [
 *     {
 *       description: "One or more of the listed actions or resources in the statement with sid: AllowJohnDoe.",
 *       statementId: "AllowJohnDoe",
 *       statementIndex: 0
 *     }
 *   ],
 *   result: "FAIL"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CheckAccessNotGrantedCommand extends $Command
  .classBuilder<
    CheckAccessNotGrantedCommandInput,
    CheckAccessNotGrantedCommandOutput,
    AccessAnalyzerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AccessAnalyzerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AccessAnalyzer", "CheckAccessNotGranted", {})
  .n("AccessAnalyzerClient", "CheckAccessNotGrantedCommand")
  .sc(CheckAccessNotGranted$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CheckAccessNotGrantedRequest;
      output: CheckAccessNotGrantedResponse;
    };
    sdk: {
      input: CheckAccessNotGrantedCommandInput;
      output: CheckAccessNotGrantedCommandOutput;
    };
  };
}
