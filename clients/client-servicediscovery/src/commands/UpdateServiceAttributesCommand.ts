// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateServiceAttributesRequest, UpdateServiceAttributesResponse } from "../models/models_0";
import { UpdateServiceAttributes } from "../schemas/schemas_0";
import { ServiceDiscoveryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceDiscoveryClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateServiceAttributesCommand}.
 */
export interface UpdateServiceAttributesCommandInput extends UpdateServiceAttributesRequest {}
/**
 * @public
 *
 * The output of {@link UpdateServiceAttributesCommand}.
 */
export interface UpdateServiceAttributesCommandOutput extends UpdateServiceAttributesResponse, __MetadataBearer {}

/**
 * <p>Submits a request to update a specified service to add service-level attributes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceDiscoveryClient, UpdateServiceAttributesCommand } from "@aws-sdk/client-servicediscovery"; // ES Modules import
 * // const { ServiceDiscoveryClient, UpdateServiceAttributesCommand } = require("@aws-sdk/client-servicediscovery"); // CommonJS import
 * // import type { ServiceDiscoveryClientConfig } from "@aws-sdk/client-servicediscovery";
 * const config = {}; // type is ServiceDiscoveryClientConfig
 * const client = new ServiceDiscoveryClient(config);
 * const input = { // UpdateServiceAttributesRequest
 *   ServiceId: "STRING_VALUE", // required
 *   Attributes: { // ServiceAttributesMap // required
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new UpdateServiceAttributesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateServiceAttributesCommandInput - {@link UpdateServiceAttributesCommandInput}
 * @returns {@link UpdateServiceAttributesCommandOutput}
 * @see {@link UpdateServiceAttributesCommandInput} for command's `input` shape.
 * @see {@link UpdateServiceAttributesCommandOutput} for command's `response` shape.
 * @see {@link ServiceDiscoveryClientResolvedConfig | config} for ServiceDiscoveryClient's `config` shape.
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>One or more specified values aren't valid. For example, a required value might be missing, a
 *    numeric value might be outside the allowed range, or a string value might exceed length
 *    constraints.</p>
 *
 * @throws {@link ServiceAttributesLimitExceededException} (client fault)
 *  <p>The attribute can't be added to the service because you've exceeded the quota for the number
 *    of attributes you can add to a service.</p>
 *
 * @throws {@link ServiceNotFound} (client fault)
 *  <p>No service exists with the specified ID.</p>
 *
 * @throws {@link ServiceDiscoveryServiceException}
 * <p>Base exception class for all service exceptions from ServiceDiscovery service.</p>
 *
 *
 * @example Update service attributes using service ARN
 * ```javascript
 * // Updates service attributes using a service ARN instead of service ID, useful when working with shared namespaces.
 * const input = {
 *   Attributes: {
 *     Port: "8080",
 *     Protocol: "HTTP"
 *   },
 *   ServiceId: "arn:aws:servicediscovery:us-west-2:123456789012:service/srv-abcd1234xmpl5678"
 * };
 * const command = new UpdateServiceAttributesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @example UpdateServiceAttributes Example
 * ```javascript
 * // This example submits a request to update the specified service to add a port attribute with the value 80.
 * const input = {
 *   Attributes: {
 *     port: "80"
 *   },
 *   ServiceId: "srv-e4anhexample0004"
 * };
 * const command = new UpdateServiceAttributesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateServiceAttributesCommand extends $Command
  .classBuilder<
    UpdateServiceAttributesCommandInput,
    UpdateServiceAttributesCommandOutput,
    ServiceDiscoveryClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ServiceDiscoveryClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Route53AutoNaming_v20170314", "UpdateServiceAttributes", {})
  .n("ServiceDiscoveryClient", "UpdateServiceAttributesCommand")
  .sc(UpdateServiceAttributes)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateServiceAttributesRequest;
      output: {};
    };
    sdk: {
      input: UpdateServiceAttributesCommandInput;
      output: UpdateServiceAttributesCommandOutput;
    };
  };
}
