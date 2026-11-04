// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListAssetFilesRequest, ListAssetFilesResponse } from "../models/models_0";
import { ListAssetFiles$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListAssetFilesCommand}.
 */
export interface ListAssetFilesCommandInput extends ListAssetFilesRequest {}
/**
 * @public
 *
 * The output of {@link ListAssetFilesCommand}.
 */
export interface ListAssetFilesCommandOutput extends ListAssetFilesResponse, __MetadataBearer {}

/**
 * Lists files in an asset
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsAgentClient, ListAssetFilesCommand } from "@aws-sdk/client-devops-agent"; // ES Modules import
 * // const { DevOpsAgentClient, ListAssetFilesCommand } = require("@aws-sdk/client-devops-agent"); // CommonJS import
 * // import type { DevOpsAgentClientConfig } from "@aws-sdk/client-devops-agent";
 * const config = {}; // type is DevOpsAgentClientConfig
 * const client = new DevOpsAgentClient(config);
 * const input = { // ListAssetFilesRequest
 *   agentSpaceId: "STRING_VALUE", // required
 *   assetId: "STRING_VALUE", // required
 *   assetVersion: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListAssetFilesCommand(input);
 * const response = await client.send(command);
 * // { // ListAssetFilesResponse
 * //   items: [ // AssetFileSummaryList // required
 * //     { // AssetFileSummary
 * //       path: "STRING_VALUE", // required
 * //       metadata: "DOCUMENT_VALUE",
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
 * @param ListAssetFilesCommandInput - {@link ListAssetFilesCommandInput}
 * @returns {@link ListAssetFilesCommandOutput}
 * @see {@link ListAssetFilesCommandInput} for command's `input` shape.
 * @see {@link ListAssetFilesCommandOutput} for command's `response` shape.
 * @see {@link DevOpsAgentClientResolvedConfig | config} for DevOpsAgentClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Access to the requested resource is denied due to insufficient permissions.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * This exception is thrown when an unexpected error occurs in the processing of a request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The requested resource could not be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was throttled due to too many requests. Please slow down and try again.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by the service.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request conflicts with the current state of the resource.
 *
 * @throws {@link ContentSizeExceededException} (client fault)
 *
 * This exception is thrown when the content size exceeds the allowed limit.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more parameters provided in the request are invalid.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The request would exceed the service quota limit.
 *
 * @throws {@link DevOpsAgentServiceException}
 *
 * Base exception class for all service exceptions from DevOpsAgent service.
 *
 * @public
 */
export class ListAssetFilesCommand extends command<ListAssetFilesCommandInput, ListAssetFilesCommandOutput>(
  _ep0,
  _mw0,
  "ListAssetFiles",
  ListAssetFiles$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAssetFilesRequest;
      output: ListAssetFilesResponse;
    };
    sdk: {
      input: ListAssetFilesCommandInput;
      output: ListAssetFilesCommandOutput;
    };
  };
}
