// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient";
import { UpdateAssessmentFrameworkShareRequest, UpdateAssessmentFrameworkShareResponse } from "../models/models_0";
import {
  de_UpdateAssessmentFrameworkShareCommand,
  se_UpdateAssessmentFrameworkShareCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateAssessmentFrameworkShareCommand}.
 */
export interface UpdateAssessmentFrameworkShareCommandInput extends UpdateAssessmentFrameworkShareRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAssessmentFrameworkShareCommand}.
 */
export interface UpdateAssessmentFrameworkShareCommandOutput
  extends UpdateAssessmentFrameworkShareResponse,
    __MetadataBearer {}

/**
 * @public
 * <p> Updates a share request for a custom framework in Audit Manager. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, UpdateAssessmentFrameworkShareCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, UpdateAssessmentFrameworkShareCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const input = { // UpdateAssessmentFrameworkShareRequest
 *   requestId: "STRING_VALUE", // required
 *   requestType: "SENT" || "RECEIVED", // required
 *   action: "ACCEPT" || "DECLINE" || "REVOKE", // required
 * };
 * const command = new UpdateAssessmentFrameworkShareCommand(input);
 * const response = await client.send(command);
 * // { // UpdateAssessmentFrameworkShareResponse
 * //   assessmentFrameworkShareRequest: { // AssessmentFrameworkShareRequest
 * //     id: "STRING_VALUE",
 * //     frameworkId: "STRING_VALUE",
 * //     frameworkName: "STRING_VALUE",
 * //     frameworkDescription: "STRING_VALUE",
 * //     status: "ACTIVE" || "REPLICATING" || "SHARED" || "EXPIRING" || "FAILED" || "EXPIRED" || "DECLINED" || "REVOKED",
 * //     sourceAccount: "STRING_VALUE",
 * //     destinationAccount: "STRING_VALUE",
 * //     destinationRegion: "STRING_VALUE",
 * //     expirationTime: new Date("TIMESTAMP"),
 * //     creationTime: new Date("TIMESTAMP"),
 * //     lastUpdated: new Date("TIMESTAMP"),
 * //     comment: "STRING_VALUE",
 * //     standardControlsCount: Number("int"),
 * //     customControlsCount: Number("int"),
 * //     complianceType: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateAssessmentFrameworkShareCommandInput - {@link UpdateAssessmentFrameworkShareCommandInput}
 * @returns {@link UpdateAssessmentFrameworkShareCommandOutput}
 * @see {@link UpdateAssessmentFrameworkShareCommandInput} for command's `input` shape.
 * @see {@link UpdateAssessmentFrameworkShareCommandOutput} for command's `response` shape.
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
 * @throws {@link AuditManagerServiceException}
 * <p>Base exception class for all service exceptions from AuditManager service.</p>
 *
 */
export class UpdateAssessmentFrameworkShareCommand extends $Command<
  UpdateAssessmentFrameworkShareCommandInput,
  UpdateAssessmentFrameworkShareCommandOutput,
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
  constructor(readonly input: UpdateAssessmentFrameworkShareCommandInput) {
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
  ): Handler<UpdateAssessmentFrameworkShareCommandInput, UpdateAssessmentFrameworkShareCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateAssessmentFrameworkShareCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AuditManagerClient";
    const commandName = "UpdateAssessmentFrameworkShareCommand";
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
    input: UpdateAssessmentFrameworkShareCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_UpdateAssessmentFrameworkShareCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateAssessmentFrameworkShareCommandOutput> {
    return de_UpdateAssessmentFrameworkShareCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
