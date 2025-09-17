// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ImagebuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ImagebuilderClient";
import { ListLifecycleExecutionsRequest, ListLifecycleExecutionsResponse } from "../models/models_0";
import { de_ListLifecycleExecutionsCommand, se_ListLifecycleExecutionsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Get the lifecycle runtime history for the specified resource.</p>
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
export class ListLifecycleExecutionsCommand extends $Command
  .classBuilder<
    ListLifecycleExecutionsCommandInput,
    ListLifecycleExecutionsCommandOutput,
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
  .s("imagebuilder", "ListLifecycleExecutions", {})
  .n("ImagebuilderClient", "ListLifecycleExecutionsCommand")
  .f(void 0, void 0)
  .ser(se_ListLifecycleExecutionsCommand)
  .de(de_ListLifecycleExecutionsCommand)
  .build() {
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
