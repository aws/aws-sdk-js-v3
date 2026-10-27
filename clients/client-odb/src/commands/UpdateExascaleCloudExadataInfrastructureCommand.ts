// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  UpdateExascaleCloudExadataInfrastructureInput,
  UpdateExascaleCloudExadataInfrastructureOutput,
} from "../models/models_0";
import { UpdateExascaleCloudExadataInfrastructure$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateExascaleCloudExadataInfrastructureCommand}.
 */
export interface UpdateExascaleCloudExadataInfrastructureCommandInput extends UpdateExascaleCloudExadataInfrastructureInput {}
/**
 * @public
 *
 * The output of {@link UpdateExascaleCloudExadataInfrastructureCommand}.
 */
export interface UpdateExascaleCloudExadataInfrastructureCommandOutput extends UpdateExascaleCloudExadataInfrastructureOutput, __MetadataBearer {}

/**
 * <p>Configures or updates the Exascale storage on an Exadata infrastructure. After you configure Exascale storage, you can create Exascale storage vaults on the infrastructure and VM clusters that use Exascale storage.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OdbClient, UpdateExascaleCloudExadataInfrastructureCommand } from "@aws-sdk/client-odb"; // ES Modules import
 * // const { OdbClient, UpdateExascaleCloudExadataInfrastructureCommand } = require("@aws-sdk/client-odb"); // CommonJS import
 * // import type { OdbClientConfig } from "@aws-sdk/client-odb";
 * const config = {}; // type is OdbClientConfig
 * const client = new OdbClient(config);
 * const input = { // UpdateExascaleCloudExadataInfrastructureInput
 *   cloudExadataInfrastructureId: "STRING_VALUE", // required
 *   totalStorageSizeInGBs: Number("int"), // required
 *   totalVmStorageSizeInGBs: Number("int"),
 * };
 * const command = new UpdateExascaleCloudExadataInfrastructureCommand(input);
 * const response = await client.send(command);
 * // { // UpdateExascaleCloudExadataInfrastructureOutput
 * //   displayName: "STRING_VALUE",
 * //   status: "AVAILABLE" || "FAILED" || "PROVISIONING" || "TERMINATED" || "TERMINATING" || "UPDATING" || "MAINTENANCE_IN_PROGRESS",
 * //   statusReason: "STRING_VALUE",
 * //   cloudExadataInfrastructureId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param UpdateExascaleCloudExadataInfrastructureCommandInput - {@link UpdateExascaleCloudExadataInfrastructureCommandInput}
 * @returns {@link UpdateExascaleCloudExadataInfrastructureCommandOutput}
 * @see {@link UpdateExascaleCloudExadataInfrastructureCommandInput} for command's `input` shape.
 * @see {@link UpdateExascaleCloudExadataInfrastructureCommandOutput} for command's `response` shape.
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
export class UpdateExascaleCloudExadataInfrastructureCommand extends command<UpdateExascaleCloudExadataInfrastructureCommandInput, UpdateExascaleCloudExadataInfrastructureCommandOutput>(
  _ep0,
  _mw0,
  "UpdateExascaleCloudExadataInfrastructure",
  UpdateExascaleCloudExadataInfrastructure$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateExascaleCloudExadataInfrastructureInput;
      output: UpdateExascaleCloudExadataInfrastructureOutput;
    };
    sdk: {
      input: UpdateExascaleCloudExadataInfrastructureCommandInput;
      output: UpdateExascaleCloudExadataInfrastructureCommandOutput;
    };
  };
}
