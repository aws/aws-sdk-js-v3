// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ImagebuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ImagebuilderClient";
import { GetWorkflowExecutionRequest, GetWorkflowExecutionResponse } from "../models/models_0";
import { de_GetWorkflowExecutionCommand, se_GetWorkflowExecutionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetWorkflowExecutionCommand}.
 */
export interface GetWorkflowExecutionCommandInput extends GetWorkflowExecutionRequest {}
/**
 * @public
 *
 * The output of {@link GetWorkflowExecutionCommand}.
 */
export interface GetWorkflowExecutionCommandOutput extends GetWorkflowExecutionResponse, __MetadataBearer {}

/**
 * <p>Get the runtime information that was logged for a specific runtime instance
 * 			of the workflow.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, GetWorkflowExecutionCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, GetWorkflowExecutionCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * const client = new ImagebuilderClient(config);
 * const input = { // GetWorkflowExecutionRequest
 *   workflowExecutionId: "STRING_VALUE", // required
 * };
 * const command = new GetWorkflowExecutionCommand(input);
 * const response = await client.send(command);
 * // { // GetWorkflowExecutionResponse
 * //   requestId: "STRING_VALUE",
 * //   workflowBuildVersionArn: "STRING_VALUE",
 * //   workflowExecutionId: "STRING_VALUE",
 * //   imageBuildVersionArn: "STRING_VALUE",
 * //   type: "BUILD" || "TEST" || "DISTRIBUTION",
 * //   status: "PENDING" || "SKIPPED" || "RUNNING" || "COMPLETED" || "FAILED" || "ROLLBACK_IN_PROGRESS" || "ROLLBACK_COMPLETED" || "CANCELLED",
 * //   message: "STRING_VALUE",
 * //   totalStepCount: Number("int"),
 * //   totalStepsSucceeded: Number("int"),
 * //   totalStepsFailed: Number("int"),
 * //   totalStepsSkipped: Number("int"),
 * //   startTime: "STRING_VALUE",
 * //   endTime: "STRING_VALUE",
 * //   parallelGroup: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetWorkflowExecutionCommandInput - {@link GetWorkflowExecutionCommandInput}
 * @returns {@link GetWorkflowExecutionCommandOutput}
 * @see {@link GetWorkflowExecutionCommandInput} for command's `input` shape.
 * @see {@link GetWorkflowExecutionCommandOutput} for command's `response` shape.
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
 * @public
 */
export class GetWorkflowExecutionCommand extends $Command
  .classBuilder<
    GetWorkflowExecutionCommandInput,
    GetWorkflowExecutionCommandOutput,
    ImagebuilderClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ImagebuilderClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("imagebuilder", "GetWorkflowExecution", {})
  .n("ImagebuilderClient", "GetWorkflowExecutionCommand")
  .f(void 0, void 0)
  .ser(se_GetWorkflowExecutionCommand)
  .de(de_GetWorkflowExecutionCommand)
  .build() {}
