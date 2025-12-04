// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import type { DescribeTrackerRequest, DescribeTrackerResponse } from "../models/models_0";
import { DescribeTracker } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeTrackerCommand}.
 */
export interface DescribeTrackerCommandInput extends DescribeTrackerRequest {}
/**
 * @public
 *
 * The output of {@link DescribeTrackerCommand}.
 */
export interface DescribeTrackerCommandOutput extends DescribeTrackerResponse, __MetadataBearer {}

/**
 * <p>Retrieves the tracker resource details.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, DescribeTrackerCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, DescribeTrackerCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * // import type { LocationClientConfig } from "@aws-sdk/client-location";
 * const config = {}; // type is LocationClientConfig
 * const client = new LocationClient(config);
 * const input = { // DescribeTrackerRequest
 *   TrackerName: "STRING_VALUE", // required
 * };
 * const command = new DescribeTrackerCommand(input);
 * const response = await client.send(command);
 * // { // DescribeTrackerResponse
 * //   TrackerName: "STRING_VALUE", // required
 * //   TrackerArn: "STRING_VALUE", // required
 * //   Description: "STRING_VALUE", // required
 * //   PricingPlan: "STRING_VALUE",
 * //   PricingPlanDataSource: "STRING_VALUE",
 * //   Tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   CreateTime: new Date("TIMESTAMP"), // required
 * //   UpdateTime: new Date("TIMESTAMP"), // required
 * //   KmsKeyId: "STRING_VALUE",
 * //   PositionFiltering: "STRING_VALUE",
 * //   EventBridgeEnabled: true || false,
 * //   KmsKeyEnableGeospatialQueries: true || false,
 * // };
 *
 * ```
 *
 * @param DescribeTrackerCommandInput - {@link DescribeTrackerCommandInput}
 * @returns {@link DescribeTrackerCommandOutput}
 * @see {@link DescribeTrackerCommandInput} for command's `input` shape.
 * @see {@link DescribeTrackerCommandOutput} for command's `response` shape.
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
export class DescribeTrackerCommand extends $Command
  .classBuilder<
    DescribeTrackerCommandInput,
    DescribeTrackerCommandOutput,
    LocationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LocationClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("LocationService", "DescribeTracker", {})
  .n("LocationClient", "DescribeTrackerCommand")
  .sc(DescribeTracker)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeTrackerRequest;
      output: DescribeTrackerResponse;
    };
    sdk: {
      input: DescribeTrackerCommandInput;
      output: DescribeTrackerCommandOutput;
    };
  };
}
