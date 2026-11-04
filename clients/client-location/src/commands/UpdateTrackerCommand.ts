// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateTrackerRequest, UpdateTrackerResponse } from "../models/models_0";
import { UpdateTracker$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateTrackerCommand}.
 */
export interface UpdateTrackerCommandInput extends UpdateTrackerRequest {}
/**
 * @public
 *
 * The output of {@link UpdateTrackerCommand}.
 */
export interface UpdateTrackerCommandOutput extends UpdateTrackerResponse, __MetadataBearer {}

/**
 * Updates the specified properties of a given tracker resource.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, UpdateTrackerCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, UpdateTrackerCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * // import type { LocationClientConfig } from "@aws-sdk/client-location";
 * const config = {}; // type is LocationClientConfig
 * const client = new LocationClient(config);
 * const input = { // UpdateTrackerRequest
 *   TrackerName: "STRING_VALUE", // required
 *   PricingPlan: "STRING_VALUE",
 *   PricingPlanDataSource: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   PositionFiltering: "STRING_VALUE",
 *   EventBridgeEnabled: true || false,
 *   KmsKeyEnableGeospatialQueries: true || false,
 * };
 * const command = new UpdateTrackerCommand(input);
 * const response = await client.send(command);
 * // { // UpdateTrackerResponse
 * //   TrackerName: "STRING_VALUE", // required
 * //   TrackerArn: "STRING_VALUE", // required
 * //   UpdateTime: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param UpdateTrackerCommandInput - {@link UpdateTrackerCommandInput}
 * @returns {@link UpdateTrackerCommandOutput}
 * @see {@link UpdateTrackerCommandInput} for command's `input` shape.
 * @see {@link UpdateTrackerCommandOutput} for command's `response` shape.
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
export class UpdateTrackerCommand extends command<UpdateTrackerCommandInput, UpdateTrackerCommandOutput>(
  _ep0,
  _mw0,
  "UpdateTracker",
  UpdateTracker$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateTrackerRequest;
      output: UpdateTrackerResponse;
    };
    sdk: {
      input: UpdateTrackerCommandInput;
      output: UpdateTrackerCommandOutput;
    };
  };
}
