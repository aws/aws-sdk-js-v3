// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeCompanyNetworkConfigurationRequest,
  DescribeCompanyNetworkConfigurationResponse,
} from "../models/models_0";
import {
  de_DescribeCompanyNetworkConfigurationCommand,
  se_DescribeCompanyNetworkConfigurationCommand,
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
 * The input for {@link DescribeCompanyNetworkConfigurationCommand}.
 */
export interface DescribeCompanyNetworkConfigurationCommandInput extends DescribeCompanyNetworkConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DescribeCompanyNetworkConfigurationCommand}.
 */
export interface DescribeCompanyNetworkConfigurationCommandOutput
  extends DescribeCompanyNetworkConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Describes the networking configuration to access the internal websites associated with
 *             the specified fleet.</p>
 *
 * @deprecated Amazon WorkLink is no longer supported. This will be removed in a future version of the SDK.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkLinkClient, DescribeCompanyNetworkConfigurationCommand } from "@aws-sdk/client-worklink"; // ES Modules import
 * // const { WorkLinkClient, DescribeCompanyNetworkConfigurationCommand } = require("@aws-sdk/client-worklink"); // CommonJS import
 * const client = new WorkLinkClient(config);
 * const input = { // DescribeCompanyNetworkConfigurationRequest
 *   FleetArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeCompanyNetworkConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeCompanyNetworkConfigurationResponse
 * //   VpcId: "STRING_VALUE",
 * //   SubnetIds: [ // SubnetIds
 * //     "STRING_VALUE",
 * //   ],
 * //   SecurityGroupIds: [ // SecurityGroupIds
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeCompanyNetworkConfigurationCommandInput - {@link DescribeCompanyNetworkConfigurationCommandInput}
 * @returns {@link DescribeCompanyNetworkConfigurationCommandOutput}
 * @see {@link DescribeCompanyNetworkConfigurationCommandInput} for command's `input` shape.
 * @see {@link DescribeCompanyNetworkConfigurationCommandOutput} for command's `response` shape.
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
export class DescribeCompanyNetworkConfigurationCommand extends $Command
  .classBuilder<
    DescribeCompanyNetworkConfigurationCommandInput,
    DescribeCompanyNetworkConfigurationCommandOutput,
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
  .s("WorkLink", "DescribeCompanyNetworkConfiguration", {})
  .n("WorkLinkClient", "DescribeCompanyNetworkConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_DescribeCompanyNetworkConfigurationCommand)
  .de(de_DescribeCompanyNetworkConfigurationCommand)
  .build() {}
