// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteServiceAttributesRequest, DeleteServiceAttributesResponse } from "../models/models_0";
import { de_DeleteServiceAttributesCommand, se_DeleteServiceAttributesCommand } from "../protocols/Aws_json1_1";
import { ServiceDiscoveryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceDiscoveryClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteServiceAttributesCommand}.
 */
export interface DeleteServiceAttributesCommandInput extends DeleteServiceAttributesRequest {}
/**
 * @public
 *
 * The output of {@link DeleteServiceAttributesCommand}.
 */
export interface DeleteServiceAttributesCommandOutput extends DeleteServiceAttributesResponse, __MetadataBearer {}

/**
 * <p>Deletes specific attributes associated with a service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceDiscoveryClient, DeleteServiceAttributesCommand } from "@aws-sdk/client-servicediscovery"; // ES Modules import
 * // const { ServiceDiscoveryClient, DeleteServiceAttributesCommand } = require("@aws-sdk/client-servicediscovery"); // CommonJS import
 * // import type { ServiceDiscoveryClientConfig } from "@aws-sdk/client-servicediscovery";
 * const config = {}; // type is ServiceDiscoveryClientConfig
 * const client = new ServiceDiscoveryClient(config);
 * const input = { // DeleteServiceAttributesRequest
 *   ServiceId: "STRING_VALUE", // required
 *   Attributes: [ // ServiceAttributeKeyList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DeleteServiceAttributesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteServiceAttributesCommandInput - {@link DeleteServiceAttributesCommandInput}
 * @returns {@link DeleteServiceAttributesCommandOutput}
 * @see {@link DeleteServiceAttributesCommandInput} for command's `input` shape.
 * @see {@link DeleteServiceAttributesCommandOutput} for command's `response` shape.
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
 * @example DeleteServiceAttributes example
 * ```javascript
 * // Example: Delete service attribute by providing attribute key and service ID
 * const input = {
 *   Attributes: [
 *     "port"
 *   ],
 *   ServiceId: "srv-e4anhexample0004"
 * };
 * const command = new DeleteServiceAttributesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @example Delete service attributes using service ARN
 * ```javascript
 * // Deletes service attributes using a service ARN instead of service ID, useful for cross-account scenarios or when working with shared namespaces.
 * const input = {
 *   Attributes: [
 *     "Port"
 *   ],
 *   ServiceId: "arn:aws:servicediscovery:us-west-2:123456789012:service/srv-abcd1234xmpl5678"
 * };
 * const command = new DeleteServiceAttributesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteServiceAttributesCommand extends $Command
  .classBuilder<
    DeleteServiceAttributesCommandInput,
    DeleteServiceAttributesCommandOutput,
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
  .s("Route53AutoNaming_v20170314", "DeleteServiceAttributes", {})
  .n("ServiceDiscoveryClient", "DeleteServiceAttributesCommand")
  .f(void 0, void 0)
  .ser(se_DeleteServiceAttributesCommand)
  .de(de_DeleteServiceAttributesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteServiceAttributesRequest;
      output: {};
    };
    sdk: {
      input: DeleteServiceAttributesCommandInput;
      output: DeleteServiceAttributesCommandOutput;
    };
  };
}
