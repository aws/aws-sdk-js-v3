// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListAccessPoliciesRequest, ListAccessPoliciesResponse } from "../models/models_0";
import { ListAccessPolicies$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListAccessPoliciesCommand}.
 */
export interface ListAccessPoliciesCommandInput extends ListAccessPoliciesRequest {}
/**
 * @public
 *
 * The output of {@link ListAccessPoliciesCommand}.
 */
export interface ListAccessPoliciesCommandOutput extends ListAccessPoliciesResponse, __MetadataBearer {}

/**
 * <p>Lists the available access policies. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, ListAccessPoliciesCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, ListAccessPoliciesCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * // import type { EKSClientConfig } from "@aws-sdk/client-eks";
 * const config = {}; // type is EKSClientConfig
 * const client = new EKSClient(config);
 * const input = { // ListAccessPoliciesRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListAccessPoliciesCommand(input);
 * const response = await client.send(command);
 * // { // ListAccessPoliciesResponse
 * //   accessPolicies: [ // AccessPoliciesList
 * //     { // AccessPolicy
 * //       name: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAccessPoliciesCommandInput - {@link ListAccessPoliciesCommandInput}
 * @returns {@link ListAccessPoliciesCommandOutput}
 * @see {@link ListAccessPoliciesCommandInput} for command's `input` shape.
 * @see {@link ListAccessPoliciesCommandOutput} for command's `response` shape.
 * @see {@link EKSClientResolvedConfig | config} for EKSClient's `config` shape.
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server-side issue.</p>
 *
 * @throws {@link EKSServiceException}
 * <p>Base exception class for all service exceptions from EKS service.</p>
 *
 *
 * @public
 */
export class ListAccessPoliciesCommand extends command<ListAccessPoliciesCommandInput, ListAccessPoliciesCommandOutput>(
  _ep0,
  _mw0,
  "ListAccessPolicies",
  ListAccessPolicies$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAccessPoliciesRequest;
      output: ListAccessPoliciesResponse;
    };
    sdk: {
      input: ListAccessPoliciesCommandInput;
      output: ListAccessPoliciesCommandOutput;
    };
  };
}
