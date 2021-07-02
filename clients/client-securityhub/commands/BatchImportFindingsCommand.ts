import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";
import { BatchImportFindingsRequest, BatchImportFindingsResponse } from "../models/models_1";
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

export interface BatchImportFindingsCommandInput extends BatchImportFindingsRequest {}
export interface BatchImportFindingsCommandOutput extends BatchImportFindingsResponse, __MetadataBearer {}

/**
 * <p>Imports security findings generated from an integrated product into Security Hub.
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
 *                   <code>Note</code>
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
 *          <p>Finding providers also should not use <code>BatchImportFindings</code> to update the following attributes.</p>
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
 *          </ul>
 *          <p>Instead, finding providers use <code>FindingProviderFields</code> to provide values for these attributes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, BatchImportFindingsCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, BatchImportFindingsCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const command = new BatchImportFindingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchImportFindingsCommandInput} for command's `input` shape.
 * @see {@link BatchImportFindingsCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for command's `input` shape.
 *
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
