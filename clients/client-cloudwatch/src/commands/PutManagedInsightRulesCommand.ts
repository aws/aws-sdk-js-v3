// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutManagedInsightRulesInput, PutManagedInsightRulesOutput } from "../models/models_0";
import { PutManagedInsightRules$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutManagedInsightRulesCommand}.
 */
export interface PutManagedInsightRulesCommandInput extends PutManagedInsightRulesInput {}
/**
 * @public
 *
 * The output of {@link PutManagedInsightRulesCommand}.
 */
export interface PutManagedInsightRulesCommandOutput extends PutManagedInsightRulesOutput, __MetadataBearer {}

/**
 * Creates a managed Contributor Insights rule for a specified Amazon Web Services resource. When you enable a managed rule, you create a Contributor Insights rule that collects data from Amazon Web Services services. You cannot edit these rules with `PutInsightRule`. The rules can be enabled, disabled, and deleted using `EnableInsightRules`, `DisableInsightRules`, and `DeleteInsightRules`. If a previously created managed rule is currently disabled, a subsequent call to this API will re-enable it. Use `ListManagedInsightRules` to describe all available rules.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, PutManagedInsightRulesCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, PutManagedInsightRulesCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * // import type { CloudWatchClientConfig } from "@aws-sdk/client-cloudwatch";
 * const config = {}; // type is CloudWatchClientConfig
 * const client = new CloudWatchClient(config);
 * const input = { // PutManagedInsightRulesInput
 *   ManagedRules: [ // ManagedRules // required
 *     { // ManagedRule
 *       TemplateName: "STRING_VALUE", // required
 *       ResourceARN: "STRING_VALUE", // required
 *       Tags: [ // TagList
 *         { // Tag
 *           Key: "STRING_VALUE", // required
 *           Value: "STRING_VALUE", // required
 *         },
 *       ],
 *     },
 *   ],
 * };
 * const command = new PutManagedInsightRulesCommand(input);
 * const response = await client.send(command);
 * // { // PutManagedInsightRulesOutput
 * //   Failures: [ // BatchFailures
 * //     { // PartialFailure
 * //       FailureResource: "STRING_VALUE",
 * //       ExceptionType: "STRING_VALUE",
 * //       FailureCode: "STRING_VALUE",
 * //       FailureDescription: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param PutManagedInsightRulesCommandInput - {@link PutManagedInsightRulesCommandInput}
 * @returns {@link PutManagedInsightRulesCommandOutput}
 * @see {@link PutManagedInsightRulesCommandInput} for command's `input` shape.
 * @see {@link PutManagedInsightRulesCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for CloudWatchClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * The value of an input parameter is bad or out-of-range.
 *
 * @throws {@link MissingRequiredParameterException} (client fault)
 *
 * An input parameter that is required is missing.
 *
 * @throws {@link CloudWatchServiceException}
 *
 * Base exception class for all service exceptions from CloudWatch service.
 *
 * @public
 */
export class PutManagedInsightRulesCommand extends command<PutManagedInsightRulesCommandInput, PutManagedInsightRulesCommandOutput>(
  _ep0,
  _mw0,
  "PutManagedInsightRules",
  PutManagedInsightRules$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutManagedInsightRulesInput;
      output: PutManagedInsightRulesOutput;
    };
    sdk: {
      input: PutManagedInsightRulesCommandInput;
      output: PutManagedInsightRulesCommandOutput;
    };
  };
}
