// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { EvsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EvsClient";
import type { CreateEnvironmentConnectorRequest, CreateEnvironmentConnectorResponse } from "../models/models_0";
import { CreateEnvironmentConnector$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateEnvironmentConnectorCommand}.
 */
export interface CreateEnvironmentConnectorCommandInput extends CreateEnvironmentConnectorRequest {}
/**
 * @public
 *
 * The output of {@link CreateEnvironmentConnectorCommand}.
 */
export interface CreateEnvironmentConnectorCommandOutput extends CreateEnvironmentConnectorResponse, __MetadataBearer {}

/**
 * <p>Creates a connector for an Amazon EVS environment. A connector establishes a connection to a VCF appliance, such as vCenter, using a fully qualified domain name and an Amazon Web Services Secrets Manager secret that stores the appliance credentials.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EvsClient, CreateEnvironmentConnectorCommand } from "@aws-sdk/client-evs"; // ES Modules import
 * // const { EvsClient, CreateEnvironmentConnectorCommand } = require("@aws-sdk/client-evs"); // CommonJS import
 * // import type { EvsClientConfig } from "@aws-sdk/client-evs";
 * const config = {}; // type is EvsClientConfig
 * const client = new EvsClient(config);
 * const input = { // CreateEnvironmentConnectorRequest
 *   clientToken: "STRING_VALUE",
 *   environmentId: "STRING_VALUE", // required
 *   type: "VCENTER", // required
 *   applianceFqdn: "STRING_VALUE", // required
 *   secretIdentifier: "STRING_VALUE", // required
 * };
 * const command = new CreateEnvironmentConnectorCommand(input);
 * const response = await client.send(command);
 * // { // CreateEnvironmentConnectorResponse
 * //   connector: { // Connector
 * //     environmentId: "STRING_VALUE",
 * //     connectorId: "STRING_VALUE",
 * //     type: "VCENTER",
 * //     applianceFqdn: "STRING_VALUE",
 * //     secretArn: "STRING_VALUE",
 * //     state: "CREATING" || "CREATE_FAILED" || "ACTIVE" || "UPDATING" || "UPDATE_FAILED" || "DELETING" || "DELETED",
 * //     stateDetails: "STRING_VALUE",
 * //     status: "PASSED" || "FAILED" || "UNKNOWN",
 * //     checks: [ // ConnectorsChecksList
 * //       { // ConnectorCheck
 * //         type: "KEY_REUSE" || "KEY_COVERAGE" || "REACHABILITY" || "HOST_COUNT" || "VCENTER_REACHABILITY" || "VCENTER_VM_SYNC" || "VCENTER_VM_EVENT",
 * //         result: "PASSED" || "FAILED" || "UNKNOWN",
 * //         lastCheckAttempt: new Date("TIMESTAMP"),
 * //         impairedSince: new Date("TIMESTAMP"),
 * //       },
 * //     ],
 * //     createdAt: new Date("TIMESTAMP"),
 * //     modifiedAt: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateEnvironmentConnectorCommandInput - {@link CreateEnvironmentConnectorCommandInput}
 * @returns {@link CreateEnvironmentConnectorCommandOutput}
 * @see {@link CreateEnvironmentConnectorCommandInput} for command's `input` shape.
 * @see {@link CreateEnvironmentConnectorCommandOutput} for command's `response` shape.
 * @see {@link EvsClientResolvedConfig | config} for EvsClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A service resource associated with the request could not be found. The resource might not be specified correctly, or it may have a <code>state</code> of <code>DELETED</code>.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The operation could not be performed because the service is throttling requests. This exception is thrown when the service endpoint receives too many concurrent requests.</p>
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
export class CreateEnvironmentConnectorCommand extends $Command
  .classBuilder<
    CreateEnvironmentConnectorCommandInput,
    CreateEnvironmentConnectorCommandOutput,
    EvsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EvsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonElasticVMwareService", "CreateEnvironmentConnector", {})
  .n("EvsClient", "CreateEnvironmentConnectorCommand")
  .sc(CreateEnvironmentConnector$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateEnvironmentConnectorRequest;
      output: CreateEnvironmentConnectorResponse;
    };
    sdk: {
      input: CreateEnvironmentConnectorCommandInput;
      output: CreateEnvironmentConnectorCommandOutput;
    };
  };
}
