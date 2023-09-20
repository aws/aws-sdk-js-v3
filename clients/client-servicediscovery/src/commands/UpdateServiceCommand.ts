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

import { UpdateServiceRequest, UpdateServiceResponse } from "../models/models_0";
import { de_UpdateServiceCommand, se_UpdateServiceCommand } from "../protocols/Aws_json1_1";
import { ServiceDiscoveryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceDiscoveryClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateServiceCommand}.
 */
export interface UpdateServiceCommandInput extends UpdateServiceRequest {}
/**
 * @public
 *
 * The output of {@link UpdateServiceCommand}.
 */
export interface UpdateServiceCommandOutput extends UpdateServiceResponse, __MetadataBearer {}

/**
 * @public
 * <p>Submits a request to perform the following operations:</p>
 *          <ul>
 *             <li>
 *                <p>Update the TTL setting for existing <code>DnsRecords</code> configurations</p>
 *             </li>
 *             <li>
 *                <p>Add, update, or delete <code>HealthCheckConfig</code> for a specified service</p>
 *                <note>
 *                   <p>You can't add, update, or delete a <code>HealthCheckCustomConfig</code>
 *       configuration.</p>
 *                </note>
 *             </li>
 *          </ul>
 *          <p>For public and private DNS namespaces, note the following:</p>
 *          <ul>
 *             <li>
 *                <p>If you omit any existing <code>DnsRecords</code> or <code>HealthCheckConfig</code>
 *      configurations from an <code>UpdateService</code> request, the configurations are deleted from
 *      the service.</p>
 *             </li>
 *             <li>
 *                <p>If you omit an existing <code>HealthCheckCustomConfig</code> configuration from an
 *       <code>UpdateService</code> request, the configuration isn't deleted from the service.</p>
 *             </li>
 *          </ul>
 *          <p>When you update settings for a service, Cloud Map also updates the corresponding settings
 *    in all the records and health checks that were created by using the specified service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceDiscoveryClient, UpdateServiceCommand } from "@aws-sdk/client-servicediscovery"; // ES Modules import
 * // const { ServiceDiscoveryClient, UpdateServiceCommand } = require("@aws-sdk/client-servicediscovery"); // CommonJS import
 * const client = new ServiceDiscoveryClient(config);
 * const input = { // UpdateServiceRequest
 *   Id: "STRING_VALUE", // required
 *   Service: { // ServiceChange
 *     Description: "STRING_VALUE",
 *     DnsConfig: { // DnsConfigChange
 *       DnsRecords: [ // DnsRecordList // required
 *         { // DnsRecord
 *           Type: "SRV" || "A" || "AAAA" || "CNAME", // required
 *           TTL: Number("long"), // required
 *         },
 *       ],
 *     },
 *     HealthCheckConfig: { // HealthCheckConfig
 *       Type: "HTTP" || "HTTPS" || "TCP", // required
 *       ResourcePath: "STRING_VALUE",
 *       FailureThreshold: Number("int"),
 *     },
 *   },
 * };
 * const command = new UpdateServiceCommand(input);
 * const response = await client.send(command);
 * // { // UpdateServiceResponse
 * //   OperationId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateServiceCommandInput - {@link UpdateServiceCommandInput}
 * @returns {@link UpdateServiceCommandOutput}
 * @see {@link UpdateServiceCommandInput} for command's `input` shape.
 * @see {@link UpdateServiceCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceNotFound} (client fault)
 *  <p>No service exists with the specified ID.</p>
 *
 * @throws {@link ServiceDiscoveryServiceException}
 * <p>Base exception class for all service exceptions from ServiceDiscovery service.</p>
 *
 * @example UpdateService Example
 * ```javascript
 * // This example submits a request to replace the DnsConfig and HealthCheckConfig settings of a specified service.
 * const input = {
 *   "Id": "srv-e4anhexample0004",
 *   "Service": {
 *     "DnsConfig": {
 *       "DnsRecords": [
 *         {
 *           "TTL": 60,
 *           "Type": "A"
 *         }
 *       ]
 *     },
 *     "HealthCheckConfig": {
 *       "FailureThreshold": 2,
 *       "ResourcePath": "/",
 *       "Type": "HTTP"
 *     }
 *   }
 * };
 * const command = new UpdateServiceCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "OperationId": "m35hsdrkxwjffm3xef4bxyy6vc3ewakx-jdn3y5g5"
 * }
 * *\/
 * // example id: updateservice-example-1590117830880
 * ```
 *
 */
export class UpdateServiceCommand extends $Command<
  UpdateServiceCommandInput,
  UpdateServiceCommandOutput,
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
  constructor(readonly input: UpdateServiceCommandInput) {
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
  ): Handler<UpdateServiceCommandInput, UpdateServiceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, UpdateServiceCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceDiscoveryClient";
    const commandName = "UpdateServiceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Route53AutoNaming_v20170314",
        operation: "UpdateService",
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
  private serialize(input: UpdateServiceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateServiceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateServiceCommandOutput> {
    return de_UpdateServiceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
