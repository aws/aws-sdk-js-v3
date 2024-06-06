// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeDevicePolicyConfigurationRequest,
  DescribeDevicePolicyConfigurationResponse,
} from "../models/models_0";
import {
  de_DescribeDevicePolicyConfigurationCommand,
  se_DescribeDevicePolicyConfigurationCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WorkLinkClientResolvedConfig } from "../WorkLinkClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeDevicePolicyConfigurationCommand}.
 */
export interface DescribeDevicePolicyConfigurationCommandInput extends DescribeDevicePolicyConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDevicePolicyConfigurationCommand}.
 */
export interface DescribeDevicePolicyConfigurationCommandOutput
  extends DescribeDevicePolicyConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Describes the device policy configuration for the specified fleet.</p>
 *
 * @deprecated Amazon WorkLink is no longer supported. This will be removed in a future version of the SDK.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkLinkClient, DescribeDevicePolicyConfigurationCommand } from "@aws-sdk/client-worklink"; // ES Modules import
 * // const { WorkLinkClient, DescribeDevicePolicyConfigurationCommand } = require("@aws-sdk/client-worklink"); // CommonJS import
 * const client = new WorkLinkClient(config);
 * const input = { // DescribeDevicePolicyConfigurationRequest
 *   FleetArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeDevicePolicyConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDevicePolicyConfigurationResponse
 * //   DeviceCaCertificate: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeDevicePolicyConfigurationCommandInput - {@link DescribeDevicePolicyConfigurationCommandInput}
 * @returns {@link DescribeDevicePolicyConfigurationCommandOutput}
 * @see {@link DescribeDevicePolicyConfigurationCommandInput} for command's `input` shape.
 * @see {@link DescribeDevicePolicyConfigurationCommandOutput} for command's `response` shape.
 * @see {@link WorkLinkClientResolvedConfig | config} for WorkLinkClient's `config` shape.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>The service is temporarily unavailable.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource was not found.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The number of requests exceeds the limit.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You are not authorized to perform this action.</p>
 *
 * @throws {@link WorkLinkServiceException}
 * <p>Base exception class for all service exceptions from WorkLink service.</p>
 *
 * @public
 */
export class DescribeDevicePolicyConfigurationCommand extends $Command
  .classBuilder<
    DescribeDevicePolicyConfigurationCommandInput,
    DescribeDevicePolicyConfigurationCommandOutput,
    WorkLinkClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: WorkLinkClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("WorkLink", "DescribeDevicePolicyConfiguration", {})
  .n("WorkLinkClient", "DescribeDevicePolicyConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_DescribeDevicePolicyConfigurationCommand)
  .de(de_DescribeDevicePolicyConfigurationCommand)
  .build() {}
