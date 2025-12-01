// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateHubContentPresignedUrlsRequest, CreateHubContentPresignedUrlsResponse } from "../models/models_1";
import type { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { CreateHubContentPresignedUrls } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateHubContentPresignedUrlsCommand}.
 */
export interface CreateHubContentPresignedUrlsCommandInput extends CreateHubContentPresignedUrlsRequest {}
/**
 * @public
 *
 * The output of {@link CreateHubContentPresignedUrlsCommand}.
 */
export interface CreateHubContentPresignedUrlsCommandOutput
  extends CreateHubContentPresignedUrlsResponse,
    __MetadataBearer {}

/**
 * <p>Creates presigned URLs for accessing hub content artifacts. This operation generates time-limited, secure URLs that allow direct download of model artifacts and associated files from Amazon SageMaker hub content, including gated models that require end-user license agreement acceptance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateHubContentPresignedUrlsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateHubContentPresignedUrlsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // CreateHubContentPresignedUrlsRequest
 *   HubName: "STRING_VALUE", // required
 *   HubContentType: "Model" || "Notebook" || "ModelReference", // required
 *   HubContentName: "STRING_VALUE", // required
 *   HubContentVersion: "STRING_VALUE",
 *   AccessConfig: { // PresignedUrlAccessConfig
 *     AcceptEula: true || false,
 *     ExpectedS3Url: "STRING_VALUE",
 *   },
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new CreateHubContentPresignedUrlsCommand(input);
 * const response = await client.send(command);
 * // { // CreateHubContentPresignedUrlsResponse
 * //   AuthorizedUrlConfigs: [ // AuthorizedUrlConfigs // required
 * //     { // AuthorizedUrl
 * //       Url: "STRING_VALUE",
 * //       LocalPath: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateHubContentPresignedUrlsCommandInput - {@link CreateHubContentPresignedUrlsCommandInput}
 * @returns {@link CreateHubContentPresignedUrlsCommandOutput}
 * @see {@link CreateHubContentPresignedUrlsCommandInput} for command's `input` shape.
 * @see {@link CreateHubContentPresignedUrlsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 *
 * @public
 */
export class CreateHubContentPresignedUrlsCommand extends $Command
  .classBuilder<
    CreateHubContentPresignedUrlsCommandInput,
    CreateHubContentPresignedUrlsCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SageMaker", "CreateHubContentPresignedUrls", {})
  .n("SageMakerClient", "CreateHubContentPresignedUrlsCommand")
  .sc(CreateHubContentPresignedUrls)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateHubContentPresignedUrlsRequest;
      output: CreateHubContentPresignedUrlsResponse;
    };
    sdk: {
      input: CreateHubContentPresignedUrlsCommandInput;
      output: CreateHubContentPresignedUrlsCommandOutput;
    };
  };
}
