// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  GetInstanceRequest,
  GetInstanceRequestFilterSensitiveLog,
  GetInstanceResponse,
  GetInstanceResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1GetInstanceCommand,
  serializeAws_json1_1GetInstanceCommand,
} from "../protocols/Aws_json1_1";
import { ServiceDiscoveryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceDiscoveryClient";

/**
 * The input for {@link GetInstanceCommand}.
 */
export interface GetInstanceCommandInput extends GetInstanceRequest {}
/**
 * The output of {@link GetInstanceCommand}.
 */
export interface GetInstanceCommandOutput extends GetInstanceResponse, __MetadataBearer {}

/**
 * <p>Gets information about a specified instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceDiscoveryClient, GetInstanceCommand } from "@aws-sdk/client-servicediscovery"; // ES Modules import
 * // const { ServiceDiscoveryClient, GetInstanceCommand } = require("@aws-sdk/client-servicediscovery"); // CommonJS import
 * const client = new ServiceDiscoveryClient(config);
 * const command = new GetInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetInstanceCommandInput} for command's `input` shape.
 * @see {@link GetInstanceCommandOutput} for command's `response` shape.
 * @see {@link ServiceDiscoveryClientResolvedConfig | config} for ServiceDiscoveryClient's `config` shape.
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
      inputFilterSensitiveLog: GetInstanceRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetInstanceResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetInstanceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetInstanceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetInstanceCommandOutput> {
    return deserializeAws_json1_1GetInstanceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
