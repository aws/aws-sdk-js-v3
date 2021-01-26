import { ImagebuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ImagebuilderClient";
import { GetImageRecipePolicyRequest, GetImageRecipePolicyResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetImageRecipePolicyCommand,
  serializeAws_restJson1GetImageRecipePolicyCommand,
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

export type GetImageRecipePolicyCommandInput = GetImageRecipePolicyRequest;
export type GetImageRecipePolicyCommandOutput = GetImageRecipePolicyResponse & __MetadataBearer;

/**
 * <p> Gets an image recipe policy. </p>
 */
export class GetImageRecipePolicyCommand extends $Command<
  GetImageRecipePolicyCommandInput,
  GetImageRecipePolicyCommandOutput,
  ImagebuilderClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetImageRecipePolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ImagebuilderClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetImageRecipePolicyCommandInput, GetImageRecipePolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ImagebuilderClient";
    const commandName = "GetImageRecipePolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetImageRecipePolicyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetImageRecipePolicyResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetImageRecipePolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetImageRecipePolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetImageRecipePolicyCommandOutput> {
    return deserializeAws_restJson1GetImageRecipePolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
