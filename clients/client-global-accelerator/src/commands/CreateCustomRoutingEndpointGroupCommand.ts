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

import {
  GlobalAcceleratorClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../GlobalAcceleratorClient";
import { CreateCustomRoutingEndpointGroupRequest, CreateCustomRoutingEndpointGroupResponse } from "../models/models_0";
import {
  de_CreateCustomRoutingEndpointGroupCommand,
  se_CreateCustomRoutingEndpointGroupCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateCustomRoutingEndpointGroupCommand}.
 */
export interface CreateCustomRoutingEndpointGroupCommandInput extends CreateCustomRoutingEndpointGroupRequest {}
/**
 * @public
 *
 * The output of {@link CreateCustomRoutingEndpointGroupCommand}.
 */
export interface CreateCustomRoutingEndpointGroupCommandOutput
  extends CreateCustomRoutingEndpointGroupResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Create an endpoint group for the specified listener for a custom routing accelerator.
 * 	    An endpoint group is a collection of endpoints in one Amazon Web Services
 * 		Region. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, CreateCustomRoutingEndpointGroupCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, CreateCustomRoutingEndpointGroupCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * const client = new GlobalAcceleratorClient(config);
 * const input = { // CreateCustomRoutingEndpointGroupRequest
 *   ListenerArn: "STRING_VALUE", // required
 *   EndpointGroupRegion: "STRING_VALUE", // required
 *   DestinationConfigurations: [ // CustomRoutingDestinationConfigurations // required
 *     { // CustomRoutingDestinationConfiguration
 *       FromPort: Number("int"), // required
 *       ToPort: Number("int"), // required
 *       Protocols: [ // CustomRoutingProtocols // required
 *         "TCP" || "UDP",
 *       ],
 *     },
 *   ],
 *   IdempotencyToken: "STRING_VALUE", // required
 * };
 * const command = new CreateCustomRoutingEndpointGroupCommand(input);
 * const response = await client.send(command);
 * // { // CreateCustomRoutingEndpointGroupResponse
 * //   EndpointGroup: { // CustomRoutingEndpointGroup
 * //     EndpointGroupArn: "STRING_VALUE",
 * //     EndpointGroupRegion: "STRING_VALUE",
 * //     DestinationDescriptions: [ // CustomRoutingDestinationDescriptions
 * //       { // CustomRoutingDestinationDescription
 * //         FromPort: Number("int"),
 * //         ToPort: Number("int"),
 * //         Protocols: [ // Protocols
 * //           "TCP" || "UDP",
 * //         ],
 * //       },
 * //     ],
 * //     EndpointDescriptions: [ // CustomRoutingEndpointDescriptions
 * //       { // CustomRoutingEndpointDescription
 * //         EndpointId: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateCustomRoutingEndpointGroupCommandInput - {@link CreateCustomRoutingEndpointGroupCommandInput}
 * @returns {@link CreateCustomRoutingEndpointGroupCommandOutput}
 * @see {@link CreateCustomRoutingEndpointGroupCommandInput} for command's `input` shape.
 * @see {@link CreateCustomRoutingEndpointGroupCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidPortRangeException} (client fault)
 *  <p>The port numbers that you specified are not valid numbers or are not unique for this accelerator.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>Processing your request would cause you to exceed an Global Accelerator limit.</p>
 *
 * @throws {@link ListenerNotFoundException} (client fault)
 *  <p>The listener that you specified doesn't exist.</p>
 *
 * @throws {@link GlobalAcceleratorServiceException}
 * <p>Base exception class for all service exceptions from GlobalAccelerator service.</p>
 *
 */
export class CreateCustomRoutingEndpointGroupCommand extends $Command<
  CreateCustomRoutingEndpointGroupCommandInput,
  CreateCustomRoutingEndpointGroupCommandOutput,
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
  constructor(readonly input: CreateCustomRoutingEndpointGroupCommandInput) {
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
  ): Handler<CreateCustomRoutingEndpointGroupCommandInput, CreateCustomRoutingEndpointGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateCustomRoutingEndpointGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlobalAcceleratorClient";
    const commandName = "CreateCustomRoutingEndpointGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "GlobalAccelerator_V20180706",
        operation: "CreateCustomRoutingEndpointGroup",
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
  private serialize(
    input: CreateCustomRoutingEndpointGroupCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_CreateCustomRoutingEndpointGroupCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateCustomRoutingEndpointGroupCommandOutput> {
    return de_CreateCustomRoutingEndpointGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
