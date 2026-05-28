// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdatePolicyRequest, UpdatePolicyResponse } from "../models/models_0";
import type {
  Resiliencehubv2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Resiliencehubv2Client";
import { UpdatePolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdatePolicyCommand}.
 */
export interface UpdatePolicyCommandInput extends UpdatePolicyRequest {}
/**
 * @public
 *
 * The output of {@link UpdatePolicyCommand}.
 */
export interface UpdatePolicyCommandOutput extends UpdatePolicyResponse, __MetadataBearer {}

/**
 * <p>Updates an existing resilience policy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Resiliencehubv2Client, UpdatePolicyCommand } from "@aws-sdk/client-resiliencehubv2"; // ES Modules import
 * // const { Resiliencehubv2Client, UpdatePolicyCommand } = require("@aws-sdk/client-resiliencehubv2"); // CommonJS import
 * // import type { Resiliencehubv2ClientConfig } from "@aws-sdk/client-resiliencehubv2";
 * const config = {}; // type is Resiliencehubv2ClientConfig
 * const client = new Resiliencehubv2Client(config);
 * const input = { // UpdatePolicyRequest
 *   policyArn: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   availabilitySlo: { // AvailabilitySlo
 *     target: Number("double"),
 *   },
 *   multiAz: { // MultiAzTargets
 *     rtoInMinutes: Number("int"),
 *     rpoInMinutes: Number("int"),
 *     disasterRecoveryApproach: "ACTIVE_ACTIVE" || "HOT_STANDBY" || "WARM_STANDBY" || "PILOT_LIGHT" || "BACKUP_AND_RESTORE",
 *   },
 *   multiRegion: { // MultiRegionTargets
 *     rtoInMinutes: Number("int"),
 *     rpoInMinutes: Number("int"),
 *     disasterRecoveryApproach: "ACTIVE_ACTIVE" || "HOT_STANDBY" || "WARM_STANDBY" || "PILOT_LIGHT" || "BACKUP_AND_RESTORE",
 *   },
 *   dataRecovery: { // DataRecoveryTargets
 *     timeBetweenBackupsInMinutes: Number("int"),
 *   },
 * };
 * const command = new UpdatePolicyCommand(input);
 * const response = await client.send(command);
 * // { // UpdatePolicyResponse
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
 * @param UpdatePolicyCommandInput - {@link UpdatePolicyCommandInput}
 * @returns {@link UpdatePolicyCommandOutput}
 * @see {@link UpdatePolicyCommandInput} for command's `input` shape.
 * @see {@link UpdatePolicyCommandOutput} for command's `response` shape.
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
export class UpdatePolicyCommand extends $Command
  .classBuilder<
    UpdatePolicyCommandInput,
    UpdatePolicyCommandOutput,
    Resiliencehubv2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Resiliencehubv2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("NGRHServiceCore", "UpdatePolicy", {})
  .n("Resiliencehubv2Client", "UpdatePolicyCommand")
  .sc(UpdatePolicy$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdatePolicyRequest;
      output: UpdatePolicyResponse;
    };
    sdk: {
      input: UpdatePolicyCommandInput;
      output: UpdatePolicyCommandOutput;
    };
  };
}
