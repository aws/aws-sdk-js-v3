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
} from "@smithy/types";

import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { CreateApprovalRuleTemplateInput, CreateApprovalRuleTemplateOutput } from "../models/models_0";
import { de_CreateApprovalRuleTemplateCommand, se_CreateApprovalRuleTemplateCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateApprovalRuleTemplateCommand}.
 */
export interface CreateApprovalRuleTemplateCommandInput extends CreateApprovalRuleTemplateInput {}
/**
 * @public
 *
 * The output of {@link CreateApprovalRuleTemplateCommand}.
 */
export interface CreateApprovalRuleTemplateCommandOutput extends CreateApprovalRuleTemplateOutput, __MetadataBearer {}

/**
 * @public
 * <p>Creates a template for approval rules that can then be associated with one or more
 *             repositories in your Amazon Web Services account. When you associate a template with a repository,
 *             CodeCommit creates an approval rule that matches the conditions of the template for all
 *             pull requests that meet the conditions of the template. For more information, see
 *             <a>AssociateApprovalRuleTemplateWithRepository</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, CreateApprovalRuleTemplateCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, CreateApprovalRuleTemplateCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const input = { // CreateApprovalRuleTemplateInput
 *   approvalRuleTemplateName: "STRING_VALUE", // required
 *   approvalRuleTemplateContent: "STRING_VALUE", // required
 *   approvalRuleTemplateDescription: "STRING_VALUE",
 * };
 * const command = new CreateApprovalRuleTemplateCommand(input);
 * const response = await client.send(command);
 * // { // CreateApprovalRuleTemplateOutput
 * //   approvalRuleTemplate: { // ApprovalRuleTemplate
 * //     approvalRuleTemplateId: "STRING_VALUE",
 * //     approvalRuleTemplateName: "STRING_VALUE",
 * //     approvalRuleTemplateDescription: "STRING_VALUE",
 * //     approvalRuleTemplateContent: "STRING_VALUE",
 * //     ruleContentSha256: "STRING_VALUE",
 * //     lastModifiedDate: new Date("TIMESTAMP"),
 * //     creationDate: new Date("TIMESTAMP"),
 * //     lastModifiedUser: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateApprovalRuleTemplateCommandInput - {@link CreateApprovalRuleTemplateCommandInput}
 * @returns {@link CreateApprovalRuleTemplateCommandOutput}
 * @see {@link CreateApprovalRuleTemplateCommandInput} for command's `input` shape.
 * @see {@link CreateApprovalRuleTemplateCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for CodeCommitClient's `config` shape.
 *
 * @throws {@link ApprovalRuleTemplateContentRequiredException} (client fault)
 *  <p>The content for the approval rule template is empty. You must provide some content for an approval rule template. The content cannot be null.</p>
 *
 * @throws {@link ApprovalRuleTemplateNameAlreadyExistsException} (client fault)
 *  <p>You cannot create an approval rule template with that name because a template with
 *             that name already exists in this Amazon Web Services Region for your Amazon Web Services account. Approval rule template
 *             names must be unique.</p>
 *
 * @throws {@link ApprovalRuleTemplateNameRequiredException} (client fault)
 *  <p>An approval rule template name is required, but was not specified.</p>
 *
 * @throws {@link InvalidApprovalRuleTemplateContentException} (client fault)
 *  <p>The content of the approval rule template is not valid.</p>
 *
 * @throws {@link InvalidApprovalRuleTemplateDescriptionException} (client fault)
 *  <p>The description for the approval rule template is not valid because it exceeds the
 *             maximum characters allowed for a description. For more information about limits in CodeCommit,
 *             see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/limits.html">Quotas</a> in the <i>CodeCommit User Guide</i>.</p>
 *
 * @throws {@link InvalidApprovalRuleTemplateNameException} (client fault)
 *  <p>The name of the approval rule template is not valid. Template names must be between 1
 *             and 100 valid characters in length. For more information about limits in CodeCommit,
 *             see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/limits.html">Quotas</a> in the <i>CodeCommit User Guide</i>.</p>
 *
 * @throws {@link NumberOfRuleTemplatesExceededException} (client fault)
 *  <p>The maximum number of approval rule templates has been exceeded for this Amazon Web Services Region. </p>
 *
 * @throws {@link CodeCommitServiceException}
 * <p>Base exception class for all service exceptions from CodeCommit service.</p>
 *
 */
export class CreateApprovalRuleTemplateCommand extends $Command<
  CreateApprovalRuleTemplateCommandInput,
  CreateApprovalRuleTemplateCommandOutput,
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
  constructor(readonly input: CreateApprovalRuleTemplateCommandInput) {
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
  ): Handler<CreateApprovalRuleTemplateCommandInput, CreateApprovalRuleTemplateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateApprovalRuleTemplateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeCommitClient";
    const commandName = "CreateApprovalRuleTemplateCommand";
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
  private serialize(input: CreateApprovalRuleTemplateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateApprovalRuleTemplateCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateApprovalRuleTemplateCommandOutput> {
    return de_CreateApprovalRuleTemplateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
