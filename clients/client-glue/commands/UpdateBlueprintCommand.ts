import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { UpdateBlueprintRequest, UpdateBlueprintResponse } from "../models/models_1";
import {
  deserializeAws_json1_1UpdateBlueprintCommand,
  serializeAws_json1_1UpdateBlueprintCommand,
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

export interface UpdateBlueprintCommandInput extends UpdateBlueprintRequest {}
export interface UpdateBlueprintCommandOutput extends UpdateBlueprintResponse, __MetadataBearer {}

/**
 * <p>Updates a registered blueprint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, UpdateBlueprintCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, UpdateBlueprintCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new UpdateBlueprintCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateBlueprintCommandInput} for command's `input` shape.
 * @see {@link UpdateBlueprintCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateBlueprintCommand extends $Command<
  UpdateBlueprintCommandInput,
  UpdateBlueprintCommandOutput,
  GlueClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateBlueprintCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlueClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateBlueprintCommandInput, UpdateBlueprintCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "UpdateBlueprintCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateBlueprintRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateBlueprintResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateBlueprintCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateBlueprintCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateBlueprintCommandOutput> {
    return deserializeAws_json1_1UpdateBlueprintCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
