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
import {
  RemoveCustomRoutingEndpointsRequest,
  RemoveCustomRoutingEndpointsRequestFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1RemoveCustomRoutingEndpointsCommand,
  serializeAws_json1_1RemoveCustomRoutingEndpointsCommand,
} from "../protocols/Aws_json1_1";

export interface RemoveCustomRoutingEndpointsCommandInput extends RemoveCustomRoutingEndpointsRequest {}
export interface RemoveCustomRoutingEndpointsCommandOutput extends __MetadataBearer {}

/**
 * <p>Remove endpoints from a custom routing accelerator.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, RemoveCustomRoutingEndpointsCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, RemoveCustomRoutingEndpointsCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * const client = new GlobalAcceleratorClient(config);
 * const command = new RemoveCustomRoutingEndpointsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RemoveCustomRoutingEndpointsCommandInput} for command's `input` shape.
 * @see {@link RemoveCustomRoutingEndpointsCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for GlobalAcceleratorClient's `config` shape.
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
      inputFilterSensitiveLog: RemoveCustomRoutingEndpointsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RemoveCustomRoutingEndpointsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1RemoveCustomRoutingEndpointsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RemoveCustomRoutingEndpointsCommandOutput> {
    return deserializeAws_json1_1RemoveCustomRoutingEndpointsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
