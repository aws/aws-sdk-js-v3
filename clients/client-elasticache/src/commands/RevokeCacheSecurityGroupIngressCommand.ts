// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { RevokeCacheSecurityGroupIngressMessage } from "../models/models_0";
import { RevokeCacheSecurityGroupIngressResult } from "../models/models_1";
import {
  de_RevokeCacheSecurityGroupIngressCommand,
  se_RevokeCacheSecurityGroupIngressCommand,
} from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RevokeCacheSecurityGroupIngressCommand}.
 */
export interface RevokeCacheSecurityGroupIngressCommandInput extends RevokeCacheSecurityGroupIngressMessage {}
/**
 * @public
 *
 * The output of {@link RevokeCacheSecurityGroupIngressCommand}.
 */
export interface RevokeCacheSecurityGroupIngressCommandOutput
  extends RevokeCacheSecurityGroupIngressResult,
    __MetadataBearer {}

/**
 * <p>Revokes ingress from a cache security group. Use this operation to disallow access
 *             from an Amazon EC2 security group that had been previously authorized.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, RevokeCacheSecurityGroupIngressCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, RevokeCacheSecurityGroupIngressCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const input = { // RevokeCacheSecurityGroupIngressMessage
 *   CacheSecurityGroupName: "STRING_VALUE", // required
 *   EC2SecurityGroupName: "STRING_VALUE", // required
 *   EC2SecurityGroupOwnerId: "STRING_VALUE", // required
 * };
 * const command = new RevokeCacheSecurityGroupIngressCommand(input);
 * const response = await client.send(command);
 * // { // RevokeCacheSecurityGroupIngressResult
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
 * @param RevokeCacheSecurityGroupIngressCommandInput - {@link RevokeCacheSecurityGroupIngressCommandInput}
 * @returns {@link RevokeCacheSecurityGroupIngressCommandOutput}
 * @see {@link RevokeCacheSecurityGroupIngressCommandInput} for command's `input` shape.
 * @see {@link RevokeCacheSecurityGroupIngressCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for ElastiCacheClient's `config` shape.
 *
 * @throws {@link AuthorizationNotFoundFault} (client fault)
 *  <p>The specified Amazon EC2 security group is not authorized for the specified cache
 *             security group.</p>
 *
 * @throws {@link CacheSecurityGroupNotFoundFault} (client fault)
 *  <p>The requested cache security group name does not refer to an existing cache security
 *             group.</p>
 *
 * @throws {@link InvalidCacheSecurityGroupStateFault} (client fault)
 *  <p>The current state of the cache security group does not allow deletion.</p>
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p>Two or more incompatible parameters were specified.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value for a parameter is invalid.</p>
 *
 * @throws {@link ElastiCacheServiceException}
 * <p>Base exception class for all service exceptions from ElastiCache service.</p>
 *
 *
 * @example DescribeCacheSecurityGroups
 * ```javascript
 * // Returns a list of cache security group descriptions. If a cache security group name is specified, the list contains only the description of that group.
 * const input = {
 *   CacheSecurityGroupName: "my-sec-grp",
 *   EC2SecurityGroupName: "my-ec2-sec-grp",
 *   EC2SecurityGroupOwnerId: "1234567890"
 * };
 * const command = new RevokeCacheSecurityGroupIngressCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class RevokeCacheSecurityGroupIngressCommand extends $Command
  .classBuilder<
    RevokeCacheSecurityGroupIngressCommandInput,
    RevokeCacheSecurityGroupIngressCommandOutput,
    ElastiCacheClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElastiCacheClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonElastiCacheV9", "RevokeCacheSecurityGroupIngress", {})
  .n("ElastiCacheClient", "RevokeCacheSecurityGroupIngressCommand")
  .f(void 0, void 0)
  .ser(se_RevokeCacheSecurityGroupIngressCommand)
  .de(de_RevokeCacheSecurityGroupIngressCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RevokeCacheSecurityGroupIngressMessage;
      output: RevokeCacheSecurityGroupIngressResult;
    };
    sdk: {
      input: RevokeCacheSecurityGroupIngressCommandInput;
      output: RevokeCacheSecurityGroupIngressCommandOutput;
    };
  };
}
