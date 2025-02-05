// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import { DescribeTrackerRequest, DescribeTrackerResponse } from "../models/models_0";
import { de_DescribeTrackerCommand, se_DescribeTrackerCommand } from "../protocols/Aws_restJson1";

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
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
 *  <p>The request was denied because of insufficient access or permissions. Check with an
 *       administrator to verify your permissions.</p>
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("LocationService", "DescribeTracker", {})
  .n("LocationClient", "DescribeTrackerCommand")
  .f(void 0, void 0)
  .ser(se_DescribeTrackerCommand)
  .de(de_DescribeTrackerCommand)
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
