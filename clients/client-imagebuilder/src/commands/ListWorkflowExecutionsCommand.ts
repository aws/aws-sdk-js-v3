// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ImagebuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ImagebuilderClient";
import type { ListWorkflowExecutionsRequest, ListWorkflowExecutionsResponse } from "../models/models_0";
import { ListWorkflowExecutions } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListWorkflowExecutionsCommand}.
 */
export interface ListWorkflowExecutionsCommandInput extends ListWorkflowExecutionsRequest {}
/**
 * @public
 *
 * The output of {@link ListWorkflowExecutionsCommand}.
 */
export interface ListWorkflowExecutionsCommandOutput extends ListWorkflowExecutionsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of workflow runtime instance metadata objects for a specific image build
 * 			version.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, ListWorkflowExecutionsCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, ListWorkflowExecutionsCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * // import type { ImagebuilderClientConfig } from "@aws-sdk/client-imagebuilder";
 * const config = {}; // type is ImagebuilderClientConfig
 * const client = new ImagebuilderClient(config);
 * const input = { // ListWorkflowExecutionsRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   imageBuildVersionArn: "STRING_VALUE", // required
 * };
 * const command = new ListWorkflowExecutionsCommand(input);
 * const response = await client.send(command);
 * // { // ListWorkflowExecutionsResponse
 * //   requestId: "STRING_VALUE",
 * //   workflowExecutions: [ // WorkflowExecutionsList
 * //     { // WorkflowExecutionMetadata
 * //       workflowBuildVersionArn: "STRING_VALUE",
 * //       workflowExecutionId: "STRING_VALUE",
 * //       type: "BUILD" || "TEST" || "DISTRIBUTION",
 * //       status: "PENDING" || "SKIPPED" || "RUNNING" || "COMPLETED" || "FAILED" || "ROLLBACK_IN_PROGRESS" || "ROLLBACK_COMPLETED" || "CANCELLED",
 * //       message: "STRING_VALUE",
 * //       totalStepCount: Number("int"),
 * //       totalStepsSucceeded: Number("int"),
 * //       totalStepsFailed: Number("int"),
 * //       totalStepsSkipped: Number("int"),
 * //       startTime: "STRING_VALUE",
 * //       endTime: "STRING_VALUE",
 * //       parallelGroup: "STRING_VALUE",
 * //       retried: true || false,
 * //     },
 * //   ],
 * //   imageBuildVersionArn: "STRING_VALUE",
 * //   message: "STRING_VALUE",
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListWorkflowExecutionsCommandInput - {@link ListWorkflowExecutionsCommandInput}
 * @returns {@link ListWorkflowExecutionsCommandOutput}
 * @see {@link ListWorkflowExecutionsCommandInput} for command's `input` shape.
 * @see {@link ListWorkflowExecutionsCommandOutput} for command's `response` shape.
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
export class ListWorkflowExecutionsCommand extends $Command
  .classBuilder<
    ListWorkflowExecutionsCommandInput,
    ListWorkflowExecutionsCommandOutput,
    ImagebuilderClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ImagebuilderClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("imagebuilder", "ListWorkflowExecutions", {})
  .n("ImagebuilderClient", "ListWorkflowExecutionsCommand")
  .sc(ListWorkflowExecutions)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListWorkflowExecutionsRequest;
      output: ListWorkflowExecutionsResponse;
    };
    sdk: {
      input: ListWorkflowExecutionsCommandInput;
      output: ListWorkflowExecutionsCommandOutput;
    };
  };
}
