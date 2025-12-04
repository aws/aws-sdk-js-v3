// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateWorkGroupInput, CreateWorkGroupOutput } from "../models/models_0";
import { CreateWorkGroup } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateWorkGroupCommand}.
 */
export interface CreateWorkGroupCommandInput extends CreateWorkGroupInput {}
/**
 * @public
 *
 * The output of {@link CreateWorkGroupCommand}.
 */
export interface CreateWorkGroupCommandOutput extends CreateWorkGroupOutput, __MetadataBearer {}

/**
 * <p>Creates a workgroup with the specified name. A workgroup can be an Apache Spark
 *             enabled workgroup or an Athena SQL workgroup.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, CreateWorkGroupCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, CreateWorkGroupCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * // import type { AthenaClientConfig } from "@aws-sdk/client-athena";
 * const config = {}; // type is AthenaClientConfig
 * const client = new AthenaClient(config);
 * const input = { // CreateWorkGroupInput
 *   Name: "STRING_VALUE", // required
 *   Configuration: { // WorkGroupConfiguration
 *     ResultConfiguration: { // ResultConfiguration
 *       OutputLocation: "STRING_VALUE",
 *       EncryptionConfiguration: { // EncryptionConfiguration
 *         EncryptionOption: "SSE_S3" || "SSE_KMS" || "CSE_KMS", // required
 *         KmsKey: "STRING_VALUE",
 *       },
 *       ExpectedBucketOwner: "STRING_VALUE",
 *       AclConfiguration: { // AclConfiguration
 *         S3AclOption: "BUCKET_OWNER_FULL_CONTROL", // required
 *       },
 *     },
 *     ManagedQueryResultsConfiguration: { // ManagedQueryResultsConfiguration
 *       Enabled: true || false, // required
 *       EncryptionConfiguration: { // ManagedQueryResultsEncryptionConfiguration
 *         KmsKey: "STRING_VALUE", // required
 *       },
 *     },
 *     EnforceWorkGroupConfiguration: true || false,
 *     PublishCloudWatchMetricsEnabled: true || false,
 *     BytesScannedCutoffPerQuery: Number("long"),
 *     RequesterPaysEnabled: true || false,
 *     EngineVersion: { // EngineVersion
 *       SelectedEngineVersion: "STRING_VALUE",
 *       EffectiveEngineVersion: "STRING_VALUE",
 *     },
 *     AdditionalConfiguration: "STRING_VALUE",
 *     ExecutionRole: "STRING_VALUE",
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
 *     CustomerContentEncryptionConfiguration: { // CustomerContentEncryptionConfiguration
 *       KmsKey: "STRING_VALUE", // required
 *     },
 *     EnableMinimumEncryptionConfiguration: true || false,
 *     IdentityCenterConfiguration: { // IdentityCenterConfiguration
 *       EnableIdentityCenter: true || false,
 *       IdentityCenterInstanceArn: "STRING_VALUE",
 *     },
 *     QueryResultsS3AccessGrantsConfiguration: { // QueryResultsS3AccessGrantsConfiguration
 *       EnableS3AccessGrants: true || false, // required
 *       CreateUserLevelPrefix: true || false,
 *       AuthenticationType: "DIRECTORY_IDENTITY", // required
 *     },
 *   },
 *   Description: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateWorkGroupCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateWorkGroupCommandInput - {@link CreateWorkGroupCommandInput}
 * @returns {@link CreateWorkGroupCommandOutput}
 * @see {@link CreateWorkGroupCommandInput} for command's `input` shape.
 * @see {@link CreateWorkGroupCommandOutput} for command's `response` shape.
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
export class CreateWorkGroupCommand extends $Command
  .classBuilder<
    CreateWorkGroupCommandInput,
    CreateWorkGroupCommandOutput,
    AthenaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AthenaClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonAthena", "CreateWorkGroup", {})
  .n("AthenaClient", "CreateWorkGroupCommand")
  .sc(CreateWorkGroup)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateWorkGroupInput;
      output: {};
    };
    sdk: {
      input: CreateWorkGroupCommandInput;
      output: CreateWorkGroupCommandOutput;
    };
  };
}
