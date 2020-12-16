import { ImagebuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ImagebuilderClient";
import { PutImageRecipePolicyRequest, PutImageRecipePolicyResponse } from "../models/models_0";
import {
  deserializeAws_restJson1PutImageRecipePolicyCommand,
  serializeAws_restJson1PutImageRecipePolicyCommand,
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

export type PutImageRecipePolicyCommandInput = PutImageRecipePolicyRequest;
export type PutImageRecipePolicyCommandOutput = PutImageRecipePolicyResponse & __MetadataBearer;

/**
 * <p> Applies a policy to an image recipe. We recommend that you call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_CreateResourceShare.html">CreateResourceShare</a> to share resources. If you call the Image Builder API <code>PutImageRecipePolicy</code>, you must also call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_PromoteResourceShareCreatedFromPolicy.html">PromoteResourceShareCreatedFromPolicy</a> in order for the resource to be visible to all principals with whom the resource is shared. </p>
 */
export class PutImageRecipePolicyCommand extends $Command<
  PutImageRecipePolicyCommandInput,
  PutImageRecipePolicyCommandOutput,
  ImagebuilderClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutImageRecipePolicyCommandInput) {
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
  ): Handler<PutImageRecipePolicyCommandInput, PutImageRecipePolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ImagebuilderClient";
    const commandName = "PutImageRecipePolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutImageRecipePolicyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutImageRecipePolicyResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutImageRecipePolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1PutImageRecipePolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutImageRecipePolicyCommandOutput> {
    return deserializeAws_restJson1PutImageRecipePolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
