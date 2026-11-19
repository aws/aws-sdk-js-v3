// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListAvailableModulesRequest, ListAvailableModulesResponse } from "../models/models_0";
import { ListAvailableModules$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListAvailableModulesCommand}.
 */
export interface ListAvailableModulesCommandInput extends ListAvailableModulesRequest {}
/**
 * @public
 *
 * The output of {@link ListAvailableModulesCommand}.
 */
export interface ListAvailableModulesCommandOutput extends ListAvailableModulesResponse, __MetadataBearer {}

/**
 * <p>Lists the modules that you can attach, newest first by <code>createdAt</code>. Results are paginated. Use <code>nextToken</code> to get the next page.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RTBFabricClient, ListAvailableModulesCommand } from "@aws-sdk/client-rtbfabric"; // ES Modules import
 * // const { RTBFabricClient, ListAvailableModulesCommand } = require("@aws-sdk/client-rtbfabric"); // CommonJS import
 * // import type { RTBFabricClientConfig } from "@aws-sdk/client-rtbfabric";
 * const config = {}; // type is RTBFabricClientConfig
 * const client = new RTBFabricClient(config);
 * const input = { // ListAvailableModulesRequest
 *   subscriptionType: "MARKETPLACE" || "PRIVATE" || "AWS_BUILT_IN",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListAvailableModulesCommand(input);
 * const response = await client.send(command);
 * // { // ListAvailableModulesResponse
 * //   modules: [ // AvailableModuleSummaryList // required
 * //     { // AvailableModuleSummary
 * //       moduleId: "STRING_VALUE", // required
 * //       moduleArn: "STRING_VALUE", // required
 * //       moduleName: "STRING_VALUE", // required
 * //       subscriptionType: "MARKETPLACE" || "PRIVATE" || "AWS_BUILT_IN", // required
 * //       subscriptionStatus: "ACTIVE" || "EXPIRED", // required
 * //       marketplaceProductId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAvailableModulesCommandInput - {@link ListAvailableModulesCommandInput}
 * @returns {@link ListAvailableModulesCommandOutput}
 * @see {@link ListAvailableModulesCommandInput} for command's `input` shape.
 * @see {@link ListAvailableModulesCommandOutput} for command's `response` shape.
 * @see {@link RTBFabricClientResolvedConfig | config} for RTBFabricClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request could not be completed because you do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request could not be completed because of an internal server error. Try your call again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request could not be completed because it fails satisfy the constraints specified by the service.</p>
 *
 * @throws {@link RTBFabricServiceException}
 * <p>Base exception class for all service exceptions from RTBFabric service.</p>
 *
 *
 * @example List the modules you subscribe to through AWS Marketplace
 * ```javascript
 * // Lists the Marketplace modules that you can attach.
 * const input = {
 *   maxResults: 10,
 *   subscriptionType: "MARKETPLACE"
 * };
 * const command = new ListAvailableModulesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   modules: [
 *     {
 *       marketplaceProductId: "prod-abcd1234efgh5",
 *       moduleArn: "arn:aws:rtbfabric:us-east-1::modules/module-8kq2p9wx3fnv1c5htj7bd0ral",
 *       moduleId: "module-8kq2p9wx3fnv1c5htj7bd0ral",
 *       moduleName: "bid-floor-filter",
 *       subscriptionStatus: "ACTIVE",
 *       subscriptionType: "MARKETPLACE"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListAvailableModulesCommand extends command<ListAvailableModulesCommandInput, ListAvailableModulesCommandOutput>(
  _ep0,
  _mw0,
  "ListAvailableModules",
  ListAvailableModules$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAvailableModulesRequest;
      output: ListAvailableModulesResponse;
    };
    sdk: {
      input: ListAvailableModulesCommandInput;
      output: ListAvailableModulesCommandOutput;
    };
  };
}
