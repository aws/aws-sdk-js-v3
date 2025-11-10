// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateServiceRequest, CreateServiceResponse } from "../models/models_0";
import { CreateService } from "../schemas/schemas_0";
import { ServiceDiscoveryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceDiscoveryClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateServiceCommand}.
 */
export interface CreateServiceCommandInput extends CreateServiceRequest {}
/**
 * @public
 *
 * The output of {@link CreateServiceCommand}.
 */
export interface CreateServiceCommandOutput extends CreateServiceResponse, __MetadataBearer {}

/**
 * <p>Creates a service. This action defines the configuration for the following entities:</p>
 *          <ul>
 *             <li>
 *                <p>For public and private DNS namespaces, one of the following combinations of DNS records in
 *      Amazon Route 53:</p>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <code>A</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>AAAA</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>A</code> and <code>AAAA</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>SRV</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>CNAME</code>
 *                      </p>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <p>Optionally, a health check</p>
 *             </li>
 *          </ul>
 *          <p>After you create the service, you can submit a <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_RegisterInstance.html">RegisterInstance</a> request, and
 *    Cloud Map uses the values in the configuration to create the specified entities.</p>
 *          <p>For the current quota on the number of instances that you can register using the same
 *    namespace and using the same service, see <a href="https://docs.aws.amazon.com/cloud-map/latest/dg/cloud-map-limits.html">Cloud Map quotas</a> in the
 *     <i>Cloud Map Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceDiscoveryClient, CreateServiceCommand } from "@aws-sdk/client-servicediscovery"; // ES Modules import
 * // const { ServiceDiscoveryClient, CreateServiceCommand } = require("@aws-sdk/client-servicediscovery"); // CommonJS import
 * // import type { ServiceDiscoveryClientConfig } from "@aws-sdk/client-servicediscovery";
 * const config = {}; // type is ServiceDiscoveryClientConfig
 * const client = new ServiceDiscoveryClient(config);
 * const input = { // CreateServiceRequest
 *   Name: "STRING_VALUE", // required
 *   NamespaceId: "STRING_VALUE",
 *   CreatorRequestId: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   DnsConfig: { // DnsConfig
 *     NamespaceId: "STRING_VALUE",
 *     RoutingPolicy: "MULTIVALUE" || "WEIGHTED",
 *     DnsRecords: [ // DnsRecordList // required
 *       { // DnsRecord
 *         Type: "SRV" || "A" || "AAAA" || "CNAME", // required
 *         TTL: Number("long"), // required
 *       },
 *     ],
 *   },
 *   HealthCheckConfig: { // HealthCheckConfig
 *     Type: "HTTP" || "HTTPS" || "TCP", // required
 *     ResourcePath: "STRING_VALUE",
 *     FailureThreshold: Number("int"),
 *   },
 *   HealthCheckCustomConfig: { // HealthCheckCustomConfig
 *     FailureThreshold: Number("int"),
 *   },
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   Type: "HTTP",
 * };
 * const command = new CreateServiceCommand(input);
 * const response = await client.send(command);
 * // { // CreateServiceResponse
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
 * @param CreateServiceCommandInput - {@link CreateServiceCommandInput}
 * @returns {@link CreateServiceCommandOutput}
 * @see {@link CreateServiceCommandInput} for command's `input` shape.
 * @see {@link CreateServiceCommandOutput} for command's `response` shape.
 * @see {@link ServiceDiscoveryClientResolvedConfig | config} for ServiceDiscoveryClient's `config` shape.
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>One or more specified values aren't valid. For example, a required value might be missing, a
 *    numeric value might be outside the allowed range, or a string value might exceed length
 *    constraints.</p>
 *
 * @throws {@link NamespaceNotFound} (client fault)
 *  <p>No namespace exists with the specified ID.</p>
 *
 * @throws {@link ResourceLimitExceeded} (client fault)
 *  <p>The resource can't be created because you've reached the quota on the number of
 *    resources.</p>
 *
 * @throws {@link ServiceAlreadyExists} (client fault)
 *  <p>The service can't be created because a service with the same name already exists.</p>
 *
 * @throws {@link TooManyTagsException} (client fault)
 *  <p>The list of tags on the resource is over the quota. The maximum number of tags that can be
 *    applied to a resource is 50.</p>
 *
 * @throws {@link ServiceDiscoveryServiceException}
 * <p>Base exception class for all service exceptions from ServiceDiscovery service.</p>
 *
 *
 * @example Example: Create service
 * ```javascript
 * // Example: Create service
 * const input = {
 *   CreatorRequestId: "567c1193-6b00-4308-bd57-ad38a8822d25",
 *   DnsConfig: {
 *     DnsRecords: [
 *       {
 *         TTL: 60,
 *         Type: "A"
 *       }
 *     ],
 *     NamespaceId: "ns-ylexjili4cdxy3xm",
 *     RoutingPolicy: "MULTIVALUE"
 *   },
 *   Name: "myservice",
 *   NamespaceId: "ns-ylexjili4cdxy3xm"
 * };
 * const command = new CreateServiceCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Service: {
 *     Arn: "arn:aws:servicediscovery:us-west-2:123456789012:service/srv-p5zdwlg5uvvzjita",
 *     CreateDate: 1.587081768334E9,
 *     CreatedByAccount: "123456789012",
 *     CreatorRequestId: "567c1193-6b00-4308-bd57-ad38a8822d25",
 *     DnsConfig: {
 *       DnsRecords: [
 *         {
 *           TTL: 60,
 *           Type: "A"
 *         }
 *       ],
 *       NamespaceId: "ns-ylexjili4cdxy3xm",
 *       RoutingPolicy: "MULTIVALUE"
 *     },
 *     Id: "srv-p5zdwlg5uvvzjita",
 *     InstanceCount: 0,
 *     Name: "myservice",
 *     NamespaceId: "ns-ylexjili4cdxy3xm",
 *     ResourceOwner: "123456789012",
 *     Type: "DNS_HTTP"
 *   }
 * }
 * *\/
 * ```
 *
 * @example Create service using namespace ARN
 * ```javascript
 * // Namespace sharee creates a service using a namespace ARN instead of namespace ID, useful when working with shared namespaces.
 * const input = {
 *   Description: "Example service using namespace ARN",
 *   DnsConfig: {
 *     DnsRecords: [
 *       {
 *         TTL: 300,
 *         Type: "A"
 *       }
 *     ],
 *     RoutingPolicy: "MULTIVALUE"
 *   },
 *   Name: "example-service",
 *   NamespaceId: "arn:aws:servicediscovery:us-west-2:123456789012:namespace/ns-abcd1234xmpl5678"
 * };
 * const command = new CreateServiceCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Service: {
 *     Arn: "arn:aws:servicediscovery:us-west-2:123456789012:service/srv-abcd1234xmpl5678",
 *     CreateDate: 1.7051616E9,
 *     CreatedByAccount: "111122223333",
 *     CreatorRequestId: "abcd1234-xmpl-5678-9012-abcd1234xmpl",
 *     Description: "Example service using namespace ARN",
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
 *     InstanceCount: 0,
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
export class CreateServiceCommand extends $Command
  .classBuilder<
    CreateServiceCommandInput,
    CreateServiceCommandOutput,
    ServiceDiscoveryClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ServiceDiscoveryClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Route53AutoNaming_v20170314", "CreateService", {})
  .n("ServiceDiscoveryClient", "CreateServiceCommand")
  .sc(CreateService)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateServiceRequest;
      output: CreateServiceResponse;
    };
    sdk: {
      input: CreateServiceCommandInput;
      output: CreateServiceCommandOutput;
    };
  };
}
