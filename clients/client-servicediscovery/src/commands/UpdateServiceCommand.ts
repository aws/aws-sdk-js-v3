// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateServiceRequest, UpdateServiceResponse } from "../models/models_0";
import { de_UpdateServiceCommand, se_UpdateServiceCommand } from "../protocols/Aws_json1_1";
import { ServiceDiscoveryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceDiscoveryClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateServiceCommand}.
 */
export interface UpdateServiceCommandInput extends UpdateServiceRequest {}
/**
 * @public
 *
 * The output of {@link UpdateServiceCommand}.
 */
export interface UpdateServiceCommandOutput extends UpdateServiceResponse, __MetadataBearer {}

/**
 * <p>Submits a request to perform the following operations:</p>
 *          <ul>
 *             <li>
 *                <p>Update the TTL setting for existing <code>DnsRecords</code> configurations</p>
 *             </li>
 *             <li>
 *                <p>Add, update, or delete <code>HealthCheckConfig</code> for a specified service</p>
 *                <note>
 *                   <p>You can't add, update, or delete a <code>HealthCheckCustomConfig</code>
 *       configuration.</p>
 *                </note>
 *             </li>
 *          </ul>
 *          <p>For public and private DNS namespaces, note the following:</p>
 *          <ul>
 *             <li>
 *                <p>If you omit any existing <code>DnsRecords</code> or <code>HealthCheckConfig</code>
 *      configurations from an <code>UpdateService</code> request, the configurations are deleted from
 *      the service.</p>
 *             </li>
 *             <li>
 *                <p>If you omit an existing <code>HealthCheckCustomConfig</code> configuration from an
 *       <code>UpdateService</code> request, the configuration isn't deleted from the service.</p>
 *             </li>
 *          </ul>
 *          <note>
 *             <p>You can't call <code>UpdateService</code> and update settings in the following
 *     scenarios:</p>
 *             <ul>
 *                <li>
 *                   <p>When the service is associated with an HTTP namespace</p>
 *                </li>
 *                <li>
 *                   <p>When the service is associated with a shared namespace and contains instances that were
 *       registered by Amazon Web Services accounts other than the account making the <code>UpdateService</code>
 *       call</p>
 *                </li>
 *             </ul>
 *          </note>
 *          <p>When you update settings for a service, Cloud Map also updates the corresponding settings
 *    in all the records and health checks that were created by using the specified service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceDiscoveryClient, UpdateServiceCommand } from "@aws-sdk/client-servicediscovery"; // ES Modules import
 * // const { ServiceDiscoveryClient, UpdateServiceCommand } = require("@aws-sdk/client-servicediscovery"); // CommonJS import
 * // import type { ServiceDiscoveryClientConfig } from "@aws-sdk/client-servicediscovery";
 * const config = {}; // type is ServiceDiscoveryClientConfig
 * const client = new ServiceDiscoveryClient(config);
 * const input = { // UpdateServiceRequest
 *   Id: "STRING_VALUE", // required
 *   Service: { // ServiceChange
 *     Description: "STRING_VALUE",
 *     DnsConfig: { // DnsConfigChange
 *       DnsRecords: [ // DnsRecordList // required
 *         { // DnsRecord
 *           Type: "SRV" || "A" || "AAAA" || "CNAME", // required
 *           TTL: Number("long"), // required
 *         },
 *       ],
 *     },
 *     HealthCheckConfig: { // HealthCheckConfig
 *       Type: "HTTP" || "HTTPS" || "TCP", // required
 *       ResourcePath: "STRING_VALUE",
 *       FailureThreshold: Number("int"),
 *     },
 *   },
 * };
 * const command = new UpdateServiceCommand(input);
 * const response = await client.send(command);
 * // { // UpdateServiceResponse
 * //   OperationId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateServiceCommandInput - {@link UpdateServiceCommandInput}
 * @returns {@link UpdateServiceCommandOutput}
 * @see {@link UpdateServiceCommandInput} for command's `input` shape.
 * @see {@link UpdateServiceCommandOutput} for command's `response` shape.
 * @see {@link ServiceDiscoveryClientResolvedConfig | config} for ServiceDiscoveryClient's `config` shape.
 *
 * @throws {@link DuplicateRequest} (client fault)
 *  <p>The operation is already in progress.</p>
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
 * @example UpdateService Example
 * ```javascript
 * // This example submits a request to replace the DnsConfig and HealthCheckConfig settings of a specified service.
 * const input = {
 *   Id: "srv-e4anhexample0004",
 *   Service: {
 *     DnsConfig: {
 *       DnsRecords: [
 *         {
 *           TTL: 60,
 *           Type: "A"
 *         }
 *       ]
 *     },
 *     HealthCheckConfig: {
 *       FailureThreshold: 2,
 *       ResourcePath: "/",
 *       Type: "HTTP"
 *     }
 *   }
 * };
 * const command = new UpdateServiceCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   OperationId: "m35hsdrkxwjffm3xef4bxyy6vc3ewakx-jdn3y5g5"
 * }
 * *\/
 * ```
 *
 * @example Update service using service ARN for shared namespace
 * ```javascript
 * // This example updates a service using a service ARN instead of service ID. This is useful for updating services associated with shared namespaces.
 * const input = {
 *   Id: "arn:aws:servicediscovery:us-west-2:123456789012:service/srv-e4anhexample0004",
 *   Service: {
 *     Description: "Updated service description for shared namespace"
 *   }
 * };
 * const command = new UpdateServiceCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   OperationId: "m35hsdrkxwjffm3xef4bxyy6vc3ewakx-jdn3y5g5"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateServiceCommand extends $Command
  .classBuilder<
    UpdateServiceCommandInput,
    UpdateServiceCommandOutput,
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
  .s("Route53AutoNaming_v20170314", "UpdateService", {})
  .n("ServiceDiscoveryClient", "UpdateServiceCommand")
  .f(void 0, void 0)
  .ser(se_UpdateServiceCommand)
  .de(de_UpdateServiceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateServiceRequest;
      output: UpdateServiceResponse;
    };
    sdk: {
      input: UpdateServiceCommandInput;
      output: UpdateServiceCommandOutput;
    };
  };
}
