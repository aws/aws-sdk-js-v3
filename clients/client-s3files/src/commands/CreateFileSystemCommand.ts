// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateFileSystemRequest, CreateFileSystemResponse } from "../models/models_0";
import type { S3FilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3FilesClient";
import { CreateFileSystem$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateFileSystemCommand}.
 */
export interface CreateFileSystemCommandInput extends CreateFileSystemRequest {}
/**
 * @public
 *
 * The output of {@link CreateFileSystemCommand}.
 */
export interface CreateFileSystemCommandOutput extends CreateFileSystemResponse, __MetadataBearer {}

/**
 * <p>Creates an S3 File System resource scoped to a bucket or prefix within a bucket, enabling file system access to S3 data. To create a file system, you need an S3 bucket and an IAM role that grants the service permission to access the bucket.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3FilesClient, CreateFileSystemCommand } from "@aws-sdk/client-s3files"; // ES Modules import
 * // const { S3FilesClient, CreateFileSystemCommand } = require("@aws-sdk/client-s3files"); // CommonJS import
 * // import type { S3FilesClientConfig } from "@aws-sdk/client-s3files";
 * const config = {}; // type is S3FilesClientConfig
 * const client = new S3FilesClient(config);
 * const input = { // CreateFileSystemRequest
 *   bucket: "STRING_VALUE", // required
 *   prefix: "STRING_VALUE",
 *   clientToken: "STRING_VALUE",
 *   kmsKeyId: "STRING_VALUE",
 *   roleArn: "STRING_VALUE", // required
 *   tags: [ // TagList
 *     { // Tag
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 *   acceptBucketWarning: true || false,
 * };
 * const command = new CreateFileSystemCommand(input);
 * const response = await client.send(command);
 * // { // CreateFileSystemResponse
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
 * @param CreateFileSystemCommandInput - {@link CreateFileSystemCommandInput}
 * @returns {@link CreateFileSystemCommandOutput}
 * @see {@link CreateFileSystemCommandInput} for command's `input` shape.
 * @see {@link CreateFileSystemCommandOutput} for command's `response` shape.
 * @see {@link S3FilesClientResolvedConfig | config} for S3FilesClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request conflicts with the current state of the resource. This can occur when trying to create a resource that already exists or delete a resource that is in use.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found. Verify that the resource exists and that you have permission to access it.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request would exceed a service quota. Review your service quotas and either delete resources or request a quota increase.</p>
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
export class CreateFileSystemCommand extends $Command
  .classBuilder<
    CreateFileSystemCommandInput,
    CreateFileSystemCommandOutput,
    S3FilesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: S3FilesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("S3Files", "CreateFileSystem", {})
  .n("S3FilesClient", "CreateFileSystemCommand")
  .sc(CreateFileSystem$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateFileSystemRequest;
      output: CreateFileSystemResponse;
    };
    sdk: {
      input: CreateFileSystemCommandInput;
      output: CreateFileSystemCommandOutput;
    };
  };
}
