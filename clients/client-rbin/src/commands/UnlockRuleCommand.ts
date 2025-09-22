// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UnlockRuleRequest, UnlockRuleResponse } from "../models/models_0";
import { RbinClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RbinClient";
import { UnlockRule } from "../schemas/schemas_1_Rule";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UnlockRuleCommand}.
 */
export interface UnlockRuleCommandInput extends UnlockRuleRequest {}
/**
 * @public
 *
 * The output of {@link UnlockRuleCommand}.
 */
export interface UnlockRuleCommandOutput extends UnlockRuleResponse, __MetadataBearer {}

/**
 * <p>Unlocks a retention rule. After a retention rule is unlocked, it can be modified or deleted
 *       only after the unlock delay period expires.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RbinClient, UnlockRuleCommand } from "@aws-sdk/client-rbin"; // ES Modules import
 * // const { RbinClient, UnlockRuleCommand } = require("@aws-sdk/client-rbin"); // CommonJS import
 * // import type { RbinClientConfig } from "@aws-sdk/client-rbin";
 * const config = {}; // type is RbinClientConfig
 * const client = new RbinClient(config);
 * const input = { // UnlockRuleRequest
 *   Identifier: "STRING_VALUE", // required
 * };
 * const command = new UnlockRuleCommand(input);
 * const response = await client.send(command);
 * // { // UnlockRuleResponse
 * //   Identifier: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   ResourceType: "EBS_SNAPSHOT" || "EC2_IMAGE",
 * //   RetentionPeriod: { // RetentionPeriod
 * //     RetentionPeriodValue: Number("int"), // required
 * //     RetentionPeriodUnit: "DAYS", // required
 * //   },
 * //   ResourceTags: [ // ResourceTags
 * //     { // ResourceTag
 * //       ResourceTagKey: "STRING_VALUE", // required
 * //       ResourceTagValue: "STRING_VALUE",
 * //     },
 * //   ],
 * //   Status: "pending" || "available",
 * //   LockConfiguration: { // LockConfiguration
 * //     UnlockDelay: { // UnlockDelay
 * //       UnlockDelayValue: Number("int"), // required
 * //       UnlockDelayUnit: "DAYS", // required
 * //     },
 * //   },
 * //   LockState: "locked" || "pending_unlock" || "unlocked",
 * //   LockEndTime: new Date("TIMESTAMP"),
 * //   RuleArn: "STRING_VALUE",
 * //   ExcludeResourceTags: [ // ExcludeResourceTags
 * //     {
 * //       ResourceTagKey: "STRING_VALUE", // required
 * //       ResourceTagValue: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param UnlockRuleCommandInput - {@link UnlockRuleCommandInput}
 * @returns {@link UnlockRuleCommandOutput}
 * @see {@link UnlockRuleCommandInput} for command's `input` shape.
 * @see {@link UnlockRuleCommandOutput} for command's `response` shape.
 * @see {@link RbinClientResolvedConfig | config} for RbinClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The specified retention rule lock request can't be completed.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The service could not respond to the request due to an internal problem.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
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
export class UnlockRuleCommand extends $Command
  .classBuilder<
    UnlockRuleCommandInput,
    UnlockRuleCommandOutput,
    RbinClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RbinClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonRecycleBin", "UnlockRule", {})
  .n("RbinClient", "UnlockRuleCommand")
  .sc(UnlockRule)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UnlockRuleRequest;
      output: UnlockRuleResponse;
    };
    sdk: {
      input: UnlockRuleCommandInput;
      output: UnlockRuleCommandOutput;
    };
  };
}
