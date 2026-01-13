// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListSelfUpgradesRequest, ListSelfUpgradesResponse } from "../models/models_4";
import type { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { ListSelfUpgrades$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListSelfUpgradesCommand}.
 */
export interface ListSelfUpgradesCommandInput extends ListSelfUpgradesRequest {}
/**
 * @public
 *
 * The output of {@link ListSelfUpgradesCommand}.
 */
export interface ListSelfUpgradesCommandOutput extends ListSelfUpgradesResponse, __MetadataBearer {}

/**
 * <p>Lists all self-upgrade requests for a Quick Suite account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, ListSelfUpgradesCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, ListSelfUpgradesCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // ListSelfUpgradesRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   Namespace: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListSelfUpgradesCommand(input);
 * const response = await client.send(command);
 * // { // ListSelfUpgradesResponse
 * //   SelfUpgradeRequestDetails: [ // SelfUpgradeRequestDetailList
 * //     { // SelfUpgradeRequestDetail
 * //       UpgradeRequestId: "STRING_VALUE",
 * //       UserName: "STRING_VALUE",
 * //       OriginalRole: "ADMIN" || "AUTHOR" || "READER" || "RESTRICTED_AUTHOR" || "RESTRICTED_READER" || "ADMIN_PRO" || "AUTHOR_PRO" || "READER_PRO",
 * //       RequestedRole: "ADMIN" || "AUTHOR" || "READER" || "RESTRICTED_AUTHOR" || "RESTRICTED_READER" || "ADMIN_PRO" || "AUTHOR_PRO" || "READER_PRO",
 * //       RequestNote: "STRING_VALUE",
 * //       CreationTime: Number("long"),
 * //       RequestStatus: "PENDING" || "APPROVED" || "DENIED" || "UPDATE_FAILED" || "VERIFY_FAILED",
 * //       lastUpdateAttemptTime: Number("long"),
 * //       lastUpdateFailureReason: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param ListSelfUpgradesCommandInput - {@link ListSelfUpgradesCommandInput}
 * @returns {@link ListSelfUpgradesCommandOutput}
 * @see {@link ListSelfUpgradesCommandInput} for command's `input` shape.
 * @see {@link ListSelfUpgradesCommandOutput} for command's `response` shape.
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
export class ListSelfUpgradesCommand extends $Command
  .classBuilder<
    ListSelfUpgradesCommandInput,
    ListSelfUpgradesCommandOutput,
    QuickSightClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QuickSightClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("QuickSight_20180401", "ListSelfUpgrades", {})
  .n("QuickSightClient", "ListSelfUpgradesCommand")
  .sc(ListSelfUpgrades$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSelfUpgradesRequest;
      output: ListSelfUpgradesResponse;
    };
    sdk: {
      input: ListSelfUpgradesCommandInput;
      output: ListSelfUpgradesCommandOutput;
    };
  };
}
