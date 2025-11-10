// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DrsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DrsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeReplicationConfigurationTemplatesRequest,
  DescribeReplicationConfigurationTemplatesResponse,
} from "../models/models_0";
import { DescribeReplicationConfigurationTemplates } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeReplicationConfigurationTemplatesCommand}.
 */
export interface DescribeReplicationConfigurationTemplatesCommandInput
  extends DescribeReplicationConfigurationTemplatesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeReplicationConfigurationTemplatesCommand}.
 */
export interface DescribeReplicationConfigurationTemplatesCommandOutput
  extends DescribeReplicationConfigurationTemplatesResponse,
    __MetadataBearer {}

/**
 * <p>Lists all ReplicationConfigurationTemplates, filtered by Source Server IDs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DrsClient, DescribeReplicationConfigurationTemplatesCommand } from "@aws-sdk/client-drs"; // ES Modules import
 * // const { DrsClient, DescribeReplicationConfigurationTemplatesCommand } = require("@aws-sdk/client-drs"); // CommonJS import
 * // import type { DrsClientConfig } from "@aws-sdk/client-drs";
 * const config = {}; // type is DrsClientConfig
 * const client = new DrsClient(config);
 * const input = { // DescribeReplicationConfigurationTemplatesRequest
 *   replicationConfigurationTemplateIDs: [ // ReplicationConfigurationTemplateIDs
 *     "STRING_VALUE",
 *   ],
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new DescribeReplicationConfigurationTemplatesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeReplicationConfigurationTemplatesResponse
 * //   items: [ // ReplicationConfigurationTemplates
 * //     { // ReplicationConfigurationTemplate
 * //       replicationConfigurationTemplateID: "STRING_VALUE", // required
 * //       arn: "STRING_VALUE",
 * //       stagingAreaSubnetId: "STRING_VALUE",
 * //       associateDefaultSecurityGroup: true || false,
 * //       replicationServersSecurityGroupsIDs: [ // ReplicationServersSecurityGroupsIDs
 * //         "STRING_VALUE",
 * //       ],
 * //       replicationServerInstanceType: "STRING_VALUE",
 * //       useDedicatedReplicationServer: true || false,
 * //       defaultLargeStagingDiskType: "STRING_VALUE",
 * //       ebsEncryption: "STRING_VALUE",
 * //       ebsEncryptionKeyArn: "STRING_VALUE",
 * //       bandwidthThrottling: Number("long"),
 * //       dataPlaneRouting: "STRING_VALUE",
 * //       createPublicIP: true || false,
 * //       stagingAreaTags: { // TagsMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       tags: {
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       pitPolicy: [ // PITPolicy
 * //         { // PITPolicyRule
 * //           ruleID: Number("long"),
 * //           units: "STRING_VALUE", // required
 * //           interval: Number("int"), // required
 * //           retentionDuration: Number("int"), // required
 * //           enabled: true || false,
 * //         },
 * //       ],
 * //       autoReplicateNewDisks: true || false,
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeReplicationConfigurationTemplatesCommandInput - {@link DescribeReplicationConfigurationTemplatesCommandInput}
 * @returns {@link DescribeReplicationConfigurationTemplatesCommandOutput}
 * @see {@link DescribeReplicationConfigurationTemplatesCommandInput} for command's `input` shape.
 * @see {@link DescribeReplicationConfigurationTemplatesCommandOutput} for command's `response` shape.
 * @see {@link DrsClientResolvedConfig | config} for DrsClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource for this operation was not found.</p>
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
export class DescribeReplicationConfigurationTemplatesCommand extends $Command
  .classBuilder<
    DescribeReplicationConfigurationTemplatesCommandInput,
    DescribeReplicationConfigurationTemplatesCommandOutput,
    DrsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DrsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ElasticDisasterRecoveryService", "DescribeReplicationConfigurationTemplates", {})
  .n("DrsClient", "DescribeReplicationConfigurationTemplatesCommand")
  .sc(DescribeReplicationConfigurationTemplates)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeReplicationConfigurationTemplatesRequest;
      output: DescribeReplicationConfigurationTemplatesResponse;
    };
    sdk: {
      input: DescribeReplicationConfigurationTemplatesCommandInput;
      output: DescribeReplicationConfigurationTemplatesCommandOutput;
    };
  };
}
