// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyServerlessCacheRequest, ModifyServerlessCacheResponse } from "../models/models_0";
import { de_ModifyServerlessCacheCommand, se_ModifyServerlessCacheCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifyServerlessCacheCommand}.
 */
export interface ModifyServerlessCacheCommandInput extends ModifyServerlessCacheRequest {}
/**
 * @public
 *
 * The output of {@link ModifyServerlessCacheCommand}.
 */
export interface ModifyServerlessCacheCommandOutput extends ModifyServerlessCacheResponse, __MetadataBearer {}

/**
 * <p>This API modifies the attributes of a serverless cache.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, ModifyServerlessCacheCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, ModifyServerlessCacheCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * // import type { ElastiCacheClientConfig } from "@aws-sdk/client-elasticache";
 * const config = {}; // type is ElastiCacheClientConfig
 * const client = new ElastiCacheClient(config);
 * const input = { // ModifyServerlessCacheRequest
 *   ServerlessCacheName: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   CacheUsageLimits: { // CacheUsageLimits
 *     DataStorage: { // DataStorage
 *       Maximum: Number("int"),
 *       Minimum: Number("int"),
 *       Unit: "GB", // required
 *     },
 *     ECPUPerSecond: { // ECPUPerSecond
 *       Maximum: Number("int"),
 *       Minimum: Number("int"),
 *     },
 *   },
 *   RemoveUserGroup: true || false,
 *   UserGroupId: "STRING_VALUE",
 *   SecurityGroupIds: [ // SecurityGroupIdsList
 *     "STRING_VALUE",
 *   ],
 *   SnapshotRetentionLimit: Number("int"),
 *   DailySnapshotTime: "STRING_VALUE",
 *   Engine: "STRING_VALUE",
 *   MajorEngineVersion: "STRING_VALUE",
 * };
 * const command = new ModifyServerlessCacheCommand(input);
 * const response = await client.send(command);
 * // { // ModifyServerlessCacheResponse
 * //   ServerlessCache: { // ServerlessCache
 * //     ServerlessCacheName: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     CreateTime: new Date("TIMESTAMP"),
 * //     Status: "STRING_VALUE",
 * //     Engine: "STRING_VALUE",
 * //     MajorEngineVersion: "STRING_VALUE",
 * //     FullEngineVersion: "STRING_VALUE",
 * //     CacheUsageLimits: { // CacheUsageLimits
 * //       DataStorage: { // DataStorage
 * //         Maximum: Number("int"),
 * //         Minimum: Number("int"),
 * //         Unit: "GB", // required
 * //       },
 * //       ECPUPerSecond: { // ECPUPerSecond
 * //         Maximum: Number("int"),
 * //         Minimum: Number("int"),
 * //       },
 * //     },
 * //     KmsKeyId: "STRING_VALUE",
 * //     SecurityGroupIds: [ // SecurityGroupIdsList
 * //       "STRING_VALUE",
 * //     ],
 * //     Endpoint: { // Endpoint
 * //       Address: "STRING_VALUE",
 * //       Port: Number("int"),
 * //     },
 * //     ReaderEndpoint: {
 * //       Address: "STRING_VALUE",
 * //       Port: Number("int"),
 * //     },
 * //     ARN: "STRING_VALUE",
 * //     UserGroupId: "STRING_VALUE",
 * //     SubnetIds: [ // SubnetIdsList
 * //       "STRING_VALUE",
 * //     ],
 * //     SnapshotRetentionLimit: Number("int"),
 * //     DailySnapshotTime: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param ModifyServerlessCacheCommandInput - {@link ModifyServerlessCacheCommandInput}
 * @returns {@link ModifyServerlessCacheCommandOutput}
 * @see {@link ModifyServerlessCacheCommandInput} for command's `input` shape.
 * @see {@link ModifyServerlessCacheCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for ElastiCacheClient's `config` shape.
 *
 * @throws {@link InvalidCredentialsException} (client fault)
 *  <p>You must enter valid credentials.</p>
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p>Two or more incompatible parameters were specified.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value for a parameter is invalid.</p>
 *
 * @throws {@link InvalidServerlessCacheStateFault} (client fault)
 *  <p>The account for these credentials is not currently active.</p>
 *
 * @throws {@link InvalidUserGroupStateFault} (client fault)
 *  <p>The user group is not in an active state.</p>
 *
 * @throws {@link ServerlessCacheNotFoundFault} (client fault)
 *  <p>The serverless cache was not found or does not exist.</p>
 *
 * @throws {@link ServiceLinkedRoleNotFoundFault} (client fault)
 *  <p>The specified service linked role (SLR) was not found.</p>
 *
 * @throws {@link UserGroupNotFoundFault} (client fault)
 *  <p>The user group was not found or does not exist</p>
 *
 * @throws {@link ElastiCacheServiceException}
 * <p>Base exception class for all service exceptions from ElastiCache service.</p>
 *
 *
 * @public
 */
export class ModifyServerlessCacheCommand extends $Command
  .classBuilder<
    ModifyServerlessCacheCommandInput,
    ModifyServerlessCacheCommandOutput,
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
  .s("AmazonElastiCacheV9", "ModifyServerlessCache", {})
  .n("ElastiCacheClient", "ModifyServerlessCacheCommand")
  .f(void 0, void 0)
  .ser(se_ModifyServerlessCacheCommand)
  .de(de_ModifyServerlessCacheCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyServerlessCacheRequest;
      output: ModifyServerlessCacheResponse;
    };
    sdk: {
      input: ModifyServerlessCacheCommandInput;
      output: ModifyServerlessCacheCommandOutput;
    };
  };
}
