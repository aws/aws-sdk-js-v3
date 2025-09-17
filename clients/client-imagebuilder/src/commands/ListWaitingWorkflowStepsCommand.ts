// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ImagebuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ImagebuilderClient";
import { ListWaitingWorkflowStepsRequest, ListWaitingWorkflowStepsResponse } from "../models/models_0";
import { de_ListWaitingWorkflowStepsCommand, se_ListWaitingWorkflowStepsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListWaitingWorkflowStepsCommand}.
 */
export interface ListWaitingWorkflowStepsCommandInput extends ListWaitingWorkflowStepsRequest {}
/**
 * @public
 *
 * The output of {@link ListWaitingWorkflowStepsCommand}.
 */
export interface ListWaitingWorkflowStepsCommandOutput extends ListWaitingWorkflowStepsResponse, __MetadataBearer {}

/**
 * <p>Get a list of workflow steps that are waiting for action for workflows
 * 			in your Amazon Web Services account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, ListWaitingWorkflowStepsCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, ListWaitingWorkflowStepsCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * // import type { ImagebuilderClientConfig } from "@aws-sdk/client-imagebuilder";
 * const config = {}; // type is ImagebuilderClientConfig
 * const client = new ImagebuilderClient(config);
 * const input = { // ListWaitingWorkflowStepsRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListWaitingWorkflowStepsCommand(input);
 * const response = await client.send(command);
 * // { // ListWaitingWorkflowStepsResponse
 * //   steps: [ // WorkflowStepExecutionList
 * //     { // WorkflowStepExecution
 * //       stepExecutionId: "STRING_VALUE",
 * //       imageBuildVersionArn: "STRING_VALUE",
 * //       workflowExecutionId: "STRING_VALUE",
 * //       workflowBuildVersionArn: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       action: "STRING_VALUE",
 * //       startTime: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListWaitingWorkflowStepsCommandInput - {@link ListWaitingWorkflowStepsCommandInput}
 * @returns {@link ListWaitingWorkflowStepsCommandOutput}
 * @see {@link ListWaitingWorkflowStepsCommandInput} for command's `input` shape.
 * @see {@link ListWaitingWorkflowStepsCommandOutput} for command's `response` shape.
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
export class ListWaitingWorkflowStepsCommand extends $Command
  .classBuilder<
    ListWaitingWorkflowStepsCommandInput,
    ListWaitingWorkflowStepsCommandOutput,
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
  .s("imagebuilder", "ListWaitingWorkflowSteps", {})
  .n("ImagebuilderClient", "ListWaitingWorkflowStepsCommand")
  .f(void 0, void 0)
  .ser(se_ListWaitingWorkflowStepsCommand)
  .de(de_ListWaitingWorkflowStepsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListWaitingWorkflowStepsRequest;
      output: ListWaitingWorkflowStepsResponse;
    };
    sdk: {
      input: ListWaitingWorkflowStepsCommandInput;
      output: ListWaitingWorkflowStepsCommandOutput;
    };
  };
}
