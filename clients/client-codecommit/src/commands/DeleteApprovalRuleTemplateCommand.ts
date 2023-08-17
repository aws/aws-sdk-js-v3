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
import { DeleteApprovalRuleTemplateInput, DeleteApprovalRuleTemplateOutput } from "../models/models_0";
import { de_DeleteApprovalRuleTemplateCommand, se_DeleteApprovalRuleTemplateCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteApprovalRuleTemplateCommand}.
 */
export interface DeleteApprovalRuleTemplateCommandInput extends DeleteApprovalRuleTemplateInput {}
/**
 * @public
 *
 * The output of {@link DeleteApprovalRuleTemplateCommand}.
 */
export interface DeleteApprovalRuleTemplateCommandOutput extends DeleteApprovalRuleTemplateOutput, __MetadataBearer {}

/**
 * @public
 * <p>Deletes a specified approval rule template. Deleting a template does not remove approval rules on pull requests already created with the template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, DeleteApprovalRuleTemplateCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, DeleteApprovalRuleTemplateCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const input = { // DeleteApprovalRuleTemplateInput
 *   approvalRuleTemplateName: "STRING_VALUE", // required
 * };
 * const command = new DeleteApprovalRuleTemplateCommand(input);
 * const response = await client.send(command);
 * // { // DeleteApprovalRuleTemplateOutput
 * //   approvalRuleTemplateId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param DeleteApprovalRuleTemplateCommandInput - {@link DeleteApprovalRuleTemplateCommandInput}
 * @returns {@link DeleteApprovalRuleTemplateCommandOutput}
 * @see {@link DeleteApprovalRuleTemplateCommandInput} for command's `input` shape.
 * @see {@link DeleteApprovalRuleTemplateCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for CodeCommitClient's `config` shape.
 *
 * @throws {@link ApprovalRuleTemplateInUseException} (client fault)
 *  <p>The approval rule template is associated with one or more repositories. You cannot delete a template that is associated with a repository. Remove
 *         all associations, and then try again.</p>
 *
 * @throws {@link ApprovalRuleTemplateNameRequiredException} (client fault)
 *  <p>An approval rule template name is required, but was not specified.</p>
 *
 * @throws {@link InvalidApprovalRuleTemplateNameException} (client fault)
 *  <p>The name of the approval rule template is not valid. Template names must be between 1
 *             and 100 valid characters in length. For more information about limits in AWS CodeCommit,
 *             see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/limits.html">AWS
 *                 CodeCommit User Guide</a>.</p>
 *
 * @throws {@link CodeCommitServiceException}
 * <p>Base exception class for all service exceptions from CodeCommit service.</p>
 *
 */
export class DeleteApprovalRuleTemplateCommand extends $Command<
  DeleteApprovalRuleTemplateCommandInput,
  DeleteApprovalRuleTemplateCommandOutput,
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
  constructor(readonly input: DeleteApprovalRuleTemplateCommandInput) {
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
  ): Handler<DeleteApprovalRuleTemplateCommandInput, DeleteApprovalRuleTemplateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteApprovalRuleTemplateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeCommitClient";
    const commandName = "DeleteApprovalRuleTemplateCommand";
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
  private serialize(input: DeleteApprovalRuleTemplateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteApprovalRuleTemplateCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteApprovalRuleTemplateCommandOutput> {
    return de_DeleteApprovalRuleTemplateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
