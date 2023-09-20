// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { CreateWebhookInput, CreateWebhookOutput } from "../models/models_0";
import { de_CreateWebhookCommand, se_CreateWebhookCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateWebhookCommand}.
 */
export interface CreateWebhookCommandInput extends CreateWebhookInput {}
/**
 * @public
 *
 * The output of {@link CreateWebhookCommand}.
 */
export interface CreateWebhookCommandOutput extends CreateWebhookOutput, __MetadataBearer {}

/**
 * @public
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
 * const input = { // CreateWebhookInput
 *   projectName: "STRING_VALUE", // required
 *   branchFilter: "STRING_VALUE",
 *   filterGroups: [ // FilterGroups
 *     [ // FilterGroup
 *       { // WebhookFilter
 *         type: "EVENT" || "BASE_REF" || "HEAD_REF" || "ACTOR_ACCOUNT_ID" || "FILE_PATH" || "COMMIT_MESSAGE", // required
 *         pattern: "STRING_VALUE", // required
 *         excludeMatchedPattern: true || false,
 *       },
 *     ],
 *   ],
 *   buildType: "BUILD" || "BUILD_BATCH",
 * };
 * const command = new CreateWebhookCommand(input);
 * const response = await client.send(command);
 * // { // CreateWebhookOutput
 * //   webhook: { // Webhook
 * //     url: "STRING_VALUE",
 * //     payloadUrl: "STRING_VALUE",
 * //     secret: "STRING_VALUE",
 * //     branchFilter: "STRING_VALUE",
 * //     filterGroups: [ // FilterGroups
 * //       [ // FilterGroup
 * //         { // WebhookFilter
 * //           type: "EVENT" || "BASE_REF" || "HEAD_REF" || "ACTOR_ACCOUNT_ID" || "FILE_PATH" || "COMMIT_MESSAGE", // required
 * //           pattern: "STRING_VALUE", // required
 * //           excludeMatchedPattern: true || false,
 * //         },
 * //       ],
 * //     ],
 * //     buildType: "BUILD" || "BUILD_BATCH",
 * //     lastModifiedSecret: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateWebhookCommandInput - {@link CreateWebhookCommandInput}
 * @returns {@link CreateWebhookCommandOutput}
 * @see {@link CreateWebhookCommandInput} for command's `input` shape.
 * @see {@link CreateWebhookCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for CodeBuildClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input value that was provided is not valid.</p>
 *
 * @throws {@link OAuthProviderException} (client fault)
 *  <p>There was a problem with the underlying OAuth provider.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>The specified Amazon Web Services resource cannot be created, because an Amazon Web Services resource with the same
 *             settings already exists.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified Amazon Web Services resource cannot be found.</p>
 *
 * @throws {@link CodeBuildServiceException}
 * <p>Base exception class for all service exceptions from CodeBuild service.</p>
 *
 */
export class CreateWebhookCommand extends $Command<
  CreateWebhookCommandInput,
  CreateWebhookCommandOutput,
  CodeBuildClientResolvedConfig
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
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateWebhookCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeBuildClient";
    const commandName = "CreateWebhookCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CodeBuild_20161006",
        operation: "CreateWebhook",
      },
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
  private serialize(input: CreateWebhookCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateWebhookCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateWebhookCommandOutput> {
    return de_CreateWebhookCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
