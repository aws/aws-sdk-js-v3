// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateSelfUpgradeRequest, UpdateSelfUpgradeResponse } from "../models/models_4";
import type { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { UpdateSelfUpgrade$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateSelfUpgradeCommand}.
 */
export interface UpdateSelfUpgradeCommandInput extends UpdateSelfUpgradeRequest {}
/**
 * @public
 *
 * The output of {@link UpdateSelfUpgradeCommand}.
 */
export interface UpdateSelfUpgradeCommandOutput extends UpdateSelfUpgradeResponse, __MetadataBearer {}

/**
 * <p>Updates a self-upgrade request for a Quick Suite user by approving, denying, or verifying the request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, UpdateSelfUpgradeCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, UpdateSelfUpgradeCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // UpdateSelfUpgradeRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   Namespace: "STRING_VALUE", // required
 *   UpgradeRequestId: "STRING_VALUE", // required
 *   Action: "APPROVE" || "DENY" || "VERIFY", // required
 * };
 * const command = new UpdateSelfUpgradeCommand(input);
 * const response = await client.send(command);
 * // { // UpdateSelfUpgradeResponse
 * //   SelfUpgradeRequestDetail: { // SelfUpgradeRequestDetail
 * //     UpgradeRequestId: "STRING_VALUE",
 * //     UserName: "STRING_VALUE",
 * //     OriginalRole: "ADMIN" || "AUTHOR" || "READER" || "RESTRICTED_AUTHOR" || "RESTRICTED_READER" || "ADMIN_PRO" || "AUTHOR_PRO" || "READER_PRO",
 * //     RequestedRole: "ADMIN" || "AUTHOR" || "READER" || "RESTRICTED_AUTHOR" || "RESTRICTED_READER" || "ADMIN_PRO" || "AUTHOR_PRO" || "READER_PRO",
 * //     RequestNote: "STRING_VALUE",
 * //     CreationTime: Number("long"),
 * //     RequestStatus: "PENDING" || "APPROVED" || "DENIED" || "UPDATE_FAILED" || "VERIFY_FAILED",
 * //     lastUpdateAttemptTime: Number("long"),
 * //     lastUpdateFailureReason: "STRING_VALUE",
 * //   },
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param UpdateSelfUpgradeCommandInput - {@link UpdateSelfUpgradeCommandInput}
 * @returns {@link UpdateSelfUpgradeCommandOutput}
 * @see {@link UpdateSelfUpgradeCommandInput} for command's `input` shape.
 * @see {@link UpdateSelfUpgradeCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon Quick Sight service, that your policies have the
 * 			correct permissions, and that you are using the correct credentials.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The <code>NextToken</code> value isn't valid.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more parameters has a value that isn't valid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit is exceeded.</p>
 *
 * @throws {@link PreconditionNotMetException} (client fault)
 *  <p>One or more preconditions aren't met.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ResourceUnavailableException} (server fault)
 *  <p>This resource is currently unavailable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Access is throttled.</p>
 *
 * @throws {@link QuickSightServiceException}
 * <p>Base exception class for all service exceptions from QuickSight service.</p>
 *
 *
 * @public
 */
export class UpdateSelfUpgradeCommand extends $Command
  .classBuilder<
    UpdateSelfUpgradeCommandInput,
    UpdateSelfUpgradeCommandOutput,
    QuickSightClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QuickSightClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("QuickSight_20180401", "UpdateSelfUpgrade", {})
  .n("QuickSightClient", "UpdateSelfUpgradeCommand")
  .sc(UpdateSelfUpgrade$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateSelfUpgradeRequest;
      output: UpdateSelfUpgradeResponse;
    };
    sdk: {
      input: UpdateSelfUpgradeCommandInput;
      output: UpdateSelfUpgradeCommandOutput;
    };
  };
}
