// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteServiceRequest, DeleteServiceResponse } from "../models/models_0";
import { de_DeleteServiceCommand, se_DeleteServiceCommand } from "../protocols/Aws_json1_1";
import { ServiceDiscoveryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceDiscoveryClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteServiceCommand}.
 */
export interface DeleteServiceCommandInput extends DeleteServiceRequest {}
/**
 * @public
 *
 * The output of {@link DeleteServiceCommand}.
 */
export interface DeleteServiceCommandOutput extends DeleteServiceResponse, __MetadataBearer {}

/**
 * <p>Deletes a specified service and all associated service attributes. If the service still contains one or more registered instances, the request
 *    fails.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceDiscoveryClient, DeleteServiceCommand } from "@aws-sdk/client-servicediscovery"; // ES Modules import
 * // const { ServiceDiscoveryClient, DeleteServiceCommand } = require("@aws-sdk/client-servicediscovery"); // CommonJS import
 * const client = new ServiceDiscoveryClient(config);
 * const input = { // DeleteServiceRequest
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new DeleteServiceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteServiceCommandInput - {@link DeleteServiceCommandInput}
 * @returns {@link DeleteServiceCommandOutput}
 * @see {@link DeleteServiceCommandInput} for command's `input` shape.
 * @see {@link DeleteServiceCommandOutput} for command's `response` shape.
 * @see {@link ServiceDiscoveryClientResolvedConfig | config} for ServiceDiscoveryClient's `config` shape.
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>One or more specified values aren't valid. For example, a required value might be missing, a numeric value
 *    might be outside the allowed range, or a string value might exceed length constraints.</p>
 *
 * @throws {@link ResourceInUse} (client fault)
 *  <p>The specified resource can't be deleted because it contains other resources. For example, you can't delete
 *    a service that contains any instances.</p>
 *
 * @throws {@link ServiceNotFound} (client fault)
 *  <p>No service exists with the specified ID.</p>
 *
 * @throws {@link ServiceDiscoveryServiceException}
 * <p>Base exception class for all service exceptions from ServiceDiscovery service.</p>
 *
 * @public
 * @example Example: Delete service
 * ```javascript
 * // Example: Delete service
 * const input = {
 *   "Id": "srv-p5zdwlg5uvvzjita"
 * };
 * const command = new DeleteServiceCommand(input);
 * await client.send(command);
 * // example id: example-delete-service-1587416462902
 * ```
 *
 */
export class DeleteServiceCommand extends $Command
  .classBuilder<
    DeleteServiceCommandInput,
    DeleteServiceCommandOutput,
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
  .s("Route53AutoNaming_v20170314", "DeleteService", {})
  .n("ServiceDiscoveryClient", "DeleteServiceCommand")
  .f(void 0, void 0)
  .ser(se_DeleteServiceCommand)
  .de(de_DeleteServiceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteServiceRequest;
      output: {};
    };
    sdk: {
      input: DeleteServiceCommandInput;
      output: DeleteServiceCommandOutput;
    };
  };
}
