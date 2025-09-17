// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeMacHostsRequest, DescribeMacHostsResult } from "../models/models_5";
import { de_DescribeMacHostsCommand, se_DescribeMacHostsCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeMacHostsCommand}.
 */
export interface DescribeMacHostsCommandInput extends DescribeMacHostsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeMacHostsCommand}.
 */
export interface DescribeMacHostsCommandOutput extends DescribeMacHostsResult, __MetadataBearer {}

/**
 * <p>Describes the specified EC2 Mac Dedicated Host or all of your EC2 Mac Dedicated Hosts.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeMacHostsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeMacHostsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DescribeMacHostsRequest
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   HostIds: [ // RequestHostIdList
 *     "STRING_VALUE",
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeMacHostsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeMacHostsResult
 * //   MacHosts: [ // MacHostList
 * //     { // MacHost
 * //       HostId: "STRING_VALUE",
 * //       MacOSLatestSupportedVersions: [ // MacOSVersionStringList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeMacHostsCommandInput - {@link DescribeMacHostsCommandInput}
 * @returns {@link DescribeMacHostsCommandOutput}
 * @see {@link DescribeMacHostsCommandInput} for command's `input` shape.
 * @see {@link DescribeMacHostsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DescribeMacHostsCommand extends $Command
  .classBuilder<
    DescribeMacHostsCommandInput,
    DescribeMacHostsCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonEC2", "DescribeMacHosts", {})
  .n("EC2Client", "DescribeMacHostsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeMacHostsCommand)
  .de(de_DescribeMacHostsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeMacHostsRequest;
      output: DescribeMacHostsResult;
    };
    sdk: {
      input: DescribeMacHostsCommandInput;
      output: DescribeMacHostsCommandOutput;
    };
  };
}
