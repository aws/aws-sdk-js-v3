// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { PutManagedInsightRulesInput, PutManagedInsightRulesOutput } from "../models/models_0";
import { PutManagedInsightRules } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p> Creates a managed Contributor Insights rule for a specified Amazon Web Services
 *             resource. When you enable a managed rule, you create a Contributor Insights rule that
 *             collects data from Amazon Web Services services. You cannot edit these rules with
 *             <code>PutInsightRule</code>. The rules can be enabled, disabled, and deleted using
 *             <code>EnableInsightRules</code>, <code>DisableInsightRules</code>, and
 *             <code>DeleteInsightRules</code>. If a previously created managed rule is currently
 *             disabled, a subsequent call to this API will re-enable it. Use
 *             <code>ListManagedInsightRules</code> to describe all available rules.
 *
 *         </p>
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
 *  <p>The value of an input parameter is bad or out-of-range.</p>
 *
 * @throws {@link MissingRequiredParameterException} (client fault)
 *  <p>An input parameter that is required is missing.</p>
 *
 * @throws {@link CloudWatchServiceException}
 * <p>Base exception class for all service exceptions from CloudWatch service.</p>
 *
 *
 * @public
 */
export class PutManagedInsightRulesCommand extends $Command
  .classBuilder<
    PutManagedInsightRulesCommandInput,
    PutManagedInsightRulesCommandOutput,
    CloudWatchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GraniteServiceVersion20100801", "PutManagedInsightRules", {})
  .n("CloudWatchClient", "PutManagedInsightRulesCommand")
  .sc(PutManagedInsightRules)
  .build() {
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
