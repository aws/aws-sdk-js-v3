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
  ListOrganizationRecommendationAccountsRequest,
  ListOrganizationRecommendationAccountsResponse,
  ListOrganizationRecommendationAccountsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  de_ListOrganizationRecommendationAccountsCommand,
  se_ListOrganizationRecommendationAccountsCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, TrustedAdvisorClientResolvedConfig } from "../TrustedAdvisorClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListOrganizationRecommendationAccountsCommand}.
 */
export interface ListOrganizationRecommendationAccountsCommandInput
  extends ListOrganizationRecommendationAccountsRequest {}
/**
 * @public
 *
 * The output of {@link ListOrganizationRecommendationAccountsCommand}.
 */
export interface ListOrganizationRecommendationAccountsCommandOutput
  extends ListOrganizationRecommendationAccountsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Lists the accounts that own the resources for an organization aggregate recommendation. This API only
 *             supports prioritized recommendations.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TrustedAdvisorClient, ListOrganizationRecommendationAccountsCommand } from "@aws-sdk/client-trustedadvisor"; // ES Modules import
 * // const { TrustedAdvisorClient, ListOrganizationRecommendationAccountsCommand } = require("@aws-sdk/client-trustedadvisor"); // CommonJS import
 * const client = new TrustedAdvisorClient(config);
 * const input = { // ListOrganizationRecommendationAccountsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   organizationRecommendationIdentifier: "STRING_VALUE", // required
 *   affectedAccountId: "STRING_VALUE",
 * };
 * const command = new ListOrganizationRecommendationAccountsCommand(input);
 * const response = await client.send(command);
 * // { // ListOrganizationRecommendationAccountsResponse
 * //   nextToken: "STRING_VALUE",
 * //   accountRecommendationLifecycleSummaries: [ // AccountRecommendationLifecycleSummaryList // required
 * //     { // AccountRecommendationLifecycleSummary
 * //       accountId: "STRING_VALUE",
 * //       accountRecommendationArn: "STRING_VALUE",
 * //       lifecycleStage: "in_progress" || "pending_response" || "dismissed" || "resolved",
 * //       updatedOnBehalfOf: "STRING_VALUE",
 * //       updatedOnBehalfOfJobTitle: "STRING_VALUE",
 * //       updateReason: "STRING_VALUE",
 * //       updateReasonCode: "non_critical_account" || "temporary_account" || "valid_business_case" || "other_methods_available" || "low_priority" || "not_applicable" || "other",
 * //       lastUpdatedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListOrganizationRecommendationAccountsCommandInput - {@link ListOrganizationRecommendationAccountsCommandInput}
 * @returns {@link ListOrganizationRecommendationAccountsCommandOutput}
 * @see {@link ListOrganizationRecommendationAccountsCommandInput} for command's `input` shape.
 * @see {@link ListOrganizationRecommendationAccountsCommandOutput} for command's `response` shape.
 * @see {@link TrustedAdvisorClientResolvedConfig | config} for TrustedAdvisorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Exception that access has been denied due to insufficient access</p>
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
export class ListOrganizationRecommendationAccountsCommand extends $Command<
  ListOrganizationRecommendationAccountsCommandInput,
  ListOrganizationRecommendationAccountsCommandOutput,
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
  constructor(readonly input: ListOrganizationRecommendationAccountsCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: TrustedAdvisorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListOrganizationRecommendationAccountsCommandInput, ListOrganizationRecommendationAccountsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListOrganizationRecommendationAccountsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TrustedAdvisorClient";
    const commandName = "ListOrganizationRecommendationAccountsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: ListOrganizationRecommendationAccountsResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "TrustedAdvisor",
        operation: "ListOrganizationRecommendationAccounts",
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
    input: ListOrganizationRecommendationAccountsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ListOrganizationRecommendationAccountsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListOrganizationRecommendationAccountsCommandOutput> {
    return de_ListOrganizationRecommendationAccountsCommand(output, context);
  }
}
