// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListAssetVersionsRequest, ListAssetVersionsResponse } from "../models/models_0";
import { ListAssetVersions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListAssetVersionsCommand}.
 */
export interface ListAssetVersionsCommandInput extends ListAssetVersionsRequest {}
/**
 * @public
 *
 * The output of {@link ListAssetVersionsCommand}.
 */
export interface ListAssetVersionsCommandOutput extends ListAssetVersionsResponse, __MetadataBearer {}

/**
 * <p>Lists versions of an asset in the specified agent space</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsAgentClient, ListAssetVersionsCommand } from "@aws-sdk/client-devops-agent"; // ES Modules import
 * // const { DevOpsAgentClient, ListAssetVersionsCommand } = require("@aws-sdk/client-devops-agent"); // CommonJS import
 * // import type { DevOpsAgentClientConfig } from "@aws-sdk/client-devops-agent";
 * const config = {}; // type is DevOpsAgentClientConfig
 * const client = new DevOpsAgentClient(config);
 * const input = { // ListAssetVersionsRequest
 *   agentSpaceId: "STRING_VALUE", // required
 *   assetId: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListAssetVersionsCommand(input);
 * const response = await client.send(command);
 * // { // ListAssetVersionsResponse
 * //   items: [ // AssetVersionMetadataList // required
 * //     { // AssetVersionMetadata
 * //       version: Number("int"), // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAssetVersionsCommandInput - {@link ListAssetVersionsCommandInput}
 * @returns {@link ListAssetVersionsCommandOutput}
 * @see {@link ListAssetVersionsCommandInput} for command's `input` shape.
 * @see {@link ListAssetVersionsCommandOutput} for command's `response` shape.
 * @see {@link DevOpsAgentClientResolvedConfig | config} for DevOpsAgentClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to the requested resource is denied due to insufficient permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception is thrown when an unexpected error occurs in the processing of a request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource could not be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled due to too many requests. Please slow down and try again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the service.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request conflicts with the current state of the resource.</p>
 *
 * @throws {@link ContentSizeExceededException} (client fault)
 *  <p>This exception is thrown when the content size exceeds the allowed limit.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters provided in the request are invalid.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request would exceed the service quota limit.</p>
 *
 * @throws {@link DevOpsAgentServiceException}
 * <p>Base exception class for all service exceptions from DevOpsAgent service.</p>
 *
 *
 * @public
 */
export class ListAssetVersionsCommand extends command<ListAssetVersionsCommandInput, ListAssetVersionsCommandOutput>(
  _ep0,
  _mw0,
  "ListAssetVersions",
  ListAssetVersions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAssetVersionsRequest;
      output: ListAssetVersionsResponse;
    };
    sdk: {
      input: ListAssetVersionsCommandInput;
      output: ListAssetVersionsCommandOutput;
    };
  };
}
