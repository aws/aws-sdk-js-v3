// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListImageReferrersRequest, ListImageReferrersResponse } from "../models/models_0";
import { ListImageReferrers$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListImageReferrersCommand}.
 */
export interface ListImageReferrersCommandInput extends ListImageReferrersRequest {}
/**
 * @public
 *
 * The output of {@link ListImageReferrersCommand}.
 */
export interface ListImageReferrersCommandOutput extends ListImageReferrersResponse, __MetadataBearer {}

/**
 * <p>Lists the artifacts associated with a specified subject image.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, ListImageReferrersCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, ListImageReferrersCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * // import type { ECRClientConfig } from "@aws-sdk/client-ecr";
 * const config = {}; // type is ECRClientConfig
 * const client = new ECRClient(config);
 * const input = { // ListImageReferrersRequest
 *   registryId: "STRING_VALUE",
 *   repositoryName: "STRING_VALUE", // required
 *   subjectId: { // SubjectIdentifier
 *     imageDigest: "STRING_VALUE", // required
 *   },
 *   filter: { // ListImageReferrersFilter
 *     artifactTypes: [ // ArtifactTypeList
 *       "STRING_VALUE",
 *     ],
 *     artifactStatus: "ACTIVE" || "ARCHIVED" || "ACTIVATING" || "ANY",
 *   },
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListImageReferrersCommand(input);
 * const response = await client.send(command);
 * // { // ListImageReferrersResponse
 * //   referrers: [ // ImageReferrerList
 * //     { // ImageReferrer
 * //       digest: "STRING_VALUE", // required
 * //       mediaType: "STRING_VALUE", // required
 * //       artifactType: "STRING_VALUE",
 * //       size: Number("long"), // required
 * //       annotations: { // Annotations
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       artifactStatus: "ACTIVE" || "ARCHIVED" || "ACTIVATING",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListImageReferrersCommandInput - {@link ListImageReferrersCommandInput}
 * @returns {@link ListImageReferrersCommandOutput}
 * @see {@link ListImageReferrersCommandInput} for command's `input` shape.
 * @see {@link ListImageReferrersCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for ECRClient's `config` shape.
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
 * @example To list both active and archived artifacts
 * ```javascript
 * // This example lists all artifacts including those that have been archived, by specifying the artifactStatus filter as ANY.
 * const input = {
 *   filter: {
 *     artifactStatus: "ANY"
 *   },
 *   repositoryName: "sample-repo",
 *   subjectId: {
 *     imageDigest: "sha256:943e640159415616581703a53fa4ed87e96740655fd67daf2d2146a35337bce5"
 *   }
 * };
 * const command = new ListImageReferrersCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   referrers: [
 *     {
 *       annotations: {
 *         dev.sigstore.bundle.content: "dsse-envelope",
 *         dev.sigstore.bundle.predicateType: "https://sigstore.dev/cosign/sign/v1",
 *         org.opencontainers.image.created: "2025-11-17T22:00:33Z"
 *       },
 *       artifactStatus: "ACTIVE",
 *       artifactType: "application/vnd.dev.sigstore.bundle.v0.3+json",
 *       digest: "sha256:270c60be5b6ed41e6e7c505ac0c4e2577748affc14147bcba76b533604dc7a07",
 *       mediaType: "application/vnd.oci.image.manifest.v1+json",
 *       size: 888
 *     },
 *     {
 *       annotations: {
 *         dev.sigstore.bundle.predicateType: "https://sigstore.dev/cosign/sign/v1",
 *         org.opencontainers.image.created: "2025-10-15T14:30:00Z"
 *       },
 *       artifactStatus: "ARCHIVED",
 *       artifactType: "application/vnd.dev.sigstore.bundle.v0.2+json",
 *       digest: "sha256:5a1c89f2b3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0",
 *       mediaType: "application/vnd.oci.image.manifest.v1+json",
 *       size: 856
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @example To list artifacts associated with a subject image
 * ```javascript
 * // This example lists all artifacts (such as Sigstore signatures) that reference a specific container image in the sample-repo repository.
 * const input = {
 *   repositoryName: "sample-repo",
 *   subjectId: {
 *     imageDigest: "sha256:943e640159415616581703a53fa4ed87e96740655fd67daf2d2146a35337bce5"
 *   }
 * };
 * const command = new ListImageReferrersCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   referrers: [
 *     {
 *       annotations: {
 *         dev.sigstore.bundle.content: "dsse-envelope",
 *         dev.sigstore.bundle.predicateType: "https://sigstore.dev/cosign/sign/v1",
 *         org.opencontainers.image.created: "2025-11-17T22:00:33Z"
 *       },
 *       artifactStatus: "ACTIVE",
 *       artifactType: "application/vnd.dev.sigstore.bundle.v0.3+json",
 *       digest: "sha256:270c60be5b6ed41e6e7c505ac0c4e2577748affc14147bcba76b533604dc7a07",
 *       mediaType: "application/vnd.oci.image.manifest.v1+json",
 *       size: 888
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @example To list artifacts of a specific type
 * ```javascript
 * // This example lists only Sigstore bundle artifacts associated with a subject image by filtering on the artifact type.
 * const input = {
 *   filter: {
 *     artifactTypes: [
 *       "application/vnd.dev.sigstore.bundle.v0.3+json"
 *     ]
 *   },
 *   repositoryName: "sample-repo",
 *   subjectId: {
 *     imageDigest: "sha256:943e640159415616581703a53fa4ed87e96740655fd67daf2d2146a35337bce5"
 *   }
 * };
 * const command = new ListImageReferrersCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   referrers: [
 *     {
 *       annotations: {
 *         dev.sigstore.bundle.content: "dsse-envelope",
 *         dev.sigstore.bundle.predicateType: "https://sigstore.dev/cosign/sign/v1",
 *         org.opencontainers.image.created: "2025-11-17T22:00:33Z"
 *       },
 *       artifactStatus: "ACTIVE",
 *       artifactType: "application/vnd.dev.sigstore.bundle.v0.3+json",
 *       digest: "sha256:270c60be5b6ed41e6e7c505ac0c4e2577748affc14147bcba76b533604dc7a07",
 *       mediaType: "application/vnd.oci.image.manifest.v1+json",
 *       size: 888
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListImageReferrersCommand extends $Command
  .classBuilder<
    ListImageReferrersCommandInput,
    ListImageReferrersCommandOutput,
    ECRClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ECRClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2ContainerRegistry_V20150921", "ListImageReferrers", {})
  .n("ECRClient", "ListImageReferrersCommand")
  .sc(ListImageReferrers$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListImageReferrersRequest;
      output: ListImageReferrersResponse;
    };
    sdk: {
      input: ListImageReferrersCommandInput;
      output: ListImageReferrersCommandOutput;
    };
  };
}
