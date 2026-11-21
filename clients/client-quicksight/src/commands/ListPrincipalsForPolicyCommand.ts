// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListPrincipalsForPolicyRequest, ListPrincipalsForPolicyResponse } from "../models/models_5";
import { ListPrincipalsForPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListPrincipalsForPolicyCommand}.
 */
export interface ListPrincipalsForPolicyCommandInput extends ListPrincipalsForPolicyRequest {}
/**
 * @public
 *
 * The output of {@link ListPrincipalsForPolicyCommand}.
 */
export interface ListPrincipalsForPolicyCommandOutput extends ListPrincipalsForPolicyResponse, __MetadataBearer {}

/**
 * <p>Lists the Amazon Quick Sight principals that have a governance policy. This operation returns paginated
 *          results. A page can contain fewer results than <code>MaxResults</code>, or none, and still include a
 *          <code>NextToken</code>. Continue to call the operation until the response doesn't include a
 *          <code>NextToken</code>. We recommend that you use pagination to make sure that the operation returns
 *          quickly and successfully.</p>
 *          <p>Results are eventually consistent and might not reflect recent changes. If the policy has no
 *          assignments, the response contains an empty <code>Principals</code> list. If the policy doesn't exist,
 *          the request fails with a <code>ResourceNotFoundException</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, ListPrincipalsForPolicyCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, ListPrincipalsForPolicyCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // ListPrincipalsForPolicyRequest
 *   AccountId: "STRING_VALUE", // required
 *   PolicyArn: "STRING_VALUE", // required
 *   PrincipalType: "USER" || "GROUP" || "ACCOUNT",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListPrincipalsForPolicyCommand(input);
 * const response = await client.send(command);
 * // { // ListPrincipalsForPolicyResponse
 * //   Principals: [ // PolicyPrincipalList // required
 * //     { // PolicyPrincipal
 * //       PrincipalArn: "STRING_VALUE", // required
 * //       PrincipalType: "USER" || "GROUP" || "ACCOUNT",
 * //       UpdatedAt: new Date("TIMESTAMP"),
 * //       Revision: Number("long"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPrincipalsForPolicyCommandInput - {@link ListPrincipalsForPolicyCommandInput}
 * @returns {@link ListPrincipalsForPolicyCommandOutput}
 * @see {@link ListPrincipalsForPolicyCommandInput} for command's `input` shape.
 * @see {@link ListPrincipalsForPolicyCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Access is throttled.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the service.</p>
 *
 * @throws {@link QuickSightServiceException}
 * <p>Base exception class for all service exceptions from QuickSight service.</p>
 *
 *
 * @public
 */
export class ListPrincipalsForPolicyCommand extends command<ListPrincipalsForPolicyCommandInput, ListPrincipalsForPolicyCommandOutput>(
  _ep0,
  _mw0,
  "ListPrincipalsForPolicy",
  ListPrincipalsForPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPrincipalsForPolicyRequest;
      output: ListPrincipalsForPolicyResponse;
    };
    sdk: {
      input: ListPrincipalsForPolicyCommandInput;
      output: ListPrincipalsForPolicyCommandOutput;
    };
  };
}
