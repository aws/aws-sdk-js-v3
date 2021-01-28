import {
  LexModelBuildingServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LexModelBuildingServiceClient";
import { CreateIntentVersionRequest, CreateIntentVersionResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateIntentVersionCommand,
  serializeAws_restJson1CreateIntentVersionCommand,
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

export type CreateIntentVersionCommandInput = CreateIntentVersionRequest;
export type CreateIntentVersionCommandOutput = CreateIntentVersionResponse & __MetadataBearer;

/**
 * <p>Creates a new version of an intent based on the
 *         <code>$LATEST</code> version of the intent. If the <code>$LATEST</code>
 *       version of this intent hasn't changed since you last updated it, Amazon Lex
 *       doesn't create a new version. It returns the last version you
 *       created.</p>
 *          <note>
 *             <p>You can update only the <code>$LATEST</code> version of the
 *         intent. You can't update the numbered versions that you create with the
 *           <code>CreateIntentVersion</code> operation.</p>
 *          </note>
 *          <p> When you create a version of an intent, Amazon Lex sets the version to
 *       1. Subsequent versions increment by 1. For more information, see <a>versioning-intro</a>. </p>
 *          <p>This operation requires permissions to perform the
 *         <code>lex:CreateIntentVersion</code> action. </p>
 */
export class CreateIntentVersionCommand extends $Command<
  CreateIntentVersionCommandInput,
  CreateIntentVersionCommandOutput,
  LexModelBuildingServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateIntentVersionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LexModelBuildingServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateIntentVersionCommandInput, CreateIntentVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LexModelBuildingServiceClient";
    const commandName = "CreateIntentVersionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateIntentVersionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateIntentVersionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateIntentVersionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateIntentVersionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateIntentVersionCommandOutput> {
    return deserializeAws_restJson1CreateIntentVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
