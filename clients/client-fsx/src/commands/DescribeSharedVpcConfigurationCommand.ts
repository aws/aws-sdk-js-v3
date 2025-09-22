// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FSxClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FSxClient";
import { DescribeSharedVpcConfigurationRequest, DescribeSharedVpcConfigurationResponse } from "../models/models_0";
import { DescribeSharedVpcConfiguration } from "../schemas/schemas_6_SharedVpcConfiguration";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeSharedVpcConfigurationCommand}.
 */
export interface DescribeSharedVpcConfigurationCommandInput extends DescribeSharedVpcConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DescribeSharedVpcConfigurationCommand}.
 */
export interface DescribeSharedVpcConfigurationCommandOutput
  extends DescribeSharedVpcConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Indicates whether participant accounts in your organization can create Amazon FSx for NetApp ONTAP Multi-AZ file systems in subnets that are shared by a virtual
 *             private cloud (VPC) owner. For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/creating-file-systems.html#fsxn-vpc-shared-subnets">Creating FSx for ONTAP file systems in shared subnets</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FSxClient, DescribeSharedVpcConfigurationCommand } from "@aws-sdk/client-fsx"; // ES Modules import
 * // const { FSxClient, DescribeSharedVpcConfigurationCommand } = require("@aws-sdk/client-fsx"); // CommonJS import
 * // import type { FSxClientConfig } from "@aws-sdk/client-fsx";
 * const config = {}; // type is FSxClientConfig
 * const client = new FSxClient(config);
 * const input = {};
 * const command = new DescribeSharedVpcConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeSharedVpcConfigurationResponse
 * //   EnableFsxRouteTableUpdatesFromParticipantAccounts: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeSharedVpcConfigurationCommandInput - {@link DescribeSharedVpcConfigurationCommandInput}
 * @returns {@link DescribeSharedVpcConfigurationCommandOutput}
 * @see {@link DescribeSharedVpcConfigurationCommandInput} for command's `input` shape.
 * @see {@link DescribeSharedVpcConfigurationCommandOutput} for command's `response` shape.
 * @see {@link FSxClientResolvedConfig | config} for FSxClient's `config` shape.
 *
 * @throws {@link BadRequest} (client fault)
 *  <p>A generic error indicating a failure with a client request.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>A generic error indicating a server-side failure.</p>
 *
 * @throws {@link FSxServiceException}
 * <p>Base exception class for all service exceptions from FSx service.</p>
 *
 *
 * @public
 */
export class DescribeSharedVpcConfigurationCommand extends $Command
  .classBuilder<
    DescribeSharedVpcConfigurationCommandInput,
    DescribeSharedVpcConfigurationCommandOutput,
    FSxClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FSxClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSSimbaAPIService_v20180301", "DescribeSharedVpcConfiguration", {})
  .n("FSxClient", "DescribeSharedVpcConfigurationCommand")
  .sc(DescribeSharedVpcConfiguration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: DescribeSharedVpcConfigurationResponse;
    };
    sdk: {
      input: DescribeSharedVpcConfigurationCommandInput;
      output: DescribeSharedVpcConfigurationCommandOutput;
    };
  };
}
