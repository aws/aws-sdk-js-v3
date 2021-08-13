import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { UpdateProjectVisibilityInput, UpdateProjectVisibilityOutput } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateProjectVisibilityCommand,
  serializeAws_json1_1UpdateProjectVisibilityCommand,
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

export interface UpdateProjectVisibilityCommandInput extends UpdateProjectVisibilityInput {}
export interface UpdateProjectVisibilityCommandOutput extends UpdateProjectVisibilityOutput, __MetadataBearer {}

/**
 * <p>Changes the public visibility for a project. The project's build results, logs, and
 *       artifacts are available to the general public.  For more information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/public-builds.html">Public build
 *         projects</a> in the <i>CodeBuild User Guide</i>.</p>
 *          <important>
 *             <p>The following should be kept in mind when making your projects public:</p>
 *             <ul>
 *                <li>
 *                   <p>All of a project's build results, logs, and artifacts, including builds that were run
 *             when the project was private, are available to the general public.</p>
 *                </li>
 *                <li>
 *                   <p>All build logs and artifacts are available to the public. Environment variables, source
 *             code, and other sensitive information may have been output to the build logs and artifacts.
 *             You must be careful about what information is output to the build logs. Some best practice
 *             are:</p>
 *                   <ul>
 *                      <li>
 *                         <p>Do not store sensitive values, especially Amazon Web Services access key IDs and secret access
 *                 keys, in environment variables. We recommend that you use an Amazon EC2 Systems Manager Parameter Store
 *                 or Secrets Manager to store sensitive values.</p>
 *                      </li>
 *                      <li>
 *                         <p>Follow <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/webhooks.html#webhook-best-practices">Best
 *                   practices for using webhooks</a> in the <i>CodeBuild User
 *                   Guide</i> to limit which entities can trigger a build, and do
 *                   not store the buildspec in the project itself, to ensure that your webhooks are as
 *                   secure as possible.</p>
 *                      </li>
 *                   </ul>
 *                </li>
 *                <li>
 *                   <p>A malicious user can use public builds to distribute malicious artifacts. We recommend
 *             that you review all pull requests to verify that the pull request is a legitimate change. We
 *             also recommend that you validate any artifacts with their checksums to make sure that the
 *             correct artifacts are being downloaded.</p>
 *                </li>
 *             </ul>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, UpdateProjectVisibilityCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, UpdateProjectVisibilityCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * const client = new CodeBuildClient(config);
 * const command = new UpdateProjectVisibilityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateProjectVisibilityCommandInput} for command's `input` shape.
 * @see {@link UpdateProjectVisibilityCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateProjectVisibilityCommand extends $Command<
  UpdateProjectVisibilityCommandInput,
  UpdateProjectVisibilityCommandOutput,
  CodeBuildClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateProjectVisibilityCommandInput) {
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
  ): Handler<UpdateProjectVisibilityCommandInput, UpdateProjectVisibilityCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeBuildClient";
    const commandName = "UpdateProjectVisibilityCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateProjectVisibilityInput.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateProjectVisibilityOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateProjectVisibilityCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateProjectVisibilityCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateProjectVisibilityCommandOutput> {
    return deserializeAws_json1_1UpdateProjectVisibilityCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
