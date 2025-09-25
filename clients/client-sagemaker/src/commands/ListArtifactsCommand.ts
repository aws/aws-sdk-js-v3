// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListArtifactsRequest, ListArtifactsResponse } from "../models/models_4";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { ListArtifacts } from "../schemas/schemas_50_Artifact";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListArtifactsCommand}.
 */
export interface ListArtifactsCommandInput extends ListArtifactsRequest {}
/**
 * @public
 *
 * The output of {@link ListArtifactsCommand}.
 */
export interface ListArtifactsCommandOutput extends ListArtifactsResponse, __MetadataBearer {}

/**
 * <p>Lists the artifacts in your account and their properties.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListArtifactsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListArtifactsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // ListArtifactsRequest
 *   SourceUri: "STRING_VALUE",
 *   ArtifactType: "STRING_VALUE",
 *   CreatedAfter: new Date("TIMESTAMP"),
 *   CreatedBefore: new Date("TIMESTAMP"),
 *   SortBy: "CreationTime",
 *   SortOrder: "Ascending" || "Descending",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListArtifactsCommand(input);
 * const response = await client.send(command);
 * // { // ListArtifactsResponse
 * //   ArtifactSummaries: [ // ArtifactSummaries
 * //     { // ArtifactSummary
 * //       ArtifactArn: "STRING_VALUE",
 * //       ArtifactName: "STRING_VALUE",
 * //       Source: { // ArtifactSource
 * //         SourceUri: "STRING_VALUE", // required
 * //         SourceTypes: [ // ArtifactSourceTypes
 * //           { // ArtifactSourceType
 * //             SourceIdType: "MD5Hash" || "S3ETag" || "S3Version" || "Custom", // required
 * //             Value: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //       },
 * //       ArtifactType: "STRING_VALUE",
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       LastModifiedTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListArtifactsCommandInput - {@link ListArtifactsCommandInput}
 * @returns {@link ListArtifactsCommandOutput}
 * @see {@link ListArtifactsCommandInput} for command's `input` shape.
 * @see {@link ListArtifactsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Resource being access is not found.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 *
 * @public
 */
export class ListArtifactsCommand extends $Command
  .classBuilder<
    ListArtifactsCommandInput,
    ListArtifactsCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SageMaker", "ListArtifacts", {})
  .n("SageMakerClient", "ListArtifactsCommand")
  .sc(ListArtifacts)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListArtifactsRequest;
      output: ListArtifactsResponse;
    };
    sdk: {
      input: ListArtifactsCommandInput;
      output: ListArtifactsCommandOutput;
    };
  };
}
