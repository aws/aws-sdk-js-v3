import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";
import { BatchUpdateFindingsRequest, BatchUpdateFindingsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1BatchUpdateFindingsCommand,
  serializeAws_restJson1BatchUpdateFindingsCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type BatchUpdateFindingsCommandInput = BatchUpdateFindingsRequest;
export type BatchUpdateFindingsCommandOutput = BatchUpdateFindingsResponse & __MetadataBearer;

/**
 * <p>Used by Security Hub customers to update information about their investigation into a finding.
 *          Requested by master accounts or member accounts. Master accounts can update findings for
 *          their account and their member accounts. Member accounts can update findings for their
 *          account.</p>
 *          <p>Updates from <code>BatchUpdateFindings</code> do not affect the value of
 *             <code>UpdatedAt</code> for a finding.</p>
 *          <p>Master and member accounts can use <code>BatchUpdateFindings</code> to update the
 *          following finding fields and objects.</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>Confidence</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Criticality</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Note</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>RelatedFindings</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Severity</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Types</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>UserDefinedFields</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>VerificationState</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Workflow</code>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>You can configure IAM policies to restrict access to fields and field values. For
 *          example, you might not want member accounts to be able to suppress findings or change the
 *          finding severity. See <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/finding-update-batchupdatefindings.html#batchupdatefindings-configure-access">Configuring access to BatchUpdateFindings</a> in the
 *             <i>AWS Security Hub User Guide</i>.</p>
 */
export class BatchUpdateFindingsCommand extends $Command<
  BatchUpdateFindingsCommandInput,
  BatchUpdateFindingsCommandOutput,
  SecurityHubClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: BatchUpdateFindingsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SecurityHubClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchUpdateFindingsCommandInput, BatchUpdateFindingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecurityHubClient";
    const commandName = "BatchUpdateFindingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchUpdateFindingsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: BatchUpdateFindingsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BatchUpdateFindingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1BatchUpdateFindingsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchUpdateFindingsCommandOutput> {
    return deserializeAws_restJson1BatchUpdateFindingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
