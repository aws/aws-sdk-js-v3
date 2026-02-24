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
import type { DisassociateFeedRequest, DisassociateFeedResponse } from "../models/models_0";
import { DisassociateFeed$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateFeedCommand}.
 */
export interface DisassociateFeedCommandInput extends DisassociateFeedRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateFeedCommand}.
 */
export interface DisassociateFeedCommandOutput extends DisassociateFeedResponse, __MetadataBearer {}

/**
 * <p>Releases the resource (for example, an MediaLive channel) that is associated with this feed. The outputs in the feed become disabled.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElementalInferenceClient, DisassociateFeedCommand } from "@aws-sdk/client-elementalinference"; // ES Modules import
 * // const { ElementalInferenceClient, DisassociateFeedCommand } = require("@aws-sdk/client-elementalinference"); // CommonJS import
 * // import type { ElementalInferenceClientConfig } from "@aws-sdk/client-elementalinference";
 * const config = {}; // type is ElementalInferenceClientConfig
 * const client = new ElementalInferenceClient(config);
 * const input = { // DisassociateFeedRequest
 *   id: "STRING_VALUE", // required
 *   associatedResourceName: "STRING_VALUE", // required
 *   dryRun: true || false,
 * };
 * const command = new DisassociateFeedCommand(input);
 * const response = await client.send(command);
 * // { // DisassociateFeedResponse
 * //   arn: "STRING_VALUE", // required
 * //   id: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param DisassociateFeedCommandInput - {@link DisassociateFeedCommandInput}
 * @returns {@link DisassociateFeedCommandOutput}
 * @see {@link DisassociateFeedCommandInput} for command's `input` shape.
 * @see {@link DisassociateFeedCommandOutput} for command's `response` shape.
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
export class DisassociateFeedCommand extends $Command
  .classBuilder<
    DisassociateFeedCommandInput,
    DisassociateFeedCommandOutput,
    ElementalInferenceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElementalInferenceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ElementalInference", "DisassociateFeed", {})
  .n("ElementalInferenceClient", "DisassociateFeedCommand")
  .sc(DisassociateFeed$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateFeedRequest;
      output: DisassociateFeedResponse;
    };
    sdk: {
      input: DisassociateFeedCommandInput;
      output: DisassociateFeedCommandOutput;
    };
  };
}
