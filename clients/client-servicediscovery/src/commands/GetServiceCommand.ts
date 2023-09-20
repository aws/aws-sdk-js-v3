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

import { GetServiceRequest, GetServiceResponse } from "../models/models_0";
import { de_GetServiceCommand, se_GetServiceCommand } from "../protocols/Aws_json1_1";
import { ServiceDiscoveryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceDiscoveryClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
 * @public
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
 * @example GetService Example
 * ```javascript
 * // This example gets the settings for a specified service.
 * const input = {
 *   "Id": "srv-e4anhexample0004"
 * };
 * const command = new GetServiceCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Service": {
 *     "Arn": "arn:aws:servicediscovery:us-west-2:123456789012:service/srv-e4anhexample0004",
 *     "CreateDate": "20181118T211707Z",
 *     "CreatorRequestId": "example-creator-request-id-0004",
 *     "Description": "Example.com AWS Cloud Map HTTP Service",
 *     "HealthCheckConfig": {
 *       "FailureThreshold": 3,
 *       "ResourcePath": "/",
 *       "Type": "HTTPS"
 *     },
 *     "Id": "srv-e4anhexample0004",
 *     "Name": "example-http-service",
 *     "NamespaceId": "ns-e4anhexample0004"
 *   }
 * }
 * *\/
 * // example id: getservice-example-1590117234294
 * ```
 *
 */
export class GetServiceCommand extends $Command<
  GetServiceCommandInput,
  GetServiceCommandOutput,
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
  constructor(readonly input: GetServiceCommandInput) {
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
  ): Handler<GetServiceCommandInput, GetServiceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetServiceCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceDiscoveryClient";
    const commandName = "GetServiceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Route53AutoNaming_v20170314",
        operation: "GetService",
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
  private serialize(input: GetServiceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetServiceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetServiceCommandOutput> {
    return de_GetServiceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
