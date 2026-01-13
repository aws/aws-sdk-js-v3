// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  ApplicationDiscoveryServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApplicationDiscoveryServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { StopDataCollectionByAgentIdsRequest, StopDataCollectionByAgentIdsResponse } from "../models/models_0";
import { StopDataCollectionByAgentIds$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StopDataCollectionByAgentIdsCommand}.
 */
export interface StopDataCollectionByAgentIdsCommandInput extends StopDataCollectionByAgentIdsRequest {}
/**
 * @public
 *
 * The output of {@link StopDataCollectionByAgentIdsCommand}.
 */
export interface StopDataCollectionByAgentIdsCommandOutput extends StopDataCollectionByAgentIdsResponse, __MetadataBearer {}

/**
 * <p>Instructs the specified agents to stop collecting data.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationDiscoveryServiceClient, StopDataCollectionByAgentIdsCommand } from "@aws-sdk/client-application-discovery-service"; // ES Modules import
 * // const { ApplicationDiscoveryServiceClient, StopDataCollectionByAgentIdsCommand } = require("@aws-sdk/client-application-discovery-service"); // CommonJS import
 * // import type { ApplicationDiscoveryServiceClientConfig } from "@aws-sdk/client-application-discovery-service";
 * const config = {}; // type is ApplicationDiscoveryServiceClientConfig
 * const client = new ApplicationDiscoveryServiceClient(config);
 * const input = { // StopDataCollectionByAgentIdsRequest
 *   agentIds: [ // AgentIds // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new StopDataCollectionByAgentIdsCommand(input);
 * const response = await client.send(command);
 * // { // StopDataCollectionByAgentIdsResponse
 * //   agentsConfigurationStatus: [ // AgentConfigurationStatusList
 * //     { // AgentConfigurationStatus
 * //       agentId: "STRING_VALUE",
 * //       operationSucceeded: true || false,
 * //       description: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param StopDataCollectionByAgentIdsCommandInput - {@link StopDataCollectionByAgentIdsCommandInput}
 * @returns {@link StopDataCollectionByAgentIdsCommandOutput}
 * @see {@link StopDataCollectionByAgentIdsCommandInput} for command's `input` shape.
 * @see {@link StopDataCollectionByAgentIdsCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class StopDataCollectionByAgentIdsCommand extends $Command
  .classBuilder<
    StopDataCollectionByAgentIdsCommandInput,
    StopDataCollectionByAgentIdsCommandOutput,
    ApplicationDiscoveryServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ApplicationDiscoveryServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSPoseidonService_V2015_11_01", "StopDataCollectionByAgentIds", {})
  .n("ApplicationDiscoveryServiceClient", "StopDataCollectionByAgentIdsCommand")
  .sc(StopDataCollectionByAgentIds$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopDataCollectionByAgentIdsRequest;
      output: StopDataCollectionByAgentIdsResponse;
    };
    sdk: {
      input: StopDataCollectionByAgentIdsCommandInput;
      output: StopDataCollectionByAgentIdsCommandOutput;
    };
  };
}
