// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ApplicationDiscoveryServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApplicationDiscoveryServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetDiscoverySummaryRequest, GetDiscoverySummaryResponse } from "../models/models_0";
import { de_GetDiscoverySummaryCommand, se_GetDiscoverySummaryCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDiscoverySummaryCommand}.
 */
export interface GetDiscoverySummaryCommandInput extends GetDiscoverySummaryRequest {}
/**
 * @public
 *
 * The output of {@link GetDiscoverySummaryCommand}.
 */
export interface GetDiscoverySummaryCommandOutput extends GetDiscoverySummaryResponse, __MetadataBearer {}

/**
 * <p>Retrieves a short summary of discovered assets.</p>
 *          <p>This API operation takes no request parameters and is called as is at the command
 *       prompt as shown in the example.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationDiscoveryServiceClient, GetDiscoverySummaryCommand } from "@aws-sdk/client-application-discovery-service"; // ES Modules import
 * // const { ApplicationDiscoveryServiceClient, GetDiscoverySummaryCommand } = require("@aws-sdk/client-application-discovery-service"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ApplicationDiscoveryServiceClient(config);
 * const input = {};
 * const command = new GetDiscoverySummaryCommand(input);
 * const response = await client.send(command);
 * // { // GetDiscoverySummaryResponse
 * //   servers: Number("long"),
 * //   applications: Number("long"),
 * //   serversMappedToApplications: Number("long"),
 * //   serversMappedtoTags: Number("long"),
 * //   agentSummary: { // CustomerAgentInfo
 * //     activeAgents: Number("int"), // required
 * //     healthyAgents: Number("int"), // required
 * //     blackListedAgents: Number("int"), // required
 * //     shutdownAgents: Number("int"), // required
 * //     unhealthyAgents: Number("int"), // required
 * //     totalAgents: Number("int"), // required
 * //     unknownAgents: Number("int"), // required
 * //   },
 * //   connectorSummary: { // CustomerConnectorInfo
 * //     activeConnectors: Number("int"), // required
 * //     healthyConnectors: Number("int"), // required
 * //     blackListedConnectors: Number("int"), // required
 * //     shutdownConnectors: Number("int"), // required
 * //     unhealthyConnectors: Number("int"), // required
 * //     totalConnectors: Number("int"), // required
 * //     unknownConnectors: Number("int"), // required
 * //   },
 * //   meCollectorSummary: { // CustomerMeCollectorInfo
 * //     activeMeCollectors: Number("int"), // required
 * //     healthyMeCollectors: Number("int"), // required
 * //     denyListedMeCollectors: Number("int"), // required
 * //     shutdownMeCollectors: Number("int"), // required
 * //     unhealthyMeCollectors: Number("int"), // required
 * //     totalMeCollectors: Number("int"), // required
 * //     unknownMeCollectors: Number("int"), // required
 * //   },
 * //   agentlessCollectorSummary: { // CustomerAgentlessCollectorInfo
 * //     activeAgentlessCollectors: Number("int"), // required
 * //     healthyAgentlessCollectors: Number("int"), // required
 * //     denyListedAgentlessCollectors: Number("int"), // required
 * //     shutdownAgentlessCollectors: Number("int"), // required
 * //     unhealthyAgentlessCollectors: Number("int"), // required
 * //     totalAgentlessCollectors: Number("int"), // required
 * //     unknownAgentlessCollectors: Number("int"), // required
 * //   },
 * // };
 *
 * ```
 *
 * @param GetDiscoverySummaryCommandInput - {@link GetDiscoverySummaryCommandInput}
 * @returns {@link GetDiscoverySummaryCommandOutput}
 * @see {@link GetDiscoverySummaryCommandInput} for command's `input` shape.
 * @see {@link GetDiscoverySummaryCommandOutput} for command's `response` shape.
 * @see {@link ApplicationDiscoveryServiceClientResolvedConfig | config} for ApplicationDiscoveryServiceClient's `config` shape.
 *
 * @throws {@link AuthorizationErrorException} (client fault)
 *  <p>The user does not have permission to perform the action. Check the IAM
 *       policy associated with this user.</p>
 *
 * @throws {@link HomeRegionNotSetException} (client fault)
 *  <p>The home Region is not set. Set the home Region to continue.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters are not valid. Verify the parameters and try again.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value of one or more parameters are either invalid or out of range. Verify the
 *       parameter values and try again.</p>
 *
 * @throws {@link ServerInternalErrorException} (server fault)
 *  <p>The server experienced an internal error. Try again.</p>
 *
 * @throws {@link ApplicationDiscoveryServiceServiceException}
 * <p>Base exception class for all service exceptions from ApplicationDiscoveryService service.</p>
 *
 * @public
 */
export class GetDiscoverySummaryCommand extends $Command
  .classBuilder<
    GetDiscoverySummaryCommandInput,
    GetDiscoverySummaryCommandOutput,
    ApplicationDiscoveryServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ApplicationDiscoveryServiceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSPoseidonService_V2015_11_01", "GetDiscoverySummary", {})
  .n("ApplicationDiscoveryServiceClient", "GetDiscoverySummaryCommand")
  .f(void 0, void 0)
  .ser(se_GetDiscoverySummaryCommand)
  .de(de_GetDiscoverySummaryCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetDiscoverySummaryResponse;
    };
    sdk: {
      input: GetDiscoverySummaryCommandInput;
      output: GetDiscoverySummaryCommandOutput;
    };
  };
}
