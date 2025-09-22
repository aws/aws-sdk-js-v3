// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetServiceAttributesRequest, GetServiceAttributesResponse } from "../models/models_0";
import { GetServiceAttributes } from "../schemas/schemas_1_Get";
import { ServiceDiscoveryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceDiscoveryClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetServiceAttributesCommand}.
 */
export interface GetServiceAttributesCommandInput extends GetServiceAttributesRequest {}
/**
 * @public
 *
 * The output of {@link GetServiceAttributesCommand}.
 */
export interface GetServiceAttributesCommandOutput extends GetServiceAttributesResponse, __MetadataBearer {}

/**
 * <p>Returns the attributes associated with a specified service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceDiscoveryClient, GetServiceAttributesCommand } from "@aws-sdk/client-servicediscovery"; // ES Modules import
 * // const { ServiceDiscoveryClient, GetServiceAttributesCommand } = require("@aws-sdk/client-servicediscovery"); // CommonJS import
 * // import type { ServiceDiscoveryClientConfig } from "@aws-sdk/client-servicediscovery";
 * const config = {}; // type is ServiceDiscoveryClientConfig
 * const client = new ServiceDiscoveryClient(config);
 * const input = { // GetServiceAttributesRequest
 *   ServiceId: "STRING_VALUE", // required
 * };
 * const command = new GetServiceAttributesCommand(input);
 * const response = await client.send(command);
 * // { // GetServiceAttributesResponse
 * //   ServiceAttributes: { // ServiceAttributes
 * //     ServiceArn: "STRING_VALUE",
 * //     ResourceOwner: "STRING_VALUE",
 * //     Attributes: { // ServiceAttributesMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetServiceAttributesCommandInput - {@link GetServiceAttributesCommandInput}
 * @returns {@link GetServiceAttributesCommandOutput}
 * @see {@link GetServiceAttributesCommandInput} for command's `input` shape.
 * @see {@link GetServiceAttributesCommandOutput} for command's `response` shape.
 * @see {@link ServiceDiscoveryClientResolvedConfig | config} for ServiceDiscoveryClient's `config` shape.
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>One or more specified values aren't valid. For example, a required value might be missing, a
 *    numeric value might be outside the allowed range, or a string value might exceed length
 *    constraints.</p>
 *
 * @throws {@link ServiceNotFound} (client fault)
 *  <p>No service exists with the specified ID.</p>
 *
 * @throws {@link ServiceDiscoveryServiceException}
 * <p>Base exception class for all service exceptions from ServiceDiscovery service.</p>
 *
 *
 * @example Get service attributes using service ARN
 * ```javascript
 * // Gets service attributes using a service ARN instead of service ID, useful when working with shared namespaces. Shows attributes for a service created by a sharee in a namespace owned by another account.
 * const input = {
 *   ServiceId: "arn:aws:servicediscovery:us-west-2:123456789012:service/srv-abcd1234xmpl5678"
 * };
 * const command = new GetServiceAttributesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ServiceAttributes: {
 *     Attributes: {
 *       Port: "80"
 *     },
 *     ResourceOwner: "123456789012",
 *     ServiceArn: "arn:aws:servicediscovery:us-west-2:123456789012:service/srv-abcd1234xmpl5678"
 *   }
 * }
 * *\/
 * ```
 *
 * @example GetServiceAttributes Example
 * ```javascript
 * // This example gets the attributes for a specified service.
 * const input = {
 *   ServiceId: "srv-e4anhexample0004"
 * };
 * const command = new GetServiceAttributesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ServiceAttributes: {
 *     Attributes: {
 *       port: "80"
 *     },
 *     ResourceOwner: "123456789012",
 *     ServiceArn: "arn:aws:servicediscovery:us-west-2:123456789012:service/srv-e4anhexample0004"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetServiceAttributesCommand extends $Command
  .classBuilder<
    GetServiceAttributesCommandInput,
    GetServiceAttributesCommandOutput,
    ServiceDiscoveryClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ServiceDiscoveryClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Route53AutoNaming_v20170314", "GetServiceAttributes", {})
  .n("ServiceDiscoveryClient", "GetServiceAttributesCommand")
  .sc(GetServiceAttributes)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetServiceAttributesRequest;
      output: GetServiceAttributesResponse;
    };
    sdk: {
      input: GetServiceAttributesCommandInput;
      output: GetServiceAttributesCommandOutput;
    };
  };
}
