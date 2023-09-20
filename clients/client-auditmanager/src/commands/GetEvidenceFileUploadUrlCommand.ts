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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient";
import {
  GetEvidenceFileUploadUrlRequest,
  GetEvidenceFileUploadUrlRequestFilterSensitiveLog,
  GetEvidenceFileUploadUrlResponse,
  GetEvidenceFileUploadUrlResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_GetEvidenceFileUploadUrlCommand, se_GetEvidenceFileUploadUrlCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetEvidenceFileUploadUrlCommand}.
 */
export interface GetEvidenceFileUploadUrlCommandInput extends GetEvidenceFileUploadUrlRequest {}
/**
 * @public
 *
 * The output of {@link GetEvidenceFileUploadUrlCommand}.
 */
export interface GetEvidenceFileUploadUrlCommandOutput extends GetEvidenceFileUploadUrlResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a presigned Amazon S3 URL that can be used to upload a file as manual
 *          evidence. For instructions on how to use this operation, see <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/upload-evidence.html#how-to-upload-manual-evidence-files">Upload a file from your browser </a> in the <i>Audit Manager User
 *             Guide</i>.</p>
 *          <p>The following restrictions apply to this operation:</p>
 *          <ul>
 *             <li>
 *                <p>Maximum size of an individual evidence file: 100 MB</p>
 *             </li>
 *             <li>
 *                <p>Number of daily manual evidence uploads per control: 100</p>
 *             </li>
 *             <li>
 *                <p>Supported file formats: See <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/upload-evidence.html#supported-manual-evidence-files">Supported file types for manual evidence</a> in the <i>Audit Manager User Guide</i>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>For more information about Audit Manager service restrictions, see <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/service-quotas.html">Quotas and
 *             restrictions for Audit Manager</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, GetEvidenceFileUploadUrlCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, GetEvidenceFileUploadUrlCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const input = { // GetEvidenceFileUploadUrlRequest
 *   fileName: "STRING_VALUE", // required
 * };
 * const command = new GetEvidenceFileUploadUrlCommand(input);
 * const response = await client.send(command);
 * // { // GetEvidenceFileUploadUrlResponse
 * //   evidenceFileName: "STRING_VALUE",
 * //   uploadUrl: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetEvidenceFileUploadUrlCommandInput - {@link GetEvidenceFileUploadUrlCommandInput}
 * @returns {@link GetEvidenceFileUploadUrlCommandOutput}
 * @see {@link GetEvidenceFileUploadUrlCommandInput} for command's `input` shape.
 * @see {@link GetEvidenceFileUploadUrlCommandOutput} for command's `response` shape.
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
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> The request has invalid or missing parameters. </p>
 *
 * @throws {@link AuditManagerServiceException}
 * <p>Base exception class for all service exceptions from AuditManager service.</p>
 *
 */
export class GetEvidenceFileUploadUrlCommand extends $Command<
  GetEvidenceFileUploadUrlCommandInput,
  GetEvidenceFileUploadUrlCommandOutput,
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
  constructor(readonly input: GetEvidenceFileUploadUrlCommandInput) {
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
  ): Handler<GetEvidenceFileUploadUrlCommandInput, GetEvidenceFileUploadUrlCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetEvidenceFileUploadUrlCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AuditManagerClient";
    const commandName = "GetEvidenceFileUploadUrlCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetEvidenceFileUploadUrlRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetEvidenceFileUploadUrlResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "BedrockAssessmentManagerLambda",
        operation: "GetEvidenceFileUploadUrl",
      },
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
  private serialize(input: GetEvidenceFileUploadUrlCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetEvidenceFileUploadUrlCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetEvidenceFileUploadUrlCommandOutput> {
    return de_GetEvidenceFileUploadUrlCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
