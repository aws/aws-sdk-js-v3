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
} from "@smithy/types";

import { GetNamespaceRequest, GetNamespaceResponse } from "../models/models_0";
import { de_GetNamespaceCommand, se_GetNamespaceCommand } from "../protocols/Aws_json1_1";
import { ServiceDiscoveryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceDiscoveryClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
 * @public
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
 *  <p>One or more specified values aren't valid. For example, a required value might be missing, a
 *    numeric value might be outside the allowed range, or a string value might exceed length
 *    constraints.</p>
 *
 * @throws {@link NamespaceNotFound} (client fault)
 *  <p>No namespace exists with the specified ID.</p>
 *
 * @throws {@link ServiceDiscoveryServiceException}
 * <p>Base exception class for all service exceptions from ServiceDiscovery service.</p>
 *
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
export class GetNamespaceCommand extends $Command<
  GetNamespaceCommandInput,
  GetNamespaceCommandOutput,
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
  constructor(readonly input: GetNamespaceCommandInput) {
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
  ): Handler<GetNamespaceCommandInput, GetNamespaceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetNamespaceCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceDiscoveryClient";
    const commandName = "GetNamespaceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: GetNamespaceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetNamespaceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetNamespaceCommandOutput> {
    return de_GetNamespaceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
