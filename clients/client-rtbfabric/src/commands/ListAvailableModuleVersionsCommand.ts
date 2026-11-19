// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListAvailableModuleVersionsRequest, ListAvailableModuleVersionsResponse } from "../models/models_0";
import { ListAvailableModuleVersions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListAvailableModuleVersionsCommand}.
 */
export interface ListAvailableModuleVersionsCommandInput extends ListAvailableModuleVersionsRequest {}
/**
 * @public
 *
 * The output of {@link ListAvailableModuleVersionsCommand}.
 */
export interface ListAvailableModuleVersionsCommandOutput extends ListAvailableModuleVersionsResponse, __MetadataBearer {}

/**
 * <p>Lists the ACTIVE and DEPRECATED versions of a module that you can attach, highest version first (numerically by MAJOR, then MINOR, then PATCH). If you can't attach the module, the operation returns ResourceNotFoundException, the same as for a missing one. If the module has no ACTIVE or DEPRECATED versions, the operation returns an empty list. The operation lists DEPRECATED versions so that you can inspect one that you've attached, but you can't attach them. Results are paginated. Use <code>nextToken</code> to get the next page.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RTBFabricClient, ListAvailableModuleVersionsCommand } from "@aws-sdk/client-rtbfabric"; // ES Modules import
 * // const { RTBFabricClient, ListAvailableModuleVersionsCommand } = require("@aws-sdk/client-rtbfabric"); // CommonJS import
 * // import type { RTBFabricClientConfig } from "@aws-sdk/client-rtbfabric";
 * const config = {}; // type is RTBFabricClientConfig
 * const client = new RTBFabricClient(config);
 * const input = { // ListAvailableModuleVersionsRequest
 *   moduleId: "STRING_VALUE", // required
 *   status: "CREATING" || "CREATE_FAILED" || "ACTIVE" || "DEPRECATED",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListAvailableModuleVersionsCommand(input);
 * const response = await client.send(command);
 * // { // ListAvailableModuleVersionsResponse
 * //   moduleId: "STRING_VALUE", // required
 * //   versions: [ // AvailableModuleVersionSummaryList // required
 * //     { // AvailableModuleVersionSummary
 * //       version: "STRING_VALUE", // required
 * //       moduleVersionArn: "STRING_VALUE", // required
 * //       status: "CREATING" || "CREATE_FAILED" || "ACTIVE" || "DEPRECATED", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAvailableModuleVersionsCommandInput - {@link ListAvailableModuleVersionsCommandInput}
 * @returns {@link ListAvailableModuleVersionsCommandOutput}
 * @see {@link ListAvailableModuleVersionsCommandInput} for command's `input` shape.
 * @see {@link ListAvailableModuleVersionsCommandOutput} for command's `response` shape.
 * @see {@link RTBFabricClientResolvedConfig | config} for RTBFabricClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request could not be completed because you do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request could not be completed because of an internal server error. Try your call again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request could not be completed because the resource does not exist.</p>
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
 * @example List a module's versions
 * ```javascript
 * // Lists the versions of a module that you can attach, highest version first.
 * const input = {
 *   maxResults: 10,
 *   moduleId: "module-8kq2p9wx3fnv1c5htj7bd0ral"
 * };
 * const command = new ListAvailableModuleVersionsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   moduleId: "module-8kq2p9wx3fnv1c5htj7bd0ral",
 *   versions: [
 *     {
 *       createdAt: "2026-10-15T09:00:00Z",
 *       moduleVersionArn: "arn:aws:rtbfabric:us-east-1::modules/module-8kq2p9wx3fnv1c5htj7bd0ral/versions/1.2.0",
 *       status: "ACTIVE",
 *       version: "1.2.0"
 *     },
 *     {
 *       createdAt: "2026-10-01T12:00:00Z",
 *       moduleVersionArn: "arn:aws:rtbfabric:us-east-1::modules/module-8kq2p9wx3fnv1c5htj7bd0ral/versions/1.1.0",
 *       status: "DEPRECATED",
 *       version: "1.1.0"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListAvailableModuleVersionsCommand extends command<ListAvailableModuleVersionsCommandInput, ListAvailableModuleVersionsCommandOutput>(
  _ep0,
  _mw0,
  "ListAvailableModuleVersions",
  ListAvailableModuleVersions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAvailableModuleVersionsRequest;
      output: ListAvailableModuleVersionsResponse;
    };
    sdk: {
      input: ListAvailableModuleVersionsCommandInput;
      output: ListAvailableModuleVersionsCommandOutput;
    };
  };
}
