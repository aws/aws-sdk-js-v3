// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateWorkGroupInput, UpdateWorkGroupOutput } from "../models/models_0";
import { UpdateWorkGroup } from "../schemas/schemas_0";

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
 * // import type { AthenaClientConfig } from "@aws-sdk/client-athena";
 * const config = {}; // type is AthenaClientConfig
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
 *     ManagedQueryResultsConfigurationUpdates: { // ManagedQueryResultsConfigurationUpdates
 *       Enabled: true || false,
 *       EncryptionConfiguration: { // ManagedQueryResultsEncryptionConfiguration
 *         KmsKey: "STRING_VALUE", // required
 *       },
 *       RemoveEncryptionConfiguration: true || false,
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
 *     MonitoringConfiguration: { // MonitoringConfiguration
 *       CloudWatchLoggingConfiguration: { // CloudWatchLoggingConfiguration
 *         Enabled: true || false, // required
 *         LogGroup: "STRING_VALUE",
 *         LogStreamNamePrefix: "STRING_VALUE",
 *         LogTypes: { // LogTypesMap
 *           "<keys>": [ // LogTypeValuesList
 *             "STRING_VALUE",
 *           ],
 *         },
 *       },
 *       ManagedLoggingConfiguration: { // ManagedLoggingConfiguration
 *         Enabled: true || false, // required
 *         KmsKey: "STRING_VALUE",
 *       },
 *       S3LoggingConfiguration: { // S3LoggingConfiguration
 *         Enabled: true || false, // required
 *         KmsKey: "STRING_VALUE",
 *         LogLocation: "STRING_VALUE",
 *       },
 *     },
 *     EngineConfiguration: { // EngineConfiguration
 *       CoordinatorDpuSize: Number("int"),
 *       MaxConcurrentDpus: Number("int"),
 *       DefaultExecutorDpuSize: Number("int"),
 *       AdditionalConfigs: { // ParametersMap
 *         "<keys>": "STRING_VALUE",
 *       },
 *       SparkProperties: {
 *         "<keys>": "STRING_VALUE",
 *       },
 *       Classifications: [ // ClassificationList
 *         { // Classification
 *           Name: "STRING_VALUE",
 *           Properties: {
 *             "<keys>": "STRING_VALUE",
 *           },
 *         },
 *       ],
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
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AthenaClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonAthena", "UpdateWorkGroup", {})
  .n("AthenaClient", "UpdateWorkGroupCommand")
  .sc(UpdateWorkGroup)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateWorkGroupInput;
      output: {};
    };
    sdk: {
      input: UpdateWorkGroupCommandInput;
      output: UpdateWorkGroupCommandOutput;
    };
  };
}
