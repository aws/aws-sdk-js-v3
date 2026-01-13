// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeUsersMessage, DescribeUsersResult } from "../models/models_0";
import { DescribeUsers$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeUsersCommand}.
 */
export interface DescribeUsersCommandInput extends DescribeUsersMessage {}
/**
 * @public
 *
 * The output of {@link DescribeUsersCommand}.
 */
export interface DescribeUsersCommandOutput extends DescribeUsersResult, __MetadataBearer {}

/**
 * <p>Returns a list of users.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, DescribeUsersCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, DescribeUsersCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * // import type { ElastiCacheClientConfig } from "@aws-sdk/client-elasticache";
 * const config = {}; // type is ElastiCacheClientConfig
 * const client = new ElastiCacheClient(config);
 * const input = { // DescribeUsersMessage
 *   Engine: "STRING_VALUE",
 *   UserId: "STRING_VALUE",
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE", // required
 *       Values: [ // FilterValueList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new DescribeUsersCommand(input);
 * const response = await client.send(command);
 * // { // DescribeUsersResult
 * //   Users: [ // UserList
 * //     { // User
 * //       UserId: "STRING_VALUE",
 * //       UserName: "STRING_VALUE",
 * //       Status: "STRING_VALUE",
 * //       Engine: "STRING_VALUE",
 * //       MinimumEngineVersion: "STRING_VALUE",
 * //       AccessString: "STRING_VALUE",
 * //       UserGroupIds: [ // UserGroupIdList
 * //         "STRING_VALUE",
 * //       ],
 * //       Authentication: { // Authentication
 * //         Type: "password" || "no-password" || "iam",
 * //         PasswordCount: Number("int"),
 * //       },
 * //       ARN: "STRING_VALUE",
 * //     },
 * //   ],
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeUsersCommandInput - {@link DescribeUsersCommandInput}
 * @returns {@link DescribeUsersCommandOutput}
 * @see {@link DescribeUsersCommandInput} for command's `input` shape.
 * @see {@link DescribeUsersCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for ElastiCacheClient's `config` shape.
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p>Two or more incompatible parameters were specified.</p>
 *
 * @throws {@link ServiceLinkedRoleNotFoundFault} (client fault)
 *  <p>The specified service linked role (SLR) was not found.</p>
 *
 * @throws {@link UserNotFoundFault} (client fault)
 *  <p>The user does not exist or could not be found.</p>
 *
 * @throws {@link ElastiCacheServiceException}
 * <p>Base exception class for all service exceptions from ElastiCache service.</p>
 *
 *
 * @public
 */
export class DescribeUsersCommand extends $Command
  .classBuilder<
    DescribeUsersCommandInput,
    DescribeUsersCommandOutput,
    ElastiCacheClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElastiCacheClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonElastiCacheV9", "DescribeUsers", {})
  .n("ElastiCacheClient", "DescribeUsersCommand")
  .sc(DescribeUsers$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeUsersMessage;
      output: DescribeUsersResult;
    };
    sdk: {
      input: DescribeUsersCommandInput;
      output: DescribeUsersCommandOutput;
    };
  };
}
