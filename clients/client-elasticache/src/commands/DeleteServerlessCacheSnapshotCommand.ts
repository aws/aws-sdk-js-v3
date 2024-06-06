// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteServerlessCacheSnapshotRequest, DeleteServerlessCacheSnapshotResponse } from "../models/models_0";
import {
  de_DeleteServerlessCacheSnapshotCommand,
  se_DeleteServerlessCacheSnapshotCommand,
} from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteServerlessCacheSnapshotCommand}.
 */
export interface DeleteServerlessCacheSnapshotCommandInput extends DeleteServerlessCacheSnapshotRequest {}
/**
 * @public
 *
 * The output of {@link DeleteServerlessCacheSnapshotCommand}.
 */
export interface DeleteServerlessCacheSnapshotCommandOutput
  extends DeleteServerlessCacheSnapshotResponse,
    __MetadataBearer {}

/**
 * <p>Deletes an existing serverless cache snapshot. Available for Redis only.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, DeleteServerlessCacheSnapshotCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, DeleteServerlessCacheSnapshotCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const input = { // DeleteServerlessCacheSnapshotRequest
 *   ServerlessCacheSnapshotName: "STRING_VALUE", // required
 * };
 * const command = new DeleteServerlessCacheSnapshotCommand(input);
 * const response = await client.send(command);
 * // { // DeleteServerlessCacheSnapshotResponse
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
 * @param DeleteServerlessCacheSnapshotCommandInput - {@link DeleteServerlessCacheSnapshotCommandInput}
 * @returns {@link DeleteServerlessCacheSnapshotCommandOutput}
 * @see {@link DeleteServerlessCacheSnapshotCommandInput} for command's `input` shape.
 * @see {@link DeleteServerlessCacheSnapshotCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for ElastiCacheClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value for a parameter is invalid.</p>
 *
 * @throws {@link InvalidServerlessCacheSnapshotStateFault} (client fault)
 *  <p>The state of the serverless cache snapshot was not received. Available for Redis only.</p>
 *
 * @throws {@link ServerlessCacheSnapshotNotFoundFault} (client fault)
 *  <p>This serverless cache snapshot could not be found or does not exist. Available for Redis only.</p>
 *
 * @throws {@link ServiceLinkedRoleNotFoundFault} (client fault)
 *  <p>The specified service linked role (SLR) was not found.</p>
 *
 * @throws {@link ElastiCacheServiceException}
 * <p>Base exception class for all service exceptions from ElastiCache service.</p>
 *
 * @public
 */
export class DeleteServerlessCacheSnapshotCommand extends $Command
  .classBuilder<
    DeleteServerlessCacheSnapshotCommandInput,
    DeleteServerlessCacheSnapshotCommandOutput,
    ElastiCacheClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ElastiCacheClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonElastiCacheV9", "DeleteServerlessCacheSnapshot", {})
  .n("ElastiCacheClient", "DeleteServerlessCacheSnapshotCommand")
  .f(void 0, void 0)
  .ser(se_DeleteServerlessCacheSnapshotCommand)
  .de(de_DeleteServerlessCacheSnapshotCommand)
  .build() {}
