// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetInstanceRequest, GetInstanceResponse } from "../models/models_0";
import { de_GetInstanceCommand, se_GetInstanceCommand } from "../protocols/Aws_json1_1";
import { ServiceDiscoveryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceDiscoveryClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetInstanceCommand}.
 */
export interface GetInstanceCommandInput extends GetInstanceRequest {}
/**
 * @public
 *
 * The output of {@link GetInstanceCommand}.
 */
export interface GetInstanceCommandOutput extends GetInstanceResponse, __MetadataBearer {}

/**
 * <p>Gets information about a specified instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceDiscoveryClient, GetInstanceCommand } from "@aws-sdk/client-servicediscovery"; // ES Modules import
 * // const { ServiceDiscoveryClient, GetInstanceCommand } = require("@aws-sdk/client-servicediscovery"); // CommonJS import
 * const client = new ServiceDiscoveryClient(config);
 * const input = { // GetInstanceRequest
 *   ServiceId: "STRING_VALUE", // required
 *   InstanceId: "STRING_VALUE", // required
 * };
 * const command = new GetInstanceCommand(input);
 * const response = await client.send(command);
 * // { // GetInstanceResponse
 * //   ResourceOwner: "STRING_VALUE",
 * //   Instance: { // Instance
 * //     Id: "STRING_VALUE", // required
 * //     CreatorRequestId: "STRING_VALUE",
 * //     Attributes: { // Attributes
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     CreatedByAccount: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetInstanceCommandInput - {@link GetInstanceCommandInput}
 * @returns {@link GetInstanceCommandOutput}
 * @see {@link GetInstanceCommandInput} for command's `input` shape.
 * @see {@link GetInstanceCommandOutput} for command's `response` shape.
 * @see {@link ServiceDiscoveryClientResolvedConfig | config} for ServiceDiscoveryClient's `config` shape.
 *
 * @throws {@link InstanceNotFound} (client fault)
 *  <p>No instance exists with the specified ID, or the instance was recently registered, and
 *    information about the instance hasn't propagated yet.</p>
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
 * @example GetInstance example
 * ```javascript
 * // This example gets information about a specified instance.
 * const input = {
 *   InstanceId: "i-abcd1234",
 *   ServiceId: "srv-e4anhexample0004"
 * };
 * const command = new GetInstanceCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Instance: {
 *     Attributes: {
 *       AWS_INSTANCE_IPV4: "192.0.2.44",
 *       AWS_INSTANCE_PORT: "80",
 *       color: "green",
 *       region: "us-west-2",
 *       stage: "beta"
 *     },
 *     CreatedByAccount: "123456789012",
 *     Id: "i-abcd1234"
 *   },
 *   ResourceOwner: "123456789012"
 * }
 * *\/
 * ```
 *
 * @example Get instance details using service ARN for shared namespace
 * ```javascript
 * // This example gets information about an instance using a service ARN instead of service ID. This is useful for listing instances associated with shared namespaces.
 * const input = {
 *   InstanceId: "i-abcd1234",
 *   ServiceId: "arn:aws:servicediscovery:us-west-2:123456789012:service/srv-e4anhexample0004"
 * };
 * const command = new GetInstanceCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Instance: {
 *     Attributes: {
 *       AWS_INSTANCE_IPV4: "192.0.2.44",
 *       AWS_INSTANCE_PORT: "80",
 *       color: "green",
 *       region: "us-west-2",
 *       stage: "beta"
 *     },
 *     CreatedByAccount: "111122223333",
 *     Id: "i-abcd1234"
 *   },
 *   ResourceOwner: "123456789012"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetInstanceCommand extends $Command
  .classBuilder<
    GetInstanceCommandInput,
    GetInstanceCommandOutput,
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
  .s("Route53AutoNaming_v20170314", "GetInstance", {})
  .n("ServiceDiscoveryClient", "GetInstanceCommand")
  .f(void 0, void 0)
  .ser(se_GetInstanceCommand)
  .de(de_GetInstanceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetInstanceRequest;
      output: GetInstanceResponse;
    };
    sdk: {
      input: GetInstanceCommandInput;
      output: GetInstanceCommandOutput;
    };
  };
}
