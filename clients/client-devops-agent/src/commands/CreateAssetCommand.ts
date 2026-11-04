// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateAssetRequest, CreateAssetResponse } from "../models/models_0";
import { CreateAsset$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateAssetCommand}.
 */
export interface CreateAssetCommandInput extends CreateAssetRequest {}
/**
 * @public
 *
 * The output of {@link CreateAssetCommand}.
 */
export interface CreateAssetCommandOutput extends CreateAssetResponse, __MetadataBearer {}

/**
 * Creates a new asset in the specified agent space
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsAgentClient, CreateAssetCommand } from "@aws-sdk/client-devops-agent"; // ES Modules import
 * // const { DevOpsAgentClient, CreateAssetCommand } = require("@aws-sdk/client-devops-agent"); // CommonJS import
 * // import type { DevOpsAgentClientConfig } from "@aws-sdk/client-devops-agent";
 * const config = {}; // type is DevOpsAgentClientConfig
 * const client = new DevOpsAgentClient(config);
 * const input = { // CreateAssetRequest
 *   agentSpaceId: "STRING_VALUE", // required
 *   assetType: "STRING_VALUE", // required
 *   metadata: "DOCUMENT_VALUE",
 *   content: { // AssetContent Union: only one key present
 *     file: { // AssetFileContent
 *       path: "STRING_VALUE", // required
 *       body: { // AssetFileBody Union: only one key present
 *         bytes: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *         text: "STRING_VALUE",
 *       },
 *       metadata: "DOCUMENT_VALUE",
 *     },
 *     zip: { // AssetZipContent
 *       zipFile: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")       // required
 *     },
 *     sourceUrl: { // AssetSourceUrlContent
 *       url: "STRING_VALUE", // required
 *     },
 *   },
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreateAssetCommand(input);
 * const response = await client.send(command);
 * // { // CreateAssetResponse
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
 * @param CreateAssetCommandInput - {@link CreateAssetCommandInput}
 * @returns {@link CreateAssetCommandOutput}
 * @see {@link CreateAssetCommandInput} for command's `input` shape.
 * @see {@link CreateAssetCommandOutput} for command's `response` shape.
 * @see {@link DevOpsAgentClientResolvedConfig | config} for DevOpsAgentClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Access to the requested resource is denied due to insufficient permissions.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request conflicts with the current state of the resource.
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
export class CreateAssetCommand extends command<CreateAssetCommandInput, CreateAssetCommandOutput>(
  _ep0,
  _mw0,
  "CreateAsset",
  CreateAsset$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAssetRequest;
      output: CreateAssetResponse;
    };
    sdk: {
      input: CreateAssetCommandInput;
      output: CreateAssetCommandOutput;
    };
  };
}
