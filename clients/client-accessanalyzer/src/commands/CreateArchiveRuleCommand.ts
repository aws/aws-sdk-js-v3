// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateArchiveRuleRequest } from "../models/models_0";
import { CreateArchiveRule$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateArchiveRuleCommand}.
 */
export interface CreateArchiveRuleCommandInput extends CreateArchiveRuleRequest {}
/**
 * @public
 *
 * The output of {@link CreateArchiveRuleCommand}.
 */
export interface CreateArchiveRuleCommandOutput extends __MetadataBearer {}

/**
 * Creates an archive rule for the specified analyzer. Archive rules automatically archive new findings that meet the criteria you define when you create the rule.
 *
 * To learn about filter keys that you can use to create an archive rule, see [IAM Access Analyzer filter keys](https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-reference-filter-keys.html) in the **IAM User Guide**.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccessAnalyzerClient, CreateArchiveRuleCommand } from "@aws-sdk/client-accessanalyzer"; // ES Modules import
 * // const { AccessAnalyzerClient, CreateArchiveRuleCommand } = require("@aws-sdk/client-accessanalyzer"); // CommonJS import
 * // import type { AccessAnalyzerClientConfig } from "@aws-sdk/client-accessanalyzer";
 * const config = {}; // type is AccessAnalyzerClientConfig
 * const client = new AccessAnalyzerClient(config);
 * const input = { // CreateArchiveRuleRequest
 *   analyzerName: "STRING_VALUE", // required
 *   ruleName: "STRING_VALUE", // required
 *   filter: { // FilterCriteriaMap // required
 *     "<keys>": { // Criterion
 *       eq: [ // ValueList
 *         "STRING_VALUE",
 *       ],
 *       neq: [
 *         "STRING_VALUE",
 *       ],
 *       contains: [
 *         "STRING_VALUE",
 *       ],
 *       exists: true || false,
 *     },
 *   },
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreateArchiveRuleCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateArchiveRuleCommandInput - {@link CreateArchiveRuleCommandInput}
 * @returns {@link CreateArchiveRuleCommandOutput}
 * @see {@link CreateArchiveRuleCommandInput} for command's `input` shape.
 * @see {@link CreateArchiveRuleCommandOutput} for command's `response` shape.
 * @see {@link AccessAnalyzerClientResolvedConfig | config} for AccessAnalyzerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * A conflict exception error.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Internal server error.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource could not be found.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * Service quote met error.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Throttling limit exceeded error.
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
export class CreateArchiveRuleCommand extends command<CreateArchiveRuleCommandInput, CreateArchiveRuleCommandOutput>(
  _ep0,
  _mw0,
  "CreateArchiveRule",
  CreateArchiveRule$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateArchiveRuleRequest;
      output: {};
    };
    sdk: {
      input: CreateArchiveRuleCommandInput;
      output: CreateArchiveRuleCommandOutput;
    };
  };
}
