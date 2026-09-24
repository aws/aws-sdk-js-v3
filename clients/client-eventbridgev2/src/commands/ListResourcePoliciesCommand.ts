// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep2, _mw0, command } from "../commandBuilder";
import type { ListResourcePoliciesRequest, ListResourcePoliciesResponse } from "../models/models_0";
import { ListResourcePolicies$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListResourcePoliciesCommand}.
 */
export interface ListResourcePoliciesCommandInput extends ListResourcePoliciesRequest {}
/**
 * @public
 *
 * The output of {@link ListResourcePoliciesCommand}.
 */
export interface ListResourcePoliciesCommandOutput extends ListResourcePoliciesResponse, __MetadataBearer {}

/**
 * Lists the resource policies attached to an event bus as summaries (policy
 * name and revision ID). Use GetResourcePolicy to retrieve a policy document.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EventBridgeV2Client, ListResourcePoliciesCommand } from "@aws-sdk/client-eventbridgev2"; // ES Modules import
 * // const { EventBridgeV2Client, ListResourcePoliciesCommand } = require("@aws-sdk/client-eventbridgev2"); // CommonJS import
 * // import type { EventBridgeV2ClientConfig } from "@aws-sdk/client-eventbridgev2";
 * const config = {}; // type is EventBridgeV2ClientConfig
 * const client = new EventBridgeV2Client(config);
 * const input = { // ListResourcePoliciesRequest
 *   ResourceArn: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListResourcePoliciesCommand(input);
 * const response = await client.send(command);
 * // { // ListResourcePoliciesResponse
 * //   PolicySummaries: [ // ResourcePolicySummaryList
 * //     { // ResourcePolicySummary
 * //       PolicyName: "STRING_VALUE", // required
 * //       RevisionId: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListResourcePoliciesCommandInput - {@link ListResourcePoliciesCommandInput}
 * @returns {@link ListResourcePoliciesCommandOutput}
 * @see {@link ListResourcePoliciesCommandInput} for command's `input` shape.
 * @see {@link ListResourcePoliciesCommandOutput} for command's `response` shape.
 * @see {@link EventBridgeV2ClientResolvedConfig | config} for EventBridgeV2Client's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  The resource does not exist.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  The caller does not have the permissions required to perform the operation.
 * This error is also returned when the operation cannot use the AWS KMS key for
 * the event bus.
 *
 * @throws {@link InternalException} (server fault)
 *  The request failed because of an internal service error. Retry the request.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  A request parameter is missing or not valid.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  The request was throttled because it exceeds a request rate limit. Retry the
 * request with backoff.
 *
 * @throws {@link EventBridgeV2ServiceException}
 * <p>Base exception class for all service exceptions from EventBridgeV2 service.</p>
 *
 *
 * @public
 */
export class ListResourcePoliciesCommand extends command<ListResourcePoliciesCommandInput, ListResourcePoliciesCommandOutput>(
  _ep2,
  _mw0,
  "ListResourcePolicies",
  ListResourcePolicies$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListResourcePoliciesRequest;
      output: ListResourcePoliciesResponse;
    };
    sdk: {
      input: ListResourcePoliciesCommandInput;
      output: ListResourcePoliciesCommandOutput;
    };
  };
}
