// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetAgentConfigurationRequest, GetAgentConfigurationResponse } from "../models/models_0";
import { GetAgentConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetAgentConfigurationCommand}.
 */
export interface GetAgentConfigurationCommandInput extends GetAgentConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetAgentConfigurationCommand}.
 */
export interface GetAgentConfigurationCommandOutput extends GetAgentConfigurationResponse, __MetadataBearer {}

/**
 * <note> <p> For use by AWS Ground Station Agent and shouldn't be called directly.</p> </note> <p>Gets the latest configuration information for a registered agent.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GroundStationClient, GetAgentConfigurationCommand } from "@aws-sdk/client-groundstation"; // ES Modules import
 * // const { GroundStationClient, GetAgentConfigurationCommand } = require("@aws-sdk/client-groundstation"); // CommonJS import
 * // import type { GroundStationClientConfig } from "@aws-sdk/client-groundstation";
 * const config = {}; // type is GroundStationClientConfig
 * const client = new GroundStationClient(config);
 * const input = { // GetAgentConfigurationRequest
 *   agentId: "STRING_VALUE", // required
 * };
 * const command = new GetAgentConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetAgentConfigurationResponse
 * //   agentId: "STRING_VALUE",
 * //   taskingDocument: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetAgentConfigurationCommandInput - {@link GetAgentConfigurationCommandInput}
 * @returns {@link GetAgentConfigurationCommandOutput}
 * @see {@link GetAgentConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetAgentConfigurationCommandOutput} for command's `response` shape.
 * @see {@link GroundStationClientResolvedConfig | config} for GroundStationClient's `config` shape.
 *
 * @throws {@link DependencyException} (server fault)
 *  <p>Dependency encountered an error.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters are not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource was not found.</p>
 *
 * @throws {@link GroundStationServiceException}
 * <p>Base exception class for all service exceptions from GroundStation service.</p>
 *
 *
 * @public
 */
export class GetAgentConfigurationCommand extends command<GetAgentConfigurationCommandInput, GetAgentConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "GetAgentConfiguration",
  GetAgentConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAgentConfigurationRequest;
      output: GetAgentConfigurationResponse;
    };
    sdk: {
      input: GetAgentConfigurationCommandInput;
      output: GetAgentConfigurationCommandOutput;
    };
  };
}
