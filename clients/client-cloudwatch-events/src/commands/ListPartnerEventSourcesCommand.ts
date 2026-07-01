// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListPartnerEventSourcesRequest, ListPartnerEventSourcesResponse } from "../models/models_0";
import { ListPartnerEventSources$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListPartnerEventSourcesCommand}.
 */
export interface ListPartnerEventSourcesCommandInput extends ListPartnerEventSourcesRequest {}
/**
 * @public
 *
 * The output of {@link ListPartnerEventSourcesCommand}.
 */
export interface ListPartnerEventSourcesCommandOutput extends ListPartnerEventSourcesResponse, __MetadataBearer {}

/**
 * <p>An SaaS partner can use this operation to list all the partner event source names that
 *       they have created. This operation is not used by Amazon Web Services customers.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchEventsClient, ListPartnerEventSourcesCommand } from "@aws-sdk/client-cloudwatch-events"; // ES Modules import
 * // const { CloudWatchEventsClient, ListPartnerEventSourcesCommand } = require("@aws-sdk/client-cloudwatch-events"); // CommonJS import
 * // import type { CloudWatchEventsClientConfig } from "@aws-sdk/client-cloudwatch-events";
 * const config = {}; // type is CloudWatchEventsClientConfig
 * const client = new CloudWatchEventsClient(config);
 * const input = { // ListPartnerEventSourcesRequest
 *   NamePrefix: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   Limit: Number("int"),
 * };
 * const command = new ListPartnerEventSourcesCommand(input);
 * const response = await client.send(command);
 * // { // ListPartnerEventSourcesResponse
 * //   PartnerEventSources: [ // PartnerEventSourceList
 * //     { // PartnerEventSource
 * //       Arn: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPartnerEventSourcesCommandInput - {@link ListPartnerEventSourcesCommandInput}
 * @returns {@link ListPartnerEventSourcesCommandOutput}
 * @see {@link ListPartnerEventSourcesCommandInput} for command's `input` shape.
 * @see {@link ListPartnerEventSourcesCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchEventsClientResolvedConfig | config} for CloudWatchEventsClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>This exception occurs due to unexpected causes.</p>
 *
 * @throws {@link OperationDisabledException} (client fault)
 *  <p>The operation you are attempting is not available in this region.</p>
 *
 * @throws {@link CloudWatchEventsServiceException}
 * <p>Base exception class for all service exceptions from CloudWatchEvents service.</p>
 *
 *
 * @public
 */
export class ListPartnerEventSourcesCommand extends command<ListPartnerEventSourcesCommandInput, ListPartnerEventSourcesCommandOutput>(
  _ep0,
  _mw0,
  "ListPartnerEventSources",
  ListPartnerEventSources$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPartnerEventSourcesRequest;
      output: ListPartnerEventSourcesResponse;
    };
    sdk: {
      input: ListPartnerEventSourcesCommandInput;
      output: ListPartnerEventSourcesCommandOutput;
    };
  };
}
