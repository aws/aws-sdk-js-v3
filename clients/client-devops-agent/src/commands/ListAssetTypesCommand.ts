// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListAssetTypesRequest, ListAssetTypesResponse } from "../models/models_0";
import { ListAssetTypes$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListAssetTypesCommand}.
 */
export interface ListAssetTypesCommandInput extends ListAssetTypesRequest {}
/**
 * @public
 *
 * The output of {@link ListAssetTypesCommand}.
 */
export interface ListAssetTypesCommandOutput extends ListAssetTypesResponse, __MetadataBearer {}

/**
 * Lists the supported asset types
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsAgentClient, ListAssetTypesCommand } from "@aws-sdk/client-devops-agent"; // ES Modules import
 * // const { DevOpsAgentClient, ListAssetTypesCommand } = require("@aws-sdk/client-devops-agent"); // CommonJS import
 * // import type { DevOpsAgentClientConfig } from "@aws-sdk/client-devops-agent";
 * const config = {}; // type is DevOpsAgentClientConfig
 * const client = new DevOpsAgentClient(config);
 * const input = { // ListAssetTypesRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListAssetTypesCommand(input);
 * const response = await client.send(command);
 * // { // ListAssetTypesResponse
 * //   items: [ // AssetTypeList // required
 * //     { // AssetTypeSummary
 * //       assetType: "STRING_VALUE", // required
 * //       description: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAssetTypesCommandInput - {@link ListAssetTypesCommandInput}
 * @returns {@link ListAssetTypesCommandOutput}
 * @see {@link ListAssetTypesCommandInput} for command's `input` shape.
 * @see {@link ListAssetTypesCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The requested resource could not be found.
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
export class ListAssetTypesCommand extends command<ListAssetTypesCommandInput, ListAssetTypesCommandOutput>(
  _ep0,
  _mw0,
  "ListAssetTypes",
  ListAssetTypes$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAssetTypesRequest;
      output: ListAssetTypesResponse;
    };
    sdk: {
      input: ListAssetTypesCommandInput;
      output: ListAssetTypesCommandOutput;
    };
  };
}
