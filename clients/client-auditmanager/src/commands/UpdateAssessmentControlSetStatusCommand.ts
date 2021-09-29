import { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient";
import { UpdateAssessmentControlSetStatusRequest, UpdateAssessmentControlSetStatusResponse } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateAssessmentControlSetStatusCommand,
  serializeAws_restJson1UpdateAssessmentControlSetStatusCommand,
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

export interface UpdateAssessmentControlSetStatusCommandInput extends UpdateAssessmentControlSetStatusRequest {}
export interface UpdateAssessmentControlSetStatusCommandOutput
  extends UpdateAssessmentControlSetStatusResponse,
    __MetadataBearer {}

/**
 * <p>
 *    Updates the status of a control set in an Audit Manager assessment.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, UpdateAssessmentControlSetStatusCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, UpdateAssessmentControlSetStatusCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const command = new UpdateAssessmentControlSetStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateAssessmentControlSetStatusCommandInput} for command's `input` shape.
 * @see {@link UpdateAssessmentControlSetStatusCommandOutput} for command's `response` shape.
 * @see {@link AuditManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateAssessmentControlSetStatusCommand extends $Command<
  UpdateAssessmentControlSetStatusCommandInput,
  UpdateAssessmentControlSetStatusCommandOutput,
  AuditManagerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateAssessmentControlSetStatusCommandInput) {
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
  ): Handler<UpdateAssessmentControlSetStatusCommandInput, UpdateAssessmentControlSetStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AuditManagerClient";
    const commandName = "UpdateAssessmentControlSetStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateAssessmentControlSetStatusRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateAssessmentControlSetStatusResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: UpdateAssessmentControlSetStatusCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateAssessmentControlSetStatusCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateAssessmentControlSetStatusCommandOutput> {
    return deserializeAws_restJson1UpdateAssessmentControlSetStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
