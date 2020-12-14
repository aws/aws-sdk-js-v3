import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { UpdateWebhookInput, UpdateWebhookOutput } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateWebhookCommand,
  serializeAws_json1_1UpdateWebhookCommand,
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

export type UpdateWebhookCommandInput = UpdateWebhookInput;
export type UpdateWebhookCommandOutput = UpdateWebhookOutput & __MetadataBearer;

/**
 * <p> Updates the webhook associated with an AWS CodeBuild build project. </p>
 *          <note>
 *             <p> If you use Bitbucket for your repository, <code>rotateSecret</code> is ignored.
 *       </p>
 *          </note>
 */
export class UpdateWebhookCommand extends $Command<
  UpdateWebhookCommandInput,
  UpdateWebhookCommandOutput,
  CodeBuildClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateWebhookCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeBuildClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateWebhookCommandInput, UpdateWebhookCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeBuildClient";
    const commandName = "UpdateWebhookCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateWebhookInput.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateWebhookOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateWebhookCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateWebhookCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateWebhookCommandOutput> {
    return deserializeAws_json1_1UpdateWebhookCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
