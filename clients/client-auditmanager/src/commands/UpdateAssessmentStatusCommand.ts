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
import { UpdateAssessmentStatusRequest, UpdateAssessmentStatusResponse } from "../models/models_0";
import { de_UpdateAssessmentStatusCommand, se_UpdateAssessmentStatusCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link UpdateAssessmentStatusCommand}.
 */
export interface UpdateAssessmentStatusCommandInput extends UpdateAssessmentStatusRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAssessmentStatusCommand}.
 */
export interface UpdateAssessmentStatusCommandOutput extends UpdateAssessmentStatusResponse, __MetadataBearer {}

/**
 * @public
 * <p> Updates the status of an assessment in Audit Manager. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, UpdateAssessmentStatusCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, UpdateAssessmentStatusCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const input = { // UpdateAssessmentStatusRequest
 *   assessmentId: "STRING_VALUE", // required
 *   status: "ACTIVE" || "INACTIVE", // required
 * };
 * const command = new UpdateAssessmentStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param UpdateAssessmentStatusCommandInput - {@link UpdateAssessmentStatusCommandInput}
 * @returns {@link UpdateAssessmentStatusCommandOutput}
 * @see {@link UpdateAssessmentStatusCommandInput} for command's `input` shape.
 * @see {@link UpdateAssessmentStatusCommandOutput} for command's `response` shape.
 * @see {@link AuditManagerClientResolvedConfig | config} for AuditManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> Your account isn't registered with Audit Manager. Check the delegated
 *          administrator setup on the Audit Manager settings page, and try again. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> An internal service error occurred during the processing of your request. Try again
 *          later. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p> The resource that's specified in the request can't be found. </p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>You've reached your account quota for this resource type. To perform the requested
 *          action, delete some existing resources or <a href="https://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html">request a quota increase</a> from
 *          the Service Quotas console. For a list of Audit Manager service quotas, see <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/service-quotas.html">Quotas and
 *             restrictions for Audit Manager</a>.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> The request has invalid or missing parameters. </p>
 *
 *
 */
export class UpdateAssessmentStatusCommand extends $Command<
  UpdateAssessmentStatusCommandInput,
  UpdateAssessmentStatusCommandOutput,
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

  /**
   * @public
   */
  constructor(readonly input: UpdateAssessmentStatusCommandInput) {
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
  ): Handler<UpdateAssessmentStatusCommandInput, UpdateAssessmentStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateAssessmentStatusCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AuditManagerClient";
    const commandName = "UpdateAssessmentStatusCommand";
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
  private serialize(input: UpdateAssessmentStatusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateAssessmentStatusCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateAssessmentStatusCommandOutput> {
    return de_UpdateAssessmentStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
