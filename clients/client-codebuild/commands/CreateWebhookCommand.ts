import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { CreateWebhookInput, CreateWebhookOutput } from "../models/models_0";
import {
  deserializeAws_json1_1CreateWebhookCommand,
  serializeAws_json1_1CreateWebhookCommand,
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

export interface CreateWebhookCommandInput extends CreateWebhookInput {}
export interface CreateWebhookCommandOutput extends CreateWebhookOutput, __MetadataBearer {}

/**
 * <p>For an existing CodeBuild build project that has its source code stored in a GitHub or
 *       Bitbucket repository, enables CodeBuild to start rebuilding the source code every time a
 *       code change is pushed to the repository.</p>
 *          <important>
 *             <p>If you enable webhooks for an CodeBuild project, and the project is used as a build
 *         step in CodePipeline, then two identical builds are created for each commit. One build is
 *         triggered through webhooks, and one through CodePipeline. Because billing is on a per-build
 *         basis, you are billed for both builds. Therefore, if you are using CodePipeline, we
 *         recommend that you disable webhooks in CodeBuild. In the CodeBuild console, clear the
 *         Webhook box. For more information, see step 5 in <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/change-project.html#change-project-console">Change a Build Project's Settings</a>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, CreateWebhookCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, CreateWebhookCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * const client = new CodeBuildClient(config);
 * const command = new CreateWebhookCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateWebhookCommandInput} for command's `input` shape.
 * @see {@link CreateWebhookCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateWebhookCommand extends $Command<
  CreateWebhookCommandInput,
  CreateWebhookCommandOutput,
  CodeBuildClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateWebhookCommandInput) {
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
  ): Handler<CreateWebhookCommandInput, CreateWebhookCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeBuildClient";
    const commandName = "CreateWebhookCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateWebhookInput.filterSensitiveLog,
      outputFilterSensitiveLog: CreateWebhookOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateWebhookCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateWebhookCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateWebhookCommandOutput> {
    return deserializeAws_json1_1CreateWebhookCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
