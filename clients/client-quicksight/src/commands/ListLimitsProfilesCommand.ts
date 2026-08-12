// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListLimitsProfilesRequest, ListLimitsProfilesResponse } from "../models/models_4";
import { ListLimitsProfiles$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListLimitsProfilesCommand}.
 */
export interface ListLimitsProfilesCommandInput extends ListLimitsProfilesRequest {}
/**
 * @public
 *
 * The output of {@link ListLimitsProfilesCommand}.
 */
export interface ListLimitsProfilesCommandOutput extends ListLimitsProfilesResponse, __MetadataBearer {}

/**
 * <p>Lists all limits profiles in an Amazon Quick Sight account. Results are paginated. Use the <code>maxResults</code> parameter to limit the number of results returned in a single call, and use the <code>nextToken</code> parameter to retrieve the next page of results.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, ListLimitsProfilesCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, ListLimitsProfilesCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // ListLimitsProfilesRequest
 *   accountId: "STRING_VALUE", // required
 *   resourceType: "INDEX_STORAGE" || "AGENT_HOURS",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListLimitsProfilesCommand(input);
 * const response = await client.send(command);
 * // { // ListLimitsProfilesResponse
 * //   profiles: [ // LimitsProfileList // required
 * //     { // LimitsProfile
 * //       profileId: "STRING_VALUE", // required
 * //       arn: "STRING_VALUE", // required
 * //       accountId: "STRING_VALUE", // required
 * //       profileName: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //       resourceLimits: { // ResourceLimitsMap // required
 * //         "<keys>": { // ProfileLimitValue
 * //           maxValue: Number("long"), // required
 * //           unit: "MB" || "GB" || "HOURS" || "DAYS", // required
 * //         },
 * //       },
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListLimitsProfilesCommandInput - {@link ListLimitsProfilesCommandInput}
 * @returns {@link ListLimitsProfilesCommandOutput}
 * @see {@link ListLimitsProfilesCommandInput} for command's `input` shape.
 * @see {@link ListLimitsProfilesCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more parameters has a value that isn't valid.</p>
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
export class ListLimitsProfilesCommand extends command<ListLimitsProfilesCommandInput, ListLimitsProfilesCommandOutput>(
  _ep0,
  _mw0,
  "ListLimitsProfiles",
  ListLimitsProfiles$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListLimitsProfilesRequest;
      output: ListLimitsProfilesResponse;
    };
    sdk: {
      input: ListLimitsProfilesCommandInput;
      output: ListLimitsProfilesCommandOutput;
    };
  };
}
