// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateServerlessCacheSnapshotRequest, CreateServerlessCacheSnapshotResponse } from "../models/models_0";
import { CreateServerlessCacheSnapshot } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateServerlessCacheSnapshotCommand}.
 */
export interface CreateServerlessCacheSnapshotCommandInput extends CreateServerlessCacheSnapshotRequest {}
/**
 * @public
 *
 * The output of {@link CreateServerlessCacheSnapshotCommand}.
 */
export interface CreateServerlessCacheSnapshotCommandOutput
  extends CreateServerlessCacheSnapshotResponse,
    __MetadataBearer {}

/**
 * <p>This API creates a copy of an entire ServerlessCache at a specific moment in time. Available for Valkey, Redis OSS and Serverless Memcached only.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, CreateServerlessCacheSnapshotCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, CreateServerlessCacheSnapshotCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * // import type { ElastiCacheClientConfig } from "@aws-sdk/client-elasticache";
 * const config = {}; // type is ElastiCacheClientConfig
 * const client = new ElastiCacheClient(config);
 * const input = { // CreateServerlessCacheSnapshotRequest
 *   ServerlessCacheSnapshotName: "STRING_VALUE", // required
 *   ServerlessCacheName: "STRING_VALUE", // required
 *   KmsKeyId: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateServerlessCacheSnapshotCommand(input);
 * const response = await client.send(command);
 * // { // CreateServerlessCacheSnapshotResponse
 * //   ServerlessCacheSnapshot: { // ServerlessCacheSnapshot
 * //     ServerlessCacheSnapshotName: "STRING_VALUE",
 * //     ARN: "STRING_VALUE",
 * //     KmsKeyId: "STRING_VALUE",
 * //     SnapshotType: "STRING_VALUE",
 * //     Status: "STRING_VALUE",
 * //     CreateTime: new Date("TIMESTAMP"),
 * //     ExpiryTime: new Date("TIMESTAMP"),
 * //     BytesUsedForCache: "STRING_VALUE",
 * //     ServerlessCacheConfiguration: { // ServerlessCacheConfiguration
 * //       ServerlessCacheName: "STRING_VALUE",
 * //       Engine: "STRING_VALUE",
 * //       MajorEngineVersion: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateServerlessCacheSnapshotCommandInput - {@link CreateServerlessCacheSnapshotCommandInput}
 * @returns {@link CreateServerlessCacheSnapshotCommandOutput}
 * @see {@link CreateServerlessCacheSnapshotCommandInput} for command's `input` shape.
 * @see {@link CreateServerlessCacheSnapshotCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for ElastiCacheClient's `config` shape.
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
 * @throws {@link ServerlessCacheNotFoundFault} (client fault)
 *  <p>The serverless cache was not found or does not exist.</p>
 *
 * @throws {@link ServerlessCacheSnapshotAlreadyExistsFault} (client fault)
 *  <p>A serverless cache snapshot with this name already exists. Available for Valkey, Redis OSS and Serverless Memcached only.</p>
 *
 * @throws {@link ServerlessCacheSnapshotQuotaExceededFault} (client fault)
 *  <p>The number of serverless cache snapshots exceeds the customer snapshot quota. Available for Valkey, Redis OSS and Serverless Memcached only.</p>
 *
 * @throws {@link ServiceLinkedRoleNotFoundFault} (client fault)
 *  <p>The specified service linked role (SLR) was not found.</p>
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
 * @public
 */
export class CreateServerlessCacheSnapshotCommand extends $Command
  .classBuilder<
    CreateServerlessCacheSnapshotCommandInput,
    CreateServerlessCacheSnapshotCommandOutput,
    ElastiCacheClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElastiCacheClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonElastiCacheV9", "CreateServerlessCacheSnapshot", {})
  .n("ElastiCacheClient", "CreateServerlessCacheSnapshotCommand")
  .sc(CreateServerlessCacheSnapshot)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateServerlessCacheSnapshotRequest;
      output: CreateServerlessCacheSnapshotResponse;
    };
    sdk: {
      input: CreateServerlessCacheSnapshotCommandInput;
      output: CreateServerlessCacheSnapshotCommandOutput;
    };
  };
}
