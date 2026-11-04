// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetAssetFileRequest, GetAssetFileResponse } from "../models/models_0";
import { GetAssetFile$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetAssetFileCommand}.
 */
export interface GetAssetFileCommandInput extends GetAssetFileRequest {}
/**
 * @public
 *
 * The output of {@link GetAssetFileCommand}.
 */
export interface GetAssetFileCommandOutput extends GetAssetFileResponse, __MetadataBearer {}

/**
 * Gets a file from an asset
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsAgentClient, GetAssetFileCommand } from "@aws-sdk/client-devops-agent"; // ES Modules import
 * // const { DevOpsAgentClient, GetAssetFileCommand } = require("@aws-sdk/client-devops-agent"); // CommonJS import
 * // import type { DevOpsAgentClientConfig } from "@aws-sdk/client-devops-agent";
 * const config = {}; // type is DevOpsAgentClientConfig
 * const client = new DevOpsAgentClient(config);
 * const input = { // GetAssetFileRequest
 *   agentSpaceId: "STRING_VALUE", // required
 *   assetId: "STRING_VALUE", // required
 *   path: "STRING_VALUE", // required
 *   assetVersion: Number("int"),
 * };
 * const command = new GetAssetFileCommand(input);
 * const response = await client.send(command);
 * // { // GetAssetFileResponse
 * //   file: { // AssetFile
 * //     path: "STRING_VALUE", // required
 * //     content: { // AssetFileBody Union: only one key present
 * //       bytes: new Uint8Array(),
 * //       text: "STRING_VALUE",
 * //     },
 * //     metadata: "DOCUMENT_VALUE",
 * //     version: Number("int"), // required
 * //     createdAt: new Date("TIMESTAMP"), // required
 * //     updatedAt: new Date("TIMESTAMP"), // required
 * //   },
 * // };
 *
 * ```
 *
 * @param GetAssetFileCommandInput - {@link GetAssetFileCommandInput}
 * @returns {@link GetAssetFileCommandOutput}
 * @see {@link GetAssetFileCommandInput} for command's `input` shape.
 * @see {@link GetAssetFileCommandOutput} for command's `response` shape.
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
export class GetAssetFileCommand extends command<GetAssetFileCommandInput, GetAssetFileCommandOutput>(
  _ep0,
  _mw0,
  "GetAssetFile",
  GetAssetFile$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAssetFileRequest;
      output: GetAssetFileResponse;
    };
    sdk: {
      input: GetAssetFileCommandInput;
      output: GetAssetFileCommandOutput;
    };
  };
}
