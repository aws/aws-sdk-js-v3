// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListWorkflowBuildVersionsRequest, ListWorkflowBuildVersionsResponse } from "../models/models_0";
import { ListWorkflowBuildVersions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * @example List the build versions of a workflow
 * ```javascript
 * // The following example lists the build versions that exist for version 1.0.0 of the specified workflow, with the most recent build version first and the change description for each build version showing what changed.
 * const input = {
 *   workflowVersionArn: "arn:aws:imagebuilder:us-west-2:111122223333:workflow/build/my-example-workflow/1.0.0"
 * };
 * const command = new ListWorkflowBuildVersionsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   workflowSummaryList: [
 *     {
 *       arn: "arn:aws:imagebuilder:us-west-2:111122223333:workflow/build/my-example-workflow/1.0.0/2",
 *       changeDescription: "Added a step to collect image metadata from the build instance",
 *       dateCreated: "2026-09-09T19:56:38.339Z",
 *       description: "Workflow to build my example image",
 *       name: "my-example-workflow",
 *       owner: "111122223333",
 *       type: "BUILD",
 *       version: "1.0.0"
 *     },
 *     {
 *       arn: "arn:aws:imagebuilder:us-west-2:111122223333:workflow/build/my-example-workflow/1.0.0/1",
 *       changeDescription: "Initial version",
 *       dateCreated: "2026-09-09T19:41:14.997Z",
 *       description: "Workflow to build my example image",
 *       name: "my-example-workflow",
 *       owner: "111122223333",
 *       type: "BUILD",
 *       version: "1.0.0"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListWorkflowBuildVersionsCommand extends command<ListWorkflowBuildVersionsCommandInput, ListWorkflowBuildVersionsCommandOutput>(
  _ep0,
  _mw0,
  "ListWorkflowBuildVersions",
  ListWorkflowBuildVersions$
) {
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
