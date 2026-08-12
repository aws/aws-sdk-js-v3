// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateExascaleDbStorageVaultInput, CreateExascaleDbStorageVaultOutput } from "../models/models_0";
import { CreateExascaleDbStorageVault$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateExascaleDbStorageVaultCommand}.
 */
export interface CreateExascaleDbStorageVaultCommandInput extends CreateExascaleDbStorageVaultInput {}
/**
 * @public
 *
 * The output of {@link CreateExascaleDbStorageVaultCommand}.
 */
export interface CreateExascaleDbStorageVaultCommandOutput extends CreateExascaleDbStorageVaultOutput, __MetadataBearer {}

/**
 * <p>Creates an Exascale storage vault.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OdbClient, CreateExascaleDbStorageVaultCommand } from "@aws-sdk/client-odb"; // ES Modules import
 * // const { OdbClient, CreateExascaleDbStorageVaultCommand } = require("@aws-sdk/client-odb"); // CommonJS import
 * // import type { OdbClientConfig } from "@aws-sdk/client-odb";
 * const config = {}; // type is OdbClientConfig
 * const client = new OdbClient(config);
 * const input = { // CreateExascaleDbStorageVaultInput
 *   displayName: "STRING_VALUE", // required
 *   highCapacityDatabaseStorageTotalSizeInGBs: Number("int"), // required
 *   additionalFlashCacheInPercent: Number("int"),
 *   autoscaleLimitInGBs: Number("int"),
 *   availabilityZoneId: "STRING_VALUE",
 *   availabilityZone: "STRING_VALUE",
 *   description: "STRING_VALUE",
 *   isAutoscaleEnabled: true || false,
 *   tags: { // RequestTagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   timeZone: "STRING_VALUE",
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreateExascaleDbStorageVaultCommand(input);
 * const response = await client.send(command);
 * // { // CreateExascaleDbStorageVaultOutput
 * //   displayName: "STRING_VALUE",
 * //   status: "AVAILABLE" || "FAILED" || "PROVISIONING" || "TERMINATED" || "TERMINATING" || "UPDATING" || "MAINTENANCE_IN_PROGRESS",
 * //   statusReason: "STRING_VALUE",
 * //   exascaleDbStorageVaultId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateExascaleDbStorageVaultCommandInput - {@link CreateExascaleDbStorageVaultCommandInput}
 * @returns {@link CreateExascaleDbStorageVaultCommandOutput}
 * @see {@link CreateExascaleDbStorageVaultCommandInput} for command's `input` shape.
 * @see {@link CreateExascaleDbStorageVaultCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>You have exceeded the service quota.</p>
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
export class CreateExascaleDbStorageVaultCommand extends command<CreateExascaleDbStorageVaultCommandInput, CreateExascaleDbStorageVaultCommandOutput>(
  _ep0,
  _mw0,
  "CreateExascaleDbStorageVault",
  CreateExascaleDbStorageVault$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateExascaleDbStorageVaultInput;
      output: CreateExascaleDbStorageVaultOutput;
    };
    sdk: {
      input: CreateExascaleDbStorageVaultCommandInput;
      output: CreateExascaleDbStorageVaultCommandOutput;
    };
  };
}
