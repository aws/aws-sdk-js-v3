// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateRuleRequest, UpdateRuleResponse } from "../models/models_0";
import { UpdateRule$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Updates an existing Recycle Bin retention rule. You can update a retention rule's description, resource tags, and retention period at any time after creation. You can't update a retention rule's resource type after creation. For more information, see [Update Recycle Bin retention rules](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/recycle-bin-working-with-rules.html#recycle-bin-update-rule) in the *Amazon Elastic Compute Cloud User Guide*.
 *
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
 *   ResourceType: "EBS_SNAPSHOT" || "EC2_IMAGE" || "EBS_VOLUME",
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
 * //   ResourceType: "EBS_SNAPSHOT" || "EC2_IMAGE" || "EBS_VOLUME",
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
 *
 * The specified retention rule lock request can't be completed.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The service could not respond to the request due to an internal problem.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The request would cause a service quota for the number of tags per resource to be exceeded.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * One or more of the parameters in the request is not valid.
 *
 * @throws {@link RbinServiceException}
 *
 * Base exception class for all service exceptions from Rbin service.
 *
 * @public
 */
export class UpdateRuleCommand extends command<UpdateRuleCommandInput, UpdateRuleCommandOutput>(
  _ep0,
  _mw0,
  "UpdateRule",
  UpdateRule$
) {
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
