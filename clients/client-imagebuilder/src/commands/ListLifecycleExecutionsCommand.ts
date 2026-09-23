// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListLifecycleExecutionsRequest, ListLifecycleExecutionsResponse } from "../models/models_0";
import { ListLifecycleExecutions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListLifecycleExecutionsCommand}.
 */
export interface ListLifecycleExecutionsCommandInput extends ListLifecycleExecutionsRequest {}
/**
 * @public
 *
 * The output of {@link ListLifecycleExecutionsCommand}.
 */
export interface ListLifecycleExecutionsCommandOutput extends ListLifecycleExecutionsResponse, __MetadataBearer {}

/**
 * <p>Retrieves the lifecycle runtime history for the specified resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, ListLifecycleExecutionsCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, ListLifecycleExecutionsCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * // import type { ImagebuilderClientConfig } from "@aws-sdk/client-imagebuilder";
 * const config = {}; // type is ImagebuilderClientConfig
 * const client = new ImagebuilderClient(config);
 * const input = { // ListLifecycleExecutionsRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   resourceArn: "STRING_VALUE", // required
 * };
 * const command = new ListLifecycleExecutionsCommand(input);
 * const response = await client.send(command);
 * // { // ListLifecycleExecutionsResponse
 * //   lifecycleExecutions: [ // LifecycleExecutionsList
 * //     { // LifecycleExecution
 * //       lifecycleExecutionId: "STRING_VALUE",
 * //       lifecyclePolicyArn: "STRING_VALUE",
 * //       resourcesImpactedSummary: { // LifecycleExecutionResourcesImpactedSummary
 * //         hasImpactedResources: true || false,
 * //       },
 * //       state: { // LifecycleExecutionState
 * //         status: "IN_PROGRESS" || "CANCELLED" || "CANCELLING" || "FAILED" || "SUCCESS" || "PENDING",
 * //         reason: "STRING_VALUE",
 * //       },
 * //       startTime: new Date("TIMESTAMP"),
 * //       endTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListLifecycleExecutionsCommandInput - {@link ListLifecycleExecutionsCommandInput}
 * @returns {@link ListLifecycleExecutionsCommandOutput}
 * @see {@link ListLifecycleExecutionsCommandInput} for command's `input` shape.
 * @see {@link ListLifecycleExecutionsCommandOutput} for command's `response` shape.
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
 * @example List lifecycle executions for an image build version
 * ```javascript
 * // The following example lists the lifecycle executions that have run against the specified image build version. The execution shown was started with StartResourceStateUpdate rather than a lifecycle policy, so it has no lifecyclePolicyArn.
 * const input = {
 *   resourceArn: "arn:aws:imagebuilder:us-west-2:111122223333:image/my-example-recipe/1.0.0/1"
 * };
 * const command = new ListLifecycleExecutionsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   lifecycleExecutions: [
 *     {
 *       lifecycleExecutionId: "lce-401aefc3-a829-46f6-8fc2-91497988a503",
 *       resourcesImpactedSummary: {
 *         hasImpactedResources: false
 *       },
 *       startTime: "2026-09-09T21:42:29Z",
 *       state: {
 *         status: "IN_PROGRESS"
 *       }
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListLifecycleExecutionsCommand extends command<ListLifecycleExecutionsCommandInput, ListLifecycleExecutionsCommandOutput>(
  _ep0,
  _mw0,
  "ListLifecycleExecutions",
  ListLifecycleExecutions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListLifecycleExecutionsRequest;
      output: ListLifecycleExecutionsResponse;
    };
    sdk: {
      input: ListLifecycleExecutionsCommandInput;
      output: ListLifecycleExecutionsCommandOutput;
    };
  };
}
