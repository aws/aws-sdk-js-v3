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

import { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient";
import {
  DeleteAssessmentFrameworkRequest,
  DeleteAssessmentFrameworkRequestFilterSensitiveLog,
  DeleteAssessmentFrameworkResponse,
  DeleteAssessmentFrameworkResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DeleteAssessmentFrameworkCommand,
  serializeAws_restJson1DeleteAssessmentFrameworkCommand,
} from "../protocols/Aws_restJson1";

export interface DeleteAssessmentFrameworkCommandInput extends DeleteAssessmentFrameworkRequest {}
export interface DeleteAssessmentFrameworkCommandOutput extends DeleteAssessmentFrameworkResponse, __MetadataBearer {}

/**
 * <p> Deletes a custom framework in Audit Manager. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, DeleteAssessmentFrameworkCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, DeleteAssessmentFrameworkCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const command = new DeleteAssessmentFrameworkCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAssessmentFrameworkCommandInput} for command's `input` shape.
 * @see {@link DeleteAssessmentFrameworkCommandOutput} for command's `response` shape.
 * @see {@link AuditManagerClientResolvedConfig | config} for AuditManagerClient's `config` shape.
 *
 */
export class DeleteAssessmentFrameworkCommand extends $Command<
  DeleteAssessmentFrameworkCommandInput,
  DeleteAssessmentFrameworkCommandOutput,
  AuditManagerClientResolvedConfig
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

  constructor(readonly input: DeleteAssessmentFrameworkCommandInput) {
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
  ): Handler<DeleteAssessmentFrameworkCommandInput, DeleteAssessmentFrameworkCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteAssessmentFrameworkCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AuditManagerClient";
    const commandName = "DeleteAssessmentFrameworkCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteAssessmentFrameworkRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteAssessmentFrameworkResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteAssessmentFrameworkCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteAssessmentFrameworkCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteAssessmentFrameworkCommandOutput> {
    return deserializeAws_restJson1DeleteAssessmentFrameworkCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
