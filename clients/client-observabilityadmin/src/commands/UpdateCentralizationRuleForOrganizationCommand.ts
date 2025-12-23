// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  UpdateCentralizationRuleForOrganizationInput,
  UpdateCentralizationRuleForOrganizationOutput,
} from "../models/models_0";
import type {
  ObservabilityAdminClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ObservabilityAdminClient";
import { UpdateCentralizationRuleForOrganization$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateCentralizationRuleForOrganizationCommand}.
 */
export interface UpdateCentralizationRuleForOrganizationCommandInput extends UpdateCentralizationRuleForOrganizationInput {}
/**
 * @public
 *
 * The output of {@link UpdateCentralizationRuleForOrganizationCommand}.
 */
export interface UpdateCentralizationRuleForOrganizationCommandOutput extends UpdateCentralizationRuleForOrganizationOutput, __MetadataBearer {}

/**
 * <p>Updates an existing centralization rule that applies across an Amazon Web Services Organization. This operation can only be called by the organization's management account or a delegated administrator account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ObservabilityAdminClient, UpdateCentralizationRuleForOrganizationCommand } from "@aws-sdk/client-observabilityadmin"; // ES Modules import
 * // const { ObservabilityAdminClient, UpdateCentralizationRuleForOrganizationCommand } = require("@aws-sdk/client-observabilityadmin"); // CommonJS import
 * // import type { ObservabilityAdminClientConfig } from "@aws-sdk/client-observabilityadmin";
 * const config = {}; // type is ObservabilityAdminClientConfig
 * const client = new ObservabilityAdminClient(config);
 * const input = { // UpdateCentralizationRuleForOrganizationInput
 *   RuleIdentifier: "STRING_VALUE", // required
 *   Rule: { // CentralizationRule
 *     Source: { // CentralizationRuleSource
 *       Regions: [ // Regions // required
 *         "STRING_VALUE",
 *       ],
 *       Scope: "STRING_VALUE",
 *       SourceLogsConfiguration: { // SourceLogsConfiguration
 *         LogGroupSelectionCriteria: "STRING_VALUE", // required
 *         EncryptedLogGroupStrategy: "ALLOW" || "SKIP", // required
 *       },
 *     },
 *     Destination: { // CentralizationRuleDestination
 *       Region: "STRING_VALUE", // required
 *       Account: "STRING_VALUE",
 *       DestinationLogsConfiguration: { // DestinationLogsConfiguration
 *         LogsEncryptionConfiguration: { // LogsEncryptionConfiguration
 *           EncryptionStrategy: "CUSTOMER_MANAGED" || "AWS_OWNED", // required
 *           KmsKeyArn: "STRING_VALUE",
 *           EncryptionConflictResolutionStrategy: "ALLOW" || "SKIP",
 *         },
 *         BackupConfiguration: { // LogsBackupConfiguration
 *           Region: "STRING_VALUE", // required
 *           KmsKeyArn: "STRING_VALUE",
 *         },
 *       },
 *     },
 *   },
 * };
 * const command = new UpdateCentralizationRuleForOrganizationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateCentralizationRuleForOrganizationOutput
 * //   RuleArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateCentralizationRuleForOrganizationCommandInput - {@link UpdateCentralizationRuleForOrganizationCommandInput}
 * @returns {@link UpdateCentralizationRuleForOrganizationCommandOutput}
 * @see {@link UpdateCentralizationRuleForOrganizationCommandInput} for command's `input` shape.
 * @see {@link UpdateCentralizationRuleForOrganizationCommandOutput} for command's `response` shape.
 * @see {@link ObservabilityAdminClientResolvedConfig | config} for ObservabilityAdminClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> Indicates you don't have permissions to perform the requested operation. The user or role that is making the request must have at least one IAM permissions policy attached that grants the required permissions. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html">Access management for Amazon Web Services resources</a> in the IAM user guide. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> Indicates the request has failed to process because of an unknown server error, exception, or failure. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p> The specified resource (such as a telemetry rule) could not be found. </p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p> The requested operation would exceed the allowed quota for the specified resource type. </p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p> The request throughput limit was exceeded. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> Indicates input validation failed. Check your request parameters and retry the request. </p>
 *
 * @throws {@link ObservabilityAdminServiceException}
 * <p>Base exception class for all service exceptions from ObservabilityAdmin service.</p>
 *
 *
 * @public
 */
export class UpdateCentralizationRuleForOrganizationCommand extends $Command
  .classBuilder<
    UpdateCentralizationRuleForOrganizationCommandInput,
    UpdateCentralizationRuleForOrganizationCommandOutput,
    ObservabilityAdminClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ObservabilityAdminClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ObservabilityAdmin", "UpdateCentralizationRuleForOrganization", {})
  .n("ObservabilityAdminClient", "UpdateCentralizationRuleForOrganizationCommand")
  .sc(UpdateCentralizationRuleForOrganization$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateCentralizationRuleForOrganizationInput;
      output: UpdateCentralizationRuleForOrganizationOutput;
    };
    sdk: {
      input: UpdateCentralizationRuleForOrganizationCommandInput;
      output: UpdateCentralizationRuleForOrganizationCommandOutput;
    };
  };
}
