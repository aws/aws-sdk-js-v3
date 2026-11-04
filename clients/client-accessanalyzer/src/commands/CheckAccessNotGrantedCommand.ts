// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CheckAccessNotGrantedRequest, CheckAccessNotGrantedResponse } from "../models/models_0";
import { CheckAccessNotGranted$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Checks whether the specified access isn't allowed by a policy.
 *
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
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Internal server error.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * The specified parameter is invalid.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Throttling limit exceeded error.
 *
 * @throws {@link UnprocessableEntityException} (client fault)
 *
 * The specified entity could not be processed.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Validation exception error.
 *
 * @throws {@link AccessAnalyzerServiceException}
 *
 * Base exception class for all service exceptions from AccessAnalyzer service.
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
export class CheckAccessNotGrantedCommand extends command<CheckAccessNotGrantedCommandInput, CheckAccessNotGrantedCommandOutput>(
  _ep0,
  _mw0,
  "CheckAccessNotGranted",
  CheckAccessNotGranted$
) {
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
