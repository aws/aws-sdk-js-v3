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

import { GetInstancesHealthStatusRequest, GetInstancesHealthStatusResponse } from "../models/models_0";
import { de_GetInstancesHealthStatusCommand, se_GetInstancesHealthStatusCommand } from "../protocols/Aws_json1_1";
import { ServiceDiscoveryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceDiscoveryClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetInstancesHealthStatusCommand}.
 */
export interface GetInstancesHealthStatusCommandInput extends GetInstancesHealthStatusRequest {}
/**
 * @public
 *
 * The output of {@link GetInstancesHealthStatusCommand}.
 */
export interface GetInstancesHealthStatusCommandOutput extends GetInstancesHealthStatusResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets the current health status (<code>Healthy</code>, <code>Unhealthy</code>, or
 *     <code>Unknown</code>) of one or more instances that are associated with a specified
 *    service.</p>
 *          <note>
 *             <p>There's a brief delay between when you register an instance and when the health status for
 *     the instance is available. </p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceDiscoveryClient, GetInstancesHealthStatusCommand } from "@aws-sdk/client-servicediscovery"; // ES Modules import
 * // const { ServiceDiscoveryClient, GetInstancesHealthStatusCommand } = require("@aws-sdk/client-servicediscovery"); // CommonJS import
 * const client = new ServiceDiscoveryClient(config);
 * const input = { // GetInstancesHealthStatusRequest
 *   ServiceId: "STRING_VALUE", // required
 *   Instances: [ // InstanceIdList
 *     "STRING_VALUE",
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetInstancesHealthStatusCommand(input);
 * const response = await client.send(command);
 * // { // GetInstancesHealthStatusResponse
 * //   Status: { // InstanceHealthStatusMap
 * //     "<keys>": "HEALTHY" || "UNHEALTHY" || "UNKNOWN",
 * //   },
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetInstancesHealthStatusCommandInput - {@link GetInstancesHealthStatusCommandInput}
 * @returns {@link GetInstancesHealthStatusCommandOutput}
 * @see {@link GetInstancesHealthStatusCommandInput} for command's `input` shape.
 * @see {@link GetInstancesHealthStatusCommandOutput} for command's `response` shape.
 * @see {@link ServiceDiscoveryClientResolvedConfig | config} for ServiceDiscoveryClient's `config` shape.
 *
 * @throws {@link InstanceNotFound} (client fault)
 *  <p>No instance exists with the specified ID, or the instance was recently registered, and
 *    information about the instance hasn't propagated yet.</p>
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
 * @example GetInstancesHealthStatus example
 * ```javascript
 * // This example gets the current health status of one or more instances that are associate with a specified service.
 * const input = {
 *   "ServiceId": "srv-e4anhexample0004"
 * };
 * const command = new GetInstancesHealthStatusCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Status": {
 *     "i-abcd1234": "HEALTHY",
 *     "i-abcd1235": "UNHEALTHY"
 *   }
 * }
 * *\/
 * // example id: getinstanceshealthstatus-example-1590115176146
 * ```
 *
 */
export class GetInstancesHealthStatusCommand extends $Command<
  GetInstancesHealthStatusCommandInput,
  GetInstancesHealthStatusCommandOutput,
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
  constructor(readonly input: GetInstancesHealthStatusCommandInput) {
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
  ): Handler<GetInstancesHealthStatusCommandInput, GetInstancesHealthStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetInstancesHealthStatusCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceDiscoveryClient";
    const commandName = "GetInstancesHealthStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Route53AutoNaming_v20170314",
        operation: "GetInstancesHealthStatus",
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
  private serialize(input: GetInstancesHealthStatusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetInstancesHealthStatusCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetInstancesHealthStatusCommandOutput> {
    return de_GetInstancesHealthStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
