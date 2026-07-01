// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ImportPolicyRequest, ImportPolicyResponse } from "../models/models_0";
import { ImportPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ImportPolicyCommand}.
 */
export interface ImportPolicyCommandInput extends ImportPolicyRequest {}
/**
 * @public
 *
 * The output of {@link ImportPolicyCommand}.
 */
export interface ImportPolicyCommandOutput extends ImportPolicyResponse, __MetadataBearer {}

/**
 * <p>Imports a V1 policy into V2, mapping RTO/RPO values from V1 scenarios.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Resiliencehubv2Client, ImportPolicyCommand } from "@aws-sdk/client-resiliencehubv2"; // ES Modules import
 * // const { Resiliencehubv2Client, ImportPolicyCommand } = require("@aws-sdk/client-resiliencehubv2"); // CommonJS import
 * // import type { Resiliencehubv2ClientConfig } from "@aws-sdk/client-resiliencehubv2";
 * const config = {}; // type is Resiliencehubv2ClientConfig
 * const client = new Resiliencehubv2Client(config);
 * const input = { // ImportPolicyRequest
 *   v1PolicyArn: "STRING_VALUE", // required
 *   kmsKeyId: "STRING_VALUE",
 *   availabilitySlo: { // AvailabilitySlo
 *     target: Number("double"),
 *   },
 *   multiAzDisasterRecoveryApproach: "ACTIVE_ACTIVE" || "HOT_STANDBY" || "WARM_STANDBY" || "PILOT_LIGHT" || "BACKUP_AND_RESTORE",
 *   multiRegionDisasterRecoveryApproach: "ACTIVE_ACTIVE" || "HOT_STANDBY" || "WARM_STANDBY" || "PILOT_LIGHT" || "BACKUP_AND_RESTORE",
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new ImportPolicyCommand(input);
 * const response = await client.send(command);
 * // { // ImportPolicyResponse
 * //   policy: { // Policy
 * //     policyArn: "STRING_VALUE", // required
 * //     name: "STRING_VALUE", // required
 * //     description: "STRING_VALUE",
 * //     availabilitySlo: { // AvailabilitySlo
 * //       target: Number("double"),
 * //     },
 * //     multiAz: { // MultiAzTargets
 * //       rtoInMinutes: Number("int"),
 * //       rpoInMinutes: Number("int"),
 * //       disasterRecoveryApproach: "ACTIVE_ACTIVE" || "HOT_STANDBY" || "WARM_STANDBY" || "PILOT_LIGHT" || "BACKUP_AND_RESTORE",
 * //     },
 * //     multiRegion: { // MultiRegionTargets
 * //       rtoInMinutes: Number("int"),
 * //       rpoInMinutes: Number("int"),
 * //       disasterRecoveryApproach: "ACTIVE_ACTIVE" || "HOT_STANDBY" || "WARM_STANDBY" || "PILOT_LIGHT" || "BACKUP_AND_RESTORE",
 * //     },
 * //     dataRecovery: { // DataRecoveryTargets
 * //       timeBetweenBackupsInMinutes: Number("int"),
 * //     },
 * //     kmsKeyId: "STRING_VALUE",
 * //     tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     associatedServiceCount: Number("int"),
 * //     createdAt: new Date("TIMESTAMP"),
 * //     updatedAt: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param ImportPolicyCommandInput - {@link ImportPolicyCommandInput}
 * @returns {@link ImportPolicyCommandOutput}
 * @see {@link ImportPolicyCommandInput} for command's `input` shape.
 * @see {@link ImportPolicyCommandOutput} for command's `response` shape.
 * @see {@link Resiliencehubv2ClientResolvedConfig | config} for Resiliencehubv2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access denied — caller lacks required permissions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Conflict — resource already exists.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal service error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Validation error — invalid input parameters.</p>
 *
 * @throws {@link Resiliencehubv2ServiceException}
 * <p>Base exception class for all service exceptions from Resiliencehubv2 service.</p>
 *
 *
 * @public
 */
export class ImportPolicyCommand extends command<ImportPolicyCommandInput, ImportPolicyCommandOutput>(
  _ep0,
  _mw0,
  "ImportPolicy",
  ImportPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ImportPolicyRequest;
      output: ImportPolicyResponse;
    };
    sdk: {
      input: ImportPolicyCommandInput;
      output: ImportPolicyCommandOutput;
    };
  };
}
