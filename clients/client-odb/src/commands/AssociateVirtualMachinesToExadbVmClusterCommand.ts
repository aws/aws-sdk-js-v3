// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  AssociateVirtualMachinesToExadbVmClusterInput,
  AssociateVirtualMachinesToExadbVmClusterOutput,
} from "../models/models_0";
import { AssociateVirtualMachinesToExadbVmCluster$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AssociateVirtualMachinesToExadbVmClusterCommand}.
 */
export interface AssociateVirtualMachinesToExadbVmClusterCommandInput extends AssociateVirtualMachinesToExadbVmClusterInput {}
/**
 * @public
 *
 * The output of {@link AssociateVirtualMachinesToExadbVmClusterCommand}.
 */
export interface AssociateVirtualMachinesToExadbVmClusterCommandOutput extends AssociateVirtualMachinesToExadbVmClusterOutput, __MetadataBearer {}

/**
 * Adds virtual machines to the specified Exascale VM cluster.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OdbClient, AssociateVirtualMachinesToExadbVmClusterCommand } from "@aws-sdk/client-odb"; // ES Modules import
 * // const { OdbClient, AssociateVirtualMachinesToExadbVmClusterCommand } = require("@aws-sdk/client-odb"); // CommonJS import
 * // import type { OdbClientConfig } from "@aws-sdk/client-odb";
 * const config = {}; // type is OdbClientConfig
 * const client = new OdbClient(config);
 * const input = { // AssociateVirtualMachinesToExadbVmClusterInput
 *   exadbVmClusterId: "STRING_VALUE", // required
 *   desiredNodeCount: Number("int"), // required
 * };
 * const command = new AssociateVirtualMachinesToExadbVmClusterCommand(input);
 * const response = await client.send(command);
 * // { // AssociateVirtualMachinesToExadbVmClusterOutput
 * //   displayName: "STRING_VALUE",
 * //   status: "AVAILABLE" || "FAILED" || "PROVISIONING" || "TERMINATED" || "TERMINATING" || "UPDATING" || "MAINTENANCE_IN_PROGRESS",
 * //   statusReason: "STRING_VALUE",
 * //   exadbVmClusterId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param AssociateVirtualMachinesToExadbVmClusterCommandInput - {@link AssociateVirtualMachinesToExadbVmClusterCommandInput}
 * @returns {@link AssociateVirtualMachinesToExadbVmClusterCommandOutput}
 * @see {@link AssociateVirtualMachinesToExadbVmClusterCommandInput} for command's `input` shape.
 * @see {@link AssociateVirtualMachinesToExadbVmClusterCommandOutput} for command's `response` shape.
 * @see {@link OdbClientResolvedConfig | config} for OdbClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have sufficient access to perform this action. Make sure you have the required permissions and try again.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Occurs when a conflict with the current status of your resource. Fix any inconsistencies with your resource and try again.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Occurs when there is an internal failure in the Oracle Database@Amazon Web Services service. Wait and try again.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The operation tried to access a resource that doesn't exist. Make sure you provided the correct resource and try again.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * You have exceeded the service quota.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request has failed validation because it is missing required fields or has invalid inputs.
 *
 * @throws {@link OdbServiceException}
 *
 * Base exception class for all service exceptions from Odb service.
 *
 * @public
 */
export class AssociateVirtualMachinesToExadbVmClusterCommand extends command<AssociateVirtualMachinesToExadbVmClusterCommandInput, AssociateVirtualMachinesToExadbVmClusterCommandOutput>(
  _ep0,
  _mw0,
  "AssociateVirtualMachinesToExadbVmCluster",
  AssociateVirtualMachinesToExadbVmCluster$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateVirtualMachinesToExadbVmClusterInput;
      output: AssociateVirtualMachinesToExadbVmClusterOutput;
    };
    sdk: {
      input: AssociateVirtualMachinesToExadbVmClusterCommandInput;
      output: AssociateVirtualMachinesToExadbVmClusterCommandOutput;
    };
  };
}
