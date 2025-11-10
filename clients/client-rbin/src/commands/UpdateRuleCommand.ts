// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateRuleRequest, UpdateRuleResponse } from "../models/models_0";
import { RbinClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RbinClient";
import { UpdateRule } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateRuleCommand}.
 */
export interface UpdateRuleCommandInput extends UpdateRuleRequest {}
/**
 * @public
 *
 * The output of {@link UpdateRuleCommand}.
 */
export interface UpdateRuleCommandOutput extends UpdateRuleResponse, __MetadataBearer {}

/**
 * <p>Updates an existing Recycle Bin retention rule. You can update a retention rule's description,
 *       resource tags, and retention period at any time after creation. You can't update a retention rule's
 *       resource type after creation. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/recycle-bin-working-with-rules.html#recycle-bin-update-rule">
 *       Update Recycle Bin retention rules</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RbinClient, UpdateRuleCommand } from "@aws-sdk/client-rbin"; // ES Modules import
 * // const { RbinClient, UpdateRuleCommand } = require("@aws-sdk/client-rbin"); // CommonJS import
 * // import type { RbinClientConfig } from "@aws-sdk/client-rbin";
 * const config = {}; // type is RbinClientConfig
 * const client = new RbinClient(config);
 * const input = { // UpdateRuleRequest
 *   Identifier: "STRING_VALUE", // required
 *   RetentionPeriod: { // RetentionPeriod
 *     RetentionPeriodValue: Number("int"), // required
 *     RetentionPeriodUnit: "DAYS", // required
 *   },
 *   Description: "STRING_VALUE",
 *   ResourceType: "EBS_SNAPSHOT" || "EC2_IMAGE",
 *   ResourceTags: [ // ResourceTags
 *     { // ResourceTag
 *       ResourceTagKey: "STRING_VALUE", // required
 *       ResourceTagValue: "STRING_VALUE",
 *     },
 *   ],
 *   ExcludeResourceTags: [ // ExcludeResourceTags
 *     {
 *       ResourceTagKey: "STRING_VALUE", // required
 *       ResourceTagValue: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new UpdateRuleCommand(input);
 * const response = await client.send(command);
 * // { // UpdateRuleResponse
 * //   Identifier: "STRING_VALUE",
 * //   RetentionPeriod: { // RetentionPeriod
 * //     RetentionPeriodValue: Number("int"), // required
 * //     RetentionPeriodUnit: "DAYS", // required
 * //   },
 * //   Description: "STRING_VALUE",
 * //   ResourceType: "EBS_SNAPSHOT" || "EC2_IMAGE",
 * //   ResourceTags: [ // ResourceTags
 * //     { // ResourceTag
 * //       ResourceTagKey: "STRING_VALUE", // required
 * //       ResourceTagValue: "STRING_VALUE",
 * //     },
 * //   ],
 * //   Status: "pending" || "available",
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
 * @param UpdateRuleCommandInput - {@link UpdateRuleCommandInput}
 * @returns {@link UpdateRuleCommandOutput}
 * @see {@link UpdateRuleCommandInput} for command's `input` shape.
 * @see {@link UpdateRuleCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request would cause a service quota for the number of tags per resource to be exceeded.</p>
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
export class UpdateRuleCommand extends $Command
  .classBuilder<
    UpdateRuleCommandInput,
    UpdateRuleCommandOutput,
    RbinClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RbinClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonRecycleBin", "UpdateRule", {})
  .n("RbinClient", "UpdateRuleCommand")
  .sc(UpdateRule)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateRuleRequest;
      output: UpdateRuleResponse;
    };
    sdk: {
      input: UpdateRuleCommandInput;
      output: UpdateRuleCommandOutput;
    };
  };
}
