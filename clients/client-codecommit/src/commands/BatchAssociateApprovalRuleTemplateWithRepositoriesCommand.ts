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
import {
  BatchAssociateApprovalRuleTemplateWithRepositoriesInput,
  BatchAssociateApprovalRuleTemplateWithRepositoriesOutput,
} from "../models/models_0";
import {
  deserializeAws_json1_1BatchAssociateApprovalRuleTemplateWithRepositoriesCommand,
  serializeAws_json1_1BatchAssociateApprovalRuleTemplateWithRepositoriesCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link BatchAssociateApprovalRuleTemplateWithRepositoriesCommand}.
 */
export interface BatchAssociateApprovalRuleTemplateWithRepositoriesCommandInput
  extends BatchAssociateApprovalRuleTemplateWithRepositoriesInput {}
/**
 * @public
 *
 * The output of {@link BatchAssociateApprovalRuleTemplateWithRepositoriesCommand}.
 */
export interface BatchAssociateApprovalRuleTemplateWithRepositoriesCommandOutput
  extends BatchAssociateApprovalRuleTemplateWithRepositoriesOutput,
    __MetadataBearer {}

/**
 * @public
 * <p>Creates an association between an approval rule template and one or more specified repositories. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, BatchAssociateApprovalRuleTemplateWithRepositoriesCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, BatchAssociateApprovalRuleTemplateWithRepositoriesCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const input = {
 *   approvalRuleTemplateName: "STRING_VALUE", // required
 *   repositoryNames: [ // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchAssociateApprovalRuleTemplateWithRepositoriesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param BatchAssociateApprovalRuleTemplateWithRepositoriesCommandInput - {@link BatchAssociateApprovalRuleTemplateWithRepositoriesCommandInput}
 * @returns {@link BatchAssociateApprovalRuleTemplateWithRepositoriesCommandOutput}
 * @see {@link BatchAssociateApprovalRuleTemplateWithRepositoriesCommandInput} for command's `input` shape.
 * @see {@link BatchAssociateApprovalRuleTemplateWithRepositoriesCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for CodeCommitClient's `config` shape.
 *
 * @throws {@link ApprovalRuleTemplateDoesNotExistException} (client fault)
 *  <p>The specified approval rule template does not exist. Verify that the name is correct and that you are signed in to the AWS Region where the template
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
 *             and 100 valid characters in length. For more information about limits in AWS CodeCommit,
 *             see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/limits.html">AWS
 *                 CodeCommit User Guide</a>.</p>
 *
 * @throws {@link MaximumRepositoryNamesExceededException} (client fault)
 *  <p>The maximum number of allowed repository names was exceeded. Currently, this number is 100.</p>
 *
 * @throws {@link RepositoryNamesRequiredException} (client fault)
 *  <p>At least one repository name object is required, but was not specified.</p>
 *
 *
 */
export class BatchAssociateApprovalRuleTemplateWithRepositoriesCommand extends $Command<
  BatchAssociateApprovalRuleTemplateWithRepositoriesCommandInput,
  BatchAssociateApprovalRuleTemplateWithRepositoriesCommandOutput,
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
  constructor(readonly input: BatchAssociateApprovalRuleTemplateWithRepositoriesCommandInput) {
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
    BatchAssociateApprovalRuleTemplateWithRepositoriesCommandInput,
    BatchAssociateApprovalRuleTemplateWithRepositoriesCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        BatchAssociateApprovalRuleTemplateWithRepositoriesCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeCommitClient";
    const commandName = "BatchAssociateApprovalRuleTemplateWithRepositoriesCommand";
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
    input: BatchAssociateApprovalRuleTemplateWithRepositoriesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1BatchAssociateApprovalRuleTemplateWithRepositoriesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<BatchAssociateApprovalRuleTemplateWithRepositoriesCommandOutput> {
    return deserializeAws_json1_1BatchAssociateApprovalRuleTemplateWithRepositoriesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
