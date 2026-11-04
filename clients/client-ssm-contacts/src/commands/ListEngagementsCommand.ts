// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListEngagementsRequest, ListEngagementsResult } from "../models/models_0";
import { ListEngagements$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListEngagementsCommand}.
 */
export interface ListEngagementsCommandInput extends ListEngagementsRequest {}
/**
 * @public
 *
 * The output of {@link ListEngagementsCommand}.
 */
export interface ListEngagementsCommandOutput extends ListEngagementsResult, __MetadataBearer {}

/**
 * Lists all engagements that have happened in an incident.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMContactsClient, ListEngagementsCommand } from "@aws-sdk/client-ssm-contacts"; // ES Modules import
 * // const { SSMContactsClient, ListEngagementsCommand } = require("@aws-sdk/client-ssm-contacts"); // CommonJS import
 * // import type { SSMContactsClientConfig } from "@aws-sdk/client-ssm-contacts";
 * const config = {}; // type is SSMContactsClientConfig
 * const client = new SSMContactsClient(config);
 * const input = { // ListEngagementsRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   IncidentId: "STRING_VALUE",
 *   TimeRangeValue: { // TimeRange
 *     StartTime: new Date("TIMESTAMP"),
 *     EndTime: new Date("TIMESTAMP"),
 *   },
 * };
 * const command = new ListEngagementsCommand(input);
 * const response = await client.send(command);
 * // { // ListEngagementsResult
 * //   NextToken: "STRING_VALUE",
 * //   Engagements: [ // EngagementsList // required
 * //     { // Engagement
 * //       EngagementArn: "STRING_VALUE", // required
 * //       ContactArn: "STRING_VALUE", // required
 * //       Sender: "STRING_VALUE", // required
 * //       IncidentId: "STRING_VALUE",
 * //       StartTime: new Date("TIMESTAMP"),
 * //       StopTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListEngagementsCommandInput - {@link ListEngagementsCommandInput}
 * @returns {@link ListEngagementsCommandOutput}
 * @see {@link ListEngagementsCommandInput} for command's `input` shape.
 * @see {@link ListEngagementsCommandOutput} for command's `response` shape.
 * @see {@link SSMContactsClientResolvedConfig | config} for SSMContactsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have sufficient access to perform this operation.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Unexpected error occurred while processing the request.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link SSMContactsServiceException}
 *
 * Base exception class for all service exceptions from SSMContacts service.
 *
 * @public
 */
export class ListEngagementsCommand extends command<ListEngagementsCommandInput, ListEngagementsCommandOutput>(
  _ep0,
  _mw0,
  "ListEngagements",
  ListEngagements$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListEngagementsRequest;
      output: ListEngagementsResult;
    };
    sdk: {
      input: ListEngagementsCommandInput;
      output: ListEngagementsCommandOutput;
    };
  };
}
