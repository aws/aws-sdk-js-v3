// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeRegistryRequest, DescribeRegistryResponse } from "../models/models_0";
import { de_DescribeRegistryCommand, se_DescribeRegistryCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeRegistryCommand}.
 */
export interface DescribeRegistryCommandInput extends DescribeRegistryRequest {}
/**
 * @public
 *
 * The output of {@link DescribeRegistryCommand}.
 */
export interface DescribeRegistryCommandOutput extends DescribeRegistryResponse, __MetadataBearer {}

/**
 * <p>Describes the settings for a registry. The replication configuration for a repository
 *             can be created or updated with the <a>PutReplicationConfiguration</a> API
 *             action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, DescribeRegistryCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, DescribeRegistryCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * const client = new ECRClient(config);
 * const input = {};
 * const command = new DescribeRegistryCommand(input);
 * const response = await client.send(command);
 * // { // DescribeRegistryResponse
 * //   registryId: "STRING_VALUE",
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
 * @param DescribeRegistryCommandInput - {@link DescribeRegistryCommandInput}
 * @returns {@link DescribeRegistryCommandOutput}
 * @see {@link DescribeRegistryCommandInput} for command's `input` shape.
 * @see {@link DescribeRegistryCommandOutput} for command's `response` shape.
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
 * @public
 */
export class DescribeRegistryCommand extends $Command
  .classBuilder<
    DescribeRegistryCommandInput,
    DescribeRegistryCommandOutput,
    ECRClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ECRClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonEC2ContainerRegistry_V20150921", "DescribeRegistry", {})
  .n("ECRClient", "DescribeRegistryCommand")
  .f(void 0, void 0)
  .ser(se_DescribeRegistryCommand)
  .de(de_DescribeRegistryCommand)
  .build() {}
