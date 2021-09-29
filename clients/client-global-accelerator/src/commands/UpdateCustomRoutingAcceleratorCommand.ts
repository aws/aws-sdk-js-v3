import {
  GlobalAcceleratorClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../GlobalAcceleratorClient";
import { UpdateCustomRoutingAcceleratorRequest, UpdateCustomRoutingAcceleratorResponse } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateCustomRoutingAcceleratorCommand,
  serializeAws_json1_1UpdateCustomRoutingAcceleratorCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface UpdateCustomRoutingAcceleratorCommandInput extends UpdateCustomRoutingAcceleratorRequest {}
export interface UpdateCustomRoutingAcceleratorCommandOutput
  extends UpdateCustomRoutingAcceleratorResponse,
    __MetadataBearer {}

/**
 * <p>Update a custom routing accelerator. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, UpdateCustomRoutingAcceleratorCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, UpdateCustomRoutingAcceleratorCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * const client = new GlobalAcceleratorClient(config);
 * const command = new UpdateCustomRoutingAcceleratorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateCustomRoutingAcceleratorCommandInput} for command's `input` shape.
 * @see {@link UpdateCustomRoutingAcceleratorCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateCustomRoutingAcceleratorCommand extends $Command<
  UpdateCustomRoutingAcceleratorCommandInput,
  UpdateCustomRoutingAcceleratorCommandOutput,
  GlobalAcceleratorClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateCustomRoutingAcceleratorCommandInput) {
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
  ): Handler<UpdateCustomRoutingAcceleratorCommandInput, UpdateCustomRoutingAcceleratorCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlobalAcceleratorClient";
    const commandName = "UpdateCustomRoutingAcceleratorCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateCustomRoutingAcceleratorRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateCustomRoutingAcceleratorResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: UpdateCustomRoutingAcceleratorCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateCustomRoutingAcceleratorCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateCustomRoutingAcceleratorCommandOutput> {
    return deserializeAws_json1_1UpdateCustomRoutingAcceleratorCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
