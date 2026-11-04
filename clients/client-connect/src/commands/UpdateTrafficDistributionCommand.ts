// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateTrafficDistributionRequest, UpdateTrafficDistributionResponse } from "../models/models_4";
import { UpdateTrafficDistribution$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateTrafficDistributionCommand}.
 */
export interface UpdateTrafficDistributionCommandInput extends UpdateTrafficDistributionRequest {}
/**
 * @public
 *
 * The output of {@link UpdateTrafficDistributionCommand}.
 */
export interface UpdateTrafficDistributionCommandOutput extends UpdateTrafficDistributionResponse, __MetadataBearer {}

/**
 * Updates the traffic distribution for a given traffic distribution group.
 *
 * > **Important:** When you shift telephony traffic, also shift agents and/or agent sign-ins to ensure they can handle the calls in the other Region. If you don't shift the agents, voice calls will go to the shifted Region but there won't be any agents available to receive the calls.
 *
 * > **Note:** The `SignInConfig` distribution is available only on a default `TrafficDistributionGroup` (see the `IsDefault` parameter in the [TrafficDistributionGroup](https://docs.aws.amazon.com/connect/latest/APIReference/API_TrafficDistributionGroup.html) data type). If you call `UpdateTrafficDistribution` with a modified `SignInConfig` and a non-default `TrafficDistributionGroup`, an `InvalidRequestException` is returned.
 *
 * For more information about updating a traffic distribution group, see [Update telephony traffic distribution across Amazon Web Services Regions](https://docs.aws.amazon.com/connect/latest/adminguide/update-telephony-traffic-distribution.html) in the *Connect Customer Administrator Guide*.
 *
 * **Important things to know**
 *
 * - Invoke the UpdateTrafficDistribution API in the region that should handle traffic.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateTrafficDistributionCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateTrafficDistributionCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // UpdateTrafficDistributionRequest
 *   Id: "STRING_VALUE", // required
 *   TelephonyConfig: { // TelephonyConfig
 *     Distributions: [ // DistributionList // required
 *       { // Distribution
 *         Region: "STRING_VALUE", // required
 *         Percentage: Number("int"), // required
 *       },
 *     ],
 *   },
 *   SignInConfig: { // SignInConfig
 *     Distributions: [ // SignInDistributionList // required
 *       { // SignInDistribution
 *         Region: "STRING_VALUE", // required
 *         Enabled: true || false, // required
 *       },
 *     ],
 *   },
 *   AgentConfig: { // AgentConfig
 *     Distributions: [ // required
 *       {
 *         Region: "STRING_VALUE", // required
 *         Percentage: Number("int"), // required
 *       },
 *     ],
 *   },
 * };
 * const command = new UpdateTrafficDistributionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateTrafficDistributionCommandInput - {@link UpdateTrafficDistributionCommandInput}
 * @returns {@link UpdateTrafficDistributionCommandOutput}
 * @see {@link UpdateTrafficDistributionCommandInput} for command's `input` shape.
 * @see {@link UpdateTrafficDistributionCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient permissions to perform this action.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * Request processing failed because of an error or failure with the service.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link ResourceConflictException} (client fault)
 *
 * A resource already has that name.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The throttling limit has been exceeded.
 *
 * @throws {@link ConnectServiceException}
 *
 * Base exception class for all service exceptions from Connect service.
 *
 * @public
 */
export class UpdateTrafficDistributionCommand extends command<UpdateTrafficDistributionCommandInput, UpdateTrafficDistributionCommandOutput>(
  _ep0,
  _mw0,
  "UpdateTrafficDistribution",
  UpdateTrafficDistribution$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateTrafficDistributionRequest;
      output: {};
    };
    sdk: {
      input: UpdateTrafficDistributionCommandInput;
      output: UpdateTrafficDistributionCommandOutput;
    };
  };
}
