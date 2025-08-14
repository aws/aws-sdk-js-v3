// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetServiceRequest, GetServiceResponse } from "../models/models_0";
import { de_GetServiceCommand, se_GetServiceCommand } from "../protocols/Aws_json1_1";
import { ServiceDiscoveryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceDiscoveryClient";

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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Route53AutoNaming_v20170314", "GetService", {})
  .n("ServiceDiscoveryClient", "GetServiceCommand")
  .f(void 0, void 0)
  .ser(se_GetServiceCommand)
  .de(de_GetServiceCommand)
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
