// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetNamespaceRequest, GetNamespaceResponse } from "../models/models_0";
import { GetNamespace$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Gets information about a namespace.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceDiscoveryClient, GetNamespaceCommand } from "@aws-sdk/client-servicediscovery"; // ES Modules import
 * // const { ServiceDiscoveryClient, GetNamespaceCommand } = require("@aws-sdk/client-servicediscovery"); // CommonJS import
 * // import type { ServiceDiscoveryClientConfig } from "@aws-sdk/client-servicediscovery";
 * const config = {}; // type is ServiceDiscoveryClientConfig
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
 * //     ResourceOwner: "STRING_VALUE",
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
 *
 * One or more specified values aren't valid. For example, a required value might be missing, a numeric value might be outside the allowed range, or a string value might exceed length constraints.
 *
 * @throws {@link NamespaceNotFound} (client fault)
 *
 * No namespace exists with the specified ID.
 *
 * @throws {@link ServiceDiscoveryServiceException}
 *
 * Base exception class for all service exceptions from ServiceDiscovery service.
 *
 * @public
 */
export class GetNamespaceCommand extends command<GetNamespaceCommandInput, GetNamespaceCommandOutput>(
  _ep0,
  _mw0,
  "GetNamespace",
  GetNamespace$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetNamespaceRequest;
      output: GetNamespaceResponse;
    };
    sdk: {
      input: GetNamespaceCommandInput;
      output: GetNamespaceCommandOutput;
    };
  };
}
