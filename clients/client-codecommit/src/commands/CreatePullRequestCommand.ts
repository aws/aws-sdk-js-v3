// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { CreatePullRequestInput, CreatePullRequestOutput } from "../models/models_0";
import {
  deserializeAws_json1_1CreatePullRequestCommand,
  serializeAws_json1_1CreatePullRequestCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link CreatePullRequestCommand}.
 */
export interface CreatePullRequestCommandInput extends CreatePullRequestInput {}
/**
 * @public
 *
 * The output of {@link CreatePullRequestCommand}.
 */
export interface CreatePullRequestCommandOutput extends CreatePullRequestOutput, __MetadataBearer {}

/**
 * @public
 * <p>Creates a pull request in the specified repository.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, CreatePullRequestCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, CreatePullRequestCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const input = {
 *   title: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   targets: [ // required
 *     {
 *       repositoryName: "STRING_VALUE", // required
 *       sourceReference: "STRING_VALUE", // required
 *       destinationReference: "STRING_VALUE",
 *     },
 *   ],
 *   clientRequestToken: "STRING_VALUE",
 * };
 * const command = new CreatePullRequestCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param CreatePullRequestCommandInput - {@link CreatePullRequestCommandInput}
 * @returns {@link CreatePullRequestCommandOutput}
 * @see {@link CreatePullRequestCommandInput} for command's `input` shape.
 * @see {@link CreatePullRequestCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for CodeCommitClient's `config` shape.
 *
 * @throws {@link ClientRequestTokenRequiredException} (client fault)
 *  <p>A client request token is required. A client request token is an unique,
 *             client-generated idempotency token that, when provided in a request, ensures the request
 *             cannot be repeated with a changed parameter. If a request is received with the same
 *             parameters and a token is included, the request returns information about the initial
 *             request that used that token.</p>
 *
 * @throws {@link EncryptionIntegrityChecksFailedException} (server fault)
 *  <p>An encryption integrity check failed.</p>
 *
 * @throws {@link EncryptionKeyAccessDeniedException} (client fault)
 *  <p>An encryption key could not be accessed.</p>
 *
 * @throws {@link EncryptionKeyDisabledException} (client fault)
 *  <p>The encryption key is disabled.</p>
 *
 * @throws {@link EncryptionKeyNotFoundException} (client fault)
 *  <p>No encryption key was found.</p>
 *
 * @throws {@link EncryptionKeyUnavailableException} (client fault)
 *  <p>The encryption key is not available.</p>
 *
 * @throws {@link IdempotencyParameterMismatchException} (client fault)
 *  <p>The client request token is not valid. Either the token is not in a valid format, or
 *             the token has been used in a previous request and cannot be reused.</p>
 *
 * @throws {@link InvalidClientRequestTokenException} (client fault)
 *  <p>The client request token is not valid.</p>
 *
 * @throws {@link InvalidDescriptionException} (client fault)
 *  <p>The pull request description is not valid. Descriptions cannot be more than 1,000
 *             characters.</p>
 *
 * @throws {@link InvalidReferenceNameException} (client fault)
 *  <p>The specified reference name format is not valid. Reference names must conform to the
 *             Git references format (for example, refs/heads/master). For more information, see <a href="https://git-scm.com/book/en/v2/Git-Internals-Git-References">Git Internals -
 *                 Git References</a> or consult your Git documentation.</p>
 *
 * @throws {@link InvalidRepositoryNameException} (client fault)
 *  <p>A specified repository name is not valid.</p>
 *
 *         <note>
 *             <p>This exception occurs only when a specified repository name is not valid. Other
 *                 exceptions occur when a required repository parameter is missing, or when a
 *                 specified repository does not exist.</p>
 *          </note>
 *
 * @throws {@link InvalidTargetException} (client fault)
 *  <p>The target for the pull request is not valid. A target must contain the full values for the repository name, source branch, and destination branch for the pull request.</p>
 *
 * @throws {@link InvalidTargetsException} (client fault)
 *  <p>The targets for the pull request is not valid or not in a valid format. Targets are a list of target objects. Each target object must contain the full values for
 *             the repository name, source branch, and destination branch for a pull request.</p>
 *
 * @throws {@link InvalidTitleException} (client fault)
 *  <p>The title of the pull request is not valid. Pull request titles cannot exceed 100 characters in length.</p>
 *
 * @throws {@link MaximumOpenPullRequestsExceededException} (client fault)
 *  <p>You cannot create the pull request because the repository has too many open pull requests.
 *             The maximum number of open pull requests for a repository is 1,000. Close one or more open pull requests, and then try again.</p>
 *
 * @throws {@link MultipleRepositoriesInPullRequestException} (client fault)
 *  <p>You cannot include more than one repository in a pull request. Make sure you have specified only one repository name in your request, and then try again.</p>
 *
 * @throws {@link ReferenceDoesNotExistException} (client fault)
 *  <p>The specified reference does not exist. You must provide a full commit ID.</p>
 *
 * @throws {@link ReferenceNameRequiredException} (client fault)
 *  <p>A reference name is required, but none was provided.</p>
 *
 * @throws {@link ReferenceTypeNotSupportedException} (client fault)
 *  <p>The specified reference is not a supported type. </p>
 *
 * @throws {@link RepositoryDoesNotExistException} (client fault)
 *  <p>The specified repository does not exist.</p>
 *
 * @throws {@link RepositoryNameRequiredException} (client fault)
 *  <p>A repository name is required, but was not specified.</p>
 *
 * @throws {@link SourceAndDestinationAreSameException} (client fault)
 *  <p>The source branch and destination branch for the pull request are the same. You must
 *             specify different branches for the source and destination.</p>
 *
 * @throws {@link TargetRequiredException} (client fault)
 *  <p>A pull request target is required. It cannot be empty or null. A pull request target must contain the full values for the repository name, source branch, and destination branch for the pull request.</p>
 *
 * @throws {@link TargetsRequiredException} (client fault)
 *  <p>An array of target objects is required. It cannot be empty or null.</p>
 *
 * @throws {@link TitleRequiredException} (client fault)
 *  <p>A pull request title is required. It cannot be empty or null.</p>
 *
 *
 */
export class CreatePullRequestCommand extends $Command<
  CreatePullRequestCommandInput,
  CreatePullRequestCommandOutput,
  CodeCommitClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: CreatePullRequestCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeCommitClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreatePullRequestCommandInput, CreatePullRequestCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreatePullRequestCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeCommitClient";
    const commandName = "CreatePullRequestCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: CreatePullRequestCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreatePullRequestCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreatePullRequestCommandOutput> {
    return deserializeAws_json1_1CreatePullRequestCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
