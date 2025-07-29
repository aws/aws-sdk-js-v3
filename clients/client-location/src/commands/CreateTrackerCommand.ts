// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import {
  CreateTrackerRequest,
  CreateTrackerResponse,
  CreateTrackerResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_CreateTrackerCommand, se_CreateTrackerCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateTrackerCommand}.
 */
export interface CreateTrackerCommandInput extends CreateTrackerRequest {}
/**
 * @public
 *
 * The output of {@link CreateTrackerCommand}.
 */
export interface CreateTrackerCommandOutput extends CreateTrackerResponse, __MetadataBearer {}

/**
 * <p>Creates a tracker resource in your Amazon Web Services account, which lets you retrieve current and
 *             historical location of devices.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, CreateTrackerCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, CreateTrackerCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const input = { // CreateTrackerRequest
 *   TrackerName: "STRING_VALUE", // required
 *   PricingPlan: "STRING_VALUE",
 *   KmsKeyId: "STRING_VALUE",
 *   PricingPlanDataSource: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   PositionFiltering: "STRING_VALUE",
 *   EventBridgeEnabled: true || false,
 *   KmsKeyEnableGeospatialQueries: true || false,
 * };
 * const command = new CreateTrackerCommand(input);
 * const response = await client.send(command);
 * // { // CreateTrackerResponse
 * //   TrackerName: "STRING_VALUE", // required
 * //   TrackerArn: "STRING_VALUE", // required
 * //   CreateTime: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param CreateTrackerCommandInput - {@link CreateTrackerCommandInput}
 * @returns {@link CreateTrackerCommandOutput}
 * @see {@link CreateTrackerCommandInput} for command's `input` shape.
 * @see {@link CreateTrackerCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for LocationClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request was denied because of insufficient access or permissions. Check with an
 *       administrator to verify your permissions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request was unsuccessful because of a conflict.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed to process because of an unknown server error, exception, or failure.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The operation was denied because the request would exceed the maximum <a href="https://docs.aws.amazon.com/location/previous/developerguide/location-quotas.html">quota</a>
 *       set for Amazon Location Service.</p>
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
export class CreateTrackerCommand extends $Command
  .classBuilder<
    CreateTrackerCommandInput,
    CreateTrackerCommandOutput,
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
  .s("LocationService", "CreateTracker", {})
  .n("LocationClient", "CreateTrackerCommand")
  .f(void 0, CreateTrackerResponseFilterSensitiveLog)
  .ser(se_CreateTrackerCommand)
  .de(de_CreateTrackerCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateTrackerRequest;
      output: CreateTrackerResponse;
    };
    sdk: {
      input: CreateTrackerCommandInput;
      output: CreateTrackerCommandOutput;
    };
  };
}
