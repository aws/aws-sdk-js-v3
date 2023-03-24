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
  GlobalAcceleratorClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../GlobalAcceleratorClient";
import { CreateEndpointGroupRequest, CreateEndpointGroupResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreateEndpointGroupCommand,
  serializeAws_json1_1CreateEndpointGroupCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link CreateEndpointGroupCommand}.
 */
export interface CreateEndpointGroupCommandInput extends CreateEndpointGroupRequest {}
/**
 * @public
 *
 * The output of {@link CreateEndpointGroupCommand}.
 */
export interface CreateEndpointGroupCommandOutput extends CreateEndpointGroupResponse, __MetadataBearer {}

/**
 * @public
 * <p>Create an endpoint group for the specified listener. An endpoint group is a collection of endpoints in one Amazon Web Services
 * 			Region. A resource must be valid and active when you add it as an endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, CreateEndpointGroupCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, CreateEndpointGroupCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * const client = new GlobalAcceleratorClient(config);
 * const input = {
 *   ListenerArn: "STRING_VALUE", // required
 *   EndpointGroupRegion: "STRING_VALUE", // required
 *   EndpointConfigurations: [
 *     {
 *       EndpointId: "STRING_VALUE",
 *       Weight: Number("int"),
 *       ClientIPPreservationEnabled: true || false,
 *     },
 *   ],
 *   TrafficDialPercentage: Number("float"),
 *   HealthCheckPort: Number("int"),
 *   HealthCheckProtocol: "TCP" || "HTTP" || "HTTPS",
 *   HealthCheckPath: "STRING_VALUE",
 *   HealthCheckIntervalSeconds: Number("int"),
 *   ThresholdCount: Number("int"),
 *   IdempotencyToken: "STRING_VALUE", // required
 *   PortOverrides: [
 *     {
 *       ListenerPort: Number("int"),
 *       EndpointPort: Number("int"),
 *     },
 *   ],
 * };
 * const command = new CreateEndpointGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param CreateEndpointGroupCommandInput - {@link CreateEndpointGroupCommandInput}
 * @returns {@link CreateEndpointGroupCommandOutput}
 * @see {@link CreateEndpointGroupCommandInput} for command's `input` shape.
 * @see {@link CreateEndpointGroupCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for GlobalAcceleratorClient's `config` shape.
 *
 * @throws {@link AcceleratorNotFoundException} (client fault)
 *  <p>The accelerator that you specified doesn't exist.</p>
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access permission.</p>
 *
 * @throws {@link EndpointGroupAlreadyExistsException} (client fault)
 *  <p>The endpoint group that you specified already exists.</p>
 *
 * @throws {@link InternalServiceErrorException} (server fault)
 *  <p>There was an internal error for Global Accelerator.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>An argument that you specified is invalid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>Processing your request would cause you to exceed an Global Accelerator limit.</p>
 *
 * @throws {@link ListenerNotFoundException} (client fault)
 *  <p>The listener that you specified doesn't exist.</p>
 *
 *
 */
export class CreateEndpointGroupCommand extends $Command<
  CreateEndpointGroupCommandInput,
  CreateEndpointGroupCommandOutput,
  GlobalAcceleratorClientResolvedConfig
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
  constructor(readonly input: CreateEndpointGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlobalAcceleratorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateEndpointGroupCommandInput, CreateEndpointGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateEndpointGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlobalAcceleratorClient";
    const commandName = "CreateEndpointGroupCommand";
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
  private serialize(input: CreateEndpointGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateEndpointGroupCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateEndpointGroupCommandOutput> {
    return deserializeAws_json1_1CreateEndpointGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
