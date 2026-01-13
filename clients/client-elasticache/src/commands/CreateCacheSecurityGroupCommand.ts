// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateCacheSecurityGroupMessage, CreateCacheSecurityGroupResult } from "../models/models_0";
import { CreateCacheSecurityGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateCacheSecurityGroupCommand}.
 */
export interface CreateCacheSecurityGroupCommandInput extends CreateCacheSecurityGroupMessage {}
/**
 * @public
 *
 * The output of {@link CreateCacheSecurityGroupCommand}.
 */
export interface CreateCacheSecurityGroupCommandOutput extends CreateCacheSecurityGroupResult, __MetadataBearer {}

/**
 * <p>Creates a new cache security group. Use a cache security group to control access to
 *             one or more clusters.</p>
 *          <p>Cache security groups are only used when you are creating a cluster outside of an
 *             Amazon Virtual Private Cloud (Amazon VPC). If you are creating a cluster inside of a
 *             VPC, use a cache subnet group instead. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_CreateCacheSubnetGroup.html">CreateCacheSubnetGroup</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, CreateCacheSecurityGroupCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, CreateCacheSecurityGroupCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * // import type { ElastiCacheClientConfig } from "@aws-sdk/client-elasticache";
 * const config = {}; // type is ElastiCacheClientConfig
 * const client = new ElastiCacheClient(config);
 * const input = { // CreateCacheSecurityGroupMessage
 *   CacheSecurityGroupName: "STRING_VALUE", // required
 *   Description: "STRING_VALUE", // required
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateCacheSecurityGroupCommand(input);
 * const response = await client.send(command);
 * // { // CreateCacheSecurityGroupResult
 * //   CacheSecurityGroup: { // CacheSecurityGroup
 * //     OwnerId: "STRING_VALUE",
 * //     CacheSecurityGroupName: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     EC2SecurityGroups: [ // EC2SecurityGroupList
 * //       { // EC2SecurityGroup
 * //         Status: "STRING_VALUE",
 * //         EC2SecurityGroupName: "STRING_VALUE",
 * //         EC2SecurityGroupOwnerId: "STRING_VALUE",
 * //       },
 * //     ],
 * //     ARN: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateCacheSecurityGroupCommandInput - {@link CreateCacheSecurityGroupCommandInput}
 * @returns {@link CreateCacheSecurityGroupCommandOutput}
 * @see {@link CreateCacheSecurityGroupCommandInput} for command's `input` shape.
 * @see {@link CreateCacheSecurityGroupCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for ElastiCacheClient's `config` shape.
 *
 * @throws {@link CacheSecurityGroupAlreadyExistsFault} (client fault)
 *  <p>A cache security group with the specified name already exists.</p>
 *
 * @throws {@link CacheSecurityGroupQuotaExceededFault} (client fault)
 *  <p>The request cannot be processed because it would exceed the allowed number of cache
 *             security groups.</p>
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p>Two or more incompatible parameters were specified.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value for a parameter is invalid.</p>
 *
 * @throws {@link TagQuotaPerResourceExceeded} (client fault)
 *  <p>The request cannot be processed because it would cause the resource to have more than
 *             the allowed number of tags. The maximum number of tags permitted on a resource is
 *             50.</p>
 *
 * @throws {@link ElastiCacheServiceException}
 * <p>Base exception class for all service exceptions from ElastiCache service.</p>
 *
 *
 * @example CreateCacheSecurityGroup
 * ```javascript
 * // Creates an ElastiCache security group. ElastiCache security groups are only for clusters not running in an AWS VPC.
 * const input = {
 *   CacheSecurityGroupName: "my-cache-sec-grp",
 *   Description: "Example ElastiCache security group."
 * };
 * const command = new CreateCacheSecurityGroupCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class CreateCacheSecurityGroupCommand extends $Command
  .classBuilder<
    CreateCacheSecurityGroupCommandInput,
    CreateCacheSecurityGroupCommandOutput,
    ElastiCacheClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElastiCacheClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonElastiCacheV9", "CreateCacheSecurityGroup", {})
  .n("ElastiCacheClient", "CreateCacheSecurityGroupCommand")
  .sc(CreateCacheSecurityGroup$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateCacheSecurityGroupMessage;
      output: CreateCacheSecurityGroupResult;
    };
    sdk: {
      input: CreateCacheSecurityGroupCommandInput;
      output: CreateCacheSecurityGroupCommandOutput;
    };
  };
}
