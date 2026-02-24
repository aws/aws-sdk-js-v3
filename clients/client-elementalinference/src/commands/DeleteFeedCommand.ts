// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  ElementalInferenceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElementalInferenceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteFeedRequest, DeleteFeedResponse } from "../models/models_0";
import { DeleteFeed$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteFeedCommand}.
 */
export interface DeleteFeedCommandInput extends DeleteFeedRequest {}
/**
 * @public
 *
 * The output of {@link DeleteFeedCommand}.
 */
export interface DeleteFeedCommandOutput extends DeleteFeedResponse, __MetadataBearer {}

/**
 * <p>Deletes the specified feed. The feed can be deleted at any time.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElementalInferenceClient, DeleteFeedCommand } from "@aws-sdk/client-elementalinference"; // ES Modules import
 * // const { ElementalInferenceClient, DeleteFeedCommand } = require("@aws-sdk/client-elementalinference"); // CommonJS import
 * // import type { ElementalInferenceClientConfig } from "@aws-sdk/client-elementalinference";
 * const config = {}; // type is ElementalInferenceClientConfig
 * const client = new ElementalInferenceClient(config);
 * const input = { // DeleteFeedRequest
 *   id: "STRING_VALUE", // required
 * };
 * const command = new DeleteFeedCommand(input);
 * const response = await client.send(command);
 * // { // DeleteFeedResponse
 * //   arn: "STRING_VALUE", // required
 * //   id: "STRING_VALUE", // required
 * //   status: "CREATING" || "AVAILABLE" || "ACTIVE" || "UPDATING" || "DELETING" || "DELETED" || "ARCHIVED", // required
 * // };
 *
 * ```
 *
 * @param DeleteFeedCommandInput - {@link DeleteFeedCommandInput}
 * @returns {@link DeleteFeedCommandOutput}
 * @see {@link DeleteFeedCommandInput} for command's `input` shape.
 * @see {@link DeleteFeedCommandOutput} for command's `response` shape.
 * @see {@link ElementalInferenceClientResolvedConfig | config} for ElementalInferenceClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be completed due to a conflict.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>An internal server error occurred. This is a temporary condition and the request can be retried. If the problem persists, contact AWS Support.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource specified in the action doesn't exist.</p>
 *
 * @throws {@link TooManyRequestException} (client fault)
 *  <p>The request was denied due to request throttling. Too many requests have been made within a given time period. Reduce the frequency of requests and use exponential backoff when retrying.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the service. Check the error message for details about which parameter or field is invalid and correct the request before retrying.</p>
 *
 * @throws {@link ElementalInferenceServiceException}
 * <p>Base exception class for all service exceptions from ElementalInference service.</p>
 *
 *
 * @public
 */
export class DeleteFeedCommand extends $Command
  .classBuilder<
    DeleteFeedCommandInput,
    DeleteFeedCommandOutput,
    ElementalInferenceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElementalInferenceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ElementalInference", "DeleteFeed", {})
  .n("ElementalInferenceClient", "DeleteFeedCommand")
  .sc(DeleteFeed$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteFeedRequest;
      output: DeleteFeedResponse;
    };
    sdk: {
      input: DeleteFeedCommandInput;
      output: DeleteFeedCommandOutput;
    };
  };
}
