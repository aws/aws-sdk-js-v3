// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ImagebuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ImagebuilderClient";
import { GetWorkflowStepExecutionRequest, GetWorkflowStepExecutionResponse } from "../models/models_0";
import { de_GetWorkflowStepExecutionCommand, se_GetWorkflowStepExecutionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetWorkflowStepExecutionCommand}.
 */
export interface GetWorkflowStepExecutionCommandInput extends GetWorkflowStepExecutionRequest {}
/**
 * @public
 *
 * The output of {@link GetWorkflowStepExecutionCommand}.
 */
export interface GetWorkflowStepExecutionCommandOutput extends GetWorkflowStepExecutionResponse, __MetadataBearer {}

/**
 * <p>Get the runtime information that was logged for a specific runtime instance of
 * 			the workflow step.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, GetWorkflowStepExecutionCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, GetWorkflowStepExecutionCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * // import type { ImagebuilderClientConfig } from "@aws-sdk/client-imagebuilder";
 * const config = {}; // type is ImagebuilderClientConfig
 * const client = new ImagebuilderClient(config);
 * const input = { // GetWorkflowStepExecutionRequest
 *   stepExecutionId: "STRING_VALUE", // required
 * };
 * const command = new GetWorkflowStepExecutionCommand(input);
 * const response = await client.send(command);
 * // { // GetWorkflowStepExecutionResponse
 * //   requestId: "STRING_VALUE",
 * //   stepExecutionId: "STRING_VALUE",
 * //   workflowBuildVersionArn: "STRING_VALUE",
 * //   workflowExecutionId: "STRING_VALUE",
 * //   imageBuildVersionArn: "STRING_VALUE",
 * //   name: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   action: "STRING_VALUE",
 * //   status: "PENDING" || "SKIPPED" || "RUNNING" || "COMPLETED" || "FAILED" || "CANCELLED",
 * //   rollbackStatus: "RUNNING" || "COMPLETED" || "SKIPPED" || "FAILED",
 * //   message: "STRING_VALUE",
 * //   inputs: "STRING_VALUE",
 * //   outputs: "STRING_VALUE",
 * //   startTime: "STRING_VALUE",
 * //   endTime: "STRING_VALUE",
 * //   onFailure: "STRING_VALUE",
 * //   timeoutSeconds: Number("int"),
 * // };
 *
 * ```
 *
 * @param GetWorkflowStepExecutionCommandInput - {@link GetWorkflowStepExecutionCommandInput}
 * @returns {@link GetWorkflowStepExecutionCommandOutput}
 * @see {@link GetWorkflowStepExecutionCommandInput} for command's `input` shape.
 * @see {@link GetWorkflowStepExecutionCommandOutput} for command's `response` shape.
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
export class GetWorkflowStepExecutionCommand extends $Command
  .classBuilder<
    GetWorkflowStepExecutionCommandInput,
    GetWorkflowStepExecutionCommandOutput,
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
  .s("imagebuilder", "GetWorkflowStepExecution", {})
  .n("ImagebuilderClient", "GetWorkflowStepExecutionCommand")
  .f(void 0, void 0)
  .ser(se_GetWorkflowStepExecutionCommand)
  .de(de_GetWorkflowStepExecutionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetWorkflowStepExecutionRequest;
      output: GetWorkflowStepExecutionResponse;
    };
    sdk: {
      input: GetWorkflowStepExecutionCommandInput;
      output: GetWorkflowStepExecutionCommandOutput;
    };
  };
}
