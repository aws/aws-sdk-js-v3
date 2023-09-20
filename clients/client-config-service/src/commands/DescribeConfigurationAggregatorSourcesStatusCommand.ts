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
  DescribeConfigurationAggregatorSourcesStatusRequest,
  DescribeConfigurationAggregatorSourcesStatusResponse,
} from "../models/models_0";
import {
  de_DescribeConfigurationAggregatorSourcesStatusCommand,
  se_DescribeConfigurationAggregatorSourcesStatusCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeConfigurationAggregatorSourcesStatusCommand}.
 */
export interface DescribeConfigurationAggregatorSourcesStatusCommandInput
  extends DescribeConfigurationAggregatorSourcesStatusRequest {}
/**
 * @public
 *
 * The output of {@link DescribeConfigurationAggregatorSourcesStatusCommand}.
 */
export interface DescribeConfigurationAggregatorSourcesStatusCommandOutput
  extends DescribeConfigurationAggregatorSourcesStatusResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns status information for sources within an aggregator.
 * 			The status includes information about the last time Config verified authorization between the source account and an aggregator account. In case of a failure, the status contains the related error code or message. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DescribeConfigurationAggregatorSourcesStatusCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DescribeConfigurationAggregatorSourcesStatusCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const input = { // DescribeConfigurationAggregatorSourcesStatusRequest
 *   ConfigurationAggregatorName: "STRING_VALUE", // required
 *   UpdateStatus: [ // AggregatedSourceStatusTypeList
 *     "FAILED" || "SUCCEEDED" || "OUTDATED",
 *   ],
 *   NextToken: "STRING_VALUE",
 *   Limit: Number("int"),
 * };
 * const command = new DescribeConfigurationAggregatorSourcesStatusCommand(input);
 * const response = await client.send(command);
 * // { // DescribeConfigurationAggregatorSourcesStatusResponse
 * //   AggregatedSourceStatusList: [ // AggregatedSourceStatusList
 * //     { // AggregatedSourceStatus
 * //       SourceId: "STRING_VALUE",
 * //       SourceType: "ACCOUNT" || "ORGANIZATION",
 * //       AwsRegion: "STRING_VALUE",
 * //       LastUpdateStatus: "FAILED" || "SUCCEEDED" || "OUTDATED",
 * //       LastUpdateTime: new Date("TIMESTAMP"),
 * //       LastErrorCode: "STRING_VALUE",
 * //       LastErrorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeConfigurationAggregatorSourcesStatusCommandInput - {@link DescribeConfigurationAggregatorSourcesStatusCommandInput}
 * @returns {@link DescribeConfigurationAggregatorSourcesStatusCommandOutput}
 * @see {@link DescribeConfigurationAggregatorSourcesStatusCommandInput} for command's `input` shape.
 * @see {@link DescribeConfigurationAggregatorSourcesStatusCommandOutput} for command's `response` shape.
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
export class DescribeConfigurationAggregatorSourcesStatusCommand extends $Command<
  DescribeConfigurationAggregatorSourcesStatusCommandInput,
  DescribeConfigurationAggregatorSourcesStatusCommandOutput,
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
  constructor(readonly input: DescribeConfigurationAggregatorSourcesStatusCommandInput) {
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
    DescribeConfigurationAggregatorSourcesStatusCommandInput,
    DescribeConfigurationAggregatorSourcesStatusCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        DescribeConfigurationAggregatorSourcesStatusCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConfigServiceClient";
    const commandName = "DescribeConfigurationAggregatorSourcesStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "StarlingDoveService",
        operation: "DescribeConfigurationAggregatorSourcesStatus",
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
    input: DescribeConfigurationAggregatorSourcesStatusCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeConfigurationAggregatorSourcesStatusCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeConfigurationAggregatorSourcesStatusCommandOutput> {
    return de_DescribeConfigurationAggregatorSourcesStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
