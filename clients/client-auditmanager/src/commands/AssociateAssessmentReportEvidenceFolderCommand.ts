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
  AssociateAssessmentReportEvidenceFolderRequest,
  AssociateAssessmentReportEvidenceFolderRequestFilterSensitiveLog,
  AssociateAssessmentReportEvidenceFolderResponse,
  AssociateAssessmentReportEvidenceFolderResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1AssociateAssessmentReportEvidenceFolderCommand,
  serializeAws_restJson1AssociateAssessmentReportEvidenceFolderCommand,
} from "../protocols/Aws_restJson1";

export interface AssociateAssessmentReportEvidenceFolderCommandInput
  extends AssociateAssessmentReportEvidenceFolderRequest {}
export interface AssociateAssessmentReportEvidenceFolderCommandOutput
  extends AssociateAssessmentReportEvidenceFolderResponse,
    __MetadataBearer {}

/**
 * <p> Associates an evidence folder to an assessment report in an Audit Manager
 *          assessment. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, AssociateAssessmentReportEvidenceFolderCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, AssociateAssessmentReportEvidenceFolderCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const command = new AssociateAssessmentReportEvidenceFolderCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateAssessmentReportEvidenceFolderCommandInput} for command's `input` shape.
 * @see {@link AssociateAssessmentReportEvidenceFolderCommandOutput} for command's `response` shape.
 * @see {@link AuditManagerClientResolvedConfig | config} for AuditManagerClient's `config` shape.
 *
 */
export class AssociateAssessmentReportEvidenceFolderCommand extends $Command<
  AssociateAssessmentReportEvidenceFolderCommandInput,
  AssociateAssessmentReportEvidenceFolderCommandOutput,
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

  constructor(readonly input: AssociateAssessmentReportEvidenceFolderCommandInput) {
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
  ): Handler<
    AssociateAssessmentReportEvidenceFolderCommandInput,
    AssociateAssessmentReportEvidenceFolderCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        AssociateAssessmentReportEvidenceFolderCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AuditManagerClient";
    const commandName = "AssociateAssessmentReportEvidenceFolderCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociateAssessmentReportEvidenceFolderRequestFilterSensitiveLog,
      outputFilterSensitiveLog: AssociateAssessmentReportEvidenceFolderResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: AssociateAssessmentReportEvidenceFolderCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1AssociateAssessmentReportEvidenceFolderCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AssociateAssessmentReportEvidenceFolderCommandOutput> {
    return deserializeAws_restJson1AssociateAssessmentReportEvidenceFolderCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
