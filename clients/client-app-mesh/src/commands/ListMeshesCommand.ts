import { AppMeshClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppMeshClient";
import { ListMeshesInput, ListMeshesOutput } from "../models/models_0";
import {
  deserializeAws_restJson1ListMeshesCommand,
  serializeAws_restJson1ListMeshesCommand,
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

export interface ListMeshesCommandInput extends ListMeshesInput {}
export interface ListMeshesCommandOutput extends ListMeshesOutput, __MetadataBearer {}

/**
 * <p>Returns a list of existing service meshes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppMeshClient, ListMeshesCommand } from "@aws-sdk/client-app-mesh"; // ES Modules import
 * // const { AppMeshClient, ListMeshesCommand } = require("@aws-sdk/client-app-mesh"); // CommonJS import
 * const client = new AppMeshClient(config);
 * const command = new ListMeshesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListMeshesCommandInput} for command's `input` shape.
 * @see {@link ListMeshesCommandOutput} for command's `response` shape.
 * @see {@link AppMeshClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListMeshesCommand extends $Command<
  ListMeshesCommandInput,
  ListMeshesCommandOutput,
  AppMeshClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListMeshesCommandInput) {
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
  ): Handler<ListMeshesCommandInput, ListMeshesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppMeshClient";
    const commandName = "ListMeshesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListMeshesInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListMeshesOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListMeshesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListMeshesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListMeshesCommandOutput> {
    return deserializeAws_restJson1ListMeshesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
