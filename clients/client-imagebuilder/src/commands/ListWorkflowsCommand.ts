// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListWorkflowsRequest, ListWorkflowsResponse } from "../models/models_0";
import { ListWorkflows$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListWorkflowsCommand}.
 */
export interface ListWorkflowsCommandInput extends ListWorkflowsRequest {}
/**
 * @public
 *
 * The output of {@link ListWorkflowsCommand}.
 */
export interface ListWorkflowsCommandOutput extends ListWorkflowsResponse, __MetadataBearer {}

/**
 * Lists workflow versions based on filtering parameters. To list the build versions of a specific workflow version, call ListWorkflowBuildVersions.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, ListWorkflowsCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, ListWorkflowsCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * // import type { ImagebuilderClientConfig } from "@aws-sdk/client-imagebuilder";
 * const config = {}; // type is ImagebuilderClientConfig
 * const client = new ImagebuilderClient(config);
 * const input = { // ListWorkflowsRequest
 *   owner: "Self" || "Shared" || "Amazon" || "ThirdParty" || "AWSMarketplace",
 *   filters: [ // FilterList
 *     { // Filter
 *       name: "STRING_VALUE",
 *       values: [ // FilterValues
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   byName: true || false,
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListWorkflowsCommand(input);
 * const response = await client.send(command);
 * // { // ListWorkflowsResponse
 * //   workflowVersionList: [ // WorkflowVersionList
 * //     { // WorkflowVersion
 * //       arn: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       version: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       type: "BUILD" || "TEST" || "DISTRIBUTION",
 * //       owner: "STRING_VALUE",
 * //       dateCreated: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListWorkflowsCommandInput - {@link ListWorkflowsCommandInput}
 * @returns {@link ListWorkflowsCommandOutput}
 * @see {@link ListWorkflowsCommandInput} for command's `input` shape.
 * @see {@link ListWorkflowsCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for ImagebuilderClient's `config` shape.
 *
 * @throws {@link CallRateLimitExceededException} (client fault)
 *
 * You have exceeded the permitted request rate for the Amazon EC2 APIs that Image Builder calls on your behalf. Retry with an increasing or variable delay between requests.
 *
 * @throws {@link ClientException} (client fault)
 *
 * A generic client error. This error usually indicates that the request failed a validation check, such as when a downstream service rejects a configured value.
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * You are not authorized to perform the requested operation.
 *
 * @throws {@link InvalidPaginationTokenException} (client fault)
 *
 * You have provided an invalid pagination token in your request.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is malformed or otherwise invalid. Verify the request and try again.
 *
 * @throws {@link ServiceException} (server fault)
 *
 * An internal server error occurred while Image Builder processed the request. Retrying the request may succeed.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service is unable to process your request at this time.
 *
 * @throws {@link ImagebuilderServiceException}
 *
 * Base exception class for all service exceptions from Imagebuilder service.
 *
 * @example List workflows that you own
 * ```javascript
 * // The following example lists the workflow versions that you own.
 * const input = {
 *   owner: "Self"
 * };
 * const command = new ListWorkflowsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   workflowVersionList: [
 *     {
 *       arn: "arn:aws:imagebuilder:us-west-2:111122223333:workflow/build/my-example-build-workflow/1.0.0",
 *       dateCreated: "2026-09-09T19:56:09.033Z",
 *       description: "Builds my example image",
 *       name: "my-example-build-workflow",
 *       owner: "111122223333",
 *       type: "BUILD",
 *       version: "1.0.0"
 *     },
 *     {
 *       arn: "arn:aws:imagebuilder:us-west-2:111122223333:workflow/test/my-example-test-workflow/1.0.0",
 *       dateCreated: "2026-09-09T19:56:12.440Z",
 *       description: "Tests my example image",
 *       name: "my-example-test-workflow",
 *       owner: "111122223333",
 *       type: "TEST",
 *       version: "1.0.0"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListWorkflowsCommand extends command<ListWorkflowsCommandInput, ListWorkflowsCommandOutput>(
  _ep0,
  _mw0,
  "ListWorkflows",
  ListWorkflows$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListWorkflowsRequest;
      output: ListWorkflowsResponse;
    };
    sdk: {
      input: ListWorkflowsCommandInput;
      output: ListWorkflowsCommandOutput;
    };
  };
}
