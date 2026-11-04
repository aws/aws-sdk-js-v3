// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetAssetContentRequest, GetAssetContentResponse } from "../models/models_0";
import { GetAssetContent$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetAssetContentCommand}.
 */
export interface GetAssetContentCommandInput extends GetAssetContentRequest {}
/**
 * @public
 *
 * The output of {@link GetAssetContentCommand}.
 */
export interface GetAssetContentCommandOutput extends GetAssetContentResponse, __MetadataBearer {}

/**
 * Gets an asset's content as a zip bundle
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsAgentClient, GetAssetContentCommand } from "@aws-sdk/client-devops-agent"; // ES Modules import
 * // const { DevOpsAgentClient, GetAssetContentCommand } = require("@aws-sdk/client-devops-agent"); // CommonJS import
 * // import type { DevOpsAgentClientConfig } from "@aws-sdk/client-devops-agent";
 * const config = {}; // type is DevOpsAgentClientConfig
 * const client = new DevOpsAgentClient(config);
 * const input = { // GetAssetContentRequest
 *   agentSpaceId: "STRING_VALUE", // required
 *   assetId: "STRING_VALUE", // required
 *   assetVersion: Number("int"),
 * };
 * const command = new GetAssetContentCommand(input);
 * const response = await client.send(command);
 * // { // GetAssetContentResponse
 * //   content: { // AssetZipContent
 * //     zipFile: new Uint8Array(), // required
 * //   },
 * //   version: Number("int"), // required
 * // };
 *
 * ```
 *
 * @param GetAssetContentCommandInput - {@link GetAssetContentCommandInput}
 * @returns {@link GetAssetContentCommandOutput}
 * @see {@link GetAssetContentCommandInput} for command's `input` shape.
 * @see {@link GetAssetContentCommandOutput} for command's `response` shape.
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
export class GetAssetContentCommand extends command<GetAssetContentCommandInput, GetAssetContentCommandOutput>(
  _ep0,
  _mw0,
  "GetAssetContent",
  GetAssetContent$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAssetContentRequest;
      output: GetAssetContentResponse;
    };
    sdk: {
      input: GetAssetContentCommandInput;
      output: GetAssetContentCommandOutput;
    };
  };
}
