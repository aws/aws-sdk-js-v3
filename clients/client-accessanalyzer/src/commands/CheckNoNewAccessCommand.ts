// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CheckNoNewAccessRequest, CheckNoNewAccessResponse } from "../models/models_0";
import { CheckNoNewAccess$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Checks whether new access is allowed for an updated policy when compared to the existing policy.
 *
 * You can find examples for reference policies and learn how to set up and run a custom policy check for new access in the [IAM Access Analyzer custom policy checks samples](https://github.com/aws-samples/iam-access-analyzer-custom-policy-check-samples) repository on GitHub. The reference policies in this repository are meant to be passed to the `existingPolicyDocument` request parameter.
 *
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
 * @public
 */
export class CheckNoNewAccessCommand extends command<CheckNoNewAccessCommandInput, CheckNoNewAccessCommandOutput>(
  _ep0,
  _mw0,
  "CheckNoNewAccess",
  CheckNoNewAccess$
) {
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
