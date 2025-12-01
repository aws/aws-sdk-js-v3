// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import type { AssociateTrackerConsumerRequest, AssociateTrackerConsumerResponse } from "../models/models_0";
import { AssociateTrackerConsumer } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssociateTrackerConsumerCommand}.
 */
export interface AssociateTrackerConsumerCommandInput extends AssociateTrackerConsumerRequest {}
/**
 * @public
 *
 * The output of {@link AssociateTrackerConsumerCommand}.
 */
export interface AssociateTrackerConsumerCommandOutput extends AssociateTrackerConsumerResponse, __MetadataBearer {}

/**
 * <p>Creates an association between a geofence collection and a tracker resource. This allows the tracker resource to communicate location data to the linked geofence collection. </p> <p>You can associate up to five geofence collections to each tracker resource.</p> <note> <p>Currently not supported — Cross-account configurations, such as creating associations between a tracker resource in one account and a geofence collection in another account.</p> </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, AssociateTrackerConsumerCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, AssociateTrackerConsumerCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * // import type { LocationClientConfig } from "@aws-sdk/client-location";
 * const config = {}; // type is LocationClientConfig
 * const client = new LocationClient(config);
 * const input = { // AssociateTrackerConsumerRequest
 *   TrackerName: "STRING_VALUE", // required
 *   ConsumerArn: "STRING_VALUE", // required
 * };
 * const command = new AssociateTrackerConsumerCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AssociateTrackerConsumerCommandInput - {@link AssociateTrackerConsumerCommandInput}
 * @returns {@link AssociateTrackerConsumerCommandOutput}
 * @see {@link AssociateTrackerConsumerCommandInput} for command's `input` shape.
 * @see {@link AssociateTrackerConsumerCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for LocationClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request was denied because of insufficient access or permissions. Check with an administrator to verify your permissions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request was unsuccessful because of a conflict.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed to process because of an unknown server error, exception, or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource that you've entered was not found in your AWS account.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The operation was denied because the request would exceed the maximum <a href="https://docs.aws.amazon.com/location/previous/developerguide/location-quotas.html">quota</a> set for Amazon Location Service.</p>
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
export class AssociateTrackerConsumerCommand extends $Command
  .classBuilder<
    AssociateTrackerConsumerCommandInput,
    AssociateTrackerConsumerCommandOutput,
    LocationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LocationClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("LocationService", "AssociateTrackerConsumer", {})
  .n("LocationClient", "AssociateTrackerConsumerCommand")
  .sc(AssociateTrackerConsumer)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateTrackerConsumerRequest;
      output: {};
    };
    sdk: {
      input: AssociateTrackerConsumerCommandInput;
      output: AssociateTrackerConsumerCommandOutput;
    };
  };
}
