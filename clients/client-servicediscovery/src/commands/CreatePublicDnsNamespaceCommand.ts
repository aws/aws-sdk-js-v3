// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { CreatePublicDnsNamespaceRequest, CreatePublicDnsNamespaceResponse } from "../models/models_0";
import { de_CreatePublicDnsNamespaceCommand, se_CreatePublicDnsNamespaceCommand } from "../protocols/Aws_json1_1";
import { ServiceDiscoveryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceDiscoveryClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
 * @public
 * <p>Creates a public namespace based on DNS, which is visible on the internet. The namespace
 *    defines your service naming scheme. For example, if you name your namespace
 *     <code>example.com</code> and name your service <code>backend</code>, the resulting DNS name for
 *    the service is <code>backend.example.com</code>. You can discover instances that were registered
 *    with a public DNS namespace by using either a <code>DiscoverInstances</code> request or using
 *    DNS. For the current quota on the number of namespaces that you can create using the same Amazon Web Services account, see <a href="https://docs.aws.amazon.com/cloud-map/latest/dg/cloud-map-limits.html">Cloud Map quotas</a> in the
 *     <i>Cloud Map Developer Guide</i>.</p>
 *          <important>
 *             <p>The <code>CreatePublicDnsNamespace</code> API operation is not supported in the Amazon Web Services GovCloud (US) Regions.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceDiscoveryClient, CreatePublicDnsNamespaceCommand } from "@aws-sdk/client-servicediscovery"; // ES Modules import
 * // const { ServiceDiscoveryClient, CreatePublicDnsNamespaceCommand } = require("@aws-sdk/client-servicediscovery"); // CommonJS import
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
 *  <p>The operation is already in progress.</p>
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>One or more specified values aren't valid. For example, a required value might be missing, a
 *    numeric value might be outside the allowed range, or a string value might exceed length
 *    constraints.</p>
 *
 * @throws {@link NamespaceAlreadyExists} (client fault)
 *  <p>The namespace that you're trying to create already exists.</p>
 *
 * @throws {@link ResourceLimitExceeded} (client fault)
 *  <p>The resource can't be created because you've reached the quota on the number of
 *    resources.</p>
 *
 * @throws {@link TooManyTagsException} (client fault)
 *  <p>The list of tags on the resource is over the quota. The maximum number of tags that can be
 *    applied to a resource is 50.</p>
 *
 * @throws {@link ServiceDiscoveryServiceException}
 * <p>Base exception class for all service exceptions from ServiceDiscovery service.</p>
 *
 * @example CreatePublicDnsNamespace example
 * ```javascript
 * // This example creates a public namespace based on DNS.
 * const input = {
 *   "CreatorRequestId": "example-creator-request-id-0003",
 *   "Description": "Example.com AWS Cloud Map Public DNS Namespace",
 *   "Name": "example-public-dns.com"
 * };
 * const command = new CreatePublicDnsNamespaceCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "OperationId": "dns2voqozuhfet5kzxoxg-a-response-example"
 * }
 * *\/
 * // example id: createpublicdnsnamespace-example-1590114940910
 * ```
 *
 */
export class CreatePublicDnsNamespaceCommand extends $Command<
  CreatePublicDnsNamespaceCommandInput,
  CreatePublicDnsNamespaceCommandOutput,
  ServiceDiscoveryClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: CreatePublicDnsNamespaceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ServiceDiscoveryClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreatePublicDnsNamespaceCommandInput, CreatePublicDnsNamespaceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreatePublicDnsNamespaceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceDiscoveryClient";
    const commandName = "CreatePublicDnsNamespaceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Route53AutoNaming_v20170314",
        operation: "CreatePublicDnsNamespace",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: CreatePublicDnsNamespaceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreatePublicDnsNamespaceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreatePublicDnsNamespaceCommandOutput> {
    return de_CreatePublicDnsNamespaceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
