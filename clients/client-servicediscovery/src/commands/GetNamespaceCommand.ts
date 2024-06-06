// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetNamespaceRequest, GetNamespaceResponse } from "../models/models_0";
import { de_GetNamespaceCommand, se_GetNamespaceCommand } from "../protocols/Aws_json1_1";
import { ServiceDiscoveryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceDiscoveryClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetNamespaceCommand}.
 */
export interface GetNamespaceCommandInput extends GetNamespaceRequest {}
/**
 * @public
 *
 * The output of {@link GetNamespaceCommand}.
 */
export interface GetNamespaceCommandOutput extends GetNamespaceResponse, __MetadataBearer {}

/**
 * <p>Gets information about a namespace.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceDiscoveryClient, GetNamespaceCommand } from "@aws-sdk/client-servicediscovery"; // ES Modules import
 * // const { ServiceDiscoveryClient, GetNamespaceCommand } = require("@aws-sdk/client-servicediscovery"); // CommonJS import
 * const client = new ServiceDiscoveryClient(config);
 * const input = { // GetNamespaceRequest
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new GetNamespaceCommand(input);
 * const response = await client.send(command);
 * // { // GetNamespaceResponse
 * //   Namespace: { // Namespace
 * //     Id: "STRING_VALUE",
 * //     Arn: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     Type: "DNS_PUBLIC" || "DNS_PRIVATE" || "HTTP",
 * //     Description: "STRING_VALUE",
 * //     ServiceCount: Number("int"),
 * //     Properties: { // NamespaceProperties
 * //       DnsProperties: { // DnsProperties
 * //         HostedZoneId: "STRING_VALUE",
 * //         SOA: { // SOA
 * //           TTL: Number("long"), // required
 * //         },
 * //       },
 * //       HttpProperties: { // HttpProperties
 * //         HttpName: "STRING_VALUE",
 * //       },
 * //     },
 * //     CreateDate: new Date("TIMESTAMP"),
 * //     CreatorRequestId: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetNamespaceCommandInput - {@link GetNamespaceCommandInput}
 * @returns {@link GetNamespaceCommandOutput}
 * @see {@link GetNamespaceCommandInput} for command's `input` shape.
 * @see {@link GetNamespaceCommandOutput} for command's `response` shape.
 * @see {@link ServiceDiscoveryClientResolvedConfig | config} for ServiceDiscoveryClient's `config` shape.
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>One or more specified values aren't valid. For example, a required value might be missing, a numeric value
 *    might be outside the allowed range, or a string value might exceed length constraints.</p>
 *
 * @throws {@link NamespaceNotFound} (client fault)
 *  <p>No namespace exists with the specified ID.</p>
 *
 * @throws {@link ServiceDiscoveryServiceException}
 * <p>Base exception class for all service exceptions from ServiceDiscovery service.</p>
 *
 * @public
 * @example GetNamespace example
 * ```javascript
 * // This example gets information about a specified namespace.
 * const input = {
 *   "Id": "ns-e4anhexample0004"
 * };
 * const command = new GetNamespaceCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Namespace": {
 *     "Arn": "arn:aws:servicediscovery:us-west-2:123456789012:namespace/ns-e1tpmexample0001",
 *     "CreateDate": "20181118T211712Z",
 *     "CreatorRequestId": "example-creator-request-id-0001",
 *     "Description": "Example.com AWS Cloud Map HTTP Namespace",
 *     "Id": "ns-e1tpmexample0001",
 *     "Name": "example-http.com",
 *     "Properties": {
 *       "DnsProperties": {},
 *       "HttpProperties": {
 *         "HttpName": "example-http.com"
 *       }
 *     },
 *     "Type": "HTTP"
 *   }
 * }
 * *\/
 * // example id: getnamespace-example-1590115383708
 * ```
 *
 */
export class GetNamespaceCommand extends $Command
  .classBuilder<
    GetNamespaceCommandInput,
    GetNamespaceCommandOutput,
    ServiceDiscoveryClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ServiceDiscoveryClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Route53AutoNaming_v20170314", "GetNamespace", {})
  .n("ServiceDiscoveryClient", "GetNamespaceCommand")
  .f(void 0, void 0)
  .ser(se_GetNamespaceCommand)
  .de(de_GetNamespaceCommand)
  .build() {}
