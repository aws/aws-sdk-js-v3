// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  DescribeServerlessV2PlatformVersionsMessage,
  ServerlessV2PlatformVersionsMessage,
} from "../models/models_0";
import type { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { DescribeServerlessV2PlatformVersions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeServerlessV2PlatformVersionsCommand}.
 */
export interface DescribeServerlessV2PlatformVersionsCommandInput extends DescribeServerlessV2PlatformVersionsMessage {}
/**
 * @public
 *
 * The output of {@link DescribeServerlessV2PlatformVersionsCommand}.
 */
export interface DescribeServerlessV2PlatformVersionsCommandOutput extends ServerlessV2PlatformVersionsMessage, __MetadataBearer {}

/**
 * <p>Describes the properties of specific platform versions for Aurora Serverless v2.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeServerlessV2PlatformVersionsCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribeServerlessV2PlatformVersionsCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * // import type { RDSClientConfig } from "@aws-sdk/client-rds";
 * const config = {}; // type is RDSClientConfig
 * const client = new RDSClient(config);
 * const input = { // DescribeServerlessV2PlatformVersionsMessage
 *   ServerlessV2PlatformVersion: "STRING_VALUE",
 *   Engine: "STRING_VALUE",
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE", // required
 *       Values: [ // FilterValueList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   DefaultOnly: true || false,
 *   IncludeAll: true || false,
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new DescribeServerlessV2PlatformVersionsCommand(input);
 * const response = await client.send(command);
 * // { // ServerlessV2PlatformVersionsMessage
 * //   Marker: "STRING_VALUE",
 * //   ServerlessV2PlatformVersions: [ // ServerlessV2PlatformVersionList
 * //     { // ServerlessV2PlatformVersionInfo
 * //       ServerlessV2PlatformVersion: "STRING_VALUE",
 * //       ServerlessV2PlatformVersionDescription: "STRING_VALUE",
 * //       Engine: "STRING_VALUE",
 * //       ServerlessV2FeaturesSupport: { // ServerlessV2FeaturesSupport
 * //         MinCapacity: Number("double"),
 * //         MaxCapacity: Number("double"),
 * //       },
 * //       Status: "STRING_VALUE",
 * //       IsDefault: true || false,
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeServerlessV2PlatformVersionsCommandInput - {@link DescribeServerlessV2PlatformVersionsCommandInput}
 * @returns {@link DescribeServerlessV2PlatformVersionsCommandOutput}
 * @see {@link DescribeServerlessV2PlatformVersionsCommandInput} for command's `input` shape.
 * @see {@link DescribeServerlessV2PlatformVersionsCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 *
 * @example To describe the serverless platform versions for the Aurora MySQL DB engine
 * ```javascript
 * // The following example displays details about each of the serverless platform versions for the specified DB engine.
 * const input = {
 *   Engine: "aurora-mysql"
 * };
 * const command = new DescribeServerlessV2PlatformVersionsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ServerlessV2PlatformVersions: [
 *     {
 *       Engine: "aurora-mysql",
 *       IsDefault: true,
 *       ServerlessV2FeaturesSupport: {
 *         MaxCapacity: 256.0,
 *         MinCapacity: 0.0
 *       },
 *       ServerlessV2PlatformVersion: "4",
 *       ServerlessV2PlatformVersionDescription: "Version 4 offering scaling up to 256 ACUs, and performance improvement up to 30% compared to version 3",
 *       Status: "enabled"
 *     },
 *     {
 *       Engine: "aurora-mysql",
 *       IsDefault: false,
 *       ServerlessV2FeaturesSupport: {
 *         MaxCapacity: 256.0,
 *         MinCapacity: 0.0
 *       },
 *       ServerlessV2PlatformVersion: "3",
 *       ServerlessV2PlatformVersionDescription: "Version 3 offering scaling up to 256 ACUs, and performance improvement up to 30% compared to version 2",
 *       Status: "enabled"
 *     },
 *     {
 *       Engine: "aurora-mysql",
 *       IsDefault: false,
 *       ServerlessV2FeaturesSupport: {
 *         MaxCapacity: 256.0,
 *         MinCapacity: 0.0
 *       },
 *       ServerlessV2PlatformVersion: "2",
 *       ServerlessV2PlatformVersionDescription: "Version 2 offering scaling up to 256 ACUs",
 *       Status: "enabled"
 *     },
 *     {
 *       Engine: "aurora-mysql",
 *       IsDefault: false,
 *       ServerlessV2FeaturesSupport: {
 *         MaxCapacity: 128.0,
 *         MinCapacity: 0.0
 *       },
 *       ServerlessV2PlatformVersion: "1",
 *       ServerlessV2PlatformVersionDescription: "Version 1 offering scaling up to 128 ACUs",
 *       Status: "enabled"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeServerlessV2PlatformVersionsCommand extends $Command
  .classBuilder<
    DescribeServerlessV2PlatformVersionsCommandInput,
    DescribeServerlessV2PlatformVersionsCommandOutput,
    RDSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RDSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonRDSv19", "DescribeServerlessV2PlatformVersions", {})
  .n("RDSClient", "DescribeServerlessV2PlatformVersionsCommand")
  .sc(DescribeServerlessV2PlatformVersions$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeServerlessV2PlatformVersionsMessage;
      output: ServerlessV2PlatformVersionsMessage;
    };
    sdk: {
      input: DescribeServerlessV2PlatformVersionsCommandInput;
      output: DescribeServerlessV2PlatformVersionsCommandOutput;
    };
  };
}
