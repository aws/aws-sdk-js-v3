// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ExportServerlessCacheSnapshotRequest, ExportServerlessCacheSnapshotResponse } from "../models/models_0";
import {
  de_ExportServerlessCacheSnapshotCommand,
  se_ExportServerlessCacheSnapshotCommand,
} from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ExportServerlessCacheSnapshotCommand}.
 */
export interface ExportServerlessCacheSnapshotCommandInput extends ExportServerlessCacheSnapshotRequest {}
/**
 * @public
 *
 * The output of {@link ExportServerlessCacheSnapshotCommand}.
 */
export interface ExportServerlessCacheSnapshotCommandOutput
  extends ExportServerlessCacheSnapshotResponse,
    __MetadataBearer {}

/**
 * <p>Provides the functionality to export the serverless cache snapshot data to Amazon S3. Available for Valkey and Redis OSS only.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, ExportServerlessCacheSnapshotCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, ExportServerlessCacheSnapshotCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * // import type { ElastiCacheClientConfig } from "@aws-sdk/client-elasticache";
 * const config = {}; // type is ElastiCacheClientConfig
 * const client = new ElastiCacheClient(config);
 * const input = { // ExportServerlessCacheSnapshotRequest
 *   ServerlessCacheSnapshotName: "STRING_VALUE", // required
 *   S3BucketName: "STRING_VALUE", // required
 * };
 * const command = new ExportServerlessCacheSnapshotCommand(input);
 * const response = await client.send(command);
 * // { // ExportServerlessCacheSnapshotResponse
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
 * @param ExportServerlessCacheSnapshotCommandInput - {@link ExportServerlessCacheSnapshotCommandInput}
 * @returns {@link ExportServerlessCacheSnapshotCommandOutput}
 * @see {@link ExportServerlessCacheSnapshotCommandInput} for command's `input` shape.
 * @see {@link ExportServerlessCacheSnapshotCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for ElastiCacheClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value for a parameter is invalid.</p>
 *
 * @throws {@link InvalidServerlessCacheSnapshotStateFault} (client fault)
 *  <p>The state of the serverless cache snapshot was not received. Available for Valkey, Redis OSS and Serverless Memcached only.</p>
 *
 * @throws {@link ServerlessCacheSnapshotNotFoundFault} (client fault)
 *  <p>This serverless cache snapshot could not be found or does not exist. Available for Valkey, Redis OSS and Serverless Memcached only.</p>
 *
 * @throws {@link ServiceLinkedRoleNotFoundFault} (client fault)
 *  <p>The specified service linked role (SLR) was not found.</p>
 *
 * @throws {@link ElastiCacheServiceException}
 * <p>Base exception class for all service exceptions from ElastiCache service.</p>
 *
 *
 * @public
 */
export class ExportServerlessCacheSnapshotCommand extends $Command
  .classBuilder<
    ExportServerlessCacheSnapshotCommandInput,
    ExportServerlessCacheSnapshotCommandOutput,
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
  .s("AmazonElastiCacheV9", "ExportServerlessCacheSnapshot", {})
  .n("ElastiCacheClient", "ExportServerlessCacheSnapshotCommand")
  .f(void 0, void 0)
  .ser(se_ExportServerlessCacheSnapshotCommand)
  .de(de_ExportServerlessCacheSnapshotCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ExportServerlessCacheSnapshotRequest;
      output: ExportServerlessCacheSnapshotResponse;
    };
    sdk: {
      input: ExportServerlessCacheSnapshotCommandInput;
      output: ExportServerlessCacheSnapshotCommandOutput;
    };
  };
}
