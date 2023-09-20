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

import { ListNamespacesRequest, ListNamespacesResponse } from "../models/models_0";
import { de_ListNamespacesCommand, se_ListNamespacesCommand } from "../protocols/Aws_json1_1";
import { ServiceDiscoveryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceDiscoveryClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListNamespacesCommand}.
 */
export interface ListNamespacesCommandInput extends ListNamespacesRequest {}
/**
 * @public
 *
 * The output of {@link ListNamespacesCommand}.
 */
export interface ListNamespacesCommandOutput extends ListNamespacesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists summary information about the namespaces that were created by the current Amazon Web Services account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceDiscoveryClient, ListNamespacesCommand } from "@aws-sdk/client-servicediscovery"; // ES Modules import
 * // const { ServiceDiscoveryClient, ListNamespacesCommand } = require("@aws-sdk/client-servicediscovery"); // CommonJS import
 * const client = new ServiceDiscoveryClient(config);
 * const input = { // ListNamespacesRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   Filters: [ // NamespaceFilters
 *     { // NamespaceFilter
 *       Name: "TYPE" || "NAME" || "HTTP_NAME", // required
 *       Values: [ // FilterValues // required
 *         "STRING_VALUE",
 *       ],
 *       Condition: "EQ" || "IN" || "BETWEEN" || "BEGINS_WITH",
 *     },
 *   ],
 * };
 * const command = new ListNamespacesCommand(input);
 * const response = await client.send(command);
 * // { // ListNamespacesResponse
 * //   Namespaces: [ // NamespaceSummariesList
 * //     { // NamespaceSummary
 * //       Id: "STRING_VALUE",
 * //       Arn: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Type: "DNS_PUBLIC" || "DNS_PRIVATE" || "HTTP",
 * //       Description: "STRING_VALUE",
 * //       ServiceCount: Number("int"),
 * //       Properties: { // NamespaceProperties
 * //         DnsProperties: { // DnsProperties
 * //           HostedZoneId: "STRING_VALUE",
 * //           SOA: { // SOA
 * //             TTL: Number("long"), // required
 * //           },
 * //         },
 * //         HttpProperties: { // HttpProperties
 * //           HttpName: "STRING_VALUE",
 * //         },
 * //       },
 * //       CreateDate: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListNamespacesCommandInput - {@link ListNamespacesCommandInput}
 * @returns {@link ListNamespacesCommandOutput}
 * @see {@link ListNamespacesCommandInput} for command's `input` shape.
 * @see {@link ListNamespacesCommandOutput} for command's `response` shape.
 * @see {@link ServiceDiscoveryClientResolvedConfig | config} for ServiceDiscoveryClient's `config` shape.
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>One or more specified values aren't valid. For example, a required value might be missing, a
 *    numeric value might be outside the allowed range, or a string value might exceed length
 *    constraints.</p>
 *
 * @throws {@link ServiceDiscoveryServiceException}
 * <p>Base exception class for all service exceptions from ServiceDiscovery service.</p>
 *
 * @example Example: List namespaces
 * ```javascript
 * // Example: List namespaces
 * const input = {};
 * const command = new ListNamespacesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Namespaces": [
 *     {
 *       "Arn": "arn:aws:servicediscovery:us-west-2:123456789012:namespace/ns-a3ccy2e7e3a7rile",
 *       "CreateDate": 1585354387.357,
 *       "Id": "ns-a3ccy2e7e3a7rile",
 *       "Name": "local",
 *       "Properties": {
 *         "DnsProperties": {
 *           "HostedZoneId": "Z06752353VBUDTC32S84S"
 *         },
 *         "HttpProperties": {
 *           "HttpName": "local"
 *         }
 *       },
 *       "Type": "DNS_PRIVATE"
 *     },
 *     {
 *       "Arn": "arn:aws:servicediscovery:us-west-2:123456789012:namespace/ns-pocfyjtrsmwtvcxx",
 *       "CreateDate": 1586468974.698,
 *       "Description": "My second namespace",
 *       "Id": "ns-pocfyjtrsmwtvcxx",
 *       "Name": "My-second-namespace",
 *       "Properties": {
 *         "DnsProperties": {},
 *         "HttpProperties": {
 *           "HttpName": "My-second-namespace"
 *         }
 *       },
 *       "Type": "HTTP"
 *     },
 *     {
 *       "Arn": "arn:aws:servicediscovery:us-west-2:123456789012:namespace/ns-ylexjili4cdxy3xm",
 *       "CreateDate": 1587055896.798,
 *       "Id": "ns-ylexjili4cdxy3xm",
 *       "Name": "example.com",
 *       "Properties": {
 *         "DnsProperties": {
 *           "HostedZoneId": "Z09983722P0QME1B3KC8I"
 *         },
 *         "HttpProperties": {
 *           "HttpName": "example.com"
 *         }
 *       },
 *       "Type": "DNS_PRIVATE"
 *     }
 *   ]
 * }
 * *\/
 * // example id: example-list-namespaces-1587401553154
 * ```
 *
 */
export class ListNamespacesCommand extends $Command<
  ListNamespacesCommandInput,
  ListNamespacesCommandOutput,
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
  constructor(readonly input: ListNamespacesCommandInput) {
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
  ): Handler<ListNamespacesCommandInput, ListNamespacesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListNamespacesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceDiscoveryClient";
    const commandName = "ListNamespacesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Route53AutoNaming_v20170314",
        operation: "ListNamespaces",
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
  private serialize(input: ListNamespacesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListNamespacesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListNamespacesCommandOutput> {
    return de_ListNamespacesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
