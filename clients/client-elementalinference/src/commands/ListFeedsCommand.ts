// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListFeedsRequest, ListFeedsResponse } from "../models/models_0";
import { ListFeeds$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Displays a list of feeds that belong to this AWS account.
 *
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
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *
 * An internal server error occurred. This is a temporary condition and the request can be retried. If the problem persists, contact AWS Support.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource specified in the action doesn't exist.
 *
 * @throws {@link TooManyRequestException} (client fault)
 *
 * The request was denied due to request throttling. Too many requests have been made within a given time period. Reduce the frequency of requests and use exponential backoff when retrying.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by the service. Check the error message for details about which parameter or field is invalid and correct the request before retrying.
 *
 * @throws {@link ElementalInferenceServiceException}
 *
 * Base exception class for all service exceptions from ElementalInference service.
 *
 * @public
 */
export class ListFeedsCommand extends command<ListFeedsCommandInput, ListFeedsCommandOutput>(
  _ep0,
  _mw0,
  "ListFeeds",
  ListFeeds$
) {
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
