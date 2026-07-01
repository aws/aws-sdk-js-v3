// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListSchedulingPoliciesRequest, ListSchedulingPoliciesResponse } from "../models/models_0";
import { ListSchedulingPolicies$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListSchedulingPoliciesCommand}.
 */
export interface ListSchedulingPoliciesCommandInput extends ListSchedulingPoliciesRequest {}
/**
 * @public
 *
 * The output of {@link ListSchedulingPoliciesCommand}.
 */
export interface ListSchedulingPoliciesCommandOutput extends ListSchedulingPoliciesResponse, __MetadataBearer {}

/**
 * <p>Returns a list of Batch scheduling policies.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BatchClient, ListSchedulingPoliciesCommand } from "@aws-sdk/client-batch"; // ES Modules import
 * // const { BatchClient, ListSchedulingPoliciesCommand } = require("@aws-sdk/client-batch"); // CommonJS import
 * // import type { BatchClientConfig } from "@aws-sdk/client-batch";
 * const config = {}; // type is BatchClientConfig
 * const client = new BatchClient(config);
 * const input = { // ListSchedulingPoliciesRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListSchedulingPoliciesCommand(input);
 * const response = await client.send(command);
 * // { // ListSchedulingPoliciesResponse
 * //   schedulingPolicies: [ // SchedulingPolicyListingDetailList
 * //     { // SchedulingPolicyListingDetail
 * //       arn: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSchedulingPoliciesCommandInput - {@link ListSchedulingPoliciesCommandInput}
 * @returns {@link ListSchedulingPoliciesCommandOutput}
 * @see {@link ListSchedulingPoliciesCommandInput} for command's `input` shape.
 * @see {@link ListSchedulingPoliciesCommandOutput} for command's `response` shape.
 * @see {@link BatchClientResolvedConfig | config} for BatchClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>These errors are usually caused by a client action. One example cause is using an action or resource on behalf
 *    of a user that doesn't have permissions to use the action or resource. Another cause is specifying an identifier
 *    that's not valid.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server issue.</p>
 *
 * @throws {@link BatchServiceException}
 * <p>Base exception class for all service exceptions from Batch service.</p>
 *
 *
 * @public
 */
export class ListSchedulingPoliciesCommand extends command<ListSchedulingPoliciesCommandInput, ListSchedulingPoliciesCommandOutput>(
  _ep0,
  _mw0,
  "ListSchedulingPolicies",
  ListSchedulingPolicies$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSchedulingPoliciesRequest;
      output: ListSchedulingPoliciesResponse;
    };
    sdk: {
      input: ListSchedulingPoliciesCommandInput;
      output: ListSchedulingPoliciesCommandOutput;
    };
  };
}
