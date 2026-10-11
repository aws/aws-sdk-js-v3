// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListImagePipelineImagesRequest, ListImagePipelineImagesResponse } from "../models/models_0";
import { ListImagePipelineImages$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * // import type { ImagebuilderClientConfig } from "@aws-sdk/client-imagebuilder";
 * const config = {}; // type is ImagebuilderClientConfig
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
 * //         failureContext: { // ImageFailureContext
 * //           imageStatus: "PENDING" || "CREATING" || "BUILDING" || "TESTING" || "DISTRIBUTING" || "INTEGRATING" || "AVAILABLE" || "CANCELLED" || "FAILED" || "DEPRECATED" || "DELETED" || "DISABLED",
 * //           workflowExecutionId: "STRING_VALUE",
 * //           workflowArn: "STRING_VALUE",
 * //           stepExecutionId: "STRING_VALUE",
 * //           failedStep: "STRING_VALUE",
 * //           componentFailure: { // ComponentFailureContext
 * //             componentArn: "STRING_VALUE",
 * //             phaseName: "STRING_VALUE",
 * //             stepName: "STRING_VALUE",
 * //             action: "STRING_VALUE",
 * //             errorMessage: "STRING_VALUE",
 * //           },
 * //           distributionFailure: { // DistributionFailureContext
 * //             errorMessage: "STRING_VALUE",
 * //             regionFailures: [ // RegionFailureList
 * //               { // RegionFailure
 * //                 region: "STRING_VALUE",
 * //                 status: "FAILED" || "CANCELLED" || "TIMED_OUT",
 * //                 imageConfigurationStep: "ASSOCIATE_LICENSES" || "UPDATE_LAUNCH_TEMPLATES" || "PUT_SSM_PARAMETERS" || "UPDATE_FAST_LAUNCH_CONFIGURATIONS" || "EXPORT_AMI",
 * //                 errorMessage: "STRING_VALUE",
 * //                 targetAccountId: "STRING_VALUE",
 * //               },
 * //             ],
 * //           },
 * //         },
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
 * //               failureContext: {
 * //                 imageStatus: "PENDING" || "CREATING" || "BUILDING" || "TESTING" || "DISTRIBUTING" || "INTEGRATING" || "AVAILABLE" || "CANCELLED" || "FAILED" || "DEPRECATED" || "DELETED" || "DISABLED",
 * //                 workflowExecutionId: "STRING_VALUE",
 * //                 workflowArn: "STRING_VALUE",
 * //                 stepExecutionId: "STRING_VALUE",
 * //                 failedStep: "STRING_VALUE",
 * //                 componentFailure: {
 * //                   componentArn: "STRING_VALUE",
 * //                   phaseName: "STRING_VALUE",
 * //                   stepName: "STRING_VALUE",
 * //                   action: "STRING_VALUE",
 * //                   errorMessage: "STRING_VALUE",
 * //                 },
 * //                 distributionFailure: {
 * //                   errorMessage: "STRING_VALUE",
 * //                   regionFailures: [
 * //                     {
 * //                       region: "STRING_VALUE",
 * //                       status: "FAILED" || "CANCELLED" || "TIMED_OUT",
 * //                       imageConfigurationStep: "ASSOCIATE_LICENSES" || "UPDATE_LAUNCH_TEMPLATES" || "PUT_SSM_PARAMETERS" || "UPDATE_FAST_LAUNCH_CONFIGURATIONS" || "EXPORT_AMI",
 * //                       errorMessage: "STRING_VALUE",
 * //                       targetAccountId: "STRING_VALUE",
 * //                     },
 * //                   ],
 * //                 },
 * //               },
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
 * //       loggingConfiguration: { // ImageLoggingConfiguration
 * //         logGroupName: "STRING_VALUE",
 * //       },
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
 *  <p>You have exceeded the permitted request rate for the Amazon EC2 APIs that Image Builder
 * 			calls on your behalf. Retry with an increasing or variable delay between
 * 			requests.</p>
 *
 * @throws {@link ClientException} (client fault)
 *  <p>A generic client error. This error usually indicates that the request
 * 			failed a validation check, such as when a downstream service rejects a
 * 			configured value.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>You are not authorized to perform the requested operation.</p>
 *
 * @throws {@link InvalidPaginationTokenException} (client fault)
 *  <p>You have provided an invalid pagination token in your request.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is malformed or otherwise invalid. Verify the request and try
 * 			again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>At least one of the resources referenced by your request does not exist.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>An internal server error occurred while Image Builder processed the request.
 * 			Retrying the request may succeed.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is unable to process your request at this time.</p>
 *
 * @throws {@link ImagebuilderServiceException}
 * <p>Base exception class for all service exceptions from Imagebuilder service.</p>
 *
 *
 * @example List the images that an image pipeline created
 * ```javascript
 * // The following example lists the images that the specified pipeline created, including a build that is still in progress.
 * const input = {
 *   imagePipelineArn: "arn:aws:imagebuilder:us-west-2:111122223333:image-pipeline/my-example-pipeline"
 * };
 * const command = new ListImagePipelineImagesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   imageSummaryList: [
 *     {
 *       arn: "arn:aws:imagebuilder:us-west-2:111122223333:image/my-example-recipe/1.0.0/1",
 *       buildType: "USER_INITIATED",
 *       dateCreated: "2026-09-09T19:39:20.458Z",
 *       name: "my-example-recipe",
 *       outputResources: {
 *         amis:         []
 *       },
 *       owner: "111122223333",
 *       platform: "Linux",
 *       state: {
 *         status: "BUILDING"
 *       },
 *       type: "AMI",
 *       version: "1.0.0/1"
 *     }
 *   ],
 *   requestId: "071a0ecb-b07d-4485-832c-e6b88de8ebed"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListImagePipelineImagesCommand extends command<ListImagePipelineImagesCommandInput, ListImagePipelineImagesCommandOutput>(
  _ep0,
  _mw0,
  "ListImagePipelineImages",
  ListImagePipelineImages$
) {
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
