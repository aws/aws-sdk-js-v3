// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListWorkflowVersionsRequest, ListWorkflowVersionsResponse } from "../models/models_0";
import { ListWorkflowVersions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListWorkflowVersionsCommand}.
 */
export interface ListWorkflowVersionsCommandInput extends ListWorkflowVersionsRequest {}
/**
 * @public
 *
 * The output of {@link ListWorkflowVersionsCommand}.
 */
export interface ListWorkflowVersionsCommandOutput extends ListWorkflowVersionsResponse, __MetadataBearer {}

/**
 * Lists the workflow versions for the specified workflow. For more information, see [Workflow versioning in Amazon Web Services HealthOmics](https://docs.aws.amazon.com/omics/latest/dev/workflow-versions.html) in the *Amazon Web Services HealthOmics User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, ListWorkflowVersionsCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, ListWorkflowVersionsCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * // import type { OmicsClientConfig } from "@aws-sdk/client-omics";
 * const config = {}; // type is OmicsClientConfig
 * const client = new OmicsClient(config);
 * const input = { // ListWorkflowVersionsRequest
 *   workflowId: "STRING_VALUE", // required
 *   type: "STRING_VALUE",
 *   workflowOwnerId: "STRING_VALUE",
 *   startingToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListWorkflowVersionsCommand(input);
 * const response = await client.send(command);
 * // { // ListWorkflowVersionsResponse
 * //   items: [ // WorkflowVersionList
 * //     { // WorkflowVersionListItem
 * //       arn: "STRING_VALUE",
 * //       workflowId: "STRING_VALUE",
 * //       versionName: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       status: "STRING_VALUE",
 * //       type: "STRING_VALUE",
 * //       digest: "STRING_VALUE",
 * //       creationTime: new Date("TIMESTAMP"),
 * //       metadata: { // WorkflowMetadata
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListWorkflowVersionsCommandInput - {@link ListWorkflowVersionsCommandInput}
 * @returns {@link ListWorkflowVersionsCommandOutput}
 * @see {@link ListWorkflowVersionsCommandInput} for command's `input` shape.
 * @see {@link ListWorkflowVersionsCommandOutput} for command's `response` shape.
 * @see {@link OmicsClientResolvedConfig | config} for OmicsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request cannot be applied to the target resource in its current state.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An unexpected error occurred. Try the request again.
 *
 * @throws {@link RequestTimeoutException} (client fault)
 *
 * The request timed out.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The target resource was not found in the current Region.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The request exceeds a service quota.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link OmicsServiceException}
 *
 * Base exception class for all service exceptions from Omics service.
 *
 * @public
 */
export class ListWorkflowVersionsCommand extends command<ListWorkflowVersionsCommandInput, ListWorkflowVersionsCommandOutput>(
  _ep0,
  _mw0,
  "ListWorkflowVersions",
  ListWorkflowVersions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListWorkflowVersionsRequest;
      output: ListWorkflowVersionsResponse;
    };
    sdk: {
      input: ListWorkflowVersionsCommandInput;
      output: ListWorkflowVersionsCommandOutput;
    };
  };
}
