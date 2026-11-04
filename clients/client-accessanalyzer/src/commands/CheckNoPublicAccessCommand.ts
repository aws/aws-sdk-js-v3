// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CheckNoPublicAccessRequest, CheckNoPublicAccessResponse } from "../models/models_0";
import { CheckNoPublicAccess$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CheckNoPublicAccessCommand}.
 */
export interface CheckNoPublicAccessCommandInput extends CheckNoPublicAccessRequest {}
/**
 * @public
 *
 * The output of {@link CheckNoPublicAccessCommand}.
 */
export interface CheckNoPublicAccessCommandOutput extends CheckNoPublicAccessResponse, __MetadataBearer {}

/**
 * Checks whether a resource policy can grant public access to the specified resource type.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccessAnalyzerClient, CheckNoPublicAccessCommand } from "@aws-sdk/client-accessanalyzer"; // ES Modules import
 * // const { AccessAnalyzerClient, CheckNoPublicAccessCommand } = require("@aws-sdk/client-accessanalyzer"); // CommonJS import
 * // import type { AccessAnalyzerClientConfig } from "@aws-sdk/client-accessanalyzer";
 * const config = {}; // type is AccessAnalyzerClientConfig
 * const client = new AccessAnalyzerClient(config);
 * const input = { // CheckNoPublicAccessRequest
 *   policyDocument: "STRING_VALUE", // required
 *   resourceType: "STRING_VALUE", // required
 * };
 * const command = new CheckNoPublicAccessCommand(input);
 * const response = await client.send(command);
 * // { // CheckNoPublicAccessResponse
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
 * @param CheckNoPublicAccessCommandInput - {@link CheckNoPublicAccessCommandInput}
 * @returns {@link CheckNoPublicAccessCommandOutput}
 * @see {@link CheckNoPublicAccessCommandInput} for command's `input` shape.
 * @see {@link CheckNoPublicAccessCommandOutput} for command's `response` shape.
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
 * @example Passing check. S3 Bucket policy without public access.
 * ```javascript
 * //
 * const input = {
 *   policyDocument: `{"Version":"2012-10-17","Statement":[{"Sid":"Bob","Effect":"Allow","Principal":{"AWS":"arn:aws:iam::111122223333:user/JohnDoe"},"Action":["s3:GetObject"]}]}`,
 *   resourceType: "AWS::S3::Bucket"
 * };
 * const command = new CheckNoPublicAccessCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   message: "The resource policy does not grant public access for the given resource type.",
 *   result: "PASS"
 * }
 * *\/
 * ```
 *
 * @example Failing check. S3 Bucket policy with public access.
 * ```javascript
 * //
 * const input = {
 *   policyDocument: `{"Version":"2012-10-17","Statement":[{"Sid":"Bob","Effect":"Allow","Principal":"*","Action":["s3:GetObject"]}]}`,
 *   resourceType: "AWS::S3::Bucket"
 * };
 * const command = new CheckNoPublicAccessCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   message: "The resource policy grants public access for the given resource type.",
 *   reasons: [
 *     {
 *       description: "Public access granted in the following statement with sid: Bob.",
 *       statementId: "Bob",
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
export class CheckNoPublicAccessCommand extends command<CheckNoPublicAccessCommandInput, CheckNoPublicAccessCommandOutput>(
  _ep0,
  _mw0,
  "CheckNoPublicAccess",
  CheckNoPublicAccess$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CheckNoPublicAccessRequest;
      output: CheckNoPublicAccessResponse;
    };
    sdk: {
      input: CheckNoPublicAccessCommandInput;
      output: CheckNoPublicAccessCommandOutput;
    };
  };
}
