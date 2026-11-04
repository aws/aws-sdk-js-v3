// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetAssetRequest, GetAssetResponse } from "../models/models_0";
import { GetAsset$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetAssetCommand}.
 */
export interface GetAssetCommandInput extends GetAssetRequest {}
/**
 * @public
 *
 * The output of {@link GetAssetCommand}.
 */
export interface GetAssetCommandOutput extends GetAssetResponse, __MetadataBearer {}

/**
 * Gets an asset from the specified agent space
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsAgentClient, GetAssetCommand } from "@aws-sdk/client-devops-agent"; // ES Modules import
 * // const { DevOpsAgentClient, GetAssetCommand } = require("@aws-sdk/client-devops-agent"); // CommonJS import
 * // import type { DevOpsAgentClientConfig } from "@aws-sdk/client-devops-agent";
 * const config = {}; // type is DevOpsAgentClientConfig
 * const client = new DevOpsAgentClient(config);
 * const input = { // GetAssetRequest
 *   agentSpaceId: "STRING_VALUE", // required
 *   assetId: "STRING_VALUE", // required
 *   assetVersion: Number("int"),
 * };
 * const command = new GetAssetCommand(input);
 * const response = await client.send(command);
 * // { // GetAssetResponse
 * //   asset: { // Asset
 * //     assetId: "STRING_VALUE", // required
 * //     assetType: "STRING_VALUE", // required
 * //     metadata: "DOCUMENT_VALUE", // required
 * //     version: Number("int"), // required
 * //     createdAt: new Date("TIMESTAMP"), // required
 * //     updatedAt: new Date("TIMESTAMP"), // required
 * //   },
 * // };
 *
 * ```
 *
 * @param GetAssetCommandInput - {@link GetAssetCommandInput}
 * @returns {@link GetAssetCommandOutput}
 * @see {@link GetAssetCommandInput} for command's `input` shape.
 * @see {@link GetAssetCommandOutput} for command's `response` shape.
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
export class GetAssetCommand extends command<GetAssetCommandInput, GetAssetCommandOutput>(
  _ep0,
  _mw0,
  "GetAsset",
  GetAsset$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAssetRequest;
      output: GetAssetResponse;
    };
    sdk: {
      input: GetAssetCommandInput;
      output: GetAssetCommandOutput;
    };
  };
}
