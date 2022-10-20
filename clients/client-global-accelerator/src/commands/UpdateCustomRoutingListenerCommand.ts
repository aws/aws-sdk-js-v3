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
  UpdateCustomRoutingListenerRequest,
  UpdateCustomRoutingListenerRequestFilterSensitiveLog,
  UpdateCustomRoutingListenerResponse,
  UpdateCustomRoutingListenerResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1UpdateCustomRoutingListenerCommand,
  serializeAws_json1_1UpdateCustomRoutingListenerCommand,
} from "../protocols/Aws_json1_1";

export interface UpdateCustomRoutingListenerCommandInput extends UpdateCustomRoutingListenerRequest {}
export interface UpdateCustomRoutingListenerCommandOutput
  extends UpdateCustomRoutingListenerResponse,
    __MetadataBearer {}

/**
 * <p>Update a listener for a custom routing accelerator. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, UpdateCustomRoutingListenerCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, UpdateCustomRoutingListenerCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * const client = new GlobalAcceleratorClient(config);
 * const command = new UpdateCustomRoutingListenerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateCustomRoutingListenerCommandInput} for command's `input` shape.
 * @see {@link UpdateCustomRoutingListenerCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for GlobalAcceleratorClient's `config` shape.
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
      inputFilterSensitiveLog: UpdateCustomRoutingListenerRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateCustomRoutingListenerResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateCustomRoutingListenerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateCustomRoutingListenerCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateCustomRoutingListenerCommandOutput> {
    return deserializeAws_json1_1UpdateCustomRoutingListenerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
