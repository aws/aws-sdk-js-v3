// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CreatePresignedUrlInput, CreatePresignedUrlOutput } from "../models/models_0";
import type { QAppsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QAppsClient";
import { CreatePresignedUrl } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreatePresignedUrlCommand}.
 */
export interface CreatePresignedUrlCommandInput extends CreatePresignedUrlInput {}
/**
 * @public
 *
 * The output of {@link CreatePresignedUrlCommand}.
 */
export interface CreatePresignedUrlCommandOutput extends CreatePresignedUrlOutput, __MetadataBearer {}

/**
 * <p>Creates a presigned URL for an S3 POST operation to upload a file. You can use this URL to set a default file for a <code>FileUploadCard</code> in a Q App definition or to provide a file for a single Q App run. The <code>scope</code> parameter determines how the file will be used, either at the app definition level or the app session level.</p> <note> <p>The IAM permissions are derived from the <code>qapps:ImportDocument</code> action. For more information on the IAM policy for Amazon Q Apps, see <a href="https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/deploy-q-apps-iam-permissions.html">IAM permissions for using Amazon Q Apps</a>.</p> </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QAppsClient, CreatePresignedUrlCommand } from "@aws-sdk/client-qapps"; // ES Modules import
 * // const { QAppsClient, CreatePresignedUrlCommand } = require("@aws-sdk/client-qapps"); // CommonJS import
 * // import type { QAppsClientConfig } from "@aws-sdk/client-qapps";
 * const config = {}; // type is QAppsClientConfig
 * const client = new QAppsClient(config);
 * const input = { // CreatePresignedUrlInput
 *   instanceId: "STRING_VALUE", // required
 *   cardId: "STRING_VALUE", // required
 *   appId: "STRING_VALUE", // required
 *   fileContentsSha256: "STRING_VALUE", // required
 *   fileName: "STRING_VALUE", // required
 *   scope: "APPLICATION" || "SESSION", // required
 *   sessionId: "STRING_VALUE",
 * };
 * const command = new CreatePresignedUrlCommand(input);
 * const response = await client.send(command);
 * // { // CreatePresignedUrlOutput
 * //   fileId: "STRING_VALUE", // required
 * //   presignedUrl: "STRING_VALUE", // required
 * //   presignedUrlFields: { // PresignedUrlFields // required
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   presignedUrlExpiration: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param CreatePresignedUrlCommandInput - {@link CreatePresignedUrlCommandInput}
 * @returns {@link CreatePresignedUrlCommandOutput}
 * @see {@link CreatePresignedUrlCommandInput} for command's `input` shape.
 * @see {@link CreatePresignedUrlCommandOutput} for command's `response` shape.
 * @see {@link QAppsClientResolvedConfig | config} for QAppsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The client is not authorized to perform the requested operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal service error occurred while processing the request.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The requested operation could not be completed because too many requests were sent at once. Wait a bit and try again later.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>The client is not authenticated or authorized to perform the requested operation.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input failed to satisfy the constraints specified by the service.</p>
 *
 * @throws {@link QAppsServiceException}
 * <p>Base exception class for all service exceptions from QApps service.</p>
 *
 *
 * @example Upload a file to a specific session
 * ```javascript
 * //
 * const input = {
 *   appId: "4263767c-d889-4cb2-a8f6-8b649bc66af0",
 *   cardId: "82f69028-22a9-4bea-8727-0eabf58e9fed",
 *   fileContentsSha256: "wXY7GD8m4fmHhdtuQyBdXzNQpdCseVwBcOBIlzfm+kg=",
 *   fileName: "myFile.txt",
 *   instanceId: "0b95c9c4-89cc-4aa8-9aae-aa91cbec699f",
 *   scope: "SESSION",
 *   sessionId: "4f0e5b87-9d38-41cd-9eb4-ebce2f2917cc"
 * };
 * const command = new CreatePresignedUrlCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   fileId: "412aa1b4-341c-45af-936d-da52f8a1a3b4",
 *   presignedUrl: "https://qapps-uploaded-files-us-east-1-c819fab7cf78c9205158297913deb9e0.s3.us-east-1.amazonaws.com/",
 *   presignedUrlExpiration: "2024-09-14T00:11:54.232Z",
 *   presignedUrlFields: {
 *     x-amz-checksum-sha256: "wXY7GD8m4fmHhdtuQyBdXzNQpdCseVwBcOBIlzfm+kg=",
 *     x-amz-server-side-encryption: "aws:kms",
 *     x-amz-server-side-encryption-aws-kms-key-id: "0a6a474b-f2ca-46ea-9e72-deea9077d92f",
 *     x-amz-server-side-encryption-context: "eyJBUFBMSUNBVElPTl9JRCI6IjAxMjM0NTY3ODkwMSJ9"
 *   }
 * }
 * *\/
 * ```
 *
 * @example Upload a file into a application
 * ```javascript
 * //
 * const input = {
 *   appId: "4263767c-d889-4cb2-a8f6-8b649bc66af0",
 *   cardId: "7a11f34b-42d4-4bc8-b668-ae4a788dae1e",
 *   fileContentsSha256: "wXY7GD8m4fmHhdtuQyBdXzNQpdCseVwBcOBIlzfm+kg=",
 *   fileName: "anApplicationFile.txt",
 *   instanceId: "0b95c9c4-89cc-4aa8-9aae-aa91cbec699f",
 *   scope: "APPLICATION"
 * };
 * const command = new CreatePresignedUrlCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   fileId: "412aa1b4-341c-45af-936d-da52f8a1a3b4",
 *   presignedUrl: "https://qapps-uploaded-files-us-east-1-c819fab7cf78c9205158297913deb9e0.s3.us-east-1.amazonaws.com/",
 *   presignedUrlExpiration: "2024-09-14T00:11:54.232Z",
 *   presignedUrlFields: {
 *     x-amz-checksum-sha256: "wXY7GD8m4fmHhdtuQyBdXzNQpdCseVwBcOBIlzfm+kg=",
 *     x-amz-server-side-encryption: "aws:kms",
 *     x-amz-server-side-encryption-aws-kms-key-id: "0a6a474b-f2ca-46ea-9e72-deea9077d92f",
 *     x-amz-server-side-encryption-context: "eyJBUFBMSUNBVElPTl9JRCI6IjAxMjM0NTY3ODkwMSJ9"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreatePresignedUrlCommand extends $Command
  .classBuilder<
    CreatePresignedUrlCommandInput,
    CreatePresignedUrlCommandOutput,
    QAppsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QAppsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("QAppsService", "CreatePresignedUrl", {})
  .n("QAppsClient", "CreatePresignedUrlCommand")
  .sc(CreatePresignedUrl)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreatePresignedUrlInput;
      output: CreatePresignedUrlOutput;
    };
    sdk: {
      input: CreatePresignedUrlCommandInput;
      output: CreatePresignedUrlCommandOutput;
    };
  };
}
