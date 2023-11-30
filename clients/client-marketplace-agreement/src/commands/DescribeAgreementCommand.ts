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
  MarketplaceAgreementClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MarketplaceAgreementClient";
import { DescribeAgreementInput, DescribeAgreementOutput } from "../models/models_0";
import { de_DescribeAgreementCommand, se_DescribeAgreementCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeAgreementCommand}.
 */
export interface DescribeAgreementCommandInput extends DescribeAgreementInput {}
/**
 * @public
 *
 * The output of {@link DescribeAgreementCommand}.
 */
export interface DescribeAgreementCommandOutput extends DescribeAgreementOutput, __MetadataBearer {}

/**
 * @public
 * <p>Provides details about an agreement, such as the proposer, acceptor, start date, and end date.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MarketplaceAgreementClient, DescribeAgreementCommand } from "@aws-sdk/client-marketplace-agreement"; // ES Modules import
 * // const { MarketplaceAgreementClient, DescribeAgreementCommand } = require("@aws-sdk/client-marketplace-agreement"); // CommonJS import
 * const client = new MarketplaceAgreementClient(config);
 * const input = { // DescribeAgreementInput
 *   agreementId: "STRING_VALUE", // required
 * };
 * const command = new DescribeAgreementCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAgreementOutput
 * //   agreementId: "STRING_VALUE",
 * //   acceptor: { // Acceptor
 * //     accountId: "STRING_VALUE",
 * //   },
 * //   proposer: { // Proposer
 * //     accountId: "STRING_VALUE",
 * //   },
 * //   startTime: new Date("TIMESTAMP"),
 * //   endTime: new Date("TIMESTAMP"),
 * //   acceptanceTime: new Date("TIMESTAMP"),
 * //   agreementType: "STRING_VALUE",
 * //   estimatedCharges: { // EstimatedCharges
 * //     currencyCode: "STRING_VALUE",
 * //     agreementValue: "STRING_VALUE",
 * //   },
 * //   proposalSummary: { // ProposalSummary
 * //     resources: [ // Resources
 * //       { // Resource
 * //         id: "STRING_VALUE",
 * //         type: "STRING_VALUE",
 * //       },
 * //     ],
 * //     offerId: "STRING_VALUE",
 * //   },
 * //   status: "ACTIVE" || "ARCHIVED" || "CANCELLED" || "EXPIRED" || "RENEWED" || "REPLACED" || "ROLLED_BACK" || "SUPERSEDED" || "TERMINATED",
 * // };
 *
 * ```
 *
 * @param DescribeAgreementCommandInput - {@link DescribeAgreementCommandInput}
 * @returns {@link DescribeAgreementCommandOutput}
 * @see {@link DescribeAgreementCommandInput} for command's `input` shape.
 * @see {@link DescribeAgreementCommandOutput} for command's `response` shape.
 * @see {@link MarketplaceAgreementClientResolvedConfig | config} for MarketplaceAgreementClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error during processing of request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource which does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the service.</p>
 *
 * @throws {@link MarketplaceAgreementServiceException}
 * <p>Base exception class for all service exceptions from MarketplaceAgreement service.</p>
 *
 */
export class DescribeAgreementCommand extends $Command<
  DescribeAgreementCommandInput,
  DescribeAgreementCommandOutput,
  MarketplaceAgreementClientResolvedConfig
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
  constructor(readonly input: DescribeAgreementCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MarketplaceAgreementClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeAgreementCommandInput, DescribeAgreementCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeAgreementCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MarketplaceAgreementClient";
    const commandName = "DescribeAgreementCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSMPCommerceService_v20200301",
        operation: "DescribeAgreement",
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
  private serialize(input: DescribeAgreementCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeAgreementCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeAgreementCommandOutput> {
    return de_DescribeAgreementCommand(output, context);
  }
}
