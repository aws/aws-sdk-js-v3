// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteServerlessCacheRequest, DeleteServerlessCacheResponse } from "../models/models_0";
import { de_DeleteServerlessCacheCommand, se_DeleteServerlessCacheCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteServerlessCacheCommand}.
 */
export interface DeleteServerlessCacheCommandInput extends DeleteServerlessCacheRequest {}
/**
 * @public
 *
 * The output of {@link DeleteServerlessCacheCommand}.
 */
export interface DeleteServerlessCacheCommandOutput extends DeleteServerlessCacheResponse, __MetadataBearer {}

/**
 * <p>Deletes a specified existing serverless cache.</p>
 *          <note>
 *             <p>
 *                <code>CreateServerlessCacheSnapshot</code> permission is required to create a final snapshot.
 *            Without this permission, the API call will fail with an <code>Access Denied</code> exception.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, DeleteServerlessCacheCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, DeleteServerlessCacheCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ElastiCacheClient(config);
 * const input = { // DeleteServerlessCacheRequest
 *   ServerlessCacheName: "STRING_VALUE", // required
 *   FinalSnapshotName: "STRING_VALUE",
 * };
 * const command = new DeleteServerlessCacheCommand(input);
 * const response = await client.send(command);
 * // { // DeleteServerlessCacheResponse
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
 * @param DeleteServerlessCacheCommandInput - {@link DeleteServerlessCacheCommandInput}
 * @returns {@link DeleteServerlessCacheCommandOutput}
 * @see {@link DeleteServerlessCacheCommandInput} for command's `input` shape.
 * @see {@link DeleteServerlessCacheCommandOutput} for command's `response` shape.
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
 * @throws {@link ServerlessCacheNotFoundFault} (client fault)
 *  <p>The serverless cache was not found or does not exist.</p>
 *
 * @throws {@link ServerlessCacheSnapshotAlreadyExistsFault} (client fault)
 *  <p>A serverless cache snapshot with this name already exists. Available for Valkey, Redis OSS and Serverless Memcached only.</p>
 *
 * @throws {@link ServiceLinkedRoleNotFoundFault} (client fault)
 *  <p>The specified service linked role (SLR) was not found.</p>
 *
 * @throws {@link ElastiCacheServiceException}
 * <p>Base exception class for all service exceptions from ElastiCache service.</p>
 *
 * @public
 */
export class DeleteServerlessCacheCommand extends $Command
  .classBuilder<
    DeleteServerlessCacheCommandInput,
    DeleteServerlessCacheCommandOutput,
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
  .s("AmazonElastiCacheV9", "DeleteServerlessCache", {})
  .n("ElastiCacheClient", "DeleteServerlessCacheCommand")
  .f(void 0, void 0)
  .ser(se_DeleteServerlessCacheCommand)
  .de(de_DeleteServerlessCacheCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteServerlessCacheRequest;
      output: DeleteServerlessCacheResponse;
    };
    sdk: {
      input: DeleteServerlessCacheCommandInput;
      output: DeleteServerlessCacheCommandOutput;
    };
  };
}
