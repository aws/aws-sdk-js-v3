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
  ListOrganizationRecommendationResourcesRequest,
  ListOrganizationRecommendationResourcesResponse,
} from "../models/models_0";
import {
  de_ListOrganizationRecommendationResourcesCommand,
  se_ListOrganizationRecommendationResourcesCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, TrustedAdvisorClientResolvedConfig } from "../TrustedAdvisorClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListOrganizationRecommendationResourcesCommand}.
 */
export interface ListOrganizationRecommendationResourcesCommandInput
  extends ListOrganizationRecommendationResourcesRequest {}
/**
 * @public
 *
 * The output of {@link ListOrganizationRecommendationResourcesCommand}.
 */
export interface ListOrganizationRecommendationResourcesCommandOutput
  extends ListOrganizationRecommendationResourcesResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>List Resources of a Recommendation within an Organization. This API only supports prioritized
 *             recommendations.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TrustedAdvisorClient, ListOrganizationRecommendationResourcesCommand } from "@aws-sdk/client-trustedadvisor"; // ES Modules import
 * // const { TrustedAdvisorClient, ListOrganizationRecommendationResourcesCommand } = require("@aws-sdk/client-trustedadvisor"); // CommonJS import
 * const client = new TrustedAdvisorClient(config);
 * const input = { // ListOrganizationRecommendationResourcesRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   status: "ok" || "warning" || "error",
 *   regionCode: "STRING_VALUE",
 *   organizationRecommendationIdentifier: "STRING_VALUE", // required
 *   affectedAccountId: "STRING_VALUE",
 * };
 * const command = new ListOrganizationRecommendationResourcesCommand(input);
 * const response = await client.send(command);
 * // { // ListOrganizationRecommendationResourcesResponse
 * //   nextToken: "STRING_VALUE",
 * //   organizationRecommendationResourceSummaries: [ // OrganizationRecommendationResourceSummaryList // required
 * //     { // OrganizationRecommendationResourceSummary
 * //       id: "STRING_VALUE", // required
 * //       arn: "STRING_VALUE", // required
 * //       awsResourceId: "STRING_VALUE", // required
 * //       regionCode: "STRING_VALUE", // required
 * //       status: "ok" || "warning" || "error", // required
 * //       metadata: { // StringMap // required
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       lastUpdatedAt: new Date("TIMESTAMP"), // required
 * //       accountId: "STRING_VALUE",
 * //       recommendationArn: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListOrganizationRecommendationResourcesCommandInput - {@link ListOrganizationRecommendationResourcesCommandInput}
 * @returns {@link ListOrganizationRecommendationResourcesCommandOutput}
 * @see {@link ListOrganizationRecommendationResourcesCommandInput} for command's `input` shape.
 * @see {@link ListOrganizationRecommendationResourcesCommandOutput} for command's `response` shape.
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
export class ListOrganizationRecommendationResourcesCommand extends $Command<
  ListOrganizationRecommendationResourcesCommandInput,
  ListOrganizationRecommendationResourcesCommandOutput,
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
  constructor(readonly input: ListOrganizationRecommendationResourcesCommandInput) {
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
    ListOrganizationRecommendationResourcesCommandInput,
    ListOrganizationRecommendationResourcesCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        ListOrganizationRecommendationResourcesCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TrustedAdvisorClient";
    const commandName = "ListOrganizationRecommendationResourcesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "TrustedAdvisor",
        operation: "ListOrganizationRecommendationResources",
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
    input: ListOrganizationRecommendationResourcesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ListOrganizationRecommendationResourcesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListOrganizationRecommendationResourcesCommandOutput> {
    return de_ListOrganizationRecommendationResourcesCommand(output, context);
  }
}
