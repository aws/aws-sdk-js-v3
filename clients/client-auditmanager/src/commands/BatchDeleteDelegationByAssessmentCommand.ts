import { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient";
import {
  BatchDeleteDelegationByAssessmentRequest,
  BatchDeleteDelegationByAssessmentResponse,
} from "../models/models_0";
import {
  deserializeAws_restJson1BatchDeleteDelegationByAssessmentCommand,
  serializeAws_restJson1BatchDeleteDelegationByAssessmentCommand,
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

export interface BatchDeleteDelegationByAssessmentCommandInput extends BatchDeleteDelegationByAssessmentRequest {}
export interface BatchDeleteDelegationByAssessmentCommandOutput
  extends BatchDeleteDelegationByAssessmentResponse,
    __MetadataBearer {}

/**
 * <p>
 *          Deletes the delegations in the specified Audit Manager assessment.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, BatchDeleteDelegationByAssessmentCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, BatchDeleteDelegationByAssessmentCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const command = new BatchDeleteDelegationByAssessmentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchDeleteDelegationByAssessmentCommandInput} for command's `input` shape.
 * @see {@link BatchDeleteDelegationByAssessmentCommandOutput} for command's `response` shape.
 * @see {@link AuditManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class BatchDeleteDelegationByAssessmentCommand extends $Command<
  BatchDeleteDelegationByAssessmentCommandInput,
  BatchDeleteDelegationByAssessmentCommandOutput,
  AuditManagerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: BatchDeleteDelegationByAssessmentCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AuditManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchDeleteDelegationByAssessmentCommandInput, BatchDeleteDelegationByAssessmentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AuditManagerClient";
    const commandName = "BatchDeleteDelegationByAssessmentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchDeleteDelegationByAssessmentRequest.filterSensitiveLog,
      outputFilterSensitiveLog: BatchDeleteDelegationByAssessmentResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: BatchDeleteDelegationByAssessmentCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1BatchDeleteDelegationByAssessmentCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<BatchDeleteDelegationByAssessmentCommandOutput> {
    return deserializeAws_restJson1BatchDeleteDelegationByAssessmentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
