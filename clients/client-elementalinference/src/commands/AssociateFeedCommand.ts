// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  ElementalInferenceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElementalInferenceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { AssociateFeedRequest, AssociateFeedResponse } from "../models/models_0";
import { AssociateFeed$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssociateFeedCommand}.
 */
export interface AssociateFeedCommandInput extends AssociateFeedRequest {}
/**
 * @public
 *
 * The output of {@link AssociateFeedCommand}.
 */
export interface AssociateFeedCommandOutput extends AssociateFeedResponse, __MetadataBearer {}

/**
 * <p>Associates a resource with the feed. The resource provides the input that Elemental Inference needs in order to perform an Elemental Inference feature, such as cropping video. You always provide the resource by associating it with a feed. You can associate only one resource with each feed. With an association, a specific source media is claiming ownership of the feed. </p> <p>AssociateFeed is a PATCH operation, which means that you can include only parameters that you want to change. Parameters that you don't include will not be affected by the operation. </p> <p>Specifically:</p> <ul> <li> <p>You can add more outputs to the existing outputs. New outputs will be appended.</p> </li> <li> <p>You can't modify an existing output (for example to change its name). Instead, use UpdateFeed. </p> </li> <li> <p>You can't delete an existing output. Instead, use UpdateFeed.</p> </li> </ul> <p>Also note that you can't change the feed name with AssociateFeed. Instead, use UpdateFeed. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElementalInferenceClient, AssociateFeedCommand } from "@aws-sdk/client-elementalinference"; // ES Modules import
 * // const { ElementalInferenceClient, AssociateFeedCommand } = require("@aws-sdk/client-elementalinference"); // CommonJS import
 * // import type { ElementalInferenceClientConfig } from "@aws-sdk/client-elementalinference";
 * const config = {}; // type is ElementalInferenceClientConfig
 * const client = new ElementalInferenceClient(config);
 * const input = { // AssociateFeedRequest
 *   id: "STRING_VALUE", // required
 *   associatedResourceName: "STRING_VALUE", // required
 *   outputs: [ // CreateOutputList // required
 *     { // CreateOutput
 *       name: "STRING_VALUE", // required
 *       outputConfig: { // OutputConfig Union: only one key present
 *         cropping: {},
 *         clipping: { // ClippingConfig
 *           callbackMetadata: "STRING_VALUE",
 *         },
 *         subtitling: { // SubtitlingConfig
 *           language: "eng" || "eng-au" || "eng-gb" || "eng-us" || "fra" || "ita" || "deu" || "spa" || "por", // required
 *           aspectRatio: { // AspectRatio
 *             width: Number("int"), // required
 *             height: Number("int"), // required
 *           },
 *           dictionary: "STRING_VALUE",
 *           profanityFilter: "DISABLED" || "CENSOR" || "DROP",
 *         },
 *       },
 *       status: "ENABLED" || "DISABLED", // required
 *       description: "STRING_VALUE",
 *     },
 *   ],
 *   dryRun: true || false,
 * };
 * const command = new AssociateFeedCommand(input);
 * const response = await client.send(command);
 * // { // AssociateFeedResponse
 * //   arn: "STRING_VALUE", // required
 * //   id: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param AssociateFeedCommandInput - {@link AssociateFeedCommandInput}
 * @returns {@link AssociateFeedCommandOutput}
 * @see {@link AssociateFeedCommandInput} for command's `input` shape.
 * @see {@link AssociateFeedCommandOutput} for command's `response` shape.
 * @see {@link ElementalInferenceClientResolvedConfig | config} for ElementalInferenceClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be completed due to a conflict.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>An internal server error occurred. This is a temporary condition and the request can be retried. If the problem persists, contact AWS Support. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource specified in the action doesn't exist.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request was rejected because it would exceed one or more service quotas for your account. Review your service quotas and either delete unused resources or request a quota increase. </p>
 *
 * @throws {@link TooManyRequestException} (client fault)
 *  <p>The request was denied due to request throttling. Too many requests have been made within a given time period. Reduce the frequency of requests and use exponential backoff when retrying. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the service. Check the error message for details about which parameter or field is invalid and correct the request before retrying. </p>
 *
 * @throws {@link ElementalInferenceServiceException}
 * <p>Base exception class for all service exceptions from ElementalInference service.</p>
 *
 *
 * @public
 */
export class AssociateFeedCommand extends $Command
  .classBuilder<
    AssociateFeedCommandInput,
    AssociateFeedCommandOutput,
    ElementalInferenceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElementalInferenceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ElementalInference", "AssociateFeed", {})
  .n("ElementalInferenceClient", "AssociateFeedCommand")
  .sc(AssociateFeed$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateFeedRequest;
      output: AssociateFeedResponse;
    };
    sdk: {
      input: AssociateFeedCommandInput;
      output: AssociateFeedCommandOutput;
    };
  };
}
