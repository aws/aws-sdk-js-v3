// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetServiceRequest, GetServiceResponse } from "../models/models_0";
import { GetService } from "../schemas/schemas_0";
import type {
  ServiceDiscoveryClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ServiceDiscoveryClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetServiceCommand}.
 */
export interface GetServiceCommandInput extends GetServiceRequest {}
/**
 * @public
 *
 * The output of {@link GetServiceCommand}.
 */
export interface GetServiceCommandOutput extends GetServiceResponse, __MetadataBearer {}

/**
 * <p>Gets the settings for a specified service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceDiscoveryClient, GetServiceCommand } from "@aws-sdk/client-servicediscovery"; // ES Modules import
 * // const { ServiceDiscoveryClient, GetServiceCommand } = require("@aws-sdk/client-servicediscovery"); // CommonJS import
 * // import type { ServiceDiscoveryClientConfig } from "@aws-sdk/client-servicediscovery";
 * const config = {}; // type is ServiceDiscoveryClientConfig
 * const client = new ServiceDiscoveryClient(config);
 * const input = { // GetServiceRequest
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new GetServiceCommand(input);
 * const response = await client.send(command);
 * // { // GetServiceResponse
 * //   Service: { // Service
 * //     Id: "STRING_VALUE",
 * //     Arn: "STRING_VALUE",
 * //     ResourceOwner: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     NamespaceId: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     InstanceCount: Number("int"),
 * //     DnsConfig: { // DnsConfig
 * //       NamespaceId: "STRING_VALUE",
 * //       RoutingPolicy: "MULTIVALUE" || "WEIGHTED",
 * //       DnsRecords: [ // DnsRecordList // required
 * //         { // DnsRecord
 * //           Type: "SRV" || "A" || "AAAA" || "CNAME", // required
 * //           TTL: Number("long"), // required
 * //         },
 * //       ],
 * //     },
 * //     Type: "HTTP" || "DNS_HTTP" || "DNS",
 * //     HealthCheckConfig: { // HealthCheckConfig
 * //       Type: "HTTP" || "HTTPS" || "TCP", // required
 * //       ResourcePath: "STRING_VALUE",
 * //       FailureThreshold: Number("int"),
 * //     },
 * //     HealthCheckCustomConfig: { // HealthCheckCustomConfig
 * //       FailureThreshold: Number("int"),
 * //     },
 * //     CreateDate: new Date("TIMESTAMP"),
 * //     CreatorRequestId: "STRING_VALUE",
 * //     CreatedByAccount: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetServiceCommandInput - {@link GetServiceCommandInput}
 * @returns {@link GetServiceCommandOutput}
 * @see {@link GetServiceCommandInput} for command's `input` shape.
 * @see {@link GetServiceCommandOutput} for command's `response` shape.
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
 * @example Get service using service ARN
 * ```javascript
 * // Gets service settings using a service ARN instead of service ID, useful when working with shared namespaces. Shows a service created by a sharee (111122223333) in a namespace owned by another account (123456789012).
 * const input = {
 *   Id: "arn:aws:servicediscovery:us-west-2:123456789012:service/srv-abcd1234xmpl5678"
 * };
 * const command = new GetServiceCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Service: {
 *     Arn: "arn:aws:servicediscovery:us-west-2:123456789012:service/srv-abcd1234xmpl5678",
 *     CreateDate: 1.7051616E9,
 *     CreatedByAccount: "111122223333",
 *     CreatorRequestId: "abcd1234-xmpl-5678-9012-abcd1234xmpl",
 *     Description: "Example service",
 *     DnsConfig: {
 *       DnsRecords: [
 *         {
 *           TTL: 300,
 *           Type: "A"
 *         }
 *       ],
 *       NamespaceId: "ns-abcd1234xmpl5678",
 *       RoutingPolicy: "MULTIVALUE"
 *     },
 *     Id: "srv-abcd1234xmpl5678",
 *     InstanceCount: 2,
 *     Name: "example-service",
 *     NamespaceId: "ns-abcd1234xmpl5678",
 *     ResourceOwner: "123456789012",
 *     Type: "DNS_HTTP"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetServiceCommand extends $Command
  .classBuilder<
    GetServiceCommandInput,
    GetServiceCommandOutput,
    ServiceDiscoveryClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ServiceDiscoveryClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Route53AutoNaming_v20170314", "GetService", {})
  .n("ServiceDiscoveryClient", "GetServiceCommand")
  .sc(GetService)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetServiceRequest;
      output: GetServiceResponse;
    };
    sdk: {
      input: GetServiceCommandInput;
      output: GetServiceCommandOutput;
    };
  };
}
