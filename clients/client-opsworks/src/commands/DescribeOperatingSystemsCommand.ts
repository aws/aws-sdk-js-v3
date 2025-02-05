// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeOperatingSystemsResponse } from "../models/models_0";
import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { de_DescribeOperatingSystemsCommand, se_DescribeOperatingSystemsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeOperatingSystemsCommand}.
 */
export interface DescribeOperatingSystemsCommandInput {}
/**
 * @public
 *
 * The output of {@link DescribeOperatingSystemsCommand}.
 */
export interface DescribeOperatingSystemsCommandOutput extends DescribeOperatingSystemsResponse, __MetadataBearer {}

/**
 * <p>Describes the operating systems that are supported by OpsWorks Stacks.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, DescribeOperatingSystemsCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, DescribeOperatingSystemsCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new OpsWorksClient(config);
 * const input = {};
 * const command = new DescribeOperatingSystemsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeOperatingSystemsResponse
 * //   OperatingSystems: [ // OperatingSystems
 * //     { // OperatingSystem
 * //       Name: "STRING_VALUE",
 * //       Id: "STRING_VALUE",
 * //       Type: "STRING_VALUE",
 * //       ConfigurationManagers: [ // OperatingSystemConfigurationManagers
 * //         { // OperatingSystemConfigurationManager
 * //           Name: "STRING_VALUE",
 * //           Version: "STRING_VALUE",
 * //         },
 * //       ],
 * //       ReportedName: "STRING_VALUE",
 * //       ReportedVersion: "STRING_VALUE",
 * //       Supported: true || false,
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeOperatingSystemsCommandInput - {@link DescribeOperatingSystemsCommandInput}
 * @returns {@link DescribeOperatingSystemsCommandOutput}
 * @see {@link DescribeOperatingSystemsCommandInput} for command's `input` shape.
 * @see {@link DescribeOperatingSystemsCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksClientResolvedConfig | config} for OpsWorksClient's `config` shape.
 *
 * @throws {@link OpsWorksServiceException}
 * <p>Base exception class for all service exceptions from OpsWorks service.</p>
 *
 * @public
 */
export class DescribeOperatingSystemsCommand extends $Command
  .classBuilder<
    DescribeOperatingSystemsCommandInput,
    DescribeOperatingSystemsCommandOutput,
    OpsWorksClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OpsWorksClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("OpsWorks_20130218", "DescribeOperatingSystems", {})
  .n("OpsWorksClient", "DescribeOperatingSystemsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeOperatingSystemsCommand)
  .de(de_DescribeOperatingSystemsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: DescribeOperatingSystemsResponse;
    };
    sdk: {
      input: DescribeOperatingSystemsCommandInput;
      output: DescribeOperatingSystemsCommandOutput;
    };
  };
}
