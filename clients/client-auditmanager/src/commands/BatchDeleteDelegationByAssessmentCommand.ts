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
  BatchDeleteDelegationByAssessmentRequest,
  BatchDeleteDelegationByAssessmentResponse,
  BatchDeleteDelegationByAssessmentResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  de_BatchDeleteDelegationByAssessmentCommand,
  se_BatchDeleteDelegationByAssessmentCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link BatchDeleteDelegationByAssessmentCommand}.
 */
export interface BatchDeleteDelegationByAssessmentCommandInput extends BatchDeleteDelegationByAssessmentRequest {}
/**
 * @public
 *
 * The output of {@link BatchDeleteDelegationByAssessmentCommand}.
 */
export interface BatchDeleteDelegationByAssessmentCommandOutput
  extends BatchDeleteDelegationByAssessmentResponse,
    __MetadataBearer {}

/**
 * @public
 * <p> Deletes a batch of delegations for an assessment in Audit Manager. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, BatchDeleteDelegationByAssessmentCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, BatchDeleteDelegationByAssessmentCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const input = { // BatchDeleteDelegationByAssessmentRequest
 *   delegationIds: [ // DelegationIds // required
 *     "STRING_VALUE",
 *   ],
 *   assessmentId: "STRING_VALUE", // required
 * };
 * const command = new BatchDeleteDelegationByAssessmentCommand(input);
 * const response = await client.send(command);
 * // { // BatchDeleteDelegationByAssessmentResponse
 * //   errors: [ // BatchDeleteDelegationByAssessmentErrors
 * //     { // BatchDeleteDelegationByAssessmentError
 * //       delegationId: "STRING_VALUE",
 * //       errorCode: "STRING_VALUE",
 * //       errorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchDeleteDelegationByAssessmentCommandInput - {@link BatchDeleteDelegationByAssessmentCommandInput}
 * @returns {@link BatchDeleteDelegationByAssessmentCommandOutput}
 * @see {@link BatchDeleteDelegationByAssessmentCommandInput} for command's `input` shape.
 * @see {@link BatchDeleteDelegationByAssessmentCommandOutput} for command's `response` shape.
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
 * @throws {@link ValidationException} (client fault)
 *  <p> The request has invalid or missing parameters. </p>
 *
 * @throws {@link AuditManagerServiceException}
 * <p>Base exception class for all service exceptions from AuditManager service.</p>
 *
 */
export class BatchDeleteDelegationByAssessmentCommand extends $Command<
  BatchDeleteDelegationByAssessmentCommandInput,
  BatchDeleteDelegationByAssessmentCommandOutput,
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchDeleteDelegationByAssessmentCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AuditManagerClient";
    const commandName = "BatchDeleteDelegationByAssessmentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: BatchDeleteDelegationByAssessmentResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "BedrockAssessmentManagerLambda",
        operation: "BatchDeleteDelegationByAssessment",
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
  private serialize(
    input: BatchDeleteDelegationByAssessmentCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_BatchDeleteDelegationByAssessmentCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<BatchDeleteDelegationByAssessmentCommandOutput> {
    return de_BatchDeleteDelegationByAssessmentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
