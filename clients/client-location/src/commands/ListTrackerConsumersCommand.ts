// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListTrackerConsumersRequest, ListTrackerConsumersResponse } from "../models/models_0";
import { ListTrackerConsumers$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListTrackerConsumersCommand}.
 */
export interface ListTrackerConsumersCommandInput extends ListTrackerConsumersRequest {}
/**
 * @public
 *
 * The output of {@link ListTrackerConsumersCommand}.
 */
export interface ListTrackerConsumersCommandOutput extends ListTrackerConsumersResponse, __MetadataBearer {}

/**
 * Lists geofence collections currently associated to the given tracker resource.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, ListTrackerConsumersCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, ListTrackerConsumersCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * // import type { LocationClientConfig } from "@aws-sdk/client-location";
 * const config = {}; // type is LocationClientConfig
 * const client = new LocationClient(config);
 * const input = { // ListTrackerConsumersRequest
 *   TrackerName: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListTrackerConsumersCommand(input);
 * const response = await client.send(command);
 * // { // ListTrackerConsumersResponse
 * //   ConsumerArns: [ // ArnList // required
 * //     "STRING_VALUE",
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTrackerConsumersCommandInput - {@link ListTrackerConsumersCommandInput}
 * @returns {@link ListTrackerConsumersCommandOutput}
 * @see {@link ListTrackerConsumersCommandInput} for command's `input` shape.
 * @see {@link ListTrackerConsumersCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource that you've entered was not found in your AWS account.
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
export class ListTrackerConsumersCommand extends command<ListTrackerConsumersCommandInput, ListTrackerConsumersCommandOutput>(
  _ep0,
  _mw0,
  "ListTrackerConsumers",
  ListTrackerConsumers$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTrackerConsumersRequest;
      output: ListTrackerConsumersResponse;
    };
    sdk: {
      input: ListTrackerConsumersCommandInput;
      output: ListTrackerConsumersCommandOutput;
    };
  };
}
