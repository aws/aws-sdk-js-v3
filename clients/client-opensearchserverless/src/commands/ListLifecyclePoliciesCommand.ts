// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListLifecyclePoliciesRequest, ListLifecyclePoliciesResponse } from "../models/models_0";
import { ListLifecyclePolicies$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListLifecyclePoliciesCommand}.
 */
export interface ListLifecyclePoliciesCommandInput extends ListLifecyclePoliciesRequest {}
/**
 * @public
 *
 * The output of {@link ListLifecyclePoliciesCommand}.
 */
export interface ListLifecyclePoliciesCommandOutput extends ListLifecyclePoliciesResponse, __MetadataBearer {}

/**
 * Returns a list of OpenSearch Serverless lifecycle policies. For more information, see [Viewing data lifecycle policies](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-lifecycle.html#serverless-lifecycle-list).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchServerlessClient, ListLifecyclePoliciesCommand } from "@aws-sdk/client-opensearchserverless"; // ES Modules import
 * // const { OpenSearchServerlessClient, ListLifecyclePoliciesCommand } = require("@aws-sdk/client-opensearchserverless"); // CommonJS import
 * // import type { OpenSearchServerlessClientConfig } from "@aws-sdk/client-opensearchserverless";
 * const config = {}; // type is OpenSearchServerlessClientConfig
 * const client = new OpenSearchServerlessClient(config);
 * const input = { // ListLifecyclePoliciesRequest
 *   type: "STRING_VALUE", // required
 *   resources: [ // LifecycleResourceFilter
 *     "STRING_VALUE",
 *   ],
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListLifecyclePoliciesCommand(input);
 * const response = await client.send(command);
 * // { // ListLifecyclePoliciesResponse
 * //   lifecyclePolicySummaries: [ // LifecyclePolicySummaries
 * //     { // LifecyclePolicySummary
 * //       type: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       policyVersion: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       createdDate: Number("long"),
 * //       lastModifiedDate: Number("long"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListLifecyclePoliciesCommandInput - {@link ListLifecyclePoliciesCommandInput}
 * @returns {@link ListLifecyclePoliciesCommandOutput}
 * @see {@link ListLifecyclePoliciesCommandInput} for command's `input` shape.
 * @see {@link ListLifecyclePoliciesCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchServerlessClientResolvedConfig | config} for OpenSearchServerlessClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Thrown when an error internal to the service occurs while processing a request.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Thrown when the HTTP request contains invalid input or is missing required input.
 *
 * @throws {@link OpenSearchServerlessServiceException}
 *
 * Base exception class for all service exceptions from OpenSearchServerless service.
 *
 * @public
 */
export class ListLifecyclePoliciesCommand extends command<ListLifecyclePoliciesCommandInput, ListLifecyclePoliciesCommandOutput>(
  _ep0,
  _mw0,
  "ListLifecyclePolicies",
  ListLifecyclePolicies$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListLifecyclePoliciesRequest;
      output: ListLifecyclePoliciesResponse;
    };
    sdk: {
      input: ListLifecyclePoliciesCommandInput;
      output: ListLifecyclePoliciesCommandOutput;
    };
  };
}
