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

import { EKSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EKSClient";
import { DescribeInsightRequest, DescribeInsightResponse } from "../models/models_0";
import { de_DescribeInsightCommand, se_DescribeInsightCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeInsightCommand}.
 */
export interface DescribeInsightCommandInput extends DescribeInsightRequest {}
/**
 * @public
 *
 * The output of {@link DescribeInsightCommand}.
 */
export interface DescribeInsightCommandOutput extends DescribeInsightResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns details about an insight that you specify using its ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, DescribeInsightCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, DescribeInsightCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * const client = new EKSClient(config);
 * const input = { // DescribeInsightRequest
 *   clusterName: "STRING_VALUE", // required
 *   id: "STRING_VALUE", // required
 * };
 * const command = new DescribeInsightCommand(input);
 * const response = await client.send(command);
 * // { // DescribeInsightResponse
 * //   insight: { // Insight
 * //     id: "STRING_VALUE",
 * //     name: "STRING_VALUE",
 * //     category: "UPGRADE_READINESS",
 * //     kubernetesVersion: "STRING_VALUE",
 * //     lastRefreshTime: new Date("TIMESTAMP"),
 * //     lastTransitionTime: new Date("TIMESTAMP"),
 * //     description: "STRING_VALUE",
 * //     insightStatus: { // InsightStatus
 * //       status: "PASSING" || "WARNING" || "ERROR" || "UNKNOWN",
 * //       reason: "STRING_VALUE",
 * //     },
 * //     recommendation: "STRING_VALUE",
 * //     additionalInfo: { // AdditionalInfoMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     resources: [ // InsightResourceDetails
 * //       { // InsightResourceDetail
 * //         insightStatus: {
 * //           status: "PASSING" || "WARNING" || "ERROR" || "UNKNOWN",
 * //           reason: "STRING_VALUE",
 * //         },
 * //         kubernetesResourceUri: "STRING_VALUE",
 * //         arn: "STRING_VALUE",
 * //       },
 * //     ],
 * //     categorySpecificSummary: { // InsightCategorySpecificSummary
 * //       deprecationDetails: [ // DeprecationDetails
 * //         { // DeprecationDetail
 * //           usage: "STRING_VALUE",
 * //           replacedWith: "STRING_VALUE",
 * //           stopServingVersion: "STRING_VALUE",
 * //           startServingReplacementVersion: "STRING_VALUE",
 * //           clientStats: [ // ClientStats
 * //             { // ClientStat
 * //               userAgent: "STRING_VALUE",
 * //               numberOfRequestsLast30Days: Number("int"),
 * //               lastRequestTime: new Date("TIMESTAMP"),
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeInsightCommandInput - {@link DescribeInsightCommandInput}
 * @returns {@link DescribeInsightCommandOutput}
 * @see {@link DescribeInsightCommandInput} for command's `input` shape.
 * @see {@link DescribeInsightCommandOutput} for command's `response` shape.
 * @see {@link EKSClientResolvedConfig | config} for EKSClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter is invalid. Review the available parameters for the API
 *             request.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is invalid given the state of the cluster. Check the state of the cluster
 *             and the associated operations.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource could not be found. You can view your available clusters with
 *                 <code>ListClusters</code>. You can view your available managed node groups with
 *                 <code>ListNodegroups</code>. Amazon EKS clusters and node groups are Amazon Web Services Region specific.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server-side issue.</p>
 *
 * @throws {@link EKSServiceException}
 * <p>Base exception class for all service exceptions from EKS service.</p>
 *
 */
export class DescribeInsightCommand extends $Command<
  DescribeInsightCommandInput,
  DescribeInsightCommandOutput,
  EKSClientResolvedConfig
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
  constructor(readonly input: DescribeInsightCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EKSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeInsightCommandInput, DescribeInsightCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeInsightCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EKSClient";
    const commandName = "DescribeInsightCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSWesleyFrontend",
        operation: "DescribeInsight",
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
  private serialize(input: DescribeInsightCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeInsightCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeInsightCommandOutput> {
    return de_DescribeInsightCommand(output, context);
  }
}
