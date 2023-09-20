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

import { ListServicesRequest, ListServicesResponse } from "../models/models_0";
import { de_ListServicesCommand, se_ListServicesCommand } from "../protocols/Aws_json1_1";
import { ServiceDiscoveryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceDiscoveryClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListServicesCommand}.
 */
export interface ListServicesCommandInput extends ListServicesRequest {}
/**
 * @public
 *
 * The output of {@link ListServicesCommand}.
 */
export interface ListServicesCommandOutput extends ListServicesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists summary information for all the services that are associated with one or more
 *    specified namespaces.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceDiscoveryClient, ListServicesCommand } from "@aws-sdk/client-servicediscovery"; // ES Modules import
 * // const { ServiceDiscoveryClient, ListServicesCommand } = require("@aws-sdk/client-servicediscovery"); // CommonJS import
 * const client = new ServiceDiscoveryClient(config);
 * const input = { // ListServicesRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   Filters: [ // ServiceFilters
 *     { // ServiceFilter
 *       Name: "NAMESPACE_ID", // required
 *       Values: [ // FilterValues // required
 *         "STRING_VALUE",
 *       ],
 *       Condition: "EQ" || "IN" || "BETWEEN" || "BEGINS_WITH",
 *     },
 *   ],
 * };
 * const command = new ListServicesCommand(input);
 * const response = await client.send(command);
 * // { // ListServicesResponse
 * //   Services: [ // ServiceSummariesList
 * //     { // ServiceSummary
 * //       Id: "STRING_VALUE",
 * //       Arn: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Type: "HTTP" || "DNS_HTTP" || "DNS",
 * //       Description: "STRING_VALUE",
 * //       InstanceCount: Number("int"),
 * //       DnsConfig: { // DnsConfig
 * //         NamespaceId: "STRING_VALUE",
 * //         RoutingPolicy: "MULTIVALUE" || "WEIGHTED",
 * //         DnsRecords: [ // DnsRecordList // required
 * //           { // DnsRecord
 * //             Type: "SRV" || "A" || "AAAA" || "CNAME", // required
 * //             TTL: Number("long"), // required
 * //           },
 * //         ],
 * //       },
 * //       HealthCheckConfig: { // HealthCheckConfig
 * //         Type: "HTTP" || "HTTPS" || "TCP", // required
 * //         ResourcePath: "STRING_VALUE",
 * //         FailureThreshold: Number("int"),
 * //       },
 * //       HealthCheckCustomConfig: { // HealthCheckCustomConfig
 * //         FailureThreshold: Number("int"),
 * //       },
 * //       CreateDate: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListServicesCommandInput - {@link ListServicesCommandInput}
 * @returns {@link ListServicesCommandOutput}
 * @see {@link ListServicesCommandInput} for command's `input` shape.
 * @see {@link ListServicesCommandOutput} for command's `response` shape.
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
 * @example Example: List services
 * ```javascript
 * // Example: List services
 * const input = {};
 * const command = new ListServicesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Services": [
 *     {
 *       "Arn": "arn:aws:servicediscovery:us-west-2:123456789012:service/srv-p5zdwlg5uvvzjita",
 *       "CreateDate": 1587081768.334,
 *       "DnsConfig": {
 *         "DnsRecords": [
 *           {
 *             "TTL": 60,
 *             "Type": "A"
 *           }
 *         ],
 *         "RoutingPolicy": "MULTIVALUE"
 *       },
 *       "Id": "srv-p5zdwlg5uvvzjita",
 *       "Name": "myservice"
 *     }
 *   ]
 * }
 * *\/
 * // example id: example-list-services-1587236889840
 * ```
 *
 */
export class ListServicesCommand extends $Command<
  ListServicesCommandInput,
  ListServicesCommandOutput,
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
  constructor(readonly input: ListServicesCommandInput) {
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
  ): Handler<ListServicesCommandInput, ListServicesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListServicesCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceDiscoveryClient";
    const commandName = "ListServicesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Route53AutoNaming_v20170314",
        operation: "ListServices",
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
  private serialize(input: ListServicesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListServicesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListServicesCommandOutput> {
    return de_ListServicesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
