// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
<<<<<<< HEAD
import { UpdateTrafficDistributionRequest, UpdateTrafficDistributionResponse } from "../models/models_3";
=======
import type { UpdateTrafficDistributionRequest, UpdateTrafficDistributionResponse } from "../models/models_2";
>>>>>>> 60efd81940b (chore: codegen)
import { UpdateTrafficDistribution } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Updates the traffic distribution for a given traffic distribution group. </p>
 *          <important>
 *             <p>When you shift telephony traffic, also shift agents and/or agent sign-ins to ensure they can handle the calls
 *     in the other Region. If you don't shift the agents, voice calls will go to the shifted Region but there won't be any
 *     agents available to receive the calls.</p>
 *          </important>
 *          <note>
 *             <p>The <code>SignInConfig</code> distribution is available only on a
 * default <code>TrafficDistributionGroup</code> (see the <code>IsDefault</code> parameter in the
 * <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_TrafficDistributionGroup.html">TrafficDistributionGroup</a>
 *  data type). If you call
 *     <code>UpdateTrafficDistribution</code> with a modified <code>SignInConfig</code> and a non-default <code>TrafficDistributionGroup</code>,
 *     an <code>InvalidRequestException</code> is returned.</p>
 *          </note>
 *          <p>For more information about updating a traffic distribution group, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/update-telephony-traffic-distribution.html">Update telephony traffic distribution
 *     across Amazon Web Services Regions
 *    </a> in the <i>Amazon Connect Administrator Guide</i>. </p>
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
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceConflictException} (client fault)
 *  <p>A resource already has that name.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 *
 * @public
 */
export class UpdateTrafficDistributionCommand extends $Command
  .classBuilder<
    UpdateTrafficDistributionCommandInput,
    UpdateTrafficDistributionCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "UpdateTrafficDistribution", {})
  .n("ConnectClient", "UpdateTrafficDistributionCommand")
  .sc(UpdateTrafficDistribution)
  .build() {
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
