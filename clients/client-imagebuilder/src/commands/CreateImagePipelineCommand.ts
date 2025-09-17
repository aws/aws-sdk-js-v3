// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ImagebuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ImagebuilderClient";
import { CreateImagePipelineRequest, CreateImagePipelineResponse } from "../models/models_0";
import { de_CreateImagePipelineCommand, se_CreateImagePipelineCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateImagePipelineCommand}.
 */
export interface CreateImagePipelineCommandInput extends CreateImagePipelineRequest {}
/**
 * @public
 *
 * The output of {@link CreateImagePipelineCommand}.
 */
export interface CreateImagePipelineCommandOutput extends CreateImagePipelineResponse, __MetadataBearer {}

/**
 * <p>Creates a new image pipeline. Image pipelines enable you to automate the creation and
 * 			distribution of images.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, CreateImagePipelineCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, CreateImagePipelineCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * // import type { ImagebuilderClientConfig } from "@aws-sdk/client-imagebuilder";
 * const config = {}; // type is ImagebuilderClientConfig
 * const client = new ImagebuilderClient(config);
 * const input = { // CreateImagePipelineRequest
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   imageRecipeArn: "STRING_VALUE",
 *   containerRecipeArn: "STRING_VALUE",
 *   infrastructureConfigurationArn: "STRING_VALUE", // required
 *   distributionConfigurationArn: "STRING_VALUE",
 *   imageTestsConfiguration: { // ImageTestsConfiguration
 *     imageTestsEnabled: true || false,
 *     timeoutMinutes: Number("int"),
 *   },
 *   enhancedImageMetadataEnabled: true || false,
 *   schedule: { // Schedule
 *     scheduleExpression: "STRING_VALUE",
 *     timezone: "STRING_VALUE",
 *     pipelineExecutionStartCondition: "EXPRESSION_MATCH_ONLY" || "EXPRESSION_MATCH_AND_DEPENDENCY_UPDATES_AVAILABLE",
 *   },
 *   status: "DISABLED" || "ENABLED",
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   clientToken: "STRING_VALUE", // required
 *   imageScanningConfiguration: { // ImageScanningConfiguration
 *     imageScanningEnabled: true || false,
 *     ecrConfiguration: { // EcrConfiguration
 *       repositoryName: "STRING_VALUE",
 *       containerTags: [ // StringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   },
 *   workflows: [ // WorkflowConfigurationList
 *     { // WorkflowConfiguration
 *       workflowArn: "STRING_VALUE", // required
 *       parameters: [ // WorkflowParameterList
 *         { // WorkflowParameter
 *           name: "STRING_VALUE", // required
 *           value: [ // WorkflowParameterValueList // required
 *             "STRING_VALUE",
 *           ],
 *         },
 *       ],
 *       parallelGroup: "STRING_VALUE",
 *       onFailure: "CONTINUE" || "ABORT",
 *     },
 *   ],
 *   executionRole: "STRING_VALUE",
 * };
 * const command = new CreateImagePipelineCommand(input);
 * const response = await client.send(command);
 * // { // CreateImagePipelineResponse
 * //   requestId: "STRING_VALUE",
 * //   clientToken: "STRING_VALUE",
 * //   imagePipelineArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateImagePipelineCommandInput - {@link CreateImagePipelineCommandInput}
 * @returns {@link CreateImagePipelineCommandOutput}
 * @see {@link CreateImagePipelineCommandInput} for command's `input` shape.
 * @see {@link CreateImagePipelineCommandOutput} for command's `response` shape.
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
 * @throws {@link IdempotentParameterMismatchException} (client fault)
 *  <p>You have specified a client token for an operation using parameter values that differ
 * 			from a previous request that used the same client token.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>You have requested an action that that the service doesn't support.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>The resource that you are trying to create already exists.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The resource that you are trying to operate on is currently in use. Review the message
 * 			details and retry later.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>This exception is thrown when the service encounters an unrecoverable
 * 			exception.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>You have exceeded the number of permitted resources or operations for this service.
 * 			For service quotas, see <a href="https://docs.aws.amazon.com/general/latest/gr/imagebuilder.html#limits_imagebuilder">EC2 Image Builder endpoints and
 * 				quotas</a>.</p>
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
export class CreateImagePipelineCommand extends $Command
  .classBuilder<
    CreateImagePipelineCommandInput,
    CreateImagePipelineCommandOutput,
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
  .s("imagebuilder", "CreateImagePipeline", {})
  .n("ImagebuilderClient", "CreateImagePipelineCommand")
  .f(void 0, void 0)
  .ser(se_CreateImagePipelineCommand)
  .de(de_CreateImagePipelineCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateImagePipelineRequest;
      output: CreateImagePipelineResponse;
    };
    sdk: {
      input: CreateImagePipelineCommandInput;
      output: CreateImagePipelineCommandOutput;
    };
  };
}
