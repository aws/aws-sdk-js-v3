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

import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { DescribeConfigurationAggregatorsRequest, DescribeConfigurationAggregatorsResponse } from "../models/models_0";
import {
  de_DescribeConfigurationAggregatorsCommand,
  se_DescribeConfigurationAggregatorsCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeConfigurationAggregatorsCommand}.
 */
export interface DescribeConfigurationAggregatorsCommandInput extends DescribeConfigurationAggregatorsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeConfigurationAggregatorsCommand}.
 */
export interface DescribeConfigurationAggregatorsCommandOutput
  extends DescribeConfigurationAggregatorsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns the details of one or more configuration aggregators.
 * 			If the configuration aggregator is not specified, this action
 * 			returns the details for all the configuration aggregators associated
 * 			with the account. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DescribeConfigurationAggregatorsCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DescribeConfigurationAggregatorsCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const input = { // DescribeConfigurationAggregatorsRequest
 *   ConfigurationAggregatorNames: [ // ConfigurationAggregatorNameList
 *     "STRING_VALUE",
 *   ],
 *   NextToken: "STRING_VALUE",
 *   Limit: Number("int"),
 * };
 * const command = new DescribeConfigurationAggregatorsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeConfigurationAggregatorsResponse
 * //   ConfigurationAggregators: [ // ConfigurationAggregatorList
 * //     { // ConfigurationAggregator
 * //       ConfigurationAggregatorName: "STRING_VALUE",
 * //       ConfigurationAggregatorArn: "STRING_VALUE",
 * //       AccountAggregationSources: [ // AccountAggregationSourceList
 * //         { // AccountAggregationSource
 * //           AccountIds: [ // AccountAggregationSourceAccountList // required
 * //             "STRING_VALUE",
 * //           ],
 * //           AllAwsRegions: true || false,
 * //           AwsRegions: [ // AggregatorRegionList
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       ],
 * //       OrganizationAggregationSource: { // OrganizationAggregationSource
 * //         RoleArn: "STRING_VALUE", // required
 * //         AwsRegions: [
 * //           "STRING_VALUE",
 * //         ],
 * //         AllAwsRegions: true || false,
 * //       },
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       LastUpdatedTime: new Date("TIMESTAMP"),
 * //       CreatedBy: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeConfigurationAggregatorsCommandInput - {@link DescribeConfigurationAggregatorsCommandInput}
 * @returns {@link DescribeConfigurationAggregatorsCommandOutput}
 * @see {@link DescribeConfigurationAggregatorsCommandInput} for command's `input` shape.
 * @see {@link DescribeConfigurationAggregatorsCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more of the specified parameters are not valid. Verify
 * 			that your parameters are valid and try again.</p>
 *
 * @throws {@link NoSuchConfigurationAggregatorException} (client fault)
 *  <p>You have specified a configuration aggregator that does not exist.</p>
 *
 * @throws {@link ConfigServiceServiceException}
 * <p>Base exception class for all service exceptions from ConfigService service.</p>
 *
 */
export class DescribeConfigurationAggregatorsCommand extends $Command<
  DescribeConfigurationAggregatorsCommandInput,
  DescribeConfigurationAggregatorsCommandOutput,
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
  constructor(readonly input: DescribeConfigurationAggregatorsCommandInput) {
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
  ): Handler<DescribeConfigurationAggregatorsCommandInput, DescribeConfigurationAggregatorsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeConfigurationAggregatorsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConfigServiceClient";
    const commandName = "DescribeConfigurationAggregatorsCommand";
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
    input: DescribeConfigurationAggregatorsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeConfigurationAggregatorsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeConfigurationAggregatorsCommandOutput> {
    return de_DescribeConfigurationAggregatorsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
