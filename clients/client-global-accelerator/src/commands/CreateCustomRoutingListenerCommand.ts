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
  CreateCustomRoutingListenerRequest,
  CreateCustomRoutingListenerRequestFilterSensitiveLog,
  CreateCustomRoutingListenerResponse,
  CreateCustomRoutingListenerResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateCustomRoutingListenerCommand,
  serializeAws_json1_1CreateCustomRoutingListenerCommand,
} from "../protocols/Aws_json1_1";

export interface CreateCustomRoutingListenerCommandInput extends CreateCustomRoutingListenerRequest {}
export interface CreateCustomRoutingListenerCommandOutput
  extends CreateCustomRoutingListenerResponse,
    __MetadataBearer {}

/**
 * <p>Create a listener to process inbound connections from clients to a custom routing accelerator.
 * 			Connections arrive to assigned static IP addresses on the port range that you specify. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, CreateCustomRoutingListenerCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, CreateCustomRoutingListenerCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * const client = new GlobalAcceleratorClient(config);
 * const command = new CreateCustomRoutingListenerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateCustomRoutingListenerCommandInput} for command's `input` shape.
 * @see {@link CreateCustomRoutingListenerCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for GlobalAcceleratorClient's `config` shape.
 *
 */
export class CreateCustomRoutingListenerCommand extends $Command<
  CreateCustomRoutingListenerCommandInput,
  CreateCustomRoutingListenerCommandOutput,
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

  constructor(readonly input: CreateCustomRoutingListenerCommandInput) {
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
  ): Handler<CreateCustomRoutingListenerCommandInput, CreateCustomRoutingListenerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateCustomRoutingListenerCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlobalAcceleratorClient";
    const commandName = "CreateCustomRoutingListenerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateCustomRoutingListenerRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateCustomRoutingListenerResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateCustomRoutingListenerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateCustomRoutingListenerCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateCustomRoutingListenerCommandOutput> {
    return deserializeAws_json1_1CreateCustomRoutingListenerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
