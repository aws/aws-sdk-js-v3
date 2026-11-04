// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreatePublicDnsNamespaceRequest, CreatePublicDnsNamespaceResponse } from "../models/models_0";
import { CreatePublicDnsNamespace$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreatePublicDnsNamespaceCommand}.
 */
export interface CreatePublicDnsNamespaceCommandInput extends CreatePublicDnsNamespaceRequest {}
/**
 * @public
 *
 * The output of {@link CreatePublicDnsNamespaceCommand}.
 */
export interface CreatePublicDnsNamespaceCommandOutput extends CreatePublicDnsNamespaceResponse, __MetadataBearer {}

/**
 * Creates a public namespace based on DNS, which is visible on the internet. The namespace defines your service naming scheme. For example, if you name your namespace `example.com` and name your service `backend`, the resulting DNS name for the service is `backend.example.com`. You can discover instances that were registered with a public DNS namespace by using either a `DiscoverInstances` request or using DNS. For the current quota on the number of namespaces that you can create using the same Amazon Web Services account, see [Cloud Map quotas](https://docs.aws.amazon.com/cloud-map/latest/dg/cloud-map-limits.html) in the *Cloud Map Developer Guide*.
 *
 * > **Important:** The `CreatePublicDnsNamespace` API operation is not supported in the Amazon Web Services GovCloud (US) Regions.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceDiscoveryClient, CreatePublicDnsNamespaceCommand } from "@aws-sdk/client-servicediscovery"; // ES Modules import
 * // const { ServiceDiscoveryClient, CreatePublicDnsNamespaceCommand } = require("@aws-sdk/client-servicediscovery"); // CommonJS import
 * // import type { ServiceDiscoveryClientConfig } from "@aws-sdk/client-servicediscovery";
 * const config = {}; // type is ServiceDiscoveryClientConfig
 * const client = new ServiceDiscoveryClient(config);
 * const input = { // CreatePublicDnsNamespaceRequest
 *   Name: "STRING_VALUE", // required
 *   CreatorRequestId: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   Properties: { // PublicDnsNamespaceProperties
 *     DnsProperties: { // PublicDnsPropertiesMutable
 *       SOA: { // SOA
 *         TTL: Number("long"), // required
 *       },
 *     },
 *   },
 * };
 * const command = new CreatePublicDnsNamespaceCommand(input);
 * const response = await client.send(command);
 * // { // CreatePublicDnsNamespaceResponse
 * //   OperationId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreatePublicDnsNamespaceCommandInput - {@link CreatePublicDnsNamespaceCommandInput}
 * @returns {@link CreatePublicDnsNamespaceCommandOutput}
 * @see {@link CreatePublicDnsNamespaceCommandInput} for command's `input` shape.
 * @see {@link CreatePublicDnsNamespaceCommandOutput} for command's `response` shape.
 * @see {@link ServiceDiscoveryClientResolvedConfig | config} for ServiceDiscoveryClient's `config` shape.
 *
 * @throws {@link DuplicateRequest} (client fault)
 *
 * The operation is already in progress.
 *
 * @throws {@link InvalidInput} (client fault)
 *
 * One or more specified values aren't valid. For example, a required value might be missing, a numeric value might be outside the allowed range, or a string value might exceed length constraints.
 *
 * @throws {@link NamespaceAlreadyExists} (client fault)
 *
 * The namespace that you're trying to create already exists.
 *
 * @throws {@link ResourceLimitExceeded} (client fault)
 *
 * The resource can't be created because you've reached the quota on the number of resources.
 *
 * @throws {@link TooManyTagsException} (client fault)
 *
 * The list of tags on the resource is over the quota. The maximum number of tags that can be applied to a resource is 50.
 *
 * @throws {@link ServiceDiscoveryServiceException}
 *
 * Base exception class for all service exceptions from ServiceDiscovery service.
 *
 * @example CreatePublicDnsNamespace example
 * ```javascript
 * // This example creates a public namespace based on DNS.
 * const input = {
 *   CreatorRequestId: "example-creator-request-id-0003",
 *   Description: "Example.com AWS Cloud Map Public DNS Namespace",
 *   Name: "example-public-dns.com"
 * };
 * const command = new CreatePublicDnsNamespaceCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   OperationId: "dns2voqozuhfet5kzxoxg-a-response-example"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreatePublicDnsNamespaceCommand extends command<CreatePublicDnsNamespaceCommandInput, CreatePublicDnsNamespaceCommandOutput>(
  _ep0,
  _mw0,
  "CreatePublicDnsNamespace",
  CreatePublicDnsNamespace$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreatePublicDnsNamespaceRequest;
      output: CreatePublicDnsNamespaceResponse;
    };
    sdk: {
      input: CreatePublicDnsNamespaceCommandInput;
      output: CreatePublicDnsNamespaceCommandOutput;
    };
  };
}
