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
import { UpdateApprovalRuleTemplateNameInput, UpdateApprovalRuleTemplateNameOutput } from "../models/models_1";
import {
  de_UpdateApprovalRuleTemplateNameCommand,
  se_UpdateApprovalRuleTemplateNameCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link UpdateApprovalRuleTemplateNameCommand}.
 */
export interface UpdateApprovalRuleTemplateNameCommandInput extends UpdateApprovalRuleTemplateNameInput {}
/**
 * @public
 *
 * The output of {@link UpdateApprovalRuleTemplateNameCommand}.
 */
export interface UpdateApprovalRuleTemplateNameCommandOutput
  extends UpdateApprovalRuleTemplateNameOutput,
    __MetadataBearer {}

/**
 * @public
 * <p>Updates the name of a specified approval rule template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, UpdateApprovalRuleTemplateNameCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, UpdateApprovalRuleTemplateNameCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const input = { // UpdateApprovalRuleTemplateNameInput
 *   oldApprovalRuleTemplateName: "STRING_VALUE", // required
 *   newApprovalRuleTemplateName: "STRING_VALUE", // required
 * };
 * const command = new UpdateApprovalRuleTemplateNameCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param UpdateApprovalRuleTemplateNameCommandInput - {@link UpdateApprovalRuleTemplateNameCommandInput}
 * @returns {@link UpdateApprovalRuleTemplateNameCommandOutput}
 * @see {@link UpdateApprovalRuleTemplateNameCommandInput} for command's `input` shape.
 * @see {@link UpdateApprovalRuleTemplateNameCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for CodeCommitClient's `config` shape.
 *
 * @throws {@link ApprovalRuleTemplateDoesNotExistException} (client fault)
 *  <p>The specified approval rule template does not exist. Verify that the name is correct and that you are signed in to the AWS Region where the template
 *         was created, and then try again.</p>
 *
 * @throws {@link ApprovalRuleTemplateNameAlreadyExistsException} (client fault)
 *  <p>You cannot create an approval rule template with that name because a template with
 *             that name already exists in this AWS Region for your AWS account. Approval rule template
 *             names must be unique.</p>
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
 *
 */
export class UpdateApprovalRuleTemplateNameCommand extends $Command<
  UpdateApprovalRuleTemplateNameCommandInput,
  UpdateApprovalRuleTemplateNameCommandOutput,
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
  constructor(readonly input: UpdateApprovalRuleTemplateNameCommandInput) {
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
  ): Handler<UpdateApprovalRuleTemplateNameCommandInput, UpdateApprovalRuleTemplateNameCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateApprovalRuleTemplateNameCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeCommitClient";
    const commandName = "UpdateApprovalRuleTemplateNameCommand";
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
    input: UpdateApprovalRuleTemplateNameCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_UpdateApprovalRuleTemplateNameCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateApprovalRuleTemplateNameCommandOutput> {
    return de_UpdateApprovalRuleTemplateNameCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
