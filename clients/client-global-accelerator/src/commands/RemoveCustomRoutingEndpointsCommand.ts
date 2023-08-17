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
import { RemoveCustomRoutingEndpointsRequest } from "../models/models_0";
import {
  de_RemoveCustomRoutingEndpointsCommand,
  se_RemoveCustomRoutingEndpointsCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link RemoveCustomRoutingEndpointsCommand}.
 */
export interface RemoveCustomRoutingEndpointsCommandInput extends RemoveCustomRoutingEndpointsRequest {}
/**
 * @public
 *
 * The output of {@link RemoveCustomRoutingEndpointsCommand}.
 */
export interface RemoveCustomRoutingEndpointsCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Remove endpoints from a custom routing accelerator.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, RemoveCustomRoutingEndpointsCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, RemoveCustomRoutingEndpointsCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * const client = new GlobalAcceleratorClient(config);
 * const input = { // RemoveCustomRoutingEndpointsRequest
 *   EndpointIds: [ // EndpointIds // required
 *     "STRING_VALUE",
 *   ],
 *   EndpointGroupArn: "STRING_VALUE", // required
 * };
 * const command = new RemoveCustomRoutingEndpointsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RemoveCustomRoutingEndpointsCommandInput - {@link RemoveCustomRoutingEndpointsCommandInput}
 * @returns {@link RemoveCustomRoutingEndpointsCommandOutput}
 * @see {@link RemoveCustomRoutingEndpointsCommandInput} for command's `input` shape.
 * @see {@link RemoveCustomRoutingEndpointsCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for GlobalAcceleratorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access permission.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>You can't use both of those options.</p>
 *
 * @throws {@link EndpointGroupNotFoundException} (client fault)
 *  <p>The endpoint group that you specified doesn't exist.</p>
 *
 * @throws {@link EndpointNotFoundException} (client fault)
 *  <p>The endpoint that you specified doesn't exist.</p>
 *
 * @throws {@link InternalServiceErrorException} (server fault)
 *  <p>There was an internal error for Global Accelerator.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>An argument that you specified is invalid.</p>
 *
 * @throws {@link GlobalAcceleratorServiceException}
 * <p>Base exception class for all service exceptions from GlobalAccelerator service.</p>
 *
 */
export class RemoveCustomRoutingEndpointsCommand extends $Command<
  RemoveCustomRoutingEndpointsCommandInput,
  RemoveCustomRoutingEndpointsCommandOutput,
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
  constructor(readonly input: RemoveCustomRoutingEndpointsCommandInput) {
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
  ): Handler<RemoveCustomRoutingEndpointsCommandInput, RemoveCustomRoutingEndpointsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RemoveCustomRoutingEndpointsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlobalAcceleratorClient";
    const commandName = "RemoveCustomRoutingEndpointsCommand";
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
  private serialize(input: RemoveCustomRoutingEndpointsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_RemoveCustomRoutingEndpointsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RemoveCustomRoutingEndpointsCommandOutput> {
    return de_RemoveCustomRoutingEndpointsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
