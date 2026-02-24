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
import type { GetFeedRequest, GetFeedResponse } from "../models/models_0";
import { GetFeed$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetFeedCommand}.
 */
export interface GetFeedCommandInput extends GetFeedRequest {}
/**
 * @public
 *
 * The output of {@link GetFeedCommand}.
 */
export interface GetFeedCommandOutput extends GetFeedResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about the specified feed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElementalInferenceClient, GetFeedCommand } from "@aws-sdk/client-elementalinference"; // ES Modules import
 * // const { ElementalInferenceClient, GetFeedCommand } = require("@aws-sdk/client-elementalinference"); // CommonJS import
 * // import type { ElementalInferenceClientConfig } from "@aws-sdk/client-elementalinference";
 * const config = {}; // type is ElementalInferenceClientConfig
 * const client = new ElementalInferenceClient(config);
 * const input = { // GetFeedRequest
 *   id: "STRING_VALUE", // required
 * };
 * const command = new GetFeedCommand(input);
 * const response = await client.send(command);
 * // { // GetFeedResponse
 * //   arn: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   id: "STRING_VALUE", // required
 * //   dataEndpoints: [ // StringList // required
 * //     "STRING_VALUE",
 * //   ],
 * //   outputs: [ // GetOutputList // required
 * //     { // GetOutput
 * //       name: "STRING_VALUE", // required
 * //       outputConfig: { // OutputConfig Union: only one key present
 * //         cropping: {},
 * //         clipping: { // ClippingConfig
 * //           callbackMetadata: "STRING_VALUE",
 * //         },
 * //       },
 * //       status: "ENABLED" || "DISABLED", // required
 * //       description: "STRING_VALUE",
 * //       fromAssociation: true || false,
 * //     },
 * //   ],
 * //   status: "CREATING" || "AVAILABLE" || "ACTIVE" || "UPDATING" || "DELETING" || "DELETED" || "ARCHIVED", // required
 * //   association: { // FeedAssociation
 * //     associatedResourceName: "STRING_VALUE", // required
 * //   },
 * //   tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetFeedCommandInput - {@link GetFeedCommandInput}
 * @returns {@link GetFeedCommandOutput}
 * @see {@link GetFeedCommandInput} for command's `input` shape.
 * @see {@link GetFeedCommandOutput} for command's `response` shape.
 * @see {@link ElementalInferenceClientResolvedConfig | config} for ElementalInferenceClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
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
 * @throws {@link ElementalInferenceServiceException}
 * <p>Base exception class for all service exceptions from ElementalInference service.</p>
 *
 *
 * @public
 */
export class GetFeedCommand extends $Command
  .classBuilder<
    GetFeedCommandInput,
    GetFeedCommandOutput,
    ElementalInferenceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElementalInferenceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ElementalInference", "GetFeed", {})
  .n("ElementalInferenceClient", "GetFeedCommand")
  .sc(GetFeed$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetFeedRequest;
      output: GetFeedResponse;
    };
    sdk: {
      input: GetFeedCommandInput;
      output: GetFeedCommandOutput;
    };
  };
}
