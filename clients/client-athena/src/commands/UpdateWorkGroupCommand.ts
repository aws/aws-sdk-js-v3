// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateWorkGroupInput, UpdateWorkGroupOutput } from "../models/models_0";
import { de_UpdateWorkGroupCommand, se_UpdateWorkGroupCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateWorkGroupCommand}.
 */
export interface UpdateWorkGroupCommandInput extends UpdateWorkGroupInput {}
/**
 * @public
 *
 * The output of {@link UpdateWorkGroupCommand}.
 */
export interface UpdateWorkGroupCommandOutput extends UpdateWorkGroupOutput, __MetadataBearer {}

/**
 * <p>Updates the workgroup with the specified name. The workgroup's name cannot be changed.
 *             Only <code>ConfigurationUpdates</code> can be specified.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, UpdateWorkGroupCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, UpdateWorkGroupCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * const client = new AthenaClient(config);
 * const input = { // UpdateWorkGroupInput
 *   WorkGroup: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   ConfigurationUpdates: { // WorkGroupConfigurationUpdates
 *     EnforceWorkGroupConfiguration: true || false,
 *     ResultConfigurationUpdates: { // ResultConfigurationUpdates
 *       OutputLocation: "STRING_VALUE",
 *       RemoveOutputLocation: true || false,
 *       EncryptionConfiguration: { // EncryptionConfiguration
 *         EncryptionOption: "SSE_S3" || "SSE_KMS" || "CSE_KMS", // required
 *         KmsKey: "STRING_VALUE",
 *       },
 *       RemoveEncryptionConfiguration: true || false,
 *       ExpectedBucketOwner: "STRING_VALUE",
 *       RemoveExpectedBucketOwner: true || false,
 *       AclConfiguration: { // AclConfiguration
 *         S3AclOption: "BUCKET_OWNER_FULL_CONTROL", // required
 *       },
 *       RemoveAclConfiguration: true || false,
 *     },
 *     PublishCloudWatchMetricsEnabled: true || false,
 *     BytesScannedCutoffPerQuery: Number("long"),
 *     RemoveBytesScannedCutoffPerQuery: true || false,
 *     RequesterPaysEnabled: true || false,
 *     EngineVersion: { // EngineVersion
 *       SelectedEngineVersion: "STRING_VALUE",
 *       EffectiveEngineVersion: "STRING_VALUE",
 *     },
 *     RemoveCustomerContentEncryptionConfiguration: true || false,
 *     AdditionalConfiguration: "STRING_VALUE",
 *     ExecutionRole: "STRING_VALUE",
 *     CustomerContentEncryptionConfiguration: { // CustomerContentEncryptionConfiguration
 *       KmsKey: "STRING_VALUE", // required
 *     },
 *     EnableMinimumEncryptionConfiguration: true || false,
 *     QueryResultsS3AccessGrantsConfiguration: { // QueryResultsS3AccessGrantsConfiguration
 *       EnableS3AccessGrants: true || false, // required
 *       CreateUserLevelPrefix: true || false,
 *       AuthenticationType: "DIRECTORY_IDENTITY", // required
 *     },
 *   },
 *   State: "ENABLED" || "DISABLED",
 * };
 * const command = new UpdateWorkGroupCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateWorkGroupCommandInput - {@link UpdateWorkGroupCommandInput}
 * @returns {@link UpdateWorkGroupCommandOutput}
 * @see {@link UpdateWorkGroupCommandInput} for command's `input` shape.
 * @see {@link UpdateWorkGroupCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for AthenaClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Indicates a platform issue, which may be due to a transient condition or
 *             outage.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>Indicates that something is wrong with the input to the request. For example, a
 *             required parameter may be missing or out of range.</p>
 *
 * @throws {@link AthenaServiceException}
 * <p>Base exception class for all service exceptions from Athena service.</p>
 *
 * @public
 */
export class UpdateWorkGroupCommand extends $Command
  .classBuilder<
    UpdateWorkGroupCommandInput,
    UpdateWorkGroupCommandOutput,
    AthenaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: AthenaClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonAthena", "UpdateWorkGroup", {})
  .n("AthenaClient", "UpdateWorkGroupCommand")
  .f(void 0, void 0)
  .ser(se_UpdateWorkGroupCommand)
  .de(de_UpdateWorkGroupCommand)
  .build() {}
