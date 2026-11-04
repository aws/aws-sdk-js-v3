// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateHttpNamespaceRequest, CreateHttpNamespaceResponse } from "../models/models_0";
import { CreateHttpNamespace$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateHttpNamespaceCommand}.
 */
export interface CreateHttpNamespaceCommandInput extends CreateHttpNamespaceRequest {}
/**
 * @public
 *
 * The output of {@link CreateHttpNamespaceCommand}.
 */
export interface CreateHttpNamespaceCommandOutput extends CreateHttpNamespaceResponse, __MetadataBearer {}

/**
 * Creates an HTTP namespace. Service instances registered using an HTTP namespace can be discovered using a `DiscoverInstances` request but can't be discovered using DNS.
 *
 * For the current quota on the number of namespaces that you can create using the same Amazon Web Services account, see [Cloud Map quotas](https://docs.aws.amazon.com/cloud-map/latest/dg/cloud-map-limits.html) in the *Cloud Map Developer Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceDiscoveryClient, CreateHttpNamespaceCommand } from "@aws-sdk/client-servicediscovery"; // ES Modules import
 * // const { ServiceDiscoveryClient, CreateHttpNamespaceCommand } = require("@aws-sdk/client-servicediscovery"); // CommonJS import
 * // import type { ServiceDiscoveryClientConfig } from "@aws-sdk/client-servicediscovery";
 * const config = {}; // type is ServiceDiscoveryClientConfig
 * const client = new ServiceDiscoveryClient(config);
 * const input = { // CreateHttpNamespaceRequest
 *   Name: "STRING_VALUE", // required
 *   CreatorRequestId: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateHttpNamespaceCommand(input);
 * const response = await client.send(command);
 * // { // CreateHttpNamespaceResponse
 * //   OperationId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateHttpNamespaceCommandInput - {@link CreateHttpNamespaceCommandInput}
 * @returns {@link CreateHttpNamespaceCommandOutput}
 * @see {@link CreateHttpNamespaceCommandInput} for command's `input` shape.
 * @see {@link CreateHttpNamespaceCommandOutput} for command's `response` shape.
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
 * @example CreateHttpNamespace example
 * ```javascript
 * // This example creates an HTTP namespace.
 * const input = {
 *   CreatorRequestId: "example-creator-request-id-0001",
 *   Description: "Example.com AWS Cloud Map HTTP Namespace",
 *   Name: "example-http.com"
 * };
 * const command = new CreateHttpNamespaceCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   OperationId: "httpvoqozuhfet5kzxoxg-a-response-example"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateHttpNamespaceCommand extends command<CreateHttpNamespaceCommandInput, CreateHttpNamespaceCommandOutput>(
  _ep0,
  _mw0,
  "CreateHttpNamespace",
  CreateHttpNamespace$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateHttpNamespaceRequest;
      output: CreateHttpNamespaceResponse;
    };
    sdk: {
      input: CreateHttpNamespaceCommandInput;
      output: CreateHttpNamespaceCommandOutput;
    };
  };
}
