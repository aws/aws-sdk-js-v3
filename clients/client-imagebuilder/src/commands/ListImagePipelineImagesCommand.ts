// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ImagebuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ImagebuilderClient";
import { ListImagePipelineImagesRequest, ListImagePipelineImagesResponse } from "../models/models_0";
import { de_ListImagePipelineImagesCommand, se_ListImagePipelineImagesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListImagePipelineImagesCommand}.
 */
export interface ListImagePipelineImagesCommandInput extends ListImagePipelineImagesRequest {}
/**
 * @public
 *
 * The output of {@link ListImagePipelineImagesCommand}.
 */
export interface ListImagePipelineImagesCommandOutput extends ListImagePipelineImagesResponse, __MetadataBearer {}

/**
 * <p>Returns a list of images created by the specified pipeline.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, ListImagePipelineImagesCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, ListImagePipelineImagesCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * const client = new ImagebuilderClient(config);
 * const input = { // ListImagePipelineImagesRequest
 *   imagePipelineArn: "STRING_VALUE", // required
 *   filters: [ // FilterList
 *     { // Filter
 *       name: "STRING_VALUE",
 *       values: [ // FilterValues
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListImagePipelineImagesCommand(input);
 * const response = await client.send(command);
 * // { // ListImagePipelineImagesResponse
 * //   requestId: "STRING_VALUE",
 * //   imageSummaryList: [ // ImageSummaryList
 * //     { // ImageSummary
 * //       arn: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       type: "AMI" || "DOCKER",
 * //       version: "STRING_VALUE",
 * //       platform: "Windows" || "Linux" || "macOS",
 * //       osVersion: "STRING_VALUE",
 * //       state: { // ImageState
 * //         status: "PENDING" || "CREATING" || "BUILDING" || "TESTING" || "DISTRIBUTING" || "INTEGRATING" || "AVAILABLE" || "CANCELLED" || "FAILED" || "DEPRECATED" || "DELETED" || "DISABLED",
 * //         reason: "STRING_VALUE",
 * //       },
 * //       owner: "STRING_VALUE",
 * //       dateCreated: "STRING_VALUE",
 * //       outputResources: { // OutputResources
 * //         amis: [ // AmiList
 * //           { // Ami
 * //             region: "STRING_VALUE",
 * //             image: "STRING_VALUE",
 * //             name: "STRING_VALUE",
 * //             description: "STRING_VALUE",
 * //             state: {
 * //               status: "PENDING" || "CREATING" || "BUILDING" || "TESTING" || "DISTRIBUTING" || "INTEGRATING" || "AVAILABLE" || "CANCELLED" || "FAILED" || "DEPRECATED" || "DELETED" || "DISABLED",
 * //               reason: "STRING_VALUE",
 * //             },
 * //             accountId: "STRING_VALUE",
 * //           },
 * //         ],
 * //         containers: [ // ContainerList
 * //           { // Container
 * //             region: "STRING_VALUE",
 * //             imageUris: [ // StringList
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         ],
 * //       },
 * //       tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       buildType: "USER_INITIATED" || "SCHEDULED" || "IMPORT" || "IMPORT_ISO",
 * //       imageSource: "AMAZON_MANAGED" || "AWS_MARKETPLACE" || "IMPORTED" || "CUSTOM",
 * //       deprecationTime: new Date("TIMESTAMP"),
 * //       lifecycleExecutionId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListImagePipelineImagesCommandInput - {@link ListImagePipelineImagesCommandInput}
 * @returns {@link ListImagePipelineImagesCommandOutput}
 * @see {@link ListImagePipelineImagesCommandInput} for command's `input` shape.
 * @see {@link ListImagePipelineImagesCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for ImagebuilderClient's `config` shape.
 *
 * @throws {@link CallRateLimitExceededException} (client fault)
 *  <p>You have exceeded the permitted request rate for the specific operation.</p>
 *
 * @throws {@link ClientException} (client fault)
 *  <p>These errors are usually caused by a client action, such as using an action or
 * 			resource on behalf of a user that doesn't have permissions to use the action or
 * 			resource, or specifying an invalid resource identifier.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>You are not authorized to perform the requested operation.</p>
 *
 * @throws {@link InvalidPaginationTokenException} (client fault)
 *  <p>You have provided an invalid pagination token in your request.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>You have requested an action that that the service doesn't support.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>At least one of the resources referenced by your request does not exist.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>This exception is thrown when the service encounters an unrecoverable
 * 			exception.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is unable to process your request at this time.</p>
 *
 * @throws {@link ImagebuilderServiceException}
 * <p>Base exception class for all service exceptions from Imagebuilder service.</p>
 *
 * @public
 */
export class ListImagePipelineImagesCommand extends $Command
  .classBuilder<
    ListImagePipelineImagesCommandInput,
    ListImagePipelineImagesCommandOutput,
    ImagebuilderClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ImagebuilderClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("imagebuilder", "ListImagePipelineImages", {})
  .n("ImagebuilderClient", "ListImagePipelineImagesCommand")
  .f(void 0, void 0)
  .ser(se_ListImagePipelineImagesCommand)
  .de(de_ListImagePipelineImagesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListImagePipelineImagesRequest;
      output: ListImagePipelineImagesResponse;
    };
    sdk: {
      input: ListImagePipelineImagesCommandInput;
      output: ListImagePipelineImagesCommandOutput;
    };
  };
}
