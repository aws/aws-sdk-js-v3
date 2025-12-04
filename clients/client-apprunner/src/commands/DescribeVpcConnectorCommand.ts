// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { AppRunnerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppRunnerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeVpcConnectorRequest, DescribeVpcConnectorResponse } from "../models/models_0";
import { DescribeVpcConnector } from "../schemas/schemas_0";

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
 * // import type { AppRunnerClientConfig } from "@aws-sdk/client-apprunner";
 * const config = {}; // type is AppRunnerClientConfig
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AppRunner", "DescribeVpcConnector", {})
  .n("AppRunnerClient", "DescribeVpcConnectorCommand")
  .sc(DescribeVpcConnector)
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
