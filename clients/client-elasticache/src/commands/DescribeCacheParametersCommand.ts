// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CacheParameterGroupDetails, DescribeCacheParametersMessage } from "../models/models_0";
import { de_DescribeCacheParametersCommand, se_DescribeCacheParametersCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeCacheParametersCommand}.
 */
export interface DescribeCacheParametersCommandInput extends DescribeCacheParametersMessage {}
/**
 * @public
 *
 * The output of {@link DescribeCacheParametersCommand}.
 */
export interface DescribeCacheParametersCommandOutput extends CacheParameterGroupDetails, __MetadataBearer {}

/**
 * <p>Returns the detailed parameter list for a particular cache parameter group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, DescribeCacheParametersCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, DescribeCacheParametersCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const input = { // DescribeCacheParametersMessage
 *   CacheParameterGroupName: "STRING_VALUE", // required
 *   Source: "STRING_VALUE",
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new DescribeCacheParametersCommand(input);
 * const response = await client.send(command);
 * // { // CacheParameterGroupDetails
 * //   Marker: "STRING_VALUE",
 * //   Parameters: [ // ParametersList
 * //     { // Parameter
 * //       ParameterName: "STRING_VALUE",
 * //       ParameterValue: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       Source: "STRING_VALUE",
 * //       DataType: "STRING_VALUE",
 * //       AllowedValues: "STRING_VALUE",
 * //       IsModifiable: true || false,
 * //       MinimumEngineVersion: "STRING_VALUE",
 * //       ChangeType: "immediate" || "requires-reboot",
 * //     },
 * //   ],
 * //   CacheNodeTypeSpecificParameters: [ // CacheNodeTypeSpecificParametersList
 * //     { // CacheNodeTypeSpecificParameter
 * //       ParameterName: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       Source: "STRING_VALUE",
 * //       DataType: "STRING_VALUE",
 * //       AllowedValues: "STRING_VALUE",
 * //       IsModifiable: true || false,
 * //       MinimumEngineVersion: "STRING_VALUE",
 * //       CacheNodeTypeSpecificValues: [ // CacheNodeTypeSpecificValueList
 * //         { // CacheNodeTypeSpecificValue
 * //           CacheNodeType: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       ChangeType: "immediate" || "requires-reboot",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeCacheParametersCommandInput - {@link DescribeCacheParametersCommandInput}
 * @returns {@link DescribeCacheParametersCommandOutput}
 * @see {@link DescribeCacheParametersCommandInput} for command's `input` shape.
 * @see {@link DescribeCacheParametersCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for ElastiCacheClient's `config` shape.
 *
 * @throws {@link CacheParameterGroupNotFoundFault} (client fault)
 *  <p>The requested cache parameter group name does not refer to an existing cache parameter
 *             group.</p>
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
 * @public
 */
export class DescribeCacheParametersCommand extends $Command
  .classBuilder<
    DescribeCacheParametersCommandInput,
    DescribeCacheParametersCommandOutput,
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
  .s("AmazonElastiCacheV9", "DescribeCacheParameters", {})
  .n("ElastiCacheClient", "DescribeCacheParametersCommand")
  .f(void 0, void 0)
  .ser(se_DescribeCacheParametersCommand)
  .de(de_DescribeCacheParametersCommand)
  .build() {}
