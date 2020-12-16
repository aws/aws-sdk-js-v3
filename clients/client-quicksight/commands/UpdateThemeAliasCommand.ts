import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { UpdateThemeAliasRequest, UpdateThemeAliasResponse } from "../models/models_1";
import {
  deserializeAws_restJson1UpdateThemeAliasCommand,
  serializeAws_restJson1UpdateThemeAliasCommand,
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

export type UpdateThemeAliasCommandInput = UpdateThemeAliasRequest;
export type UpdateThemeAliasCommandOutput = UpdateThemeAliasResponse & __MetadataBearer;

/**
 * <p>Updates an alias of a theme.</p>
 */
export class UpdateThemeAliasCommand extends $Command<
  UpdateThemeAliasCommandInput,
  UpdateThemeAliasCommandOutput,
  QuickSightClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateThemeAliasCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: QuickSightClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateThemeAliasCommandInput, UpdateThemeAliasCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QuickSightClient";
    const commandName = "UpdateThemeAliasCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateThemeAliasRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateThemeAliasResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateThemeAliasCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateThemeAliasCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateThemeAliasCommandOutput> {
    return deserializeAws_restJson1UpdateThemeAliasCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
