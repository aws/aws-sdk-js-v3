// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DrsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DrsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  CreateReplicationConfigurationTemplateRequest,
  ReplicationConfigurationTemplate,
} from "../models/models_0";
import { CreateReplicationConfigurationTemplate } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateReplicationConfigurationTemplateCommand}.
 */
export interface CreateReplicationConfigurationTemplateCommandInput
  extends CreateReplicationConfigurationTemplateRequest {}
/**
 * @public
 *
 * The output of {@link CreateReplicationConfigurationTemplateCommand}.
 */
export interface CreateReplicationConfigurationTemplateCommandOutput
  extends ReplicationConfigurationTemplate,
    __MetadataBearer {}

/**
 * <p>Creates a new ReplicationConfigurationTemplate.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DrsClient, CreateReplicationConfigurationTemplateCommand } from "@aws-sdk/client-drs"; // ES Modules import
 * // const { DrsClient, CreateReplicationConfigurationTemplateCommand } = require("@aws-sdk/client-drs"); // CommonJS import
 * // import type { DrsClientConfig } from "@aws-sdk/client-drs";
 * const config = {}; // type is DrsClientConfig
 * const client = new DrsClient(config);
 * const input = { // CreateReplicationConfigurationTemplateRequest
 *   stagingAreaSubnetId: "STRING_VALUE", // required
 *   associateDefaultSecurityGroup: true || false, // required
 *   replicationServersSecurityGroupsIDs: [ // ReplicationServersSecurityGroupsIDs // required
 *     "STRING_VALUE",
 *   ],
 *   replicationServerInstanceType: "STRING_VALUE", // required
 *   useDedicatedReplicationServer: true || false, // required
 *   defaultLargeStagingDiskType: "STRING_VALUE", // required
 *   ebsEncryption: "STRING_VALUE", // required
 *   ebsEncryptionKeyArn: "STRING_VALUE",
 *   bandwidthThrottling: Number("long"), // required
 *   dataPlaneRouting: "STRING_VALUE", // required
 *   createPublicIP: true || false, // required
 *   stagingAreaTags: { // TagsMap // required
 *     "<keys>": "STRING_VALUE",
 *   },
 *   pitPolicy: [ // PITPolicy // required
 *     { // PITPolicyRule
 *       ruleID: Number("long"),
 *       units: "STRING_VALUE", // required
 *       interval: Number("int"), // required
 *       retentionDuration: Number("int"), // required
 *       enabled: true || false,
 *     },
 *   ],
 *   tags: {
 *     "<keys>": "STRING_VALUE",
 *   },
 *   autoReplicateNewDisks: true || false,
 * };
 * const command = new CreateReplicationConfigurationTemplateCommand(input);
 * const response = await client.send(command);
 * // { // ReplicationConfigurationTemplate
 * //   replicationConfigurationTemplateID: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE",
 * //   stagingAreaSubnetId: "STRING_VALUE",
 * //   associateDefaultSecurityGroup: true || false,
 * //   replicationServersSecurityGroupsIDs: [ // ReplicationServersSecurityGroupsIDs
 * //     "STRING_VALUE",
 * //   ],
 * //   replicationServerInstanceType: "STRING_VALUE",
 * //   useDedicatedReplicationServer: true || false,
 * //   defaultLargeStagingDiskType: "STRING_VALUE",
 * //   ebsEncryption: "STRING_VALUE",
 * //   ebsEncryptionKeyArn: "STRING_VALUE",
 * //   bandwidthThrottling: Number("long"),
 * //   dataPlaneRouting: "STRING_VALUE",
 * //   createPublicIP: true || false,
 * //   stagingAreaTags: { // TagsMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   tags: {
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   pitPolicy: [ // PITPolicy
 * //     { // PITPolicyRule
 * //       ruleID: Number("long"),
 * //       units: "STRING_VALUE", // required
 * //       interval: Number("int"), // required
 * //       retentionDuration: Number("int"), // required
 * //       enabled: true || false,
 * //     },
 * //   ],
 * //   autoReplicateNewDisks: true || false,
 * // };
 *
 * ```
 *
 * @param CreateReplicationConfigurationTemplateCommandInput - {@link CreateReplicationConfigurationTemplateCommandInput}
 * @returns {@link CreateReplicationConfigurationTemplateCommandOutput}
 * @see {@link CreateReplicationConfigurationTemplateCommandInput} for command's `input` shape.
 * @see {@link CreateReplicationConfigurationTemplateCommandOutput} for command's `response` shape.
 * @see {@link DrsClientResolvedConfig | config} for DrsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request could not be completed because its exceeded the service quota.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link UninitializedAccountException} (client fault)
 *  <p>The account performing the request has not been initialized.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the AWS service.</p>
 *
 * @throws {@link DrsServiceException}
 * <p>Base exception class for all service exceptions from Drs service.</p>
 *
 *
 * @public
 */
export class CreateReplicationConfigurationTemplateCommand extends $Command
  .classBuilder<
    CreateReplicationConfigurationTemplateCommandInput,
    CreateReplicationConfigurationTemplateCommandOutput,
    DrsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DrsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ElasticDisasterRecoveryService", "CreateReplicationConfigurationTemplate", {})
  .n("DrsClient", "CreateReplicationConfigurationTemplateCommand")
  .sc(CreateReplicationConfigurationTemplate)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateReplicationConfigurationTemplateRequest;
      output: ReplicationConfigurationTemplate;
    };
    sdk: {
      input: CreateReplicationConfigurationTemplateCommandInput;
      output: CreateReplicationConfigurationTemplateCommandOutput;
    };
  };
}
