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
import { UpdatePullRequestTitleInput, UpdatePullRequestTitleOutput } from "../models/models_1";
import {
  deserializeAws_json1_1UpdatePullRequestTitleCommand,
  serializeAws_json1_1UpdatePullRequestTitleCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link UpdatePullRequestTitleCommand}.
 */
export interface UpdatePullRequestTitleCommandInput extends UpdatePullRequestTitleInput {}
/**
 * @public
 *
 * The output of {@link UpdatePullRequestTitleCommand}.
 */
export interface UpdatePullRequestTitleCommandOutput extends UpdatePullRequestTitleOutput, __MetadataBearer {}

/**
 * @public
 * <p>Replaces the title of a pull request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, UpdatePullRequestTitleCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, UpdatePullRequestTitleCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new UpdatePullRequestTitleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param UpdatePullRequestTitleCommandInput - {@link UpdatePullRequestTitleCommandInput}
 * @returns {@link UpdatePullRequestTitleCommandOutput}
 * @see {@link UpdatePullRequestTitleCommandInput} for command's `input` shape.
 * @see {@link UpdatePullRequestTitleCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for CodeCommitClient's `config` shape.
 *
 * @throws {@link InvalidPullRequestIdException} (client fault)
 *  <p>The pull request ID is not valid. Make sure that you have provided the full ID and that the pull request is in the specified repository, and then try again.</p>
 *
 * @throws {@link InvalidTitleException} (client fault)
 *  <p>The title of the pull request is not valid. Pull request titles cannot exceed 100 characters in length.</p>
 *
 * @throws {@link PullRequestAlreadyClosedException} (client fault)
 *  <p>The pull request status cannot be updated because it is already closed.</p>
 *
 * @throws {@link PullRequestDoesNotExistException} (client fault)
 *  <p>The pull request ID could not be found. Make sure that you have specified the correct repository name and pull request ID, and then try again.</p>
 *
 * @throws {@link PullRequestIdRequiredException} (client fault)
 *  <p>A pull request ID is required, but none was provided.</p>
 *
 * @throws {@link TitleRequiredException} (client fault)
 *  <p>A pull request title is required. It cannot be empty or null.</p>
 *
 *
 */
export class UpdatePullRequestTitleCommand extends $Command<
  UpdatePullRequestTitleCommandInput,
  UpdatePullRequestTitleCommandOutput,
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
  constructor(readonly input: UpdatePullRequestTitleCommandInput) {
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
  ): Handler<UpdatePullRequestTitleCommandInput, UpdatePullRequestTitleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdatePullRequestTitleCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeCommitClient";
    const commandName = "UpdatePullRequestTitleCommand";
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
  private serialize(input: UpdatePullRequestTitleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdatePullRequestTitleCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdatePullRequestTitleCommandOutput> {
    return deserializeAws_json1_1UpdatePullRequestTitleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
