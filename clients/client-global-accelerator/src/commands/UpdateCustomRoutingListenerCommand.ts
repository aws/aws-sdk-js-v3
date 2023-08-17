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

import {
  GlobalAcceleratorClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../GlobalAcceleratorClient";
import { UpdateCustomRoutingListenerRequest, UpdateCustomRoutingListenerResponse } from "../models/models_0";
import { de_UpdateCustomRoutingListenerCommand, se_UpdateCustomRoutingListenerCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateCustomRoutingListenerCommand}.
 */
export interface UpdateCustomRoutingListenerCommandInput extends UpdateCustomRoutingListenerRequest {}
/**
 * @public
 *
 * The output of {@link UpdateCustomRoutingListenerCommand}.
 */
export interface UpdateCustomRoutingListenerCommandOutput
  extends UpdateCustomRoutingListenerResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Update a listener for a custom routing accelerator. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, UpdateCustomRoutingListenerCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, UpdateCustomRoutingListenerCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * const client = new GlobalAcceleratorClient(config);
 * const input = { // UpdateCustomRoutingListenerRequest
 *   ListenerArn: "STRING_VALUE", // required
 *   PortRanges: [ // PortRanges // required
 *     { // PortRange
 *       FromPort: Number("int"),
 *       ToPort: Number("int"),
 *     },
 *   ],
 * };
 * const command = new UpdateCustomRoutingListenerCommand(input);
 * const response = await client.send(command);
 * // { // UpdateCustomRoutingListenerResponse
 * //   Listener: { // CustomRoutingListener
 * //     ListenerArn: "STRING_VALUE",
 * //     PortRanges: [ // PortRanges
 * //       { // PortRange
 * //         FromPort: Number("int"),
 * //         ToPort: Number("int"),
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateCustomRoutingListenerCommandInput - {@link UpdateCustomRoutingListenerCommandInput}
 * @returns {@link UpdateCustomRoutingListenerCommandOutput}
 * @see {@link UpdateCustomRoutingListenerCommandInput} for command's `input` shape.
 * @see {@link UpdateCustomRoutingListenerCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for GlobalAcceleratorClient's `config` shape.
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
export class UpdateCustomRoutingListenerCommand extends $Command<
  UpdateCustomRoutingListenerCommandInput,
  UpdateCustomRoutingListenerCommandOutput,
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
  constructor(readonly input: UpdateCustomRoutingListenerCommandInput) {
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
  ): Handler<UpdateCustomRoutingListenerCommandInput, UpdateCustomRoutingListenerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateCustomRoutingListenerCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlobalAcceleratorClient";
    const commandName = "UpdateCustomRoutingListenerCommand";
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
  private serialize(input: UpdateCustomRoutingListenerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateCustomRoutingListenerCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateCustomRoutingListenerCommandOutput> {
    return de_UpdateCustomRoutingListenerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
