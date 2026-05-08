// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetFileSystemRequest, GetFileSystemResponse } from "../models/models_0";
import type { S3FilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3FilesClient";
import { GetFileSystem$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetFileSystemCommand}.
 */
export interface GetFileSystemCommandInput extends GetFileSystemRequest {}
/**
 * @public
 *
 * The output of {@link GetFileSystemCommand}.
 */
export interface GetFileSystemCommandOutput extends GetFileSystemResponse, __MetadataBearer {}

/**
 * <p>Returns resource information for the specified S3 File System including status, configuration, and metadata.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3FilesClient, GetFileSystemCommand } from "@aws-sdk/client-s3files"; // ES Modules import
 * // const { S3FilesClient, GetFileSystemCommand } = require("@aws-sdk/client-s3files"); // CommonJS import
 * // import type { S3FilesClientConfig } from "@aws-sdk/client-s3files";
 * const config = {}; // type is S3FilesClientConfig
 * const client = new S3FilesClient(config);
 * const input = { // GetFileSystemRequest
 *   fileSystemId: "STRING_VALUE", // required
 * };
 * const command = new GetFileSystemCommand(input);
 * const response = await client.send(command);
 * // { // GetFileSystemResponse
 * //   creationTime: new Date("TIMESTAMP"),
 * //   fileSystemArn: "STRING_VALUE",
 * //   fileSystemId: "STRING_VALUE",
 * //   bucket: "STRING_VALUE",
 * //   prefix: "STRING_VALUE",
 * //   clientToken: "STRING_VALUE",
 * //   kmsKeyId: "STRING_VALUE",
 * //   status: "available" || "creating" || "deleting" || "deleted" || "error" || "updating",
 * //   statusMessage: "STRING_VALUE",
 * //   roleArn: "STRING_VALUE",
 * //   ownerId: "STRING_VALUE",
 * //   tags: [ // TagList
 * //     { // Tag
 * //       key: "STRING_VALUE", // required
 * //       value: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   name: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetFileSystemCommandInput - {@link GetFileSystemCommandInput}
 * @returns {@link GetFileSystemCommandOutput}
 * @see {@link GetFileSystemCommandInput} for command's `input` shape.
 * @see {@link GetFileSystemCommandOutput} for command's `response` shape.
 * @see {@link S3FilesClientResolvedConfig | config} for S3FilesClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found. Verify that the resource exists and that you have permission to access it.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input parameters are not valid. Check the parameter values and try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled. Retry your request using exponential backoff.</p>
 *
 * @throws {@link S3FilesServiceException}
 * <p>Base exception class for all service exceptions from S3Files service.</p>
 *
 *
 * @public
 */
export class GetFileSystemCommand extends $Command
  .classBuilder<
    GetFileSystemCommandInput,
    GetFileSystemCommandOutput,
    S3FilesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: S3FilesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("S3Files", "GetFileSystem", {})
  .n("S3FilesClient", "GetFileSystemCommand")
  .sc(GetFileSystem$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetFileSystemRequest;
      output: GetFileSystemResponse;
    };
    sdk: {
      input: GetFileSystemCommandInput;
      output: GetFileSystemCommandOutput;
    };
  };
}
