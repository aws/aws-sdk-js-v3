// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetServiceAttributesRequest, GetServiceAttributesResponse } from "../models/models_0";
import { de_GetServiceAttributesCommand, se_GetServiceAttributesCommand } from "../protocols/Aws_json1_1";
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
 * const client = new ServiceDiscoveryClient(config);
 * const input = { // GetServiceAttributesRequest
 *   ServiceId: "STRING_VALUE", // required
 * };
 * const command = new GetServiceAttributesCommand(input);
 * const response = await client.send(command);
 * // { // GetServiceAttributesResponse
 * //   ServiceAttributes: { // ServiceAttributes
 * //     ServiceArn: "STRING_VALUE",
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
 *  <p>One or more specified values aren't valid. For example, a required value might be missing, a numeric value
 *    might be outside the allowed range, or a string value might exceed length constraints.</p>
 *
 * @throws {@link ServiceNotFound} (client fault)
 *  <p>No service exists with the specified ID.</p>
 *
 * @throws {@link ServiceDiscoveryServiceException}
 * <p>Base exception class for all service exceptions from ServiceDiscovery service.</p>
 *
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Route53AutoNaming_v20170314", "GetServiceAttributes", {})
  .n("ServiceDiscoveryClient", "GetServiceAttributesCommand")
  .f(void 0, void 0)
  .ser(se_GetServiceAttributesCommand)
  .de(de_GetServiceAttributesCommand)
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
