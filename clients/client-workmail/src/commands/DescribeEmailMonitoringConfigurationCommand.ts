// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeEmailMonitoringConfigurationRequest,
  DescribeEmailMonitoringConfigurationResponse,
} from "../models/models_0";
import {
  de_DescribeEmailMonitoringConfigurationCommand,
  se_DescribeEmailMonitoringConfigurationCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeEmailMonitoringConfigurationCommand}.
 */
export interface DescribeEmailMonitoringConfigurationCommandInput extends DescribeEmailMonitoringConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DescribeEmailMonitoringConfigurationCommand}.
 */
export interface DescribeEmailMonitoringConfigurationCommandOutput
  extends DescribeEmailMonitoringConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Describes the current email monitoring configuration for a specified organization.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, DescribeEmailMonitoringConfigurationCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, DescribeEmailMonitoringConfigurationCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * // import type { WorkMailClientConfig } from "@aws-sdk/client-workmail";
 * const config = {}; // type is WorkMailClientConfig
 * const client = new WorkMailClient(config);
 * const input = { // DescribeEmailMonitoringConfigurationRequest
 *   OrganizationId: "STRING_VALUE", // required
 * };
 * const command = new DescribeEmailMonitoringConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeEmailMonitoringConfigurationResponse
 * //   RoleArn: "STRING_VALUE",
 * //   LogGroupArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeEmailMonitoringConfigurationCommandInput - {@link DescribeEmailMonitoringConfigurationCommandInput}
 * @returns {@link DescribeEmailMonitoringConfigurationCommandOutput}
 * @see {@link DescribeEmailMonitoringConfigurationCommandInput} for command's `input` shape.
 * @see {@link DescribeEmailMonitoringConfigurationCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for WorkMailClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link OrganizationNotFoundException} (client fault)
 *  <p>An operation received a valid organization identifier that either doesn't belong or
 *          exist in the system.</p>
 *
 * @throws {@link OrganizationStateException} (client fault)
 *  <p>The organization must have a valid state to perform certain
 *          operations on the organization or its members.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource cannot be found.</p>
 *
 * @throws {@link WorkMailServiceException}
 * <p>Base exception class for all service exceptions from WorkMail service.</p>
 *
 *
 * @public
 */
export class DescribeEmailMonitoringConfigurationCommand extends $Command
  .classBuilder<
    DescribeEmailMonitoringConfigurationCommandInput,
    DescribeEmailMonitoringConfigurationCommandOutput,
    WorkMailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkMailClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("WorkMailService", "DescribeEmailMonitoringConfiguration", {})
  .n("WorkMailClient", "DescribeEmailMonitoringConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_DescribeEmailMonitoringConfigurationCommand)
  .de(de_DescribeEmailMonitoringConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeEmailMonitoringConfigurationRequest;
      output: DescribeEmailMonitoringConfigurationResponse;
    };
    sdk: {
      input: DescribeEmailMonitoringConfigurationCommandInput;
      output: DescribeEmailMonitoringConfigurationCommandOutput;
    };
  };
}
