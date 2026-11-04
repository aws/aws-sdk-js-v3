// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListTrackersRequest, ListTrackersResponse } from "../models/models_0";
import { ListTrackers$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListTrackersCommand}.
 */
export interface ListTrackersCommandInput extends ListTrackersRequest {}
/**
 * @public
 *
 * The output of {@link ListTrackersCommand}.
 */
export interface ListTrackersCommandOutput extends ListTrackersResponse, __MetadataBearer {}

/**
 * Lists tracker resources in your Amazon Web Services account.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, ListTrackersCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, ListTrackersCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * // import type { LocationClientConfig } from "@aws-sdk/client-location";
 * const config = {}; // type is LocationClientConfig
 * const client = new LocationClient(config);
 * const input = { // ListTrackersRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListTrackersCommand(input);
 * const response = await client.send(command);
 * // { // ListTrackersResponse
 * //   Entries: [ // ListTrackersResponseEntryList // required
 * //     { // ListTrackersResponseEntry
 * //       TrackerName: "STRING_VALUE", // required
 * //       Description: "STRING_VALUE", // required
 * //       PricingPlan: "STRING_VALUE",
 * //       PricingPlanDataSource: "STRING_VALUE",
 * //       CreateTime: new Date("TIMESTAMP"), // required
 * //       UpdateTime: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTrackersCommandInput - {@link ListTrackersCommandInput}
 * @returns {@link ListTrackersCommandOutput}
 * @see {@link ListTrackersCommandInput} for command's `input` shape.
 * @see {@link ListTrackersCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for LocationClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The request was denied because of insufficient access or permissions. Check with an administrator to verify your permissions.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request has failed to process because of an unknown server error, exception, or failure.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied because of request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input failed to meet the constraints specified by the AWS service.
 *
 * @throws {@link LocationServiceException}
 *
 * Base exception class for all service exceptions from Location service.
 *
 * @public
 */
export class ListTrackersCommand extends command<ListTrackersCommandInput, ListTrackersCommandOutput>(
  _ep0,
  _mw0,
  "ListTrackers",
  ListTrackers$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTrackersRequest;
      output: ListTrackersResponse;
    };
    sdk: {
      input: ListTrackersCommandInput;
      output: ListTrackersCommandOutput;
    };
  };
}
