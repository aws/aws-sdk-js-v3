// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteEnvironmentConnectorRequest, DeleteEnvironmentConnectorResponse } from "../models/models_0";
import { DeleteEnvironmentConnector$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteEnvironmentConnectorCommand}.
 */
export interface DeleteEnvironmentConnectorCommandInput extends DeleteEnvironmentConnectorRequest {}
/**
 * @public
 *
 * The output of {@link DeleteEnvironmentConnectorCommand}.
 */
export interface DeleteEnvironmentConnectorCommandOutput extends DeleteEnvironmentConnectorResponse, __MetadataBearer {}

/**
 * Deletes a connector from an Amazon EVS environment.
 *
 * > **Note:** Before deleting a connector, you must remove all entitlements that are associated with the same vCenter.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EvsClient, DeleteEnvironmentConnectorCommand } from "@aws-sdk/client-evs"; // ES Modules import
 * // const { EvsClient, DeleteEnvironmentConnectorCommand } = require("@aws-sdk/client-evs"); // CommonJS import
 * // import type { EvsClientConfig } from "@aws-sdk/client-evs";
 * const config = {}; // type is EvsClientConfig
 * const client = new EvsClient(config);
 * const input = { // DeleteEnvironmentConnectorRequest
 *   clientToken: "STRING_VALUE",
 *   environmentId: "STRING_VALUE", // required
 *   connectorId: "STRING_VALUE", // required
 * };
 * const command = new DeleteEnvironmentConnectorCommand(input);
 * const response = await client.send(command);
 * // { // DeleteEnvironmentConnectorResponse
 * //   connector: { // Connector
 * //     environmentId: "STRING_VALUE",
 * //     connectorId: "STRING_VALUE",
 * //     type: "OPERATIONS_MANAGER" || "SDDC_MANAGER" || "VCENTER",
 * //     applianceFqdn: "STRING_VALUE",
 * //     secretArn: "STRING_VALUE",
 * //     state: "CREATING" || "CREATE_FAILED" || "ACTIVE" || "UPDATING" || "UPDATE_FAILED" || "DELETING" || "DELETED",
 * //     stateDetails: "STRING_VALUE",
 * //     status: "PASSED" || "FAILED" || "UNKNOWN",
 * //     checks: [ // ConnectorsChecksList
 * //       { // ConnectorCheck
 * //         type: "KEY_REUSE" || "KEY_COVERAGE" || "REACHABILITY" || "HOST_COUNT" || "VCENTER_REACHABILITY" || "VCENTER_VM_SYNC" || "VCENTER_VM_EVENT" || "OPERATIONS_MANAGER_REACHABILITY" || "SDDC_MANAGER_REACHABILITY" || "SDDC_MANAGER_HOST_COUNT" || "SDDC_MANAGER_KEY_COVERAGE" || "SDDC_MANAGER_KEY_REUSE" || "CONNECTOR_HEALTH",
 * //         result: "PASSED" || "FAILED" || "UNKNOWN",
 * //         lastCheckAttempt: new Date("TIMESTAMP"),
 * //         impairedSince: new Date("TIMESTAMP"),
 * //       },
 * //     ],
 * //     createdAt: new Date("TIMESTAMP"),
 * //     modifiedAt: new Date("TIMESTAMP"),
 * //   },
 * //   environmentSummary: { // EnvironmentSummary
 * //     environmentId: "STRING_VALUE",
 * //     environmentName: "STRING_VALUE",
 * //     vcfVersion: "VCF-5.2.1" || "VCF-5.2.2" || "SELF_DEPLOYED",
 * //     environmentStatus: "PASSED" || "FAILED" || "UNKNOWN",
 * //     environmentState: "CREATING" || "CREATED" || "DELETING" || "DELETED" || "CREATE_FAILED",
 * //     createdAt: new Date("TIMESTAMP"),
 * //     modifiedAt: new Date("TIMESTAMP"),
 * //     environmentArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteEnvironmentConnectorCommandInput - {@link DeleteEnvironmentConnectorCommandInput}
 * @returns {@link DeleteEnvironmentConnectorCommandOutput}
 * @see {@link DeleteEnvironmentConnectorCommandInput} for command's `input` shape.
 * @see {@link DeleteEnvironmentConnectorCommandOutput} for command's `response` shape.
 * @see {@link EvsClientResolvedConfig | config} for EvsClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * A service resource associated with the request could not be found. The resource might not be specified correctly, or it may have a `state` of `DELETED`.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The operation could not be performed because the service is throttling requests. This exception is thrown when the service endpoint receives too many concurrent requests.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the specified constraints. You will see this exception if invalid inputs are provided for any of the Amazon EVS environment operations, or if a list operation is performed on an environment resource that is still initializing.
 *
 * @throws {@link EvsServiceException}
 *
 * Base exception class for all service exceptions from Evs service.
 *
 * @public
 */
export class DeleteEnvironmentConnectorCommand extends command<DeleteEnvironmentConnectorCommandInput, DeleteEnvironmentConnectorCommandOutput>(
  _ep0,
  _mw0,
  "DeleteEnvironmentConnector",
  DeleteEnvironmentConnector$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteEnvironmentConnectorRequest;
      output: DeleteEnvironmentConnectorResponse;
    };
    sdk: {
      input: DeleteEnvironmentConnectorCommandInput;
      output: DeleteEnvironmentConnectorCommandOutput;
    };
  };
}
