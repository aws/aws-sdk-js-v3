// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { PutReplicationConfigurationRequest, PutReplicationConfigurationResponse } from "../models/models_0";
import { de_PutReplicationConfigurationCommand, se_PutReplicationConfigurationCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutReplicationConfigurationCommand}.
 */
export interface PutReplicationConfigurationCommandInput extends PutReplicationConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link PutReplicationConfigurationCommand}.
 */
export interface PutReplicationConfigurationCommandOutput
  extends PutReplicationConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Creates or updates the replication configuration for a registry. The existing
 *             replication configuration for a repository can be retrieved with the <a>DescribeRegistry</a> API action. The first time the
 *             PutReplicationConfiguration API is called, a service-linked IAM role is created in
 *             your account for the replication process. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/using-service-linked-roles.html">Using
 *                 service-linked roles for Amazon ECR</a> in the <i>Amazon Elastic Container Registry User Guide</i>.
 *             For more information on the custom role for replication, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/replication-creation-templates.html#roles-creatingrole-user-console">Creating an IAM role for replication</a>.</p>
 *          <note>
 *             <p>When configuring cross-account replication, the destination account must grant the
 *                 source account permission to replicate. This permission is controlled using a
 *                 registry permissions policy. For more information, see <a>PutRegistryPolicy</a>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, PutReplicationConfigurationCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, PutReplicationConfigurationCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * const client = new ECRClient(config);
 * const input = { // PutReplicationConfigurationRequest
 *   replicationConfiguration: { // ReplicationConfiguration
 *     rules: [ // ReplicationRuleList // required
 *       { // ReplicationRule
 *         destinations: [ // ReplicationDestinationList // required
 *           { // ReplicationDestination
 *             region: "STRING_VALUE", // required
 *             registryId: "STRING_VALUE", // required
 *           },
 *         ],
 *         repositoryFilters: [ // RepositoryFilterList
 *           { // RepositoryFilter
 *             filter: "STRING_VALUE", // required
 *             filterType: "PREFIX_MATCH", // required
 *           },
 *         ],
 *       },
 *     ],
 *   },
 * };
 * const command = new PutReplicationConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // PutReplicationConfigurationResponse
 * //   replicationConfiguration: { // ReplicationConfiguration
 * //     rules: [ // ReplicationRuleList // required
 * //       { // ReplicationRule
 * //         destinations: [ // ReplicationDestinationList // required
 * //           { // ReplicationDestination
 * //             region: "STRING_VALUE", // required
 * //             registryId: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //         repositoryFilters: [ // RepositoryFilterList
 * //           { // RepositoryFilter
 * //             filter: "STRING_VALUE", // required
 * //             filterType: "PREFIX_MATCH", // required
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param PutReplicationConfigurationCommandInput - {@link PutReplicationConfigurationCommandInput}
 * @returns {@link PutReplicationConfigurationCommandOutput}
 * @see {@link PutReplicationConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutReplicationConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for ECRClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter is invalid. Review the available parameters for the API
 *             request.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server-side issue.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>There was an exception validating this request.</p>
 *
 * @throws {@link ECRServiceException}
 * <p>Base exception class for all service exceptions from ECR service.</p>
 *
 *
 * @public
 */
export class PutReplicationConfigurationCommand extends $Command
  .classBuilder<
    PutReplicationConfigurationCommandInput,
    PutReplicationConfigurationCommandOutput,
    ECRClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ECRClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonEC2ContainerRegistry_V20150921", "PutReplicationConfiguration", {})
  .n("ECRClient", "PutReplicationConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_PutReplicationConfigurationCommand)
  .de(de_PutReplicationConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutReplicationConfigurationRequest;
      output: PutReplicationConfigurationResponse;
    };
    sdk: {
      input: PutReplicationConfigurationCommandInput;
      output: PutReplicationConfigurationCommandOutput;
    };
  };
}
