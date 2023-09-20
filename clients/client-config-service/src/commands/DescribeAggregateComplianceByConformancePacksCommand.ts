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

import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import {
  DescribeAggregateComplianceByConformancePacksRequest,
  DescribeAggregateComplianceByConformancePacksResponse,
} from "../models/models_0";
import {
  de_DescribeAggregateComplianceByConformancePacksCommand,
  se_DescribeAggregateComplianceByConformancePacksCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeAggregateComplianceByConformancePacksCommand}.
 */
export interface DescribeAggregateComplianceByConformancePacksCommandInput
  extends DescribeAggregateComplianceByConformancePacksRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAggregateComplianceByConformancePacksCommand}.
 */
export interface DescribeAggregateComplianceByConformancePacksCommandOutput
  extends DescribeAggregateComplianceByConformancePacksResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of the conformance packs and their associated compliance status with the count of compliant and noncompliant Config rules within each
 * 			conformance pack. Also returns the total rule count which includes compliant rules, noncompliant rules, and rules that cannot be evaluated due to insufficient data.</p>
 *          <note>
 *             <p>The results can return an empty result page, but if you have a <code>nextToken</code>, the results are displayed on the next page.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DescribeAggregateComplianceByConformancePacksCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DescribeAggregateComplianceByConformancePacksCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const input = { // DescribeAggregateComplianceByConformancePacksRequest
 *   ConfigurationAggregatorName: "STRING_VALUE", // required
 *   Filters: { // AggregateConformancePackComplianceFilters
 *     ConformancePackName: "STRING_VALUE",
 *     ComplianceType: "COMPLIANT" || "NON_COMPLIANT" || "INSUFFICIENT_DATA",
 *     AccountId: "STRING_VALUE",
 *     AwsRegion: "STRING_VALUE",
 *   },
 *   Limit: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeAggregateComplianceByConformancePacksCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAggregateComplianceByConformancePacksResponse
 * //   AggregateComplianceByConformancePacks: [ // AggregateComplianceByConformancePackList
 * //     { // AggregateComplianceByConformancePack
 * //       ConformancePackName: "STRING_VALUE",
 * //       Compliance: { // AggregateConformancePackCompliance
 * //         ComplianceType: "COMPLIANT" || "NON_COMPLIANT" || "INSUFFICIENT_DATA",
 * //         CompliantRuleCount: Number("int"),
 * //         NonCompliantRuleCount: Number("int"),
 * //         TotalRuleCount: Number("int"),
 * //       },
 * //       AccountId: "STRING_VALUE",
 * //       AwsRegion: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeAggregateComplianceByConformancePacksCommandInput - {@link DescribeAggregateComplianceByConformancePacksCommandInput}
 * @returns {@link DescribeAggregateComplianceByConformancePacksCommandOutput}
 * @see {@link DescribeAggregateComplianceByConformancePacksCommandInput} for command's `input` shape.
 * @see {@link DescribeAggregateComplianceByConformancePacksCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for ConfigServiceClient's `config` shape.
 *
 * @throws {@link InvalidLimitException} (client fault)
 *  <p>The specified limit is outside the allowable range.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The specified next token is not valid. Specify the
 * 				<code>nextToken</code> string that was returned in the previous
 * 			response to get the next page of results.</p>
 *
 * @throws {@link NoSuchConfigurationAggregatorException} (client fault)
 *  <p>You have specified a configuration aggregator that does not exist.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The requested action is not valid.</p>
 *          <p>For PutStoredQuery, you will see this exception if there are missing required fields or if the input value fails the validation, or if you are trying to create more than 300 queries.</p>
 *          <p>For GetStoredQuery, ListStoredQuery, and DeleteStoredQuery you will see this exception if there are missing required fields or if the input value fails the validation.</p>
 *
 * @throws {@link ConfigServiceServiceException}
 * <p>Base exception class for all service exceptions from ConfigService service.</p>
 *
 */
export class DescribeAggregateComplianceByConformancePacksCommand extends $Command<
  DescribeAggregateComplianceByConformancePacksCommandInput,
  DescribeAggregateComplianceByConformancePacksCommandOutput,
  ConfigServiceClientResolvedConfig
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
  constructor(readonly input: DescribeAggregateComplianceByConformancePacksCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConfigServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DescribeAggregateComplianceByConformancePacksCommandInput,
    DescribeAggregateComplianceByConformancePacksCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        DescribeAggregateComplianceByConformancePacksCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConfigServiceClient";
    const commandName = "DescribeAggregateComplianceByConformancePacksCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "StarlingDoveService",
        operation: "DescribeAggregateComplianceByConformancePacks",
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
    input: DescribeAggregateComplianceByConformancePacksCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeAggregateComplianceByConformancePacksCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeAggregateComplianceByConformancePacksCommandOutput> {
    return de_DescribeAggregateComplianceByConformancePacksCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
