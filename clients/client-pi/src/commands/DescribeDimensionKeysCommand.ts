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

import { DescribeDimensionKeysRequest, DescribeDimensionKeysResponse } from "../models/models_0";
import { PIClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PIClient";
import { de_DescribeDimensionKeysCommand, se_DescribeDimensionKeysCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeDimensionKeysCommand}.
 */
export interface DescribeDimensionKeysCommandInput extends DescribeDimensionKeysRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDimensionKeysCommand}.
 */
export interface DescribeDimensionKeysCommandOutput extends DescribeDimensionKeysResponse, __MetadataBearer {}

/**
 * @public
 * <p>For a specific time period, retrieve the top <code>N</code> dimension keys for a metric.
 *       </p>
 *          <note>
 *             <p>Each response element returns a maximum of 500 bytes. For larger elements, such as SQL statements,
 *         only the first 500 bytes are returned.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PIClient, DescribeDimensionKeysCommand } from "@aws-sdk/client-pi"; // ES Modules import
 * // const { PIClient, DescribeDimensionKeysCommand } = require("@aws-sdk/client-pi"); // CommonJS import
 * const client = new PIClient(config);
 * const input = { // DescribeDimensionKeysRequest
 *   ServiceType: "RDS" || "DOCDB", // required
 *   Identifier: "STRING_VALUE", // required
 *   StartTime: new Date("TIMESTAMP"), // required
 *   EndTime: new Date("TIMESTAMP"), // required
 *   Metric: "STRING_VALUE", // required
 *   PeriodInSeconds: Number("int"),
 *   GroupBy: { // DimensionGroup
 *     Group: "STRING_VALUE", // required
 *     Dimensions: [ // RequestStringList
 *       "STRING_VALUE",
 *     ],
 *     Limit: Number("int"),
 *   },
 *   AdditionalMetrics: [ // AdditionalMetricsList
 *     "STRING_VALUE",
 *   ],
 *   PartitionBy: {
 *     Group: "STRING_VALUE", // required
 *     Dimensions: [
 *       "STRING_VALUE",
 *     ],
 *     Limit: Number("int"),
 *   },
 *   Filter: { // MetricQueryFilterMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeDimensionKeysCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDimensionKeysResponse
 * //   AlignedStartTime: new Date("TIMESTAMP"),
 * //   AlignedEndTime: new Date("TIMESTAMP"),
 * //   PartitionKeys: [ // ResponsePartitionKeyList
 * //     { // ResponsePartitionKey
 * //       Dimensions: { // DimensionMap // required
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   Keys: [ // DimensionKeyDescriptionList
 * //     { // DimensionKeyDescription
 * //       Dimensions: {
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       Total: Number("double"),
 * //       AdditionalMetrics: { // AdditionalMetricsMap
 * //         "<keys>": Number("double"),
 * //       },
 * //       Partitions: [ // MetricValuesList
 * //         Number("double"),
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeDimensionKeysCommandInput - {@link DescribeDimensionKeysCommandInput}
 * @returns {@link DescribeDimensionKeysCommandOutput}
 * @see {@link DescribeDimensionKeysCommandInput} for command's `input` shape.
 * @see {@link DescribeDimensionKeysCommandOutput} for command's `response` shape.
 * @see {@link PIClientResolvedConfig | config} for PIClient's `config` shape.
 *
 * @throws {@link InternalServiceError} (server fault)
 *  <p>The request failed due to an unknown error.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>One of the arguments provided is invalid for this request.</p>
 *
 * @throws {@link NotAuthorizedException} (client fault)
 *  <p>The user is not authorized to perform this request.</p>
 *
 * @throws {@link PIServiceException}
 * <p>Base exception class for all service exceptions from PI service.</p>
 *
 */
export class DescribeDimensionKeysCommand extends $Command<
  DescribeDimensionKeysCommandInput,
  DescribeDimensionKeysCommandOutput,
  PIClientResolvedConfig
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
  constructor(readonly input: DescribeDimensionKeysCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PIClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeDimensionKeysCommandInput, DescribeDimensionKeysCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeDimensionKeysCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PIClient";
    const commandName = "DescribeDimensionKeysCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "PerformanceInsightsv20180227",
        operation: "DescribeDimensionKeys",
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
  private serialize(input: DescribeDimensionKeysCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeDimensionKeysCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeDimensionKeysCommandOutput> {
    return de_DescribeDimensionKeysCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
