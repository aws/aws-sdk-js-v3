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
import type { ListFeedsRequest, ListFeedsResponse } from "../models/models_0";
import { ListFeeds$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListFeedsCommand}.
 */
export interface ListFeedsCommandInput extends ListFeedsRequest {}
/**
 * @public
 *
 * The output of {@link ListFeedsCommand}.
 */
export interface ListFeedsCommandOutput extends ListFeedsResponse, __MetadataBearer {}

/**
 * <p>Displays a list of feeds that belong to this AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElementalInferenceClient, ListFeedsCommand } from "@aws-sdk/client-elementalinference"; // ES Modules import
 * // const { ElementalInferenceClient, ListFeedsCommand } = require("@aws-sdk/client-elementalinference"); // CommonJS import
 * // import type { ElementalInferenceClientConfig } from "@aws-sdk/client-elementalinference";
 * const config = {}; // type is ElementalInferenceClientConfig
 * const client = new ElementalInferenceClient(config);
 * const input = { // ListFeedsRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListFeedsCommand(input);
 * const response = await client.send(command);
 * // { // ListFeedsResponse
 * //   feeds: [ // FeedSummaryList // required
 * //     { // FeedSummary
 * //       arn: "STRING_VALUE", // required
 * //       id: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       association: { // FeedAssociation
 * //         associatedResourceName: "STRING_VALUE", // required
 * //       },
 * //       status: "CREATING" || "AVAILABLE" || "ACTIVE" || "UPDATING" || "DELETING" || "DELETED" || "ARCHIVED", // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListFeedsCommandInput - {@link ListFeedsCommandInput}
 * @returns {@link ListFeedsCommandOutput}
 * @see {@link ListFeedsCommandInput} for command's `input` shape.
 * @see {@link ListFeedsCommandOutput} for command's `response` shape.
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
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the service. Check the error message for details about which parameter or field is invalid and correct the request before retrying.</p>
 *
 * @throws {@link ElementalInferenceServiceException}
 * <p>Base exception class for all service exceptions from ElementalInference service.</p>
 *
 *
 * @public
 */
export class ListFeedsCommand extends $Command
  .classBuilder<
    ListFeedsCommandInput,
    ListFeedsCommandOutput,
    ElementalInferenceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElementalInferenceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ElementalInference", "ListFeeds", {})
  .n("ElementalInferenceClient", "ListFeedsCommand")
  .sc(ListFeeds$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListFeedsRequest;
      output: ListFeedsResponse;
    };
    sdk: {
      input: ListFeedsCommandInput;
      output: ListFeedsCommandOutput;
    };
  };
}
