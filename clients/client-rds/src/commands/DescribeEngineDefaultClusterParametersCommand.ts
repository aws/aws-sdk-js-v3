// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeEngineDefaultClusterParametersMessage,
  DescribeEngineDefaultClusterParametersResult,
} from "../models/models_1";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { DescribeEngineDefaultClusterParameters } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeEngineDefaultClusterParametersCommand}.
 */
export interface DescribeEngineDefaultClusterParametersCommandInput
  extends DescribeEngineDefaultClusterParametersMessage {}
/**
 * @public
 *
 * The output of {@link DescribeEngineDefaultClusterParametersCommand}.
 */
export interface DescribeEngineDefaultClusterParametersCommandOutput
  extends DescribeEngineDefaultClusterParametersResult,
    __MetadataBearer {}

/**
 * <p>Returns the default engine and system parameter information for the cluster database engine.</p>
 *          <p>For more information on Amazon Aurora, see
 *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html">
 *               What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeEngineDefaultClusterParametersCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribeEngineDefaultClusterParametersCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * // import type { RDSClientConfig } from "@aws-sdk/client-rds";
 * const config = {}; // type is RDSClientConfig
 * const client = new RDSClient(config);
 * const input = { // DescribeEngineDefaultClusterParametersMessage
 *   DBParameterGroupFamily: "STRING_VALUE", // required
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
 * const command = new DescribeEngineDefaultClusterParametersCommand(input);
 * const response = await client.send(command);
 * // { // DescribeEngineDefaultClusterParametersResult
 * //   EngineDefaults: { // EngineDefaults
 * //     DBParameterGroupFamily: "STRING_VALUE",
 * //     Marker: "STRING_VALUE",
 * //     Parameters: [ // ParametersList
 * //       { // Parameter
 * //         ParameterName: "STRING_VALUE",
 * //         ParameterValue: "STRING_VALUE",
 * //         Description: "STRING_VALUE",
 * //         Source: "STRING_VALUE",
 * //         ApplyType: "STRING_VALUE",
 * //         DataType: "STRING_VALUE",
 * //         AllowedValues: "STRING_VALUE",
 * //         IsModifiable: true || false,
 * //         MinimumEngineVersion: "STRING_VALUE",
 * //         ApplyMethod: "immediate" || "pending-reboot",
 * //         SupportedEngineModes: [ // EngineModeList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeEngineDefaultClusterParametersCommandInput - {@link DescribeEngineDefaultClusterParametersCommandInput}
 * @returns {@link DescribeEngineDefaultClusterParametersCommandOutput}
 * @see {@link DescribeEngineDefaultClusterParametersCommandInput} for command's `input` shape.
 * @see {@link DescribeEngineDefaultClusterParametersCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 *
 * @example To describe the default engine and system parameter information for the Aurora database engine
 * ```javascript
 * // The following example retrieves the details of the default engine and system parameter information for Aurora DB clusters with MySQL 5.7 compatibility.
 * const input = {
 *   DBParameterGroupFamily: "aurora-mysql5.7"
 * };
 * const command = new DescribeEngineDefaultClusterParametersCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   EngineDefaults: {
 *     Parameters: [
 *       {
 *         ApplyType: "dynamic",
 *         DataType: "string",
 *         Description: "IAM role ARN used to load data from AWS S3",
 *         IsModifiable: true,
 *         ParameterName: "aurora_load_from_s3_role",
 *         Source: "engine-default",
 *         SupportedEngineModes: [
 *           "provisioned"
 *         ]
 *       }
 *     ]
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeEngineDefaultClusterParametersCommand extends $Command
  .classBuilder<
    DescribeEngineDefaultClusterParametersCommandInput,
    DescribeEngineDefaultClusterParametersCommandOutput,
    RDSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RDSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonRDSv19", "DescribeEngineDefaultClusterParameters", {})
  .n("RDSClient", "DescribeEngineDefaultClusterParametersCommand")
  .sc(DescribeEngineDefaultClusterParameters)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeEngineDefaultClusterParametersMessage;
      output: DescribeEngineDefaultClusterParametersResult;
    };
    sdk: {
      input: DescribeEngineDefaultClusterParametersCommandInput;
      output: DescribeEngineDefaultClusterParametersCommandOutput;
    };
  };
}
