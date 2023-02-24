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
  BatchAssociateApprovalRuleTemplateWithRepositoriesInputFilterSensitiveLog,
  BatchAssociateApprovalRuleTemplateWithRepositoriesOutput,
  BatchAssociateApprovalRuleTemplateWithRepositoriesOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1BatchAssociateApprovalRuleTemplateWithRepositoriesCommand,
  serializeAws_json1_1BatchAssociateApprovalRuleTemplateWithRepositoriesCommand,
} from "../protocols/Aws_json1_1";

export interface BatchAssociateApprovalRuleTemplateWithRepositoriesCommandInput
  extends BatchAssociateApprovalRuleTemplateWithRepositoriesInput {}
export interface BatchAssociateApprovalRuleTemplateWithRepositoriesCommandOutput
  extends BatchAssociateApprovalRuleTemplateWithRepositoriesOutput,
    __MetadataBearer {}

/**
 * <p>Creates an association between an approval rule template and one or more specified repositories. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, BatchAssociateApprovalRuleTemplateWithRepositoriesCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, BatchAssociateApprovalRuleTemplateWithRepositoriesCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new BatchAssociateApprovalRuleTemplateWithRepositoriesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchAssociateApprovalRuleTemplateWithRepositoriesCommandInput} for command's `input` shape.
 * @see {@link BatchAssociateApprovalRuleTemplateWithRepositoriesCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for CodeCommitClient's `config` shape.
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
      inputFilterSensitiveLog: BatchAssociateApprovalRuleTemplateWithRepositoriesInputFilterSensitiveLog,
      outputFilterSensitiveLog: BatchAssociateApprovalRuleTemplateWithRepositoriesOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: BatchAssociateApprovalRuleTemplateWithRepositoriesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1BatchAssociateApprovalRuleTemplateWithRepositoriesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<BatchAssociateApprovalRuleTemplateWithRepositoriesCommandOutput> {
    return deserializeAws_json1_1BatchAssociateApprovalRuleTemplateWithRepositoriesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
