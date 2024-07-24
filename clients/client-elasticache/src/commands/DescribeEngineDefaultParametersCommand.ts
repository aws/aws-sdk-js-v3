// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeEngineDefaultParametersMessage, DescribeEngineDefaultParametersResult } from "../models/models_0";
import {
  de_DescribeEngineDefaultParametersCommand,
  se_DescribeEngineDefaultParametersCommand,
} from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeEngineDefaultParametersCommand}.
 */
export interface DescribeEngineDefaultParametersCommandInput extends DescribeEngineDefaultParametersMessage {}
/**
 * @public
 *
 * The output of {@link DescribeEngineDefaultParametersCommand}.
 */
export interface DescribeEngineDefaultParametersCommandOutput
  extends DescribeEngineDefaultParametersResult,
    __MetadataBearer {}

/**
 * <p>Returns the default engine and system parameter information for the specified cache
 *             engine.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, DescribeEngineDefaultParametersCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, DescribeEngineDefaultParametersCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const input = { // DescribeEngineDefaultParametersMessage
 *   CacheParameterGroupFamily: "STRING_VALUE", // required
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new DescribeEngineDefaultParametersCommand(input);
 * const response = await client.send(command);
 * // { // DescribeEngineDefaultParametersResult
 * //   EngineDefaults: { // EngineDefaults
 * //     CacheParameterGroupFamily: "STRING_VALUE",
 * //     Marker: "STRING_VALUE",
 * //     Parameters: [ // ParametersList
 * //       { // Parameter
 * //         ParameterName: "STRING_VALUE",
 * //         ParameterValue: "STRING_VALUE",
 * //         Description: "STRING_VALUE",
 * //         Source: "STRING_VALUE",
 * //         DataType: "STRING_VALUE",
 * //         AllowedValues: "STRING_VALUE",
 * //         IsModifiable: true || false,
 * //         MinimumEngineVersion: "STRING_VALUE",
 * //         ChangeType: "immediate" || "requires-reboot",
 * //       },
 * //     ],
 * //     CacheNodeTypeSpecificParameters: [ // CacheNodeTypeSpecificParametersList
 * //       { // CacheNodeTypeSpecificParameter
 * //         ParameterName: "STRING_VALUE",
 * //         Description: "STRING_VALUE",
 * //         Source: "STRING_VALUE",
 * //         DataType: "STRING_VALUE",
 * //         AllowedValues: "STRING_VALUE",
 * //         IsModifiable: true || false,
 * //         MinimumEngineVersion: "STRING_VALUE",
 * //         CacheNodeTypeSpecificValues: [ // CacheNodeTypeSpecificValueList
 * //           { // CacheNodeTypeSpecificValue
 * //             CacheNodeType: "STRING_VALUE",
 * //             Value: "STRING_VALUE",
 * //           },
 * //         ],
 * //         ChangeType: "immediate" || "requires-reboot",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeEngineDefaultParametersCommandInput - {@link DescribeEngineDefaultParametersCommandInput}
 * @returns {@link DescribeEngineDefaultParametersCommandOutput}
 * @see {@link DescribeEngineDefaultParametersCommandInput} for command's `input` shape.
 * @see {@link DescribeEngineDefaultParametersCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for ElastiCacheClient's `config` shape.
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
export class DescribeEngineDefaultParametersCommand extends $Command
  .classBuilder<
    DescribeEngineDefaultParametersCommandInput,
    DescribeEngineDefaultParametersCommandOutput,
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
  .s("AmazonElastiCacheV9", "DescribeEngineDefaultParameters", {})
  .n("ElastiCacheClient", "DescribeEngineDefaultParametersCommand")
  .f(void 0, void 0)
  .ser(se_DescribeEngineDefaultParametersCommand)
  .de(de_DescribeEngineDefaultParametersCommand)
  .build() {}
