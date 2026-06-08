// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DevOpsAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DevOpsAgentClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateAssetFileRequest, CreateAssetFileResponse } from "../models/models_0";
import { CreateAssetFile$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateAssetFileCommand}.
 */
export interface CreateAssetFileCommandInput extends CreateAssetFileRequest {}
/**
 * @public
 *
 * The output of {@link CreateAssetFileCommand}.
 */
export interface CreateAssetFileCommandOutput extends CreateAssetFileResponse, __MetadataBearer {}

/**
 * <p>Creates a file in an asset</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsAgentClient, CreateAssetFileCommand } from "@aws-sdk/client-devops-agent"; // ES Modules import
 * // const { DevOpsAgentClient, CreateAssetFileCommand } = require("@aws-sdk/client-devops-agent"); // CommonJS import
 * // import type { DevOpsAgentClientConfig } from "@aws-sdk/client-devops-agent";
 * const config = {}; // type is DevOpsAgentClientConfig
 * const client = new DevOpsAgentClient(config);
 * const input = { // CreateAssetFileRequest
 *   agentSpaceId: "STRING_VALUE", // required
 *   assetId: "STRING_VALUE", // required
 *   path: "STRING_VALUE", // required
 *   content: { // AssetFileBody Union: only one key present
 *     bytes: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *     text: "STRING_VALUE",
 *   },
 *   metadata: "DOCUMENT_VALUE",
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreateAssetFileCommand(input);
 * const response = await client.send(command);
 * // { // CreateAssetFileResponse
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
 * @param CreateAssetFileCommandInput - {@link CreateAssetFileCommandInput}
 * @returns {@link CreateAssetFileCommandOutput}
 * @see {@link CreateAssetFileCommandInput} for command's `input` shape.
 * @see {@link CreateAssetFileCommandOutput} for command's `response` shape.
 * @see {@link DevOpsAgentClientResolvedConfig | config} for DevOpsAgentClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to the requested resource is denied due to insufficient permissions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request conflicts with the current state of the resource.</p>
 *
 * @throws {@link ContentSizeExceededException} (client fault)
 *  <p>This exception is thrown when the content size exceeds the allowed limit.</p>
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
export class CreateAssetFileCommand extends $Command
  .classBuilder<
    CreateAssetFileCommandInput,
    CreateAssetFileCommandOutput,
    DevOpsAgentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DevOpsAgentClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DevOpsAgent", "CreateAssetFile", {})
  .n("DevOpsAgentClient", "CreateAssetFileCommand")
  .sc(CreateAssetFile$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAssetFileRequest;
      output: CreateAssetFileResponse;
    };
    sdk: {
      input: CreateAssetFileCommandInput;
      output: CreateAssetFileCommandOutput;
    };
  };
}
