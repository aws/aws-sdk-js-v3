// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListVPCEConfigurationsRequest, ListVPCEConfigurationsResult } from "../models/models_0";
import { ListVPCEConfigurations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Returns information about all Amazon Virtual Private Cloud (VPC) endpoint configurations in the AWS account.
 *
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
 *
 * An invalid argument was specified.
 *
 * @throws {@link ServiceAccountException} (client fault)
 *
 * There was a problem with the service account.
 *
 * @throws {@link DeviceFarmServiceException}
 *
 * Base exception class for all service exceptions from DeviceFarm service.
 *
 * @public
 */
export class ListVPCEConfigurationsCommand extends command<ListVPCEConfigurationsCommandInput, ListVPCEConfigurationsCommandOutput>(
  _ep0,
  _mw0,
  "ListVPCEConfigurations",
  ListVPCEConfigurations$
) {
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
