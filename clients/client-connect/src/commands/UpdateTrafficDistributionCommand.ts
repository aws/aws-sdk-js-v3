// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateTrafficDistributionRequest, UpdateTrafficDistributionResponse } from "../models/models_2";
import { de_UpdateTrafficDistributionCommand, se_UpdateTrafficDistributionCommand } from "../protocols/Aws_restJson1";

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
 *          <note>
 *             <p>The <code>SignInConfig</code> distribution is available only on a
 * default <code>TrafficDistributionGroup</code> (see the <code>IsDefault</code> parameter in the
 * <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_TrafficDistributionGroup.html">TrafficDistributionGroup</a>
 *  data type). If you call
 *     <code>UpdateTrafficDistribution</code> with a modified <code>SignInConfig</code> and a non-default <code>TrafficDistributionGroup</code>,
 *     an <code>InvalidRequestException</code> is returned.</p>
 *          </note>
 *          <p>For more information about updating a traffic distribution group, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/update-telephony-traffic-distribution.html">Update telephony
 *     traffic distribution across Amazon Web Services Regions
 *    </a> in the <i>Amazon Connect Administrator Guide</i>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateTrafficDistributionCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateTrafficDistributionCommand } = require("@aws-sdk/client-connect"); // CommonJS import
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
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonConnectService", "UpdateTrafficDistribution", {})
  .n("ConnectClient", "UpdateTrafficDistributionCommand")
  .f(void 0, void 0)
  .ser(se_UpdateTrafficDistributionCommand)
  .de(de_UpdateTrafficDistributionCommand)
  .build() {}
