// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LockRuleRequest, LockRuleResponse } from "../models/models_0";
import { de_LockRuleCommand, se_LockRuleCommand } from "../protocols/Aws_restJson1";
import { RbinClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RbinClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link LockRuleCommand}.
 */
export interface LockRuleCommandInput extends LockRuleRequest {}
/**
 * @public
 *
 * The output of {@link LockRuleCommand}.
 */
export interface LockRuleCommandOutput extends LockRuleResponse, __MetadataBearer {}

/**
 * <p>Locks a retention rule. A locked retention rule can't be modified or deleted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RbinClient, LockRuleCommand } from "@aws-sdk/client-rbin"; // ES Modules import
 * // const { RbinClient, LockRuleCommand } = require("@aws-sdk/client-rbin"); // CommonJS import
 * const client = new RbinClient(config);
 * const input = { // LockRuleRequest
 *   Identifier: "STRING_VALUE", // required
 *   LockConfiguration: { // LockConfiguration
 *     UnlockDelay: { // UnlockDelay
 *       UnlockDelayValue: Number("int"), // required
 *       UnlockDelayUnit: "DAYS", // required
 *     },
 *   },
 * };
 * const command = new LockRuleCommand(input);
 * const response = await client.send(command);
 * // { // LockRuleResponse
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
 * //   RuleArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param LockRuleCommandInput - {@link LockRuleCommandInput}
 * @returns {@link LockRuleCommandOutput}
 * @see {@link LockRuleCommandInput} for command's `input` shape.
 * @see {@link LockRuleCommandOutput} for command's `response` shape.
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
 * @public
 */
export class LockRuleCommand extends $Command
  .classBuilder<
    LockRuleCommandInput,
    LockRuleCommandOutput,
    RbinClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: RbinClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonRecycleBin", "LockRule", {})
  .n("RbinClient", "LockRuleCommand")
  .f(void 0, void 0)
  .ser(se_LockRuleCommand)
  .de(de_LockRuleCommand)
  .build() {}
