// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetLifecycleExecutionRequest, GetLifecycleExecutionResponse } from "../models/models_0";
import { GetLifecycleExecution$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetLifecycleExecutionCommand}.
 */
export interface GetLifecycleExecutionCommandInput extends GetLifecycleExecutionRequest {}
/**
 * @public
 *
 * The output of {@link GetLifecycleExecutionCommand}.
 */
export interface GetLifecycleExecutionCommandOutput extends GetLifecycleExecutionResponse, __MetadataBearer {}

/**
 * <p>Retrieves runtime information for a lifecycle execution – a single run of
 * 			lifecycle actions that a lifecycle policy or a
 * 			<a>StartResourceStateUpdate</a> request started.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, GetLifecycleExecutionCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, GetLifecycleExecutionCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * // import type { ImagebuilderClientConfig } from "@aws-sdk/client-imagebuilder";
 * const config = {}; // type is ImagebuilderClientConfig
 * const client = new ImagebuilderClient(config);
 * const input = { // GetLifecycleExecutionRequest
 *   lifecycleExecutionId: "STRING_VALUE", // required
 * };
 * const command = new GetLifecycleExecutionCommand(input);
 * const response = await client.send(command);
 * // { // GetLifecycleExecutionResponse
 * //   lifecycleExecution: { // LifecycleExecution
 * //     lifecycleExecutionId: "STRING_VALUE",
 * //     lifecyclePolicyArn: "STRING_VALUE",
 * //     resourcesImpactedSummary: { // LifecycleExecutionResourcesImpactedSummary
 * //       hasImpactedResources: true || false,
 * //     },
 * //     state: { // LifecycleExecutionState
 * //       status: "IN_PROGRESS" || "CANCELLED" || "CANCELLING" || "FAILED" || "SUCCESS" || "PENDING",
 * //       reason: "STRING_VALUE",
 * //     },
 * //     startTime: new Date("TIMESTAMP"),
 * //     endTime: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetLifecycleExecutionCommandInput - {@link GetLifecycleExecutionCommandInput}
 * @returns {@link GetLifecycleExecutionCommandOutput}
 * @see {@link GetLifecycleExecutionCommandInput} for command's `input` shape.
 * @see {@link GetLifecycleExecutionCommandOutput} for command's `response` shape.
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
 * @example Get the details of a lifecycle execution
 * ```javascript
 * // The following example retrieves the runtime status of the specified lifecycle execution. If the execution was started by StartResourceStateUpdate rather than a lifecycle policy run, the response doesn't include the lifecyclePolicyArn field.
 * const input = {
 *   lifecycleExecutionId: "lce-401aefc3-a829-46f6-8fc2-91497988a503"
 * };
 * const command = new GetLifecycleExecutionCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   lifecycleExecution: {
 *     lifecycleExecutionId: "lce-401aefc3-a829-46f6-8fc2-91497988a503",
 *     resourcesImpactedSummary: {
 *       hasImpactedResources: false
 *     },
 *     startTime: "2026-09-09T21:42:29Z",
 *     state: {
 *       status: "IN_PROGRESS"
 *     }
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetLifecycleExecutionCommand extends command<GetLifecycleExecutionCommandInput, GetLifecycleExecutionCommandOutput>(
  _ep0,
  _mw0,
  "GetLifecycleExecution",
  GetLifecycleExecution$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetLifecycleExecutionRequest;
      output: GetLifecycleExecutionResponse;
    };
    sdk: {
      input: GetLifecycleExecutionCommandInput;
      output: GetLifecycleExecutionCommandOutput;
    };
  };
}
