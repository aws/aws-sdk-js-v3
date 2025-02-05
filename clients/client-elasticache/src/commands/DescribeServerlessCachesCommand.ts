// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeServerlessCachesRequest, DescribeServerlessCachesResponse } from "../models/models_0";
import { de_DescribeServerlessCachesCommand, se_DescribeServerlessCachesCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeServerlessCachesCommand}.
 */
export interface DescribeServerlessCachesCommandInput extends DescribeServerlessCachesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeServerlessCachesCommand}.
 */
export interface DescribeServerlessCachesCommandOutput extends DescribeServerlessCachesResponse, __MetadataBearer {}

/**
 * <p>Returns information about a specific serverless cache.
 *            If no identifier is specified, then the API returns information on all the serverless caches belonging to
 *            this Amazon Web Services account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, DescribeServerlessCachesCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, DescribeServerlessCachesCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ElastiCacheClient(config);
 * const input = { // DescribeServerlessCachesRequest
 *   ServerlessCacheName: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeServerlessCachesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeServerlessCachesResponse
 * //   NextToken: "STRING_VALUE",
 * //   ServerlessCaches: [ // ServerlessCacheList
 * //     { // ServerlessCache
 * //       ServerlessCacheName: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       CreateTime: new Date("TIMESTAMP"),
 * //       Status: "STRING_VALUE",
 * //       Engine: "STRING_VALUE",
 * //       MajorEngineVersion: "STRING_VALUE",
 * //       FullEngineVersion: "STRING_VALUE",
 * //       CacheUsageLimits: { // CacheUsageLimits
 * //         DataStorage: { // DataStorage
 * //           Maximum: Number("int"),
 * //           Minimum: Number("int"),
 * //           Unit: "GB", // required
 * //         },
 * //         ECPUPerSecond: { // ECPUPerSecond
 * //           Maximum: Number("int"),
 * //           Minimum: Number("int"),
 * //         },
 * //       },
 * //       KmsKeyId: "STRING_VALUE",
 * //       SecurityGroupIds: [ // SecurityGroupIdsList
 * //         "STRING_VALUE",
 * //       ],
 * //       Endpoint: { // Endpoint
 * //         Address: "STRING_VALUE",
 * //         Port: Number("int"),
 * //       },
 * //       ReaderEndpoint: {
 * //         Address: "STRING_VALUE",
 * //         Port: Number("int"),
 * //       },
 * //       ARN: "STRING_VALUE",
 * //       UserGroupId: "STRING_VALUE",
 * //       SubnetIds: [ // SubnetIdsList
 * //         "STRING_VALUE",
 * //       ],
 * //       SnapshotRetentionLimit: Number("int"),
 * //       DailySnapshotTime: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeServerlessCachesCommandInput - {@link DescribeServerlessCachesCommandInput}
 * @returns {@link DescribeServerlessCachesCommandOutput}
 * @see {@link DescribeServerlessCachesCommandInput} for command's `input` shape.
 * @see {@link DescribeServerlessCachesCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for ElastiCacheClient's `config` shape.
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p>Two or more incompatible parameters were specified.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value for a parameter is invalid.</p>
 *
 * @throws {@link ServerlessCacheNotFoundFault} (client fault)
 *  <p>The serverless cache was not found or does not exist.</p>
 *
 * @throws {@link ElastiCacheServiceException}
 * <p>Base exception class for all service exceptions from ElastiCache service.</p>
 *
 * @public
 */
export class DescribeServerlessCachesCommand extends $Command
  .classBuilder<
    DescribeServerlessCachesCommandInput,
    DescribeServerlessCachesCommandOutput,
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
  .s("AmazonElastiCacheV9", "DescribeServerlessCaches", {})
  .n("ElastiCacheClient", "DescribeServerlessCachesCommand")
  .f(void 0, void 0)
  .ser(se_DescribeServerlessCachesCommand)
  .de(de_DescribeServerlessCachesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeServerlessCachesRequest;
      output: DescribeServerlessCachesResponse;
    };
    sdk: {
      input: DescribeServerlessCachesCommandInput;
      output: DescribeServerlessCachesCommandOutput;
    };
  };
}
