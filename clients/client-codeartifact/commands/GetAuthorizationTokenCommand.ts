import { CodeartifactClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeartifactClient";
import { GetAuthorizationTokenRequest, GetAuthorizationTokenResult } from "../models/models_0";
import {
  deserializeAws_restJson1GetAuthorizationTokenCommand,
  serializeAws_restJson1GetAuthorizationTokenCommand,
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

export type GetAuthorizationTokenCommandInput = GetAuthorizationTokenRequest;
export type GetAuthorizationTokenCommandOutput = GetAuthorizationTokenResult & __MetadataBearer;

/**
 * <p>
 *         Generates a temporary authorization token for accessing repositories in the domain.
 *         This API requires the <code>codeartifact:GetAuthorizationToken</code> and <code>sts:GetServiceBearerToken</code> permissions.
 *         For more information about authorization tokens, see
 *         <a href="https://docs.aws.amazon.com/codeartifact/latest/ug/tokens-authentication.html">AWS CodeArtifact authentication and tokens</a>.
 *       </p>
 *          <note>
 *             <p>CodeArtifact authorization tokens are valid for a period of 12 hours when created with the <code>login</code> command.
 *          You can call <code>login</code> periodically to refresh the token. When
 *          you create an authorization token with the <code>GetAuthorizationToken</code> API, you can set a custom authorization period,
 *          up to a maximum of 12 hours, with the <code>durationSeconds</code> parameter.</p>
 *             <p>The authorization period begins after <code>login</code>
 *          or <code>GetAuthorizationToken</code> is called. If <code>login</code> or <code>GetAuthorizationToken</code> is called while
 *          assuming a role, the token lifetime is independent of the maximum session duration
 *          of the role. For example, if you call <code>sts assume-role</code> and specify a session duration of 15 minutes, then
 *          generate a CodeArtifact authorization token, the token will be valid for the full authorization period
 *          even though this is longer than the 15-minute session duration.</p>
 *             <p>See
 *          <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use.html">Using IAM Roles</a>
 *          for more information on controlling session duration. </p>
 *          </note>
 */
export class GetAuthorizationTokenCommand extends $Command<
  GetAuthorizationTokenCommandInput,
  GetAuthorizationTokenCommandOutput,
  CodeartifactClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetAuthorizationTokenCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeartifactClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetAuthorizationTokenCommandInput, GetAuthorizationTokenCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeartifactClient";
    const commandName = "GetAuthorizationTokenCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetAuthorizationTokenRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetAuthorizationTokenResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetAuthorizationTokenCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetAuthorizationTokenCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetAuthorizationTokenCommandOutput> {
    return deserializeAws_restJson1GetAuthorizationTokenCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
