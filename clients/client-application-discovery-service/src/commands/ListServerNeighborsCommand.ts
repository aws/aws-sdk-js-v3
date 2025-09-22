// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ApplicationDiscoveryServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApplicationDiscoveryServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListServerNeighborsRequest, ListServerNeighborsResponse } from "../models/models_0";
import { ListServerNeighbors } from "../schemas/schemas_3_Describe";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListServerNeighborsCommand}.
 */
export interface ListServerNeighborsCommandInput extends ListServerNeighborsRequest {}
/**
 * @public
 *
 * The output of {@link ListServerNeighborsCommand}.
 */
export interface ListServerNeighborsCommandOutput extends ListServerNeighborsResponse, __MetadataBearer {}

/**
 * <p>Retrieves a list of servers that are one network hop away from a specified
 *       server.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationDiscoveryServiceClient, ListServerNeighborsCommand } from "@aws-sdk/client-application-discovery-service"; // ES Modules import
 * // const { ApplicationDiscoveryServiceClient, ListServerNeighborsCommand } = require("@aws-sdk/client-application-discovery-service"); // CommonJS import
 * // import type { ApplicationDiscoveryServiceClientConfig } from "@aws-sdk/client-application-discovery-service";
 * const config = {}; // type is ApplicationDiscoveryServiceClientConfig
 * const client = new ApplicationDiscoveryServiceClient(config);
 * const input = { // ListServerNeighborsRequest
 *   configurationId: "STRING_VALUE", // required
 *   portInformationNeeded: true || false,
 *   neighborConfigurationIds: [ // ConfigurationIdList
 *     "STRING_VALUE",
 *   ],
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListServerNeighborsCommand(input);
 * const response = await client.send(command);
 * // { // ListServerNeighborsResponse
 * //   neighbors: [ // NeighborDetailsList // required
 * //     { // NeighborConnectionDetail
 * //       sourceServerId: "STRING_VALUE", // required
 * //       destinationServerId: "STRING_VALUE", // required
 * //       destinationPort: Number("int"),
 * //       transportProtocol: "STRING_VALUE",
 * //       connectionsCount: Number("long"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * //   knownDependencyCount: Number("long"),
 * // };
 *
 * ```
 *
 * @param ListServerNeighborsCommandInput - {@link ListServerNeighborsCommandInput}
 * @returns {@link ListServerNeighborsCommandOutput}
 * @see {@link ListServerNeighborsCommandInput} for command's `input` shape.
 * @see {@link ListServerNeighborsCommandOutput} for command's `response` shape.
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
export class ListServerNeighborsCommand extends $Command
  .classBuilder<
    ListServerNeighborsCommandInput,
    ListServerNeighborsCommandOutput,
    ApplicationDiscoveryServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ApplicationDiscoveryServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSPoseidonService_V2015_11_01", "ListServerNeighbors", {})
  .n("ApplicationDiscoveryServiceClient", "ListServerNeighborsCommand")
  .sc(ListServerNeighbors)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListServerNeighborsRequest;
      output: ListServerNeighborsResponse;
    };
    sdk: {
      input: ListServerNeighborsCommandInput;
      output: ListServerNeighborsCommandOutput;
    };
  };
}
