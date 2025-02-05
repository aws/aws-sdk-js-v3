// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppRunnerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppRunnerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeVpcConnectorRequest, DescribeVpcConnectorResponse } from "../models/models_0";
import { de_DescribeVpcConnectorCommand, se_DescribeVpcConnectorCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeVpcConnectorCommand}.
 */
export interface DescribeVpcConnectorCommandInput extends DescribeVpcConnectorRequest {}
/**
 * @public
 *
 * The output of {@link DescribeVpcConnectorCommand}.
 */
export interface DescribeVpcConnectorCommandOutput extends DescribeVpcConnectorResponse, __MetadataBearer {}

/**
 * <p>Return a description of an App Runner VPC connector resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppRunnerClient, DescribeVpcConnectorCommand } from "@aws-sdk/client-apprunner"; // ES Modules import
 * // const { AppRunnerClient, DescribeVpcConnectorCommand } = require("@aws-sdk/client-apprunner"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new AppRunnerClient(config);
 * const input = { // DescribeVpcConnectorRequest
 *   VpcConnectorArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeVpcConnectorCommand(input);
 * const response = await client.send(command);
 * // { // DescribeVpcConnectorResponse
 * //   VpcConnector: { // VpcConnector
 * //     VpcConnectorName: "STRING_VALUE",
 * //     VpcConnectorArn: "STRING_VALUE",
 * //     VpcConnectorRevision: Number("int"),
 * //     Subnets: [ // StringList
 * //       "STRING_VALUE",
 * //     ],
 * //     SecurityGroups: [
 * //       "STRING_VALUE",
 * //     ],
 * //     Status: "ACTIVE" || "INACTIVE",
 * //     CreatedAt: new Date("TIMESTAMP"),
 * //     DeletedAt: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeVpcConnectorCommandInput - {@link DescribeVpcConnectorCommandInput}
 * @returns {@link DescribeVpcConnectorCommandOutput}
 * @see {@link DescribeVpcConnectorCommandInput} for command's `input` shape.
 * @see {@link DescribeVpcConnectorCommandOutput} for command's `response` shape.
 * @see {@link AppRunnerClientResolvedConfig | config} for AppRunnerClient's `config` shape.
 *
 * @throws {@link InternalServiceErrorException} (server fault)
 *  <p>An unexpected service exception occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>One or more input parameters aren't valid. Refer to the API action's document page, correct the input parameters, and try the action again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A resource doesn't exist for the specified Amazon Resource Name (ARN) in your Amazon Web Services account.</p>
 *
 * @throws {@link AppRunnerServiceException}
 * <p>Base exception class for all service exceptions from AppRunner service.</p>
 *
 * @public
 */
export class DescribeVpcConnectorCommand extends $Command
  .classBuilder<
    DescribeVpcConnectorCommandInput,
    DescribeVpcConnectorCommandOutput,
    AppRunnerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppRunnerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AppRunner", "DescribeVpcConnector", {})
  .n("AppRunnerClient", "DescribeVpcConnectorCommand")
  .f(void 0, void 0)
  .ser(se_DescribeVpcConnectorCommand)
  .de(de_DescribeVpcConnectorCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeVpcConnectorRequest;
      output: DescribeVpcConnectorResponse;
    };
    sdk: {
      input: DescribeVpcConnectorCommandInput;
      output: DescribeVpcConnectorCommandOutput;
    };
  };
}
