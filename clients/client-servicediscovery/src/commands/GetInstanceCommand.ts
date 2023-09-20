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

import { GetInstanceRequest, GetInstanceResponse } from "../models/models_0";
import { de_GetInstanceCommand, se_GetInstanceCommand } from "../protocols/Aws_json1_1";
import { ServiceDiscoveryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceDiscoveryClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetInstanceCommand}.
 */
export interface GetInstanceCommandInput extends GetInstanceRequest {}
/**
 * @public
 *
 * The output of {@link GetInstanceCommand}.
 */
export interface GetInstanceCommandOutput extends GetInstanceResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets information about a specified instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceDiscoveryClient, GetInstanceCommand } from "@aws-sdk/client-servicediscovery"; // ES Modules import
 * // const { ServiceDiscoveryClient, GetInstanceCommand } = require("@aws-sdk/client-servicediscovery"); // CommonJS import
 * const client = new ServiceDiscoveryClient(config);
 * const input = { // GetInstanceRequest
 *   ServiceId: "STRING_VALUE", // required
 *   InstanceId: "STRING_VALUE", // required
 * };
 * const command = new GetInstanceCommand(input);
 * const response = await client.send(command);
 * // { // GetInstanceResponse
 * //   Instance: { // Instance
 * //     Id: "STRING_VALUE", // required
 * //     CreatorRequestId: "STRING_VALUE",
 * //     Attributes: { // Attributes
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetInstanceCommandInput - {@link GetInstanceCommandInput}
 * @returns {@link GetInstanceCommandOutput}
 * @see {@link GetInstanceCommandInput} for command's `input` shape.
 * @see {@link GetInstanceCommandOutput} for command's `response` shape.
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
 * @example GetInstance example
 * ```javascript
 * // This example gets information about a specified instance.
 * const input = {
 *   "InstanceId": "i-abcd1234",
 *   "ServiceId": "srv-e4anhexample0004"
 * };
 * const command = new GetInstanceCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Instance": {
 *     "Attributes": {
 *       "AWS_INSTANCE_IPV4": "192.0.2.44",
 *       "AWS_INSTANCE_PORT": "80",
 *       "color": "green",
 *       "region": "us-west-2",
 *       "stage": "beta"
 *     },
 *     "Id": "i-abcd1234"
 *   }
 * }
 * *\/
 * // example id: getinstance-example-1590115065598
 * ```
 *
 */
export class GetInstanceCommand extends $Command<
  GetInstanceCommandInput,
  GetInstanceCommandOutput,
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
  constructor(readonly input: GetInstanceCommandInput) {
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
  ): Handler<GetInstanceCommandInput, GetInstanceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetInstanceCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceDiscoveryClient";
    const commandName = "GetInstanceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Route53AutoNaming_v20170314",
        operation: "GetInstance",
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
  private serialize(input: GetInstanceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetInstanceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetInstanceCommandOutput> {
    return de_GetInstanceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
