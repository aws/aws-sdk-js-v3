// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListVPCEConfigurationsRequest, ListVPCEConfigurationsResult } from "../models/models_0";
import { de_ListVPCEConfigurationsCommand, se_ListVPCEConfigurationsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListVPCEConfigurationsCommand}.
 */
export interface ListVPCEConfigurationsCommandInput extends ListVPCEConfigurationsRequest {}
/**
 * @public
 *
 * The output of {@link ListVPCEConfigurationsCommand}.
 */
export interface ListVPCEConfigurationsCommandOutput extends ListVPCEConfigurationsResult, __MetadataBearer {}

/**
 * <p>Returns information about all Amazon Virtual Private Cloud (VPC) endpoint
 *             configurations in the AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, ListVPCEConfigurationsCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, ListVPCEConfigurationsCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * // import type { DeviceFarmClientConfig } from "@aws-sdk/client-device-farm";
 * const config = {}; // type is DeviceFarmClientConfig
 * const client = new DeviceFarmClient(config);
 * const input = { // ListVPCEConfigurationsRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListVPCEConfigurationsCommand(input);
 * const response = await client.send(command);
 * // { // ListVPCEConfigurationsResult
 * //   vpceConfigurations: [ // VPCEConfigurations
 * //     { // VPCEConfiguration
 * //       arn: "STRING_VALUE",
 * //       vpceConfigurationName: "STRING_VALUE",
 * //       vpceServiceName: "STRING_VALUE",
 * //       serviceDnsName: "STRING_VALUE",
 * //       vpceConfigurationDescription: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListVPCEConfigurationsCommandInput - {@link ListVPCEConfigurationsCommandInput}
 * @returns {@link ListVPCEConfigurationsCommandOutput}
 * @see {@link ListVPCEConfigurationsCommandInput} for command's `input` shape.
 * @see {@link ListVPCEConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for DeviceFarmClient's `config` shape.
 *
 * @throws {@link ArgumentException} (client fault)
 *  <p>An invalid argument was specified.</p>
 *
 * @throws {@link ServiceAccountException} (client fault)
 *  <p>There was a problem with the service account.</p>
 *
 * @throws {@link DeviceFarmServiceException}
 * <p>Base exception class for all service exceptions from DeviceFarm service.</p>
 *
 *
 * @public
 */
export class ListVPCEConfigurationsCommand extends $Command
  .classBuilder<
    ListVPCEConfigurationsCommandInput,
    ListVPCEConfigurationsCommandOutput,
    DeviceFarmClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DeviceFarmClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("DeviceFarm_20150623", "ListVPCEConfigurations", {})
  .n("DeviceFarmClient", "ListVPCEConfigurationsCommand")
  .f(void 0, void 0)
  .ser(se_ListVPCEConfigurationsCommand)
  .de(de_ListVPCEConfigurationsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListVPCEConfigurationsRequest;
      output: ListVPCEConfigurationsResult;
    };
    sdk: {
      input: ListVPCEConfigurationsCommandInput;
      output: ListVPCEConfigurationsCommandOutput;
    };
  };
}
