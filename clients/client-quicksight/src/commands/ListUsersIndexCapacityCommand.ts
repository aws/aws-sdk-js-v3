// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListUsersIndexCapacityRequest, ListUsersIndexCapacityResponse } from "../models/models_4";
import type { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { ListUsersIndexCapacity$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListUsersIndexCapacityCommand}.
 */
export interface ListUsersIndexCapacityCommandInput extends ListUsersIndexCapacityRequest {}
/**
 * @public
 *
 * The output of {@link ListUsersIndexCapacityCommand}.
 */
export interface ListUsersIndexCapacityCommandOutput extends ListUsersIndexCapacityResponse, __MetadataBearer {}

/**
 * <p>Lists per-user index capacity consumption for an account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, ListUsersIndexCapacityCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, ListUsersIndexCapacityCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // ListUsersIndexCapacityRequest
 *   awsAccountId: "STRING_VALUE", // required
 *   namespace: "STRING_VALUE",
 *   filters: [ // UserIndexCapacityFilters
 *     { // UserIndexCapacityFilter Union: only one key present
 *       userNameOrEmail: { // UserNameOrEmailFilter
 *         prefix: "STRING_VALUE", // required
 *       },
 *       totalCapacityBytes: { // CapacityBytesRangeFilter
 *         minBytes: Number("long"),
 *         maxBytes: Number("long"),
 *       },
 *     },
 *   ],
 *   sortBy: "TOTAL_CAPACITY_BYTES",
 *   sortOrder: "ASC" || "DESC",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListUsersIndexCapacityCommand(input);
 * const response = await client.send(command);
 * // { // ListUsersIndexCapacityResponse
 * //   users: [ // UserIndexCapacityList
 * //     { // UserIndexCapacity
 * //       userArn: "STRING_VALUE",
 * //       userName: "STRING_VALUE",
 * //       email: "STRING_VALUE",
 * //       role: "STRING_VALUE",
 * //       totalCapacityBytes: Number("long"),
 * //       totalKBCapacityBytes: Number("long"),
 * //       totalSpaceCapacityBytes: Number("long"),
 * //       kbCount: Number("int"),
 * //       spaceCount: Number("int"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * //   requestId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListUsersIndexCapacityCommandInput - {@link ListUsersIndexCapacityCommandInput}
 * @returns {@link ListUsersIndexCapacityCommandOutput}
 * @see {@link ListUsersIndexCapacityCommandInput} for command's `input` shape.
 * @see {@link ListUsersIndexCapacityCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>You don't have this feature activated for your account. To fix this issue, contact Amazon Web Services support.</p>
 *
 * @throws {@link PreconditionNotMetException} (client fault)
 *  <p>One or more preconditions aren't met.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
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
export class ListUsersIndexCapacityCommand extends $Command
  .classBuilder<
    ListUsersIndexCapacityCommandInput,
    ListUsersIndexCapacityCommandOutput,
    QuickSightClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QuickSightClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("QuickSight_20180401", "ListUsersIndexCapacity", {})
  .n("QuickSightClient", "ListUsersIndexCapacityCommand")
  .sc(ListUsersIndexCapacity$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListUsersIndexCapacityRequest;
      output: ListUsersIndexCapacityResponse;
    };
    sdk: {
      input: ListUsersIndexCapacityCommandInput;
      output: ListUsersIndexCapacityCommandOutput;
    };
  };
}
