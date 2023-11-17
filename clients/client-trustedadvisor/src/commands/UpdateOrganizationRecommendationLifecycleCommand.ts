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

import {
  UpdateOrganizationRecommendationLifecycleRequest,
  UpdateOrganizationRecommendationLifecycleRequestFilterSensitiveLog,
} from "../models/models_0";
import {
  de_UpdateOrganizationRecommendationLifecycleCommand,
  se_UpdateOrganizationRecommendationLifecycleCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, TrustedAdvisorClientResolvedConfig } from "../TrustedAdvisorClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateOrganizationRecommendationLifecycleCommand}.
 */
export interface UpdateOrganizationRecommendationLifecycleCommandInput
  extends UpdateOrganizationRecommendationLifecycleRequest {}
/**
 * @public
 *
 * The output of {@link UpdateOrganizationRecommendationLifecycleCommand}.
 */
export interface UpdateOrganizationRecommendationLifecycleCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Update the lifecyle of a Recommendation within an Organization. This API only supports prioritized
 *             recommendations.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TrustedAdvisorClient, UpdateOrganizationRecommendationLifecycleCommand } from "@aws-sdk/client-trustedadvisor"; // ES Modules import
 * // const { TrustedAdvisorClient, UpdateOrganizationRecommendationLifecycleCommand } = require("@aws-sdk/client-trustedadvisor"); // CommonJS import
 * const client = new TrustedAdvisorClient(config);
 * const input = { // UpdateOrganizationRecommendationLifecycleRequest
 *   lifecycleStage: "pending_response" || "in_progress" || "dismissed" || "resolved", // required
 *   updateReason: "STRING_VALUE",
 *   updateReasonCode: "non_critical_account" || "temporary_account" || "valid_business_case" || "other_methods_available" || "low_priority" || "not_applicable" || "other",
 *   organizationRecommendationIdentifier: "STRING_VALUE", // required
 * };
 * const command = new UpdateOrganizationRecommendationLifecycleCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateOrganizationRecommendationLifecycleCommandInput - {@link UpdateOrganizationRecommendationLifecycleCommandInput}
 * @returns {@link UpdateOrganizationRecommendationLifecycleCommandOutput}
 * @see {@link UpdateOrganizationRecommendationLifecycleCommandInput} for command's `input` shape.
 * @see {@link UpdateOrganizationRecommendationLifecycleCommandOutput} for command's `response` shape.
 * @see {@link TrustedAdvisorClientResolvedConfig | config} for TrustedAdvisorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Exception that access has been denied due to insufficient access</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Exception that the request was denied due to conflictions in state</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Exception to notify that an unexpected internal error occurred during processing of the request</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Exception that the requested resource has not been found</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Exception to notify that requests are being throttled</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Exception that the request failed to satisfy service constraints</p>
 *
 * @throws {@link TrustedAdvisorServiceException}
 * <p>Base exception class for all service exceptions from TrustedAdvisor service.</p>
 *
 */
export class UpdateOrganizationRecommendationLifecycleCommand extends $Command<
  UpdateOrganizationRecommendationLifecycleCommandInput,
  UpdateOrganizationRecommendationLifecycleCommandOutput,
  TrustedAdvisorClientResolvedConfig
> {
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
  constructor(readonly input: UpdateOrganizationRecommendationLifecycleCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: TrustedAdvisorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    UpdateOrganizationRecommendationLifecycleCommandInput,
    UpdateOrganizationRecommendationLifecycleCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        UpdateOrganizationRecommendationLifecycleCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TrustedAdvisorClient";
    const commandName = "UpdateOrganizationRecommendationLifecycleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateOrganizationRecommendationLifecycleRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "TrustedAdvisor",
        operation: "UpdateOrganizationRecommendationLifecycle",
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
    input: UpdateOrganizationRecommendationLifecycleCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_UpdateOrganizationRecommendationLifecycleCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateOrganizationRecommendationLifecycleCommandOutput> {
    return de_UpdateOrganizationRecommendationLifecycleCommand(output, context);
  }
}
