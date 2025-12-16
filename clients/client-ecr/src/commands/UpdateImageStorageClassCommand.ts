// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateImageStorageClassRequest, UpdateImageStorageClassResponse } from "../models/models_0";
import { UpdateImageStorageClass$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateImageStorageClassCommand}.
 */
export interface UpdateImageStorageClassCommandInput extends UpdateImageStorageClassRequest {}
/**
 * @public
 *
 * The output of {@link UpdateImageStorageClassCommand}.
 */
export interface UpdateImageStorageClassCommandOutput extends UpdateImageStorageClassResponse, __MetadataBearer {}

/**
 * <p>Transitions an image between storage classes. You can transition images from Amazon ECR standard storage class to Amazon ECR archival storage class for long-term storage, or restore archived images back to Amazon ECR standard.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, UpdateImageStorageClassCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, UpdateImageStorageClassCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * // import type { ECRClientConfig } from "@aws-sdk/client-ecr";
 * const config = {}; // type is ECRClientConfig
 * const client = new ECRClient(config);
 * const input = { // UpdateImageStorageClassRequest
 *   registryId: "STRING_VALUE",
 *   repositoryName: "STRING_VALUE", // required
 *   imageId: { // ImageIdentifier
 *     imageDigest: "STRING_VALUE",
 *     imageTag: "STRING_VALUE",
 *   },
 *   targetStorageClass: "STANDARD" || "ARCHIVE", // required
 * };
 * const command = new UpdateImageStorageClassCommand(input);
 * const response = await client.send(command);
 * // { // UpdateImageStorageClassResponse
 * //   registryId: "STRING_VALUE",
 * //   repositoryName: "STRING_VALUE",
 * //   imageId: { // ImageIdentifier
 * //     imageDigest: "STRING_VALUE",
 * //     imageTag: "STRING_VALUE",
 * //   },
 * //   imageStatus: "ACTIVE" || "ARCHIVED" || "ACTIVATING",
 * // };
 *
 * ```
 *
 * @param UpdateImageStorageClassCommandInput - {@link UpdateImageStorageClassCommandInput}
 * @returns {@link UpdateImageStorageClassCommandOutput}
 * @see {@link UpdateImageStorageClassCommandInput} for command's `input` shape.
 * @see {@link UpdateImageStorageClassCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for ECRClient's `config` shape.
 *
 * @throws {@link ImageNotFoundException} (client fault)
 *  <p>The image requested does not exist in the specified repository.</p>
 *
 * @throws {@link ImageStorageClassUpdateNotSupportedException} (client fault)
 *  <p>The requested image storage class update is not supported.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter is invalid. Review the available parameters for the API
 *             request.</p>
 *
 * @throws {@link RepositoryNotFoundException} (client fault)
 *  <p>The specified repository could not be found. Check the spelling of the specified
 *             repository and ensure that you are performing operations on the correct registry.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server-side issue.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>There was an exception validating this request.</p>
 *
 * @throws {@link ECRServiceException}
 * <p>Base exception class for all service exceptions from ECR service.</p>
 *
 *
 * @example To transition an image to Amazon ECR Archive
 * ```javascript
 * // This example transitions an image with a specific digest in the hello-repository repository to Amazon ECR Archive storage for long-term archival.
 * const input = {
 *   imageId: {
 *     imageDigest: "sha256:0b1a4e0c81c434fa7928e5c4a2651a521ebabc4ff200c65f7e25b99373efca3b"
 *   },
 *   registryId: "724772093679",
 *   repositoryName: "hello-repository",
 *   targetStorageClass: "ARCHIVE"
 * };
 * const command = new UpdateImageStorageClassCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   imageId: {
 *     imageDigest: "sha256:0b1a4e0c81c434fa7928e5c4a2651a521ebabc4ff200c65f7e25b99373efca3b"
 *   },
 *   imageStatus: "ARCHIVED",
 *   registryId: "724772093679",
 *   repositoryName: "hello-repository"
 * }
 * *\/
 * ```
 *
 * @example To restore an archived image to Amazon ECR Standard
 * ```javascript
 * // This example restores an archived image with a specific digest back to Amazon ECR Standard storage.
 * const input = {
 *   imageId: {
 *     imageDigest: "sha256:0b1a4e0c81c434fa7928e5c4a2651a521ebabc4ff200c65f7e25b99373efca3b"
 *   },
 *   registryId: "724772093679",
 *   repositoryName: "hello-repository",
 *   targetStorageClass: "STANDARD"
 * };
 * const command = new UpdateImageStorageClassCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   imageId: {
 *     imageDigest: "sha256:0b1a4e0c81c434fa7928e5c4a2651a521ebabc4ff200c65f7e25b99373efca3b"
 *   },
 *   imageStatus: "ACTIVATING",
 *   registryId: "724772093679",
 *   repositoryName: "hello-repository"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateImageStorageClassCommand extends $Command
  .classBuilder<
    UpdateImageStorageClassCommandInput,
    UpdateImageStorageClassCommandOutput,
    ECRClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ECRClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2ContainerRegistry_V20150921", "UpdateImageStorageClass", {})
  .n("ECRClient", "UpdateImageStorageClassCommand")
  .sc(UpdateImageStorageClass$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateImageStorageClassRequest;
      output: UpdateImageStorageClassResponse;
    };
    sdk: {
      input: UpdateImageStorageClassCommandInput;
      output: UpdateImageStorageClassCommandOutput;
    };
  };
}
