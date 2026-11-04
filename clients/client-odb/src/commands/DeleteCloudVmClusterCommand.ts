// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteCloudVmClusterInput, DeleteCloudVmClusterOutput } from "../models/models_0";
import { DeleteCloudVmCluster$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteCloudVmClusterCommand}.
 */
export interface DeleteCloudVmClusterCommandInput extends DeleteCloudVmClusterInput {}
/**
 * @public
 *
 * The output of {@link DeleteCloudVmClusterCommand}.
 */
export interface DeleteCloudVmClusterCommandOutput extends DeleteCloudVmClusterOutput, __MetadataBearer {}

/**
 * Deletes the specified VM cluster.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OdbClient, DeleteCloudVmClusterCommand } from "@aws-sdk/client-odb"; // ES Modules import
 * // const { OdbClient, DeleteCloudVmClusterCommand } = require("@aws-sdk/client-odb"); // CommonJS import
 * // import type { OdbClientConfig } from "@aws-sdk/client-odb";
 * const config = {}; // type is OdbClientConfig
 * const client = new OdbClient(config);
 * const input = { // DeleteCloudVmClusterInput
 *   cloudVmClusterId: "STRING_VALUE", // required
 * };
 * const command = new DeleteCloudVmClusterCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteCloudVmClusterCommandInput - {@link DeleteCloudVmClusterCommandInput}
 * @returns {@link DeleteCloudVmClusterCommandOutput}
 * @see {@link DeleteCloudVmClusterCommandInput} for command's `input` shape.
 * @see {@link DeleteCloudVmClusterCommandOutput} for command's `response` shape.
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
export class DeleteCloudVmClusterCommand extends command<DeleteCloudVmClusterCommandInput, DeleteCloudVmClusterCommandOutput>(
  _ep0,
  _mw0,
  "DeleteCloudVmCluster",
  DeleteCloudVmCluster$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteCloudVmClusterInput;
      output: {};
    };
    sdk: {
      input: DeleteCloudVmClusterCommandInput;
      output: DeleteCloudVmClusterCommandOutput;
    };
  };
}
