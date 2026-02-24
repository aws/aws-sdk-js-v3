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
import type { CreateFeedRequest, CreateFeedResponse } from "../models/models_0";
import { CreateFeed$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateFeedCommand}.
 */
export interface CreateFeedCommandInput extends CreateFeedRequest {}
/**
 * @public
 *
 * The output of {@link CreateFeedCommand}.
 */
export interface CreateFeedCommandOutput extends CreateFeedResponse, __MetadataBearer {}

/**
 * <p>Creates a feed. The feed is the target for live streams being sent by the calling application. An example of a calling application is AWS Elemental MediaLive. After you create the feed, you can associate a resource with the feed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElementalInferenceClient, CreateFeedCommand } from "@aws-sdk/client-elementalinference"; // ES Modules import
 * // const { ElementalInferenceClient, CreateFeedCommand } = require("@aws-sdk/client-elementalinference"); // CommonJS import
 * // import type { ElementalInferenceClientConfig } from "@aws-sdk/client-elementalinference";
 * const config = {}; // type is ElementalInferenceClientConfig
 * const client = new ElementalInferenceClient(config);
 * const input = { // CreateFeedRequest
 *   name: "STRING_VALUE", // required
 *   outputs: [ // CreateOutputList // required
 *     { // CreateOutput
 *       name: "STRING_VALUE", // required
 *       outputConfig: { // OutputConfig Union: only one key present
 *         cropping: {},
 *         clipping: { // ClippingConfig
 *           callbackMetadata: "STRING_VALUE",
 *         },
 *       },
 *       status: "ENABLED" || "DISABLED", // required
 *       description: "STRING_VALUE",
 *     },
 *   ],
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateFeedCommand(input);
 * const response = await client.send(command);
 * // { // CreateFeedResponse
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
 * @param CreateFeedCommandInput - {@link CreateFeedCommandInput}
 * @returns {@link CreateFeedCommandOutput}
 * @see {@link CreateFeedCommandInput} for command's `input` shape.
 * @see {@link CreateFeedCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request was rejected because it would exceed one or more service quotas for your account. Review your service quotas and either delete unused resources or request a quota increase.</p>
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
export class CreateFeedCommand extends $Command
  .classBuilder<
    CreateFeedCommandInput,
    CreateFeedCommandOutput,
    ElementalInferenceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElementalInferenceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ElementalInference", "CreateFeed", {})
  .n("ElementalInferenceClient", "CreateFeedCommand")
  .sc(CreateFeed$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateFeedRequest;
      output: CreateFeedResponse;
    };
    sdk: {
      input: CreateFeedCommandInput;
      output: CreateFeedCommandOutput;
    };
  };
}
