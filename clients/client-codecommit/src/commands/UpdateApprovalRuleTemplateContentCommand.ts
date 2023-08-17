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
import { UpdateApprovalRuleTemplateContentInput, UpdateApprovalRuleTemplateContentOutput } from "../models/models_1";
import {
  de_UpdateApprovalRuleTemplateContentCommand,
  se_UpdateApprovalRuleTemplateContentCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateApprovalRuleTemplateContentCommand}.
 */
export interface UpdateApprovalRuleTemplateContentCommandInput extends UpdateApprovalRuleTemplateContentInput {}
/**
 * @public
 *
 * The output of {@link UpdateApprovalRuleTemplateContentCommand}.
 */
export interface UpdateApprovalRuleTemplateContentCommandOutput
  extends UpdateApprovalRuleTemplateContentOutput,
    __MetadataBearer {}

/**
 * @public
 * <p>Updates the content of an approval rule template. You can change the number of
 *             required approvals, the membership of the approval rule, and whether an approval pool is
 *             defined.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, UpdateApprovalRuleTemplateContentCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, UpdateApprovalRuleTemplateContentCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const input = { // UpdateApprovalRuleTemplateContentInput
 *   approvalRuleTemplateName: "STRING_VALUE", // required
 *   newRuleContent: "STRING_VALUE", // required
 *   existingRuleContentSha256: "STRING_VALUE",
 * };
 * const command = new UpdateApprovalRuleTemplateContentCommand(input);
 * const response = await client.send(command);
 * // { // UpdateApprovalRuleTemplateContentOutput
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
 * @param UpdateApprovalRuleTemplateContentCommandInput - {@link UpdateApprovalRuleTemplateContentCommandInput}
 * @returns {@link UpdateApprovalRuleTemplateContentCommandOutput}
 * @see {@link UpdateApprovalRuleTemplateContentCommandInput} for command's `input` shape.
 * @see {@link UpdateApprovalRuleTemplateContentCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for CodeCommitClient's `config` shape.
 *
 * @throws {@link ApprovalRuleTemplateContentRequiredException} (client fault)
 *  <p>The content for the approval rule template is empty. You must provide some content for an approval rule template. The content cannot be null.</p>
 *
 * @throws {@link ApprovalRuleTemplateDoesNotExistException} (client fault)
 *  <p>The specified approval rule template does not exist. Verify that the name is correct and that you are signed in to the AWS Region where the template
 *         was created, and then try again.</p>
 *
 * @throws {@link ApprovalRuleTemplateNameRequiredException} (client fault)
 *  <p>An approval rule template name is required, but was not specified.</p>
 *
 * @throws {@link InvalidApprovalRuleTemplateContentException} (client fault)
 *  <p>The content of the approval rule template is not valid.</p>
 *
 * @throws {@link InvalidApprovalRuleTemplateNameException} (client fault)
 *  <p>The name of the approval rule template is not valid. Template names must be between 1
 *             and 100 valid characters in length. For more information about limits in AWS CodeCommit,
 *             see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/limits.html">AWS
 *                 CodeCommit User Guide</a>.</p>
 *
 * @throws {@link InvalidRuleContentSha256Exception} (client fault)
 *  <p>The SHA-256 hash signature for the rule content is not valid.</p>
 *
 * @throws {@link CodeCommitServiceException}
 * <p>Base exception class for all service exceptions from CodeCommit service.</p>
 *
 */
export class UpdateApprovalRuleTemplateContentCommand extends $Command<
  UpdateApprovalRuleTemplateContentCommandInput,
  UpdateApprovalRuleTemplateContentCommandOutput,
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
  constructor(readonly input: UpdateApprovalRuleTemplateContentCommandInput) {
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
  ): Handler<UpdateApprovalRuleTemplateContentCommandInput, UpdateApprovalRuleTemplateContentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateApprovalRuleTemplateContentCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeCommitClient";
    const commandName = "UpdateApprovalRuleTemplateContentCommand";
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
  private serialize(
    input: UpdateApprovalRuleTemplateContentCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_UpdateApprovalRuleTemplateContentCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateApprovalRuleTemplateContentCommandOutput> {
    return de_UpdateApprovalRuleTemplateContentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
