// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeInstanceTypeLimitsRequest, DescribeInstanceTypeLimitsResponse } from "../models/models_0";
import { OpenSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpenSearchClient";
import { de_DescribeInstanceTypeLimitsCommand, se_DescribeInstanceTypeLimitsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeInstanceTypeLimitsCommand}.
 */
export interface DescribeInstanceTypeLimitsCommandInput extends DescribeInstanceTypeLimitsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeInstanceTypeLimitsCommand}.
 */
export interface DescribeInstanceTypeLimitsCommandOutput extends DescribeInstanceTypeLimitsResponse, __MetadataBearer {}

/**
 * <p>Describes the instance count, storage, and master node limits for a given OpenSearch or
 *    Elasticsearch version and instance type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchClient, DescribeInstanceTypeLimitsCommand } from "@aws-sdk/client-opensearch"; // ES Modules import
 * // const { OpenSearchClient, DescribeInstanceTypeLimitsCommand } = require("@aws-sdk/client-opensearch"); // CommonJS import
 * const client = new OpenSearchClient(config);
 * const input = { // DescribeInstanceTypeLimitsRequest
 *   DomainName: "STRING_VALUE",
 *   InstanceType: "m3.medium.search" || "m3.large.search" || "m3.xlarge.search" || "m3.2xlarge.search" || "m4.large.search" || "m4.xlarge.search" || "m4.2xlarge.search" || "m4.4xlarge.search" || "m4.10xlarge.search" || "m5.large.search" || "m5.xlarge.search" || "m5.2xlarge.search" || "m5.4xlarge.search" || "m5.12xlarge.search" || "m5.24xlarge.search" || "r5.large.search" || "r5.xlarge.search" || "r5.2xlarge.search" || "r5.4xlarge.search" || "r5.12xlarge.search" || "r5.24xlarge.search" || "c5.large.search" || "c5.xlarge.search" || "c5.2xlarge.search" || "c5.4xlarge.search" || "c5.9xlarge.search" || "c5.18xlarge.search" || "t3.nano.search" || "t3.micro.search" || "t3.small.search" || "t3.medium.search" || "t3.large.search" || "t3.xlarge.search" || "t3.2xlarge.search" || "or1.medium.search" || "or1.large.search" || "or1.xlarge.search" || "or1.2xlarge.search" || "or1.4xlarge.search" || "or1.8xlarge.search" || "or1.12xlarge.search" || "or1.16xlarge.search" || "ultrawarm1.medium.search" || "ultrawarm1.large.search" || "ultrawarm1.xlarge.search" || "t2.micro.search" || "t2.small.search" || "t2.medium.search" || "r3.large.search" || "r3.xlarge.search" || "r3.2xlarge.search" || "r3.4xlarge.search" || "r3.8xlarge.search" || "i2.xlarge.search" || "i2.2xlarge.search" || "d2.xlarge.search" || "d2.2xlarge.search" || "d2.4xlarge.search" || "d2.8xlarge.search" || "c4.large.search" || "c4.xlarge.search" || "c4.2xlarge.search" || "c4.4xlarge.search" || "c4.8xlarge.search" || "r4.large.search" || "r4.xlarge.search" || "r4.2xlarge.search" || "r4.4xlarge.search" || "r4.8xlarge.search" || "r4.16xlarge.search" || "i3.large.search" || "i3.xlarge.search" || "i3.2xlarge.search" || "i3.4xlarge.search" || "i3.8xlarge.search" || "i3.16xlarge.search" || "r6g.large.search" || "r6g.xlarge.search" || "r6g.2xlarge.search" || "r6g.4xlarge.search" || "r6g.8xlarge.search" || "r6g.12xlarge.search" || "m6g.large.search" || "m6g.xlarge.search" || "m6g.2xlarge.search" || "m6g.4xlarge.search" || "m6g.8xlarge.search" || "m6g.12xlarge.search" || "c6g.large.search" || "c6g.xlarge.search" || "c6g.2xlarge.search" || "c6g.4xlarge.search" || "c6g.8xlarge.search" || "c6g.12xlarge.search" || "r6gd.large.search" || "r6gd.xlarge.search" || "r6gd.2xlarge.search" || "r6gd.4xlarge.search" || "r6gd.8xlarge.search" || "r6gd.12xlarge.search" || "r6gd.16xlarge.search" || "t4g.small.search" || "t4g.medium.search", // required
 *   EngineVersion: "STRING_VALUE", // required
 * };
 * const command = new DescribeInstanceTypeLimitsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeInstanceTypeLimitsResponse
 * //   LimitsByRole: { // LimitsByRole
 * //     "<keys>": { // Limits
 * //       StorageTypes: [ // StorageTypeList
 * //         { // StorageType
 * //           StorageTypeName: "STRING_VALUE",
 * //           StorageSubTypeName: "STRING_VALUE",
 * //           StorageTypeLimits: [ // StorageTypeLimitList
 * //             { // StorageTypeLimit
 * //               LimitName: "STRING_VALUE",
 * //               LimitValues: [ // LimitValueList
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //       InstanceLimits: { // InstanceLimits
 * //         InstanceCountLimits: { // InstanceCountLimits
 * //           MinimumInstanceCount: Number("int"),
 * //           MaximumInstanceCount: Number("int"),
 * //         },
 * //       },
 * //       AdditionalLimits: [ // AdditionalLimitList
 * //         { // AdditionalLimit
 * //           LimitName: "STRING_VALUE",
 * //           LimitValues: [
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       ],
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeInstanceTypeLimitsCommandInput - {@link DescribeInstanceTypeLimitsCommandInput}
 * @returns {@link DescribeInstanceTypeLimitsCommandOutput}
 * @see {@link DescribeInstanceTypeLimitsCommandInput} for command's `input` shape.
 * @see {@link DescribeInstanceTypeLimitsCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchClientResolvedConfig | config} for OpenSearchClient's `config` shape.
 *
 * @throws {@link BaseException} (client fault)
 *  <p>An error occurred while processing the request.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Request processing failed because of an unknown error, exception, or internal failure.</p>
 *
 * @throws {@link InvalidTypeException} (client fault)
 *  <p>An exception for trying to create or access a sub-resource that's either invalid or not supported.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>An exception for trying to create more than the allowed number of resources or sub-resources.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An exception for accessing or deleting a resource that doesn't exist.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An exception for accessing or deleting a resource that doesn't exist.</p>
 *
 * @throws {@link OpenSearchServiceException}
 * <p>Base exception class for all service exceptions from OpenSearch service.</p>
 *
 * @public
 */
export class DescribeInstanceTypeLimitsCommand extends $Command
  .classBuilder<
    DescribeInstanceTypeLimitsCommandInput,
    DescribeInstanceTypeLimitsCommandOutput,
    OpenSearchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: OpenSearchClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonOpenSearchService", "DescribeInstanceTypeLimits", {})
  .n("OpenSearchClient", "DescribeInstanceTypeLimitsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeInstanceTypeLimitsCommand)
  .de(de_DescribeInstanceTypeLimitsCommand)
  .build() {}
