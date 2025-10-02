// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeResourceScanInput, DescribeResourceScanOutput } from "../models/models_0";
import { de_DescribeResourceScanCommand, se_DescribeResourceScanCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeResourceScanCommand}.
 */
export interface DescribeResourceScanCommandInput extends DescribeResourceScanInput {}
/**
 * @public
 *
 * The output of {@link DescribeResourceScanCommand}.
 */
export interface DescribeResourceScanCommandOutput extends DescribeResourceScanOutput, __MetadataBearer {}

/**
 * <p>Describes details of a resource scan.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, DescribeResourceScanCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, DescribeResourceScanCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * // import type { CloudFormationClientConfig } from "@aws-sdk/client-cloudformation";
 * const config = {}; // type is CloudFormationClientConfig
 * const client = new CloudFormationClient(config);
 * const input = { // DescribeResourceScanInput
 *   ResourceScanId: "STRING_VALUE", // required
 * };
 * const command = new DescribeResourceScanCommand(input);
 * const response = await client.send(command);
 * // { // DescribeResourceScanOutput
 * //   ResourceScanId: "STRING_VALUE",
 * //   Status: "IN_PROGRESS" || "FAILED" || "COMPLETE" || "EXPIRED",
 * //   StatusReason: "STRING_VALUE",
 * //   StartTime: new Date("TIMESTAMP"),
 * //   EndTime: new Date("TIMESTAMP"),
 * //   PercentageCompleted: Number("double"),
 * //   ResourceTypes: [ // ResourceTypes
 * //     "STRING_VALUE",
 * //   ],
 * //   ResourcesScanned: Number("int"),
 * //   ResourcesRead: Number("int"),
 * //   ScanFilters: [ // ScanFilters
 * //     { // ScanFilter
 * //       Types: [ // ResourceTypeFilters
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeResourceScanCommandInput - {@link DescribeResourceScanCommandInput}
 * @returns {@link DescribeResourceScanCommandOutput}
 * @see {@link DescribeResourceScanCommandInput} for command's `input` shape.
 * @see {@link DescribeResourceScanCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 * @throws {@link ResourceScanNotFoundException} (client fault)
 *  <p>The resource scan was not found.</p>
 *
 * @throws {@link CloudFormationServiceException}
 * <p>Base exception class for all service exceptions from CloudFormation service.</p>
 *
 *
 * @public
 */
export class DescribeResourceScanCommand extends $Command
  .classBuilder<
    DescribeResourceScanCommandInput,
    DescribeResourceScanCommandOutput,
    CloudFormationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFormationClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CloudFormation", "DescribeResourceScan", {})
  .n("CloudFormationClient", "DescribeResourceScanCommand")
  .f(void 0, void 0)
  .ser(se_DescribeResourceScanCommand)
  .de(de_DescribeResourceScanCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeResourceScanInput;
      output: DescribeResourceScanOutput;
    };
    sdk: {
      input: DescribeResourceScanCommandInput;
      output: DescribeResourceScanCommandOutput;
    };
  };
}
