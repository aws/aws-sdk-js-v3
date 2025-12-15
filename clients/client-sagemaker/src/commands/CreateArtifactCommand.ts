// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateArtifactRequest, CreateArtifactResponse } from "../models/models_0";
import type { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { CreateArtifact$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateArtifactCommand}.
 */
export interface CreateArtifactCommandInput extends CreateArtifactRequest {}
/**
 * @public
 *
 * The output of {@link CreateArtifactCommand}.
 */
export interface CreateArtifactCommandOutput extends CreateArtifactResponse, __MetadataBearer {}

/**
 * <p>Creates an <i>artifact</i>. An artifact is a lineage tracking entity that represents a URI addressable object or data. Some examples are the S3 URI of a dataset and the ECR registry path of an image. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/lineage-tracking.html">Amazon SageMaker ML Lineage Tracking</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateArtifactCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateArtifactCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // CreateArtifactRequest
 *   ArtifactName: "STRING_VALUE",
 *   Source: { // ArtifactSource
 *     SourceUri: "STRING_VALUE", // required
 *     SourceTypes: [ // ArtifactSourceTypes
 *       { // ArtifactSourceType
 *         SourceIdType: "MD5Hash" || "S3ETag" || "S3Version" || "Custom", // required
 *         Value: "STRING_VALUE", // required
 *       },
 *     ],
 *   },
 *   ArtifactType: "STRING_VALUE", // required
 *   Properties: { // ArtifactProperties
 *     "<keys>": "STRING_VALUE",
 *   },
 *   MetadataProperties: { // MetadataProperties
 *     CommitId: "STRING_VALUE",
 *     Repository: "STRING_VALUE",
 *     GeneratedBy: "STRING_VALUE",
 *     ProjectId: "STRING_VALUE",
 *   },
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateArtifactCommand(input);
 * const response = await client.send(command);
 * // { // CreateArtifactResponse
 * //   ArtifactArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateArtifactCommandInput - {@link CreateArtifactCommandInput}
 * @returns {@link CreateArtifactCommandOutput}
 * @see {@link CreateArtifactCommandInput} for command's `input` shape.
 * @see {@link CreateArtifactCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceLimitExceeded} (client fault)
 *  <p> You have exceeded an SageMaker resource limit. For example, you might have too many training jobs created. </p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 *
 * @public
 */
export class CreateArtifactCommand extends $Command
  .classBuilder<
    CreateArtifactCommandInput,
    CreateArtifactCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SageMaker", "CreateArtifact", {})
  .n("SageMakerClient", "CreateArtifactCommand")
  .sc(CreateArtifact$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateArtifactRequest;
      output: CreateArtifactResponse;
    };
    sdk: {
      input: CreateArtifactCommandInput;
      output: CreateArtifactCommandOutput;
    };
  };
}
