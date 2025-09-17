// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ImagebuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ImagebuilderClient";
import { ListImagePipelinesRequest, ListImagePipelinesResponse } from "../models/models_0";
import { de_ListImagePipelinesCommand, se_ListImagePipelinesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListImagePipelinesCommand}.
 */
export interface ListImagePipelinesCommandInput extends ListImagePipelinesRequest {}
/**
 * @public
 *
 * The output of {@link ListImagePipelinesCommand}.
 */
export interface ListImagePipelinesCommandOutput extends ListImagePipelinesResponse, __MetadataBearer {}

/**
 * <p>Returns a list of image pipelines.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, ListImagePipelinesCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, ListImagePipelinesCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * // import type { ImagebuilderClientConfig } from "@aws-sdk/client-imagebuilder";
 * const config = {}; // type is ImagebuilderClientConfig
 * const client = new ImagebuilderClient(config);
 * const input = { // ListImagePipelinesRequest
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
 * const command = new ListImagePipelinesCommand(input);
 * const response = await client.send(command);
 * // { // ListImagePipelinesResponse
 * //   requestId: "STRING_VALUE",
 * //   imagePipelineList: [ // ImagePipelineList
 * //     { // ImagePipeline
 * //       arn: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       platform: "Windows" || "Linux" || "macOS",
 * //       enhancedImageMetadataEnabled: true || false,
 * //       imageRecipeArn: "STRING_VALUE",
 * //       containerRecipeArn: "STRING_VALUE",
 * //       infrastructureConfigurationArn: "STRING_VALUE",
 * //       distributionConfigurationArn: "STRING_VALUE",
 * //       imageTestsConfiguration: { // ImageTestsConfiguration
 * //         imageTestsEnabled: true || false,
 * //         timeoutMinutes: Number("int"),
 * //       },
 * //       schedule: { // Schedule
 * //         scheduleExpression: "STRING_VALUE",
 * //         timezone: "STRING_VALUE",
 * //         pipelineExecutionStartCondition: "EXPRESSION_MATCH_ONLY" || "EXPRESSION_MATCH_AND_DEPENDENCY_UPDATES_AVAILABLE",
 * //       },
 * //       status: "DISABLED" || "ENABLED",
 * //       dateCreated: "STRING_VALUE",
 * //       dateUpdated: "STRING_VALUE",
 * //       dateLastRun: "STRING_VALUE",
 * //       dateNextRun: "STRING_VALUE",
 * //       tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       imageScanningConfiguration: { // ImageScanningConfiguration
 * //         imageScanningEnabled: true || false,
 * //         ecrConfiguration: { // EcrConfiguration
 * //           repositoryName: "STRING_VALUE",
 * //           containerTags: [ // StringList
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       },
 * //       executionRole: "STRING_VALUE",
 * //       workflows: [ // WorkflowConfigurationList
 * //         { // WorkflowConfiguration
 * //           workflowArn: "STRING_VALUE", // required
 * //           parameters: [ // WorkflowParameterList
 * //             { // WorkflowParameter
 * //               name: "STRING_VALUE", // required
 * //               value: [ // WorkflowParameterValueList // required
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //           ],
 * //           parallelGroup: "STRING_VALUE",
 * //           onFailure: "CONTINUE" || "ABORT",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListImagePipelinesCommandInput - {@link ListImagePipelinesCommandInput}
 * @returns {@link ListImagePipelinesCommandOutput}
 * @see {@link ListImagePipelinesCommandInput} for command's `input` shape.
 * @see {@link ListImagePipelinesCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class ListImagePipelinesCommand extends $Command
  .classBuilder<
    ListImagePipelinesCommandInput,
    ListImagePipelinesCommandOutput,
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
  .s("imagebuilder", "ListImagePipelines", {})
  .n("ImagebuilderClient", "ListImagePipelinesCommand")
  .f(void 0, void 0)
  .ser(se_ListImagePipelinesCommand)
  .de(de_ListImagePipelinesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListImagePipelinesRequest;
      output: ListImagePipelinesResponse;
    };
    sdk: {
      input: ListImagePipelinesCommandInput;
      output: ListImagePipelinesCommandOutput;
    };
  };
}
