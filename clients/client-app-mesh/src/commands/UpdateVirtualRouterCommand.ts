import { AppMeshClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppMeshClient";
import { UpdateVirtualRouterInput, UpdateVirtualRouterOutput } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateVirtualRouterCommand,
  serializeAws_restJson1UpdateVirtualRouterCommand,
} from "../protocols/Aws_restJson1";
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

export interface UpdateVirtualRouterCommandInput extends UpdateVirtualRouterInput {}
export interface UpdateVirtualRouterCommandOutput extends UpdateVirtualRouterOutput, __MetadataBearer {}

/**
 * <p>Updates an existing virtual router in a specified service mesh.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppMeshClient, UpdateVirtualRouterCommand } from "@aws-sdk/client-app-mesh"; // ES Modules import
 * // const { AppMeshClient, UpdateVirtualRouterCommand } = require("@aws-sdk/client-app-mesh"); // CommonJS import
 * const client = new AppMeshClient(config);
 * const command = new UpdateVirtualRouterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateVirtualRouterCommandInput} for command's `input` shape.
 * @see {@link UpdateVirtualRouterCommandOutput} for command's `response` shape.
 * @see {@link AppMeshClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateVirtualRouterCommand extends $Command<
  UpdateVirtualRouterCommandInput,
  UpdateVirtualRouterCommandOutput,
  AppMeshClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateVirtualRouterCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppMeshClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateVirtualRouterCommandInput, UpdateVirtualRouterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppMeshClient";
    const commandName = "UpdateVirtualRouterCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateVirtualRouterInput.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateVirtualRouterOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateVirtualRouterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateVirtualRouterCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateVirtualRouterCommandOutput> {
    return deserializeAws_restJson1UpdateVirtualRouterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
