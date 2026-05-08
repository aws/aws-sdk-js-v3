// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { EvsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EvsClient";
import type { ListEnvironmentConnectorsRequest, ListEnvironmentConnectorsResponse } from "../models/models_0";
import { ListEnvironmentConnectors$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListEnvironmentConnectorsCommand}.
 */
export interface ListEnvironmentConnectorsCommandInput extends ListEnvironmentConnectorsRequest {}
/**
 * @public
 *
 * The output of {@link ListEnvironmentConnectorsCommand}.
 */
export interface ListEnvironmentConnectorsCommandOutput extends ListEnvironmentConnectorsResponse, __MetadataBearer {}

/**
 * <p>Lists the connectors within an environment. Returns the status of each connector and its applicable checks, among other connector details.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EvsClient, ListEnvironmentConnectorsCommand } from "@aws-sdk/client-evs"; // ES Modules import
 * // const { EvsClient, ListEnvironmentConnectorsCommand } = require("@aws-sdk/client-evs"); // CommonJS import
 * // import type { EvsClientConfig } from "@aws-sdk/client-evs";
 * const config = {}; // type is EvsClientConfig
 * const client = new EvsClient(config);
 * const input = { // ListEnvironmentConnectorsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   environmentId: "STRING_VALUE", // required
 * };
 * const command = new ListEnvironmentConnectorsCommand(input);
 * const response = await client.send(command);
 * // { // ListEnvironmentConnectorsResponse
 * //   nextToken: "STRING_VALUE",
 * //   connectors: [ // ConnectorList
 * //     { // Connector
 * //       environmentId: "STRING_VALUE",
 * //       connectorId: "STRING_VALUE",
 * //       type: "VCENTER",
 * //       applianceFqdn: "STRING_VALUE",
 * //       secretArn: "STRING_VALUE",
 * //       state: "CREATING" || "CREATE_FAILED" || "ACTIVE" || "UPDATING" || "UPDATE_FAILED" || "DELETING" || "DELETED",
 * //       stateDetails: "STRING_VALUE",
 * //       status: "PASSED" || "FAILED" || "UNKNOWN",
 * //       checks: [ // ConnectorsChecksList
 * //         { // ConnectorCheck
 * //           type: "KEY_REUSE" || "KEY_COVERAGE" || "REACHABILITY" || "HOST_COUNT" || "VCENTER_REACHABILITY" || "VCENTER_VM_SYNC" || "VCENTER_VM_EVENT",
 * //           result: "PASSED" || "FAILED" || "UNKNOWN",
 * //           lastCheckAttempt: new Date("TIMESTAMP"),
 * //           impairedSince: new Date("TIMESTAMP"),
 * //         },
 * //       ],
 * //       createdAt: new Date("TIMESTAMP"),
 * //       modifiedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListEnvironmentConnectorsCommandInput - {@link ListEnvironmentConnectorsCommandInput}
 * @returns {@link ListEnvironmentConnectorsCommandOutput}
 * @see {@link ListEnvironmentConnectorsCommandInput} for command's `input` shape.
 * @see {@link ListEnvironmentConnectorsCommandOutput} for command's `response` shape.
 * @see {@link EvsClientResolvedConfig | config} for EvsClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A service resource associated with the request could not be found. The resource might not be specified correctly, or it may have a <code>state</code> of <code>DELETED</code>.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the specified constraints. You will see this exception if invalid inputs are provided for any of the Amazon EVS environment operations, or if a list operation is performed on an environment resource that is still initializing.</p>
 *
 * @throws {@link EvsServiceException}
 * <p>Base exception class for all service exceptions from Evs service.</p>
 *
 *
 * @public
 */
export class ListEnvironmentConnectorsCommand extends $Command
  .classBuilder<
    ListEnvironmentConnectorsCommandInput,
    ListEnvironmentConnectorsCommandOutput,
    EvsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EvsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonElasticVMwareService", "ListEnvironmentConnectors", {})
  .n("EvsClient", "ListEnvironmentConnectorsCommand")
  .sc(ListEnvironmentConnectors$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListEnvironmentConnectorsRequest;
      output: ListEnvironmentConnectorsResponse;
    };
    sdk: {
      input: ListEnvironmentConnectorsCommandInput;
      output: ListEnvironmentConnectorsCommandOutput;
    };
  };
}
