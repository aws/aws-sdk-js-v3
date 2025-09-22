// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ImagebuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ImagebuilderClient";
import { ListWorkflowBuildVersionsRequest, ListWorkflowBuildVersionsResponse } from "../models/models_0";
import { ListWorkflowBuildVersions } from "../schemas/schemas_11_Workflow";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListWorkflowBuildVersionsCommand}.
 */
export interface ListWorkflowBuildVersionsCommandInput extends ListWorkflowBuildVersionsRequest {}
/**
 * @public
 *
 * The output of {@link ListWorkflowBuildVersionsCommand}.
 */
export interface ListWorkflowBuildVersionsCommandOutput extends ListWorkflowBuildVersionsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of build versions for a specific workflow resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, ListWorkflowBuildVersionsCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, ListWorkflowBuildVersionsCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * // import type { ImagebuilderClientConfig } from "@aws-sdk/client-imagebuilder";
 * const config = {}; // type is ImagebuilderClientConfig
 * const client = new ImagebuilderClient(config);
 * const input = { // ListWorkflowBuildVersionsRequest
 *   workflowVersionArn: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListWorkflowBuildVersionsCommand(input);
 * const response = await client.send(command);
 * // { // ListWorkflowBuildVersionsResponse
 * //   workflowSummaryList: [ // WorkflowSummaryList
 * //     { // WorkflowSummary
 * //       arn: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       version: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       changeDescription: "STRING_VALUE",
 * //       type: "BUILD" || "TEST" || "DISTRIBUTION",
 * //       owner: "STRING_VALUE",
 * //       state: { // WorkflowState
 * //         status: "DEPRECATED",
 * //         reason: "STRING_VALUE",
 * //       },
 * //       dateCreated: "STRING_VALUE",
 * //       tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListWorkflowBuildVersionsCommandInput - {@link ListWorkflowBuildVersionsCommandInput}
 * @returns {@link ListWorkflowBuildVersionsCommandOutput}
 * @see {@link ListWorkflowBuildVersionsCommandInput} for command's `input` shape.
 * @see {@link ListWorkflowBuildVersionsCommandOutput} for command's `response` shape.
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
export class ListWorkflowBuildVersionsCommand extends $Command
  .classBuilder<
    ListWorkflowBuildVersionsCommandInput,
    ListWorkflowBuildVersionsCommandOutput,
    ImagebuilderClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ImagebuilderClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("imagebuilder", "ListWorkflowBuildVersions", {})
  .n("ImagebuilderClient", "ListWorkflowBuildVersionsCommand")
  .sc(ListWorkflowBuildVersions)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListWorkflowBuildVersionsRequest;
      output: ListWorkflowBuildVersionsResponse;
    };
    sdk: {
      input: ListWorkflowBuildVersionsCommandInput;
      output: ListWorkflowBuildVersionsCommandOutput;
    };
  };
}
