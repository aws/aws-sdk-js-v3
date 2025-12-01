// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import type { ListTrackerConsumersRequest, ListTrackerConsumersResponse } from "../models/models_0";
import { ListTrackerConsumers } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Lists geofence collections currently associated to the given tracker resource.</p>
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
 *  <p>The request was denied because of insufficient access or permissions. Check with an administrator to verify your permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed to process because of an unknown server error, exception, or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource that you've entered was not found in your AWS account.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because of request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input failed to meet the constraints specified by the AWS service. </p>
 *
 * @throws {@link LocationServiceException}
 * <p>Base exception class for all service exceptions from Location service.</p>
 *
 *
 * @public
 */
export class ListTrackerConsumersCommand extends $Command
  .classBuilder<
    ListTrackerConsumersCommandInput,
    ListTrackerConsumersCommandOutput,
    LocationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LocationClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("LocationService", "ListTrackerConsumers", {})
  .n("LocationClient", "ListTrackerConsumersCommand")
  .sc(ListTrackerConsumers)
  .build() {
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
