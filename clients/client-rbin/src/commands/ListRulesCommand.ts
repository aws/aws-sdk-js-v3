// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListRulesRequest, ListRulesResponse } from "../models/models_0";
import { RbinClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RbinClient";
import { ListRules } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListRulesCommand}.
 */
export interface ListRulesCommandInput extends ListRulesRequest {}
/**
 * @public
 *
 * The output of {@link ListRulesCommand}.
 */
export interface ListRulesCommandOutput extends ListRulesResponse, __MetadataBearer {}

/**
 * <p>Lists the Recycle Bin retention rules in the Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RbinClient, ListRulesCommand } from "@aws-sdk/client-rbin"; // ES Modules import
 * // const { RbinClient, ListRulesCommand } = require("@aws-sdk/client-rbin"); // CommonJS import
 * // import type { RbinClientConfig } from "@aws-sdk/client-rbin";
 * const config = {}; // type is RbinClientConfig
 * const client = new RbinClient(config);
 * const input = { // ListRulesRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   ResourceType: "EBS_SNAPSHOT" || "EC2_IMAGE" || "EBS_VOLUME", // required
 *   ResourceTags: [ // ResourceTags
 *     { // ResourceTag
 *       ResourceTagKey: "STRING_VALUE", // required
 *       ResourceTagValue: "STRING_VALUE",
 *     },
 *   ],
 *   LockState: "locked" || "pending_unlock" || "unlocked",
 *   ExcludeResourceTags: [ // ExcludeResourceTags
 *     {
 *       ResourceTagKey: "STRING_VALUE", // required
 *       ResourceTagValue: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new ListRulesCommand(input);
 * const response = await client.send(command);
 * // { // ListRulesResponse
 * //   Rules: [ // RuleSummaryList
 * //     { // RuleSummary
 * //       Identifier: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       RetentionPeriod: { // RetentionPeriod
 * //         RetentionPeriodValue: Number("int"), // required
 * //         RetentionPeriodUnit: "DAYS", // required
 * //       },
 * //       LockState: "locked" || "pending_unlock" || "unlocked",
 * //       RuleArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRulesCommandInput - {@link ListRulesCommandInput}
 * @returns {@link ListRulesCommandOutput}
 * @see {@link ListRulesCommandInput} for command's `input` shape.
 * @see {@link ListRulesCommandOutput} for command's `response` shape.
 * @see {@link RbinClientResolvedConfig | config} for RbinClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The service could not respond to the request due to an internal problem.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One or more of the parameters in the request is not valid.</p>
 *
 * @throws {@link RbinServiceException}
 * <p>Base exception class for all service exceptions from Rbin service.</p>
 *
 *
 * @public
 */
export class ListRulesCommand extends $Command
  .classBuilder<
    ListRulesCommandInput,
    ListRulesCommandOutput,
    RbinClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RbinClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonRecycleBin", "ListRules", {})
  .n("RbinClient", "ListRulesCommand")
  .sc(ListRules)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRulesRequest;
      output: ListRulesResponse;
    };
    sdk: {
      input: ListRulesCommandInput;
      output: ListRulesCommandOutput;
    };
  };
}
