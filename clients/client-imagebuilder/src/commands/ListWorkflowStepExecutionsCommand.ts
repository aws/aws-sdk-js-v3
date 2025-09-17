// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ImagebuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ImagebuilderClient";
import { ListWorkflowStepExecutionsRequest, ListWorkflowStepExecutionsResponse } from "../models/models_0";
import { de_ListWorkflowStepExecutionsCommand, se_ListWorkflowStepExecutionsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListWorkflowStepExecutionsCommand}.
 */
export interface ListWorkflowStepExecutionsCommandInput extends ListWorkflowStepExecutionsRequest {}
/**
 * @public
 *
 * The output of {@link ListWorkflowStepExecutionsCommand}.
 */
export interface ListWorkflowStepExecutionsCommandOutput extends ListWorkflowStepExecutionsResponse, __MetadataBearer {}

/**
 * <p>Returns runtime data for each step in a runtime instance of the workflow
 * 			that you specify in the request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, ListWorkflowStepExecutionsCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, ListWorkflowStepExecutionsCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * // import type { ImagebuilderClientConfig } from "@aws-sdk/client-imagebuilder";
 * const config = {}; // type is ImagebuilderClientConfig
 * const client = new ImagebuilderClient(config);
 * const input = { // ListWorkflowStepExecutionsRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   workflowExecutionId: "STRING_VALUE", // required
 * };
 * const command = new ListWorkflowStepExecutionsCommand(input);
 * const response = await client.send(command);
 * // { // ListWorkflowStepExecutionsResponse
 * //   requestId: "STRING_VALUE",
 * //   steps: [ // WorkflowStepExecutionsList
 * //     { // WorkflowStepMetadata
 * //       stepExecutionId: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       action: "STRING_VALUE",
 * //       status: "PENDING" || "SKIPPED" || "RUNNING" || "COMPLETED" || "FAILED" || "CANCELLED",
 * //       rollbackStatus: "RUNNING" || "COMPLETED" || "SKIPPED" || "FAILED",
 * //       message: "STRING_VALUE",
 * //       inputs: "STRING_VALUE",
 * //       outputs: "STRING_VALUE",
 * //       startTime: "STRING_VALUE",
 * //       endTime: "STRING_VALUE",
 * //     },
 * //   ],
 * //   workflowBuildVersionArn: "STRING_VALUE",
 * //   workflowExecutionId: "STRING_VALUE",
 * //   imageBuildVersionArn: "STRING_VALUE",
 * //   message: "STRING_VALUE",
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListWorkflowStepExecutionsCommandInput - {@link ListWorkflowStepExecutionsCommandInput}
 * @returns {@link ListWorkflowStepExecutionsCommandOutput}
 * @see {@link ListWorkflowStepExecutionsCommandInput} for command's `input` shape.
 * @see {@link ListWorkflowStepExecutionsCommandOutput} for command's `response` shape.
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
export class ListWorkflowStepExecutionsCommand extends $Command
  .classBuilder<
    ListWorkflowStepExecutionsCommandInput,
    ListWorkflowStepExecutionsCommandOutput,
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
  .s("imagebuilder", "ListWorkflowStepExecutions", {})
  .n("ImagebuilderClient", "ListWorkflowStepExecutionsCommand")
  .f(void 0, void 0)
  .ser(se_ListWorkflowStepExecutionsCommand)
  .de(de_ListWorkflowStepExecutionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListWorkflowStepExecutionsRequest;
      output: ListWorkflowStepExecutionsResponse;
    };
    sdk: {
      input: ListWorkflowStepExecutionsCommandInput;
      output: ListWorkflowStepExecutionsCommandOutput;
    };
  };
}
