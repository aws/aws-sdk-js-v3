import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";
import { BatchImportFindingsRequest, BatchImportFindingsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1BatchImportFindingsCommand,
  serializeAws_restJson1BatchImportFindingsCommand,
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

export type BatchImportFindingsCommandInput = BatchImportFindingsRequest;
export type BatchImportFindingsCommandOutput = BatchImportFindingsResponse & __MetadataBearer;

/**
 * <p>Imports security findings generated from an integrated third-party product into Security Hub.
 *          This action is requested by the integrated product to import its findings into
 *          Security Hub.</p>
 *          <p>The maximum allowed size for a finding is 240 Kb. An error is returned for any finding
 *          larger than 240 Kb.</p>
 *          <p>After a finding is created, <code>BatchImportFindings</code> cannot be used to update
 *          the following finding fields and objects, which Security Hub customers use to manage their
 *          investigation workflow.</p>
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
 */
export class BatchImportFindingsCommand extends $Command<
  BatchImportFindingsCommandInput,
  BatchImportFindingsCommandOutput,
  SecurityHubClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: BatchImportFindingsCommandInput) {
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
  ): Handler<BatchImportFindingsCommandInput, BatchImportFindingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecurityHubClient";
    const commandName = "BatchImportFindingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchImportFindingsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: BatchImportFindingsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BatchImportFindingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1BatchImportFindingsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchImportFindingsCommandOutput> {
    return deserializeAws_restJson1BatchImportFindingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
