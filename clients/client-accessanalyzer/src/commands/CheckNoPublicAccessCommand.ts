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
import type { CheckNoPublicAccessRequest, CheckNoPublicAccessResponse } from "../models/models_0";
import { CheckNoPublicAccess$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Checks whether a resource policy can grant public access to the specified resource type.</p>
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
export class CheckNoPublicAccessCommand extends $Command
  .classBuilder<
    CheckNoPublicAccessCommandInput,
    CheckNoPublicAccessCommandOutput,
    AccessAnalyzerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AccessAnalyzerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AccessAnalyzer", "CheckNoPublicAccess", {})
  .n("AccessAnalyzerClient", "CheckNoPublicAccessCommand")
  .sc(CheckNoPublicAccess$)
  .build() {
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
