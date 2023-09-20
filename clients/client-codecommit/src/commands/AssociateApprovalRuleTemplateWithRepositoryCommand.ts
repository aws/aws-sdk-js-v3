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

import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { AssociateApprovalRuleTemplateWithRepositoryInput } from "../models/models_0";
import {
  de_AssociateApprovalRuleTemplateWithRepositoryCommand,
  se_AssociateApprovalRuleTemplateWithRepositoryCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link AssociateApprovalRuleTemplateWithRepositoryCommand}.
 */
export interface AssociateApprovalRuleTemplateWithRepositoryCommandInput
  extends AssociateApprovalRuleTemplateWithRepositoryInput {}
/**
 * @public
 *
 * The output of {@link AssociateApprovalRuleTemplateWithRepositoryCommand}.
 */
export interface AssociateApprovalRuleTemplateWithRepositoryCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Creates an association between an approval rule template and a specified repository.
 *             Then, the next time a pull request is created in the repository where the destination
 *             reference (if specified) matches the destination reference (branch) for the pull
 *             request, an approval rule that matches the template conditions is automatically created
 *             for that pull request. If no destination references are specified in the template, an
 *             approval rule that matches the template contents is created for all pull requests in
 *             that repository.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, AssociateApprovalRuleTemplateWithRepositoryCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, AssociateApprovalRuleTemplateWithRepositoryCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const input = { // AssociateApprovalRuleTemplateWithRepositoryInput
 *   approvalRuleTemplateName: "STRING_VALUE", // required
 *   repositoryName: "STRING_VALUE", // required
 * };
 * const command = new AssociateApprovalRuleTemplateWithRepositoryCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AssociateApprovalRuleTemplateWithRepositoryCommandInput - {@link AssociateApprovalRuleTemplateWithRepositoryCommandInput}
 * @returns {@link AssociateApprovalRuleTemplateWithRepositoryCommandOutput}
 * @see {@link AssociateApprovalRuleTemplateWithRepositoryCommandInput} for command's `input` shape.
 * @see {@link AssociateApprovalRuleTemplateWithRepositoryCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for CodeCommitClient's `config` shape.
 *
 * @throws {@link ApprovalRuleTemplateDoesNotExistException} (client fault)
 *  <p>The specified approval rule template does not exist. Verify that the name is correct and that you are signed in to the Amazon Web Services Region where the template
 *         was created, and then try again.</p>
 *
 * @throws {@link ApprovalRuleTemplateNameRequiredException} (client fault)
 *  <p>An approval rule template name is required, but was not specified.</p>
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
 * @throws {@link InvalidApprovalRuleTemplateNameException} (client fault)
 *  <p>The name of the approval rule template is not valid. Template names must be between 1
 *             and 100 valid characters in length. For more information about limits in CodeCommit,
 *             see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/limits.html">Quotas</a> in the <i>CodeCommit User Guide</i>.</p>
 *
 * @throws {@link InvalidRepositoryNameException} (client fault)
 *  <p>A specified repository name is not valid.</p>
 *          <note>
 *             <p>This exception occurs only when a specified repository name is not valid. Other
 *                 exceptions occur when a required repository parameter is missing, or when a
 *                 specified repository does not exist.</p>
 *          </note>
 *
 * @throws {@link MaximumRuleTemplatesAssociatedWithRepositoryException} (client fault)
 *  <p>The maximum number of approval rule templates for a repository has been exceeded. You cannot associate more than 25
 *         approval rule templates with a repository.</p>
 *
 * @throws {@link RepositoryDoesNotExistException} (client fault)
 *  <p>The specified repository does not exist.</p>
 *
 * @throws {@link RepositoryNameRequiredException} (client fault)
 *  <p>A repository name is required, but was not specified.</p>
 *
 * @throws {@link CodeCommitServiceException}
 * <p>Base exception class for all service exceptions from CodeCommit service.</p>
 *
 */
export class AssociateApprovalRuleTemplateWithRepositoryCommand extends $Command<
  AssociateApprovalRuleTemplateWithRepositoryCommandInput,
  AssociateApprovalRuleTemplateWithRepositoryCommandOutput,
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
  constructor(readonly input: AssociateApprovalRuleTemplateWithRepositoryCommandInput) {
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
  ): Handler<
    AssociateApprovalRuleTemplateWithRepositoryCommandInput,
    AssociateApprovalRuleTemplateWithRepositoryCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        AssociateApprovalRuleTemplateWithRepositoryCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeCommitClient";
    const commandName = "AssociateApprovalRuleTemplateWithRepositoryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CodeCommit_20150413",
        operation: "AssociateApprovalRuleTemplateWithRepository",
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
  private serialize(
    input: AssociateApprovalRuleTemplateWithRepositoryCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_AssociateApprovalRuleTemplateWithRepositoryCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AssociateApprovalRuleTemplateWithRepositoryCommandOutput> {
    return de_AssociateApprovalRuleTemplateWithRepositoryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
