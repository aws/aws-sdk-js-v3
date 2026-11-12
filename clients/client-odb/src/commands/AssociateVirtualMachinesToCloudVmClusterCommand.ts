// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  AssociateVirtualMachinesToCloudVmClusterInput,
  AssociateVirtualMachinesToCloudVmClusterOutput,
} from "../models/models_0";
import { AssociateVirtualMachinesToCloudVmCluster$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AssociateVirtualMachinesToCloudVmClusterCommand}.
 */
export interface AssociateVirtualMachinesToCloudVmClusterCommandInput extends AssociateVirtualMachinesToCloudVmClusterInput {}
/**
 * @public
 *
 * The output of {@link AssociateVirtualMachinesToCloudVmClusterCommand}.
 */
export interface AssociateVirtualMachinesToCloudVmClusterCommandOutput extends AssociateVirtualMachinesToCloudVmClusterOutput, __MetadataBearer {}

/**
 * <p>Adds virtual machines to the specified VM cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OdbClient, AssociateVirtualMachinesToCloudVmClusterCommand } from "@aws-sdk/client-odb"; // ES Modules import
 * // const { OdbClient, AssociateVirtualMachinesToCloudVmClusterCommand } = require("@aws-sdk/client-odb"); // CommonJS import
 * // import type { OdbClientConfig } from "@aws-sdk/client-odb";
 * const config = {}; // type is OdbClientConfig
 * const client = new OdbClient(config);
 * const input = { // AssociateVirtualMachinesToCloudVmClusterInput
 *   cloudVmClusterId: "STRING_VALUE", // required
 *   dbServers: [ // StringList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new AssociateVirtualMachinesToCloudVmClusterCommand(input);
 * const response = await client.send(command);
 * // { // AssociateVirtualMachinesToCloudVmClusterOutput
 * //   displayName: "STRING_VALUE",
 * //   status: "AVAILABLE" || "FAILED" || "PROVISIONING" || "TERMINATED" || "TERMINATING" || "UPDATING" || "MAINTENANCE_IN_PROGRESS",
 * //   statusReason: "STRING_VALUE",
 * //   cloudVmClusterId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param AssociateVirtualMachinesToCloudVmClusterCommandInput - {@link AssociateVirtualMachinesToCloudVmClusterCommandInput}
 * @returns {@link AssociateVirtualMachinesToCloudVmClusterCommandOutput}
 * @see {@link AssociateVirtualMachinesToCloudVmClusterCommandInput} for command's `input` shape.
 * @see {@link AssociateVirtualMachinesToCloudVmClusterCommandOutput} for command's `response` shape.
 * @see {@link OdbClientResolvedConfig | config} for OdbClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this action. Make sure you have the required permissions and try again.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Occurs when a conflict with the current status of your resource. Fix any inconsistencies with your resource and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Occurs when there is an internal failure in the Oracle Database@Amazon Web Services service. Wait and try again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The operation tried to access a resource that doesn't exist. Make sure you provided the correct resource and try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request has failed validation because it is missing required fields or has invalid inputs.</p>
 *
 * @throws {@link OdbServiceException}
 * <p>Base exception class for all service exceptions from Odb service.</p>
 *
 *
 * @public
 */
export class AssociateVirtualMachinesToCloudVmClusterCommand extends command<AssociateVirtualMachinesToCloudVmClusterCommandInput, AssociateVirtualMachinesToCloudVmClusterCommandOutput>(
  _ep0,
  _mw0,
  "AssociateVirtualMachinesToCloudVmCluster",
  AssociateVirtualMachinesToCloudVmCluster$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateVirtualMachinesToCloudVmClusterInput;
      output: AssociateVirtualMachinesToCloudVmClusterOutput;
    };
    sdk: {
      input: AssociateVirtualMachinesToCloudVmClusterCommandInput;
      output: AssociateVirtualMachinesToCloudVmClusterCommandOutput;
    };
  };
}
