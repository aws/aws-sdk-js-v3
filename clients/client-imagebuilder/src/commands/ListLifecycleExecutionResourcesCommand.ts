// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ListLifecycleExecutionResourcesRequest,
  ListLifecycleExecutionResourcesResponse,
} from "../models/models_0";
import { ListLifecycleExecutionResources$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListLifecycleExecutionResourcesCommand}.
 */
export interface ListLifecycleExecutionResourcesCommandInput extends ListLifecycleExecutionResourcesRequest {}
/**
 * @public
 *
 * The output of {@link ListLifecycleExecutionResourcesCommand}.
 */
export interface ListLifecycleExecutionResourcesCommandOutput extends ListLifecycleExecutionResourcesResponse, __MetadataBearer {}

/**
 * <p>Lists resources that the runtime instance of the image lifecycle identified for lifecycle actions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, ListLifecycleExecutionResourcesCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, ListLifecycleExecutionResourcesCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * // import type { ImagebuilderClientConfig } from "@aws-sdk/client-imagebuilder";
 * const config = {}; // type is ImagebuilderClientConfig
 * const client = new ImagebuilderClient(config);
 * const input = { // ListLifecycleExecutionResourcesRequest
 *   lifecycleExecutionId: "STRING_VALUE", // required
 *   parentResourceId: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListLifecycleExecutionResourcesCommand(input);
 * const response = await client.send(command);
 * // { // ListLifecycleExecutionResourcesResponse
 * //   lifecycleExecutionId: "STRING_VALUE",
 * //   lifecycleExecutionState: { // LifecycleExecutionState
 * //     status: "IN_PROGRESS" || "CANCELLED" || "CANCELLING" || "FAILED" || "SUCCESS" || "PENDING",
 * //     reason: "STRING_VALUE",
 * //   },
 * //   resources: [ // LifecycleExecutionResourceList
 * //     { // LifecycleExecutionResource
 * //       accountId: "STRING_VALUE",
 * //       resourceId: "STRING_VALUE",
 * //       state: { // LifecycleExecutionResourceState
 * //         status: "FAILED" || "IN_PROGRESS" || "SKIPPED" || "SUCCESS",
 * //         reason: "STRING_VALUE",
 * //       },
 * //       action: { // LifecycleExecutionResourceAction
 * //         name: "AVAILABLE" || "DELETE" || "DEPRECATE" || "DISABLE",
 * //         reason: "STRING_VALUE",
 * //       },
 * //       region: "STRING_VALUE",
 * //       snapshots: [ // LifecycleExecutionSnapshotResourceList
 * //         { // LifecycleExecutionSnapshotResource
 * //           snapshotId: "STRING_VALUE",
 * //           state: {
 * //             status: "FAILED" || "IN_PROGRESS" || "SKIPPED" || "SUCCESS",
 * //             reason: "STRING_VALUE",
 * //           },
 * //         },
 * //       ],
 * //       imageUris: [ // StringList
 * //         "STRING_VALUE",
 * //       ],
 * //       startTime: new Date("TIMESTAMP"),
 * //       endTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListLifecycleExecutionResourcesCommandInput - {@link ListLifecycleExecutionResourcesCommandInput}
 * @returns {@link ListLifecycleExecutionResourcesCommandOutput}
 * @see {@link ListLifecycleExecutionResourcesCommandInput} for command's `input` shape.
 * @see {@link ListLifecycleExecutionResourcesCommandOutput} for command's `response` shape.
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
 * @example List the resources that a lifecycle execution acted on
 * ```javascript
 * // The following example lists the resources that the specified lifecycle execution acted on. For a scheduled resource state update that hasn't started to apply changes yet, the resources list is empty.
 * const input = {
 *   lifecycleExecutionId: "lce-401aefc3-a829-46f6-8fc2-91497988a503"
 * };
 * const command = new ListLifecycleExecutionResourcesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   lifecycleExecutionId: "lce-401aefc3-a829-46f6-8fc2-91497988a503",
 *   lifecycleExecutionState: {
 *     status: "IN_PROGRESS"
 *   },
 *   resources:   []
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListLifecycleExecutionResourcesCommand extends command<ListLifecycleExecutionResourcesCommandInput, ListLifecycleExecutionResourcesCommandOutput>(
  _ep0,
  _mw0,
  "ListLifecycleExecutionResources",
  ListLifecycleExecutionResources$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListLifecycleExecutionResourcesRequest;
      output: ListLifecycleExecutionResourcesResponse;
    };
    sdk: {
      input: ListLifecycleExecutionResourcesCommandInput;
      output: ListLifecycleExecutionResourcesCommandOutput;
    };
  };
}
