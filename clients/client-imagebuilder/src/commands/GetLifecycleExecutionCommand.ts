// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ImagebuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ImagebuilderClient";
import type { GetLifecycleExecutionRequest, GetLifecycleExecutionResponse } from "../models/models_0";
import { GetLifecycleExecution$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Get the runtime information that was logged for a specific runtime instance of the lifecycle policy.</p>
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
export class GetLifecycleExecutionCommand extends $Command
  .classBuilder<
    GetLifecycleExecutionCommandInput,
    GetLifecycleExecutionCommandOutput,
    ImagebuilderClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ImagebuilderClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("imagebuilder", "GetLifecycleExecution", {})
  .n("ImagebuilderClient", "GetLifecycleExecutionCommand")
  .sc(GetLifecycleExecution$)
  .build() {
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
