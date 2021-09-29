import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { DeleteWebhookInput, DeleteWebhookOutput } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteWebhookCommand,
  serializeAws_json1_1DeleteWebhookCommand,
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

export interface DeleteWebhookCommandInput extends DeleteWebhookInput {}
export interface DeleteWebhookCommandOutput extends DeleteWebhookOutput, __MetadataBearer {}

/**
 * <p>For an existing CodeBuild build project that has its source code stored in a GitHub or
 *             Bitbucket repository, stops CodeBuild from rebuilding the source code every time a code
 *             change is pushed to the repository.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, DeleteWebhookCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, DeleteWebhookCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * const client = new CodeBuildClient(config);
 * const command = new DeleteWebhookCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteWebhookCommandInput} for command's `input` shape.
 * @see {@link DeleteWebhookCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteWebhookCommand extends $Command<
  DeleteWebhookCommandInput,
  DeleteWebhookCommandOutput,
  CodeBuildClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteWebhookCommandInput) {
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
  ): Handler<DeleteWebhookCommandInput, DeleteWebhookCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeBuildClient";
    const commandName = "DeleteWebhookCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteWebhookInput.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteWebhookOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteWebhookCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteWebhookCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteWebhookCommandOutput> {
    return deserializeAws_json1_1DeleteWebhookCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
