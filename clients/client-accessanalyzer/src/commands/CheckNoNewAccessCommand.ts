// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AccessAnalyzerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AccessAnalyzerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CheckNoNewAccessRequest, CheckNoNewAccessResponse } from "../models/models_0";
import { CheckNoNewAccess } from "../schemas/schemas_7_Access";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CheckNoNewAccessCommand}.
 */
export interface CheckNoNewAccessCommandInput extends CheckNoNewAccessRequest {}
/**
 * @public
 *
 * The output of {@link CheckNoNewAccessCommand}.
 */
export interface CheckNoNewAccessCommandOutput extends CheckNoNewAccessResponse, __MetadataBearer {}

/**
 * <p>Checks whether new access is allowed for an updated policy when compared to the existing policy.</p> <p>You can find examples for reference policies and learn how to set up and run a custom policy check for new access in the <a href="https://github.com/aws-samples/iam-access-analyzer-custom-policy-check-samples">IAM Access Analyzer custom policy checks samples</a> repository on GitHub. The reference policies in this repository are meant to be passed to the <code>existingPolicyDocument</code> request parameter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccessAnalyzerClient, CheckNoNewAccessCommand } from "@aws-sdk/client-accessanalyzer"; // ES Modules import
 * // const { AccessAnalyzerClient, CheckNoNewAccessCommand } = require("@aws-sdk/client-accessanalyzer"); // CommonJS import
 * // import type { AccessAnalyzerClientConfig } from "@aws-sdk/client-accessanalyzer";
 * const config = {}; // type is AccessAnalyzerClientConfig
 * const client = new AccessAnalyzerClient(config);
 * const input = { // CheckNoNewAccessRequest
 *   newPolicyDocument: "STRING_VALUE", // required
 *   existingPolicyDocument: "STRING_VALUE", // required
 *   policyType: "STRING_VALUE", // required
 * };
 * const command = new CheckNoNewAccessCommand(input);
 * const response = await client.send(command);
 * // { // CheckNoNewAccessResponse
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
 * @param CheckNoNewAccessCommandInput - {@link CheckNoNewAccessCommandInput}
 * @returns {@link CheckNoNewAccessCommandOutput}
 * @see {@link CheckNoNewAccessCommandInput} for command's `input` shape.
 * @see {@link CheckNoNewAccessCommandOutput} for command's `response` shape.
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
 * @public
 */
export class CheckNoNewAccessCommand extends $Command
  .classBuilder<
    CheckNoNewAccessCommandInput,
    CheckNoNewAccessCommandOutput,
    AccessAnalyzerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AccessAnalyzerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AccessAnalyzer", "CheckNoNewAccess", {})
  .n("AccessAnalyzerClient", "CheckNoNewAccessCommand")
  .sc(CheckNoNewAccess)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CheckNoNewAccessRequest;
      output: CheckNoNewAccessResponse;
    };
    sdk: {
      input: CheckNoNewAccessCommandInput;
      output: CheckNoNewAccessCommandOutput;
    };
  };
}
